/*!
 * ActiveTK.js
 * Copyright 2020 ActiveTK. All rights reserved.
 * Released under the MIT license
 * http://ActiveTK.CF/ActiveTK.JS/readme.txt
 */

; {
	"use strict";

	try {
		if (ActiveTK.onload()) location.href = "http://ActiveTK.CF/ActiveTK.JS/Error/0x0001.html";
	} catch (e) { };

	onload = function () {
		try {
			_("body").style = "a{color: #00ff00;position: relative;display: inline-block;transition: .3s;}a::after {position: absolute;bottom: 0;left: 50%;content: '';width: 0;height: 2px;background-color: #31aae2;transition: .3s;transform: translateX(-50%);}a:hover::after{width: 100%;}";
		} catch (e) { };
	}

	let now = new Date();
	let mon = "";
	let regex = "";
	let sleep_starttime = new Date();
	let sleep_newtime = new Date();
	let c_data, n, m, data;
	let c_date, c_limit, ns;
	var ActiveTK = {

		onload: function () {
			return true;
		},

		version: function () {
			return "2020.11.05";
		},

		copyright: function () {
			return "ActiveTK.";
		},

		license: function () {
			return "http://ACTIVETK.CF/ActiveTK.JS/readme.txt";
		}

	}
	var atk = {

		version: function () {
			return ActiveTK.version();
		},

		copyright: function () {
			return ActiveTK.copyright();
		},

		printf: function (msg) {
			console.log(msg);
			return true;
		},

		time: function () {
			now = new Date();
			mon = now.getMonth() + 1;
			return now.getFullYear() + " " + mon + "/" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes();
		},

		dev: function () {
			debugger;
		},

		param: function (name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, '\\$&');
			regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
			if (!results) return void (0);
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
		},

		sleep: function (sleep_stoptime) {
			sleep_newtime = new Date();
			sleep_starttime = new Date();
			while (true) {
				sleep_newtime = new Date();
				if (sleep_newtime - sleep_starttime > sleep_stoptime) {
					break;
				}
			}
			return true;
		},

		Cookie: {

			Use: function () {
				return navigator.cookieEnabled;
			},

			Get: function (c_name) {
				c_data = document.cookie;
				n = c_data.indexOf(c_name, 0);
				if (n > -1) {
					m = c_data.indexOf(";", n + c_name.length);
					if (m == -1) m = c_data.length;
					data = unescape(c_data.substring(n + c_name.length, m));
				} else {
					data = void (0);
				}
				return data;
			},

			Write: function (c_name, c_dada, niti) {
				c_data = escape(c_dada);
				c_name = c_name + '=';
				c_date = new Date();
				ns = c_date.getTime() + 1000 * 60 * 60 * 24 * niti;
				c_date.setTime(ns);
				c_limit = c_date.toGMTString();
				document.cookie = c_name + c_data + "; expires=" + c_limit;
				return true;
			},

			Delete: function (name) {
				this.Write(name, "undefined", 0);
				return true;
			}

		},

		Math: {

			enzn: function (q) {
				if (Number.isFinite(eval(q))) {
					return eval(q);
				}
				else {
					atk.Error('This object is not calculation formula.');
				}
			},

			jyou: function (kazu, jyou) {
				return Math.pow(kazu, jyou);
			},

			zet: function (kazu) {
				return Math.abs(kazu);
			},

			hant: function (kazu) {
				if (Number.isFinite(eval(q))) {
					if ((kazu % 2) != 0) return false;
					else if ((kazu % 2) == 0) return true;
				}
				else {
					atk.Error('This object is not calculation formula.');
				}
			},

		},

		t: function (t) {
			return (t == true) ? false : (t == false) ? true : void (0);
		},

		print: function () {
			window.print();
			return true;
		},

		msgbox: function (msg) {
			alert(msg);
			return true;
		},

		confirm: function (msg) {
			if (confirm(msg)) return true;
			else return false;
		},

		undefined: function () {
			return void (0);
		},

		infinity: function () {
			return this.Math.jyou(1000, 1000);
		},

		encode: function (msg) {
			return encodeURIComponent(msg);
		},

		decode: function (msg) {
			return decodeURIComponent(msg);
		},

		search: function (word) {
			location.href = "https://www.google.com/search?q=" + this.encode(word);
		},

		js: function (file, type, tag) {
			var script = document.createElement('script');
			if (!type) type = "text/javascript";
			if (!tag) tag = "head";
			script.type = type;
			script.src = file;

			document.getElementsByTagName(tag)[0].appendChild(script);

			return true;
		},

		new: function (to, tags, id, name) {
			let tag = document.createElement(tags);
			if (!to) to = "body";
			if (!id) id = "None";
			if (!name) to = "None";
			if (!tags) return false;
			tag.id = id;
			tag.name = name;
			document.getElementsByTagName(to)[0].appendChild(tag);
			return true;
		},

		ua: function () {
			return window.navigator.userAgent.toLowerCase();
		},

		null: function () {
			return null;
		},

		href: function (url) {
			if (!url) return location.href;
			else location.href = url;
		},

		Error: function (msg) {
			throw new Error(msg);
		},

		Java: function () {
			return navigator.javaEnabled();
		},

		copy: function (e) {
			let t = document.createElement("div");
			t.appendChild(document.createElement("pre")).textContent = e;
			let n = t.style; n.position = "fixed", n.left = "-100%",
				document.body.appendChild(t), document.getSelection().selectAllChildren(t);
			let d = document.execCommand("copy"); return document.body.removeChild(t), d
		},

		download: function (e, name) {
			if (!e) return false;
			if (!name) name = "download.txt";
			if ("IE" == platform.name) {
				let n = new XMLHttpRequest;
				n.open("GET", e),
					n.responseType = "blob",
					n.onloadend = function () {
						200 === n.status && window.navigator.msSaveBlob(n.response, name)
					}, n.send();
			}
			else {
				let o = document.createElement("a");
				o.href = e,
					o.download = name,
					document.body.appendChild(o),
					o.click(),
					document.body.removeChild(o)
			}
		}

    }

    var Ease={easeInOut:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},duration=500;addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(t){var n=e.getAttribute("href"),o=document.documentElement.scrollTop||document.body.scrollTop,r=document.getElementById(n.replace("#",""));if(r){t.preventDefault(),t.stopPropagation();var a=pageYOffset+r.getBoundingClientRect().top-115,i=performance.now(),d=function(e){var t=(e-i)/duration;t<1?(scrollTo(0,o+(a-o)*Ease.easeInOut(t)),requestAnimationFrame(d)):window.scrollTo(0,a)};requestAnimationFrame(d)}})})});
    
    function GetRequestType() {
        try {
            return new XMLHttpRequest();
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.6.0');
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.3.0');
        } catch (e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP');
        } catch (e) { }
        return false;
    }

    var tose_xhr = GetRequestType();
    var toses = new Object();

    function tose(type, to, data, retime, name, pass) {

        if (!type) return false;
        else if (!to) to = location.href;
        if (!name) name = "everyone";
        if (!pass) pass = "password";
        if (!retime) retime = 50;

        tose_xhr = GetRequestType();

        tose_xhr.open(type, to, true, name, pass);
        tose_xhr.send(data);

        while (true) {
            if (tose_xhr.readyState == 4) {
                if (tose_xhr.status == 0) {
                    break;
                } else {
                    toses.status = tose_xhr.status;
                    toses.responseText = tose_xhr.responseText;
                    break;
                }
            }
            else {
                atk.sleep(retime);
            }
        }

        return toses;

	}

	function _(id) {
		return document.getElementById(id);
	}

}
/*!
 * ATK.Cookie.js
 * Copyright 2020 ActiveTK. All rights reserved.
 * Released under the MIT license
 */

