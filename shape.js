// compiled from Hot Cocoa Lisp

// Underscore.js
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","    ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(global);var _a_ = Object.keys(_); for (var _b_ = 0; _b_ < _a_.length; _b_++) { if (global[_a_[_b_]] === undefined) { global[_a_[_b_]] = _[_a_[_b_]]; } }var shape;

// (def shape
// 	 { new
// 	   (# (rows cols) (let (new-shape (new this))
// 						(set new-shape.grid (map (range rows)
// 												 (# () (map (range cols)
// 															(# () false)))))
// 						new-shape))
// 	   height (# () this.grid.length)
// 	   width (# () (first this.grid).length)
// 	   get (# (row col) (if (get this.grid row)
// 							(get (get this.grid row) col)
// 						  false))
// 	   set (# (row col value) (set (get (get this.grid row) col) value))
// 	   size (# () (select (flatten this.grid) identity).length)
// 	   string
// 	   (# () ((map this.grid
// 				   (# (row)
// 					  ((map row
// 							(# (value)
// 							   (if value "#" "."))).join "")
// 					  )).join "\n"))
// 	   equivalent-to?
// 	   (# (other-shape) (= (this.string) (other-shape.string)))
// 	   non-empty-rows
// 	   (# ()
// 		  (select (range (this.height))
// 				  (# (n) (any (nth this.grid n)))
// 				  this))
// 	   non-empty-columns
// 	   (# ()
// 		  (select (range (this.width))
// 				  (# (n) (any this.grid
// 							  (# (row) (nth row n))))
// 				  this))
// 	   normalize!
// 	   (# ()
// 		  ;; top
// 		  (when (zero? (min (this.non-empty-rows)))
// 			(this.grid.unshift (map (range (this.width)) (# () false))))
// 		  (while (< 1 (min (this.non-empty-rows)))
// 			(this.grid.shift))
// 		  ;; bottom
// 		  (when (= (--1 (this.height)) (max (this.non-empty-rows)))
// 			(this.grid.push (map (range (this.width)) (# () false))))
// 		  (while (> (- (this.height) 2) (max (this.non-empty-rows)))
// 			(this.grid.pop))
// 		  ;; left
// 		  (when (zero? (min (this.non-empty-columns)))
// 			(for (row this.grid) (row.unshift false)))
// 		  (while (< 1 (min (this.non-empty-rows)))
// 			(for (row this.grid) (row.shift)))
// 		  ;; right
// 		  (when (= (--1 (this.width)) (max (this.non-empty-columns)))
// 			(for (row this.grid) (row.push false)))
// 		  (while (> (- (this.width) 2) (max (this.non-empty-columns)))
// 			(for (row this.grid) (row.pop))))
// 	   rotate
// 	   (# ()
// 		  (let (rotation (this.new (this.width) (this.height)))
// 			(times (col (this.height))
// 				   (times (row (this.width))
// 						  (rotation.set
// 						   row col
// 						   (this.get
// 							col (- (this.width) row 1)))))
// 			rotation))
// 	   rotations
// 	   (# ()
// 		  [ this
// 		    (this.rotate)
// 		    ((this.rotate).rotate)
// 		    (((this.rotate).rotate).rotate) ] )
// 	   allowed-addition?
// 	   (# (row col)
// 		  (and (not (this.get row col))
// 			   (or (this.get (+1 row) col)
// 				   (this.get (--1 row) col)
// 				   (this.get row (+1 col))
// 				   (this.get row (--1 col)))))
// 	   children
// 	   (# ()
// 		  (let (ret [ ] )
// 			(times (row (this.height))
// 				   (times (col (this.width))
// 						  (when (this.allowed-addition? row col)
// 							(let (child (this.new (this.height) (this.width)))
// 							  (times (child-row (this.height))
// 									 (times (child-col (this.width))
// 											(when (or (and (= row child-row)
// 														   (= col child-col))
// 													  (this.get child-row child-col))
// 											  (child.set child-row child-col true))))
// 							  (ret.push child)))))
// 			ret))
//        found []
// 	   unique?
// 	   (# ()
// 		  (not
// 		   (find this.found
// 				 (# (existing-shape)
// 					(find (this.rotations)
// 						  (# (rotation)
// 							 (rotation.equivalent-to? existing-shape))))
// 				 this)))
// 	   add-if-unique
// 	   (# ()
// 		  (this.normalize!)		  
// 		  (when (this.unique?) (this.found.push this)))
// 	   search
// 	   (# (n)
// 		  (cond
// 		   ((zero? n) this.found)
// 		   ((empty? this.found)
// 			(let (first-shape (this.new 1 1))
// 			  (first-shape.set 0 0 true)
// 			  (first-shape.normalize!)
// 			  (this.found.push first-shape)
// 			  (this.search (--1 n))))
// 		   (true
// 			(let (found (map this.found identity))
// 			  (for (parent-shape found)
// 				   (let (children (parent-shape.children))
// 					 (for (child children)
// 						  (child.add-if-unique))))
// 			  (this.search (--1 n))))))
// 	   } )

