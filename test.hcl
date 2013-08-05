(var shape (load (compile "./shape.hcl")))

(def search (# (n)
			   (var results (select (shape.search n)
									(# (x) (=  n (x.size)))))
			   (for (result results)
					(console.log (result.string) "\n"))
			   
			   (console.log "found" results.length)))

(search 5)