; {
	"use strict";

	var Cookie = {

		Copyright: function () {
			return "Copyright 2020 ActiveTK. All rights reserved.";
        },

		Use: function () {
			return navigator.cookieEnabled;
		},

		Get: function (c_name) {
			c_data = document.cookie;
			n = c_data.indexOf(c_name, 0);
			if (n > -1) {
				m = c_data.indexOf(";", n + c_name.length);
				if (m == -1) m = c_data.length;
				data = unescape(c_data.substring(n + c_name.length, m));
			} else {
				data = void (0);
			}
			return data;
		},

		Write: function (c_name, c_dada, niti) {
			c_data = escape(c_dada);
			c_name = c_name + '=';
			c_date = new Date();
			ns = c_date.getTime() + 1000 * 60 * 60 * 24 * niti;
			c_date.setTime(ns);
			c_limit = c_date.toGMTString();
			document.cookie = c_name + c_data + "; expires=" + c_limit;
			return true;
		},

		Delete: function (name) {
			this.Write(name, "undefined", 0);
			return true;
		}

	}
}
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function (window, undefined) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var
		// A central reference to the root jQuery(document)
		rootjQuery,

		// The deferred used on DOM ready
		readyList,

		// Support: IE9
		// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
		core_strundefined = typeof undefined,

		// Use the correct document accordingly with window argument (sandbox)
		location = window.location,
		document = window.document,
		docElem = document.documentElement,

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$,

		// [[Class]] -> type pairs
		class2type = {},

		// List of deleted data cache ids, so we can reuse them
		core_deletedIds = [],

		core_version = "2.0.3",

		// Save a reference to some core methods
		core_concat = core_deletedIds.concat,
		core_push = core_deletedIds.push,
		core_slice = core_deletedIds.slice,
		core_indexOf = core_deletedIds.indexOf,
		core_toString = class2type.toString,
		core_hasOwn = class2type.hasOwnProperty,
		core_trim = core_version.trim,

		// Define a local copy of jQuery
		jQuery = function (selector, context) {
			// The jQuery object is actually just the init constructor 'enhanced'
			return new jQuery.fn.init(selector, context, rootjQuery);
		},

		// Used for matching numbers
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

		// Used for splitting on whitespace
		core_rnotwhite = /\S+/g,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		// Match a standalone tag
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		},

		// The ready event handler and self cleanup method
		completed = function () {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
			jQuery.ready();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: core_version,

		constructor: jQuery,
		init: function (selector, context, rootjQuery) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];

				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						jQuery.merge(this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return rootjQuery.ready(selector);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		},

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return core_slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {
			return num == null ?

				// Return a 'clean' array
				this.toArray() :

				// Return just the object
				(num < 0 ? this[this.length + num] : this[num]);
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function (callback, args) {
			return jQuery.each(this, callback, args);
		},

		ready: function (fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		},

		slice: function () {
			return this.pushStack(core_slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
				j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		end: function () {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};

	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function () {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (length === i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),

		noConflict: function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		},

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.trigger) {
				jQuery(document).trigger("ready").off("ready");
			}
		},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function (obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function (obj) {
			return !isNaN(parseFloat(obj)) && isFinite(obj);
		},

		type: function (obj) {
			if (obj == null) {
				return String(obj);
			}
			// Support: Safari <= 5.1 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[core_toString.call(obj)] || "object" :
				typeof obj;
		},

		isPlainObject: function (obj) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			// Support: Firefox <20
			// The try/catch suppresses exceptions thrown when attempting to access
			// the "constructor" property of certain host objects, ie. |window.location|
			// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
			try {
				if (obj.constructor &&
					!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function (obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		error: function (msg) {
			throw new Error(msg);
		},

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		parseHTML: function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
				scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts);

			if (scripts) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		},

		parseJSON: JSON.parse,

		// Cross-browser xml parsing
		parseXML: function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE9
			try {
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		},

		noop: function () { },

		// Evaluates a script in a global context
		globalEval: function (code) {
			var script,
				indirect = eval;

			code = jQuery.trim(code);

			if (code) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if (code.indexOf("use strict") === 1) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild(script).parentNode.removeChild(script);
				} else {
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
					indirect(code);
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function (obj, callback, args) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		trim: function (text) {
			return text == null ? "" : core_trim.call(text);
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret,
						typeof arr === "string" ?
							[arr] : arr
					);
				} else {
					core_push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			return arr == null ? -1 : core_indexOf.call(arr, elem, i);
		},

		merge: function (first, second) {
			var l = second.length,
				i = first.length,
				j = 0;

			if (typeof l === "number") {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, inv) {
			var retVal,
				ret = [],
				i = 0,
				length = elems.length;
			inv = !!inv;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				retVal = !!callback(elems[i], i);
				if (inv !== retVal) {
					ret.push(elems[i]);
				}
			}

			return ret;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike(elems),
				ret = [];

			// Go through the array, translating each of the items to their
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}
			}

			// Flatten any nested arrays
			return core_concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function (fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = core_slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(core_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
				length = elems.length,
				bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function (elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ?
				elems :

				// Gets
				bulk ?
					fn.call(elems) :
					length ? fn(elems[0], key) : emptyGet;
		},

		now: Date.now,

		// A method for quickly swapping in/out CSS properties to get correct calculations.
		// Note: this method belongs to the css module but it's needed here for the support module.
		// If support gets modularized, this method should be moved back to the css module.
		swap: function (elem, options, callback, args) {
			var ret, name,
				old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		}
	});

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready);

			} else {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed, false);
			}
		}
		return readyList.promise(obj);
	};

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {
		var length = obj.length,
			type = jQuery.type(obj);

		if (jQuery.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || type !== "function" &&
			(length === 0 ||
				typeof length === "number" && length > 0 && (length - 1) in obj);
	}

	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	/*!
	 * Sizzle CSS Selector Engine v1.9.4-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-06-03
	 */
	(function (window, undefined) {

		var i,
			support,
			cachedruns,
			Expr,
			getText,
			isXML,
			compile,
			outermostContext,
			sortInput,

			// Local document vars
			setDocument,
			document,
			docElem,
			documentIsHTML,
			rbuggyQSA,
			rbuggyMatches,
			matches,
			contains,

			// Instance-specific data
			expando = "sizzle" + -(new Date()),
			preferredDoc = window.document,
			dirruns = 0,
			done = 0,
			classCache = createCache(),
			tokenCache = createCache(),
			compilerCache = createCache(),
			hasDuplicate = false,
			sortOrder = function (a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}
				return 0;
			},

			// General-purpose constants
			strundefined = typeof undefined,
			MAX_NEGATIVE = 1 << 31,

			// Instance methods
			hasOwn = ({}).hasOwnProperty,
			arr = [],
			pop = arr.pop,
			push_native = arr.push,
			push = arr.push,
			slice = arr.slice,
			// Use a stripped-down indexOf if we can't use a native one
			indexOf = arr.indexOf || function (elem) {
				var i = 0,
					len = this.length;
				for (; i < len; i++) {
					if (this[i] === elem) {
						return i;
					}
				}
				return -1;
			},

			booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

			// Regular expressions

			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
			// http://www.w3.org/TR/css3-syntax/#characters
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = characterEncoding.replace("w", "w#"),

			// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
				"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

			// Prefer arguments quoted,
			//   then not containing pseudos/brackets,
			//   then attribute selectors/non-parenthetical expressions,
			//   then anything else
			// These preferences are here to reduce the number of selectors
			//   needing tokenize in the PSEUDO preFilter
			pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",

			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

			rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

			rsibling = new RegExp(whitespace + "*[+~]"),
			rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),

			rpseudo = new RegExp(pseudos),
			ridentifier = new RegExp("^" + identifier + "$"),

			matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
					"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
					"*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
					whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},

			rnative = /^[^{]+\{\s*\[native \w/,

			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

			rinputs = /^(?:input|select|textarea|button)$/i,
			rheader = /^h\d$/i,

			rescape = /'|\\/g,

			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			funescape = function (_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ?
					escaped :
					// BMP codepoint
					high < 0 ?
						String.fromCharCode(high + 0x10000) :
						// Supplemental Plane codepoint (surrogate pair)
						String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			};

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(
				(arr = slice.call(preferredDoc.childNodes)),
				preferredDoc.childNodes
			);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = {
				apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
							i = 0;
						// Can't trust NodeList.length
						while ((target[j++] = els[i++])) { }
						target.length = j - 1;
					}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType,
				// QSA vars
				i, groups, old, nid, newContext, newSelector;

			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}

			context = context || document;
			results = results || [];

			if (!selector || typeof selector !== "string") {
				return results;
			}

			if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
				return [];
			}

			if (documentIsHTML && !seed) {

				// Shortcuts
				if ((match = rquickExpr.exec(selector))) {
					// Speed-up: Sizzle("#ID")
					if ((m = match[1])) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) &&
								contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}

				// QSA path
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType === 9 && selector;

					// qSA works strangely on Element-rooted queries
					// We can work around this by specifying an extra ID on the root
					// and working up from there (Thanks to Andrew Dupont for the technique)
					// IE 8 doesn't work on object elements
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);

						if ((old = context.getAttribute("id"))) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";

						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && context.parentNode || context;
						newSelector = groups.join(",");
					}

					if (newSelector) {
						try {
							push.apply(results,
								newContext.querySelectorAll(newSelector)
							);
							return results;
						} catch (qsaError) {
						} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
		 * Create key-value caches of limited size
		 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
		 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
		 *	deleting the oldest entry
		 */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key += " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return (cache[key] = value);
			}
			return cache;
		}

		/**
		 * Mark a function for special use by Sizzle
		 * @param {Function} fn The function to mark
		 */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
		 * Support testing using an element
		 * @param {Function} fn Passed the created div and expects a boolean result
		 */
		function assert(fn) {
			var div = document.createElement("div");

			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				// release memory in IE
				div = null;
			}
		}

		/**
		 * Adds the same handler for all of the specified attrs
		 * @param {String} attrs Pipe-separated list of attributes
		 * @param {Function} handler The method that will be applied
		 */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
				i = attrs.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
		 * Checks document order of two siblings
		 * @param {Element} a
		 * @param {Element} b
		 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
		 */
		function siblingCheck(a, b) {
			var cur = b && a,
				diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
					(~b.sourceIndex || MAX_NEGATIVE) -
					(~a.sourceIndex || MAX_NEGATIVE);

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while ((cur = cur.nextSibling)) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
		 * Returns a function to use in pseudos for input types
		 * @param {String} type
		 */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
		 * Returns a function to use in pseudos for buttons
		 * @param {String} type
		 */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
		 * Returns a function to use in pseudos for positionals
		 * @param {Function} fn
		 */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
						matchIndexes = fn([], seed.length, argument),
						i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[(j = matchIndexes[i])]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
		 * Detect xml
		 * @param {Element|Object} elem An element or a document
		 */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
		 * Sets document-related variables once based on the current document
		 * @param {Element|Object} [doc] An element or document object to use to set the document
		 * @returns {Object} Returns the current document
		 */
		setDocument = Sizzle.setDocument = function (node) {
			var doc = node ? node.ownerDocument || node : preferredDoc,
				parent = doc.defaultView;

			// If no document and documentElement is available, return
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Set our document
			document = doc;
			docElem = doc.documentElement;

			// Support tests
			documentIsHTML = !isXML(doc);

			// Support: IE>8
			// If iframe document is assigned to "document" variable and if iframe has been reloaded,
			// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
			// IE6-8 do not support the defaultView property so parent will be undefined
			if (parent && parent.attachEvent && parent !== parent.top) {
				parent.attachEvent("onbeforeunload", function () {
					setDocument();
				});
			}

			/* Attributes
			---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});

			/* getElement(s)By*
			---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});

			// Check if getElementsByClassName can be trusted
			support.getElementsByClassName = assert(function (div) {
				div.innerHTML = "<div class='a'></div><div class='a i'></div>";

				// Support: Safari<4
				// Catch class over-caching
				div.firstChild.className = "i";
				// Support: Opera<10
				// Catch gEBCN failure to find non-leading classes
				return div.getElementsByClassName("i").length === 2;
			});

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});

			// ID find and filter
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== strundefined && documentIsHTML) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				// Support: IE6/7
				// getElementById is not reliable as a find shortcut
				delete Expr.find["ID"];

				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ?
				function (tag, context) {
					if (typeof context.getElementsByTagName !== strundefined) {
						return context.getElementsByTagName(tag);
					}
				} :
				function (tag, context) {
					var elem,
						tmp = [],
						i = 0,
						results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while ((elem = results[i++])) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
			---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See http://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if ((support.qsa = rnative.test(doc.querySelectorAll))) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					div.innerHTML = "<select><option selected=''></option></select>";

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}
				});

				assert(function (div) {

					// Support: Opera 10-12/IE8
					// ^= $= *= and empty values
					// Should not select anything
					// Support: Windows 8 Native Apps
					// The type attribute is restricted during .innerHTML assignment
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("t", "");

					if (div.querySelectorAll("[t^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if ((support.matchesSelector = rnative.test((matches = docElem.webkitMatchesSelector ||
				docElem.mozMatchesSelector ||
				docElem.oMatchesSelector ||
				docElem.msMatchesSelector)))) {

				assert(function (div) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(div, "div");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
			---------------------------------------------------------------------- */

			// Element contains another
			// Purposefully does not implement inclusive descendent
			// As in, an element does not contain itself
			contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ?
				function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
						bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (
						adown.contains ?
							adown.contains(bup) :
							a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
					));
				} :
				function (a, b) {
					if (b) {
						while ((b = b.parentNode)) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

			/* Sorting
			---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = docElem.compareDocumentPosition ?
				function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);

					if (compare) {
						// Disconnected nodes
						if (compare & 1 ||
							(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

							// Choose the first element that is related to our preferred document
							if (a === doc || contains(preferredDoc, a)) {
								return -1;
							}
							if (b === doc || contains(preferredDoc, b)) {
								return 1;
							}

							// Maintain original order
							return sortInput ?
								(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
								0;
						}

						return compare & 4 ? -1 : 1;
					}

					// Not directly comparable, sort on existence of method
					return a.compareDocumentPosition ? -1 : 1;
				} :
				function (a, b) {
					var cur,
						i = 0,
						aup = a.parentNode,
						bup = b.parentNode,
						ap = [a],
						bp = [b];

					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;

						// Parentless nodes are either documents or disconnected
					} else if (!aup || !bup) {
						return a === doc ? -1 :
							b === doc ? 1 :
								aup ? -1 :
									bup ? 1 :
										sortInput ?
											(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
											0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while ((cur = cur.parentNode)) {
						ap.unshift(cur);
					}
					cur = b;
					while ((cur = cur.parentNode)) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
						// Do a sibling check if the nodes have a common ancestor
						siblingCheck(ap[i], bp[i]) :

						// Otherwise nodes in our document sort first
						ap[i] === preferredDoc ? -1 :
							bp[i] === preferredDoc ? 1 :
								0;
				};

			return doc;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML &&
				(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
				(!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) { }
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
					fn(elem, name, !documentIsHTML) :
					undefined;

			return val === undefined ?
				support.attributes || !documentIsHTML ?
					elem.getAttribute(name) :
					(val = elem.getAttributeNode(name)) && val.specified ?
						val.value :
						null :
				val;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
		 * Document sorting and removing duplicates
		 * @param {ArrayLike} results
		 */
		Sizzle.uniqueSort = function (results) {
			var elem,
				duplicates = [],
				j = 0,
				i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while ((elem = results[i++])) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			return results;
		};

		/**
		 * Utility function for retrieving the text value of an array of DOM nodes
		 * @param {Array|Element} elem
		 */
		getText = Sizzle.getText = function (elem) {
			var node,
				ret = "",
				i = 0,
				nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				for (; (node = elem[i]); i++) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (see #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function (match) {
					/* matches from matchExpr["CHILD"]
						1 type (only|nth|...)
						2 what (child|of-type)
						3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
						4 xn-component of xn+y argument ([+-]?\d*n|)
						5 sign of xn-component
						6 x of xn-component
						7 sign of y-component
						8 y of y-component
					*/
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +((match[7] + match[8]) || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function (match) {
					var excess,
						unquoted = !match[5] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3] && match[4] !== undefined) {
						match[2] = match[4];

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) &&
						// Get excess from tokenize (recursively)
						(excess = tokenize(unquoted, true)) &&
						// advance to the next closing parenthesis
						(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ?
						function () { return true; } :
						function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
				},

				"CLASS": function (className) {
					var pattern = classCache[className + " "];

					return pattern ||
						(pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
						classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
						});
				},

				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check :
							operator === "!=" ? result !== check :
								operator === "^=" ? check && result.indexOf(check) === 0 :
									operator === "*=" ? check && result.indexOf(check) > -1 :
										operator === "$=" ? check && result.slice(-check.length) === check :
											operator === "~=" ? (" " + result + " ").indexOf(check) > -1 :
												operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
													false;
					};
				},

				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
						forward = type.slice(-4) !== "last",
						ofType = what === "of-type";

					return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} :

						function (elem, context, xml) {
							var cache, outerCache, node, diff, nodeIndex, start,
								dir = simple !== forward ? "nextSibling" : "previousSibling",
								parent = elem.parentNode,
								name = ofType && elem.nodeName.toLowerCase(),
								useCache = !xml && !ofType;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while ((node = node[dir])) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
									// Seek `elem` from a previously-cached index
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while ((node = ++nodeIndex && node && node[dir] ||

										// Fallback to seeking `elem` from the start
										(diff = nodeIndex = 0) || start.pop())) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}

									// Use previously-cached element index if available
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];

									// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
								} else {
									// Use the same loop as above to seek `elem` from the start
									while ((node = ++nodeIndex && node && node[dir] ||
										(diff = nodeIndex = 0) || start.pop())) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											// Cache the index of each encountered element
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || (diff % first === 0 && diff / first >= 0);
							}
						};
				},

				"PSEUDO": function (pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
						fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
							Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
							markFunction(function (seed, matches) {
								var idx,
									matched = fn(seed, argument),
									i = matched.length;
								while (i--) {
									idx = indexOf.call(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) :
							function (elem) {
								return fn(elem, 0, args);
							};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
						results = [],
						matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ?
						markFunction(function (seed, matches, context, xml) {
							var elem,
								unmatched = matcher(seed, null, xml, []),
								i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if ((elem = unmatched[i])) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) :
						function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							return !results.pop();
						};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if ((elemLang = documentIsHTML ?
								elem.lang :
								elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function (elem) {
					return elem === docElem;
				},

				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": function (elem) {
					return elem.disabled === false;
				},

				"disabled": function (elem) {
					return elem.disabled === true;
				},

				"checked": function (elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
				},

				"selected": function (elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function (elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
					//   not comment, processing instructions, or others
					// Thanks to Diego Perini for the nodeName shortcut
					//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
							return false;
						}
					}
					return true;
				},

				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function (elem) {
					var attr;
					// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
					// use getAttribute instead to test this case
					return elem.nodeName.toLowerCase() === "input" &&
						elem.type === "text" &&
						((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() { }
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		function tokenize(selector, parseOnly) {
			var matched, match, tokens, type,
				soFar, groups, preFilters,
				cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if ((match = rcombinators.exec(soFar))) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
						(match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ?
				soFar.length :
				soFar ?
					Sizzle.error(selector) :
					// Cache the tokens
					tokenCache(selector, groups).slice(0);
		}

		function toSelector(tokens) {
			var i = 0,
				len = tokens.length,
				selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
				checkNonElements = base && dir === "parentNode",
				doneName = done++;

			return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while ((elem = elem[dir])) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var data, cache, outerCache,
						dirkey = dirruns + " " + doneName;

					// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
					if (xml) {
						while ((elem = elem[dir])) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while ((elem = elem[dir])) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((cache = outerCache[dir]) && cache[0] === dirkey) {
									if ((data = cache[1]) === true || data === cachedruns) {
										return data === true;
									}
								} else {
									cache = outerCache[dir] = [dirkey];
									cache[1] = matcher(elem, context, xml) || cachedruns;
									if (cache[1] === true) {
										return true;
									}
								}
							}
						}
					}
				};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ?
				function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} :
				matchers[0];
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
				newUnmatched = [],
				i = 0,
				len = unmatched.length,
				mapped = map != null;

			for (; i < len; i++) {
				if ((elem = unmatched[i])) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp, i, elem,
					preMap = [],
					postMap = [],
					preexisting = results.length,

					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ?
						condense(elems, preMap, preFilter, context, xml) :
						elems,

					matcherOut = matcher ?
						// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
						postFinder || (seed ? preFilter : preexisting || postFilter) ?

							// ...intermediate processing is necessary
							[] :

							// ...otherwise use results directly
							results :
						matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if ((elem = temp[i])) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i])) {
									// Restore matcherIn since elem is not yet a final match
									temp.push((matcherIn[i] = elem));
								}
							}
							postFinder(null, (matcherOut = []), temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) &&
								(temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(
						matcherOut === results ?
							matcherOut.splice(preexisting, matcherOut.length) :
							matcherOut
					);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext, matcher, j,
				len = tokens.length,
				leadingRelative = Expr.relative[tokens[0].type],
				implicitRelative = leadingRelative || Expr.relative[" "],
				i = leadingRelative ? 1 : 0,

				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				matchAnyContext = addCombinator(function (elem) {
					return indexOf.call(checkContext, elem) > -1;
				}, implicitRelative, true),
				matchers = [function (elem, context, xml) {
					return (!leadingRelative && (xml || context !== outermostContext)) || (
						(checkContext = context).nodeType ?
							matchContext(elem, context, xml) :
							matchAnyContext(elem, context, xml));
				}];

			for (; i < len; i++) {
				if ((matcher = Expr.relative[tokens[i].type])) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(
							i > 1 && elementMatcher(matchers),
							i > 1 && toSelector(
								// If the preceding token was a descendant combinator, insert an implicit any-element `*`
								tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
							).replace(rtrim, "$1"),
							matcher,
							i < j && matcherFromTokens(tokens.slice(i, j)),
							j < len && matcherFromTokens((tokens = tokens.slice(j))),
							j < len && toSelector(tokens)
						);
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			// A counter to specify which element is currently being matched
			var matcherCachedRuns = 0,
				bySet = setMatchers.length > 0,
				byElement = elementMatchers.length > 0,
				superMatcher = function (seed, context, xml, results, expandContext) {
					var elem, j, matcher,
						setMatched = [],
						matchedCount = 0,
						i = "0",
						unmatched = seed && [],
						outermost = expandContext != null,
						contextBackup = outermostContext,
						// We must always have either seed elements or context
						elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
						// Use integer dirruns iff this is the outermost matcher
						dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

					if (outermost) {
						outermostContext = context !== document && context;
						cachedruns = matcherCachedRuns;
					}

					// Add elements passing elementMatchers directly to results
					// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
					for (; (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while ((matcher = elementMatchers[j++])) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
								cachedruns = ++matcherCachedRuns;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if ((elem = !matcher && elem)) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// Apply set filters to unmatched elements
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while ((matcher = setMatchers[j++])) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 &&
							(matchedCount + setMatchers.length) > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

			return bySet ?
				markFunction(superMatcher) :
				superMatcher;
		}

		compile = Sizzle.compile = function (selector, group /* Internal Use Only */) {
			var i,
				setMatchers = [],
				elementMatchers = [],
				cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!group) {
					group = tokenize(selector);
				}
				i = group.length;
				while (i--) {
					cached = matcherFromTokens(group[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
			}
			return cached;
		};

		function multipleContexts(selector, contexts, results) {
			var i = 0,
				len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function select(selector, context, results, seed) {
			var i, tokens, token, type, find,
				match = tokenize(selector);

			if (!seed) {
				// Try to minimize operations if there is only one group
				if (match.length === 1) {

					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
						}
						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[(type = token.type)]) {
							break;
						}
						if ((find = Expr.find[type])) {
							// Search, expanding context for leading sibling combinators
							if ((seed = find(
								token.matches[0].replace(runescape, funescape),
								rsibling.test(tokens[0].type) && context.parentNode || context
							))) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}
			}

			// Compile and execute a filtering function
			// Provide `match` to avoid retokenization if we modified the selector above
			compile(selector, match)(
				seed,
				context,
				!documentIsHTML,
				results,
				rsibling.test(selector)
			);
			return results;
		}

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome<14
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (div1) {
			// Should return 1, but returns 4 (following)
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (div) {
			div.innerHTML = "<input/>";
			div.firstChild.setAttribute("value", "");
			return div.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (div) {
			return div.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return (val = elem.getAttributeNode(name)) && val.specified ?
						val.value :
						elem[name] === true ? name.toLowerCase() : null;
				}
			});
		}

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;


	})(window);
	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			(optionsCache[options] || createOptions(options)) :
			jQuery.extend({}, options);

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function (data) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function () {
					if (list) {
						// First, we save the current length
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
						// Do we need to add the callbacks to the
						// current firing batch?
						if (firing) {
							firingLength = list.length;
							// With memory, if we're not firing then
							// we should call right away
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function () {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								// Handle firing indexes
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function (fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
				// Remove all callbacks from the list
				empty: function () {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function () {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function () {
					return !list;
				},
				// Lock the list in its current state
				lock: function () {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function () {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function (context, args) {
					if (list && (!fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function () {
					return !!fired;
				}
			};

		return self;
	};
	jQuery.extend({

		Deferred: function (func) {
			var tuples = [
				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
				["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
				["notify", "progress", jQuery.Callbacks("memory")]
			],
				state = "pending",
				promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function ( /* fnDone, fnFail, fnProgress */) {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var action = tuple[0],
									fn = jQuery.isFunction(fns[i]) && fns[i];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise()
											.done(newDefer.resolve)
											.fail(newDefer.reject)
											.progress(newDefer.notify);
									} else {
										newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
					stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (subordinate /* , ..., subordinateN */) {
			var i = 0,
				resolveValues = core_slice.call(arguments),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function (i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (!(--remaining)) {
							deferred.resolveWith(contexts, values);
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise()
							.done(updateFunc(i, resolveContexts, resolveValues))
							.fail(deferred.reject)
							.progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});
	jQuery.support = (function (support) {
		var input = document.createElement("input"),
			fragment = document.createDocumentFragment(),
			div = document.createElement("div"),
			select = document.createElement("select"),
			opt = select.appendChild(document.createElement("option"));

		// Finish early in limited environments
		if (!input.type) {
			return support;
		}

		input.type = "checkbox";

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
		support.checkOn = input.value !== "";

		// Must access the parent to make an option select properly
		// Support: IE9, IE10
		support.optSelected = opt.selected;

		// Will be defined later
		support.reliableMarginRight = true;
		support.boxSizingReliable = true;
		support.pixelPosition = false;

		// Make sure checked status is properly cloned
		// Support: IE9, IE10
		input.checked = true;
		support.noCloneChecked = input.cloneNode(true).checked;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Check if an input maintains its value after becoming a radio
		// Support: IE9, IE10
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";

		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute("checked", "t");
		input.setAttribute("name", "t");

		fragment.appendChild(input);

		// Support: Safari 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: Firefox, Chrome, Safari
		// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
		support.focusinBubbles = "onfocusin" in window;

		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Run tests that need a body at doc ready
		jQuery(function () {
			var container, marginDiv,
				// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
				divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				body = document.getElementsByTagName("body")[0];

			if (!body) {
				// Return for frameset docs that don't have a body
				return;
			}

			container = document.createElement("div");
			container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

			// Check box-sizing and margin behavior.
			body.appendChild(container).appendChild(div);
			div.innerHTML = "";
			// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
			div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap(body, body.style.zoom != null ? { zoom: 1 } : {}, function () {
				support.boxSizing = div.offsetWidth === 4;
			});

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if (window.getComputedStyle) {
				support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
				support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = div.appendChild(document.createElement("div"));
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";

				support.reliableMarginRight =
					!parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
			}

			body.removeChild(container);
		});

		return support;
	})({});

	/*
		Implementation Summary
	
		1. Enforce API surface and semantic compatibility with 1.9.x branch
		2. Improve the module's maintainability by reducing the storage
			paths to a single mechanism.
		3. Use the same single mechanism to support "private" and "user" data.
		4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		5. Avoid exposing implementation details on user objects (eg. expando properties)
		6. Provide a clear path for implementation upgrade to WeakMap in 2014
	*/
	var data_user, data_priv,
		rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		rmultiDash = /([A-Z])/g;

	function Data() {
		// Support: Android < 4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {};
			}
		});

		this.expando = jQuery.expando + Math.random();
	}

	Data.uid = 1;

	Data.accepts = function (owner) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType ?
			owner.nodeType === 1 || owner.nodeType === 9 : true;
	};

	Data.prototype = {
		key: function (owner) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if (!Data.accepts(owner)) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[this.expando];

			// If not, create one
			if (!unlock) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[this.expando] = { value: unlock };
					Object.defineProperties(owner, descriptor);

					// Support: Android < 4
					// Fallback to a less secure definition
				} catch (e) {
					descriptor[this.expando] = unlock;
					jQuery.extend(owner, descriptor);
				}
			}

			// Ensure the cache object
			if (!this.cache[unlock]) {
				this.cache[unlock] = {};
			}

			return unlock;
		},
		set: function (owner, data, value) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key(owner),
				cache = this.cache[unlock];

			// Handle: [ owner, key, value ] args
			if (typeof data === "string") {
				cache[data] = value;

				// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if (jQuery.isEmptyObject(cache)) {
					jQuery.extend(this.cache[unlock], data);
					// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for (prop in data) {
						cache[prop] = data[prop];
					}
				}
			}
			return cache;
		},
		get: function (owner, key) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[this.key(owner)];

			return key === undefined ?
				cache : cache[key];
		},
		access: function (owner, key, value) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined ||
				((key && typeof key === "string") && value === undefined)) {

				stored = this.get(owner, key);

				return stored !== undefined ?
					stored : this.get(owner, jQuery.camelCase(key));
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function (owner, key) {
			var i, name, camel,
				unlock = this.key(owner),
				cache = this.cache[unlock];

			if (key === undefined) {
				this.cache[unlock] = {};

			} else {
				// Support array or space separated string of keys
				if (jQuery.isArray(key)) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat(key.map(jQuery.camelCase));
				} else {
					camel = jQuery.camelCase(key);
					// Try the string as a key before any manipulation
					if (key in cache) {
						name = [key, camel];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[name] : (name.match(core_rnotwhite) || []);
					}
				}

				i = name.length;
				while (i--) {
					delete cache[name[i]];
				}
			}
		},
		hasData: function (owner) {
			return !jQuery.isEmptyObject(
				this.cache[owner[this.expando]] || {}
			);
		},
		discard: function (owner) {
			if (owner[this.expando]) {
				delete this.cache[owner[this.expando]];
			}
		}
	};

	// These may be used throughout the jQuery core codebase
	data_user = new Data();
	data_priv = new Data();


	jQuery.extend({
		acceptData: Data.accepts,

		hasData: function (elem) {
			return data_user.hasData(elem) || data_priv.hasData(elem);
		},

		data: function (elem, name, data) {
			return data_user.access(elem, name, data);
		},

		removeData: function (elem, name) {
			data_user.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function (elem, name, data) {
			return data_priv.access(elem, name, data);
		},

		_removeData: function (elem, name) {
			data_priv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var attrs, name,
				elem = this[0],
				i = 0,
				data = null;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = data_user.get(elem);

					if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
						attrs = elem.attributes;
						for (; i < attrs.length; i++) {
							name = attrs[i].name;

							if (name.indexOf("data-") === 0) {
								name = jQuery.camelCase(name.slice(5));
								dataAttr(elem, name, data[name]);
							}
						}
						data_priv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					data_user.set(this, key);
				});
			}

			return jQuery.access(this, function (value) {
				var data,
					camelKey = jQuery.camelCase(key);

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get(elem, camelKey);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, camelKey, undefined);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get(this, camelKey);

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set(this, camelKey, value);

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if (key.indexOf("-") !== -1 && data !== undefined) {
						data_user.set(this, key, value);
					}
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function (key) {
			return this.each(function () {
				data_user.remove(this, key);
			});
		}
	});

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
							data === "null" ? null :
								// Only convert to a number if it doesn't change the string
								+data + "" === data ? +data :
									rbrace.test(data) ? JSON.parse(data) :
										data;
				} catch (e) { }

				// Make sure we set the data so it isn't changed later
				data_user.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}
	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = data_priv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = data_priv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks(elem, type),
				next = function () {
					jQuery.dequeue(elem, type);
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return data_priv.get(elem, key) || data_priv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					data_priv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ?
				this :
				this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function () {
					if (!(--count)) {
						defer.resolveWith(elements, [elements]);
					}
				};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = data_priv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var nodeHook, boolHook,
		rclass = /[\t\r\n\f]/g,
		rreturn = /\r/g,
		rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		attr: function (name, value) {
			return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		},

		prop: function (name, value) {
			return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		},

		addClass: function (value) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (proceed) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = (value || "").match(core_rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ?
						(" " + elem.className + " ").replace(rclass, " ") :
						" "
					);

					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}
						elem.className = jQuery.trim(cur);

					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(core_rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && (elem.className ?
						(" " + elem.className + " ").replace(rclass, " ") :
						""
					);

					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {
							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}
						elem.className = value ? jQuery.trim(cur) : "";
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value;

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery(this),
						classNames = value.match(core_rnotwhite) || [];

					while ((className = classNames[i++])) {
						// check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (type === core_strundefined || type === "boolean") {
					if (this.className) {
						// store className if set
						data_priv.set(this, "__className__", this.className);
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
				}
			});
		},

		hasClass: function (selector) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		},

		val: function (value) {
			var hooks, ret, isFunction,
				elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {
					// attributes.value is undefined in Blackberry 4.7 but
					// uses .value. See #6932
					var val = elem.attributes.value;
					return !val || val.specified ? elem.value : elem.text;
				}
			},
			select: {
				get: function (elem) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&
							// Don't return options that are disabled or in a disabled optgroup
							(jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray(value),
						i = options.length;

					while (i--) {
						option = options[i];
						if ((option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0)) {
							optionSet = true;
						}
					}

					// force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},

		attr: function (elem, name, value) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === core_strundefined) {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] ||
					(jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);

				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;

				} else {
					elem.setAttribute(name, value + "");
					return value;
				}

			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;

			} else {
				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function (elem, value) {
			var name, propName,
				i = 0,
				attrNames = value && value.match(core_rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while ((name = attrNames[i++])) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {
						// Set corresponding property to false
						elem[propName] = false;
					}

					elem.removeAttribute(name);
				}
			}
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function (elem, name, value) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ?
					ret :
					(elem[name] = value);

			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ?
					ret :
					elem[name];
			}
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {
					return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;

		jQuery.expr.attrHandle[name] = function (elem, name, isXML) {
			var fn = jQuery.expr.attrHandle[name],
				ret = isXML ?
					undefined :
					/* jshint eqeqeq: false */
					// Temporarily disable this handler to check existence
					(jQuery.expr.attrHandle[name] = undefined) !=
						getter(elem, name, isXML) ?

						name.toLowerCase() :
						null;

			// Restore handler
			jQuery.expr.attrHandle[name] = fn;

			return ret;
		};
	});

	// Support: IE9+
	// Selectedness for an option in an optgroup can be inaccurate
	if (!jQuery.support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {
				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
				}
			}
		};
		if (!jQuery.support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = (types || "").match(core_rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData(elem) && data_priv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(core_rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) &&
						(!handler || handler.guid === handleObj.guid) &&
						(!tmp || tmp.test(handleObj.namespace)) &&
						(!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;
				data_priv.remove(elem, "events");
			}
		},

		trigger: function (event, data, elem, onlyHandlers) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [elem || document],
				type = core_hasOwn.call(event, "type") ? event.type : event,
				namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ?
				event :
				new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[event] :
				jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
					event.preventDefault();
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
					jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function (event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = core_slice.call(arguments),
				handlers = (data_priv.get(this, "events") || {})[event.type] || [],
				special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler)
							.apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.disabled !== true || event.type !== "click") {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ?
									jQuery(sel, this).index(cur) >= 0 :
									jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (event, original) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
				}

				return event;
			}
		},

		fix: function (event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook =
					rmouseEvent.test(type) ? this.mouseHooks :
						rkeyEvent.test(type) ? this.keyHooks :
							{};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if (!event.target) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome < 28
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function (type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = (src.defaultPrevented ||
				src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && e.preventDefault) {
				e.preventDefault();
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && e.stopPropagation) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || (related !== target && !jQuery.contains(target, related))) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Create "bubbling" focus and blur events
	// Support: Firefox, Chrome, Safari
	if (!jQuery.support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
				handler = function (event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};

			jQuery.event.special[fix] = {
				setup: function () {
					if (attaches++ === 0) {
						document.addEventListener(orig, handler, true);
					}
				},
				teardown: function () {
					if (--attaches === 0) {
						document.removeEventListener(orig, handler, true);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function (types, selector, data, fn, /*INTERNAL*/ one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if (typeof types === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function (event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function (types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if (typeof types === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});
	var isSimple = /^.[^:#\[\.,]*$/,
		rparentsprev = /^(?:parents|prev(?:Until|All))/,
		rneedsContext = jQuery.expr.match.needsContext,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},

		has: function (target) {
			var targets = jQuery(target, this),
				l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},

		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},

		is: function (selector) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ?
					jQuery(selector) :
					selector || [],
				false
			).length;
		},

		closest: function (selectors, context) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = (rneedsContext.test(selectors) || typeof selectors !== "string") ?
					jQuery(selectors, context || this.context) :
					0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors))) {

						cur = matched.push(cur);
						break;
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if (typeof elem === "string") {
				return core_indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return core_indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem
			);
		},

		add: function (selector, context) {
			var set = typeof selector === "string" ?
				jQuery(selector, context) :
				jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
				all = jQuery.merge(this.get(), set);

			return this.pushStack(jQuery.unique(all));
		},

		addBack: function (selector) {
			return this.add(selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) { }

		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function (elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {
				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.unique(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});

	jQuery.extend({
		filter: function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ?
				jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
				jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
					return elem.nodeType === 1;
				}));
		},

		dir: function (elem, dir, until) {
			var matched = [],
				truncate = until !== undefined;

			while ((elem = elem[dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		},

		sibling: function (n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		}
	});

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});

		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return (elem === qualifier) !== not;
			});

		}

		if (typeof qualifier === "string") {
			if (isSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return (core_indexOf.call(qualifier, elem) >= 0) !== not;
		});
	}
	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE 9
			option: [1, "<select multiple='multiple'>", "</select>"],

			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

	// Support: IE 9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	jQuery.fn.extend({
		text: function (value) {
			return jQuery.access(this, function (value) {
				return value === undefined ?
					jQuery.text(this) :
					this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
			}, null, value, arguments.length);
		},

		append: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		// keepData is for internal use only--do not document
		remove: function (selector, keepData) {
			var elem,
				elems = selector ? jQuery.filter(selector, this) : this,
				i = 0;

			for (; (elem = elems[i]) != null; i++) {
				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}

				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}

			return this;
		},

		empty: function () {
			var elem,
				i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return jQuery.access(this, function (value) {
				var elem = this[0] || {},
					i = 0,
					l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) &&
					!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) { }
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var
				// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
				args = jQuery.map(this, function (elem) {
					return [elem.nextSibling, elem.parentNode];
				}),
				i = 0;

			// Make the changes, replacing each context element with the new content
			this.domManip(arguments, function (elem) {
				var next = args[i++],
					parent = args[i++];

				if (parent) {
					// Don't use the snapshot next if it has moved (#13810)
					if (next && next.parentNode !== parent) {
						next = this.nextSibling;
					}
					jQuery(this).remove();
					parent.insertBefore(elem, next);
				}
				// Allow new content to include elements from the context set
			}, true);

			// Force removal if there was no new content (e.g., from empty arguments)
			return i ? this : this.remove();
		},

		detach: function (selector) {
			return this.remove(selector, true);
		},

		domManip: function (args, callback, allowIntersection) {

			// Flatten any nested arrays
			args = core_concat.apply([], args);

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback, allowIntersection);
				});
			}

			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
								// Support: QtWebKit
								// jQuery.merge because core_push.apply(_, arraylike) throws
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(this[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") &&
								!data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {
									// Hope ajax is available...
									jQuery._evalUrl(node.src);
								} else {
									jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
				ret = [],
				insert = jQuery(selector),
				last = insert.length - 1,
				i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: QtWebKit
				// .get() because core_push.apply(_, arraylike) throws
				core_push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});

	jQuery.extend({
		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode(true),
				inPage = jQuery.contains(elem.ownerDocument, elem);

			// Support: IE >= 9
			// Fix Cloning issues
			if (!jQuery.support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function (elems, context, scripts, selection) {
			var elem, tmp, tag, wrap, contains, j,
				i = 0,
				l = elems.length,
				fragment = context.createDocumentFragment(),
				nodes = [];

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						// Support: QtWebKit
						// jQuery.merge because core_push.apply(_, arraylike) throws
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit
						// jQuery.merge because core_push.apply(_, arraylike) throws
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Fixes #12346
						// Support: Webkit, IE
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ((elem = nodes[i++])) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while ((elem = tmp[j++])) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function (elems) {
			var data, elem, events, type, key, j,
				special = jQuery.event.special,
				i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (Data.accepts(elem)) {
					key = elem[data_priv.expando];

					if (key && (data = data_priv.cache[key])) {
						events = Object.keys(data.events || {});
						if (events.length) {
							for (j = 0; (type = events[j]) !== undefined; j++) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}
						if (data_priv.cache[key]) {
							// Discard any remaining `private` data
							delete data_priv.cache[key];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[elem[data_user.expando]];
			}
		},

		_evalUrl: function (url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		}
	});

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") &&
			jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ?

			elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild(elem.ownerDocument.createElement("tbody")) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var l = elems.length,
			i = 0;

		for (; i < l; i++) {
			data_priv.set(
				elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval")
			);
		}
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (data_priv.hasData(src)) {
			pdataOld = data_priv.access(src);
			pdataCur = data_priv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (data_user.hasData(src)) {
			udataOld = data_user.access(src);
			udataCur = jQuery.extend({}, udataOld);

			data_user.set(dest, udataCur);
		}
	}


	function getAll(context, tag) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") :
			context.querySelectorAll ? context.querySelectorAll(tag || "*") :
				[];

		return tag === undefined || tag && jQuery.nodeName(context, tag) ?
			jQuery.merge([context], ret) :
			ret;
	}

	// Support: IE >= 9
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}
	jQuery.fn.extend({
		wrapAll: function (html) {
			var wrap;

			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
					contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);

				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function () {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});
	var curCSS, iframe,
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rmargin = /^margin/,
		rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
		rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
		rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
		elemdisplay = { BODY: "block" },

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},

		cssExpand = ["Top", "Right", "Bottom", "Left"],
		cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function isHidden(elem, el) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	}

	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	function getStyles(elem) {
		return window.getComputedStyle(elem, null);
	}

	function showHide(elements, show) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = data_priv.get(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = data_priv.access(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
				}
			} else {

				if (!values[index]) {
					hidden = isHidden(elem);

					if (display && display !== "none" || !hidden) {
						data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		css: function (name, value) {
			return jQuery.access(this, function (elem, name, value) {
				var styles, len,
					map = {},
					i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style(elem, name, value) :
					jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {
						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {
			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase(name),
				style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that NaN and null values aren't set. See: #7116
				if (value == null || type === "number" && isNaN(value)) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
					style[name] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var val, num, hooks,
				origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			//convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});

	curCSS = function (elem, name, _computed) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles(elem),

			// Support: IE9
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
			style = elem.style;

		if (computed) {

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// Support: Safari 5.1
			// A tribute to the "awesome hack by Dean Edwards"
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if (rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};


	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
			value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for (; i < 4; i += 2) {
			// both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// at this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// at this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles(elem),
			isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return (val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || (isBorderBox ? "border" : "content"),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	// Try to determine the default display value of an element
	function css_defaultDisplay(nodeName) {
		var doc = document,
			display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {
				// Use the already-created iframe if possible
				iframe = (iframe ||
					jQuery("<iframe frameborder='0' width='0' height='0'/>")
						.css("cssText", "display:block !important")
				).appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
				doc.write("<!doctype html><html><body>");
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}

	// Called ONLY from within css_defaultDisplay
	function actualDisplay(name, doc) {
		var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			display = jQuery.css(elem[0], "display");
		elem.remove();
		return display;
	}

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ?
						jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) :
						getWidthOrHeight(elem, name, extra);
				}
			},

			set: function (elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function () {
		// Support: Android 2.3
		if (!jQuery.support.reliableMarginRight) {
			jQuery.cssHooks.marginRight = {
				get: function (elem, computed) {
					if (computed) {
						// Support: Android 2.3
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// Work around by temporarily setting element display to inline-block
						return jQuery.swap(elem, { "display": "inline-block" },
							curCSS, [elem, "marginRight"]);
					}
				}
			};
		}

		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if (!jQuery.support.pixelPosition && jQuery.fn.position) {
			jQuery.each(["top", "left"], function (i, prop) {
				jQuery.cssHooks[prop] = {
					get: function (elem, computed) {
						if (computed) {
							computed = curCSS(elem, prop);
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test(computed) ?
								jQuery(elem).position()[prop] + "px" :
								computed;
						}
					}
				};
			});
		}

	});

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.hidden = function (elem) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
		};

		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	}

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] =
						parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			})
				.filter(function () {
					var type = this.type;
					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") &&
						rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
						(this.checked || !manipulation_rcheckableType.test(type));
				})
				.map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ?
						null :
						jQuery.isArray(val) ?
							jQuery.map(val, function (val) {
								return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
							}) :
							{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
		}
	});

	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
			s = [],
			add = function (key, value) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
				}
			});

		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}

		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}
	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ?
					this.on(name, null, data, fn) :
					this.trigger(name);
			};
		});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,

		ajax_nonce = jQuery.now(),

		ajax_rquery = /\?/,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

		// Keep a copy of the old load method
		_load = jQuery.fn.load,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch (e) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement("a");
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				while ((dataType = dataTypes[i++])) {
					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
			seekingTransport = (structure === transports);

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if (off >= 0) {
			selector = url.slice(off);
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ?
					jQuery(callbackContext) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function (key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while ((match = rheaders.exec(responseHeadersString))) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function () {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function (name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function (type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function (map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[code] = [statusCode[code], map[code]];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "")
				.replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts &&
					(parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
						(parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
						(ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
				);
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = (s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data);
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + ajax_nonce++) :

						// Otherwise add one to the end
						cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
					s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
					s.accepts["*"]
			);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
						[jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (!(--jQuery.active)) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] ||
									converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {
		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, callback;
			return {
				send: function (_, complete) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function (evt) {
							script.remove();
							callback = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						}
					);
					document.head.appendChild(script[0]);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (ajax_nonce++));
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
				"url" :
				typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});
	jQuery.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (e) { }
	};

	var xhrSupported = jQuery.ajaxSettings.xhr(),
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		// Support: IE9
		// We need to keep track of outbound xhr and abort them manually
		// because IE is not smart enough to do it all by itself
		xhrId = 0,
		xhrCallbacks = {};

	if (window.ActiveXObject) {
		jQuery(window).on("unload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key]();
			}
			xhrCallbacks = undefined;
		});
	}

	jQuery.support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
	jQuery.support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var callback;
		// Cross domain only allowed if supported through XMLHttpRequest
		if (jQuery.support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function (headers, complete) {
					var i, id,
						xhr = options.xhr();
					xhr.open(options.type, options.url, options.async, options.username, options.password);
					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}
					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}
					// Callback
					callback = function (type) {
						return function () {
							if (callback) {
								delete xhrCallbacks[id];
								callback = xhr.onload = xhr.onerror = null;
								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {
									complete(
										// file protocol always yields status 0, assume 404
										xhr.status || 404,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[xhr.status] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// #11426: When requesting binary data, IE9 will throw an exception
										// on any attempt to access responseText
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
					// Create the abort callback
					callback = xhrCallbacks[(id = xhrId++)] = callback("abort");
					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send(options.hasContent && options.data || null);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});
	var fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
		rrun = /queueHooks$/,
		animationPrefilters = [defaultPrefilter],
		tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
					target = tween.cur(),
					parts = rfxnum.exec(value),
					unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

					// Starting value computation is required for potential unit mismatches
					start = (jQuery.cssNumber[prop] || unit !== "px" && +target) &&
						rfxnum.exec(jQuery.css(tween.elem, prop)),
					scale = 1,
					maxIterations = 20;

				if (start && start[3] !== unit) {
					// Trust units reported by jQuery.css
					unit = unit || start[3];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);

						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}

				// Update tween properties
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ?
						start + (parts[1] + 1) * parts[2] :
						+parts[2];
				}

				return tween;
			}]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return (fxNow = jQuery.now());
	}

	function createTween(value, prop, animation) {
		var tween,
			collection = (tweeners[prop] || []).concat(tweeners["*"]),
			index = 0,
			length = collection.length;
		for (; index < length; index++) {
			if ((tween = collection[index].call(animation, prop, value))) {

				// we're done with this property
				return tween;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always(function () {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end,
						animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(
			jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress(animation.opts.progress)
			.done(animation.opts.done, animation.opts.complete)
			.fail(animation.opts.fail)
			.always(animation.opts.always);
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function (callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden(elem),
			dataShow = data_priv.get(elem, "fxshow");

		// handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if (jQuery.css(elem, "display") === "inline" &&
				jQuery.css(elem, "float") === "none") {

				style.display = "inline-block";
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}


		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access(elem, "fxshow", {});
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;

				data_priv.remove(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ?
				hooks.get(this) :
				Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
				hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				if (tween.elem[tween.prop] != null &&
					(!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css(tween.elem, tween.prop, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply(this, arguments) :
				this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
				optall = jQuery.speed(speed, easing, callback),
				doAnimation = function () {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || data_priv.get(this, "finish")) {
						anim.stop(true);
					}
				};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each(doAnimation) :
				this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
					data = data_priv.get(this),
					queue = data[type + "queue"],
					hooks = data[type + "queueHooks"],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function () {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		if (timer() && jQuery.timers.push(timer)) {
			jQuery.fx.start();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	}
	jQuery.fn.offset = function (options) {
		if (arguments.length) {
			return options === undefined ?
				this :
				this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
		}

		var docElem, win,
			elem = this[0],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if (!doc) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if (!jQuery.contains(docElem, elem)) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if (typeof elem.getBoundingClientRect !== core_strundefined) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow(doc);
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	};

	jQuery.offset = {

		setOffset: function (elem, options, i) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css(elem, "position"),
				curElem = jQuery(elem),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = (options.top - curOffset.top) + curTop;
			}
			if (options.left != null) {
				props.left = (options.left - curOffset.left) + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);

			} else {
				curElem.css(props);
			}
		}
	};


	jQuery.fn.extend({

		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent, offset,
				elem = this[0],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
			if (jQuery.css(elem, "position") === "fixed") {
				// We assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;

				while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});


	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return jQuery.access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return jQuery.access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body["scroll" + name], doc["scroll" + name],
							elem.body["offset" + name], doc["offset" + name],
							doc["client" + name]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});
	// Limit scope pollution from any deprecated API
	// (function() {

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// })();
	if (typeof module === "object" && module && typeof module.exports === "object") {
		// Expose jQuery as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jQuery;
	} else {
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
		if (typeof define === "function" && define.amd) {
			define("jquery", [], function () { return jQuery; });
		}
	}

	// If there is a window object, that at least has a document property,
	// define jQuery and $ identifiers
	if (typeof window === "object" && typeof window.document === "object") {
		window.jQuery = window.$ = jQuery;
	}

})(window);
/*! jquery.cookie v1.4.1 | MIT */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery) }(function (a) { function b(a) { return h.raw ? a : encodeURIComponent(a) } function c(a) { return h.raw ? a : decodeURIComponent(a) } function d(a) { return b(h.json ? JSON.stringify(a) : String(a)) } function e(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a } catch (b) { } } function f(b, c) { var d = h.raw ? b : e(b); return a.isFunction(c) ? c(d) : d } var g = /\+/g, h = a.cookie = function (e, g, i) { if (void 0 !== g && !a.isFunction(g)) { if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) { var j = i.expires, k = i.expires = new Date; k.setTime(+k + 864e5 * j) } return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") } for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) { var p = m[n].split("="), q = c(p.shift()), r = p.join("="); if (e && e === q) { l = f(r, g); break } e || void 0 === (r = f(r)) || (l[q] = r) } return l }; h.defaults = {}, a.removeCookie = function (b, c) { return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b)) } });
/*!
 * Platform.js
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
; (function () {
    'use strict';

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Used as a reference to the global object. */
    var root = (objectTypes[typeof window] && window) || this;

    /** Backup possible global object. */
    var oldRoot = root;

    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports;

    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
        root = freeGlobal;
    }

    /**
     * Used as the maximum length of an array-like object.
     * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
     * for more details.
     */
    var maxSafeInteger = Math.pow(2, 53) - 1;

    /** Regular expression to detect Opera. */
    var reOpera = /\bOpera/;

    /** Possible global object. */
    var thisBinding = this;

    /** Used for native method references. */
    var objectProto = Object.prototype;

    /** Used to check for own properties of an object. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to resolve the internal `[[Class]]` of values. */
    var toString = objectProto.toString;

    /*--------------------------------------------------------------------------*/

    /**
     * Capitalizes a string value.
     *
     * @private
     * @param {string} string The string to capitalize.
     * @returns {string} The capitalized string.
     */
    function capitalize(string) {
        string = String(string);
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * A utility function to clean up the OS name.
     *
     * @private
     * @param {string} os The OS name to clean up.
     * @param {string} [pattern] A `RegExp` pattern matching the OS name.
     * @param {string} [label] A label for the OS.
     */
    function cleanupOS(os, pattern, label) {
        // Platform tokens are defined at:
        // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        var data = {
            '10.0': '10',
            '6.4': '10 Technical Preview',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': 'Server 2008 R2 / 7',
            '6.0': 'Server 2008 / Vista',
            '5.2': 'Server 2003 / XP 64-bit',
            '5.1': 'XP',
            '5.01': '2000 SP1',
            '5.0': '2000',
            '4.0': 'NT',
            '4.90': 'ME'
        };
        // Detect Windows version from platform tokens.
        if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
            (data = data[/[\d.]+$/.exec(os)])) {
            os = 'Windows ' + data;
        }
        // Correct character case and cleanup string.
        os = String(os);

        if (pattern && label) {
            os = os.replace(RegExp(pattern, 'i'), label);
        }

        os = format(
            os.replace(/ ce$/i, ' CE')
                .replace(/\bhpw/i, 'web')
                .replace(/\bMacintosh\b/, 'Mac OS')
                .replace(/_PowerPC\b/i, ' OS')
                .replace(/\b(OS X) [^ \d]+/i, '$1')
                .replace(/\bMac (OS X)\b/, '$1')
                .replace(/\/(\d)/, ' $1')
                .replace(/_/g, '.')
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                .replace(/\bx86\.64\b/gi, 'x86_64')
                .replace(/\b(Windows Phone) OS\b/, '$1')
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                .split(' on ')[0]
        );

        return os;
    }

    /**
     * An iteration utility for arrays and objects.
     *
     * @private
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} callback The function called per iteration.
     */
    function each(object, callback) {
        var index = -1,
            length = object ? object.length : 0;

        if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
            while (++index < length) {
                callback(object[index], index, object);
            }
        } else {
            forOwn(object, callback);
        }
    }

    /**
     * Trim and conditionally capitalize string values.
     *
     * @private
     * @param {string} string The string to format.
     * @returns {string} The formatted string.
     */
    function format(string) {
        string = trim(string);
        return /^(?:webOS|i(?:OS|P))/.test(string)
            ? string
            : capitalize(string);
    }

    /**
     * Iterates over an object's own properties, executing the `callback` for each.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} callback The function executed per own property.
     */
    function forOwn(object, callback) {
        for (var key in object) {
            if (hasOwnProperty.call(object, key)) {
                callback(object[key], key, object);
            }
        }
    }

    /**
     * Gets the internal `[[Class]]` of a value.
     *
     * @private
     * @param {*} value The value.
     * @returns {string} The `[[Class]]`.
     */
    function getClassOf(value) {
        return value == null
            ? capitalize(value)
            : toString.call(value).slice(8, -1);
    }

    /**
     * Host objects can return type values that are different from their actual
     * data type. The objects we are concerned with usually return non-primitive
     * types of "object", "function", or "unknown".
     *
     * @private
     * @param {*} object The owner of the property.
     * @param {string} property The property to check.
     * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
     */
    function isHostType(object, property) {
        var type = object != null ? typeof object[property] : 'number';
        return !/^(?:boolean|number|string|undefined)$/.test(type) &&
            (type == 'object' ? !!object[property] : true);
    }

    /**
     * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
     *
     * @private
     * @param {string} string The string to qualify.
     * @returns {string} The qualified string.
     */
    function qualify(string) {
        return String(string).replace(/([ -])(?!$)/g, '$1?');
    }

    /**
     * A bare-bones `Array#reduce` like utility function.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function called per iteration.
     * @returns {*} The accumulated result.
     */
    function reduce(array, callback) {
        var accumulator = null;
        each(array, function (value, index) {
            accumulator = callback(accumulator, value, index, array);
        });
        return accumulator;
    }

    /**
     * Removes leading and trailing whitespace from a string.
     *
     * @private
     * @param {string} string The string to trim.
     * @returns {string} The trimmed string.
     */
    function trim(string) {
        return String(string).replace(/^ +| +$/g, '');
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a new platform object.
     *
     * @memberOf platform
     * @param {Object|string} [ua=navigator.userAgent] The user agent string or
     *  context object.
     * @returns {Object} A platform object.
     */
    function parse(ua) {

        /** The environment context object. */
        var context = root;

        /** Used to flag when a custom context is provided. */
        var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

        // Juggle arguments.
        if (isCustomContext) {
            context = ua;
            ua = null;
        }

        /** Browser navigator object. */
        var nav = context.navigator || {};

        /** Browser user agent string. */
        var userAgent = nav.userAgent || '';

        ua || (ua = userAgent);

        /** Used to flag when `thisBinding` is the [ModuleScope]. */
        var isModuleScope = isCustomContext || thisBinding == oldRoot;

        /** Used to detect if browser is like Chrome. */
        var likeChrome = isCustomContext
            ? !!nav.likeChrome
            : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

        /** Internal `[[Class]]` value shortcuts. */
        var objectClass = 'Object',
            airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
            enviroClass = isCustomContext ? objectClass : 'Environment',
            javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
            phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

        /** Detect Java environments. */
        var java = /\bJava/.test(javaClass) && context.java;

        /** Detect Rhino. */
        var rhino = java && getClassOf(context.environment) == enviroClass;

        /** A character to represent alpha. */
        var alpha = java ? 'a' : '\u03b1';

        /** A character to represent beta. */
        var beta = java ? 'b' : '\u03b2';

        /** Browser document object. */
        var doc = context.document || {};

        /**
         * Detect Opera browser (Presto-based).
         * http://www.howtocreate.co.uk/operaStuff/operaObject.html
         * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
         */
        var opera = context.operamini || context.opera;

        /** Opera `[[Class]]`. */
        var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
            ? operaClass
            : (opera = null);

        /*------------------------------------------------------------------------*/

        /** Temporary variable used over the script's lifetime. */
        var data;

        /** The CPU architecture. */
        var arch = ua;

        /** Platform description array. */
        var description = [];

        /** Platform alpha/beta indicator. */
        var prerelease = null;

        /** A flag to indicate that environment features should be used to resolve the platform. */
        var useFeatures = ua == userAgent;

        /** The browser/environment version. */
        var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

        /** A flag to indicate if the OS ends with "/ Version" */
        var isSpecialCasedOS;

        /* Detectable layout engines (order is important). */
        var layout = getLayout([
            { 'label': 'EdgeHTML', 'pattern': 'Edge' },
            'Trident',
            { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
            'iCab',
            'Presto',
            'NetFront',
            'Tasman',
            'KHTML',
            'Gecko'
        ]);

        /* Detectable browser names (order is important). */
        var name = getName([
            'Adobe AIR',
            'Arora',
            'Avant Browser',
            'Breach',
            'Camino',
            'Electron',
            'Epiphany',
            'Fennec',
            'Flock',
            'Galeon',
            'GreenBrowser',
            'iCab',
            'Iceweasel',
            'K-Meleon',
            'Konqueror',
            'Lunascape',
            'Maxthon',
            { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
            'Midori',
            'Nook Browser',
            'PaleMoon',
            'PhantomJS',
            'Raven',
            'Rekonq',
            'RockMelt',
            { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
            'SeaMonkey',
            { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
            'Sleipnir',
            'SlimBrowser',
            { 'label': 'SRWare Iron', 'pattern': 'Iron' },
            'Sunrise',
            'Swiftfox',
            'Vivaldi',
            'Waterfox',
            'WebPositive',
            { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
            { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
            'Opera Mini',
            { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
            'Opera',
            { 'label': 'Opera', 'pattern': 'OPR' },
            'Chromium',
            'Chrome',
            { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
            { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
            { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
            { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
            { 'label': 'IE', 'pattern': 'IEMobile' },
            { 'label': 'IE', 'pattern': 'MSIE' },
            'Safari'
        ]);

        /* Detectable products (order is important). */
        var product = getProduct([
            { 'label': 'BlackBerry', 'pattern': 'BB10' },
            'BlackBerry',
            { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
            { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
            { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
            { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
            { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
            { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
            { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
            { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
            { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
            'Google TV',
            'Lumia',
            'iPad',
            'iPod',
            'iPhone',
            'Kindle',
            { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
            'Nexus',
            'Nook',
            'PlayBook',
            'PlayStation Vita',
            'PlayStation',
            'TouchPad',
            'Transformer',
            { 'label': 'Wii U', 'pattern': 'WiiU' },
            'Wii',
            'Xbox One',
            { 'label': 'Xbox 360', 'pattern': 'Xbox' },
            'Xoom'
        ]);

        /* Detectable manufacturers. */
        var manufacturer = getManufacturer({
            'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
            'Alcatel': {},
            'Archos': {},
            'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
            'Asus': { 'Transformer': 1 },
            'Barnes & Noble': { 'Nook': 1 },
            'BlackBerry': { 'PlayBook': 1 },
            'Google': { 'Google TV': 1, 'Nexus': 1 },
            'HP': { 'TouchPad': 1 },
            'HTC': {},
            'Huawei': {},
            'Lenovo': {},
            'LG': {},
            'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
            'Motorola': { 'Xoom': 1 },
            'Nintendo': { 'Wii U': 1, 'Wii': 1 },
            'Nokia': { 'Lumia': 1 },
            'Oppo': {},
            'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
            'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
            'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
        });

        /* Detectable operating systems (order is important). */
        var os = getOS([
            'Windows Phone',
            'KaiOS',
            'Android',
            'CentOS',
            { 'label': 'Chrome OS', 'pattern': 'CrOS' },
            'Debian',
            { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
            'Fedora',
            'FreeBSD',
            'Gentoo',
            'Haiku',
            'Kubuntu',
            'Linux Mint',
            'OpenBSD',
            'Red Hat',
            'SuSE',
            'Ubuntu',
            'Xubuntu',
            'Cygwin',
            'Symbian OS',
            'hpwOS',
            'webOS ',
            'webOS',
            'Tablet OS',
            'Tizen',
            'Linux',
            'Mac OS X',
            'Macintosh',
            'Mac',
            'Windows 98;',
            'Windows '
        ]);

        /*------------------------------------------------------------------------*/

        /**
         * Picks the layout engine from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected layout engine.
         */
        function getLayout(guesses) {
            return reduce(guesses, function (result, guess) {
                return result || RegExp('\\b' + (
                    guess.pattern || qualify(guess)
                ) + '\\b', 'i').exec(ua) && (guess.label || guess);
            });
        }

        /**
         * Picks the manufacturer from an array of guesses.
         *
         * @private
         * @param {Array} guesses An object of guesses.
         * @returns {null|string} The detected manufacturer.
         */
        function getManufacturer(guesses) {
            return reduce(guesses, function (result, value, key) {
                // Lookup the manufacturer by product or scan the UA for the manufacturer.
                return result || (
                    value[product] ||
                    value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
                    RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
                ) && key;
            });
        }

        /**
         * Picks the browser name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected browser name.
         */
        function getName(guesses) {
            return reduce(guesses, function (result, guess) {
                return result || RegExp('\\b' + (
                    guess.pattern || qualify(guess)
                ) + '\\b', 'i').exec(ua) && (guess.label || guess);
            });
        }

        /**
         * Picks the OS name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected OS name.
         */
        function getOS(guesses) {
            return reduce(guesses, function (result, guess) {
                var pattern = guess.pattern || qualify(guess);
                if (!result && (result =
                    RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
                )) {
                    result = cleanupOS(result, pattern, guess.label || guess);
                }
                return result;
            });
        }

        /**
         * Picks the product name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected product name.
         */
        function getProduct(guesses) {
            return reduce(guesses, function (result, guess) {
                var pattern = guess.pattern || qualify(guess);
                if (!result && (result =
                    RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
                    RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
                    RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
                )) {
                    // Split by forward slash and append product version if needed.
                    if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
                        result[0] += ' ' + result[1];
                    }
                    // Correct character case and cleanup string.
                    guess = guess.label || guess;
                    result = format(result[0]
                        .replace(RegExp(pattern, 'i'), guess)
                        .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
                        .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
                }
                return result;
            });
        }

        /**
         * Resolves the version using an array of UA patterns.
         *
         * @private
         * @param {Array} patterns An array of UA patterns.
         * @returns {null|string} The detected version.
         */
        function getVersion(patterns) {
            return reduce(patterns, function (result, pattern) {
                return result || (RegExp(pattern +
                    '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
            });
        }

        /**
         * Returns `platform.description` when the platform object is coerced to a string.
         *
         * @name toString
         * @memberOf platform
         * @returns {string} Returns `platform.description` if available, else an empty string.
         */
        function toStringPlatform() {
            return this.description || '';
        }

        /*------------------------------------------------------------------------*/

        // Convert layout to an array so we can add extra details.
        layout && (layout = [layout]);

        // Detect Android products.
        // Browsers on Android devices typically provide their product IDS after "Android;"
        // up to "Build" or ") AppleWebKit".
        // Example:
        // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
        // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
        if (/\bAndroid\b/.test(os) && !product &&
            (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
            product = trim(data[1])
                // Replace any language codes (eg. "en-US").
                .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
                || null;
        }
        // Detect product names that contain their manufacturer's name.
        if (manufacturer && !product) {
            product = getProduct([manufacturer]);
        } else if (manufacturer && product) {
            product = product
                .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
                .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
        }
        // Clean up Google TV.
        if ((data = /\bGoogle TV\b/.exec(product))) {
            product = data[0];
        }
        // Detect simulators.
        if (/\bSimulator\b/i.test(ua)) {
            product = (product ? product + ' ' : '') + 'Simulator';
        }
        // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
        if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
            description.push('running in Turbo/Uncompressed mode');
        }
        // Detect IE Mobile 11.
        if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
            data = parse(ua.replace(/like iPhone OS/, ''));
            manufacturer = data.manufacturer;
            product = data.product;
        }
        // Detect iOS.
        else if (/^iP/.test(product)) {
            name || (name = 'Safari');
            os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
                ? ' ' + data[1].replace(/_/g, '.')
                : '');
        }
        // Detect Kubuntu.
        else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
            os = 'Kubuntu';
        }
        // Detect Android browsers.
        else if ((manufacturer && manufacturer != 'Google' &&
            ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
            (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
            name = 'Android Browser';
            os = /\bAndroid\b/.test(os) ? os : 'Android';
        }
        // Detect Silk desktop/accelerated modes.
        else if (name == 'Silk') {
            if (!/\bMobi/i.test(ua)) {
                os = 'Android';
                description.unshift('desktop mode');
            }
            if (/Accelerated *= *true/i.test(ua)) {
                description.unshift('accelerated');
            }
        }
        // Detect UC Browser speed mode.
        else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
            description.push('speed mode');
        }
        // Detect PaleMoon identifying as Firefox.
        else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
            description.push('identifying as Firefox ' + data[1]);
        }
        // Detect Firefox OS and products running Firefox.
        else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
            os || (os = 'Firefox OS');
            product || (product = data[1]);
        }
        // Detect false positives for Firefox/Safari.
        else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
            // Escape the `/` for Firefox 1.
            if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                // Clear name of false positives.
                name = null;
            }
            // Reassign a generic name.
            if ((data = product || manufacturer || os) &&
                (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
            }
        }
        // Add Chrome version to description for Electron.
        else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
            description.push('Chromium ' + data);
        }
        // Detect non-Opera (Presto-based) versions (order is important).
        if (!version) {
            version = getVersion([
                '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
                'Version',
                qualify(name),
                '(?:Firefox|Minefield|NetFront)'
            ]);
        }
        // Detect stubborn layout engines.
        if ((data =
            layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
            /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
            /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
            !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
            layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
            layout = [data];
        }
        // Detect Windows Phone 7 desktop mode.
        if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
            name += ' Mobile';
            os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
            description.unshift('desktop mode');
        }
        // Detect Windows Phone 8.x desktop mode.
        else if (/\bWPDesktop\b/i.test(ua)) {
            name = 'IE Mobile';
            os = 'Windows Phone 8.x';
            description.unshift('desktop mode');
            version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
        }
        // Detect IE 11 identifying as other browsers.
        else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
            if (name) {
                description.push('identifying as ' + name + (version ? ' ' + version : ''));
            }
            name = 'IE';
            version = data[1];
        }
        // Leverage environment features.
        if (useFeatures) {
            // Detect server-side environments.
            // Rhino has a global function while others have a global object.
            if (isHostType(context, 'global')) {
                if (java) {
                    data = java.lang.System;
                    arch = data.getProperty('os.arch');
                    os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
                }
                if (rhino) {
                    try {
                        version = context.require('ringo/engine').version.join('.');
                        name = 'RingoJS';
                    } catch (e) {
                        if ((data = context.system) && data.global.system == context.system) {
                            name = 'Narwhal';
                            os || (os = data[0].os || null);
                        }
                    }
                    if (!name) {
                        name = 'Rhino';
                    }
                }
                else if (
                    typeof context.process == 'object' && !context.process.browser &&
                    (data = context.process)
                ) {
                    if (typeof data.versions == 'object') {
                        if (typeof data.versions.electron == 'string') {
                            description.push('Node ' + data.versions.node);
                            name = 'Electron';
                            version = data.versions.electron;
                        } else if (typeof data.versions.nw == 'string') {
                            description.push('Chromium ' + version, 'Node ' + data.versions.node);
                            name = 'NW.js';
                            version = data.versions.nw;
                        }
                    }
                    if (!name) {
                        name = 'Node.js';
                        arch = data.arch;
                        os = data.platform;
                        version = /[\d.]+/.exec(data.version);
                        version = version ? version[0] : null;
                    }
                }
            }
            // Detect Adobe AIR.
            else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
                name = 'Adobe AIR';
                os = data.flash.system.Capabilities.os;
            }
            // Detect PhantomJS.
            else if (getClassOf((data = context.phantom)) == phantomClass) {
                name = 'PhantomJS';
                version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
            }
            // Detect IE compatibility modes.
            else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
                // We're in compatibility mode when the Trident version + 4 doesn't
                // equal the document mode.
                version = [version, doc.documentMode];
                if ((data = +data[1] + 4) != version[1]) {
                    description.push('IE ' + version[1] + ' mode');
                    layout && (layout[1] = '');
                    version[1] = data;
                }
                version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
            }
            // Detect IE 11 masking as other browsers.
            else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                description.push('masking as ' + name + ' ' + version);
                name = 'IE';
                version = '11.0';
                layout = ['Trident'];
                os = 'Windows';
            }
            os = os && format(os);
        }
        // Detect prerelease phases.
        if (version && (data =
            /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
            /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
            /\bMinefield\b/i.test(ua) && 'a'
        )) {
            prerelease = /b/i.test(data) ? 'beta' : 'alpha';
            version = version.replace(RegExp(data + '\\+?$'), '') +
                (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
        }
        // Detect Firefox Mobile.
        if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
            name = 'Firefox Mobile';
        }
        // Obscure Maxthon's unreliable version.
        else if (name == 'Maxthon' && version) {
            version = version.replace(/\.[\d.]+/, '.x');
        }
        // Detect Xbox 360 and Xbox One.
        else if (/\bXbox\b/i.test(product)) {
            if (product == 'Xbox 360') {
                os = null;
            }
            if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
                description.unshift('mobile mode');
            }
        }
        // Add mobile postfix.
        else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
            (os == 'Windows CE' || /Mobi/i.test(ua))) {
            name += ' Mobile';
        }
        // Detect IE platform preview.
        else if (name == 'IE' && useFeatures) {
            try {
                if (context.external === null) {
                    description.unshift('platform preview');
                }
            } catch (e) {
                description.unshift('embedded');
            }
        }
        // Detect BlackBerry OS version.
        // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
        else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
            (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
            version
        )) {
            data = [data, /BB10/.test(ua)];
            os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
            version = null;
        }
        // Detect Opera identifying/masking itself as another browser.
        // http://www.opera.com/support/kb/view/843/
        else if (this != forOwn && product != 'Wii' && (
            (useFeatures && opera) ||
            (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
            (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
            (name == 'IE' && (
                (os && !/^Win/.test(os) && version > 5.5) ||
                /\bWindows XP\b/.test(os) && version > 8 ||
                version == 8 && !/\bTrident\b/.test(ua)
            ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
            // When "identifying", the UA contains both Opera and the other browser's name.
            data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
            if (reOpera.test(name)) {
                if (/\bIE\b/.test(data) && os == 'Mac OS') {
                    os = null;
                }
                data = 'identify' + data;
            }
            // When "masking", the UA contains only the other browser's name.
            else {
                data = 'mask' + data;
                if (operaClass) {
                    name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                } else {
                    name = 'Opera';
                }
                if (/\bIE\b/.test(data)) {
                    os = null;
                }
                if (!useFeatures) {
                    version = null;
                }
            }
            layout = ['Presto'];
            description.push(data);
        }
        // Detect WebKit Nightly and approximate Chrome/Safari versions.
        if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
            // Correct build number for numeric comparison.
            // (e.g. "532.5" becomes "532.05")
            data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
            // Nightly builds are postfixed with a "+".
            if (name == 'Safari' && data[1].slice(-1) == '+') {
                name = 'WebKit Nightly';
                prerelease = 'alpha';
                version = data[1].slice(0, -1);
            }
            // Clear incorrect browser versions.
            else if (version == data[1] ||
                version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
                version = null;
            }
            // Use the full Chrome version when available.
            data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
            // Detect Blink layout engine.
            if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
                layout = ['Blink'];
            }
            // Detect JavaScriptCore.
            // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
            if (!useFeatures || (!likeChrome && !data[1])) {
                layout && (layout[1] = 'like Safari');
                data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
            } else {
                layout && (layout[1] = 'like Chrome');
                data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
            }
            // Add the postfix of ".x" or "+" for approximate versions.
            layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
            // Obscure version for some Safari 1-2 releases.
            if (name == 'Safari' && (!version || parseInt(version) > 45)) {
                version = data;
            } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
                description.unshift('headless');
            }
        }
        // Detect Opera desktop modes.
        if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
            name += ' ';
            description.unshift('desktop mode');
            if (data == 'zvav') {
                name += 'Mini';
                version = null;
            } else {
                name += 'Mobile';
            }
            os = os.replace(RegExp(' *' + data + '$'), '');
        }
        // Detect Chrome desktop mode.
        else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
            description.unshift('desktop mode');
            name = 'Chrome Mobile';
            version = null;

            if (/\bOS X\b/.test(os)) {
                manufacturer = 'Apple';
                os = 'iOS 4.3+';
            } else {
                os = null;
            }
        }
        // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
        else if (/\bSRWare Iron\b/.test(name) && !version) {
            version = getVersion('Chrome');
        }
        // Strip incorrect OS versions.
        if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
            ua.indexOf('/' + data + '-') > -1) {
            os = trim(os.replace(data, ''));
        }
        // Ensure OS does not include the browser name.
        if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
            os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
        }
        // Add layout engine.
        if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
            /Browser|Lunascape|Maxthon/.test(name) ||
            name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
            /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
            // Don't add layout details to description if they are falsey.
            (data = layout[layout.length - 1]) && description.push(data);
        }
        // Combine contextual information.
        if (description.length) {
            description = ['(' + description.join('; ') + ')'];
        }
        // Append manufacturer to description.
        if (manufacturer && product && product.indexOf(manufacturer) < 0) {
            description.push('on ' + manufacturer);
        }
        // Append product to description.
        if (product) {
            description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
        }
        // Parse the OS into an object.
        if (os) {
            data = / ([\d.+]+)$/.exec(os);
            isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
            os = {
                'architecture': 32,
                'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
                'version': data ? data[1] : null,
                'toString': function () {
                    var version = this.version;
                    return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
                }
            };
        }
        // Add browser/OS architecture.
        if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
            if (os) {
                os.architecture = 64;
                os.family = os.family.replace(RegExp(' *' + data), '');
            }
            if (
                name && (/\bWOW64\b/i.test(ua) ||
                    (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
            ) {
                description.unshift('32-bit');
            }
        }
        // Chrome 39 and above on OS X is always 64-bit.
        else if (
            os && /^OS X/.test(os.family) &&
            name == 'Chrome' && parseFloat(version) >= 39
        ) {
            os.architecture = 64;
        }

        ua || (ua = null);

        /*------------------------------------------------------------------------*/

        /**
         * The platform object.
         *
         * @name platform
         * @type Object
         */
        var platform = {};

        /**
         * The platform description.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.description = ua;

        /**
         * The name of the browser's layout engine.
         *
         * The list of common layout engines include:
         * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.layout = layout && layout[0];

        /**
         * The name of the product's manufacturer.
         *
         * The list of manufacturers include:
         * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
         * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
         * "Nokia", "Samsung" and "Sony"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.manufacturer = manufacturer;

        /**
         * The name of the browser/environment.
         *
         * The list of common browser names include:
         * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
         * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
         * "Opera Mini" and "Opera"
         *
         * Mobile versions of some browsers have "Mobile" appended to their name:
         * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.name = name;

        /**
         * The alpha/beta release indicator.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.prerelease = prerelease;

        /**
         * The name of the product hosting the browser.
         *
         * The list of common products include:
         *
         * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
         * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.product = product;

        /**
         * The browser's user agent string.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.ua = ua;

        /**
         * The browser/environment version.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.version = name && version;

        /**
         * The name of the operating system.
         *
         * @memberOf platform
         * @type Object
         */
        platform.os = os || {

            /**
             * The CPU architecture the OS is built for.
             *
             * @memberOf platform.os
             * @type number|null
             */
            'architecture': null,

            /**
             * The family of the OS.
             *
             * Common values include:
             * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
             * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
             * "SuSE", "Android", "iOS" and "Windows Phone"
             *
             * @memberOf platform.os
             * @type string|null
             */
            'family': null,

            /**
             * The version of the OS.
             *
             * @memberOf platform.os
             * @type string|null
             */
            'version': null,

            /**
             * Returns the OS string.
             *
             * @memberOf platform.os
             * @returns {string} The OS string.
             */
            'toString': function () { return 'null'; }
        };

        platform.parse = parse;
        platform.toString = toStringPlatform;

        if (platform.version) {
            description.unshift(version);
        }
        if (platform.name) {
            description.unshift(name);
        }
        if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
            description.push(product ? '(' + os + ')' : 'on ' + os);
        }
        if (description.length) {
            platform.description = description.join(' ');
        }
        return platform;
    }

    /*--------------------------------------------------------------------------*/

    // Export platform.
    var platform = parse();

    // Some AMD build optimizers, like r.js, check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose platform on the global object to prevent errors when platform is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        root.platform = platform;

        // Define as an anonymous module so platform can be aliased through path mapping.
        define(function () {
            return platform;
        });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for CommonJS support.
        forOwn(platform, function (value, key) {
            freeExports[key] = value;
        });
    }
    else {
        // Export to the global object.
        root.platform = platform;
    }
}.call(this));

; (function (globalScope) {
	'use strict';


	/*
	 *  decimal.js v10.2.1
	 *  An arbitrary-precision Decimal type for JavaScript.
	 *  https://github.com/MikeMcl/decimal.js
	 *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
	 *  MIT Licence
	 */


	// -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


	// The maximum exponent magnitude.
	// The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
	var EXP_LIMIT = 9e15,                      // 0 to 9e15

		// The limit on the value of `precision`, and on the value of the first argument to
		// `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
		MAX_DIGITS = 1e9,                        // 0 to 1e9

		// Base conversion alphabet.
		NUMERALS = '0123456789abcdef',

		// The natural logarithm of 10 (1025 digits).
		LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

		// Pi (1025 digits).
		PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


		// The initial configuration properties of the Decimal constructor.
		DEFAULTS = {

			// These values must be integers within the stated ranges (inclusive).
			// Most of these values can be changed at run-time using the `Decimal.config` method.

			// The maximum number of significant digits of the result of a calculation or base conversion.
			// E.g. `Decimal.config({ precision: 20 });`
			precision: 20,                         // 1 to MAX_DIGITS

			// The rounding mode used when rounding to `precision`.
			//
			// ROUND_UP         0 Away from zero.
			// ROUND_DOWN       1 Towards zero.
			// ROUND_CEIL       2 Towards +Infinity.
			// ROUND_FLOOR      3 Towards -Infinity.
			// ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
			// ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
			// ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
			// ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
			// ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
			//
			// E.g.
			// `Decimal.rounding = 4;`
			// `Decimal.rounding = Decimal.ROUND_HALF_UP;`
			rounding: 4,                           // 0 to 8

			// The modulo mode used when calculating the modulus: a mod n.
			// The quotient (q = a / n) is calculated according to the corresponding rounding mode.
			// The remainder (r) is calculated as: r = a - n * q.
			//
			// UP         0 The remainder is positive if the dividend is negative, else is negative.
			// DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
			// FLOOR      3 The remainder has the same sign as the divisor (Python %).
			// HALF_EVEN  6 The IEEE 754 remainder function.
			// EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
			//
			// Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
			// division (9) are commonly used for the modulus operation. The other rounding modes can also
			// be used, but they may not give useful results.
			modulo: 1,                             // 0 to 9

			// The exponent value at and beneath which `toString` returns exponential notation.
			// JavaScript numbers: -7
			toExpNeg: -7,                          // 0 to -EXP_LIMIT

			// The exponent value at and above which `toString` returns exponential notation.
			// JavaScript numbers: 21
			toExpPos: 21,                         // 0 to EXP_LIMIT

			// The minimum exponent value, beneath which underflow to zero occurs.
			// JavaScript numbers: -324  (5e-324)
			minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

			// The maximum exponent value, above which overflow to Infinity occurs.
			// JavaScript numbers: 308  (1.7976931348623157e+308)
			maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

			// Whether to use cryptographically-secure random number generation, if available.
			crypto: false                          // true/false
		},


		// ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


		Decimal, inexact, noConflict, quadrant,
		external = true,

		decimalError = '[DecimalError] ',
		invalidArgument = decimalError + 'Invalid argument: ',
		precisionLimitExceeded = decimalError + 'Precision limit exceeded',
		cryptoUnavailable = decimalError + 'crypto unavailable',

		mathfloor = Math.floor,
		mathpow = Math.pow,

		isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
		isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
		isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
		isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

		BASE = 1e7,
		LOG_BASE = 7,
		MAX_SAFE_INTEGER = 9007199254740991,

		LN10_PRECISION = LN10.length - 1,
		PI_PRECISION = PI.length - 1,

		// Decimal.prototype object
		P = { name: '[object Decimal]' };


	// Decimal prototype methods


	/*
	 *  absoluteValue             abs
	 *  ceil
	 *  comparedTo                cmp
	 *  cosine                    cos
	 *  cubeRoot                  cbrt
	 *  decimalPlaces             dp
	 *  dividedBy                 div
	 *  dividedToIntegerBy        divToInt
	 *  equals                    eq
	 *  floor
	 *  greaterThan               gt
	 *  greaterThanOrEqualTo      gte
	 *  hyperbolicCosine          cosh
	 *  hyperbolicSine            sinh
	 *  hyperbolicTangent         tanh
	 *  inverseCosine             acos
	 *  inverseHyperbolicCosine   acosh
	 *  inverseHyperbolicSine     asinh
	 *  inverseHyperbolicTangent  atanh
	 *  inverseSine               asin
	 *  inverseTangent            atan
	 *  isFinite
	 *  isInteger                 isInt
	 *  isNaN
	 *  isNegative                isNeg
	 *  isPositive                isPos
	 *  isZero
	 *  lessThan                  lt
	 *  lessThanOrEqualTo         lte
	 *  logarithm                 log
	 *  [maximum]                 [max]
	 *  [minimum]                 [min]
	 *  minus                     sub
	 *  modulo                    mod
	 *  naturalExponential        exp
	 *  naturalLogarithm          ln
	 *  negated                   neg
	 *  plus                      add
	 *  precision                 sd
	 *  round
	 *  sine                      sin
	 *  squareRoot                sqrt
	 *  tangent                   tan
	 *  times                     mul
	 *  toBinary
	 *  toDecimalPlaces           toDP
	 *  toExponential
	 *  toFixed
	 *  toFraction
	 *  toHexadecimal             toHex
	 *  toNearest
	 *  toNumber
	 *  toOctal
	 *  toPower                   pow
	 *  toPrecision
	 *  toSignificantDigits       toSD
	 *  toString
	 *  truncated                 trunc
	 *  valueOf                   toJSON
	 */


	/*
	 * Return a new Decimal whose value is the absolute value of this Decimal.
	 *
	 */
	P.absoluteValue = P.abs = function () {
		var x = new this.constructor(this);
		if (x.s < 0) x.s = 1;
		return finalise(x);
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
	 * direction of positive Infinity.
	 *
	 */
	P.ceil = function () {
		return finalise(new this.constructor(this), this.e + 1, 2);
	};


	/*
	 * Return
	 *   1    if the value of this Decimal is greater than the value of `y`,
	 *  -1    if the value of this Decimal is less than the value of `y`,
	 *   0    if they have the same value,
	 *   NaN  if the value of either Decimal is NaN.
	 *
	 */
	P.comparedTo = P.cmp = function (y) {
		var i, j, xdL, ydL,
			x = this,
			xd = x.d,
			yd = (y = new x.constructor(y)).d,
			xs = x.s,
			ys = y.s;

		// Either NaN or Å}Infinity?
		if (!xd || !yd) {
			return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
		}

		// Either zero?
		if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

		// Signs differ?
		if (xs !== ys) return xs;

		// Compare exponents.
		if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

		xdL = xd.length;
		ydL = yd.length;

		// Compare digit by digit.
		for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
			if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
		}

		// Compare lengths.
		return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
	};


	/*
	 * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-1, 1]
	 *
	 * cos(0)         = 1
	 * cos(-0)        = 1
	 * cos(Infinity)  = NaN
	 * cos(-Infinity) = NaN
	 * cos(NaN)       = NaN
	 *
	 */
	P.cosine = P.cos = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (!x.d) return new Ctor(NaN);

		// cos(0) = cos(-0) = 1
		if (!x.d[0]) return new Ctor(1);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
		Ctor.rounding = 1;

		x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
	};


	/*
	 *
	 * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 *  cbrt(0)  =  0
	 *  cbrt(-0) = -0
	 *  cbrt(1)  =  1
	 *  cbrt(-1) = -1
	 *  cbrt(N)  =  N
	 *  cbrt(-I) = -I
	 *  cbrt(I)  =  I
	 *
	 * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
	 *
	 */
	P.cubeRoot = P.cbrt = function () {
		var e, m, n, r, rep, s, sd, t, t3, t3plusx,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite() || x.isZero()) return new Ctor(x);
		external = false;

		// Initial estimate.
		s = x.s * mathpow(x.s * x, 1 / 3);

		// Math.cbrt underflow/overflow?
		// Pass x to Math.pow as integer, then adjust the exponent of the result.
		if (!s || Math.abs(s) == 1 / 0) {
			n = digitsToString(x.d);
			e = x.e;

			// Adjust n exponent so it is a multiple of 3 away from x exponent.
			if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
			s = mathpow(n, 1 / 3);

			// Rarely, e may be one less than the result exponent value.
			e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

			if (s == 1 / 0) {
				n = '5e' + e;
			} else {
				n = s.toExponential();
				n = n.slice(0, n.indexOf('e') + 1) + e;
			}

			r = new Ctor(n);
			r.s = x.s;
		} else {
			r = new Ctor(s.toString());
		}

		sd = (e = Ctor.precision) + 3;

		// Halley's method.
		// TODO? Compare Newton's method.
		for (; ;) {
			t = r;
			t3 = t.times(t).times(t);
			t3plusx = t3.plus(x);
			r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

			// TODO? Replace with for-loop and checkRoundingDigits.
			if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
				n = n.slice(sd - 3, sd + 1);

				// The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
				// , i.e. approaching a rounding boundary, continue the iteration.
				if (n == '9999' || !rep && n == '4999') {

					// On the first iteration only, check to see if rounding up gives the exact result as the
					// nines may infinitely repeat.
					if (!rep) {
						finalise(t, e + 1, 0);

						if (t.times(t).times(t).eq(x)) {
							r = t;
							break;
						}
					}

					sd += 4;
					rep = 1;
				} else {

					// If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
					// If not, then there are further digits and m will be truthy.
					if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

						// Truncate to the first rounding digit.
						finalise(r, e + 1, 1);
						m = !r.times(r).times(r).eq(x);
					}

					break;
				}
			}
		}

		external = true;

		return finalise(r, e, Ctor.rounding, m);
	};


	/*
	 * Return the number of decimal places of the value of this Decimal.
	 *
	 */
	P.decimalPlaces = P.dp = function () {
		var w,
			d = this.d,
			n = NaN;

		if (d) {
			w = d.length - 1;
			n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

			// Subtract the number of trailing zeros of the last word.
			w = d[w];
			if (w) for (; w % 10 == 0; w /= 10) n--;
			if (n < 0) n = 0;
		}

		return n;
	};


	/*
	 *  n / 0 = I
	 *  n / N = N
	 *  n / I = 0
	 *  0 / n = 0
	 *  0 / 0 = N
	 *  0 / N = N
	 *  0 / I = 0
	 *  N / n = N
	 *  N / 0 = N
	 *  N / N = N
	 *  N / I = N
	 *  I / n = I
	 *  I / 0 = I
	 *  I / N = N
	 *  I / I = N
	 *
	 * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 */
	P.dividedBy = P.div = function (y) {
		return divide(this, new this.constructor(y));
	};


	/*
	 * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
	 * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
	 *
	 */
	P.dividedToIntegerBy = P.divToInt = function (y) {
		var x = this,
			Ctor = x.constructor;
		return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
	};


	/*
	 * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
	 *
	 */
	P.equals = P.eq = function (y) {
		return this.cmp(y) === 0;
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
	 * direction of negative Infinity.
	 *
	 */
	P.floor = function () {
		return finalise(new this.constructor(this), this.e + 1, 3);
	};


	/*
	 * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
	 * false.
	 *
	 */
	P.greaterThan = P.gt = function (y) {
		return this.cmp(y) > 0;
	};


	/*
	 * Return true if the value of this Decimal is greater than or equal to the value of `y`,
	 * otherwise return false.
	 *
	 */
	P.greaterThanOrEqualTo = P.gte = function (y) {
		var k = this.cmp(y);
		return k == 1 || k === 0;
	};


	/*
	 * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
	 * Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [1, Infinity]
	 *
	 * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
	 *
	 * cosh(0)         = 1
	 * cosh(-0)        = 1
	 * cosh(Infinity)  = Infinity
	 * cosh(-Infinity) = Infinity
	 * cosh(NaN)       = NaN
	 *
	 *  x        time taken (ms)   result
	 * 1000      9                 9.8503555700852349694e+433
	 * 10000     25                4.4034091128314607936e+4342
	 * 100000    171               1.4033316802130615897e+43429
	 * 1000000   3817              1.5166076984010437725e+434294
	 * 10000000  abandoned after 2 minute wait
	 *
	 * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
	 *
	 */
	P.hyperbolicCosine = P.cosh = function () {
		var k, n, pr, rm, len,
			x = this,
			Ctor = x.constructor,
			one = new Ctor(1);

		if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
		if (x.isZero()) return one;

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
		Ctor.rounding = 1;
		len = x.d.length;

		// Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
		// i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

		// Estimate the optimum number of times to use the argument reduction.
		// TODO? Estimation reused from cosine() and may not be optimal here.
		if (len < 32) {
			k = Math.ceil(len / 3);
			n = (1 / tinyPow(4, k)).toString();
		} else {
			k = 16;
			n = '2.3283064365386962890625e-10';
		}

		x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

		// Reverse argument reduction
		var cosh2_x,
			i = k,
			d8 = new Ctor(8);
		for (; i--;) {
			cosh2_x = x.times(x);
			x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
		}

		return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
	};


	/*
	 * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
	 * Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-Infinity, Infinity]
	 *
	 * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
	 *
	 * sinh(0)         = 0
	 * sinh(-0)        = -0
	 * sinh(Infinity)  = Infinity
	 * sinh(-Infinity) = -Infinity
	 * sinh(NaN)       = NaN
	 *
	 * x        time taken (ms)
	 * 10       2 ms
	 * 100      5 ms
	 * 1000     14 ms
	 * 10000    82 ms
	 * 100000   886 ms            1.4033316802130615897e+43429
	 * 200000   2613 ms
	 * 300000   5407 ms
	 * 400000   8824 ms
	 * 500000   13026 ms          8.7080643612718084129e+217146
	 * 1000000  48543 ms
	 *
	 * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
	 *
	 */
	P.hyperbolicSine = P.sinh = function () {
		var k, pr, rm, len,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite() || x.isZero()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
		Ctor.rounding = 1;
		len = x.d.length;

		if (len < 3) {
			x = taylorSeries(Ctor, 2, x, x, true);
		} else {

			// Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
			// i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
			// 3 multiplications and 1 addition

			// Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
			// i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
			// 4 multiplications and 2 additions

			// Estimate the optimum number of times to use the argument reduction.
			k = 1.4 * Math.sqrt(len);
			k = k > 16 ? 16 : k | 0;

			x = x.times(1 / tinyPow(5, k));
			x = taylorSeries(Ctor, 2, x, x, true);

			// Reverse argument reduction
			var sinh2_x,
				d5 = new Ctor(5),
				d16 = new Ctor(16),
				d20 = new Ctor(20);
			for (; k--;) {
				sinh2_x = x.times(x);
				x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
			}
		}

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return finalise(x, pr, rm, true);
	};


	/*
	 * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
	 * Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-1, 1]
	 *
	 * tanh(x) = sinh(x) / cosh(x)
	 *
	 * tanh(0)         = 0
	 * tanh(-0)        = -0
	 * tanh(Infinity)  = 1
	 * tanh(-Infinity) = -1
	 * tanh(NaN)       = NaN
	 *
	 */
	P.hyperbolicTangent = P.tanh = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite()) return new Ctor(x.s);
		if (x.isZero()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 7;
		Ctor.rounding = 1;

		return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
	};


	/*
	 * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
	 * this Decimal.
	 *
	 * Domain: [-1, 1]
	 * Range: [0, pi]
	 *
	 * acos(x) = pi/2 - asin(x)
	 *
	 * acos(0)       = pi/2
	 * acos(-0)      = pi/2
	 * acos(1)       = 0
	 * acos(-1)      = pi
	 * acos(1/2)     = pi/3
	 * acos(-1/2)    = 2*pi/3
	 * acos(|x| > 1) = NaN
	 * acos(NaN)     = NaN
	 *
	 */
	P.inverseCosine = P.acos = function () {
		var halfPi,
			x = this,
			Ctor = x.constructor,
			k = x.abs().cmp(1),
			pr = Ctor.precision,
			rm = Ctor.rounding;

		if (k !== -1) {
			return k === 0
				// |x| is 1
				? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
				// |x| > 1 or x is NaN
				: new Ctor(NaN);
		}

		if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

		// TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

		Ctor.precision = pr + 6;
		Ctor.rounding = 1;

		x = x.asin();
		halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return halfPi.minus(x);
	};


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
	 * value of this Decimal.
	 *
	 * Domain: [1, Infinity]
	 * Range: [0, Infinity]
	 *
	 * acosh(x) = ln(x + sqrt(x^2 - 1))
	 *
	 * acosh(x < 1)     = NaN
	 * acosh(NaN)       = NaN
	 * acosh(Infinity)  = Infinity
	 * acosh(-Infinity) = NaN
	 * acosh(0)         = NaN
	 * acosh(-0)        = NaN
	 * acosh(1)         = 0
	 * acosh(-1)        = NaN
	 *
	 */
	P.inverseHyperbolicCosine = P.acosh = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
		if (!x.isFinite()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
		Ctor.rounding = 1;
		external = false;

		x = x.times(x).minus(1).sqrt().plus(x);

		external = true;
		Ctor.precision = pr;
		Ctor.rounding = rm;

		return x.ln();
	};


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
	 * of this Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-Infinity, Infinity]
	 *
	 * asinh(x) = ln(x + sqrt(x^2 + 1))
	 *
	 * asinh(NaN)       = NaN
	 * asinh(Infinity)  = Infinity
	 * asinh(-Infinity) = -Infinity
	 * asinh(0)         = 0
	 * asinh(-0)        = -0
	 *
	 */
	P.inverseHyperbolicSine = P.asinh = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite() || x.isZero()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
		Ctor.rounding = 1;
		external = false;

		x = x.times(x).plus(1).sqrt().plus(x);

		external = true;
		Ctor.precision = pr;
		Ctor.rounding = rm;

		return x.ln();
	};


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
	 * value of this Decimal.
	 *
	 * Domain: [-1, 1]
	 * Range: [-Infinity, Infinity]
	 *
	 * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
	 *
	 * atanh(|x| > 1)   = NaN
	 * atanh(NaN)       = NaN
	 * atanh(Infinity)  = NaN
	 * atanh(-Infinity) = NaN
	 * atanh(0)         = 0
	 * atanh(-0)        = -0
	 * atanh(1)         = Infinity
	 * atanh(-1)        = -Infinity
	 *
	 */
	P.inverseHyperbolicTangent = P.atanh = function () {
		var pr, rm, wpr, xsd,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite()) return new Ctor(NaN);
		if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		xsd = x.sd();

		if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

		Ctor.precision = wpr = xsd - x.e;

		x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

		Ctor.precision = pr + 4;
		Ctor.rounding = 1;

		x = x.ln();

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return x.times(0.5);
	};


	/*
	 * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
	 * Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-pi/2, pi/2]
	 *
	 * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
	 *
	 * asin(0)       = 0
	 * asin(-0)      = -0
	 * asin(1/2)     = pi/6
	 * asin(-1/2)    = -pi/6
	 * asin(1)       = pi/2
	 * asin(-1)      = -pi/2
	 * asin(|x| > 1) = NaN
	 * asin(NaN)     = NaN
	 *
	 * TODO? Compare performance of Taylor series.
	 *
	 */
	P.inverseSine = P.asin = function () {
		var halfPi, k,
			pr, rm,
			x = this,
			Ctor = x.constructor;

		if (x.isZero()) return new Ctor(x);

		k = x.abs().cmp(1);
		pr = Ctor.precision;
		rm = Ctor.rounding;

		if (k !== -1) {

			// |x| is 1
			if (k === 0) {
				halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
				halfPi.s = x.s;
				return halfPi;
			}

			// |x| > 1 or x is NaN
			return new Ctor(NaN);
		}

		// TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

		Ctor.precision = pr + 6;
		Ctor.rounding = 1;

		x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return x.times(2);
	};


	/*
	 * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
	 * of this Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-pi/2, pi/2]
	 *
	 * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
	 *
	 * atan(0)         = 0
	 * atan(-0)        = -0
	 * atan(1)         = pi/4
	 * atan(-1)        = -pi/4
	 * atan(Infinity)  = pi/2
	 * atan(-Infinity) = -pi/2
	 * atan(NaN)       = NaN
	 *
	 */
	P.inverseTangent = P.atan = function () {
		var i, j, k, n, px, t, r, wpr, x2,
			x = this,
			Ctor = x.constructor,
			pr = Ctor.precision,
			rm = Ctor.rounding;

		if (!x.isFinite()) {
			if (!x.s) return new Ctor(NaN);
			if (pr + 4 <= PI_PRECISION) {
				r = getPi(Ctor, pr + 4, rm).times(0.5);
				r.s = x.s;
				return r;
			}
		} else if (x.isZero()) {
			return new Ctor(x);
		} else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
			r = getPi(Ctor, pr + 4, rm).times(0.25);
			r.s = x.s;
			return r;
		}

		Ctor.precision = wpr = pr + 10;
		Ctor.rounding = 1;

		// TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

		// Argument reduction
		// Ensure |x| < 0.42
		// atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

		k = Math.min(28, wpr / LOG_BASE + 2 | 0);

		for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

		external = false;

		j = Math.ceil(wpr / LOG_BASE);
		n = 1;
		x2 = x.times(x);
		r = new Ctor(x);
		px = x;

		// atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
		for (; i !== -1;) {
			px = px.times(x2);
			t = r.minus(px.div(n += 2));

			px = px.times(x2);
			r = t.plus(px.div(n += 2));

			if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
		}

		if (k) r = r.times(2 << (k - 1));

		external = true;

		return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
	};


	/*
	 * Return true if the value of this Decimal is a finite number, otherwise return false.
	 *
	 */
	P.isFinite = function () {
		return !!this.d;
	};


	/*
	 * Return true if the value of this Decimal is an integer, otherwise return false.
	 *
	 */
	P.isInteger = P.isInt = function () {
		return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
	};


	/*
	 * Return true if the value of this Decimal is NaN, otherwise return false.
	 *
	 */
	P.isNaN = function () {
		return !this.s;
	};


	/*
	 * Return true if the value of this Decimal is negative, otherwise return false.
	 *
	 */
	P.isNegative = P.isNeg = function () {
		return this.s < 0;
	};


	/*
	 * Return true if the value of this Decimal is positive, otherwise return false.
	 *
	 */
	P.isPositive = P.isPos = function () {
		return this.s > 0;
	};


	/*
	 * Return true if the value of this Decimal is 0 or -0, otherwise return false.
	 *
	 */
	P.isZero = function () {
		return !!this.d && this.d[0] === 0;
	};


	/*
	 * Return true if the value of this Decimal is less than `y`, otherwise return false.
	 *
	 */
	P.lessThan = P.lt = function (y) {
		return this.cmp(y) < 0;
	};


	/*
	 * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
	 *
	 */
	P.lessThanOrEqualTo = P.lte = function (y) {
		return this.cmp(y) < 1;
	};


	/*
	 * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * If no base is specified, return log[10](arg).
	 *
	 * log[base](arg) = ln(arg) / ln(base)
	 *
	 * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
	 * otherwise:
	 *
	 * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
	 * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
	 * between the result and the correctly rounded result will be one ulp (unit in the last place).
	 *
	 * log[-b](a)       = NaN
	 * log[0](a)        = NaN
	 * log[1](a)        = NaN
	 * log[NaN](a)      = NaN
	 * log[Infinity](a) = NaN
	 * log[b](0)        = -Infinity
	 * log[b](-0)       = -Infinity
	 * log[b](-a)       = NaN
	 * log[b](1)        = 0
	 * log[b](Infinity) = Infinity
	 * log[b](NaN)      = NaN
	 *
	 * [base] {number|string|Decimal} The base of the logarithm.
	 *
	 */
	P.logarithm = P.log = function (base) {
		var isBase10, d, denominator, k, inf, num, sd, r,
			arg = this,
			Ctor = arg.constructor,
			pr = Ctor.precision,
			rm = Ctor.rounding,
			guard = 5;

		// Default base is 10.
		if (base == null) {
			base = new Ctor(10);
			isBase10 = true;
		} else {
			base = new Ctor(base);
			d = base.d;

			// Return NaN if base is negative, or non-finite, or is 0 or 1.
			if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

			isBase10 = base.eq(10);
		}

		d = arg.d;

		// Is arg negative, non-finite, 0 or 1?
		if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
			return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
		}

		// The result will have a non-terminating decimal expansion if base is 10 and arg is not an
		// integer power of 10.
		if (isBase10) {
			if (d.length > 1) {
				inf = true;
			} else {
				for (k = d[0]; k % 10 === 0;) k /= 10;
				inf = k !== 1;
			}
		}

		external = false;
		sd = pr + guard;
		num = naturalLogarithm(arg, sd);
		denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

		// The result will have 5 rounding digits.
		r = divide(num, denominator, sd, 1);

		// If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
		// calculate 10 further digits.
		//
		// If the result is known to have an infinite decimal expansion, repeat this until it is clear
		// that the result is above or below the boundary. Otherwise, if after calculating the 10
		// further digits, the last 14 are nines, round up and assume the result is exact.
		// Also assume the result is exact if the last 14 are zero.
		//
		// Example of a result that will be incorrectly rounded:
		// log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
		// The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
		// will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
		// the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
		// place is still 2.6.
		if (checkRoundingDigits(r.d, k = pr, rm)) {

			do {
				sd += 10;
				num = naturalLogarithm(arg, sd);
				denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
				r = divide(num, denominator, sd, 1);

				if (!inf) {

					// Check for 14 nines from the 2nd rounding digit, as the first may be 4.
					if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
						r = finalise(r, pr + 1, 0);
					}

					break;
				}
			} while (checkRoundingDigits(r.d, k += 10, rm));
		}

		external = true;

		return finalise(r, pr, rm);
	};


	/*
	 * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
	 *
	 * arguments {number|string|Decimal}
	 *
	P.max = function () {
	  Array.prototype.push.call(arguments, this);
	  return maxOrMin(this.constructor, arguments, 'lt');
	};
	 */


	/*
	 * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
	 *
	 * arguments {number|string|Decimal}
	 *
	P.min = function () {
	  Array.prototype.push.call(arguments, this);
	  return maxOrMin(this.constructor, arguments, 'gt');
	};
	 */


	/*
	 *  n - 0 = n
	 *  n - N = N
	 *  n - I = -I
	 *  0 - n = -n
	 *  0 - 0 = 0
	 *  0 - N = N
	 *  0 - I = -I
	 *  N - n = N
	 *  N - 0 = N
	 *  N - N = N
	 *  N - I = N
	 *  I - n = I
	 *  I - 0 = I
	 *  I - N = N
	 *  I - I = N
	 *
	 * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 */
	P.minus = P.sub = function (y) {
		var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
			x = this,
			Ctor = x.constructor;

		y = new Ctor(y);

		// If either is not finite...
		if (!x.d || !y.d) {

			// Return NaN if either is NaN.
			if (!x.s || !y.s) y = new Ctor(NaN);

			// Return y negated if x is finite and y is Å}Infinity.
			else if (x.d) y.s = -y.s;

			// Return x if y is finite and x is Å}Infinity.
			// Return x if both are Å}Infinity with different signs.
			// Return NaN if both are Å}Infinity with the same sign.
			else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

			return y;
		}

		// If signs differ...
		if (x.s != y.s) {
			y.s = -y.s;
			return x.plus(y);
		}

		xd = x.d;
		yd = y.d;
		pr = Ctor.precision;
		rm = Ctor.rounding;

		// If either is zero...
		if (!xd[0] || !yd[0]) {

			// Return y negated if x is zero and y is non-zero.
			if (yd[0]) y.s = -y.s;

			// Return x if y is zero and x is non-zero.
			else if (xd[0]) y = new Ctor(x);

			// Return zero if both are zero.
			// From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
			else return new Ctor(rm === 3 ? -0 : 0);

			return external ? finalise(y, pr, rm) : y;
		}

		// x and y are finite, non-zero numbers with the same sign.

		// Calculate base 1e7 exponents.
		e = mathfloor(y.e / LOG_BASE);
		xe = mathfloor(x.e / LOG_BASE);

		xd = xd.slice();
		k = xe - e;

		// If base 1e7 exponents differ...
		if (k) {
			xLTy = k < 0;

			if (xLTy) {
				d = xd;
				k = -k;
				len = yd.length;
			} else {
				d = yd;
				e = xe;
				len = xd.length;
			}

			// Numbers with massively different exponents would result in a very high number of
			// zeros needing to be prepended, but this can be avoided while still ensuring correct
			// rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
			i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

			if (k > i) {
				k = i;
				d.length = 1;
			}

			// Prepend zeros to equalise exponents.
			d.reverse();
			for (i = k; i--;) d.push(0);
			d.reverse();

			// Base 1e7 exponents equal.
		} else {

			// Check digits to determine which is the bigger number.

			i = xd.length;
			len = yd.length;
			xLTy = i < len;
			if (xLTy) len = i;

			for (i = 0; i < len; i++) {
				if (xd[i] != yd[i]) {
					xLTy = xd[i] < yd[i];
					break;
				}
			}

			k = 0;
		}

		if (xLTy) {
			d = xd;
			xd = yd;
			yd = d;
			y.s = -y.s;
		}

		len = xd.length;

		// Append zeros to `xd` if shorter.
		// Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
		for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

		// Subtract yd from xd.
		for (i = yd.length; i > k;) {

			if (xd[--i] < yd[i]) {
				for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
				--xd[j];
				xd[i] += BASE;
			}

			xd[i] -= yd[i];
		}

		// Remove trailing zeros.
		for (; xd[--len] === 0;) xd.pop();

		// Remove leading zeros and adjust exponent accordingly.
		for (; xd[0] === 0; xd.shift()) --e;

		// Zero?
		if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

		y.d = xd;
		y.e = getBase10Exponent(xd, e);

		return external ? finalise(y, pr, rm) : y;
	};


	/*
	 *   n % 0 =  N
	 *   n % N =  N
	 *   n % I =  n
	 *   0 % n =  0
	 *  -0 % n = -0
	 *   0 % 0 =  N
	 *   0 % N =  N
	 *   0 % I =  0
	 *   N % n =  N
	 *   N % 0 =  N
	 *   N % N =  N
	 *   N % I =  N
	 *   I % n =  N
	 *   I % 0 =  N
	 *   I % N =  N
	 *   I % I =  N
	 *
	 * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 * The result depends on the modulo mode.
	 *
	 */
	P.modulo = P.mod = function (y) {
		var q,
			x = this,
			Ctor = x.constructor;

		y = new Ctor(y);

		// Return NaN if x is Å}Infinity or NaN, or y is NaN or Å}0.
		if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

		// Return x if y is Å}Infinity or x is Å}0.
		if (!y.d || x.d && !x.d[0]) {
			return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
		}

		// Prevent rounding of intermediate calculations.
		external = false;

		if (Ctor.modulo == 9) {

			// Euclidian division: q = sign(y) * floor(x / abs(y))
			// result = x - q * y    where  0 <= result < abs(y)
			q = divide(x, y.abs(), 0, 3, 1);
			q.s *= y.s;
		} else {
			q = divide(x, y, 0, Ctor.modulo, 1);
		}

		q = q.times(y);

		external = true;

		return x.minus(q);
	};


	/*
	 * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
	 * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 */
	P.naturalExponential = P.exp = function () {
		return naturalExponential(this);
	};


	/*
	 * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
	 * rounded to `precision` significant digits using rounding mode `rounding`.
	 *
	 */
	P.naturalLogarithm = P.ln = function () {
		return naturalLogarithm(this);
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
	 * -1.
	 *
	 */
	P.negated = P.neg = function () {
		var x = new this.constructor(this);
		x.s = -x.s;
		return finalise(x);
	};


	/*
	 *  n + 0 = n
	 *  n + N = N
	 *  n + I = I
	 *  0 + n = n
	 *  0 + 0 = 0
	 *  0 + N = N
	 *  0 + I = I
	 *  N + n = N
	 *  N + 0 = N
	 *  N + N = N
	 *  N + I = N
	 *  I + n = I
	 *  I + 0 = I
	 *  I + N = N
	 *  I + I = I
	 *
	 * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 */
	P.plus = P.add = function (y) {
		var carry, d, e, i, k, len, pr, rm, xd, yd,
			x = this,
			Ctor = x.constructor;

		y = new Ctor(y);

		// If either is not finite...
		if (!x.d || !y.d) {

			// Return NaN if either is NaN.
			if (!x.s || !y.s) y = new Ctor(NaN);

			// Return x if y is finite and x is Å}Infinity.
			// Return x if both are Å}Infinity with the same sign.
			// Return NaN if both are Å}Infinity with different signs.
			// Return y if x is finite and y is Å}Infinity.
			else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

			return y;
		}

		// If signs differ...
		if (x.s != y.s) {
			y.s = -y.s;
			return x.minus(y);
		}

		xd = x.d;
		yd = y.d;
		pr = Ctor.precision;
		rm = Ctor.rounding;

		// If either is zero...
		if (!xd[0] || !yd[0]) {

			// Return x if y is zero.
			// Return y if y is non-zero.
			if (!yd[0]) y = new Ctor(x);

			return external ? finalise(y, pr, rm) : y;
		}

		// x and y are finite, non-zero numbers with the same sign.

		// Calculate base 1e7 exponents.
		k = mathfloor(x.e / LOG_BASE);
		e = mathfloor(y.e / LOG_BASE);

		xd = xd.slice();
		i = k - e;

		// If base 1e7 exponents differ...
		if (i) {

			if (i < 0) {
				d = xd;
				i = -i;
				len = yd.length;
			} else {
				d = yd;
				e = k;
				len = xd.length;
			}

			// Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
			k = Math.ceil(pr / LOG_BASE);
			len = k > len ? k + 1 : len + 1;

			if (i > len) {
				i = len;
				d.length = 1;
			}

			// Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
			d.reverse();
			for (; i--;) d.push(0);
			d.reverse();
		}

		len = xd.length;
		i = yd.length;

		// If yd is longer than xd, swap xd and yd so xd points to the longer array.
		if (len - i < 0) {
			i = len;
			d = yd;
			yd = xd;
			xd = d;
		}

		// Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
		for (carry = 0; i;) {
			carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
			xd[i] %= BASE;
		}

		if (carry) {
			xd.unshift(carry);
			++e;
		}

		// Remove trailing zeros.
		// No need to check for zero, as +x + +y != 0 && -x + -y != 0
		for (len = xd.length; xd[--len] == 0;) xd.pop();

		y.d = xd;
		y.e = getBase10Exponent(xd, e);

		return external ? finalise(y, pr, rm) : y;
	};


	/*
	 * Return the number of significant digits of the value of this Decimal.
	 *
	 * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
	 *
	 */
	P.precision = P.sd = function (z) {
		var k,
			x = this;

		if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

		if (x.d) {
			k = getPrecision(x.d);
			if (z && x.e + 1 > k) k = x.e + 1;
		} else {
			k = NaN;
		}

		return k;
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
	 * rounding mode `rounding`.
	 *
	 */
	P.round = function () {
		var x = this,
			Ctor = x.constructor;

		return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
	};


	/*
	 * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-1, 1]
	 *
	 * sin(x) = x - x^3/3! + x^5/5! - ...
	 *
	 * sin(0)         = 0
	 * sin(-0)        = -0
	 * sin(Infinity)  = NaN
	 * sin(-Infinity) = NaN
	 * sin(NaN)       = NaN
	 *
	 */
	P.sine = P.sin = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite()) return new Ctor(NaN);
		if (x.isZero()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
		Ctor.rounding = 1;

		x = sine(Ctor, toLessThanHalfPi(Ctor, x));

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
	};


	/*
	 * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 *  sqrt(-n) =  N
	 *  sqrt(N)  =  N
	 *  sqrt(-I) =  N
	 *  sqrt(I)  =  I
	 *  sqrt(0)  =  0
	 *  sqrt(-0) = -0
	 *
	 */
	P.squareRoot = P.sqrt = function () {
		var m, n, sd, r, rep, t,
			x = this,
			d = x.d,
			e = x.e,
			s = x.s,
			Ctor = x.constructor;

		// Negative/NaN/Infinity/zero?
		if (s !== 1 || !d || !d[0]) {
			return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
		}

		external = false;

		// Initial estimate.
		s = Math.sqrt(+x);

		// Math.sqrt underflow/overflow?
		// Pass x to Math.sqrt as integer, then adjust the exponent of the result.
		if (s == 0 || s == 1 / 0) {
			n = digitsToString(d);

			if ((n.length + e) % 2 == 0) n += '0';
			s = Math.sqrt(n);
			e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

			if (s == 1 / 0) {
				n = '5e' + e;
			} else {
				n = s.toExponential();
				n = n.slice(0, n.indexOf('e') + 1) + e;
			}

			r = new Ctor(n);
		} else {
			r = new Ctor(s.toString());
		}

		sd = (e = Ctor.precision) + 3;

		// Newton-Raphson iteration.
		for (; ;) {
			t = r;
			r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

			// TODO? Replace with for-loop and checkRoundingDigits.
			if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
				n = n.slice(sd - 3, sd + 1);

				// The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
				// 4999, i.e. approaching a rounding boundary, continue the iteration.
				if (n == '9999' || !rep && n == '4999') {

					// On the first iteration only, check to see if rounding up gives the exact result as the
					// nines may infinitely repeat.
					if (!rep) {
						finalise(t, e + 1, 0);

						if (t.times(t).eq(x)) {
							r = t;
							break;
						}
					}

					sd += 4;
					rep = 1;
				} else {

					// If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
					// If not, then there are further digits and m will be truthy.
					if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

						// Truncate to the first rounding digit.
						finalise(r, e + 1, 1);
						m = !r.times(r).eq(x);
					}

					break;
				}
			}
		}

		external = true;

		return finalise(r, e, Ctor.rounding, m);
	};


	/*
	 * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-Infinity, Infinity]
	 *
	 * tan(0)         = 0
	 * tan(-0)        = -0
	 * tan(Infinity)  = NaN
	 * tan(-Infinity) = NaN
	 * tan(NaN)       = NaN
	 *
	 */
	P.tangent = P.tan = function () {
		var pr, rm,
			x = this,
			Ctor = x.constructor;

		if (!x.isFinite()) return new Ctor(NaN);
		if (x.isZero()) return new Ctor(x);

		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 10;
		Ctor.rounding = 1;

		x = x.sin();
		x.s = 1;
		x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

		Ctor.precision = pr;
		Ctor.rounding = rm;

		return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
	};


	/*
	 *  n * 0 = 0
	 *  n * N = N
	 *  n * I = I
	 *  0 * n = 0
	 *  0 * 0 = 0
	 *  0 * N = N
	 *  0 * I = N
	 *  N * n = N
	 *  N * 0 = N
	 *  N * N = N
	 *  N * I = N
	 *  I * n = I
	 *  I * 0 = N
	 *  I * N = N
	 *  I * I = I
	 *
	 * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 */
	P.times = P.mul = function (y) {
		var carry, e, i, k, r, rL, t, xdL, ydL,
			x = this,
			Ctor = x.constructor,
			xd = x.d,
			yd = (y = new Ctor(y)).d;

		y.s *= x.s;

		// If either is NaN, Å}Infinity or Å}0...
		if (!xd || !xd[0] || !yd || !yd[0]) {

			return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

				// Return NaN if either is NaN.
				// Return NaN if x is Å}0 and y is Å}Infinity, or y is Å}0 and x is Å}Infinity.
				? NaN

				// Return Å}Infinity if either is Å}Infinity.
				// Return Å}0 if either is Å}0.
				: !xd || !yd ? y.s / 0 : y.s * 0);
		}

		e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
		xdL = xd.length;
		ydL = yd.length;

		// Ensure xd points to the longer array.
		if (xdL < ydL) {
			r = xd;
			xd = yd;
			yd = r;
			rL = xdL;
			xdL = ydL;
			ydL = rL;
		}

		// Initialise the result array with zeros.
		r = [];
		rL = xdL + ydL;
		for (i = rL; i--;) r.push(0);

		// Multiply!
		for (i = ydL; --i >= 0;) {
			carry = 0;
			for (k = xdL + i; k > i;) {
				t = r[k] + yd[i] * xd[k - i - 1] + carry;
				r[k--] = t % BASE | 0;
				carry = t / BASE | 0;
			}

			r[k] = (r[k] + carry) % BASE | 0;
		}

		// Remove trailing zeros.
		for (; !r[--rL];) r.pop();

		if (carry) ++e;
		else r.shift();

		y.d = r;
		y.e = getBase10Exponent(r, e);

		return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
	};


	/*
	 * Return a string representing the value of this Decimal in base 2, round to `sd` significant
	 * digits using rounding mode `rm`.
	 *
	 * If the optional `sd` argument is present then return binary exponential notation.
	 *
	 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toBinary = function (sd, rm) {
		return toStringBinary(this, 2, sd, rm);
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
	 * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
	 *
	 * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
	 *
	 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toDecimalPlaces = P.toDP = function (dp, rm) {
		var x = this,
			Ctor = x.constructor;

		x = new Ctor(x);
		if (dp === void 0) return x;

		checkInt32(dp, 0, MAX_DIGITS);

		if (rm === void 0) rm = Ctor.rounding;
		else checkInt32(rm, 0, 8);

		return finalise(x, dp + x.e + 1, rm);
	};


	/*
	 * Return a string representing the value of this Decimal in exponential notation rounded to
	 * `dp` fixed decimal places using rounding mode `rounding`.
	 *
	 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toExponential = function (dp, rm) {
		var str,
			x = this,
			Ctor = x.constructor;

		if (dp === void 0) {
			str = finiteToString(x, true);
		} else {
			checkInt32(dp, 0, MAX_DIGITS);

			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);

			x = finalise(new Ctor(x), dp + 1, rm);
			str = finiteToString(x, true, dp + 1);
		}

		return x.isNeg() && !x.isZero() ? '-' + str : str;
	};


	/*
	 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
	 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
	 * omitted.
	 *
	 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
	 *
	 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
	 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
	 * (-0).toFixed(3) is '0.000'.
	 * (-0.5).toFixed(0) is '-0'.
	 *
	 */
	P.toFixed = function (dp, rm) {
		var str, y,
			x = this,
			Ctor = x.constructor;

		if (dp === void 0) {
			str = finiteToString(x);
		} else {
			checkInt32(dp, 0, MAX_DIGITS);

			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);

			y = finalise(new Ctor(x), dp + x.e + 1, rm);
			str = finiteToString(y, false, dp + y.e + 1);
		}

		// To determine whether to add the minus sign look at the value before it was rounded,
		// i.e. look at `x` rather than `y`.
		return x.isNeg() && !x.isZero() ? '-' + str : str;
	};


	/*
	 * Return an array representing the value of this Decimal as a simple fraction with an integer
	 * numerator and an integer denominator.
	 *
	 * The denominator will be a positive non-zero value less than or equal to the specified maximum
	 * denominator. If a maximum denominator is not specified, the denominator will be the lowest
	 * value necessary to represent the number exactly.
	 *
	 * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
	 *
	 */
	P.toFraction = function (maxD) {
		var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
			x = this,
			xd = x.d,
			Ctor = x.constructor;

		if (!xd) return new Ctor(x);

		n1 = d0 = new Ctor(1);
		d1 = n0 = new Ctor(0);

		d = new Ctor(d1);
		e = d.e = getPrecision(xd) - x.e - 1;
		k = e % LOG_BASE;
		d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

		if (maxD == null) {

			// d is 10**e, the minimum max-denominator needed.
			maxD = e > 0 ? d : n1;
		} else {
			n = new Ctor(maxD);
			if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
			maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
		}

		external = false;
		n = new Ctor(digitsToString(xd));
		pr = Ctor.precision;
		Ctor.precision = e = xd.length * LOG_BASE * 2;

		for (; ;) {
			q = divide(n, d, 0, 1, 1);
			d2 = d0.plus(q.times(d1));
			if (d2.cmp(maxD) == 1) break;
			d0 = d1;
			d1 = d2;
			d2 = n1;
			n1 = n0.plus(q.times(d2));
			n0 = d2;
			d2 = d;
			d = n.minus(q.times(d2));
			n = d2;
		}

		d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
		n0 = n0.plus(d2.times(n1));
		d0 = d0.plus(d2.times(d1));
		n0.s = n1.s = x.s;

		// Determine which fraction is closer to x, n0/d0 or n1/d1?
		r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
			? [n1, d1] : [n0, d0];

		Ctor.precision = pr;
		external = true;

		return r;
	};


	/*
	 * Return a string representing the value of this Decimal in base 16, round to `sd` significant
	 * digits using rounding mode `rm`.
	 *
	 * If the optional `sd` argument is present then return binary exponential notation.
	 *
	 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toHexadecimal = P.toHex = function (sd, rm) {
		return toStringBinary(this, 16, sd, rm);
	};


	/*
	 * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
	 * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
	 *
	 * The return value will always have the same sign as this Decimal, unless either this Decimal
	 * or `y` is NaN, in which case the return value will be also be NaN.
	 *
	 * The return value is not affected by the value of `precision`.
	 *
	 * y {number|string|Decimal} The magnitude to round to a multiple of.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 * 'toNearest() rounding mode not an integer: {rm}'
	 * 'toNearest() rounding mode out of range: {rm}'
	 *
	 */
	P.toNearest = function (y, rm) {
		var x = this,
			Ctor = x.constructor;

		x = new Ctor(x);

		if (y == null) {

			// If x is not finite, return x.
			if (!x.d) return x;

			y = new Ctor(1);
			rm = Ctor.rounding;
		} else {
			y = new Ctor(y);
			if (rm === void 0) {
				rm = Ctor.rounding;
			} else {
				checkInt32(rm, 0, 8);
			}

			// If x is not finite, return x if y is not NaN, else NaN.
			if (!x.d) return y.s ? x : y;

			// If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
			if (!y.d) {
				if (y.s) y.s = x.s;
				return y;
			}
		}

		// If y is not zero, calculate the nearest multiple of y to x.
		if (y.d[0]) {
			external = false;
			x = divide(x, y, 0, rm, 1).times(y);
			external = true;
			finalise(x);

			// If y is zero, return zero with the sign of x.
		} else {
			y.s = x.s;
			x = y;
		}

		return x;
	};


	/*
	 * Return the value of this Decimal converted to a number primitive.
	 * Zero keeps its sign.
	 *
	 */
	P.toNumber = function () {
		return +this;
	};


	/*
	 * Return a string representing the value of this Decimal in base 8, round to `sd` significant
	 * digits using rounding mode `rm`.
	 *
	 * If the optional `sd` argument is present then return binary exponential notation.
	 *
	 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toOctal = function (sd, rm) {
		return toStringBinary(this, 8, sd, rm);
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
	 * to `precision` significant digits using rounding mode `rounding`.
	 *
	 * ECMAScript compliant.
	 *
	 *   pow(x, NaN)                           = NaN
	 *   pow(x, Å}0)                            = 1
	 *   pow(NaN, non-zero)                    = NaN
	 *   pow(abs(x) > 1, +Infinity)            = +Infinity
	 *   pow(abs(x) > 1, -Infinity)            = +0
	 *   pow(abs(x) == 1, Å}Infinity)           = NaN
	 *   pow(abs(x) < 1, +Infinity)            = +0
	 *   pow(abs(x) < 1, -Infinity)            = +Infinity
	 *   pow(+Infinity, y > 0)                 = +Infinity
	 *   pow(+Infinity, y < 0)                 = +0
	 *   pow(-Infinity, odd integer > 0)       = -Infinity
	 *   pow(-Infinity, even integer > 0)      = +Infinity
	 *   pow(-Infinity, odd integer < 0)       = -0
	 *   pow(-Infinity, even integer < 0)      = +0
	 *   pow(+0, y > 0)                        = +0
	 *   pow(+0, y < 0)                        = +Infinity
	 *   pow(-0, odd integer > 0)              = -0
	 *   pow(-0, even integer > 0)             = +0
	 *   pow(-0, odd integer < 0)              = -Infinity
	 *   pow(-0, even integer < 0)             = +Infinity
	 *   pow(finite x < 0, finite non-integer) = NaN
	 *
	 * For non-integer or very large exponents pow(x, y) is calculated using
	 *
	 *   x^y = exp(y*ln(x))
	 *
	 * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
	 * probability of an incorrectly rounded result
	 * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
	 * i.e. 1 in 250,000,000,000,000
	 *
	 * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
	 *
	 * y {number|string|Decimal} The power to which to raise this Decimal.
	 *
	 */
	P.toPower = P.pow = function (y) {
		var e, k, pr, r, rm, s,
			x = this,
			Ctor = x.constructor,
			yn = +(y = new Ctor(y));

		// Either Å}Infinity, NaN or Å}0?
		if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

		x = new Ctor(x);

		if (x.eq(1)) return x;

		pr = Ctor.precision;
		rm = Ctor.rounding;

		if (y.eq(1)) return finalise(x, pr, rm);

		// y exponent
		e = mathfloor(y.e / LOG_BASE);

		// If y is a small integer use the 'exponentiation by squaring' algorithm.
		if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
			r = intPow(Ctor, x, k, pr);
			return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
		}

		s = x.s;

		// if x is negative
		if (s < 0) {

			// if y is not an integer
			if (e < y.d.length - 1) return new Ctor(NaN);

			// Result is positive if x is negative and the last digit of integer y is even.
			if ((y.d[e] & 1) == 0) s = 1;

			// if x.eq(-1)
			if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
				x.s = s;
				return x;
			}
		}

		// Estimate result exponent.
		// x^y = 10^e,  where e = y * log10(x)
		// log10(x) = log10(x_significand) + x_exponent
		// log10(x_significand) = ln(x_significand) / ln(10)
		k = mathpow(+x, yn);
		e = k == 0 || !isFinite(k)
			? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
			: new Ctor(k + '').e;

		// Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

		// Overflow/underflow?
		if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

		external = false;
		Ctor.rounding = x.s = 1;

		// Estimate the extra guard digits needed to ensure five correct rounding digits from
		// naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
		// new Decimal(2.32456).pow('2087987436534566.46411')
		// should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
		k = Math.min(12, (e + '').length);

		// r = x^y = exp(y*ln(x))
		r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

		// r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
		if (r.d) {

			// Truncate to the required precision plus five rounding digits.
			r = finalise(r, pr + 5, 1);

			// If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
			// the result.
			if (checkRoundingDigits(r.d, pr, rm)) {
				e = pr + 10;

				// Truncate to the increased precision plus five rounding digits.
				r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

				// Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
				if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
					r = finalise(r, pr + 1, 0);
				}
			}
		}

		r.s = s;
		external = true;
		Ctor.rounding = rm;

		return finalise(r, pr, rm);
	};


	/*
	 * Return a string representing the value of this Decimal rounded to `sd` significant digits
	 * using rounding mode `rounding`.
	 *
	 * Return exponential notation if `sd` is less than the number of digits necessary to represent
	 * the integer part of the value in normal notation.
	 *
	 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 */
	P.toPrecision = function (sd, rm) {
		var str,
			x = this,
			Ctor = x.constructor;

		if (sd === void 0) {
			str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
		} else {
			checkInt32(sd, 1, MAX_DIGITS);

			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);

			x = finalise(new Ctor(x), sd, rm);
			str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
		}

		return x.isNeg() && !x.isZero() ? '-' + str : str;
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
	 * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
	 * omitted.
	 *
	 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	 *
	 * 'toSD() digits out of range: {sd}'
	 * 'toSD() digits not an integer: {sd}'
	 * 'toSD() rounding mode not an integer: {rm}'
	 * 'toSD() rounding mode out of range: {rm}'
	 *
	 */
	P.toSignificantDigits = P.toSD = function (sd, rm) {
		var x = this,
			Ctor = x.constructor;

		if (sd === void 0) {
			sd = Ctor.precision;
			rm = Ctor.rounding;
		} else {
			checkInt32(sd, 1, MAX_DIGITS);

			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
		}

		return finalise(new Ctor(x), sd, rm);
	};


	/*
	 * Return a string representing the value of this Decimal.
	 *
	 * Return exponential notation if this Decimal has a positive exponent equal to or greater than
	 * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
	 *
	 */
	P.toString = function () {
		var x = this,
			Ctor = x.constructor,
			str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

		return x.isNeg() && !x.isZero() ? '-' + str : str;
	};


	/*
	 * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
	 *
	 */
	P.truncated = P.trunc = function () {
		return finalise(new this.constructor(this), this.e + 1, 1);
	};


	/*
	 * Return a string representing the value of this Decimal.
	 * Unlike `toString`, negative zero will include the minus sign.
	 *
	 */
	P.valueOf = P.toJSON = function () {
		var x = this,
			Ctor = x.constructor,
			str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

		return x.isNeg() ? '-' + str : str;
	};


	/*
	// Add aliases to match BigDecimal method names.
	// P.add = P.plus;
	P.subtract = P.minus;
	P.multiply = P.times;
	P.divide = P.div;
	P.remainder = P.mod;
	P.compareTo = P.cmp;
	P.negate = P.neg;
	 */


	// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


	/*
	 *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
	 *                           finiteToString, naturalExponential, naturalLogarithm
	 *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
	 *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
	 *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
	 *  convertBase              toStringBinary, parseOther
	 *  cos                      P.cos
	 *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
	 *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
	 *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
	 *                           taylorSeries, atan2, parseOther
	 *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
	 *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
	 *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
	 *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
	 *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
	 *                           P.truncated, divide, getLn10, getPi, naturalExponential,
	 *                           naturalLogarithm, ceil, floor, round, trunc
	 *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
	 *                           toStringBinary
	 *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
	 *  getLn10                  P.logarithm, naturalLogarithm
	 *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
	 *  getPrecision             P.precision, P.toFraction
	 *  getZeroString            digitsToString, finiteToString
	 *  intPow                   P.toPower, parseOther
	 *  isOdd                    toLessThanHalfPi
	 *  maxOrMin                 max, min
	 *  naturalExponential       P.naturalExponential, P.toPower
	 *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
	 *                           P.toPower, naturalExponential
	 *  nonFiniteToString        finiteToString, toStringBinary
	 *  parseDecimal             Decimal
	 *  parseOther               Decimal
	 *  sin                      P.sin
	 *  taylorSeries             P.cosh, P.sinh, cos, sin
	 *  toLessThanHalfPi         P.cos, P.sin
	 *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
	 *  truncate                 intPow
	 *
	 *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
	 *                           naturalLogarithm, config, parseOther, random, Decimal
	 */


	function digitsToString(d) {
		var i, k, ws,
			indexOfLastWord = d.length - 1,
			str = '',
			w = d[0];

		if (indexOfLastWord > 0) {
			str += w;
			for (i = 1; i < indexOfLastWord; i++) {
				ws = d[i] + '';
				k = LOG_BASE - ws.length;
				if (k) str += getZeroString(k);
				str += ws;
			}

			w = d[i];
			ws = w + '';
			k = LOG_BASE - ws.length;
			if (k) str += getZeroString(k);
		} else if (w === 0) {
			return '0';
		}

		// Remove trailing zeros of last w.
		for (; w % 10 === 0;) w /= 10;

		return str + w;
	}


	function checkInt32(i, min, max) {
		if (i !== ~~i || i < min || i > max) {
			throw Error(invalidArgument + i);
		}
	}


	/*
	 * Check 5 rounding digits if `repeating` is null, 4 otherwise.
	 * `repeating == null` if caller is `log` or `pow`,
	 * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
	 */
	function checkRoundingDigits(d, i, rm, repeating) {
		var di, k, r, rd;

		// Get the length of the first word of the array d.
		for (k = d[0]; k >= 10; k /= 10) --i;

		// Is the rounding digit in the first word of d?
		if (--i < 0) {
			i += LOG_BASE;
			di = 0;
		} else {
			di = Math.ceil((i + 1) / LOG_BASE);
			i %= LOG_BASE;
		}

		// i is the index (0 - 6) of the rounding digit.
		// E.g. if within the word 3487563 the first rounding digit is 5,
		// then i = 4, k = 1000, rd = 3487563 % 1000 = 563
		k = mathpow(10, LOG_BASE - i);
		rd = d[di] % k | 0;

		if (repeating == null) {
			if (i < 3) {
				if (i == 0) rd = rd / 100 | 0;
				else if (i == 1) rd = rd / 10 | 0;
				r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
			} else {
				r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
					(d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
					(rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
			}
		} else {
			if (i < 4) {
				if (i == 0) rd = rd / 1000 | 0;
				else if (i == 1) rd = rd / 100 | 0;
				else if (i == 2) rd = rd / 10 | 0;
				r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
			} else {
				r = ((repeating || rm < 4) && rd + 1 == k ||
					(!repeating && rm > 3) && rd + 1 == k / 2) &&
					(d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
			}
		}

		return r;
	}


	// Convert string of `baseIn` to an array of numbers of `baseOut`.
	// Eg. convertBase('255', 10, 16) returns [15, 15].
	// Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
	function convertBase(str, baseIn, baseOut) {
		var j,
			arr = [0],
			arrL,
			i = 0,
			strL = str.length;

		for (; i < strL;) {
			for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
			arr[0] += NUMERALS.indexOf(str.charAt(i++));
			for (j = 0; j < arr.length; j++) {
				if (arr[j] > baseOut - 1) {
					if (arr[j + 1] === void 0) arr[j + 1] = 0;
					arr[j + 1] += arr[j] / baseOut | 0;
					arr[j] %= baseOut;
				}
			}
		}

		return arr.reverse();
	}


	/*
	 * cos(x) = 1 - x^2/2! + x^4/4! - ...
	 * |x| < pi/2
	 *
	 */
	function cosine(Ctor, x) {
		var k, y,
			len = x.d.length;

		// Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
		// i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

		// Estimate the optimum number of times to use the argument reduction.
		if (len < 32) {
			k = Math.ceil(len / 3);
			y = (1 / tinyPow(4, k)).toString();
		} else {
			k = 16;
			y = '2.3283064365386962890625e-10';
		}

		Ctor.precision += k;

		x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

		// Reverse argument reduction
		for (var i = k; i--;) {
			var cos2x = x.times(x);
			x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
		}

		Ctor.precision -= k;

		return x;
	}


	/*
	 * Perform division in the specified base.
	 */
	var divide = (function () {

		// Assumes non-zero x and k, and hence non-zero result.
		function multiplyInteger(x, k, base) {
			var temp,
				carry = 0,
				i = x.length;

			for (x = x.slice(); i--;) {
				temp = x[i] * k + carry;
				x[i] = temp % base | 0;
				carry = temp / base | 0;
			}

			if (carry) x.unshift(carry);

			return x;
		}

		function compare(a, b, aL, bL) {
			var i, r;

			if (aL != bL) {
				r = aL > bL ? 1 : -1;
			} else {
				for (i = r = 0; i < aL; i++) {
					if (a[i] != b[i]) {
						r = a[i] > b[i] ? 1 : -1;
						break;
					}
				}
			}

			return r;
		}

		function subtract(a, b, aL, base) {
			var i = 0;

			// Subtract b from a.
			for (; aL--;) {
				a[aL] -= i;
				i = a[aL] < b[aL] ? 1 : 0;
				a[aL] = i * base + a[aL] - b[aL];
			}

			// Remove leading zeros.
			for (; !a[0] && a.length > 1;) a.shift();
		}

		return function (x, y, pr, rm, dp, base) {
			var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
				yL, yz,
				Ctor = x.constructor,
				sign = x.s == y.s ? 1 : -1,
				xd = x.d,
				yd = y.d;

			// Either NaN, Infinity or 0?
			if (!xd || !xd[0] || !yd || !yd[0]) {

				return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
					!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

						// Return Å}0 if x is 0 or y is Å}Infinity, or return Å}Infinity as y is 0.
						xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
			}

			if (base) {
				logBase = 1;
				e = x.e - y.e;
			} else {
				base = BASE;
				logBase = LOG_BASE;
				e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
			}

			yL = yd.length;
			xL = xd.length;
			q = new Ctor(sign);
			qd = q.d = [];

			// Result exponent may be one less than e.
			// The digit array of a Decimal from toStringBinary may have trailing zeros.
			for (i = 0; yd[i] == (xd[i] || 0); i++);

			if (yd[i] > (xd[i] || 0)) e--;

			if (pr == null) {
				sd = pr = Ctor.precision;
				rm = Ctor.rounding;
			} else if (dp) {
				sd = pr + (x.e - y.e) + 1;
			} else {
				sd = pr;
			}

			if (sd < 0) {
				qd.push(1);
				more = true;
			} else {

				// Convert precision in number of base 10 digits to base 1e7 digits.
				sd = sd / logBase + 2 | 0;
				i = 0;

				// divisor < 1e7
				if (yL == 1) {
					k = 0;
					yd = yd[0];
					sd++;

					// k is the carry.
					for (; (i < xL || k) && sd--; i++) {
						t = k * base + (xd[i] || 0);
						qd[i] = t / yd | 0;
						k = t % yd | 0;
					}

					more = k || i < xL;

					// divisor >= 1e7
				} else {

					// Normalise xd and yd so highest order digit of yd is >= base/2
					k = base / (yd[0] + 1) | 0;

					if (k > 1) {
						yd = multiplyInteger(yd, k, base);
						xd = multiplyInteger(xd, k, base);
						yL = yd.length;
						xL = xd.length;
					}

					xi = yL;
					rem = xd.slice(0, yL);
					remL = rem.length;

					// Add zeros to make remainder as long as divisor.
					for (; remL < yL;) rem[remL++] = 0;

					yz = yd.slice();
					yz.unshift(0);
					yd0 = yd[0];

					if (yd[1] >= base / 2) ++yd0;

					do {
						k = 0;

						// Compare divisor and remainder.
						cmp = compare(yd, rem, yL, remL);

						// If divisor < remainder.
						if (cmp < 0) {

							// Calculate trial digit, k.
							rem0 = rem[0];
							if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

							// k will be how many times the divisor goes into the current remainder.
							k = rem0 / yd0 | 0;

							//  Algorithm:
							//  1. product = divisor * trial digit (k)
							//  2. if product > remainder: product -= divisor, k--
							//  3. remainder -= product
							//  4. if product was < remainder at 2:
							//    5. compare new remainder and divisor
							//    6. If remainder > divisor: remainder -= divisor, k++

							if (k > 1) {
								if (k >= base) k = base - 1;

								// product = divisor * trial digit.
								prod = multiplyInteger(yd, k, base);
								prodL = prod.length;
								remL = rem.length;

								// Compare product and remainder.
								cmp = compare(prod, rem, prodL, remL);

								// product > remainder.
								if (cmp == 1) {
									k--;

									// Subtract divisor from product.
									subtract(prod, yL < prodL ? yz : yd, prodL, base);
								}
							} else {

								// cmp is -1.
								// If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
								// to avoid it. If k is 1 there is a need to compare yd and rem again below.
								if (k == 0) cmp = k = 1;
								prod = yd.slice();
							}

							prodL = prod.length;
							if (prodL < remL) prod.unshift(0);

							// Subtract product from remainder.
							subtract(rem, prod, remL, base);

							// If product was < previous remainder.
							if (cmp == -1) {
								remL = rem.length;

								// Compare divisor and new remainder.
								cmp = compare(yd, rem, yL, remL);

								// If divisor < new remainder, subtract divisor from remainder.
								if (cmp < 1) {
									k++;

									// Subtract divisor from remainder.
									subtract(rem, yL < remL ? yz : yd, remL, base);
								}
							}

							remL = rem.length;
						} else if (cmp === 0) {
							k++;
							rem = [0];
						}    // if cmp === 1, k will be 0

						// Add the next digit, k, to the result array.
						qd[i++] = k;

						// Update the remainder.
						if (cmp && rem[0]) {
							rem[remL++] = xd[xi] || 0;
						} else {
							rem = [xd[xi]];
							remL = 1;
						}

					} while ((xi++ < xL || rem[0] !== void 0) && sd--);

					more = rem[0] !== void 0;
				}

				// Leading zero?
				if (!qd[0]) qd.shift();
			}

			// logBase is 1 when divide is being used for base conversion.
			if (logBase == 1) {
				q.e = e;
				inexact = more;
			} else {

				// To calculate q.e, first get the number of digits of qd[0].
				for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
				q.e = i + e * logBase - 1;

				finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
			}

			return q;
		};
	})();


	/*
	 * Round `x` to `sd` significant digits using rounding mode `rm`.
	 * Check for over/under-flow.
	 */
	function finalise(x, sd, rm, isTruncated) {
		var digits, i, j, k, rd, roundUp, w, xd, xdi,
			Ctor = x.constructor;

		// Don't round if sd is null or undefined.
		out: if (sd != null) {
			xd = x.d;

			// Infinity/NaN.
			if (!xd) return x;

			// rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
			// w: the word of xd containing rd, a base 1e7 number.
			// xdi: the index of w within xd.
			// digits: the number of digits of w.
			// i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
			// they had leading zeros)
			// j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

			// Get the length of the first word of the digits array xd.
			for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
			i = sd - digits;

			// Is the rounding digit in the first word of xd?
			if (i < 0) {
				i += LOG_BASE;
				j = sd;
				w = xd[xdi = 0];

				// Get the rounding digit at index j of w.
				rd = w / mathpow(10, digits - j - 1) % 10 | 0;
			} else {
				xdi = Math.ceil((i + 1) / LOG_BASE);
				k = xd.length;
				if (xdi >= k) {
					if (isTruncated) {

						// Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
						for (; k++ <= xdi;) xd.push(0);
						w = rd = 0;
						digits = 1;
						i %= LOG_BASE;
						j = i - LOG_BASE + 1;
					} else {
						break out;
					}
				} else {
					w = k = xd[xdi];

					// Get the number of digits of w.
					for (digits = 1; k >= 10; k /= 10) digits++;

					// Get the index of rd within w.
					i %= LOG_BASE;

					// Get the index of rd within w, adjusted for leading zeros.
					// The number of leading zeros of w is given by LOG_BASE - digits.
					j = i - LOG_BASE + digits;

					// Get the rounding digit at index j of w.
					rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
				}
			}

			// Are there any non-zero digits after the rounding digit?
			isTruncated = isTruncated || sd < 0 ||
				xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

			// The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
			// of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
			// will give 714.

			roundUp = rm < 4
				? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
				: rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

					// Check whether the digit to the left of the rounding digit is odd.
					((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
					rm == (x.s < 0 ? 8 : 7));

			if (sd < 1 || !xd[0]) {
				xd.length = 0;
				if (roundUp) {

					// Convert sd to decimal places.
					sd -= x.e + 1;

					// 1, 0.1, 0.01, 0.001, 0.0001 etc.
					xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
					x.e = -sd || 0;
				} else {

					// Zero.
					xd[0] = x.e = 0;
				}

				return x;
			}

			// Remove excess digits.
			if (i == 0) {
				xd.length = xdi;
				k = 1;
				xdi--;
			} else {
				xd.length = xdi + 1;
				k = mathpow(10, LOG_BASE - i);

				// E.g. 56700 becomes 56000 if 7 is the rounding digit.
				// j > 0 means i > number of leading zeros of w.
				xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
			}

			if (roundUp) {
				for (; ;) {

					// Is the digit to be rounded up in the first word of xd?
					if (xdi == 0) {

						// i will be the length of xd[0] before k is added.
						for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
						j = xd[0] += k;
						for (k = 1; j >= 10; j /= 10) k++;

						// if i != k the length has increased.
						if (i != k) {
							x.e++;
							if (xd[0] == BASE) xd[0] = 1;
						}

						break;
					} else {
						xd[xdi] += k;
						if (xd[xdi] != BASE) break;
						xd[xdi--] = 0;
						k = 1;
					}
				}
			}

			// Remove trailing zeros.
			for (i = xd.length; xd[--i] === 0;) xd.pop();
		}

		if (external) {

			// Overflow?
			if (x.e > Ctor.maxE) {

				// Infinity.
				x.d = null;
				x.e = NaN;

				// Underflow?
			} else if (x.e < Ctor.minE) {

				// Zero.
				x.e = 0;
				x.d = [0];
				// Ctor.underflow = true;
			} // else Ctor.underflow = false;
		}

		return x;
	}


	function finiteToString(x, isExp, sd) {
		if (!x.isFinite()) return nonFiniteToString(x);
		var k,
			e = x.e,
			str = digitsToString(x.d),
			len = str.length;

		if (isExp) {
			if (sd && (k = sd - len) > 0) {
				str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
			} else if (len > 1) {
				str = str.charAt(0) + '.' + str.slice(1);
			}

			str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
		} else if (e < 0) {
			str = '0.' + getZeroString(-e - 1) + str;
			if (sd && (k = sd - len) > 0) str += getZeroString(k);
		} else if (e >= len) {
			str += getZeroString(e + 1 - len);
			if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
		} else {
			if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
			if (sd && (k = sd - len) > 0) {
				if (e + 1 === len) str += '.';
				str += getZeroString(k);
			}
		}

		return str;
	}


	// Calculate the base 10 exponent from the base 1e7 exponent.
	function getBase10Exponent(digits, e) {
		var w = digits[0];

		// Add the number of digits of the first word of the digits array.
		for (e *= LOG_BASE; w >= 10; w /= 10) e++;
		return e;
	}


	function getLn10(Ctor, sd, pr) {
		if (sd > LN10_PRECISION) {

			// Reset global state in case the exception is caught.
			external = true;
			if (pr) Ctor.precision = pr;
			throw Error(precisionLimitExceeded);
		}
		return finalise(new Ctor(LN10), sd, 1, true);
	}


	function getPi(Ctor, sd, rm) {
		if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
		return finalise(new Ctor(PI), sd, rm, true);
	}


	function getPrecision(digits) {
		var w = digits.length - 1,
			len = w * LOG_BASE + 1;

		w = digits[w];

		// If non-zero...
		if (w) {

			// Subtract the number of trailing zeros of the last word.
			for (; w % 10 == 0; w /= 10) len--;

			// Add the number of digits of the first word.
			for (w = digits[0]; w >= 10; w /= 10) len++;
		}

		return len;
	}


	function getZeroString(k) {
		var zs = '';
		for (; k--;) zs += '0';
		return zs;
	}


	/*
	 * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
	 * integer of type number.
	 *
	 * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
	 *
	 */
	function intPow(Ctor, x, n, pr) {
		var isTruncated,
			r = new Ctor(1),

			// Max n of 9007199254740991 takes 53 loop iterations.
			// Maximum digits array length; leaves [28, 34] guard digits.
			k = Math.ceil(pr / LOG_BASE + 4);

		external = false;

		for (; ;) {
			if (n % 2) {
				r = r.times(x);
				if (truncate(r.d, k)) isTruncated = true;
			}

			n = mathfloor(n / 2);
			if (n === 0) {

				// To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
				n = r.d.length - 1;
				if (isTruncated && r.d[n] === 0) ++r.d[n];
				break;
			}

			x = x.times(x);
			truncate(x.d, k);
		}

		external = true;

		return r;
	}


	function isOdd(n) {
		return n.d[n.d.length - 1] & 1;
	}


	/*
	 * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
	 */
	function maxOrMin(Ctor, args, ltgt) {
		var y,
			x = new Ctor(args[0]),
			i = 0;

		for (; ++i < args.length;) {
			y = new Ctor(args[i]);
			if (!y.s) {
				x = y;
				break;
			} else if (x[ltgt](y)) {
				x = y;
			}
		}

		return x;
	}


	/*
	 * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
	 * digits.
	 *
	 * Taylor/Maclaurin series.
	 *
	 * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
	 *
	 * Argument reduction:
	 *   Repeat x = x / 32, k += 5, until |x| < 0.1
	 *   exp(x) = exp(x / 2^k)^(2^k)
	 *
	 * Previously, the argument was initially reduced by
	 * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
	 * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
	 * found to be slower than just dividing repeatedly by 32 as above.
	 *
	 * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
	 * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
	 * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
	 *
	 *  exp(Infinity)  = Infinity
	 *  exp(-Infinity) = 0
	 *  exp(NaN)       = NaN
	 *  exp(Å}0)        = 1
	 *
	 *  exp(x) is non-terminating for any finite, non-zero x.
	 *
	 *  The result will always be correctly rounded.
	 *
	 */
	function naturalExponential(x, sd) {
		var denominator, guard, j, pow, sum, t, wpr,
			rep = 0,
			i = 0,
			k = 0,
			Ctor = x.constructor,
			rm = Ctor.rounding,
			pr = Ctor.precision;

		// 0/NaN/Infinity?
		if (!x.d || !x.d[0] || x.e > 17) {

			return new Ctor(x.d
				? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
				: x.s ? x.s < 0 ? 0 : x : 0 / 0);
		}

		if (sd == null) {
			external = false;
			wpr = pr;
		} else {
			wpr = sd;
		}

		t = new Ctor(0.03125);

		// while abs(x) >= 0.1
		while (x.e > -2) {

			// x = x / 2^5
			x = x.times(t);
			k += 5;
		}

		// Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
		// necessary to ensure the first 4 rounding digits are correct.
		guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
		wpr += guard;
		denominator = pow = sum = new Ctor(1);
		Ctor.precision = wpr;

		for (; ;) {
			pow = finalise(pow.times(x), wpr, 1);
			denominator = denominator.times(++i);
			t = sum.plus(divide(pow, denominator, wpr, 1));

			if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
				j = k;
				while (j--) sum = finalise(sum.times(sum), wpr, 1);

				// Check to see if the first 4 rounding digits are [49]999.
				// If so, repeat the summation with a higher precision, otherwise
				// e.g. with precision: 18, rounding: 1
				// exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
				// `wpr - guard` is the index of first rounding digit.
				if (sd == null) {

					if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
						Ctor.precision = wpr += 10;
						denominator = pow = t = new Ctor(1);
						i = 0;
						rep++;
					} else {
						return finalise(sum, Ctor.precision = pr, rm, external = true);
					}
				} else {
					Ctor.precision = pr;
					return sum;
				}
			}

			sum = t;
		}
	}


	/*
	 * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
	 * digits.
	 *
	 *  ln(-n)        = NaN
	 *  ln(0)         = -Infinity
	 *  ln(-0)        = -Infinity
	 *  ln(1)         = 0
	 *  ln(Infinity)  = Infinity
	 *  ln(-Infinity) = NaN
	 *  ln(NaN)       = NaN
	 *
	 *  ln(n) (n != 1) is non-terminating.
	 *
	 */
	function naturalLogarithm(y, sd) {
		var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
			n = 1,
			guard = 10,
			x = y,
			xd = x.d,
			Ctor = x.constructor,
			rm = Ctor.rounding,
			pr = Ctor.precision;

		// Is x negative or Infinity, NaN, 0 or 1?
		if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
			return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
		}

		if (sd == null) {
			external = false;
			wpr = pr;
		} else {
			wpr = sd;
		}

		Ctor.precision = wpr += guard;
		c = digitsToString(xd);
		c0 = c.charAt(0);

		if (Math.abs(e = x.e) < 1.5e15) {

			// Argument reduction.
			// The series converges faster the closer the argument is to 1, so using
			// ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
			// multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
			// 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
			// later be divided by this number, then separate out the power of 10 using
			// ln(a*10^b) = ln(a) + b*ln(10).

			// max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
			//while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
			// max n is 6 (gives 0.7 - 1.3)
			while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
				x = x.times(y);
				c = digitsToString(x.d);
				c0 = c.charAt(0);
				n++;
			}

			e = x.e;

			if (c0 > 1) {
				x = new Ctor('0.' + c);
				e++;
			} else {
				x = new Ctor(c0 + '.' + c.slice(1));
			}
		} else {

			// The argument reduction method above may result in overflow if the argument y is a massive
			// number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
			// function using ln(x*10^e) = ln(x) + e*ln(10).
			t = getLn10(Ctor, wpr + 2, pr).times(e + '');
			x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
			Ctor.precision = pr;

			return sd == null ? finalise(x, pr, rm, external = true) : x;
		}

		// x1 is x reduced to a value near 1.
		x1 = x;

		// Taylor series.
		// ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
		// where x = (y - 1)/(y + 1)    (|x| < 1)
		sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
		x2 = finalise(x.times(x), wpr, 1);
		denominator = 3;

		for (; ;) {
			numerator = finalise(numerator.times(x2), wpr, 1);
			t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

			if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
				sum = sum.times(2);

				// Reverse the argument reduction. Check that e is not 0 because, besides preventing an
				// unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
				if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
				sum = divide(sum, new Ctor(n), wpr, 1);

				// Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
				// been repeated previously) and the first 4 rounding digits 9999?
				// If so, restart the summation with a higher precision, otherwise
				// e.g. with precision: 12, rounding: 1
				// ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
				// `wpr - guard` is the index of first rounding digit.
				if (sd == null) {
					if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
						Ctor.precision = wpr += guard;
						t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
						x2 = finalise(x.times(x), wpr, 1);
						denominator = rep = 1;
					} else {
						return finalise(sum, Ctor.precision = pr, rm, external = true);
					}
				} else {
					Ctor.precision = pr;
					return sum;
				}
			}

			sum = t;
			denominator += 2;
		}
	}


	// Å}Infinity, NaN.
	function nonFiniteToString(x) {
		// Unsigned.
		return String(x.s * x.s / 0);
	}


	/*
	 * Parse the value of a new Decimal `x` from string `str`.
	 */
	function parseDecimal(x, str) {
		var e, i, len;

		// Decimal point?
		if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

		// Exponential form?
		if ((i = str.search(/e/i)) > 0) {

			// Determine exponent.
			if (e < 0) e = i;
			e += +str.slice(i + 1);
			str = str.substring(0, i);
		} else if (e < 0) {

			// Integer.
			e = str.length;
		}

		// Determine leading zeros.
		for (i = 0; str.charCodeAt(i) === 48; i++);

		// Determine trailing zeros.
		for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
		str = str.slice(i, len);

		if (str) {
			len -= i;
			x.e = e = e - i - 1;
			x.d = [];

			// Transform base

			// e is the base 10 exponent.
			// i is where to slice str to get the first word of the digits array.
			i = (e + 1) % LOG_BASE;
			if (e < 0) i += LOG_BASE;

			if (i < len) {
				if (i) x.d.push(+str.slice(0, i));
				for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
				str = str.slice(i);
				i = LOG_BASE - str.length;
			} else {
				i -= len;
			}

			for (; i--;) str += '0';
			x.d.push(+str);

			if (external) {

				// Overflow?
				if (x.e > x.constructor.maxE) {

					// Infinity.
					x.d = null;
					x.e = NaN;

					// Underflow?
				} else if (x.e < x.constructor.minE) {

					// Zero.
					x.e = 0;
					x.d = [0];
					// x.constructor.underflow = true;
				} // else x.constructor.underflow = false;
			}
		} else {

			// Zero.
			x.e = 0;
			x.d = [0];
		}

		return x;
	}


	/*
	 * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
	 */
	function parseOther(x, str) {
		var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

		if (str === 'Infinity' || str === 'NaN') {
			if (!+str) x.s = NaN;
			x.e = NaN;
			x.d = null;
			return x;
		}

		if (isHex.test(str)) {
			base = 16;
			str = str.toLowerCase();
		} else if (isBinary.test(str)) {
			base = 2;
		} else if (isOctal.test(str)) {
			base = 8;
		} else {
			throw Error(invalidArgument + str);
		}

		// Is there a binary exponent part?
		i = str.search(/p/i);

		if (i > 0) {
			p = +str.slice(i + 1);
			str = str.substring(2, i);
		} else {
			str = str.slice(2);
		}

		// Convert `str` as an integer then divide the result by `base` raised to a power such that the
		// fraction part will be restored.
		i = str.indexOf('.');
		isFloat = i >= 0;
		Ctor = x.constructor;

		if (isFloat) {
			str = str.replace('.', '');
			len = str.length;
			i = len - i;

			// log[10](16) = 1.2041... , log[10](88) = 1.9444....
			divisor = intPow(Ctor, new Ctor(base), i, i * 2);
		}

		xd = convertBase(str, base, BASE);
		xe = xd.length - 1;

		// Remove trailing zeros.
		for (i = xe; xd[i] === 0; --i) xd.pop();
		if (i < 0) return new Ctor(x.s * 0);
		x.e = getBase10Exponent(xd, xe);
		x.d = xd;
		external = false;

		// At what precision to perform the division to ensure exact conversion?
		// maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
		// log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
		// E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
		// maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
		// Therefore using 4 * the number of digits of str will always be enough.
		if (isFloat) x = divide(x, divisor, len * 4);

		// Multiply by the binary exponent part if present.
		if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
		external = true;

		return x;
	}


	/*
	 * sin(x) = x - x^3/3! + x^5/5! - ...
	 * |x| < pi/2
	 *
	 */
	function sine(Ctor, x) {
		var k,
			len = x.d.length;

		if (len < 3) return taylorSeries(Ctor, 2, x, x);

		// Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
		// i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
		// and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

		// Estimate the optimum number of times to use the argument reduction.
		k = 1.4 * Math.sqrt(len);
		k = k > 16 ? 16 : k | 0;

		x = x.times(1 / tinyPow(5, k));
		x = taylorSeries(Ctor, 2, x, x);

		// Reverse argument reduction
		var sin2_x,
			d5 = new Ctor(5),
			d16 = new Ctor(16),
			d20 = new Ctor(20);
		for (; k--;) {
			sin2_x = x.times(x);
			x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
		}

		return x;
	}


	// Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
	function taylorSeries(Ctor, n, x, y, isHyperbolic) {
		var j, t, u, x2,
			i = 1,
			pr = Ctor.precision,
			k = Math.ceil(pr / LOG_BASE);

		external = false;
		x2 = x.times(x);
		u = new Ctor(y);

		for (; ;) {
			t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
			u = isHyperbolic ? y.plus(t) : y.minus(t);
			y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
			t = u.plus(y);

			if (t.d[k] !== void 0) {
				for (j = k; t.d[j] === u.d[j] && j--;);
				if (j == -1) break;
			}

			j = u;
			u = y;
			y = t;
			t = j;
			i++;
		}

		external = true;
		t.d.length = k + 1;

		return t;
	}


	// Exponent e must be positive and non-zero.
	function tinyPow(b, e) {
		var n = b;
		while (--e) n *= b;
		return n;
	}


	// Return the absolute value of `x` reduced to less than or equal to half pi.
	function toLessThanHalfPi(Ctor, x) {
		var t,
			isNeg = x.s < 0,
			pi = getPi(Ctor, Ctor.precision, 1),
			halfPi = pi.times(0.5);

		x = x.abs();

		if (x.lte(halfPi)) {
			quadrant = isNeg ? 4 : 1;
			return x;
		}

		t = x.divToInt(pi);

		if (t.isZero()) {
			quadrant = isNeg ? 3 : 2;
		} else {
			x = x.minus(t.times(pi));

			// 0 <= x < pi
			if (x.lte(halfPi)) {
				quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
				return x;
			}

			quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
		}

		return x.minus(pi).abs();
	}


	/*
	 * Return the value of Decimal `x` as a string in base `baseOut`.
	 *
	 * If the optional `sd` argument is present include a binary exponent suffix.
	 */
	function toStringBinary(x, baseOut, sd, rm) {
		var base, e, i, k, len, roundUp, str, xd, y,
			Ctor = x.constructor,
			isExp = sd !== void 0;

		if (isExp) {
			checkInt32(sd, 1, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
		} else {
			sd = Ctor.precision;
			rm = Ctor.rounding;
		}

		if (!x.isFinite()) {
			str = nonFiniteToString(x);
		} else {
			str = finiteToString(x);
			i = str.indexOf('.');

			// Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
			// maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
			// minBinaryExponent = floor(decimalExponent * log[2](10))
			// log[2](10) = 3.321928094887362347870319429489390175864

			if (isExp) {
				base = 2;
				if (baseOut == 16) {
					sd = sd * 4 - 3;
				} else if (baseOut == 8) {
					sd = sd * 3 - 2;
				}
			} else {
				base = baseOut;
			}

			// Convert the number as an integer then divide the result by its base raised to a power such
			// that the fraction part will be restored.

			// Non-integer.
			if (i >= 0) {
				str = str.replace('.', '');
				y = new Ctor(1);
				y.e = str.length - i;
				y.d = convertBase(finiteToString(y), 10, base);
				y.e = y.d.length;
			}

			xd = convertBase(str, 10, base);
			e = len = xd.length;

			// Remove trailing zeros.
			for (; xd[--len] == 0;) xd.pop();

			if (!xd[0]) {
				str = isExp ? '0p+0' : '0';
			} else {
				if (i < 0) {
					e--;
				} else {
					x = new Ctor(x);
					x.d = xd;
					x.e = e;
					x = divide(x, y, sd, rm, 0, base);
					xd = x.d;
					e = x.e;
					roundUp = inexact;
				}

				// The rounding digit, i.e. the digit after the digit that may be rounded up.
				i = xd[sd];
				k = base / 2;
				roundUp = roundUp || xd[sd + 1] !== void 0;

				roundUp = rm < 4
					? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
					: i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
						rm === (x.s < 0 ? 8 : 7));

				xd.length = sd;

				if (roundUp) {

					// Rounding up may mean the previous digit has to be rounded up and so on.
					for (; ++xd[--sd] > base - 1;) {
						xd[sd] = 0;
						if (!sd) {
							++e;
							xd.unshift(1);
						}
					}
				}

				// Determine trailing zeros.
				for (len = xd.length; !xd[len - 1]; --len);

				// E.g. [4, 11, 15] becomes 4bf.
				for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

				// Add binary exponent suffix?
				if (isExp) {
					if (len > 1) {
						if (baseOut == 16 || baseOut == 8) {
							i = baseOut == 16 ? 4 : 3;
							for (--len; len % i; len++) str += '0';
							xd = convertBase(str, base, baseOut);
							for (len = xd.length; !xd[len - 1]; --len);

							// xd[0] will always be be 1
							for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
						} else {
							str = str.charAt(0) + '.' + str.slice(1);
						}
					}

					str = str + (e < 0 ? 'p' : 'p+') + e;
				} else if (e < 0) {
					for (; ++e;) str = '0' + str;
					str = '0.' + str;
				} else {
					if (++e > len) for (e -= len; e--;) str += '0';
					else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
				}
			}

			str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
		}

		return x.s < 0 ? '-' + str : str;
	}


	// Does not strip trailing zeros.
	function truncate(arr, len) {
		if (arr.length > len) {
			arr.length = len;
			return true;
		}
	}


	// Decimal methods


	/*
	 *  abs
	 *  acos
	 *  acosh
	 *  add
	 *  asin
	 *  asinh
	 *  atan
	 *  atanh
	 *  atan2
	 *  cbrt
	 *  ceil
	 *  clone
	 *  config
	 *  cos
	 *  cosh
	 *  div
	 *  exp
	 *  floor
	 *  hypot
	 *  ln
	 *  log
	 *  log2
	 *  log10
	 *  max
	 *  min
	 *  mod
	 *  mul
	 *  pow
	 *  random
	 *  round
	 *  set
	 *  sign
	 *  sin
	 *  sinh
	 *  sqrt
	 *  sub
	 *  tan
	 *  tanh
	 *  trunc
	 */


	/*
	 * Return a new Decimal whose value is the absolute value of `x`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function abs(x) {
		return new this(x).abs();
	}


	/*
	 * Return a new Decimal whose value is the arccosine in radians of `x`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function acos(x) {
		return new this(x).acos();
	}


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function acosh(x) {
		return new this(x).acosh();
	}


	/*
	 * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 * y {number|string|Decimal}
	 *
	 */
	function add(x, y) {
		return new this(x).plus(y);
	}


	/*
	 * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function asin(x) {
		return new this(x).asin();
	}


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function asinh(x) {
		return new this(x).asinh();
	}


	/*
	 * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function atan(x) {
		return new this(x).atan();
	}


	/*
	 * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
	 * `precision` significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function atanh(x) {
		return new this(x).atanh();
	}


	/*
	 * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
	 * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
	 *
	 * Domain: [-Infinity, Infinity]
	 * Range: [-pi, pi]
	 *
	 * y {number|string|Decimal} The y-coordinate.
	 * x {number|string|Decimal} The x-coordinate.
	 *
	 * atan2(Å}0, -0)               = Å}pi
	 * atan2(Å}0, +0)               = Å}0
	 * atan2(Å}0, -x)               = Å}pi for x > 0
	 * atan2(Å}0, x)                = Å}0 for x > 0
	 * atan2(-y, Å}0)               = -pi/2 for y > 0
	 * atan2(y, Å}0)                = pi/2 for y > 0
	 * atan2(Å}y, -Infinity)        = Å}pi for finite y > 0
	 * atan2(Å}y, +Infinity)        = Å}0 for finite y > 0
	 * atan2(Å}Infinity, x)         = Å}pi/2 for finite x
	 * atan2(Å}Infinity, -Infinity) = Å}3*pi/4
	 * atan2(Å}Infinity, +Infinity) = Å}pi/4
	 * atan2(NaN, x) = NaN
	 * atan2(y, NaN) = NaN
	 *
	 */
	function atan2(y, x) {
		y = new this(y);
		x = new this(x);
		var r,
			pr = this.precision,
			rm = this.rounding,
			wpr = pr + 4;

		// Either NaN
		if (!y.s || !x.s) {
			r = new this(NaN);

			// Both Å}Infinity
		} else if (!y.d && !x.d) {
			r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
			r.s = y.s;

			// x is Å}Infinity or y is Å}0
		} else if (!x.d || y.isZero()) {
			r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
			r.s = y.s;

			// y is Å}Infinity or x is Å}0
		} else if (!y.d || x.isZero()) {
			r = getPi(this, wpr, 1).times(0.5);
			r.s = y.s;

			// Both non-zero and finite
		} else if (x.s < 0) {
			this.precision = wpr;
			this.rounding = 1;
			r = this.atan(divide(y, x, wpr, 1));
			x = getPi(this, wpr, 1);
			this.precision = pr;
			this.rounding = rm;
			r = y.s < 0 ? r.minus(x) : r.plus(x);
		} else {
			r = this.atan(divide(y, x, wpr, 1));
		}

		return r;
	}


	/*
	 * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function cbrt(x) {
		return new this(x).cbrt();
	}


	/*
	 * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function ceil(x) {
		return finalise(x = new this(x), x.e + 1, 2);
	}


	/*
	 * Configure global settings for a Decimal constructor.
	 *
	 * `obj` is an object with one or more of the following properties,
	 *
	 *   precision  {number}
	 *   rounding   {number}
	 *   toExpNeg   {number}
	 *   toExpPos   {number}
	 *   maxE       {number}
	 *   minE       {number}
	 *   modulo     {number}
	 *   crypto     {boolean|number}
	 *   defaults   {true}
	 *
	 * E.g. Decimal.config({ precision: 20, rounding: 4 })
	 *
	 */
	function config(obj) {
		if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
		var i, p, v,
			useDefaults = obj.defaults === true,
			ps = [
				'precision', 1, MAX_DIGITS,
				'rounding', 0, 8,
				'toExpNeg', -EXP_LIMIT, 0,
				'toExpPos', 0, EXP_LIMIT,
				'maxE', 0, EXP_LIMIT,
				'minE', -EXP_LIMIT, 0,
				'modulo', 0, 9
			];

		for (i = 0; i < ps.length; i += 3) {
			if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
			if ((v = obj[p]) !== void 0) {
				if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
				else throw Error(invalidArgument + p + ': ' + v);
			}
		}

		if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
		if ((v = obj[p]) !== void 0) {
			if (v === true || v === false || v === 0 || v === 1) {
				if (v) {
					if (typeof crypto != 'undefined' && crypto &&
						(crypto.getRandomValues || crypto.randomBytes)) {
						this[p] = true;
					} else {
						throw Error(cryptoUnavailable);
					}
				} else {
					this[p] = false;
				}
			} else {
				throw Error(invalidArgument + p + ': ' + v);
			}
		}

		return this;
	}


	/*
	 * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function cos(x) {
		return new this(x).cos();
	}


	/*
	 * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function cosh(x) {
		return new this(x).cosh();
	}


	/*
	 * Create and return a Decimal constructor with the same configuration properties as this Decimal
	 * constructor.
	 *
	 */
	function clone(obj) {
		var i, p, ps;

		/*
		 * The Decimal constructor and exported function.
		 * Return a new Decimal instance.
		 *
		 * v {number|string|Decimal} A numeric value.
		 *
		 */
		function Decimal(v) {
			var e, i, t,
				x = this;

			// Decimal called without new.
			if (!(x instanceof Decimal)) return new Decimal(v);

			// Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
			// which points to Object.
			x.constructor = Decimal;

			// Duplicate.
			if (v instanceof Decimal) {
				x.s = v.s;

				if (external) {
					if (!v.d || v.e > Decimal.maxE) {

						// Infinity.
						x.e = NaN;
						x.d = null;
					} else if (v.e < Decimal.minE) {

						// Zero.
						x.e = 0;
						x.d = [0];
					} else {
						x.e = v.e;
						x.d = v.d.slice();
					}
				} else {
					x.e = v.e;
					x.d = v.d ? v.d.slice() : v.d;
				}

				return;
			}

			t = typeof v;

			if (t === 'number') {
				if (v === 0) {
					x.s = 1 / v < 0 ? -1 : 1;
					x.e = 0;
					x.d = [0];
					return;
				}

				if (v < 0) {
					v = -v;
					x.s = -1;
				} else {
					x.s = 1;
				}

				// Fast path for small integers.
				if (v === ~~v && v < 1e7) {
					for (e = 0, i = v; i >= 10; i /= 10) e++;

					if (external) {
						if (e > Decimal.maxE) {
							x.e = NaN;
							x.d = null;
						} else if (e < Decimal.minE) {
							x.e = 0;
							x.d = [0];
						} else {
							x.e = e;
							x.d = [v];
						}
					} else {
						x.e = e;
						x.d = [v];
					}

					return;

					// Infinity, NaN.
				} else if (v * 0 !== 0) {
					if (!v) x.s = NaN;
					x.e = NaN;
					x.d = null;
					return;
				}

				return parseDecimal(x, v.toString());

			} else if (t !== 'string') {
				throw Error(invalidArgument + v);
			}

			// Minus sign?
			if ((i = v.charCodeAt(0)) === 45) {
				v = v.slice(1);
				x.s = -1;
			} else {
				// Plus sign?
				if (i === 43) v = v.slice(1);
				x.s = 1;
			}

			return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
		}

		Decimal.prototype = P;

		Decimal.ROUND_UP = 0;
		Decimal.ROUND_DOWN = 1;
		Decimal.ROUND_CEIL = 2;
		Decimal.ROUND_FLOOR = 3;
		Decimal.ROUND_HALF_UP = 4;
		Decimal.ROUND_HALF_DOWN = 5;
		Decimal.ROUND_HALF_EVEN = 6;
		Decimal.ROUND_HALF_CEIL = 7;
		Decimal.ROUND_HALF_FLOOR = 8;
		Decimal.EUCLID = 9;

		Decimal.config = Decimal.set = config;
		Decimal.clone = clone;
		Decimal.isDecimal = isDecimalInstance;

		Decimal.abs = abs;
		Decimal.acos = acos;
		Decimal.acosh = acosh;        // ES6
		Decimal.add = add;
		Decimal.asin = asin;
		Decimal.asinh = asinh;        // ES6
		Decimal.atan = atan;
		Decimal.atanh = atanh;        // ES6
		Decimal.atan2 = atan2;
		Decimal.cbrt = cbrt;          // ES6
		Decimal.ceil = ceil;
		Decimal.cos = cos;
		Decimal.cosh = cosh;          // ES6
		Decimal.div = div;
		Decimal.exp = exp;
		Decimal.floor = floor;
		Decimal.hypot = hypot;        // ES6
		Decimal.ln = ln;
		Decimal.log = log;
		Decimal.log10 = log10;        // ES6
		Decimal.log2 = log2;          // ES6
		Decimal.max = max;
		Decimal.min = min;
		Decimal.mod = mod;
		Decimal.mul = mul;
		Decimal.pow = pow;
		Decimal.random = random;
		Decimal.round = round;
		Decimal.sign = sign;          // ES6
		Decimal.sin = sin;
		Decimal.sinh = sinh;          // ES6
		Decimal.sqrt = sqrt;
		Decimal.sub = sub;
		Decimal.tan = tan;
		Decimal.tanh = tanh;          // ES6
		Decimal.trunc = trunc;        // ES6

		if (obj === void 0) obj = {};
		if (obj) {
			if (obj.defaults !== true) {
				ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
				for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
			}
		}

		Decimal.config(obj);

		return Decimal;
	}


	/*
	 * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 * y {number|string|Decimal}
	 *
	 */
	function div(x, y) {
		return new this(x).div(y);
	}


	/*
	 * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} The power to which to raise the base of the natural log.
	 *
	 */
	function exp(x) {
		return new this(x).exp();
	}


	/*
	 * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function floor(x) {
		return finalise(x = new this(x), x.e + 1, 3);
	}


	/*
	 * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
	 * rounded to `precision` significant digits using rounding mode `rounding`.
	 *
	 * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
	 *
	 * arguments {number|string|Decimal}
	 *
	 */
	function hypot() {
		var i, n,
			t = new this(0);

		external = false;

		for (i = 0; i < arguments.length;) {
			n = new this(arguments[i++]);
			if (!n.d) {
				if (n.s) {
					external = true;
					return new this(1 / 0);
				}
				t = n;
			} else if (t.d) {
				t = t.plus(n.times(n));
			}
		}

		external = true;

		return t.sqrt();
	}


	/*
	 * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
	 * otherwise return false.
	 *
	 */
	function isDecimalInstance(obj) {
		return obj instanceof Decimal || obj && obj.name === '[object Decimal]' || false;
	}


	/*
	 * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function ln(x) {
		return new this(x).ln();
	}


	/*
	 * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
	 * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
	 *
	 * log[y](x)
	 *
	 * x {number|string|Decimal} The argument of the logarithm.
	 * y {number|string|Decimal} The base of the logarithm.
	 *
	 */
	function log(x, y) {
		return new this(x).log(y);
	}


	/*
	 * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function log2(x) {
		return new this(x).log(2);
	}


	/*
	 * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function log10(x) {
		return new this(x).log(10);
	}


	/*
	 * Return a new Decimal whose value is the maximum of the arguments.
	 *
	 * arguments {number|string|Decimal}
	 *
	 */
	function max() {
		return maxOrMin(this, arguments, 'lt');
	}


	/*
	 * Return a new Decimal whose value is the minimum of the arguments.
	 *
	 * arguments {number|string|Decimal}
	 *
	 */
	function min() {
		return maxOrMin(this, arguments, 'gt');
	}


	/*
	 * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
	 * using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 * y {number|string|Decimal}
	 *
	 */
	function mod(x, y) {
		return new this(x).mod(y);
	}


	/*
	 * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 * y {number|string|Decimal}
	 *
	 */
	function mul(x, y) {
		return new this(x).mul(y);
	}


	/*
	 * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} The base.
	 * y {number|string|Decimal} The exponent.
	 *
	 */
	function pow(x, y) {
		return new this(x).pow(y);
	}


	/*
	 * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
	 * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
	 * are produced).
	 *
	 * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
	 *
	 */
	function random(sd) {
		var d, e, k, n,
			i = 0,
			r = new this(1),
			rd = [];

		if (sd === void 0) sd = this.precision;
		else checkInt32(sd, 1, MAX_DIGITS);

		k = Math.ceil(sd / LOG_BASE);

		if (!this.crypto) {
			for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

			// Browsers supporting crypto.getRandomValues.
		} else if (crypto.getRandomValues) {
			d = crypto.getRandomValues(new Uint32Array(k));

			for (; i < k;) {
				n = d[i];

				// 0 <= n < 4294967296
				// Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
				if (n >= 4.29e9) {
					d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
				} else {

					// 0 <= n <= 4289999999
					// 0 <= (n % 1e7) <= 9999999
					rd[i++] = n % 1e7;
				}
			}

			// Node.js supporting crypto.randomBytes.
		} else if (crypto.randomBytes) {

			// buffer
			d = crypto.randomBytes(k *= 4);

			for (; i < k;) {

				// 0 <= n < 2147483648
				n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

				// Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
				if (n >= 2.14e9) {
					crypto.randomBytes(4).copy(d, i);
				} else {

					// 0 <= n <= 2139999999
					// 0 <= (n % 1e7) <= 9999999
					rd.push(n % 1e7);
					i += 4;
				}
			}

			i = k / 4;
		} else {
			throw Error(cryptoUnavailable);
		}

		k = rd[--i];
		sd %= LOG_BASE;

		// Convert trailing digits to zeros according to sd.
		if (k && sd) {
			n = mathpow(10, LOG_BASE - sd);
			rd[i] = (k / n | 0) * n;
		}

		// Remove trailing words which are zero.
		for (; rd[i] === 0; i--) rd.pop();

		// Zero?
		if (i < 0) {
			e = 0;
			rd = [0];
		} else {
			e = -1;

			// Remove leading words which are zero and adjust exponent accordingly.
			for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

			// Count the digits of the first word of rd to determine leading zeros.
			for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

			// Adjust the exponent for leading zeros of the first word of rd.
			if (k < LOG_BASE) e -= LOG_BASE - k;
		}

		r.e = e;
		r.d = rd;

		return r;
	}


	/*
	 * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
	 *
	 * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function round(x) {
		return finalise(x = new this(x), x.e + 1, this.rounding);
	}


	/*
	 * Return
	 *   1    if x > 0,
	 *  -1    if x < 0,
	 *   0    if x is 0,
	 *  -0    if x is -0,
	 *   NaN  otherwise
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function sign(x) {
		x = new this(x);
		return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
	}


	/*
	 * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
	 * using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function sin(x) {
		return new this(x).sin();
	}


	/*
	 * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function sinh(x) {
		return new this(x).sinh();
	}


	/*
	 * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function sqrt(x) {
		return new this(x).sqrt();
	}


	/*
	 * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
	 * using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal}
	 * y {number|string|Decimal}
	 *
	 */
	function sub(x, y) {
		return new this(x).sub(y);
	}


	/*
	 * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
	 * digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function tan(x) {
		return new this(x).tan();
	}


	/*
	 * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
	 * significant digits using rounding mode `rounding`.
	 *
	 * x {number|string|Decimal} A value in radians.
	 *
	 */
	function tanh(x) {
		return new this(x).tanh();
	}


	/*
	 * Return a new Decimal whose value is `x` truncated to an integer.
	 *
	 * x {number|string|Decimal}
	 *
	 */
	function trunc(x) {
		return finalise(x = new this(x), x.e + 1, 1);
	}


	// Create and configure initial Decimal constructor.
	Decimal = clone(DEFAULTS);

	Decimal['default'] = Decimal.Decimal = Decimal;

	// Create the internal constants from their string values.
	LN10 = new Decimal(LN10);
	PI = new Decimal(PI);


	// Export.


	// AMD.
	if (typeof define == 'function' && define.amd) {
		define(function () {
			return Decimal;
		});

		// Node and other environments that support module.exports.
	} else if (typeof module != 'undefined' && module.exports) {
		if (typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol') {
			P[Symbol.for('nodejs.util.inspect.custom')] = P.toString;
			P[Symbol.toStringTag] = 'Decimal';
		}

		module.exports = Decimal;

		// Browser.
	} else {
		if (!globalScope) {
			globalScope = typeof self != 'undefined' && self && self.self == self ? self : window;
		}

		noConflict = globalScope.Decimal;
		Decimal.noConflict = function () {
			globalScope.Decimal = noConflict;
			return Decimal;
		};

		globalScope.Decimal = Decimal;
	}
})(this);