shape = { "new": (function (rows, cols) {  return (function(new_hyphen_shape) {(new_hyphen_shape["grid"] = map(range(rows), (function () {  return map(range(cols), (function () {  return false; })); }))); return new_hyphen_shape; }).call(this, Object.create(this)); }), "height": (function () {  return this["grid"]["length"]; }), "width": (function () {  return this["grid"][0]["length"]; }), "get": (function (row, col) {  return (this["grid"][row] ? this["grid"][row][col] : false); }), "set": (function (row, col, value) {  return (this["grid"][row][col] = value); }), "size": (function () {  return select(flatten(this["grid"]), identity)["length"]; }), "string": (function () {  return map(this["grid"], (function (row) {  return map(row, (function (value) {  return (value ? "#" : "."); }))["join"](""); }))["join"]("\n"); }), "equivalent-to?": (function (other_hyphen_shape) {  return ((this["string"]() === other_hyphen_shape["string"]())); }), "non-empty-rows": (function () {  return select(range(this["height"]()), (function (n) {  return any(this["grid"][n]); }), this); }), "non-empty-columns": (function () {  return select(range(this["width"]()), (function (n) {  return any(this["grid"], (function (row) {  return row[n]; })); }), this); }), "normalize!": (function () {var _i0_, row, _i1_, _i2_, _i3_; ((min(this["non-empty-rows"]()) === 0) && (function() {  return this["grid"]["unshift"](map(range(this["width"]()), (function () {  return false; }))); }).call(this)); (function() {while (((1 < min(this["non-empty-rows"]())))) { this["grid"]["shift"](); }}).call(this); ((((this["height"]() - 1) === max(this["non-empty-rows"]()))) && (function() {  return this["grid"]["push"](map(range(this["width"]()), (function () {  return false; }))); }).call(this)); (function() {while ((((this["height"]() - 2) > max(this["non-empty-rows"]())))) { this["grid"]["pop"](); }}).call(this); ((min(this["non-empty-columns"]()) === 0) && (function() {  return (function() {for (_i0_ = 0; _i0_ < this["grid"].length; _i0_++) { var row = this["grid"][_i0_]; row["unshift"](false); }}).call(this); }).call(this)); (function() {while (((1 < min(this["non-empty-rows"]())))) { (function() {for (_i1_ = 0; _i1_ < this["grid"].length; _i1_++) { var row = this["grid"][_i1_]; row["shift"](); }}).call(this); }}).call(this); ((((this["width"]() - 1) === max(this["non-empty-columns"]()))) && (function() {  return (function() {for (_i2_ = 0; _i2_ < this["grid"].length; _i2_++) { var row = this["grid"][_i2_]; row["push"](false); }}).call(this); }).call(this)); return (function() {while ((((this["width"]() - 2) > max(this["non-empty-columns"]())))) { (function() {for (_i3_ = 0; _i3_ < this["grid"].length; _i3_++) { var row = this["grid"][_i3_]; row["pop"](); }}).call(this); }}).call(this); }), "rotate": (function () {var col, row;  return (function(rotation) {(function() {for (col = 0; col < this["height"](); col++) { (function() {for (row = 0; row < this["width"](); row++) { rotation["set"](row, col, this["get"](col, (this["width"]() - row - 1))); }}).call(this); }}).call(this); return rotation; }).call(this, this["new"](this["width"](), this["height"]())); }), "rotations": (function () {  return [this, this["rotate"](), this["rotate"]()["rotate"](), this["rotate"]()["rotate"]()["rotate"]()]; }), "allowed-addition?": (function (row, col) {  return ((! this["get"](row, col)) && (this["get"]((row + 1), col) || this["get"]((row - 1), col) || this["get"](row, (col + 1)) || this["get"](row, (col - 1)))); }), "children": (function () {var row, col, child_hyphen_row, child_hyphen_col;  return (function(ret) {(function() {for (row = 0; row < this["height"](); row++) { (function() {for (col = 0; col < this["width"](); col++) { (this["allowed-addition?"](row, col) && (function() {  return (function(child) {(function() {for (child_hyphen_row = 0; child_hyphen_row < this["height"](); child_hyphen_row++) { (function() {for (child_hyphen_col = 0; child_hyphen_col < this["width"](); child_hyphen_col++) { (((((row === child_hyphen_row)) && ((col === child_hyphen_col))) || this["get"](child_hyphen_row, child_hyphen_col)) && (function() {  return child["set"](child_hyphen_row, child_hyphen_col, true); }).call(this)); }}).call(this); }}).call(this); return ret["push"](child); }).call(this, this["new"](this["height"](), this["width"]())); }).call(this)); }}).call(this); }}).call(this); return ret; }).call(this, []); }), "found": [], "unique?": (function () {  return (! find(this["found"], (function (existing_hyphen_shape) {  return find(this["rotations"](), (function (rotation) {  return rotation["equivalent-to?"](existing_hyphen_shape); })); }), this)); }), "add-if-unique": (function () { this["normalize!"](); return (this["unique?"]() && (function() {  return this["found"]["push"](this); }).call(this)); }), "search": (function (n) {var _i0_, parent_hyphen_shape, _i1_, child;  return ((n === 0) ? this["found"] : (this["found"] === null || (this["found"]).length === 0) ? (function(first_hyphen_shape) {first_hyphen_shape["set"](0, 0, true); first_hyphen_shape["normalize!"](); this["found"]["push"](first_hyphen_shape); return this["search"]((n - 1)); }).call(this, this["new"](1, 1)) : true ? (function(found) {(function() {for (_i0_ = 0; _i0_ < found.length; _i0_++) { var parent_hyphen_shape = found[_i0_]; (function(children) { return (function() {for (_i1_ = 0; _i1_ < children.length; _i1_++) { var child = children[_i1_]; child["add-if-unique"](); }}).call(this); }).call(this, parent_hyphen_shape["children"]()); }}).call(this); return this["search"]((n - 1)); }).call(this, map(this["found"], identity)) : undefined); }) };

// (set module.exports shape)

(module["exports"] = shape);