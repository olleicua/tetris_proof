(def shape
	 { new
	   (# (rows cols) (let (new-shape (new this))
						(set new-shape.grid (map (range rows)
												 (# () (map (range cols)
															(# () false)))))
						new-shape))
	   
	   height (# () this.grid.length)
	   width (# () (first this.grid).length)
	   
	   get (# (row col) (if (get this.grid row)
							(get (get this.grid row) col)
						  false))
	   set (# (row col value) (set (get (get this.grid row) col) value))
	   
	   size (# () (select (flatten this.grid) identity).length)
	   
	   string
	   (# () ((map this.grid
				   (# (row)
					  ((map row
							(# (value)
							   (if value "#" "."))).join "")
					  )).join "\n"))
	   
	   equivalent-to?
	   (# (other-shape) (= (this.string) (other-shape.string)))
	   
	   non-empty-rows
	   (# ()
		  (select (range (this.height))
				  (# (n) (any (nth this.grid n)))
				  this))
	   
	   non-empty-columns
	   (# ()
		  (select (range (this.width))
				  (# (n) (any this.grid
							  (# (row) (nth row n))))
				  this))
	   
	   normalize!
	   (# ()
		  ;; top
		  (when (zero? (min (this.non-empty-rows)))
			(this.grid.unshift (map (range (this.width)) (# () false))))
		  (while (< 1 (min (this.non-empty-rows)))
			(this.grid.shift))
	   
		  ;; bottom
		  (when (= (--1 (this.height)) (max (this.non-empty-rows)))
			(this.grid.push (map (range (this.width)) (# () false))))
		  (while (> (- (this.height) 2) (max (this.non-empty-rows)))
			(this.grid.pop))
	   
		  ;; left
		  (when (zero? (min (this.non-empty-columns)))
			(for (row this.grid) (row.unshift false)))
		  (while (< 1 (min (this.non-empty-rows)))
			(for (row this.grid) (row.shift)))
	   
		  ;; right
		  (when (= (--1 (this.width)) (max (this.non-empty-columns)))
			(for (row this.grid) (row.push false)))
		  (while (> (- (this.width) 2) (max (this.non-empty-columns)))
			(for (row this.grid) (row.pop))))
	   
	   rotate
	   (# ()
		  (let (rotation (this.new (this.width) (this.height)))
			(times (col (this.height))
				   (times (row (this.width))
						  (rotation.set
						   row col
						   (this.get
							col (- (this.width) row 1)))))
			rotation))
	   
	   rotations
	   (# ()
		  [ this
		    (this.rotate)
		    ((this.rotate).rotate)
		    (((this.rotate).rotate).rotate) ] )
	   
	   allowed-addition?
	   (# (row col)
		  (and (not (this.get row col))
			   (or (this.get (+1 row) col)
				   (this.get (--1 row) col)
				   (this.get row (+1 col))
				   (this.get row (--1 col)))))
	   
	   children
	   (# ()
		  (let (ret [ ] )
			(times (row (this.height))
				   (times (col (this.width))
						  (when (this.allowed-addition? row col)
							(let (child (this.new (this.height) (this.width)))
							  (times (child-row (this.height))
									 (times (child-col (this.width))
											(when (or (and (= row child-row)
														   (= col child-col))
													  (this.get child-row child-col))
											  (child.set child-row child-col true))))
							  (ret.push child)))))
			ret))
	   
       found []
	   
	   unique?
	   (# ()
		  (not
		   (find this.found
				 (# (existing-shape)
					(find (this.rotations)
						  (# (rotation)
							 (rotation.equivalent-to? existing-shape))))
				 this)))
	   
	   add-if-unique
	   (# ()
		  (this.normalize!)		  
		  (when (this.unique?) (this.found.push this)))
	   
	   search
	   (# (n)
		  (cond
		   ((zero? n) this.found)
		   ((empty? this.found)
			(let (first-shape (this.new 1 1))
			  (first-shape.set 0 0 true)
			  (first-shape.normalize!)
			  (this.found.push first-shape)
			  (this.search (--1 n))))
		   (true
			(let (found (map this.found identity))
			  (for (parent-shape found)
				   (let (children (parent-shape.children))
					 (for (child children)
						  (child.add-if-unique))))
			  (this.search (--1 n))))))
	   
	   } )

(set module.exports shape)