; (function (globalObject) {
	'use strict';

	/*
	 *      bignumber.js v9.0.1
	 *      A JavaScript library for arbitrary-precision arithmetic.
	 *      https://github.com/MikeMcl/bignumber.js
	 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
	 *      MIT Licensed.
	 *
	 *      BigNumber.prototype methods     |  BigNumber methods
	 *                                      |
	 *      absoluteValue            abs    |  clone
	 *      comparedTo                      |  config               set
	 *      decimalPlaces            dp     |      DECIMAL_PLACES
	 *      dividedBy                div    |      ROUNDING_MODE
	 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
	 *      exponentiatedBy          pow    |      RANGE
	 *      integerValue                    |      CRYPTO
	 *      isEqualTo                eq     |      MODULO_MODE
	 *      isFinite                        |      POW_PRECISION
	 *      isGreaterThan            gt     |      FORMAT
	 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
	 *      isInteger                       |  isBigNumber
	 *      isLessThan               lt     |  maximum              max
	 *      isLessThanOrEqualTo      lte    |  minimum              min
	 *      isNaN                           |  random
	 *      isNegative                      |  sum
	 *      isPositive                      |
	 *      isZero                          |
	 *      minus                           |
	 *      modulo                   mod    |
	 *      multipliedBy             times  |
	 *      negated                         |
	 *      plus                            |
	 *      precision                sd     |
	 *      shiftedBy                       |
	 *      squareRoot               sqrt   |
	 *      toExponential                   |
	 *      toFixed                         |
	 *      toFormat                        |
	 *      toFraction                      |
	 *      toJSON                          |
	 *      toNumber                        |
	 *      toPrecision                     |
	 *      toString                        |
	 *      valueOf                         |
	 *
	 */


	var BigNumber,
		isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
		mathceil = Math.ceil,
		mathfloor = Math.floor,

		bignumberError = '[BigNumber Error] ',
		tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

		BASE = 1e14,
		LOG_BASE = 14,
		MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
		// MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
		POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
		SQRT_BASE = 1e7,

		// EDITABLE
		// The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
		// the arguments to toExponential, toFixed, toFormat, and toPrecision.
		MAX = 1E9;                                   // 0 to MAX_INT32


	/*
	 * Create and return a BigNumber constructor.
	 */
	function clone(configObject) {
		var div, convertBase, parseNumeric,
			P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
			ONE = new BigNumber(1),


			//----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


			// The default values below must be integers within the inclusive ranges stated.
			// The values can also be changed at run-time using BigNumber.set.

			// The maximum number of decimal places for operations involving division.
			DECIMAL_PLACES = 20,                     // 0 to MAX

			// The rounding mode used when rounding to the above decimal places, and when using
			// toExponential, toFixed, toFormat and toPrecision, and round (default value).
			// UP         0 Away from zero.
			// DOWN       1 Towards zero.
			// CEIL       2 Towards +Infinity.
			// FLOOR      3 Towards -Infinity.
			// HALF_UP    4 Towards nearest neighbour. If equidistant, up.
			// HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
			// HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
			// HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
			// HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
			ROUNDING_MODE = 4,                       // 0 to 8

			// EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

			// The exponent value at and beneath which toString returns exponential notation.
			// Number type: -7
			TO_EXP_NEG = -7,                         // 0 to -MAX

			// The exponent value at and above which toString returns exponential notation.
			// Number type: 21
			TO_EXP_POS = 21,                         // 0 to MAX

			// RANGE : [MIN_EXP, MAX_EXP]

			// The minimum exponent value, beneath which underflow to zero occurs.
			// Number type: -324  (5e-324)
			MIN_EXP = -1e7,                          // -1 to -MAX

			// The maximum exponent value, above which overflow to Infinity occurs.
			// Number type:  308  (1.7976931348623157e+308)
			// For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
			MAX_EXP = 1e7,                           // 1 to MAX

			// Whether to use cryptographically-secure random number generation, if available.
			CRYPTO = false,                          // true or false

			// The modulo mode used when calculating the modulus: a mod n.
			// The quotient (q = a / n) is calculated according to the corresponding rounding mode.
			// The remainder (r) is calculated as: r = a - n * q.
			//
			// UP        0 The remainder is positive if the dividend is negative, else is negative.
			// DOWN      1 The remainder has the same sign as the dividend.
			//             This modulo mode is commonly known as 'truncated division' and is
			//             equivalent to (a % n) in JavaScript.
			// FLOOR     3 The remainder has the same sign as the divisor (Python %).
			// HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
			// EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
			//             The remainder is always positive.
			//
			// The truncated division, floored division, Euclidian division and IEEE 754 remainder
			// modes are commonly used for the modulus operation.
			// Although the other rounding modes can also be used, they may not give useful results.
			MODULO_MODE = 1,                         // 0 to 9

			// The maximum number of significant digits of the result of the exponentiatedBy operation.
			// If POW_PRECISION is 0, there will be unlimited significant digits.
			POW_PRECISION = 0,                    // 0 to MAX

			// The format specification used by the BigNumber.prototype.toFormat method.
			FORMAT = {
				prefix: '',
				groupSize: 3,
				secondaryGroupSize: 0,
				groupSeparator: ',',
				decimalSeparator: '.',
				fractionGroupSize: 0,
				fractionGroupSeparator: '\xA0',      // non-breaking space
				suffix: ''
			},

			// The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
			// '-', '.', whitespace, or repeated character.
			// '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
			ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


		//------------------------------------------------------------------------------------------


		// CONSTRUCTOR


		/*
		 * The BigNumber constructor and exported function.
		 * Create and return a new instance of a BigNumber object.
		 *
		 * v {number|string|BigNumber} A numeric value.
		 * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
		 */
		function BigNumber(v, b) {
			var alphabet, c, caseChanged, e, i, isNum, len, str,
				x = this;

			// Enable constructor call without `new`.
			if (!(x instanceof BigNumber)) return new BigNumber(v, b);

			if (b == null) {

				if (v && v._isBigNumber === true) {
					x.s = v.s;

					if (!v.c || v.e > MAX_EXP) {
						x.c = x.e = null;
					} else if (v.e < MIN_EXP) {
						x.c = [x.e = 0];
					} else {
						x.e = v.e;
						x.c = v.c.slice();
					}

					return;
				}

				if ((isNum = typeof v == 'number') && v * 0 == 0) {

					// Use `1 / n` to handle minus zero also.
					x.s = 1 / v < 0 ? (v = -v, -1) : 1;

					// Fast path for integers, where n < 2147483648 (2**31).
					if (v === ~~v) {
						for (e = 0, i = v; i >= 10; i /= 10, e++);

						if (e > MAX_EXP) {
							x.c = x.e = null;
						} else {
							x.e = e;
							x.c = [v];
						}

						return;
					}

					str = String(v);
				} else {

					if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

					x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
				}

				// Decimal point?
				if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

				// Exponential form?
				if ((i = str.search(/e/i)) > 0) {

					// Determine exponent.
					if (e < 0) e = i;
					e += +str.slice(i + 1);
					str = str.substring(0, i);
				} else if (e < 0) {

					// Integer.
					e = str.length;
				}

			} else {

				// '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
				intCheck(b, 2, ALPHABET.length, 'Base');

				// Allow exponential notation to be used with base 10 argument, while
				// also rounding to DECIMAL_PLACES as with other bases.
				if (b == 10) {
					x = new BigNumber(v);
					return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
				}

				str = String(v);

				if (isNum = typeof v == 'number') {

					// Avoid potential interpretation of Infinity and NaN as base 44+ values.
					if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

					x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

					// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
					if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
						throw Error
							(tooManyDigits + v);
					}
				} else {
					x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
				}

				alphabet = ALPHABET.slice(0, b);
				e = i = 0;

				// Check that str is a valid base b number.
				// Don't use RegExp, so alphabet can contain special characters.
				for (len = str.length; i < len; i++) {
					if (alphabet.indexOf(c = str.charAt(i)) < 0) {
						if (c == '.') {

							// If '.' is not the first character and it has not be found before.
							if (i > e) {
								e = len;
								continue;
							}
						} else if (!caseChanged) {

							// Allow e.g. hexadecimal 'FF' as well as 'ff'.
							if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
								str == str.toLowerCase() && (str = str.toUpperCase())) {
								caseChanged = true;
								i = -1;
								e = 0;
								continue;
							}
						}

						return parseNumeric(x, String(v), isNum, b);
					}
				}

				// Prevent later check for length on converted number.
				isNum = false;
				str = convertBase(str, b, 10, x.s);

				// Decimal point?
				if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
				else e = str.length;
			}

			// Determine leading zeros.
			for (i = 0; str.charCodeAt(i) === 48; i++);

			// Determine trailing zeros.
			for (len = str.length; str.charCodeAt(--len) === 48;);

			if (str = str.slice(i, ++len)) {
				len -= i;

				// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
				if (isNum && BigNumber.DEBUG &&
					len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
					throw Error
						(tooManyDigits + (x.s * v));
				}

				// Overflow?
				if ((e = e - i - 1) > MAX_EXP) {

					// Infinity.
					x.c = x.e = null;

					// Underflow?
				} else if (e < MIN_EXP) {

					// Zero.
					x.c = [x.e = 0];
				} else {
					x.e = e;
					x.c = [];

					// Transform base

					// e is the base 10 exponent.
					// i is where to slice str to get the first element of the coefficient array.
					i = (e + 1) % LOG_BASE;
					if (e < 0) i += LOG_BASE;  // i < 1

					if (i < len) {
						if (i) x.c.push(+str.slice(0, i));

						for (len -= LOG_BASE; i < len;) {
							x.c.push(+str.slice(i, i += LOG_BASE));
						}

						i = LOG_BASE - (str = str.slice(i)).length;
					} else {
						i -= len;
					}

					for (; i--; str += '0');
					x.c.push(+str);
				}
			} else {

				// Zero.
				x.c = [x.e = 0];
			}
		}


		// CONSTRUCTOR PROPERTIES


		BigNumber.clone = clone;

		BigNumber.ROUND_UP = 0;
		BigNumber.ROUND_DOWN = 1;
		BigNumber.ROUND_CEIL = 2;
		BigNumber.ROUND_FLOOR = 3;
		BigNumber.ROUND_HALF_UP = 4;
		BigNumber.ROUND_HALF_DOWN = 5;
		BigNumber.ROUND_HALF_EVEN = 6;
		BigNumber.ROUND_HALF_CEIL = 7;
		BigNumber.ROUND_HALF_FLOOR = 8;
		BigNumber.EUCLID = 9;


		/*
		 * Configure infrequently-changing library-wide settings.
		 *
		 * Accept an object with the following optional properties (if the value of a property is
		 * a number, it must be an integer within the inclusive range stated):
		 *
		 *   DECIMAL_PLACES   {number}           0 to MAX
		 *   ROUNDING_MODE    {number}           0 to 8
		 *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
		 *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
		 *   CRYPTO           {boolean}          true or false
		 *   MODULO_MODE      {number}           0 to 9
		 *   POW_PRECISION       {number}           0 to MAX
		 *   ALPHABET         {string}           A string of two or more unique characters which does
		 *                                       not contain '.'.
		 *   FORMAT           {object}           An object with some of the following properties:
		 *     prefix                 {string}
		 *     groupSize              {number}
		 *     secondaryGroupSize     {number}
		 *     groupSeparator         {string}
		 *     decimalSeparator       {string}
		 *     fractionGroupSize      {number}
		 *     fractionGroupSeparator {string}
		 *     suffix                 {string}
		 *
		 * (The values assigned to the above FORMAT object properties are not checked for validity.)
		 *
		 * E.g.
		 * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
		 *
		 * Ignore properties/parameters set to null or undefined, except for ALPHABET.
		 *
		 * Return an object with the properties current values.
		 */
		BigNumber.config = BigNumber.set = function (obj) {
			var p, v;

			if (obj != null) {

				if (typeof obj == 'object') {

					// DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
					// '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
					if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
						v = obj[p];
						intCheck(v, 0, MAX, p);
						DECIMAL_PLACES = v;
					}

					// ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
					// '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
					if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
						v = obj[p];
						intCheck(v, 0, 8, p);
						ROUNDING_MODE = v;
					}

					// EXPONENTIAL_AT {number|number[]}
					// Integer, -MAX to MAX inclusive or
					// [integer -MAX to 0 inclusive, 0 to MAX inclusive].
					// '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
					if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
						v = obj[p];
						if (v && v.pop) {
							intCheck(v[0], -MAX, 0, p);
							intCheck(v[1], 0, MAX, p);
							TO_EXP_NEG = v[0];
							TO_EXP_POS = v[1];
						} else {
							intCheck(v, -MAX, MAX, p);
							TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
						}
					}

					// RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
					// [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
					// '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
					if (obj.hasOwnProperty(p = 'RANGE')) {
						v = obj[p];
						if (v && v.pop) {
							intCheck(v[0], -MAX, -1, p);
							intCheck(v[1], 1, MAX, p);
							MIN_EXP = v[0];
							MAX_EXP = v[1];
						} else {
							intCheck(v, -MAX, MAX, p);
							if (v) {
								MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
							} else {
								throw Error
									(bignumberError + p + ' cannot be zero: ' + v);
							}
						}
					}

					// CRYPTO {boolean} true or false.
					// '[BigNumber Error] CRYPTO not true or false: {v}'
					// '[BigNumber Error] crypto unavailable'
					if (obj.hasOwnProperty(p = 'CRYPTO')) {
						v = obj[p];
						if (v === !!v) {
							if (v) {
								if (typeof crypto != 'undefined' && crypto &&
									(crypto.getRandomValues || crypto.randomBytes)) {
									CRYPTO = v;
								} else {
									CRYPTO = !v;
									throw Error
										(bignumberError + 'crypto unavailable');
								}
							} else {
								CRYPTO = v;
							}
						} else {
							throw Error
								(bignumberError + p + ' not true or false: ' + v);
						}
					}

					// MODULO_MODE {number} Integer, 0 to 9 inclusive.
					// '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
					if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
						v = obj[p];
						intCheck(v, 0, 9, p);
						MODULO_MODE = v;
					}

					// POW_PRECISION {number} Integer, 0 to MAX inclusive.
					// '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
					if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
						v = obj[p];
						intCheck(v, 0, MAX, p);
						POW_PRECISION = v;
					}

					// FORMAT {object}
					// '[BigNumber Error] FORMAT not an object: {v}'
					if (obj.hasOwnProperty(p = 'FORMAT')) {
						v = obj[p];
						if (typeof v == 'object') FORMAT = v;
						else throw Error
							(bignumberError + p + ' not an object: ' + v);
					}

					// ALPHABET {string}
					// '[BigNumber Error] ALPHABET invalid: {v}'
					if (obj.hasOwnProperty(p = 'ALPHABET')) {
						v = obj[p];

						// Disallow if less than two characters,
						// or if it contains '+', '-', '.', whitespace, or a repeated character.
						if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
							ALPHABET = v;
						} else {
							throw Error
								(bignumberError + p + ' invalid: ' + v);
						}
					}

				} else {

					// '[BigNumber Error] Object expected: {v}'
					throw Error
						(bignumberError + 'Object expected: ' + obj);
				}
			}

			return {
				DECIMAL_PLACES: DECIMAL_PLACES,
				ROUNDING_MODE: ROUNDING_MODE,
				EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
				RANGE: [MIN_EXP, MAX_EXP],
				CRYPTO: CRYPTO,
				MODULO_MODE: MODULO_MODE,
				POW_PRECISION: POW_PRECISION,
				FORMAT: FORMAT,
				ALPHABET: ALPHABET
			};
		};


		/*
		 * Return true if v is a BigNumber instance, otherwise return false.
		 *
		 * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
		 *
		 * v {any}
		 *
		 * '[BigNumber Error] Invalid BigNumber: {v}'
		 */
		BigNumber.isBigNumber = function (v) {
			if (!v || v._isBigNumber !== true) return false;
			if (!BigNumber.DEBUG) return true;

			var i, n,
				c = v.c,
				e = v.e,
				s = v.s;

			out: if ({}.toString.call(c) == '[object Array]') {

				if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

					// If the first element is zero, the BigNumber value must be zero.
					if (c[0] === 0) {
						if (e === 0 && c.length === 1) return true;
						break out;
					}

					// Calculate number of digits that c[0] should have, based on the exponent.
					i = (e + 1) % LOG_BASE;
					if (i < 1) i += LOG_BASE;

					// Calculate number of digits of c[0].
					//if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
					if (String(c[0]).length == i) {

						for (i = 0; i < c.length; i++) {
							n = c[i];
							if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
						}

						// Last element cannot be zero, unless it is the only element.
						if (n !== 0) return true;
					}
				}

				// Infinity/NaN
			} else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
				return true;
			}

			throw Error
				(bignumberError + 'Invalid BigNumber: ' + v);
		};


		/*
		 * Return a new BigNumber whose value is the maximum of the arguments.
		 *
		 * arguments {number|string|BigNumber}
		 */
		BigNumber.maximum = BigNumber.max = function () {
			return maxOrMin(arguments, P.lt);
		};


		/*
		 * Return a new BigNumber whose value is the minimum of the arguments.
		 *
		 * arguments {number|string|BigNumber}
		 */
		BigNumber.minimum = BigNumber.min = function () {
			return maxOrMin(arguments, P.gt);
		};


		/*
		 * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
		 * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
		 * zeros are produced).
		 *
		 * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
		 * '[BigNumber Error] crypto unavailable'
		 */
		BigNumber.random = (function () {
			var pow2_53 = 0x20000000000000;

			// Return a 53 bit integer n, where 0 <= n < 9007199254740992.
			// Check if Math.random() produces more than 32 bits of randomness.
			// If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
			// 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
			var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
				? function () { return mathfloor(Math.random() * pow2_53); }
				: function () {
					return ((Math.random() * 0x40000000 | 0) * 0x800000) +
						(Math.random() * 0x800000 | 0);
				};

			return function (dp) {
				var a, b, e, k, v,
					i = 0,
					c = [],
					rand = new BigNumber(ONE);

				if (dp == null) dp = DECIMAL_PLACES;
				else intCheck(dp, 0, MAX);

				k = mathceil(dp / LOG_BASE);

				if (CRYPTO) {

					// Browsers supporting crypto.getRandomValues.
					if (crypto.getRandomValues) {

						a = crypto.getRandomValues(new Uint32Array(k *= 2));

						for (; i < k;) {

							// 53 bits:
							// ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
							// 11111 11111111 11111111 11111111 11100000 00000000 00000000
							// ((Math.pow(2, 32) - 1) >>> 11).toString(2)
							//                                     11111 11111111 11111111
							// 0x20000 is 2^21.
							v = a[i] * 0x20000 + (a[i + 1] >>> 11);

							// Rejection sampling:
							// 0 <= v < 9007199254740992
							// Probability that v >= 9e15, is
							// 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
							if (v >= 9e15) {
								b = crypto.getRandomValues(new Uint32Array(2));
								a[i] = b[0];
								a[i + 1] = b[1];
							} else {

								// 0 <= v <= 8999999999999999
								// 0 <= (v % 1e14) <= 99999999999999
								c.push(v % 1e14);
								i += 2;
							}
						}
						i = k / 2;

						// Node.js supporting crypto.randomBytes.
					} else if (crypto.randomBytes) {

						// buffer
						a = crypto.randomBytes(k *= 7);

						for (; i < k;) {

							// 0x1000000000000 is 2^48, 0x10000000000 is 2^40
							// 0x100000000 is 2^32, 0x1000000 is 2^24
							// 11111 11111111 11111111 11111111 11111111 11111111 11111111
							// 0 <= v < 9007199254740992
							v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
								(a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
								(a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

							if (v >= 9e15) {
								crypto.randomBytes(7).copy(a, i);
							} else {

								// 0 <= (v % 1e14) <= 99999999999999
								c.push(v % 1e14);
								i += 7;
							}
						}
						i = k / 7;
					} else {
						CRYPTO = false;
						throw Error
							(bignumberError + 'crypto unavailable');
					}
				}

				// Use Math.random.
				if (!CRYPTO) {

					for (; i < k;) {
						v = random53bitInt();
						if (v < 9e15) c[i++] = v % 1e14;
					}
				}

				k = c[--i];
				dp %= LOG_BASE;

				// Convert trailing digits to zeros according to dp.
				if (k && dp) {
					v = POWS_TEN[LOG_BASE - dp];
					c[i] = mathfloor(k / v) * v;
				}

				// Remove trailing elements which are zero.
				for (; c[i] === 0; c.pop(), i--);

				// Zero?
				if (i < 0) {
					c = [e = 0];
				} else {

					// Remove leading elements which are zero and adjust exponent accordingly.
					for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

					// Count the digits of the first element of c to determine leading zeros, and...
					for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

					// adjust the exponent accordingly.
					if (i < LOG_BASE) e -= LOG_BASE - i;
				}

				rand.e = e;
				rand.c = c;
				return rand;
			};
		})();


		/*
		 * Return a BigNumber whose value is the sum of the arguments.
		 *
		 * arguments {number|string|BigNumber}
		 */
		BigNumber.sum = function () {
			var i = 1,
				args = arguments,
				sum = new BigNumber(args[0]);
			for (; i < args.length;) sum = sum.plus(args[i++]);
			return sum;
		};


		// PRIVATE FUNCTIONS


		// Called by BigNumber and BigNumber.prototype.toString.
		convertBase = (function () {
			var decimal = '0123456789';

			/*
			 * Convert string of baseIn to an array of numbers of baseOut.
			 * Eg. toBaseOut('255', 10, 16) returns [15, 15].
			 * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
			 */
			function toBaseOut(str, baseIn, baseOut, alphabet) {
				var j,
					arr = [0],
					arrL,
					i = 0,
					len = str.length;

				for (; i < len;) {
					for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

					arr[0] += alphabet.indexOf(str.charAt(i++));

					for (j = 0; j < arr.length; j++) {

						if (arr[j] > baseOut - 1) {
							if (arr[j + 1] == null) arr[j + 1] = 0;
							arr[j + 1] += arr[j] / baseOut | 0;
							arr[j] %= baseOut;
						}
					}
				}

				return arr.reverse();
			}

			// Convert a numeric string of baseIn to a numeric string of baseOut.
			// If the caller is toString, we are converting from base 10 to baseOut.
			// If the caller is BigNumber, we are converting from baseIn to base 10.
			return function (str, baseIn, baseOut, sign, callerIsToString) {
				var alphabet, d, e, k, r, x, xc, y,
					i = str.indexOf('.'),
					dp = DECIMAL_PLACES,
					rm = ROUNDING_MODE;

				// Non-integer.
				if (i >= 0) {
					k = POW_PRECISION;

					// Unlimited precision.
					POW_PRECISION = 0;
					str = str.replace('.', '');
					y = new BigNumber(baseIn);
					x = y.pow(str.length - i);
					POW_PRECISION = k;

					// Convert str as if an integer, then restore the fraction part by dividing the
					// result by its base raised to a power.

					y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
						10, baseOut, decimal);
					y.e = y.c.length;
				}

				// Convert the number as integer.

				xc = toBaseOut(str, baseIn, baseOut, callerIsToString
					? (alphabet = ALPHABET, decimal)
					: (alphabet = decimal, ALPHABET));

				// xc now represents str as an integer and converted to baseOut. e is the exponent.
				e = k = xc.length;

				// Remove trailing zeros.
				for (; xc[--k] == 0; xc.pop());

				// Zero?
				if (!xc[0]) return alphabet.charAt(0);

				// Does str represent an integer? If so, no need for the division.
				if (i < 0) {
					--e;
				} else {
					x.c = xc;
					x.e = e;

					// The sign is needed for correct rounding.
					x.s = sign;
					x = div(x, y, dp, rm, baseOut);
					xc = x.c;
					r = x.r;
					e = x.e;
				}

				// xc now represents str converted to baseOut.

				// THe index of the rounding digit.
				d = e + dp + 1;

				// The rounding digit: the digit to the right of the digit that may be rounded up.
				i = xc[d];

				// Look at the rounding digits and mode to determine whether to round up.

				k = baseOut / 2;
				r = r || d < 0 || xc[d + 1] != null;

				r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
					: i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
						rm == (x.s < 0 ? 8 : 7));

				// If the index of the rounding digit is not greater than zero, or xc represents
				// zero, then the result of the base conversion is zero or, if rounding up, a value
				// such as 0.00001.
				if (d < 1 || !xc[0]) {

					// 1^-dp or 0
					str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
				} else {

					// Truncate xc to the required number of decimal places.
					xc.length = d;

					// Round up?
					if (r) {

						// Rounding up may mean the previous digit has to be rounded up and so on.
						for (--baseOut; ++xc[--d] > baseOut;) {
							xc[d] = 0;

							if (!d) {
								++e;
								xc = [1].concat(xc);
							}
						}
					}

					// Determine trailing zeros.
					for (k = xc.length; !xc[--k];);

					// E.g. [4, 11, 15] becomes 4bf.
					for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

					// Add leading zeros, decimal point and trailing zeros as required.
					str = toFixedPoint(str, e, alphabet.charAt(0));
				}

				// The caller will add the sign.
				return str;
			};
		})();


		// Perform division in the specified base. Called by div and convertBase.
		div = (function () {

			// Assume non-zero x and k.
			function multiply(x, k, base) {
				var m, temp, xlo, xhi,
					carry = 0,
					i = x.length,
					klo = k % SQRT_BASE,
					khi = k / SQRT_BASE | 0;

				for (x = x.slice(); i--;) {
					xlo = x[i] % SQRT_BASE;
					xhi = x[i] / SQRT_BASE | 0;
					m = khi * xlo + xhi * klo;
					temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
					carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
					x[i] = temp % base;
				}

				if (carry) x = [carry].concat(x);

				return x;
			}

			function compare(a, b, aL, bL) {
				var i, cmp;

				if (aL != bL) {
					cmp = aL > bL ? 1 : -1;
				} else {

					for (i = cmp = 0; i < aL; i++) {

						if (a[i] != b[i]) {
							cmp = a[i] > b[i] ? 1 : -1;
							break;
						}
					}
				}

				return cmp;
			}

			function subtract(a, b, aL, base) {
				var i = 0;

				// Subtract b from a.
				for (; aL--;) {
					a[aL] -= i;
					i = a[aL] < b[aL] ? 1 : 0;
					a[aL] = i * base + a[aL] - b[aL];
				}

				// Remove leading zeros.
				for (; !a[0] && a.length > 1; a.splice(0, 1));
			}

			// x: dividend, y: divisor.
			return function (x, y, dp, rm, base) {
				var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
					yL, yz,
					s = x.s == y.s ? 1 : -1,
					xc = x.c,
					yc = y.c;

				// Either NaN, Infinity or 0?
				if (!xc || !xc[0] || !yc || !yc[0]) {

					return new BigNumber(

						// Return NaN if either NaN, or both Infinity or 0.
						!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

							// Return Å}0 if x is Å}0 or y is Å}Infinity, or return Å}Infinity as y is Å}0.
							xc && xc[0] == 0 || !yc ? s * 0 : s / 0
					);
				}

				q = new BigNumber(s);
				qc = q.c = [];
				e = x.e - y.e;
				s = dp + e + 1;

				if (!base) {
					base = BASE;
					e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
					s = s / LOG_BASE | 0;
				}

				// Result exponent may be one less then the current value of e.
				// The coefficients of the BigNumbers from convertBase may have trailing zeros.
				for (i = 0; yc[i] == (xc[i] || 0); i++);

				if (yc[i] > (xc[i] || 0)) e--;

				if (s < 0) {
					qc.push(1);
					more = true;
				} else {
					xL = xc.length;
					yL = yc.length;
					i = 0;
					s += 2;

					// Normalise xc and yc so highest order digit of yc is >= base / 2.

					n = mathfloor(base / (yc[0] + 1));

					// Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
					// if (n > 1 || n++ == 1 && yc[0] < base / 2) {
					if (n > 1) {
						yc = multiply(yc, n, base);
						xc = multiply(xc, n, base);
						yL = yc.length;
						xL = xc.length;
					}

					xi = yL;
					rem = xc.slice(0, yL);
					remL = rem.length;

					// Add zeros to make remainder as long as divisor.
					for (; remL < yL; rem[remL++] = 0);
					yz = yc.slice();
					yz = [0].concat(yz);
					yc0 = yc[0];
					if (yc[1] >= base / 2) yc0++;
					// Not necessary, but to prevent trial digit n > base, when using base 3.
					// else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

					do {
						n = 0;

						// Compare divisor and remainder.
						cmp = compare(yc, rem, yL, remL);

						// If divisor < remainder.
						if (cmp < 0) {

							// Calculate trial digit, n.

							rem0 = rem[0];
							if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

							// n is how many times the divisor goes into the current remainder.
							n = mathfloor(rem0 / yc0);

							//  Algorithm:
							//  product = divisor multiplied by trial digit (n).
							//  Compare product and remainder.
							//  If product is greater than remainder:
							//    Subtract divisor from product, decrement trial digit.
							//  Subtract product from remainder.
							//  If product was less than remainder at the last compare:
							//    Compare new remainder and divisor.
							//    If remainder is greater than divisor:
							//      Subtract divisor from remainder, increment trial digit.

							if (n > 1) {

								// n may be > base only when base is 3.
								if (n >= base) n = base - 1;

								// product = divisor * trial digit.
								prod = multiply(yc, n, base);
								prodL = prod.length;
								remL = rem.length;

								// Compare product and remainder.
								// If product > remainder then trial digit n too high.
								// n is 1 too high about 5% of the time, and is not known to have
								// ever been more than 1 too high.
								while (compare(prod, rem, prodL, remL) == 1) {
									n--;

									// Subtract divisor from product.
									subtract(prod, yL < prodL ? yz : yc, prodL, base);
									prodL = prod.length;
									cmp = 1;
								}
							} else {

								// n is 0 or 1, cmp is -1.
								// If n is 0, there is no need to compare yc and rem again below,
								// so change cmp to 1 to avoid it.
								// If n is 1, leave cmp as -1, so yc and rem are compared again.
								if (n == 0) {

									// divisor < remainder, so n must be at least 1.
									cmp = n = 1;
								}

								// product = divisor
								prod = yc.slice();
								prodL = prod.length;
							}

							if (prodL < remL) prod = [0].concat(prod);

							// Subtract product from remainder.
							subtract(rem, prod, remL, base);
							remL = rem.length;

							// If product was < remainder.
							if (cmp == -1) {

								// Compare divisor and new remainder.
								// If divisor < new remainder, subtract divisor from remainder.
								// Trial digit n too low.
								// n is 1 too low about 5% of the time, and very rarely 2 too low.
								while (compare(yc, rem, yL, remL) < 1) {
									n++;

									// Subtract divisor from remainder.
									subtract(rem, yL < remL ? yz : yc, remL, base);
									remL = rem.length;
								}
							}
						} else if (cmp === 0) {
							n++;
							rem = [0];
						} // else cmp === 1 and n will be 0

						// Add the next digit, n, to the result array.
						qc[i++] = n;

						// Update the remainder.
						if (rem[0]) {
							rem[remL++] = xc[xi] || 0;
						} else {
							rem = [xc[xi]];
							remL = 1;
						}
					} while ((xi++ < xL || rem[0] != null) && s--);

					more = rem[0] != null;

					// Leading zero?
					if (!qc[0]) qc.splice(0, 1);
				}

				if (base == BASE) {

					// To calculate q.e, first get the number of digits of qc[0].
					for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

					round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

					// Caller is convertBase.
				} else {
					q.e = e;
					q.r = +more;
				}

				return q;
			};
		})();


		/*
		 * Return a string representing the value of BigNumber n in fixed-point or exponential
		 * notation rounded to the specified decimal places or significant digits.
		 *
		 * n: a BigNumber.
		 * i: the index of the last digit required (i.e. the digit that may be rounded up).
		 * rm: the rounding mode.
		 * id: 1 (toExponential) or 2 (toPrecision).
		 */
		function format(n, i, rm, id) {
			var c0, e, ne, len, str;

			if (rm == null) rm = ROUNDING_MODE;
			else intCheck(rm, 0, 8);

			if (!n.c) return n.toString();

			c0 = n.c[0];
			ne = n.e;

			if (i == null) {
				str = coeffToString(n.c);
				str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
					? toExponential(str, ne)
					: toFixedPoint(str, ne, '0');
			} else {
				n = round(new BigNumber(n), i, rm);

				// n.e may have changed if the value was rounded up.
				e = n.e;

				str = coeffToString(n.c);
				len = str.length;

				// toPrecision returns exponential notation if the number of significant digits
				// specified is less than the number of digits necessary to represent the integer
				// part of the value in fixed-point notation.

				// Exponential notation.
				if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

					// Append zeros?
					for (; len < i; str += '0', len++);
					str = toExponential(str, e);

					// Fixed-point notation.
				} else {
					i -= ne;
					str = toFixedPoint(str, e, '0');

					// Append zeros?
					if (e + 1 > len) {
						if (--i > 0) for (str += '.'; i--; str += '0');
					} else {
						i += e - len;
						if (i > 0) {
							if (e + 1 == len) str += '.';
							for (; i--; str += '0');
						}
					}
				}
			}

			return n.s < 0 && c0 ? '-' + str : str;
		}


		// Handle BigNumber.max and BigNumber.min.
		function maxOrMin(args, method) {
			var n,
				i = 1,
				m = new BigNumber(args[0]);

			for (; i < args.length; i++) {
				n = new BigNumber(args[i]);

				// If any number is NaN, return NaN.
				if (!n.s) {
					m = n;
					break;
				} else if (method.call(m, n)) {
					m = n;
				}
			}

			return m;
		}


		/*
		 * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
		 * Called by minus, plus and times.
		 */
		function normalise(n, c, e) {
			var i = 1,
				j = c.length;

			// Remove trailing zeros.
			for (; !c[--j]; c.pop());

			// Calculate the base 10 exponent. First get the number of digits of c[0].
			for (j = c[0]; j >= 10; j /= 10, i++);

			// Overflow?
			if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

				// Infinity.
				n.c = n.e = null;

				// Underflow?
			} else if (e < MIN_EXP) {

				// Zero.
				n.c = [n.e = 0];
			} else {
				n.e = e;
				n.c = c;
			}

			return n;
		}


		// Handle values that fail the validity test in BigNumber.
		parseNumeric = (function () {
			var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
				dotAfter = /^([^.]+)\.$/,
				dotBefore = /^\.([^.]+)$/,
				isInfinityOrNaN = /^-?(Infinity|NaN)$/,
				whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

			return function (x, str, isNum, b) {
				var base,
					s = isNum ? str : str.replace(whitespaceOrPlus, '');

				// No exception on Å}Infinity or NaN.
				if (isInfinityOrNaN.test(s)) {
					x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
				} else {
					if (!isNum) {

						// basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
						s = s.replace(basePrefix, function (m, p1, p2) {
							base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
							return !b || b == base ? p1 : m;
						});

						if (b) {
							base = b;

							// E.g. '1.' to '1', '.1' to '0.1'
							s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
						}

						if (str != s) return new BigNumber(s, base);
					}

					// '[BigNumber Error] Not a number: {n}'
					// '[BigNumber Error] Not a base {b} number: {n}'
					if (BigNumber.DEBUG) {
						throw Error
							(bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
					}

					// NaN
					x.s = null;
				}

				x.c = x.e = null;
			}
		})();


		/*
		 * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
		 * If r is truthy, it is known that there are more digits after the rounding digit.
		 */
		function round(x, sd, rm, r) {
			var d, i, j, k, n, ni, rd,
				xc = x.c,
				pows10 = POWS_TEN;

			// if x is not Infinity or NaN...
			if (xc) {

				// rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
				// n is a base 1e14 number, the value of the element of array x.c containing rd.
				// ni is the index of n within x.c.
				// d is the number of digits of n.
				// i is the index of rd within n including leading zeros.
				// j is the actual index of rd within n (if < 0, rd is a leading zero).
				out: {

					// Get the number of digits of the first element of xc.
					for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
					i = sd - d;

					// If the rounding digit is in the first element of xc...
					if (i < 0) {
						i += LOG_BASE;
						j = sd;
						n = xc[ni = 0];

						// Get the rounding digit at index j of n.
						rd = n / pows10[d - j - 1] % 10 | 0;
					} else {
						ni = mathceil((i + 1) / LOG_BASE);

						if (ni >= xc.length) {

							if (r) {

								// Needed by sqrt.
								for (; xc.length <= ni; xc.push(0));
								n = rd = 0;
								d = 1;
								i %= LOG_BASE;
								j = i - LOG_BASE + 1;
							} else {
								break out;
							}
						} else {
							n = k = xc[ni];

							// Get the number of digits of n.
							for (d = 1; k >= 10; k /= 10, d++);

							// Get the index of rd within n.
							i %= LOG_BASE;

							// Get the index of rd within n, adjusted for leading zeros.
							// The number of leading zeros of n is given by LOG_BASE - d.
							j = i - LOG_BASE + d;

							// Get the rounding digit at index j of n.
							rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
						}
					}

					r = r || sd < 0 ||

						// Are there any non-zero digits after the rounding digit?
						// The expression  n % pows10[d - j - 1]  returns all digits of n to the right
						// of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
						xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

					r = rm < 4
						? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
						: rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

							// Check whether the digit to the left of the rounding digit is odd.
							((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
							rm == (x.s < 0 ? 8 : 7));

					if (sd < 1 || !xc[0]) {
						xc.length = 0;

						if (r) {

							// Convert sd to decimal places.
							sd -= x.e + 1;

							// 1, 0.1, 0.01, 0.001, 0.0001 etc.
							xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
							x.e = -sd || 0;
						} else {

							// Zero.
							xc[0] = x.e = 0;
						}

						return x;
					}

					// Remove excess digits.
					if (i == 0) {
						xc.length = ni;
						k = 1;
						ni--;
					} else {
						xc.length = ni + 1;
						k = pows10[LOG_BASE - i];

						// E.g. 56700 becomes 56000 if 7 is the rounding digit.
						// j > 0 means i > number of leading zeros of n.
						xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
					}

					// Round up?
					if (r) {

						for (; ;) {

							// If the digit to be rounded up is in the first element of xc...
							if (ni == 0) {

								// i will be the length of xc[0] before k is added.
								for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
								j = xc[0] += k;
								for (k = 1; j >= 10; j /= 10, k++);

								// if i != k the length has increased.
								if (i != k) {
									x.e++;
									if (xc[0] == BASE) xc[0] = 1;
								}

								break;
							} else {
								xc[ni] += k;
								if (xc[ni] != BASE) break;
								xc[ni--] = 0;
								k = 1;
							}
						}
					}

					// Remove trailing zeros.
					for (i = xc.length; xc[--i] === 0; xc.pop());
				}

				// Overflow? Infinity.
				if (x.e > MAX_EXP) {
					x.c = x.e = null;

					// Underflow? Zero.
				} else if (x.e < MIN_EXP) {
					x.c = [x.e = 0];
				}
			}

			return x;
		}


		function valueOf(n) {
			var str,
				e = n.e;

			if (e === null) return n.toString();

			str = coeffToString(n.c);

			str = e <= TO_EXP_NEG || e >= TO_EXP_POS
				? toExponential(str, e)
				: toFixedPoint(str, e, '0');

			return n.s < 0 ? '-' + str : str;
		}


		// PROTOTYPE/INSTANCE METHODS


		/*
		 * Return a new BigNumber whose value is the absolute value of this BigNumber.
		 */
		P.absoluteValue = P.abs = function () {
			var x = new BigNumber(this);
			if (x.s < 0) x.s = 1;
			return x;
		};


		/*
		 * Return
		 *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
		 *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
		 *   0 if they have the same value,
		 *   or null if the value of either is NaN.
		 */
		P.comparedTo = function (y, b) {
			return compare(this, new BigNumber(y, b));
		};


		/*
		 * If dp is undefined or null or true or false, return the number of decimal places of the
		 * value of this BigNumber, or null if the value of this BigNumber is Å}Infinity or NaN.
		 *
		 * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
		 * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
		 * ROUNDING_MODE if rm is omitted.
		 *
		 * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		 */
		P.decimalPlaces = P.dp = function (dp, rm) {
			var c, n, v,
				x = this;

			if (dp != null) {
				intCheck(dp, 0, MAX);
				if (rm == null) rm = ROUNDING_MODE;
				else intCheck(rm, 0, 8);

				return round(new BigNumber(x), dp + x.e + 1, rm);
			}

			if (!(c = x.c)) return null;
			n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

			// Subtract the number of trailing zeros of the last number.
			if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
			if (n < 0) n = 0;

			return n;
		};


		/*
		 *  n / 0 = I
		 *  n / N = N
		 *  n / I = 0
		 *  0 / n = 0
		 *  0 / 0 = N
		 *  0 / N = N
		 *  0 / I = 0
		 *  N / n = N
		 *  N / 0 = N
		 *  N / N = N
		 *  N / I = N
		 *  I / n = I
		 *  I / 0 = I
		 *  I / N = N
		 *  I / I = N
		 *
		 * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
		 * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
		 */
		P.dividedBy = P.div = function (y, b) {
			return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
		};


		/*
		 * Return a new BigNumber whose value is the integer part of dividing the value of this
		 * BigNumber by the value of BigNumber(y, b).
		 */
		P.dividedToIntegerBy = P.idiv = function (y, b) {
			return div(this, new BigNumber(y, b), 0, 1);
		};


		/*
		 * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
		 *
		 * If m is present, return the result modulo m.
		 * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
		 * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
		 *
		 * The modular power operation works efficiently when x, n, and m are integers, otherwise it
		 * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
		 *
		 * n {number|string|BigNumber} The exponent. An integer.
		 * [m] {number|string|BigNumber} The modulus.
		 *
		 * '[BigNumber Error] Exponent not an integer: {n}'
		 */
		P.exponentiatedBy = P.pow = function (n, m) {
			var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
				x = this;

			n = new BigNumber(n);

			// Allow NaN and Å}Infinity, but not other non-integers.
			if (n.c && !n.isInteger()) {
				throw Error
					(bignumberError + 'Exponent not an integer: ' + valueOf(n));
			}

			if (m != null) m = new BigNumber(m);

			// Exponent of MAX_SAFE_INTEGER is 15.
			nIsBig = n.e > 14;

			// If x is NaN, Å}Infinity, Å}0 or Å}1, or n is Å}Infinity, NaN or Å}0.
			if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

				// The sign of the result of pow when x is negative depends on the evenness of n.
				// If +n overflows to Å}Infinity, the evenness of n would be not be known.
				y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
				return m ? y.mod(m) : y;
			}

			nIsNeg = n.s < 0;

			if (m) {

				// x % m returns NaN if abs(m) is zero, or m is NaN.
				if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

				isModExp = !nIsNeg && x.isInteger() && m.isInteger();

				if (isModExp) x = x.mod(m);

				// Overflow to Å}Infinity: >=2**1e10 or >=1.0000024**1e15.
				// Underflow to Å}0: <=0.79**1e10 or <=0.9999975**1e15.
			} else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
				// [1, 240000000]
				? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
				// [80000000000000]  [99999750000000]
				: x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

				// If x is negative and n is odd, k = -0, else k = 0.
				k = x.s < 0 && isOdd(n) ? -0 : 0;

				// If x >= 1, k = Å}Infinity.
				if (x.e > -1) k = 1 / k;

				// If n is negative return Å}0, else return Å}Infinity.
				return new BigNumber(nIsNeg ? 1 / k : k);

			} else if (POW_PRECISION) {

				// Truncating each coefficient array to a length of k after each multiplication
				// equates to truncating significant digits to POW_PRECISION + [28, 41],
				// i.e. there will be a minimum of 28 guard digits retained.
				k = mathceil(POW_PRECISION / LOG_BASE + 2);
			}

			if (nIsBig) {
				half = new BigNumber(0.5);
				if (nIsNeg) n.s = 1;
				nIsOdd = isOdd(n);
			} else {
				i = Math.abs(+valueOf(n));
				nIsOdd = i % 2;
			}

			y = new BigNumber(ONE);

			// Performs 54 loop iterations for n of 9007199254740991.
			for (; ;) {

				if (nIsOdd) {
					y = y.times(x);
					if (!y.c) break;

					if (k) {
						if (y.c.length > k) y.c.length = k;
					} else if (isModExp) {
						y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
					}
				}

				if (i) {
					i = mathfloor(i / 2);
					if (i === 0) break;
					nIsOdd = i % 2;
				} else {
					n = n.times(half);
					round(n, n.e + 1, 1);

					if (n.e > 14) {
						nIsOdd = isOdd(n);
					} else {
						i = +valueOf(n);
						if (i === 0) break;
						nIsOdd = i % 2;
					}
				}

				x = x.times(x);

				if (k) {
					if (x.c && x.c.length > k) x.c.length = k;
				} else if (isModExp) {
					x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
				}
			}

			if (isModExp) return y;
			if (nIsNeg) y = ONE.div(y);

			return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
		};


		/*
		 * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
		 * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
		 *
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
		 */
		P.integerValue = function (rm) {
			var n = new BigNumber(this);
			if (rm == null) rm = ROUNDING_MODE;
			else intCheck(rm, 0, 8);
			return round(n, n.e + 1, rm);
		};


		/*
		 * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
		 * otherwise return false.
		 */
		P.isEqualTo = P.eq = function (y, b) {
			return compare(this, new BigNumber(y, b)) === 0;
		};


		/*
		 * Return true if the value of this BigNumber is a finite number, otherwise return false.
		 */
		P.isFinite = function () {
			return !!this.c;
		};


		/*
		 * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
		 * otherwise return false.
		 */
		P.isGreaterThan = P.gt = function (y, b) {
			return compare(this, new BigNumber(y, b)) > 0;
		};


		/*
		 * Return true if the value of this BigNumber is greater than or equal to the value of
		 * BigNumber(y, b), otherwise return false.
		 */
		P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
			return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

		};


		/*
		 * Return true if the value of this BigNumber is an integer, otherwise return false.
		 */
		P.isInteger = function () {
			return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
		};


		/*
		 * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
		 * otherwise return false.
		 */
		P.isLessThan = P.lt = function (y, b) {
			return compare(this, new BigNumber(y, b)) < 0;
		};


		/*
		 * Return true if the value of this BigNumber is less than or equal to the value of
		 * BigNumber(y, b), otherwise return false.
		 */
		P.isLessThanOrEqualTo = P.lte = function (y, b) {
			return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
		};


		/*
		 * Return true if the value of this BigNumber is NaN, otherwise return false.
		 */
		P.isNaN = function () {
			return !this.s;
		};


		/*
		 * Return true if the value of this BigNumber is negative, otherwise return false.
		 */
		P.isNegative = function () {
			return this.s < 0;
		};


		/*
		 * Return true if the value of this BigNumber is positive, otherwise return false.
		 */
		P.isPositive = function () {
			return this.s > 0;
		};


		/*
		 * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
		 */
		P.isZero = function () {
			return !!this.c && this.c[0] == 0;
		};


		/*
		 *  n - 0 = n
		 *  n - N = N
		 *  n - I = -I
		 *  0 - n = -n
		 *  0 - 0 = 0
		 *  0 - N = N
		 *  0 - I = -I
		 *  N - n = N
		 *  N - 0 = N
		 *  N - N = N
		 *  N - I = N
		 *  I - n = I
		 *  I - 0 = I
		 *  I - N = N
		 *  I - I = N
		 *
		 * Return a new BigNumber whose value is the value of this BigNumber minus the value of
		 * BigNumber(y, b).
		 */
		P.minus = function (y, b) {
			var i, j, t, xLTy,
				x = this,
				a = x.s;

			y = new BigNumber(y, b);
			b = y.s;

			// Either NaN?
			if (!a || !b) return new BigNumber(NaN);

			// Signs differ?
			if (a != b) {
				y.s = -b;
				return x.plus(y);
			}

			var xe = x.e / LOG_BASE,
				ye = y.e / LOG_BASE,
				xc = x.c,
				yc = y.c;

			if (!xe || !ye) {

				// Either Infinity?
				if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

				// Either zero?
				if (!xc[0] || !yc[0]) {

					// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
					return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

						// IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
						ROUNDING_MODE == 3 ? -0 : 0);
				}
			}

			xe = bitFloor(xe);
			ye = bitFloor(ye);
			xc = xc.slice();

			// Determine which is the bigger number.
			if (a = xe - ye) {

				if (xLTy = a < 0) {
					a = -a;
					t = xc;
				} else {
					ye = xe;
					t = yc;
				}

				t.reverse();

				// Prepend zeros to equalise exponents.
				for (b = a; b--; t.push(0));
				t.reverse();
			} else {

				// Exponents equal. Check digit by digit.
				j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

				for (a = b = 0; b < j; b++) {

					if (xc[b] != yc[b]) {
						xLTy = xc[b] < yc[b];
						break;
					}
				}
			}

			// x < y? Point xc to the array of the bigger number.
			if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

			b = (j = yc.length) - (i = xc.length);

			// Append zeros to xc if shorter.
			// No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
			if (b > 0) for (; b--; xc[i++] = 0);
			b = BASE - 1;

			// Subtract yc from xc.
			for (; j > a;) {

				if (xc[--j] < yc[j]) {
					for (i = j; i && !xc[--i]; xc[i] = b);
					--xc[i];
					xc[j] += BASE;
				}

				xc[j] -= yc[j];
			}

			// Remove leading zeros and adjust exponent accordingly.
			for (; xc[0] == 0; xc.splice(0, 1), --ye);

			// Zero?
			if (!xc[0]) {

				// Following IEEE 754 (2008) 6.3,
				// n - n = +0  but  n - n = -0  when rounding towards -Infinity.
				y.s = ROUNDING_MODE == 3 ? -1 : 1;
				y.c = [y.e = 0];
				return y;
			}

			// No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
			// for finite x and y.
			return normalise(y, xc, ye);
		};


		/*
		 *   n % 0 =  N
		 *   n % N =  N
		 *   n % I =  n
		 *   0 % n =  0
		 *  -0 % n = -0
		 *   0 % 0 =  N
		 *   0 % N =  N
		 *   0 % I =  0
		 *   N % n =  N
		 *   N % 0 =  N
		 *   N % N =  N
		 *   N % I =  N
		 *   I % n =  N
		 *   I % 0 =  N
		 *   I % N =  N
		 *   I % I =  N
		 *
		 * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
		 * BigNumber(y, b). The result depends on the value of MODULO_MODE.
		 */
		P.modulo = P.mod = function (y, b) {
			var q, s,
				x = this;

			y = new BigNumber(y, b);

			// Return NaN if x is Infinity or NaN, or y is NaN or zero.
			if (!x.c || !y.s || y.c && !y.c[0]) {
				return new BigNumber(NaN);

				// Return x if y is Infinity or x is zero.
			} else if (!y.c || x.c && !x.c[0]) {
				return new BigNumber(x);
			}

			if (MODULO_MODE == 9) {

				// Euclidian division: q = sign(y) * floor(x / abs(y))
				// r = x - qy    where  0 <= r < abs(y)
				s = y.s;
				y.s = 1;
				q = div(x, y, 0, 3);
				y.s = s;
				q.s *= s;
			} else {
				q = div(x, y, 0, MODULO_MODE);
			}

			y = x.minus(q.times(y));

			// To match JavaScript %, ensure sign of zero is sign of dividend.
			if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

			return y;
		};


		/*
		 *  n * 0 = 0
		 *  n * N = N
		 *  n * I = I
		 *  0 * n = 0
		 *  0 * 0 = 0
		 *  0 * N = N
		 *  0 * I = N
		 *  N * n = N
		 *  N * 0 = N
		 *  N * N = N
		 *  N * I = N
		 *  I * n = I
		 *  I * 0 = N
		 *  I * N = N
		 *  I * I = I
		 *
		 * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
		 * of BigNumber(y, b).
		 */
		P.multipliedBy = P.times = function (y, b) {
			var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
				base, sqrtBase,
				x = this,
				xc = x.c,
				yc = (y = new BigNumber(y, b)).c;

			// Either NaN, Å}Infinity or Å}0?
			if (!xc || !yc || !xc[0] || !yc[0]) {

				// Return NaN if either is NaN, or one is 0 and the other is Infinity.
				if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
					y.c = y.e = y.s = null;
				} else {
					y.s *= x.s;

					// Return Å}Infinity if either is Å}Infinity.
					if (!xc || !yc) {
						y.c = y.e = null;

						// Return Å}0 if either is Å}0.
					} else {
						y.c = [0];
						y.e = 0;
					}
				}

				return y;
			}

			e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
			y.s *= x.s;
			xcL = xc.length;
			ycL = yc.length;

			// Ensure xc points to longer array and xcL to its length.
			if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

			// Initialise the result array with zeros.
			for (i = xcL + ycL, zc = []; i--; zc.push(0));

			base = BASE;
			sqrtBase = SQRT_BASE;

			for (i = ycL; --i >= 0;) {
				c = 0;
				ylo = yc[i] % sqrtBase;
				yhi = yc[i] / sqrtBase | 0;

				for (k = xcL, j = i + k; j > i;) {
					xlo = xc[--k] % sqrtBase;
					xhi = xc[k] / sqrtBase | 0;
					m = yhi * xlo + xhi * ylo;
					xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
					c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
					zc[j--] = xlo % base;
				}

				zc[j] = c;
			}

			if (c) {
				++e;
			} else {
				zc.splice(0, 1);
			}

			return normalise(y, zc, e);
		};


		/*
		 * Return a new BigNumber whose value is the value of this BigNumber negated,
		 * i.e. multiplied by -1.
		 */
		P.negated = function () {
			var x = new BigNumber(this);
			x.s = -x.s || null;
			return x;
		};


		/*
		 *  n + 0 = n
		 *  n + N = N
		 *  n + I = I
		 *  0 + n = n
		 *  0 + 0 = 0
		 *  0 + N = N
		 *  0 + I = I
		 *  N + n = N
		 *  N + 0 = N
		 *  N + N = N
		 *  N + I = N
		 *  I + n = I
		 *  I + 0 = I
		 *  I + N = N
		 *  I + I = I
		 *
		 * Return a new BigNumber whose value is the value of this BigNumber plus the value of
		 * BigNumber(y, b).
		 */
		P.plus = function (y, b) {
			var t,
				x = this,
				a = x.s;

			y = new BigNumber(y, b);
			b = y.s;

			// Either NaN?
			if (!a || !b) return new BigNumber(NaN);

			// Signs differ?
			if (a != b) {
				y.s = -b;
				return x.minus(y);
			}

			var xe = x.e / LOG_BASE,
				ye = y.e / LOG_BASE,
				xc = x.c,
				yc = y.c;

			if (!xe || !ye) {

				// Return Å}Infinity if either Å}Infinity.
				if (!xc || !yc) return new BigNumber(a / 0);

				// Either zero?
				// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
				if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
			}

			xe = bitFloor(xe);
			ye = bitFloor(ye);
			xc = xc.slice();

			// Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
			if (a = xe - ye) {
				if (a > 0) {
					ye = xe;
					t = yc;
				} else {
					a = -a;
					t = xc;
				}

				t.reverse();
				for (; a--; t.push(0));
				t.reverse();
			}

			a = xc.length;
			b = yc.length;

			// Point xc to the longer array, and b to the shorter length.
			if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

			// Only start adding at yc.length - 1 as the further digits of xc can be ignored.
			for (a = 0; b;) {
				a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
				xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
			}

			if (a) {
				xc = [a].concat(xc);
				++ye;
			}

			// No need to check for zero, as +x + +y != 0 && -x + -y != 0
			// ye = MAX_EXP + 1 possible
			return normalise(y, xc, ye);
		};


		/*
		 * If sd is undefined or null or true or false, return the number of significant digits of
		 * the value of this BigNumber, or null if the value of this BigNumber is Å}Infinity or NaN.
		 * If sd is true include integer-part trailing zeros in the count.
		 *
		 * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
		 * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
		 * ROUNDING_MODE if rm is omitted.
		 *
		 * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
		 *                     boolean: whether to count integer-part trailing zeros: true or false.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
		 */
		P.precision = P.sd = function (sd, rm) {
			var c, n, v,
				x = this;

			if (sd != null && sd !== !!sd) {
				intCheck(sd, 1, MAX);
				if (rm == null) rm = ROUNDING_MODE;
				else intCheck(rm, 0, 8);

				return round(new BigNumber(x), sd, rm);
			}

			if (!(c = x.c)) return null;
			v = c.length - 1;
			n = v * LOG_BASE + 1;

			if (v = c[v]) {

				// Subtract the number of trailing zeros of the last element.
				for (; v % 10 == 0; v /= 10, n--);

				// Add the number of digits of the first element.
				for (v = c[0]; v >= 10; v /= 10, n++);
			}

			if (sd && x.e + 1 > n) n = x.e + 1;

			return n;
		};


		/*
		 * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
		 * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
		 *
		 * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
		 */
		P.shiftedBy = function (k) {
			intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
			return this.times('1e' + k);
		};


		/*
		 *  sqrt(-n) =  N
		 *  sqrt(N) =  N
		 *  sqrt(-I) =  N
		 *  sqrt(I) =  I
		 *  sqrt(0) =  0
		 *  sqrt(-0) = -0
		 *
		 * Return a new BigNumber whose value is the square root of the value of this BigNumber,
		 * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
		 */
		P.squareRoot = P.sqrt = function () {
			var m, n, r, rep, t,
				x = this,
				c = x.c,
				s = x.s,
				e = x.e,
				dp = DECIMAL_PLACES + 4,
				half = new BigNumber('0.5');

			// Negative/NaN/Infinity/zero?
			if (s !== 1 || !c || !c[0]) {
				return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
			}

			// Initial estimate.
			s = Math.sqrt(+valueOf(x));

			// Math.sqrt underflow/overflow?
			// Pass x to Math.sqrt as integer, then adjust the exponent of the result.
			if (s == 0 || s == 1 / 0) {
				n = coeffToString(c);
				if ((n.length + e) % 2 == 0) n += '0';
				s = Math.sqrt(+n);
				e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

				if (s == 1 / 0) {
					n = '5e' + e;
				} else {
					n = s.toExponential();
					n = n.slice(0, n.indexOf('e') + 1) + e;
				}

				r = new BigNumber(n);
			} else {
				r = new BigNumber(s + '');
			}

			// Check for zero.
			// r could be zero if MIN_EXP is changed after the this value was created.
			// This would cause a division by zero (x/t) and hence Infinity below, which would cause
			// coeffToString to throw.
			if (r.c[0]) {
				e = r.e;
				s = e + dp;
				if (s < 3) s = 0;

				// Newton-Raphson iteration.
				for (; ;) {
					t = r;
					r = half.times(t.plus(div(x, t, dp, 1)));

					if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

						// The exponent of r may here be one less than the final result exponent,
						// e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
						// are indexed correctly.
						if (r.e < e) --s;
						n = n.slice(s - 3, s + 1);

						// The 4th rounding digit may be in error by -1 so if the 4 rounding digits
						// are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
						// iteration.
						if (n == '9999' || !rep && n == '4999') {

							// On the first iteration only, check to see if rounding up gives the
							// exact result as the nines may infinitely repeat.
							if (!rep) {
								round(t, t.e + DECIMAL_PLACES + 2, 0);

								if (t.times(t).eq(x)) {
									r = t;
									break;
								}
							}

							dp += 4;
							s += 4;
							rep = 1;
						} else {

							// If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
							// result. If not, then there are further digits and m will be truthy.
							if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

								// Truncate to the first rounding digit.
								round(r, r.e + DECIMAL_PLACES + 2, 1);
								m = !r.times(r).eq(x);
							}

							break;
						}
					}
				}
			}

			return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
		};


		/*
		 * Return a string representing the value of this BigNumber in exponential notation and
		 * rounded using ROUNDING_MODE to dp fixed decimal places.
		 *
		 * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		 */
		P.toExponential = function (dp, rm) {
			if (dp != null) {
				intCheck(dp, 0, MAX);
				dp++;
			}
			return format(this, dp, rm, 1);
		};


		/*
		 * Return a string representing the value of this BigNumber in fixed-point notation rounding
		 * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
		 *
		 * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
		 * but e.g. (-0.00001).toFixed(0) is '-0'.
		 *
		 * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		 */
		P.toFixed = function (dp, rm) {
			if (dp != null) {
				intCheck(dp, 0, MAX);
				dp = dp + this.e + 1;
			}
			return format(this, dp, rm);
		};


		/*
		 * Return a string representing the value of this BigNumber in fixed-point notation rounded
		 * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
		 * of the format or FORMAT object (see BigNumber.set).
		 *
		 * The formatting object may contain some or all of the properties shown below.
		 *
		 * FORMAT = {
		 *   prefix: '',
		 *   groupSize: 3,
		 *   secondaryGroupSize: 0,
		 *   groupSeparator: ',',
		 *   decimalSeparator: '.',
		 *   fractionGroupSize: 0,
		 *   fractionGroupSeparator: '\xA0',      // non-breaking space
		 *   suffix: ''
		 * };
		 *
		 * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 * [format] {object} Formatting options. See FORMAT pbject above.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		 * '[BigNumber Error] Argument not an object: {format}'
		 */
		P.toFormat = function (dp, rm, format) {
			var str,
				x = this;

			if (format == null) {
				if (dp != null && rm && typeof rm == 'object') {
					format = rm;
					rm = null;
				} else if (dp && typeof dp == 'object') {
					format = dp;
					dp = rm = null;
				} else {
					format = FORMAT;
				}
			} else if (typeof format != 'object') {
				throw Error
					(bignumberError + 'Argument not an object: ' + format);
			}

			str = x.toFixed(dp, rm);

			if (x.c) {
				var i,
					arr = str.split('.'),
					g1 = +format.groupSize,
					g2 = +format.secondaryGroupSize,
					groupSeparator = format.groupSeparator || '',
					intPart = arr[0],
					fractionPart = arr[1],
					isNeg = x.s < 0,
					intDigits = isNeg ? intPart.slice(1) : intPart,
					len = intDigits.length;

				if (g2) i = g1, g1 = g2, g2 = i, len -= i;

				if (g1 > 0 && len > 0) {
					i = len % g1 || g1;
					intPart = intDigits.substr(0, i);
					for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
					if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
					if (isNeg) intPart = '-' + intPart;
				}

				str = fractionPart
					? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
						? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
							'$&' + (format.fractionGroupSeparator || ''))
						: fractionPart)
					: intPart;
			}

			return (format.prefix || '') + str + (format.suffix || '');
		};


		/*
		 * Return an array of two BigNumbers representing the value of this BigNumber as a simple
		 * fraction with an integer numerator and an integer denominator.
		 * The denominator will be a positive non-zero value less than or equal to the specified
		 * maximum denominator. If a maximum denominator is not specified, the denominator will be
		 * the lowest value necessary to represent the number exactly.
		 *
		 * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
		 *
		 * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
		 */
		P.toFraction = function (md) {
			var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
				x = this,
				xc = x.c;

			if (md != null) {
				n = new BigNumber(md);

				// Throw if md is less than one or is not an integer, unless it is Infinity.
				if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
					throw Error
						(bignumberError + 'Argument ' +
							(n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
				}
			}

			if (!xc) return new BigNumber(x);

			d = new BigNumber(ONE);
			n1 = d0 = new BigNumber(ONE);
			d1 = n0 = new BigNumber(ONE);
			s = coeffToString(xc);

			// Determine initial denominator.
			// d is a power of 10 and the minimum max denominator that specifies the value exactly.
			e = d.e = s.length - x.e - 1;
			d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
			md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

			exp = MAX_EXP;
			MAX_EXP = 1 / 0;
			n = new BigNumber(s);

			// n0 = d1 = 0
			n0.c[0] = 0;

			for (; ;) {
				q = div(n, d, 0, 1);
				d2 = d0.plus(q.times(d1));
				if (d2.comparedTo(md) == 1) break;
				d0 = d1;
				d1 = d2;
				n1 = n0.plus(q.times(d2 = n1));
				n0 = d2;
				d = n.minus(q.times(d2 = d));
				n = d2;
			}

			d2 = div(md.minus(d0), d1, 0, 1);
			n0 = n0.plus(d2.times(n1));
			d0 = d0.plus(d2.times(d1));
			n0.s = n1.s = x.s;
			e = e * 2;

			// Determine which fraction is closer to x, n0/d0 or n1/d1
			r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
				div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

			MAX_EXP = exp;

			return r;
		};


		/*
		 * Return the value of this BigNumber converted to a number primitive.
		 */
		P.toNumber = function () {
			return +valueOf(this);
		};


		/*
		 * Return a string representing the value of this BigNumber rounded to sd significant digits
		 * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
		 * necessary to represent the integer part of the value in fixed-point notation, then use
		 * exponential notation.
		 *
		 * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
		 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		 *
		 * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
		 */
		P.toPrecision = function (sd, rm) {
			if (sd != null) intCheck(sd, 1, MAX);
			return format(this, sd, rm, 2);
		};


		/*
		 * Return a string representing the value of this BigNumber in base b, or base 10 if b is
		 * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
		 * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
		 * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
		 * TO_EXP_NEG, return exponential notation.
		 *
		 * [b] {number} Integer, 2 to ALPHABET.length inclusive.
		 *
		 * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
		 */
		P.toString = function (b) {
			var str,
				n = this,
				s = n.s,
				e = n.e;

			// Infinity or NaN?
			if (e === null) {
				if (s) {
					str = 'Infinity';
					if (s < 0) str = '-' + str;
				} else {
					str = 'NaN';
				}
			} else {
				if (b == null) {
					str = e <= TO_EXP_NEG || e >= TO_EXP_POS
						? toExponential(coeffToString(n.c), e)
						: toFixedPoint(coeffToString(n.c), e, '0');
				} else if (b === 10) {
					n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
					str = toFixedPoint(coeffToString(n.c), n.e, '0');
				} else {
					intCheck(b, 2, ALPHABET.length, 'Base');
					str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
				}

				if (s < 0 && n.c[0]) str = '-' + str;
			}

			return str;
		};


		/*
		 * Return as toString, but do not accept a base argument, and include the minus sign for
		 * negative zero.
		 */
		P.valueOf = P.toJSON = function () {
			return valueOf(this);
		};


		P._isBigNumber = true;

		if (configObject != null) BigNumber.set(configObject);

		return BigNumber;
	}


	// PRIVATE HELPER FUNCTIONS

	// These functions don't need access to variables,
	// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


	function bitFloor(n) {
		var i = n | 0;
		return n > 0 || n === i ? i : i - 1;
	}


	// Return a coefficient array as a string of base 10 digits.
	function coeffToString(a) {
		var s, z,
			i = 1,
			j = a.length,
			r = a[0] + '';

		for (; i < j;) {
			s = a[i++] + '';
			z = LOG_BASE - s.length;
			for (; z--; s = '0' + s);
			r += s;
		}

		// Determine trailing zeros.
		for (j = r.length; r.charCodeAt(--j) === 48;);

		return r.slice(0, j + 1 || 1);
	}


	// Compare the value of BigNumbers x and y.
	function compare(x, y) {
		var a, b,
			xc = x.c,
			yc = y.c,
			i = x.s,
			j = y.s,
			k = x.e,
			l = y.e;

		// Either NaN?
		if (!i || !j) return null;

		a = xc && !xc[0];
		b = yc && !yc[0];

		// Either zero?
		if (a || b) return a ? b ? 0 : -j : i;

		// Signs differ?
		if (i != j) return i;

		a = i < 0;
		b = k == l;

		// Either Infinity?
		if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

		// Compare exponents.
		if (!b) return k > l ^ a ? 1 : -1;

		j = (k = xc.length) < (l = yc.length) ? k : l;

		// Compare digit by digit.
		for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

		// Compare lengths.
		return k == l ? 0 : k > l ^ a ? 1 : -1;
	}


	/*
	 * Check that n is a primitive number, an integer, and in range, otherwise throw.
	 */
	function intCheck(n, min, max, name) {
		if (n < min || n > max || n !== mathfloor(n)) {
			throw Error
				(bignumberError + (name || 'Argument') + (typeof n == 'number'
					? n < min || n > max ? ' out of range: ' : ' not an integer: '
					: ' not a primitive number: ') + String(n));
		}
	}


	// Assumes finite n.
	function isOdd(n) {
		var k = n.c.length - 1;
		return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
	}


	function toExponential(str, e) {
		return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
			(e < 0 ? 'e' : 'e+') + e;
	}


	function toFixedPoint(str, e, z) {
		var len, zs;

		// Negative exponent?
		if (e < 0) {

			// Prepend zeros.
			for (zs = z + '.'; ++e; zs += z);
			str = zs + str;

			// Positive exponent
		} else {
			len = str.length;

			// Append zeros.
			if (++e > len) {
				for (zs = z, e -= len; --e; zs += z);
				str += zs;
			} else if (e < len) {
				str = str.slice(0, e) + '.' + str.slice(e);
			}
		}

		return str;
	}


	// EXPORT


	BigNumber = clone();
	BigNumber['default'] = BigNumber.BigNumber = BigNumber;

	// AMD.
	if (typeof define == 'function' && define.amd) {
		define(function () { return BigNumber; });

		// Node.js and other environments that support module.exports.
	} else if (typeof module != 'undefined' && module.exports) {
		module.exports = BigNumber;

		// Browser.
	} else {
		if (!globalObject) {
			globalObject = typeof self != 'undefined' && self ? self : window;
		}

		globalObject.BigNumber = BigNumber;
	}
})(this);

/**
 * Push
 * =======
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @preserve
 */

(function (global, factory) {

    'use strict';

    /* Use AMD */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return new (factory(global, global.document))();
        });
    }
    /* Use CommonJS */
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = new (factory(global, global.document))();
    }
    /* Use Browser */
    else {
        global.Push = new (factory(global, global.document))();
    }

})(typeof window !== 'undefined' ? window : this, function (w, d) {

    var Push = function () {

        /**********************
            Local Variables
        /**********************/

        var
        self = this,
        isUndefined   = function (obj) { return obj === undefined; },
        isString   = function (obj) { return String(obj) === obj },
        isFunction = function (obj) { return obj && {}.toString.call(obj) === '[object Function]'; },

        /* ID to use for new notifications */
        currentId = 0,

        /* Message to show if there is no suport to Push Notifications */
        incompatibilityErrorMessage = 'PushError: push.js is incompatible with browser.',

        /* Whether Push has permission to notify */
        hasPermission = false,

        /* Map of open notifications */
        notifications = {},

        /* Testing variable for the last service worker path used */
        lastWorkerPath = null,

        /**********************
            Helper Functions
        /**********************/

        /**
         * Closes a notification
         * @param {Notification} notification
         * @return {Boolean} boolean denoting whether the operation was successful
         */
        closeNotification = function (id) {
            var errored = false,
                notification = notifications[id];

            if (typeof notification !== 'undefined') {
                /* Safari 6+, Chrome 23+ */
                if (notification.close) {
                    notification.close();
                /* Legacy webkit browsers */
                } else if (notification.cancel) {
                    notification.cancel();
                /* IE9+ */
                } else if (w.external && w.external.msIsSiteMode) {
                    w.external.msSiteModeClearIconOverlay();
                } else {
                    errored = true;
                    throw new Error('Unable to close notification: unknown interface');
                }

                if (!errored) {
                    return removeNotification(id);
                }
            }

            return false;
        },

        /**
         * Adds a notification to the global dictionary of notifications
         * @param {Notification} notification
         * @return {Integer} Dictionary key of the notification
         */
        addNotification = function (notification) {
            var id = currentId;
            notifications[id] = notification;
            currentId++;
            return id;
        },

        /**
         * Removes a notification with the given ID
         * @param  {Integer} id - Dictionary key/ID of the notification to remove
         * @return {Boolean} boolean denoting success
         */
        removeNotification = function (id) {
            var dict = {},
                success = false,
                key;
            for (key in notifications) {
                if (notifications.hasOwnProperty(key)) {
                    if (key != id) {
                        dict[key] = notifications[key];
                    } else {
                        // We're successful if we omit the given ID from the new array
                        success = true;
                    }
                }
            }
            // Overwrite the current notifications dictionary with the filtered one
            notifications = dict;
            return success;
        },

        /**
         * Callback function for the 'create' method
         * @return {void}
         */
        createCallback = function (title, options) {
            var notification,
                wrapper,
                id,
                onClose;

            /* Set empty settings if none are specified */
            options = options || {};

            /* Set the last service worker path for testing */
            self.lastWorkerPath = options.serviceWorker || 'sw.js';

            /* Safari 6+, Firefox 22+, Chrome 22+, Opera 25+ */
            if (w.Notification) {

                try {
                    notification =  new w.Notification(
                        title,
                        {
                            icon: (isString(options.icon) || isUndefined(options.icon)) ? options.icon : options.icon.x32,
                            body: options.body,
                            tag: options.tag,
                            requireInteraction: options.requireInteraction
                        }
                    );
                } catch (e) {
                    if (w.navigator) {
                        w.navigator.serviceWorker.register(options.serviceWorker || 'sw.js');
                        w.navigator.serviceWorker.ready.then(function(registration) {
                            registration.showNotification(
                                title,
                                {
                                    body: options.body,
                                    vibrate: options.vibrate,
                                    tag: options.tag,
                                    requireInteraction: options.requireInteraction
                                }
                            );
                        });
                    }
                }

            /* Legacy webkit browsers */
            } else if (w.webkitNotifications) {

                notification = w.webkitNotifications.createNotification(
                    options.icon,
                    title,
                    options.body
                );

                notification.show();

            /* Firefox Mobile */
            } else if (navigator.mozNotification) {

                notification = navigator.mozNotification.createNotification(
                    title,
                    options.body,
                    options.icon
                );

                notification.show();

            /* IE9+ */
            } else if (w.external && w.external.msIsSiteMode()) {

                //Clear any previous notifications
                w.external.msSiteModeClearIconOverlay();
                w.external.msSiteModeSetIconOverlay(
                    ((isString(options.icon) || isUndefined(options.icon))
                    ? options.icon
                    : options.icon.x16), title
                );
                w.external.msSiteModeActivate();

                notification = {};
            } else {
                throw new Error('Unable to create notification: unknown interface');
            }

            /* Add it to the global array */
            id = addNotification(notification);

            /* Wrapper used to get/close notification later on */
            wrapper = {
                get: function () {
                    return notification;
                },

                close: function () {
                    closeNotification(id);
                }
            };

            /* Autoclose timeout */
            if (options.timeout) {
                setTimeout(function () {
                    wrapper.close();
                }, options.timeout);
            }

            /* Notification callbacks */
            if (isFunction(options.onShow))
                notification.addEventListener('show', options.onShow);

            if (isFunction(options.onError))
                notification.addEventListener('error', options.onError);

            if (isFunction(options.onClick))
                notification.addEventListener('click', options.onClick);

            onClose = function () {
                /* A bit redundant, but covers the cases when close() isn't explicitly called */
                removeNotification(id);
                if (isFunction(options.onClose)) {
                    options.onClose.call(this);
                }
            }

            notification.addEventListener('close', onClose);
            notification.addEventListener('cancel', onClose);

            /* Return the wrapper so the user can call close() */
            return wrapper;
        },

        /**
         * Permission types
         * @enum {String}
         */
        Permission = {
            DEFAULT: 'default',
            GRANTED: 'granted',
            DENIED: 'denied'
        },

        Permissions = [Permission.GRANTED, Permission.DEFAULT, Permission.DENIED];

        /* Allow enums to be accessible from Push object */
        self.Permission = Permission;

        /*****************
            Permissions
        /*****************/

        /**
         * Requests permission for desktop notifications
         * @param {Function} callback - Function to execute once permission is granted
         * @return {void}
         */
        self.Permission.request = function (onGranted, onDenied) {

            /* Return if Push not supported */
            if (!self.isSupported) {
                throw new Error(incompatibilityErrorMessage);
            }

            /* Default callback */
            callback = function (result) {

                switch (result) {

                    case self.Permission.GRANTED:
                        hasPermission = true;
                        if (onGranted) onGranted();
                        break;

                    case self.Permission.DENIED:
                        hasPermission = false;
                        if (onDenied) onDenied();
                        break;

                }

            };

            /* Safari 6+, Chrome 23+ */
            if (w.Notification && w.Notification.requestPermission) {
                Notification.requestPermission(callback);
            }
            /* Legacy webkit browsers */
            else if (w.webkitNotifications && w.webkitNotifications.checkPermission) {
                w.webkitNotifications.requestPermission(callback);
            } else {
                throw new Error(incompatibilityErrorMessage);
            }
        };

        /**
         * Returns whether Push has been granted permission to run
         * @return {Boolean}
         */
        self.Permission.has = function () {
            return hasPermission;
        };

        /**
         * Gets the permission level
         * @return {Permission} The permission level
         */
        self.Permission.get = function () {

            var permission;

            /* Return if Push not supported */
            if (!self.isSupported) { throw new Error(incompatibilityErrorMessage); }

            /* Safari 6+, Chrome 23+ */
            if (w.Notification && w.Notification.permissionLevel) {
                permission = w.Notification.permissionLevel;

            /* Legacy webkit browsers */
            } else if (w.webkitNotifications && w.webkitNotifications.checkPermission) {
                permission = Permissions[w.webkitNotifications.checkPermission()];

            /* Firefox 23+ */
            } else if (w.Notification && w.Notification.permission) {
                permission = w.Notification.permission;

            /* Firefox Mobile */
            } else if (navigator.mozNotification) {
                permission = Permissions.GRANTED;

            /* IE9+ */
            } else if (w.external && w.external.msIsSiteMode() !== undefined) {
                permission = w.external.msIsSiteMode() ? Permission.GRANTED : Permission.DEFAULT;
            } else {
                throw new Error(incompatibilityErrorMessage);
            }

            return permission;

        };

        /*********************
            Other Functions
        /*********************/

        /**
         * Detects whether the user's browser supports notifications
         * @return {Boolean}
         */
        self.isSupported = (function () {

             var isSupported = false;

             try {

                 isSupported =

                     /* Safari, Chrome */
                     !!(w.Notification ||

                     /* Chrome & ff-html5notifications plugin */
                     w.webkitNotifications ||

                     /* Firefox Mobile */
                     navigator.mozNotification ||

                     /* IE9+ */
                     (w.external && w.external.msIsSiteMode() !== undefined));

             } catch (e) {}

             return isSupported;

         })();

         /**
          * Creates and displays a new notification
          * @param {Array} options
          * @return {void}
          */
        self.create = function (title, options) {

            /* Fail if the browser is not supported */
            if (!self.isSupported) {
                throw new Error(incompatibilityErrorMessage);
            }

            /* Fail if no or an invalid title is provided */
            if (!isString(title)) {
                throw new Error('PushError: Title of notification must be a string');
            }

            /* Request permission if it isn't granted */
            if (!self.Permission.has()) {
                return new Promise(function(resolve, reject) {
                    self.Permission.request(function() {
                        try {
                            resolve(createCallback(title, options));
                        } catch (e) {
                            reject(e);
                        }
                    }, function() {
                        reject("Permission request declined");
                    });
                });
            } else {
                return new Promise(function(resolve, reject) {
                    try {
                        resolve(createCallback(title, options));
                    } catch (e) {
                        reject(e);
                    }
                });
            }

        };

        /**
         * Returns the notification count
         * @return {Integer} The notification count
         */
        self.count = function () {
            var count = 0,
                key;
            for (key in notifications) {
                count++;
            }
            return count;
        },

        /**
         * Internal function that returns the path of the last service worker used
         * For testing purposes only
         * @return {String} The service worker path
         */
        self.__lastWorkerPath = function () {
            return self.lastWorkerPath;
        },

        /**
         * Closes a notification with the given tag
         * @param {String} tag - Tag of the notification to close
         * @return {Boolean} boolean denoting success
         */
        self.close = function (tag) {
            var key;
            for (key in notifications) {
                notification = notifications[key];
                /* Run only if the tags match */
                if (notification.tag === tag) {
                    /* Call the notification's close() method */
                    return closeNotification(key);
                }
            }
        };

        /**
         * Clears all notifications
         * @return {void}
         */
        self.clear = function () {
            var i,
                success = true;
            for (key in notifications) {
                var didClose = closeNotification(key);
                success = success && didClose;
            }
            return success;
        };
    };

    return Push;

});