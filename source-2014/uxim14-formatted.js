/*! UX Immersion Mobile Conference 2014 - v1.0.0 - 2014-01-28
* http://uxim14.uie.com
* Copyright (c) 2014 User Interface Engineering; Licensed  */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e,t,r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
        x.ready())
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
        e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
        e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                !i || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                    x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                    k.test(i[1]) && x.isPlainObject(n))
                        for (i in n)
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]),
                o && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o)
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                    a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)
                    return setTimeout(x.ready);
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e)
                    return v.call(e, n);
            for (n in e)
                ;
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || a;
            var r = k.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n)
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m)
                    return m.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r)
                for (; r > o; o++)
                    e[i++] = n[o];
            else
                while (n[o] !== t)
                    e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)
                r = !!t(e[o], o),
                n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)
                for (; o > i; i++)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            else
                for (i in e)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0
              , u = e.length
              , c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)
                    x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0,
            x.isFunction(i) || (s = !0),
            c && (s ? (n.call(e, i),
            n = null) : (c = n,
            n = function(e, t, n) {
                return c.call(x(e), n)
            }
            )),
            n))
                for (; u > l; l++)
                    n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(),
            "complete" === a.readyState)
                setTimeout(x.ready);
            else if (a.addEventListener)
                a.addEventListener("DOMContentLoaded", q, !1),
                e.addEventListener("load", q, !1);
            else {
                a.attachEvent("onreadystatechange", q),
                e.attachEvent("onload", q);
                var r = !1;
                try {
                    r = null == e.frameElement && a.documentElement
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!x.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        _(),
                        x.ready()
                    }
                }()
            }
        return n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0,
            0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t),
            t = t || f,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (l = t.nodeType) && 9 !== l)
                return [];
            if (h && !i) {
                if (o = Z.exec(e))
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s),
                            !a || !a.parentNode)
                                return n;
                            if (a.id === s)
                                return n.push(a),
                                n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
                            return n.push(a),
                            n
                    } else {
                        if (o[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b,
                    y = t,
                    x = 9 === l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--)
                            c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x)
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--)
                o.attrHandle[n[r]] = t
        }
        function pt(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w
              , i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
            d = n.documentElement,
            h = !s(n),
            i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }),
            r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }),
            r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete o.find.ID,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }
            ,
            m = [],
            g = [],
            (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }),
            ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            g = g.length && RegExp(g.join("|")),
            m = m.length && RegExp(m.join("|")),
            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = d.compareDocumentPosition ? function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)
                    return S = !0,
                    0;
                if (!o || !a)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)
                    return pt(e, t);
                r = e;
                while (r = r.parentNode)
                    s.unshift(r);
                r = t;
                while (r = r.parentNode)
                    l.unshift(r);
                while (s[i] === l[i])
                    i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            n) : f
        }
        ,
        at.matches = function(e, t) {
            return at(e, null, null, t)
        }
        ,
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(Y, "='$1']"),
            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (i) {}
            return at(t, f, null, [e]).length > 0
        }
        ,
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        }
        ,
        at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()]
              , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
        ,
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates,
            c = !r.sortStable && e.slice(0),
            e.sort(A),
            S) {
                while (t = e[o++])
                    t === e[o] && (i = n.push(o));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += a(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += a(t);
            return n
        }
        ,
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                    e[2] = r.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)
                                f = u[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                    p === t))
                                        break;
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = []
                      , n = []
                      , r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; )
                        e.push(r);
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        })
            o.pseudos[n] = dt(n);
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            l = [],
            u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length));
                for (a in o.filter)
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++)
                r += e[t].value;
            return r
        }
        function vt(e, t, n) {
            var r = t.dir
              , o = n && "parentNode" === r
              , a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return e(t, n, i)
            }
            : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && e(t, n, s))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (c = t[b] || (t[b] = {}),
                            (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i)
                                    return l === !0
                            } else if (u = c[r] = [p],
                            u[1] = e(t, n, s) || i,
                            u[1] === !0)
                                return !0
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--)
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--)
                                (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, l) : M.apply(a, y)
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; i > l; l++)
                if (n = o.relative[e[l].type])
                    f = [vt(bt(f), n)];
                else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches),
                    n[b]) {
                        for (r = ++l; i > r; r++)
                            if (o.relative[e[r].type])
                                break;
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l,
                i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        w && (T = k,
                        i = ++n)
                    }
                    r && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                r && b !== v) {
                    g = 0;
                    while (m = t[g++])
                        m(x, y, l, c);
                    if (s) {
                        if (v > 0)
                            while (b--)
                                x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k,
                u = C),
                x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--)
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        }
        ;
        function Nt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++)
                at(e, t[r], n);
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a],
                    o.relative[c = u.type])
                        break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1),
                        e = i.length && yt(s),
                        !e)
                            return M.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            n = !0; l && o > a; a++)
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments),
                    n ? o = l.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)
                        l.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0]
                              , s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)
                for (s = Array(r),
                l = Array(r),
                u = Array(r); r > t; t++)
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        r = d.getElementsByTagName("a")[0],
        !r || !r.style || !n.length)
            return t;
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))
            break;
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            l.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            o = d.getElementsByTagName("td"),
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === o[0].offsetHeight,
            o[0].style.display = "",
            o[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width,
            r = d.appendChild(a.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            n = d = o = r = null)
        }),
        n = s = l = u = r = o = null,
        t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}),
                a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n],
                null == o && (o = a[x.camelCase(n)])) : o = a,
                o
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s),
                1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                        $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = x._data(e, n),
            r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , a = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--)
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++])
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)
                    return i = x.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                        r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o)
                    return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                    r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                    "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l],
                        !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                r) : (x.removeAttr(e, n),
                t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++])
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n,
                o = x.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n]
              , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o,
            a
        }
        : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n,
            t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
    ,
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--)
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = l[g]) || (h = l[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--)
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else
                        for (d in c)
                            x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle,
                x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            l = 0 > g.indexOf(":") && "on" + g,
            n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            n.result = t,
            n.target || (n.target = i),
            r = null == r ? [n] : x.makeArray(r, [n]),
            p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                        h.push(u),
                        f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; l > a; a++)
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                o = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && x.extend(this, n),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        t) : new x.Event(e,n)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                x._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
            t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })),
            !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }),
                x._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e)
                    this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1)
                i = ot;
            else if (!i)
                return this;
            return 1 === o && (s = i,
            i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/
      , lt = /^(?:parents|prev(?:Until|All))/
      , ut = x.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)),
            lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
                1 === o.nodeType && i.push(o),
                o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return x.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (st.test(t))
                return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Ct = /^(?:checkbox|radio)$/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(a)
      , Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            r = l.firstChild,
            1 === l.childNodes.length && (l = r),
            r)) {
                for (a = x.map(Ft(l, "script"), Ht),
                o = a.length; c > u; u++)
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0),
                    o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument,
                    x.map(a, qt),
                    u = 0; o > u; u++)
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; i > r; r++)
                        x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)
                    x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
            r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o),
                s = Ft(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e),
                    r = r || Ft(o),
                    a = 0; null != (i = s[a]); a++)
                        Mt(i, r[a]);
                else
                    Mt(e, o);
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)
                if (o = e[h],
                o || 0 === o)
                    if ("object" === x.type(o))
                        x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")),
                        l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                        c = At[l] || At._default,
                        s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                        i = c[0];
                        while (i--)
                            s = s.lastChild;
                        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                        !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                            i = o && o.childNodes.length;
                            while (i--)
                                x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                        }
                        x.merge(d, s.childNodes),
                        s.textContent = "";
                        while (s.firstChild)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        d.push(t.createTextNode(o));
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                s = Ft(f.appendChild(o), "script"),
                a && _t(s),
                n)) {
                    i = 0;
                    while (o = s[i++])
                        kt.test(o.type || "") && n.push(o)
                }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l],
                a = o && u[o])) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o],
                    c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                    p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--)
            if (t = en[i] + n,
            t in e)
                return t;
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++)
                        a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                s = x.cssHooks[n] || x.cssHooks[l],
                r === t)
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                a = "number"),
                !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set"in s && (r = s.set(e, r, i)) === t)))
                    try {
                        u[n] = r
                    } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get"in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
        Yt.test(l) && Ut.test(n) && (i = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = s.width,
        u.width = i,
        u.minWidth = o,
        u.maxWidth = a)),
        l
    }
    ) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : l,
        l = u.pixelLeft + "px",
        u.left = i,
        a && (o.left = a)),
        "" === l ? "auto" : l
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Yt.test(i))
                return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a
          , n = Gt[e];
        return n || (n = un(e, t),
        "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = un(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (r in e)
                gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x.type(t))
            r(e, t);
        else
            for (i in t)
                gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn)
            return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        x.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
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
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))
                                c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b)
                return C;
            l = p.global,
            l && 0 === x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)
                C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
                return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            })
                C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch (N) {
                    if (!(2 > b))
                        throw N;
                    k(-1, N)
                }
            } else
                k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = t,
                a = i || "",
                C.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (w = Mn(p, C, r)),
                w = On(p, w, C, c),
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (x.lastModified[o] = T),
                T = C.getResponseHeader("etag"),
                T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                y = w.data,
                v = w.error,
                c = !v)) : (v = N,
                (e || !N) && (N = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || N) + "",
                c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                C.statusCode(m),
                m = t,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                g.fireWith(f, [C, N]),
                l && (d.trigger("ajaxComplete", [C, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0]in r)
            a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a),
        r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: a ? p : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn)
            Pn[e](t, !0)
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
    : In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials"in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t,
                                a && (l.onreadystatechange = x.noop,
                                $n && delete Pn[a]),
                                i)
                                    4 !== l.readyState && l.abort();
                                else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    x(e).unload($n)),
                    Pn[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Yn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do
                    s = s || ".5",
                    a /= s,
                    x.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            var t = Xn || Kn()
              , n = Math.max(0, u.startTime + u.duration - t)
              , r = n / u.duration || 0
              , o = 1 - r
              , a = 0
              , l = u.tweens.length;
            for (; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts))
                return r;
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = x.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Vn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show"))
                    continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)
                    x.style(e, t, c[t])
            });
            for (r in c)
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = x._data(this);
                if (n)
                    a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a)
                        a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(),
        Xn = t
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s)
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using"in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (n = e.offset()),
                n.top += x.css(e[0], "borderTopWidth", !0),
                n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
                    e = e.offsetParent;
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2)
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */

(function($) {

    var version = '1.4.10'
      , defaults = {
        exclude: [],
        excludeWithin: [],
        offset: 0,

        // one of 'top' or 'left'
        direction: 'top',

        // jQuery set of elements you wish to scroll (for $.smoothScroll).
        //  if null (default), $('html, body').firstScrollable() is used.
        scrollElement: null,

        // only use if you want to override default behavior
        scrollTarget: null,

        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll: function() {},

        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll: function() {},
        easing: 'swing',
        speed: 400,

        // coefficient for "auto" speed
        autoCoefficent: 2
    }
      ,
    getScrollable = function(opts) {
        var scrollable = []
          , scrolled = false
          , dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

        this.each(function() {

            if (this == document || this == window) {
                return;
            }
            var el = $(this);
            if (el[dir]() > 0) {
                scrollable.push(this);
            } else {
                // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
                el[dir](1);
                scrolled = el[dir]() > 0;
                if (scrolled) {
                    scrollable.push(this);
                }
                // then put it back, of course
                el[dir](0);
            }
        });

        // If no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length) {
            this.each(function(index) {
                if (this.nodeName === 'BODY') {
                    scrollable = [this];
                }
            });
        }

        // Use the first scrollable element if we're calling firstScrollable()
        if (opts.el === 'first' && scrollable.length > 1) {
            scrollable = [scrollable[0]];
        }

        return scrollable;
    }
      , isTouch = 'ontouchend'in document;

    $.fn.extend({
        scrollable: function(dir) {
            var scrl = getScrollable.call(this, {
                dir: dir
            });
            return this.pushStack(scrl);
        },
        firstScrollable: function(dir) {
            var scrl = getScrollable.call(this, {
                el: 'first',
                dir: dir
            });
            return this.pushStack(scrl);
        },

        smoothScroll: function(options) {
            options = options || {};
            var opts = $.extend({}, $.fn.smoothScroll.defaults, options)
              , locationPath = $.smoothScroll.filterPath(location.pathname);

            this.unbind('click.smoothscroll').bind('click.smoothscroll', function(event) {
                var link = this
                  , $link = $(this)
                  , exclude = opts.exclude
                  , excludeWithin = opts.excludeWithin
                  , elCounter = 0
                  , ewlCounter = 0
                  , include = true
                  , clickOpts = {}
                  , hostMatch = ((location.hostname === link.hostname) || !link.hostname)
                  , pathMatch = opts.scrollTarget || ($.smoothScroll.filterPath(link.pathname) || locationPath) === locationPath
                  , thisHash = escapeSelector(link.hash);

                if (!opts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
                    include = false;
                } else {
                    while (include && elCounter < exclude.length) {
                        if ($link.is(escapeSelector(exclude[elCounter++]))) {
                            include = false;
                        }
                    }
                    while (include && ewlCounter < excludeWithin.length) {
                        if ($link.closest(excludeWithin[ewlCounter++]).length) {
                            include = false;
                        }
                    }
                }

                if (include) {
                    event.preventDefault();

                    $.extend(clickOpts, opts, {
                        scrollTarget: opts.scrollTarget || thisHash,
                        link: link
                    });

                    $.smoothScroll(clickOpts);
                }
            });

            return this;
        }
    });

    $.smoothScroll = function(options, px) {
        var opts, $scroller, scrollTargetOffset, speed, scrollerOffset = 0, offPos = 'offset', scrollDir = 'scrollTop', aniProps = {}, aniOpts = {}, scrollprops = [];

        if (typeof options === 'number') {
            opts = $.fn.smoothScroll.defaults;
            scrollTargetOffset = options;
        } else {
            opts = $.extend({}, $.fn.smoothScroll.defaults, options || {});
            if (opts.scrollElement) {
                offPos = 'position';
                if (opts.scrollElement.css('position') == 'static') {
                    opts.scrollElement.css('position', 'relative');
                }
            }
        }

        opts = $.extend({
            link: null
        }, opts);
        scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

        if (opts.scrollElement) {
            $scroller = opts.scrollElement;
            scrollerOffset = $scroller[scrollDir]();
        } else {
            $scroller = $('html, body').firstScrollable();
        }

        // beforeScroll callback function must fire before calculating offset
        opts.beforeScroll.call($scroller, opts);

        scrollTargetOffset = (typeof options === 'number') ? options : px || ($(opts.scrollTarget)[offPos]() && $(opts.scrollTarget)[offPos]()[opts.direction]) || 0;

        aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
        speed = opts.speed;

        // automatically calculate the speed of the scroll based on distance / coefficient
        if (speed === 'auto') {

            // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
            speed = aniProps[scrollDir] || $scroller.scrollTop();

            // divide the speed by the coefficient
            speed = speed / opts.autoCoefficent;
        }

        aniOpts = {
            duration: speed,
            easing: opts.easing,
            complete: function() {
                opts.afterScroll.call(opts.link, opts);
            }
        };

        if (opts.step) {
            aniOpts.step = opts.step;
        }

        if ($scroller.length) {
            $scroller.stop().animate(aniProps, aniOpts);
        } else {
            opts.afterScroll.call(opts.link, opts);
        }
    }
    ;

    $.smoothScroll.version = version;
    $.smoothScroll.filterPath = function(string) {
        return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
    }
    ;

    // default options
    $.fn.smoothScroll.defaults = defaults;

    function escapeSelector(str) {
        return str.replace(/(:|\.)/g, '\\$1');
    }

})(jQuery);
!function(t, e, i) {
    var n = t.L
      , o = {};
    o.version = "0.7",
    "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o),
    o.noConflict = function() {
        return t.L = n,
        this
    }
    ,
    t.L = o,
    o.Util = {
        extend: function(t) {
            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
            for (i = 0,
            n = s.length; n > i; i++) {
                o = s[i] || {};
                for (e in o)
                    o.hasOwnProperty(e) && (t[e] = o[e])
            }
            return t
        },
        bind: function(t, e) {
            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
            return function() {
                return t.apply(e, i || arguments)
            }
        },
        stamp: function() {
            var t = 0
              , e = "_leaflet_id";
            return function(i) {
                return i[e] = i[e] || ++t,
                i[e]
            }
        }(),
        invokeEach: function(t, e, i) {
            var n, o;
            if ("object" == typeof t) {
                o = Array.prototype.slice.call(arguments, 3);
                for (n in t)
                    e.apply(i, [n, t[n]].concat(o));
                return !0
            }
            return !1
        },
        limitExecByInterval: function(t, e, i) {
            var n, o;
            return function s() {
                var a = arguments;
                return n ? (o = !0,
                void 0) : (n = !0,
                setTimeout(function() {
                    n = !1,
                    o && (s.apply(i, a),
                    o = !1)
                }, e),
                t.apply(i, a),
                void 0)
            }
        },
        falseFn: function() {
            return !1
        },
        formatNum: function(t, e) {
            var i = Math.pow(10, e || 5);
            return Math.round(t * i) / i
        },
        trim: function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        },
        splitWords: function(t) {
            return o.Util.trim(t).split(/\s+/)
        },
        setOptions: function(t, e) {
            return t.options = o.extend({}, t.options, e),
            t.options
        },
        getParamString: function(t, e, i) {
            var n = [];
            for (var o in t)
                n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
        },
        compileTemplate: function(t, e) {
            return t = t.replace(/"/g, '\\"'),
            t = t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                return '" + o["' + i + '"]' + ("function" == typeof e[i] ? "(o)" : "") + ' + "'
            }),
            new Function("o",'return "' + t + '";')
        },
        template: function(t, e) {
            var i = o.Util._templateCache = o.Util._templateCache || {};
            return i[t] = i[t] || o.Util.compileTemplate(t, e),
            i[t](e)
        },
        isArray: Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ,
        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    },
    function() {
        function e(e) {
            var i, n, o = ["webkit", "moz", "o", "ms"];
            for (i = 0; i < o.length && !n; i++)
                n = t[o[i] + e];
            return n
        }
        function i(e) {
            var i = +new Date
              , o = Math.max(0, 16 - (i - n));
            return n = i + o,
            t.setTimeout(e, o)
        }
        var n = 0
          , s = t.requestAnimationFrame || e("RequestAnimationFrame") || i
          , a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
            t.clearTimeout(e)
        }
        ;
        o.Util.requestAnimFrame = function(e, n, a, r) {
            return e = o.bind(e, n),
            a && s === i ? (e(),
            void 0) : s.call(t, e, r)
        }
        ,
        o.Util.cancelAnimFrame = function(e) {
            e && a.call(t, e)
        }
    }(),
    o.extend = o.Util.extend,
    o.bind = o.Util.bind,
    o.stamp = o.Util.stamp,
    o.setOptions = o.Util.setOptions,
    o.Class = function() {}
    ,
    o.Class.extend = function(t) {
        var e = function() {
            this.initialize && this.initialize.apply(this, arguments),
            this._initHooks && this.callInitHooks()
        }
          , i = function() {};
        i.prototype = this.prototype;
        var n = new i;
        n.constructor = e,
        e.prototype = n;
        for (var s in this)
            this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        t.statics && (o.extend(e, t.statics),
        delete t.statics),
        t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)),
        delete t.includes),
        t.options && n.options && (t.options = o.extend({}, n.options, t.options)),
        o.extend(n, t),
        n._initHooks = [];
        var a = this;
        return e.__super__ = a.prototype,
        n.callInitHooks = function() {
            if (!this._initHooksCalled) {
                a.prototype.callInitHooks && a.prototype.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0, e = n._initHooks.length; e > t; t++)
                    n._initHooks[t].call(this)
            }
        }
        ,
        e
    }
    ,
    o.Class.include = function(t) {
        o.extend(this.prototype, t)
    }
    ,
    o.Class.mergeOptions = function(t) {
        o.extend(this.prototype.options, t)
    }
    ,
    o.Class.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , i = "function" == typeof t ? t : function() {
            this[t].apply(this, e)
        }
        ;
        this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i)
    }
    ;
    var s = "_leaflet_events";
    o.Mixin = {},
    o.Mixin.Events = {
        addEventListener: function(t, e, i) {
            if (o.Util.invokeEach(t, this.addEventListener, this, e, i))
                return this;
            var n, a, r, h, l, u, c, d = this[s] = this[s] || {}, p = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t),
            n = 0,
            a = t.length; a > n; n++)
                r = {
                    action: e,
                    context: i || this
                },
                h = t[n],
                p ? (l = h + "_idx",
                u = l + "_len",
                c = d[l] = d[l] || {},
                c[p] || (c[p] = [],
                d[u] = (d[u] || 0) + 1),
                c[p].push(r)) : (d[h] = d[h] || [],
                d[h].push(r));
            return this
        },
        hasEventListeners: function(t) {
            var e = this[s];
            return !!e && (t in e && e[t].length > 0 || t + "_idx"in e && e[t + "_idx_len"] > 0)
        },
        removeEventListener: function(t, e, i) {
            if (!this[s])
                return this;
            if (!t)
                return this.clearAllEventListeners();
            if (o.Util.invokeEach(t, this.removeEventListener, this, e, i))
                return this;
            var n, a, r, h, l, u, c, d, p, _ = this[s], m = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t),
            n = 0,
            a = t.length; a > n; n++)
                if (r = t[n],
                u = r + "_idx",
                c = u + "_len",
                d = _[u],
                e) {
                    if (h = m && d ? d[m] : _[r]) {
                        for (l = h.length - 1; l >= 0; l--)
                            h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1),
                            p[0].action = o.Util.falseFn);
                        i && d && 0 === h.length && (delete d[m],
                        _[c]--)
                    }
                } else
                    delete _[r],
                    delete _[u],
                    delete _[c];
            return this
        },
        clearAllEventListeners: function() {
            return delete this[s],
            this
        },
        fireEvent: function(t, e) {
            if (!this.hasEventListeners(t))
                return this;
            var i, n, a, r, h, l = o.Util.extend({}, e, {
                type: t,
                target: this
            }), u = this[s];
            if (u[t])
                for (i = u[t].slice(),
                n = 0,
                a = i.length; a > n; n++)
                    i[n].action.call(i[n].context, l);
            r = u[t + "_idx"];
            for (h in r)
                if (i = r[h].slice())
                    for (n = 0,
                    a = i.length; a > n; n++)
                        i[n].action.call(i[n].context, l);
            return this
        },
        addOneTimeEventListener: function(t, e, i) {
            if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i))
                return this;
            var n = o.bind(function() {
                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
            }, this);
            return this.addEventListener(t, e, i).addEventListener(t, n, i)
        }
    },
    o.Mixin.Events.on = o.Mixin.Events.addEventListener,
    o.Mixin.Events.off = o.Mixin.Events.removeEventListener,
    o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener,
    o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
    function() {
        var n = "ActiveXObject"in t
          , s = n && !e.addEventListener
          , a = navigator.userAgent.toLowerCase()
          , r = -1 !== a.indexOf("webkit")
          , h = -1 !== a.indexOf("chrome")
          , l = -1 !== a.indexOf("phantom")
          , u = -1 !== a.indexOf("android")
          , c = -1 !== a.search("android [23]")
          , d = -1 !== a.indexOf("gecko")
          , p = typeof orientation != i + ""
          , _ = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent
          , m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _
          , f = "devicePixelRatio"in t && t.devicePixelRatio > 1 || "matchMedia"in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches
          , g = e.documentElement
          , v = n && "transition"in g.style
          , y = "WebKitCSSMatrix"in t && "m11"in new t.WebKitCSSMatrix
          , P = "MozPerspective"in g.style
          , L = "OTransition"in g.style
          , x = !t.L_DISABLE_3D && (v || y || P || L) && !l
          , w = !t.L_NO_TOUCH && !l && function() {
            var t = "ontouchstart";
            if (m || t in g)
                return !0;
            var i = e.createElement("div")
              , n = !1;
            return i.setAttribute ? (i.setAttribute(t, "return;"),
            "function" == typeof i[t] && (n = !0),
            i.removeAttribute(t),
            i = null,
            n) : !1
        }();
        o.Browser = {
            ie: n,
            ielt9: s,
            webkit: r,
            gecko: d && !r && !t.opera && !n,
            android: u,
            android23: c,
            chrome: h,
            ie3d: v,
            webkit3d: y,
            gecko3d: P,
            opera3d: L,
            any3d: x,
            mobile: p,
            mobileWebkit: p && r,
            mobileWebkit3d: p && y,
            mobileOpera: p && t.opera,
            touch: w,
            msPointer: _,
            pointer: m,
            retina: f
        }
    }(),
    o.Point = function(t, e, i) {
        this.x = i ? Math.round(t) : t,
        this.y = i ? Math.round(e) : e
    }
    ,
    o.Point.prototype = {
        clone: function() {
            return new o.Point(this.x,this.y)
        },
        add: function(t) {
            return this.clone()._add(o.point(t))
        },
        _add: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function(t) {
            return this.clone()._subtract(o.point(t))
        },
        _subtract: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        distanceTo: function(t) {
            t = o.point(t);
            var e = t.x - this.x
              , i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function(t) {
            return t = o.point(t),
            t.x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = o.point(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
        }
    },
    o.point = function(t, e, n) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0],t[1]) : t === i || null === t ? t : new o.Point(t,e,n)
    }
    ,
    o.Bounds = function(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
                this.extend(i[n])
    }
    ,
    o.Bounds.prototype = {
        extend: function(t) {
            return t = o.point(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
            this.max.x = Math.max(t.x, this.max.x),
            this.min.y = Math.min(t.y, this.min.y),
            this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
            this.max = t.clone()),
            this
        },
        getCenter: function(t) {
            return new o.Point((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
        },
        getBottomLeft: function() {
            return new o.Point(this.min.x,this.max.y)
        },
        getTopRight: function() {
            return new o.Point(this.max.x,this.min.y)
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t),
            t instanceof o.Bounds ? (e = t.min,
            i = t.max) : e = i = t,
            e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = o.bounds(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , s = t.max
              , a = s.x >= e.x && n.x <= i.x
              , r = s.y >= e.y && n.y <= i.y;
            return a && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    },
    o.bounds = function(t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t,e)
    }
    ,
    o.Transformation = function(t, e, i, n) {
        this._a = t,
        this._b = e,
        this._c = i,
        this._d = n
    }
    ,
    o.Transformation.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1,
            t.x = e * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function(t, e) {
            return e = e || 1,
            new o.Point((t.x / e - this._b) / this._a,(t.y / e - this._d) / this._c)
        }
    },
    o.DomUtil = {
        get: function(t) {
            return "string" == typeof t ? e.getElementById(t) : t
        },
        getStyle: function(t, i) {
            var n = t.style[i];
            if (!n && t.currentStyle && (n = t.currentStyle[i]),
            (!n || "auto" === n) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                n = o ? o[i] : null
            }
            return "auto" === n ? null : n
        },
        getViewportOffset: function(t) {
            var i, n = 0, s = 0, a = t, r = e.body, h = e.documentElement;
            do {
                if (n += a.offsetTop || 0,
                s += a.offsetLeft || 0,
                n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0,
                s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0,
                i = o.DomUtil.getStyle(a, "position"),
                a.offsetParent === r && "absolute" === i)
                    break;
                if ("fixed" === i) {
                    n += r.scrollTop || h.scrollTop || 0,
                    s += r.scrollLeft || h.scrollLeft || 0;
                    break
                }
                if ("relative" === i && !a.offsetLeft) {
                    var l = o.DomUtil.getStyle(a, "width")
                      , u = o.DomUtil.getStyle(a, "max-width")
                      , c = a.getBoundingClientRect();
                    ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft),
                    n += c.top + (r.scrollTop || h.scrollTop || 0);
                    break
                }
                a = a.offsetParent
            } while (a);a = t;
            do {
                if (a === r)
                    break;
                n -= a.scrollTop || 0,
                s -= a.scrollLeft || 0,
                a = a.parentNode
            } while (a);return new o.Point(s,n)
        },
        documentIsLtr: function() {
            return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0,
            o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")),
            o.DomUtil._docIsLtr
        },
        create: function(t, i, n) {
            var o = e.createElement(t);
            return o.className = i,
            n && n.appendChild(o),
            o
        },
        hasClass: function(t, e) {
            if (t.classList !== i)
                return t.classList.contains(e);
            var n = o.DomUtil._getClass(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        },
        addClass: function(t, e) {
            if (t.classList !== i)
                for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++)
                    t.classList.add(n[s]);
            else if (!o.DomUtil.hasClass(t, e)) {
                var r = o.DomUtil._getClass(t);
                o.DomUtil._setClass(t, (r ? r + " " : "") + e)
            }
        },
        removeClass: function(t, e) {
            t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
        },
        _setClass: function(t, e) {
            t.className.baseVal === i ? t.className = e : t.className.baseVal = e
        },
        _getClass: function(t) {
            return t.className.baseVal === i ? t.className : t.className.baseVal
        },
        setOpacity: function(t, e) {
            if ("opacity"in t.style)
                t.style.opacity = e;
            else if ("filter"in t.style) {
                var i = !1
                  , n = "DXImageTransform.Microsoft.Alpha";
                try {
                    i = t.filters.item(n)
                } catch (o) {
                    if (1 === e)
                        return
                }
                e = Math.round(100 * e),
                i ? (i.Enabled = 100 !== e,
                i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
            }
        },
        testProp: function(t) {
            for (var i = e.documentElement.style, n = 0; n < t.length; n++)
                if (t[n]in i)
                    return t[n];
            return !1
        },
        getTranslateString: function(t) {
            var e = o.Browser.webkit3d
              , i = "translate" + (e ? "3d" : "") + "("
              , n = (e ? ",0" : "") + ")";
            return i + t.x + "px," + t.y + "px" + n
        },
        getScaleString: function(t, e) {
            var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t)))
              , n = " scale(" + t + ") ";
            return i + n
        },
        setPosition: function(t, e, i) {
            t._leaflet_pos = e,
            !i && o.Browser.any3d ? (t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e),
            o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden")) : (t.style.left = e.x + "px",
            t.style.top = e.y + "px")
        },
        getPosition: function(t) {
            return t._leaflet_pos
        }
    },
    o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
    o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
    o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend",
    function() {
        if ("onselectstart"in e)
            o.extend(o.DomUtil, {
                disableTextSelection: function() {
                    o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
                },
                enableTextSelection: function() {
                    o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
                }
            });
        else {
            var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            o.extend(o.DomUtil, {
                disableTextSelection: function() {
                    if (i) {
                        var t = e.documentElement.style;
                        this._userSelect = t[i],
                        t[i] = "none"
                    }
                },
                enableTextSelection: function() {
                    i && (e.documentElement.style[i] = this._userSelect,
                    delete this._userSelect)
                }
            })
        }
        o.extend(o.DomUtil, {
            disableImageDrag: function() {
                o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
            },
            enableImageDrag: function() {
                o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
            }
        })
    }(),
    o.LatLng = function(t, e, n) {
        if (t = parseFloat(t),
        e = parseFloat(e),
        isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = t,
        this.lng = e,
        n !== i && (this.alt = parseFloat(n))
    }
    ,
    o.extend(o.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }),
    o.LatLng.prototype = {
        equals: function(t) {
            if (!t)
                return !1;
            t = o.latLng(t);
            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return e <= o.LatLng.MAX_MARGIN
        },
        toString: function(t) {
            return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
        },
        distanceTo: function(t) {
            t = o.latLng(t);
            var e = 6378137
              , i = o.LatLng.DEG_TO_RAD
              , n = (t.lat - this.lat) * i
              , s = (t.lng - this.lng) * i
              , a = this.lat * i
              , r = t.lat * i
              , h = Math.sin(n / 2)
              , l = Math.sin(s / 2)
              , u = h * h + l * l * Math.cos(a) * Math.cos(r);
            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
        },
        wrap: function(t, e) {
            var i = this.lng;
            return t = t || -180,
            e = e || 180,
            i = (i + e) % (e - t) + (t > i || i === e ? e : t),
            new o.LatLng(this.lat,i)
        }
    },
    o.latLng = function(t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0],t[1],t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat"in t ? new o.LatLng(t.lat,"lng"in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t,e)
    }
    ,
    o.LatLngBounds = function(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
                this.extend(i[n])
    }
    ,
    o.LatLngBounds.prototype = {
        extend: function(t) {
            if (!t)
                return this;
            var e = o.latLng(t);
            return t = null !== e ? e : o.latLngBounds(t),
            t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat),
            this._southWest.lng = Math.min(t.lng, this._southWest.lng),
            this._northEast.lat = Math.max(t.lat, this._northEast.lat),
            this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat,t.lng),
            this._northEast = new o.LatLng(t.lat,t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest),
            this.extend(t._northEast)),
            this
        },
        pad: function(t) {
            var e = this._southWest
              , i = this._northEast
              , n = Math.abs(e.lat - i.lat) * t
              , s = Math.abs(e.lng - i.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - n,e.lng - s),new o.LatLng(i.lat + n,i.lng + s))
        },
        getCenter: function() {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new o.LatLng(this.getNorth(),this.getWest())
        },
        getSouthEast: function() {
            return new o.LatLng(this.getSouth(),this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
            var e, i, n = this._southWest, s = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(),
            i = t.getNorthEast()) : e = i = t,
            e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
        },
        intersects: function(t) {
            t = o.latLngBounds(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , s = t.getNorthEast()
              , a = s.lat >= e.lat && n.lat <= i.lat
              , r = s.lng >= e.lng && n.lng <= i.lng;
            return a && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t) {
            return t ? (t = o.latLngBounds(t),
            this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    },
    o.latLngBounds = function(t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t,e)
    }
    ,
    o.Projection = {},
    o.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = o.LatLng.DEG_TO_RAD
              , i = this.MAX_LATITUDE
              , n = Math.max(Math.min(i, t.lat), -i)
              , s = t.lng * e
              , a = n * e;
            return a = Math.log(Math.tan(Math.PI / 4 + a / 2)),
            new o.Point(s,a)
        },
        unproject: function(t) {
            var e = o.LatLng.RAD_TO_DEG
              , i = t.x * e
              , n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
            return new o.LatLng(n,i)
        }
    },
    o.Projection.LonLat = {
        project: function(t) {
            return new o.Point(t.lng,t.lat)
        },
        unproject: function(t) {
            return new o.LatLng(t.y,t.x)
        }
    },
    o.CRS = {
        latLngToPoint: function(t, e) {
            var i = this.projection.project(t)
              , n = this.scale(e);
            return this.transformation._transform(i, n)
        },
        pointToLatLng: function(t, e) {
            var i = this.scale(e)
              , n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        },
        getSize: function(t) {
            var e = this.scale(t);
            return o.point(e, e)
        }
    },
    o.CRS.Simple = o.extend({}, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1,0,-1,0),
        scale: function(t) {
            return Math.pow(2, t)
        }
    }),
    o.CRS.EPSG3857 = o.extend({}, o.CRS, {
        code: "EPSG:3857",
        projection: o.Projection.SphericalMercator,
        transformation: new o.Transformation(.5 / Math.PI,.5,-.5 / Math.PI,.5),
        project: function(t) {
            var e = this.projection.project(t)
              , i = 6378137;
            return e.multiplyBy(i)
        }
    }),
    o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
        code: "EPSG:900913"
    }),
    o.CRS.EPSG4326 = o.extend({}, o.CRS, {
        code: "EPSG:4326",
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 360,.5,-1 / 360,.5)
    }),
    o.Map = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            crs: o.CRS.EPSG3857,
            fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
        },
        initialize: function(t, e) {
            e = o.setOptions(this, e),
            this._initContainer(t),
            this._initLayout(),
            this._onResize = o.bind(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
                reset: !0
            }),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._tileLayersNum = 0,
            this.callInitHooks(),
            this._addLayers(e.layers)
        },
        setView: function(t, e) {
            return e = e === i ? this.getZoom() : e,
            this._resetView(o.latLng(t), this._limitZoom(e)),
            this
        },
        setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = this._limitZoom(t),
            this)
        },
        zoomIn: function(t, e) {
            return this.setZoom(this._zoom + (t || 1), e)
        },
        zoomOut: function(t, e) {
            return this.setZoom(this._zoom - (t || 1), e)
        },
        setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e)
              , s = this.getSize().divideBy(2)
              , a = t instanceof o.Point ? t : this.latLngToContainerPoint(t)
              , r = a.subtract(s).multiplyBy(1 - 1 / n)
              , h = this.containerPointToLatLng(s.add(r));
            return this.setView(h, e, {
                zoom: i
            })
        },
        fitBounds: function(t, e) {
            e = e || {},
            t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
            var i = o.point(e.paddingTopLeft || e.padding || [0, 0])
              , n = o.point(e.paddingBottomRight || e.padding || [0, 0])
              , s = this.getBoundsZoom(t, !1, i.add(n))
              , a = n.subtract(i).divideBy(2)
              , r = this.project(t.getSouthWest(), s)
              , h = this.project(t.getNorthEast(), s)
              , l = this.unproject(r.add(h).divideBy(2).add(a), s);
            return s = e && e.maxZoom ? Math.min(e.maxZoom, s) : s,
            this.setView(l, s, e)
        },
        fitWorld: function(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t) {
            return this.fire("movestart"),
            this._rawPanBy(o.point(t)),
            this.fire("move"),
            this.fire("moveend")
        },
        setMaxBounds: function(t) {
            return t = o.latLngBounds(t),
            this.options.maxBounds = t,
            t ? (this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
        },
        panInsideBounds: function(t, e) {
            var i = this.getCenter()
              , n = this._limitCenter(i, this._zoom, t);
            return i.equals(n) ? this : this.panTo(n, e)
        },
        addLayer: function(t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t,
            !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t,
            this._updateZoomLevels()),
            this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++,
            this._tileLayersToLoad++,
            t.on("load", this._onTileLayerLoad, this)),
            this._loaded && this._layerAdd(t),
            this)
        },
        removeLayer: function(t) {
            var e = o.stamp(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded && this.fire("layerremove", {
                layer: t
            }),
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
            this._updateZoomLevels()),
            this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--,
            this._tileLayersToLoad--,
            t.off("load", this._onTileLayerLoad, this)),
            this) : this
        },
        hasLayer: function(t) {
            return t ? o.stamp(t)in this._layers : !1
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        invalidateSize: function(t) {
            t = o.extend({
                animate: !1,
                pan: !0
            }, t === !0 ? {
                animate: !0
            } : t);
            var e = this.getSize();
            if (this._sizeChanged = !0,
            this._initialCenter = null,
            !this._loaded)
                return this;
            var i = this.getSize()
              , n = e.divideBy(2).round()
              , s = i.divideBy(2).round()
              , a = n.subtract(s);
            return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a),
            this.fire("move"),
            t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
            this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        addHandler: function(t, e) {
            if (!e)
                return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i),
            this.options[t] && i.enable(),
            this
        },
        remove: function() {
            this._loaded && this.fire("unload"),
            this._initEvents("off");
            try {
                delete this._container._leaflet
            } catch (t) {
                this._container._leaflet = i
            }
            return this._clearPanes(),
            this._clearControlPos && this._clearControlPos(),
            this._clearHandlers(),
            this
        },
        getCenter: function() {
            return this._checkIfLoaded(),
            this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function() {
            return this._zoom
        },
        getBounds: function() {
            var t = this.getPixelBounds()
              , e = this.unproject(t.getBottomLeft())
              , i = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e,i)
        },
        getMinZoom: function() {
            return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
        },
        getMaxZoom: function() {
            return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function(t, e, i) {
            t = o.latLngBounds(t);
            var n, s = this.getMinZoom() - (e ? 1 : 0), a = this.getMaxZoom(), r = this.getSize(), h = t.getNorthWest(), l = t.getSouthEast(), u = !0;
            i = o.point(i || [0, 0]);
            do
                s++,
                n = this.project(l, s).subtract(this.project(h, s)).add(i),
                u = e ? n.x < r.x || n.y < r.y : r.contains(n);
            while (u && a >= s);return u && e ? null : e ? s : s - 1
        },
        getSize: function() {
            return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth,this._container.clientHeight),
            this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function() {
            var t = this._getTopLeftPoint();
            return new o.Bounds(t,t.add(this.getSize()))
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(),
            this._initialTopLeftPoint
        },
        getPanes: function() {
            return this._panes
        },
        getContainer: function() {
            return this._container
        },
        getZoomScale: function(t) {
            var e = this.options.crs;
            return e.scale(t) / e.scale(this._zoom)
        },
        getScaleZoom: function(t) {
            return this._zoom + Math.log(t) / Math.LN2
        },
        project: function(t, e) {
            return e = e === i ? this._zoom : e,
            this.options.crs.latLngToPoint(o.latLng(t), e)
        },
        unproject: function(t, e) {
            return e = e === i ? this._zoom : e,
            this.options.crs.pointToLatLng(o.point(t), e)
        },
        layerPointToLatLng: function(t) {
            var e = o.point(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function(t) {
            var e = this.project(o.latLng(t))._round();
            return e._subtract(this.getPixelOrigin())
        },
        containerPointToLayerPoint: function(t) {
            return o.point(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function(t) {
            return o.point(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function(t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        },
        mouseEventToContainerPoint: function(t) {
            return o.DomEvent.getMousePosition(t, this._container)
        },
        mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function(t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e)
                throw new Error("Map container not found.");
            if (e._leaflet)
                throw new Error("Map container is already initialized.");
            e._leaflet = !0
        },
        _initLayout: function() {
            var t = this._container;
            o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function() {
            var t = this._panes = {};
            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container),
            this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane),
            t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane),
            t.shadowPane = this._createPane("leaflet-shadow-pane"),
            t.overlayPane = this._createPane("leaflet-overlay-pane"),
            t.markerPane = this._createPane("leaflet-marker-pane"),
            t.popupPane = this._createPane("leaflet-popup-pane");
            var e = " leaflet-zoom-hide";
            this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e),
            o.DomUtil.addClass(t.shadowPane, e),
            o.DomUtil.addClass(t.popupPane, e))
        },
        _createPane: function(t, e) {
            return o.DomUtil.create("div", t, e || this._panes.objectsPane)
        },
        _clearPanes: function() {
            this._container.removeChild(this._mapPane)
        },
        _addLayers: function(t) {
            t = t ? o.Util.isArray(t) ? t : [t] : [];
            for (var e = 0, i = t.length; i > e; e++)
                this.addLayer(t[e])
        },
        _resetView: function(t, e, i, n) {
            var s = this._zoom !== e;
            n || (this.fire("movestart"),
            s && this.fire("zoomstart")),
            this._zoom = e,
            this._initialCenter = t,
            this._initialTopLeftPoint = this._getNewTopLeftPoint(t),
            i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0,0)),
            this._tileLayersToLoad = this._tileLayersNum;
            var a = !this._loaded;
            this._loaded = !0,
            a && (this.fire("load"),
            this.eachLayer(this._layerAdd, this)),
            this.fire("viewreset", {
                hard: !i
            }),
            this.fire("move"),
            (s || n) && this.fire("zoomend"),
            this.fire("moveend", {
                hard: !i
            })
        },
        _rawPanBy: function(t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _updateZoomLevels: function() {
            var t, e = 1 / 0, n = -1 / 0, o = this._getZoomSpan();
            for (t in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[t];
                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)),
                isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom))
            }
            t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n,
            this._layersMinZoom = e),
            o !== this._getZoomSpan() && this.fire("zoomlevelschange")
        },
        _panInsideMaxBounds: function() {
            this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function() {
            if (!this._loaded)
                throw new Error("Set map center and zoom first.")
        },
        _initEvents: function(e) {
            if (o.DomEvent) {
                e = e || "on",
                o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                for (i = 0,
                n = s.length; n > i; i++)
                    o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
                this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
            }
        },
        _onResize: function() {
            o.Util.cancelAnimFrame(this._resizeRequest),
            this._resizeRequest = o.Util.requestAnimFrame(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this, !1, this._container)
        },
        _onMouseClick: function(t) {
            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"),
            this._fireMouseEvent(t))
        },
        _fireMouseEvent: function(t) {
            if (this._loaded && !o.DomEvent._skipped(t)) {
                var e = t.type;
                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e,
                this.hasEventListeners(e)) {
                    "contextmenu" === e && o.DomEvent.preventDefault(t);
                    var i = this.mouseEventToContainerPoint(t)
                      , n = this.containerPointToLayerPoint(i)
                      , s = this.layerPointToLatLng(n);
                    this.fire(e, {
                        latlng: s,
                        layerPoint: n,
                        containerPoint: i,
                        originalEvent: t
                    })
                }
            }
        },
        _onTileLayerLoad: function() {
            this._tileLayersToLoad--,
            this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
        },
        _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; e > t; t++)
                this._handlers[t].disable()
        },
        whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, this) : this.on("load", t, e),
            this
        },
        _layerAdd: function(t) {
            t.onAdd(this),
            this.fire("layeradd", {
                layer: t
            })
        },
        _getMapPanePos: function() {
            return o.DomUtil.getPosition(this._mapPane)
        },
        _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function() {
            return this.getPixelOrigin().subtract(this._getMapPanePos())
        },
        _getNewTopLeftPoint: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._round()
        },
        _latLngToNewLayerPoint: function(t, e, i) {
            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
            return this.project(t, e)._subtract(n)
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function(t, e, i) {
            if (!i)
                return t;
            var n = this.project(t, e)
              , s = this.getSize().divideBy(2)
              , a = new o.Bounds(n.subtract(s),n.add(s))
              , r = this._getBoundsOffset(a, i, e);
            return this.unproject(n.add(r), e)
        },
        _limitOffset: function(t, e) {
            if (!e)
                return t;
            var i = this.getPixelBounds()
              , n = new o.Bounds(i.min.add(t),i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function(t, e, i) {
            var n = this.project(e.getNorthWest(), i).subtract(t.min)
              , s = this.project(e.getSouthEast(), i).subtract(t.max)
              , a = this._rebound(n.x, -s.x)
              , r = this._rebound(n.y, -s.y);
            return new o.Point(a,r)
        },
        _rebound: function(t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function(t) {
            var e = this.getMinZoom()
              , i = this.getMaxZoom();
            return Math.max(e, Math.min(i, t))
        }
    }),
    o.map = function(t, e) {
        return new o.Map(t,e)
    }
    ,
    o.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,
        R_MINOR: 6356752.314245179,
        R_MAJOR: 6378137,
        project: function(t) {
            var e = o.LatLng.DEG_TO_RAD
              , i = this.MAX_LATITUDE
              , n = Math.max(Math.min(i, t.lat), -i)
              , s = this.R_MAJOR
              , a = this.R_MINOR
              , r = t.lng * e * s
              , h = n * e
              , l = a / s
              , u = Math.sqrt(1 - l * l)
              , c = u * Math.sin(h);
            c = Math.pow((1 - c) / (1 + c), .5 * u);
            var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
            return h = -s * Math.log(d),
            new o.Point(r,h)
        },
        unproject: function(t) {
            for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0; )
                e = h * Math.sin(u),
                _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u,
                u += _;
            return new o.LatLng(u * i,a)
        }
    },
    o.CRS.EPSG3395 = o.extend({}, o.CRS, {
        code: "EPSG:3395",
        projection: o.Projection.Mercator,
        transformation: function() {
            var t = o.Projection.Mercator
              , e = t.R_MAJOR
              , i = .5 / (Math.PI * e);
            return new o.Transformation(i,.5,-i,.5)
        }()
    }),
    o.TileLayer = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: "abc",
            errorTileUrl: "",
            attribution: "",
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: o.Browser.mobile,
            updateWhenIdle: o.Browser.mobile
        },
        initialize: function(t, e) {
            e = o.setOptions(this, e),
            e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2),
            e.zoomOffset++,
            e.minZoom > 0 && e.minZoom--,
            this.options.maxZoom--),
            e.bounds && (e.bounds = o.latLngBounds(e.bounds)),
            this._url = t;
            var i = this.options.subdomains;
            "string" == typeof i && (this.options.subdomains = i.split(""))
        },
        onAdd: function(t) {
            this._map = t,
            this._animated = t._zoomAnimated,
            this._initContainer(),
            t.on({
                viewreset: this._reset,
                moveend: this._update
            }, this),
            this._animated && t.on({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this),
            this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this),
            t.on("move", this._limitedUpdate, this)),
            this._reset(),
            this._update()
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        onRemove: function(t) {
            this._container.parentNode.removeChild(this._container),
            t.off({
                viewreset: this._reset,
                moveend: this._update
            }, this),
            this._animated && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this),
            this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this),
            this._container = null,
            this._map = null
        },
        bringToFront: function() {
            var t = this._map._panes.tilePane;
            return this._container && (t.appendChild(this._container),
            this._setAutoZIndex(t, Math.max)),
            this
        },
        bringToBack: function() {
            var t = this._map._panes.tilePane;
            return this._container && (t.insertBefore(this._container, t.firstChild),
            this._setAutoZIndex(t, Math.min)),
            this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        setUrl: function(t, e) {
            return this._url = t,
            e || this.redraw(),
            this
        },
        redraw: function() {
            return this._map && (this._reset({
                hard: !0
            }),
            this._update()),
            this
        },
        _updateZIndex: function() {
            this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t, e) {
            var i, n, o, s = t.children, a = -e(1 / 0, -1 / 0);
            for (n = 0,
            o = s.length; o > n; n++)
                s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10),
                isNaN(i) || (a = e(a, i)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
        },
        _updateOpacity: function() {
            var t, e = this._tiles;
            if (o.Browser.ielt9)
                for (t in e)
                    o.DomUtil.setOpacity(e[t], this.options.opacity);
            else
                o.DomUtil.setOpacity(this._container, this.options.opacity)
        },
        _initContainer: function() {
            var t = this._map._panes.tilePane;
            if (!this._container) {
                if (this._container = o.DomUtil.create("div", "leaflet-layer"),
                this._updateZIndex(),
                this._animated) {
                    var e = "leaflet-tile-container";
                    this._bgBuffer = o.DomUtil.create("div", e, this._container),
                    this._tileContainer = o.DomUtil.create("div", e, this._container)
                } else
                    this._tileContainer = this._container;
                t.appendChild(this._container),
                this.options.opacity < 1 && this._updateOpacity()
            }
        },
        _reset: function(t) {
            for (var e in this._tiles)
                this.fire("tileunload", {
                    tile: this._tiles[e]
                });
            this._tiles = {},
            this._tilesToLoad = 0,
            this.options.reuseTiles && (this._unusedTiles = []),
            this._tileContainer.innerHTML = "",
            this._animated && t && t.hard && this._clearBgBuffer(),
            this._initContainer()
        },
        _getTileSize: function() {
            var t = this._map
              , e = t.getZoom() + this.options.zoomOffset
              , i = this.options.maxNativeZoom
              , n = this.options.tileSize;
            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)),
            n
        },
        _update: function() {
            if (this._map) {
                var t = this._map
                  , e = t.getPixelBounds()
                  , i = t.getZoom()
                  , n = this._getTileSize();
                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                    var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                    this._addTilesFromCenterOut(s),
                    (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s)
                }
            }
        },
        _addTilesFromCenterOut: function(t) {
            var i, n, s, a = [], r = t.getCenter();
            for (i = t.min.y; i <= t.max.y; i++)
                for (n = t.min.x; n <= t.max.x; n++)
                    s = new o.Point(n,i),
                    this._tileShouldBeLoaded(s) && a.push(s);
            var h = a.length;
            if (0 !== h) {
                a.sort(function(t, e) {
                    return t.distanceTo(r) - e.distanceTo(r)
                });
                var l = e.createDocumentFragment();
                for (this._tilesToLoad || this.fire("loading"),
                this._tilesToLoad += h,
                n = 0; h > n; n++)
                    this._addTile(a[n], l);
                this._tileContainer.appendChild(l)
            }
        },
        _tileShouldBeLoaded: function(t) {
            if (t.x + ":" + t.y in this._tiles)
                return !1;
            var e = this.options;
            if (!e.continuousWorld) {
                var i = this._getWrapTileNum();
                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y)
                    return !1
            }
            if (e.bounds) {
                var n = e.tileSize
                  , o = t.multiplyBy(n)
                  , s = o.add([n, n])
                  , a = this._map.unproject(o)
                  , r = this._map.unproject(s);
                if (e.continuousWorld || e.noWrap || (a = a.wrap(),
                r = r.wrap()),
                !e.bounds.intersects([a, r]))
                    return !1
            }
            return !0
        },
        _removeOtherTiles: function(t) {
            var e, i, n, o;
            for (o in this._tiles)
                e = o.split(":"),
                i = parseInt(e[0], 10),
                n = parseInt(e[1], 10),
                (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            this.fire("tileunload", {
                tile: e,
                url: e.src
            }),
            this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"),
            this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e),
            o.Browser.android || (e.onload = null,
            e.src = o.Util.emptyImageUrl),
            delete this._tiles[t]
        },
        _addTile: function(t, e) {
            var i = this._getTilePos(t)
              , n = this._getTile();
            o.DomUtil.setPosition(n, i, o.Browser.chrome || o.Browser.android23),
            this._tiles[t.x + ":" + t.y] = n,
            this._loadTile(n, t),
            n.parentNode !== this._tileContainer && e.appendChild(n)
        },
        _getZoomForUrl: function() {
            var t = this.options
              , e = this._map.getZoom();
            return t.zoomReverse && (e = t.maxZoom - e),
            e += t.zoomOffset,
            t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
        },
        _getTilePos: function(t) {
            var e = this._map.getPixelOrigin()
              , i = this._getTileSize();
            return t.multiplyBy(i).subtract(e)
        },
        getTileUrl: function(t) {
            return o.Util.template(this._url, o.extend({
                s: this._getSubdomain(t),
                z: t.z,
                x: t.x,
                y: t.y
            }, this.options))
        },
        _getWrapTileNum: function() {
            var t = this._map.options.crs
              , e = t.getSize(this._map.getZoom());
            return e.divideBy(this.options.tileSize)
        },
        _adjustTilePoint: function(t) {
            var e = this._getWrapTileNum();
            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x),
            this.options.tms && (t.y = e.y - t.y - 1),
            t.z = this._getZoomForUrl()
        },
        _getSubdomain: function(t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _getTile: function() {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var t = this._unusedTiles.pop();
                return this._resetTile(t),
                t
            }
            return this._createTile()
        },
        _resetTile: function() {},
        _createTile: function() {
            var t = o.DomUtil.create("img", "leaflet-tile");
            return t.style.width = t.style.height = this._getTileSize() + "px",
            t.galleryimg = "no",
            t.onselectstart = t.onmousemove = o.Util.falseFn,
            o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity),
            o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"),
            t
        },
        _loadTile: function(t, e) {
            t._layer = this,
            t.onload = this._tileOnLoad,
            t.onerror = this._tileOnError,
            this._adjustTilePoint(e),
            t.src = this.getTileUrl(e),
            this.fire("tileloadstart", {
                tile: t,
                url: t.src
            })
        },
        _tileLoaded: function() {
            this._tilesToLoad--,
            this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"),
            this._tilesToLoad || (this.fire("load"),
            this._animated && (clearTimeout(this._clearBgBufferTimer),
            this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
        },
        _tileOnLoad: function() {
            var t = this._layer;
            this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"),
            t.fire("tileload", {
                tile: this,
                url: this.src
            })),
            t._tileLoaded()
        },
        _tileOnError: function() {
            var t = this._layer;
            t.fire("tileerror", {
                tile: this,
                url: this.src
            });
            var e = t.options.errorTileUrl;
            e && (this.src = e),
            t._tileLoaded()
        }
    }),
    o.tileLayer = function(t, e) {
        return new o.TileLayer(t,e)
    }
    ,
    o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var i = o.extend({}, this.defaultWmsParams)
              , n = e.tileSize || this.options.tileSize;
            i.width = i.height = e.detectRetina && o.Browser.retina ? 2 * n : n;
            for (var s in e)
                this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
            this.wmsParams = i,
            o.setOptions(this, e)
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code,
            o.TileLayer.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._map
              , i = this.options.tileSize
              , n = t.multiplyBy(i)
              , s = n.add([i, i])
              , a = this._crs.project(e.unproject(n, t.z))
              , r = this._crs.project(e.unproject(s, t.z))
              , h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(",")
              , l = o.Util.template(this._url, {
                s: this._getSubdomain(t)
            });
            return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
        },
        setParams: function(t, e) {
            return o.extend(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    }),
    o.tileLayer.wms = function(t, e) {
        return new o.TileLayer.WMS(t,e)
    }
    ,
    o.TileLayer.Canvas = o.TileLayer.extend({
        options: {
            async: !1
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        redraw: function() {
            this._map && (this._reset({
                hard: !0
            }),
            this._update());
            for (var t in this._tiles)
                this._redrawTile(this._tiles[t]);
            return this
        },
        _redrawTile: function(t) {
            this.drawTile(t, t._tilePoint, this._map._zoom)
        },
        _createTile: function() {
            var t = o.DomUtil.create("canvas", "leaflet-tile");
            return t.width = t.height = this.options.tileSize,
            t.onselectstart = t.onmousemove = o.Util.falseFn,
            t
        },
        _loadTile: function(t, e) {
            t._layer = this,
            t._tilePoint = e,
            this._redrawTile(t),
            this.options.async || this.tileDrawn(t)
        },
        drawTile: function() {},
        tileDrawn: function(t) {
            this._tileOnLoad.call(t)
        }
    }),
    o.tileLayer.canvas = function(t) {
        return new o.TileLayer.Canvas(t)
    }
    ,
    o.ImageOverlay = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            opacity: 1
        },
        initialize: function(t, e, i) {
            this._url = t,
            this._bounds = o.latLngBounds(e),
            o.setOptions(this, i)
        },
        onAdd: function(t) {
            this._map = t,
            this._image || this._initImage(),
            t._panes.overlayPane.appendChild(this._image),
            t.on("viewreset", this._reset, this),
            t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this),
            this._reset()
        },
        onRemove: function(t) {
            t.getPanes().overlayPane.removeChild(this._image),
            t.off("viewreset", this._reset, this),
            t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        bringToFront: function() {
            return this._image && this._map._panes.overlayPane.appendChild(this._image),
            this
        },
        bringToBack: function() {
            var t = this._map._panes.overlayPane;
            return this._image && t.insertBefore(this._image, t.firstChild),
            this
        },
        setUrl: function(t) {
            this._url = t,
            this._image.src = this._url
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _initImage: function() {
            this._image = o.DomUtil.create("img", "leaflet-image-layer"),
            this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"),
            this._updateOpacity(),
            o.extend(this._image, {
                galleryimg: "no",
                onselectstart: o.Util.falseFn,
                onmousemove: o.Util.falseFn,
                onload: o.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function(t) {
            var e = this._map
              , i = this._image
              , n = e.getZoomScale(t.zoom)
              , s = this._bounds.getNorthWest()
              , a = this._bounds.getSouthEast()
              , r = e._latLngToNewLayerPoint(s, t.zoom, t.center)
              , h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r)
              , l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
            i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
        },
        _reset: function() {
            var t = this._image
              , e = this._map.latLngToLayerPoint(this._bounds.getNorthWest())
              , i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
            o.DomUtil.setPosition(t, e),
            t.style.width = i.x + "px",
            t.style.height = i.y + "px"
        },
        _onImageLoad: function() {
            this.fire("load")
        },
        _updateOpacity: function() {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }),
    o.imageOverlay = function(t, e, i) {
        return new o.ImageOverlay(t,e,i)
    }
    ,
    o.Icon = o.Class.extend({
        options: {
            className: ""
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        createIcon: function(t) {
            return this._createIcon("icon", t)
        },
        createShadow: function(t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t)
                    throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n;
            return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i),
            this._setIconStyles(n, t),
            n
        },
        _setIconStyles: function(t, e) {
            var i, n = this.options, s = o.point(n[e + "Size"]);
            i = "shadow" === e ? o.point(n.shadowAnchor || n.iconAnchor) : o.point(n.iconAnchor),
            !i && s && (i = s.divideBy(2, !0)),
            t.className = "leaflet-marker-" + e + " " + n.className,
            i && (t.style.marginLeft = -i.x + "px",
            t.style.marginTop = -i.y + "px"),
            s && (t.style.width = s.x + "px",
            t.style.height = s.y + "px")
        },
        _createImg: function(t, i) {
            return i = i || e.createElement("img"),
            i.src = t,
            i
        },
        _getIconUrl: function(t) {
            return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
        }
    }),
    o.icon = function(t) {
        return new o.Icon(t)
    }
    ,
    o.Icon.Default = o.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            var e = t + "Url";
            if (this.options[e])
                return this.options[e];
            o.Browser.retina && "icon" === t && (t += "-2x");
            var i = o.Icon.Default.imagePath;
            if (!i)
                throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
            return i + "/marker-" + t + ".png"
        }
    }),
    o.Icon.Default.imagePath = function() {
        var t, i, n, o, s, a = e.getElementsByTagName("script"), r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0,
        i = a.length; i > t; t++)
            if (n = a[t].src,
            o = n.match(r))
                return s = n.split(r)[0],
                (s ? s + "/" : "") + "images"
    }(),
    o.Marker = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            icon: new o.Icon.Default,
            title: "",
            alt: "",
            clickable: !0,
            draggable: !1,
            keyboard: !0,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function(t, e) {
            o.setOptions(this, e),
            this._latlng = o.latLng(t)
        },
        onAdd: function(t) {
            this._map = t,
            t.on("viewreset", this.update, this),
            this._initIcon(),
            this.update(),
            this.fire("add"),
            t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        onRemove: function(t) {
            this.dragging && this.dragging.disable(),
            this._removeIcon(),
            this._removeShadow(),
            this.fire("remove"),
            t.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this),
            this._map = null
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t),
            this.update(),
            this.fire("move", {
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t,
            this.update(),
            this
        },
        setIcon: function(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(),
            this.update()),
            this._popup && this.bindPopup(this._popup),
            this
        },
        update: function() {
            if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        },
        _initIcon: function() {
            var t = this.options
              , e = this._map
              , i = e.options.zoomAnimation && e.options.markerZoomAnimation
              , n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide"
              , s = t.icon.createIcon(this._icon)
              , a = !1;
            s !== this._icon && (this._icon && this._removeIcon(),
            a = !0,
            t.title && (s.title = t.title),
            t.alt && (s.alt = t.alt)),
            o.DomUtil.addClass(s, n),
            t.keyboard && (s.tabIndex = "0"),
            this._icon = s,
            this._initInteraction(),
            t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
            var r = t.icon.createShadow(this._shadow)
              , h = !1;
            r !== this._shadow && (this._removeShadow(),
            h = !0),
            r && o.DomUtil.addClass(r, n),
            this._shadow = r,
            t.opacity < 1 && this._updateOpacity();
            var l = this._map._panes;
            a && l.markerPane.appendChild(this._icon),
            r && h && l.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function() {
            this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex),
            this._map._panes.markerPane.removeChild(this._icon),
            this._icon = null
        },
        _removeShadow: function() {
            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow),
            this._shadow = null
        },
        _setPos: function(t) {
            o.DomUtil.setPosition(this._icon, t),
            this._shadow && o.DomUtil.setPosition(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        },
        _initInteraction: function() {
            if (this.options.clickable) {
                var t = this._icon
                  , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.addClass(t, "leaflet-clickable"),
                o.DomEvent.on(t, "click", this._onMouseClick, this),
                o.DomEvent.on(t, "keypress", this._onKeyPress, this);
                for (var i = 0; i < e.length; i++)
                    o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this),
                this.options.draggable && this.dragging.enable())
            }
        },
        _onMouseClick: function(t) {
            var e = this.dragging && this.dragging.moved();
            (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t),
            e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _onKeyPress: function(t) {
            13 === t.keyCode && this.fire("click", {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _fireMouseEvent: function(t) {
            this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            }),
            "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t),
            "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function() {
            o.DomUtil.setOpacity(this._icon, this.options.opacity),
            this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        }
    }),
    o.marker = function(t, e) {
        return new o.Marker(t,e)
    }
    ,
    o.DivIcon = o.Icon.extend({
        options: {
            iconSize: [12, 12],
            className: "leaflet-div-icon",
            html: !1
        },
        createIcon: function(t) {
            var i = t && "DIV" === t.tagName ? t : e.createElement("div")
              , n = this.options;
            return i.innerHTML = n.html !== !1 ? n.html : "",
            n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"),
            this._setIconStyles(i, "icon"),
            i
        },
        createShadow: function() {
            return null
        }
    }),
    o.divIcon = function(t) {
        return new o.DivIcon(t)
    }
    ,
    o.Map.mergeOptions({
        closePopupOnClick: !0
    }),
    o.Popup = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            autoPan: !0,
            closeButton: !0,
            offset: [0, 7],
            autoPanPadding: [5, 5],
            keepInView: !1,
            className: "",
            zoomAnimation: !0
        },
        initialize: function(t, e) {
            o.setOptions(this, t),
            this._source = e,
            this._animated = o.Browser.any3d && this.options.zoomAnimation,
            this._isOpen = !1
        },
        onAdd: function(t) {
            this._map = t,
            this._container || this._initLayout();
            var e = t.options.fadeAnimation;
            e && o.DomUtil.setOpacity(this._container, 0),
            t._panes.popupPane.appendChild(this._container),
            t.on(this._getEvents(), this),
            this.update(),
            e && o.DomUtil.setOpacity(this._container, 1),
            this.fire("open"),
            t.fire("popupopen", {
                popup: this
            }),
            this._source && this._source.fire("popupopen", {
                popup: this
            })
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        openOn: function(t) {
            return t.openPopup(this),
            this
        },
        onRemove: function(t) {
            t._panes.popupPane.removeChild(this._container),
            o.Util.falseFn(this._container.offsetWidth),
            t.off(this._getEvents(), this),
            t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0),
            this._map = null,
            this.fire("close"),
            t.fire("popupclose", {
                popup: this
            }),
            this._source && this._source.fire("popupclose", {
                popup: this
            })
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t),
            this._map && (this._updatePosition(),
            this._adjustPan()),
            this
        },
        getContent: function() {
            return this._content
        },
        setContent: function(t) {
            return this._content = t,
            this.update(),
            this
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden",
            this._updateContent(),
            this._updateLayout(),
            this._updatePosition(),
            this._container.style.visibility = "",
            this._adjustPan())
        },
        _getEvents: function() {
            var t = {
                viewreset: this._updatePosition
            };
            return this._animated && (t.zoomanim = this._zoomAnimation),
            ("closeOnClick"in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _close: function() {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function() {
            var t, e = "leaflet-popup", i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), n = this._container = o.DomUtil.create("div", i);
            this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n),
            t.href = "#close",
            t.innerHTML = "&#215;",
            o.DomEvent.disableClickPropagation(t),
            o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
            var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
            o.DomEvent.disableClickPropagation(s),
            this._contentNode = o.DomUtil.create("div", e + "-content", s),
            o.DomEvent.disableScrollPropagation(this._contentNode),
            o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation),
            this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n),
            this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
        },
        _updateContent: function() {
            if (this._content) {
                if ("string" == typeof this._content)
                    this._contentNode.innerHTML = this._content;
                else {
                    for (; this._contentNode.hasChildNodes(); )
                        this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire("contentupdate")
            }
        },
        _updateLayout: function() {
            var t = this._contentNode
              , e = t.style;
            e.width = "",
            e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth),
            i = Math.max(i, this.options.minWidth),
            e.width = i + 1 + "px",
            e.whiteSpace = "",
            e.height = "";
            var n = t.offsetHeight
              , s = this.options.maxHeight
              , a = "leaflet-popup-scrolled";
            s && n > s ? (e.height = s + "px",
            o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a),
            this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function() {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng)
                  , e = this._animated
                  , i = o.point(this.options.offset);
                e && o.DomUtil.setPosition(this._container, t),
                this._containerBottom = -i.y - (e ? 0 : t.y),
                this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x),
                this._container.style.bottom = this._containerBottom + "px",
                this._container.style.left = this._containerLeft + "px"
            }
        },
        _zoomAnimation: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function() {
            if (this.options.autoPan) {
                var t = this._map
                  , e = this._container.offsetHeight
                  , i = this._containerWidth
                  , n = new o.Point(this._containerLeft,-e - this._containerBottom);
                this._animated && n._add(o.DomUtil.getPosition(this._container));
                var s = t.layerPointToContainerPoint(n)
                  , a = o.point(this.options.autoPanPadding)
                  , r = o.point(this.options.autoPanPaddingTopLeft || a)
                  , h = o.point(this.options.autoPanPaddingBottomRight || a)
                  , l = t.getSize()
                  , u = 0
                  , c = 0;
                s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x),
                s.x - u - r.x < 0 && (u = s.x - r.x),
                s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y),
                s.y - c - r.y < 0 && (c = s.y - r.y),
                (u || c) && t.fire("autopanstart").panBy([u, c])
            }
        },
        _onCloseButtonClick: function(t) {
            this._close(),
            o.DomEvent.stop(t)
        }
    }),
    o.popup = function(t, e) {
        return new o.Popup(t,e)
    }
    ,
    o.Map.include({
        openPopup: function(t, e, i) {
            if (this.closePopup(),
            !(t instanceof o.Popup)) {
                var n = t;
                t = new o.Popup(i).setLatLng(e).setContent(n)
            }
            return t._isOpen = !0,
            this._popup = t,
            this.addLayer(t)
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup,
            this._popup = null),
            t && (this.removeLayer(t),
            t._isOpen = !1),
            this
        }
    }),
    o.Marker.include({
        openPopup: function() {
            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng),
            this._map.openPopup(this._popup)),
            this
        },
        closePopup: function() {
            return this._popup && this._popup._close(),
            this
        },
        togglePopup: function() {
            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()),
            this
        },
        bindPopup: function(t, e) {
            var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
            return i = i.add(o.Popup.prototype.options.offset),
            e && e.offset && (i = i.add(e.offset)),
            e = o.extend({
                offset: i
            }, e),
            this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this),
            this._popupHandlersAdded = !0),
            t instanceof o.Popup ? (o.setOptions(t, e),
            this._popup = t) : this._popup = new o.Popup(e,this).setContent(t),
            this
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        unbindPopup: function() {
            return this._popup && (this._popup = null,
            this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this),
            this._popupHandlersAdded = !1),
            this
        },
        getPopup: function() {
            return this._popup
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        }
    }),
    o.LayerGroup = o.Class.extend({
        initialize: function(t) {
            this._layers = {};
            var e, i;
            if (t)
                for (e = 0,
                i = t.length; i > e; e++)
                    this.addLayer(t[e])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function(t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
        },
        hasLayer: function(t) {
            return t ? t in this._layers || this.getLayerId(t)in this._layers : !1
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this),
            this
        },
        invoke: function(t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
                i = this._layers[e],
                i[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function(t) {
            this._map = t,
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t),
            this._map = null
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            for (var e in this._layers)
                t.push(this._layers[e]);
            return t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function(t) {
            return o.stamp(t)
        }
    }),
    o.layerGroup = function(t) {
        return new o.LayerGroup(t)
    }
    ,
    o.FeatureGroup = o.LayerGroup.extend({
        includes: o.Mixin.Events,
        statics: {
            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
        },
        addLayer: function(t) {
            return this.hasLayer(t) ? this : ("on"in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this),
            o.LayerGroup.prototype.addLayer.call(this, t),
            this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions),
            this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
            t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this),
            o.LayerGroup.prototype.removeLayer.call(this, t),
            this._popupContent && this.invoke("unbindPopup"),
            this.fire("layerremove", {
                layer: t
            })) : this
        },
        bindPopup: function(t, e) {
            return this._popupContent = t,
            this._popupOptions = e,
            this.invoke("bindPopup", t, e)
        },
        openPopup: function(t) {
            for (var e in this._layers) {
                this._layers[e].openPopup(t);
                break
            }
            return this
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t = new o.LatLngBounds;
            return this.eachLayer(function(e) {
                t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
            }),
            t
        },
        _propagateEvent: function(t) {
            t = o.extend({}, t, {
                layer: t.target,
                target: this
            }),
            this.fire(t.type, t)
        }
    }),
    o.featureGroup = function(t) {
        return new o.FeatureGroup(t)
    }
    ,
    o.Path = o.Class.extend({
        includes: [o.Mixin.Events],
        statics: {
            CLIP_PADDING: function() {
                var e = o.Browser.mobile ? 1280 : 2e3
                  , i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                return Math.max(0, Math.min(.5, i))
            }()
        },
        options: {
            stroke: !0,
            color: "#0033ff",
            dashArray: null,
            lineCap: null,
            lineJoin: null,
            weight: 5,
            opacity: .5,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        onAdd: function(t) {
            this._map = t,
            this._container || (this._initElements(),
            this._initEvents()),
            this.projectLatlngs(),
            this._updatePath(),
            this._container && this._map._pathRoot.appendChild(this._container),
            this.fire("add"),
            t.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        onRemove: function(t) {
            t._pathRoot.removeChild(this._container),
            this.fire("remove"),
            this._map = null,
            o.Browser.vml && (this._container = null,
            this._stroke = null,
            this._fill = null),
            t.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function() {},
        setStyle: function(t) {
            return o.setOptions(this, t),
            this._container && this._updateStyle(),
            this
        },
        redraw: function() {
            return this._map && (this.projectLatlngs(),
            this._updatePath()),
            this
        }
    }),
    o.Map.include({
        _updatePathViewport: function() {
            var t = o.Path.CLIP_PADDING
              , e = this.getSize()
              , i = o.DomUtil.getPosition(this._mapPane)
              , n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round())
              , s = n.add(e.multiplyBy(1 + 2 * t)._round());
            this._pathViewport = new o.Bounds(n,s)
        }
    }),
    o.Path.SVG_NS = "http://www.w3.org/2000/svg",
    o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect),
    o.Path = o.Path.extend({
        statics: {
            SVG: o.Browser.svg
        },
        bringToFront: function() {
            var t = this._map._pathRoot
              , e = this._container;
            return e && t.lastChild !== e && t.appendChild(e),
            this
        },
        bringToBack: function() {
            var t = this._map._pathRoot
              , e = this._container
              , i = t.firstChild;
            return e && i !== e && t.insertBefore(e, i),
            this
        },
        getPathString: function() {},
        _createElement: function(t) {
            return e.createElementNS(o.Path.SVG_NS, t)
        },
        _initElements: function() {
            this._map._initPathRoot(),
            this._initPath(),
            this._initStyle()
        },
        _initPath: function() {
            this._container = this._createElement("g"),
            this._path = this._createElement("path"),
            this.options.className && o.DomUtil.addClass(this._path, this.options.className),
            this._container.appendChild(this._path)
        },
        _initStyle: function() {
            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"),
            this._path.setAttribute("stroke-linecap", "round")),
            this.options.fill && this._path.setAttribute("fill-rule", "evenodd"),
            this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents),
            this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"),
            this._updateStyle()
        },
        _updateStyle: function() {
            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color),
            this._path.setAttribute("stroke-opacity", this.options.opacity),
            this._path.setAttribute("stroke-width", this.options.weight),
            this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"),
            this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap),
            this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"),
            this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color),
            this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
        },
        _updatePath: function() {
            var t = this.getPathString();
            t || (t = "M0 0"),
            this._path.setAttribute("d", t)
        },
        _initEvents: function() {
            if (this.options.clickable) {
                (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"),
                o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)
                    o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function(t) {
            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
        },
        _fireMouseEvent: function(t) {
            if (this.hasEventListeners(t.type)) {
                var e = this._map
                  , i = e.mouseEventToContainerPoint(t)
                  , n = e.containerPointToLayerPoint(i)
                  , s = e.layerPointToLatLng(n);
                this.fire(t.type, {
                    latlng: s,
                    layerPoint: n,
                    containerPoint: i,
                    originalEvent: t
                }),
                "contextmenu" === t.type && o.DomEvent.preventDefault(t),
                "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
            }
        }
    }),
    o.Map.include({
        _initPathRoot: function() {
            this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"),
            this._panes.overlayPane.appendChild(this._pathRoot),
            this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"),
            this.on({
                zoomanim: this._animatePathZoom,
                zoomend: this._endPathZoom
            })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"),
            this.on("moveend", this._updateSvgViewport),
            this._updateSvgViewport())
        },
        _animatePathZoom: function(t) {
            var e = this.getZoomScale(t.zoom)
              , i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
            this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ",
            this._pathZooming = !0
        },
        _endPathZoom: function() {
            this._pathZooming = !1
        },
        _updateSvgViewport: function() {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport
                  , e = t.min
                  , i = t.max
                  , n = i.x - e.x
                  , s = i.y - e.y
                  , a = this._pathRoot
                  , r = this._panes.overlayPane;
                o.Browser.mobileWebkit && r.removeChild(a),
                o.DomUtil.setPosition(a, e),
                a.setAttribute("width", n),
                a.setAttribute("height", s),
                a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")),
                o.Browser.mobileWebkit && r.appendChild(a)
            }
        }
    }),
    o.Path.include({
        bindPopup: function(t, e) {
            return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e,this)),
            this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this),
            this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function() {
            return this._popup && (this._popup = null,
            this.off("click", this._openPopup).off("remove", this.closePopup),
            this._popupHandlersAdded = !1),
            this
        },
        openPopup: function(t) {
            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)],
            this._openPopup({
                latlng: t
            })),
            this
        },
        closePopup: function() {
            return this._popup && this._popup._close(),
            this
        },
        _openPopup: function(t) {
            this._popup.setLatLng(t.latlng),
            this._map.openPopup(this._popup)
        }
    }),
    o.Browser.vml = !o.Browser.svg && function() {
        try {
            var t = e.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var i = t.firstChild;
            return i.style.behavior = "url(#default#VML)",
            i && "object" == typeof i.adj
        } catch (n) {
            return !1
        }
    }(),
    o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
        statics: {
            VML: !0,
            CLIP_PADDING: .02
        },
        _createElement: function() {
            try {
                return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function(t) {
                    return e.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
                return function(t) {
                    return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function() {
            var t = this._container = this._createElement("shape");
            o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")),
            this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"),
            t.coordsize = "1 1",
            this._path = this._createElement("path"),
            t.appendChild(this._path),
            this._map._pathRoot.appendChild(t)
        },
        _initStyle: function() {
            this._updateStyle()
        },
        _updateStyle: function() {
            var t = this._stroke
              , e = this._fill
              , i = this.options
              , n = this._container;
            n.stroked = i.stroke,
            n.filled = i.fill,
            i.stroke ? (t || (t = this._stroke = this._createElement("stroke"),
            t.endcap = "round",
            n.appendChild(t)),
            t.weight = i.weight + "px",
            t.color = i.color,
            t.opacity = i.opacity,
            t.dashStyle = i.dashArray ? o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "",
            i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")),
            i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t),
            this._stroke = null),
            i.fill ? (e || (e = this._fill = this._createElement("fill"),
            n.appendChild(e)),
            e.color = i.fillColor || i.color,
            e.opacity = i.fillOpacity) : e && (n.removeChild(e),
            this._fill = null)
        },
        _updatePath: function() {
            var t = this._container.style;
            t.display = "none",
            this._path.v = this.getPathString() + " ",
            t.display = ""
        }
    }),
    o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
        _initPathRoot: function() {
            if (!this._pathRoot) {
                var t = this._pathRoot = e.createElement("div");
                t.className = "leaflet-vml-container",
                this._panes.overlayPane.appendChild(t),
                this.on("moveend", this._updatePathViewport),
                this._updatePathViewport()
            }
        }
    }),
    o.Browser.canvas = function() {
        return !!e.createElement("canvas").getContext
    }(),
    o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        },
        redraw: function() {
            return this._map && (this.projectLatlngs(),
            this._requestUpdate()),
            this
        },
        setStyle: function(t) {
            return o.setOptions(this, t),
            this._map && (this._updateStyle(),
            this._requestUpdate()),
            this
        },
        onRemove: function(t) {
            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this),
            this.options.clickable && (this._map.off("click", this._onClick, this),
            this._map.off("mousemove", this._onMouseMove, this)),
            this._requestUpdate(),
            this._map = null
        },
        _requestUpdate: function() {
            this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        },
        _fireMapMoveEnd: function() {
            o.Path._updateRequest = null,
            this.fire("moveend")
        },
        _initElements: function() {
            this._map._initPathRoot(),
            this._ctx = this._map._canvasCtx
        },
        _updateStyle: function() {
            var t = this.options;
            t.stroke && (this._ctx.lineWidth = t.weight,
            this._ctx.strokeStyle = t.color),
            t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
        },
        _drawPath: function() {
            var t, e, i, n, s, a;
            for (this._ctx.beginPath(),
            t = 0,
            i = this._parts.length; i > t; t++) {
                for (e = 0,
                n = this._parts[t].length; n > e; e++)
                    s = this._parts[t][e],
                    a = (0 === e ? "move" : "line") + "To",
                    this._ctx[a](s.x, s.y);
                this instanceof o.Polygon && this._ctx.closePath()
            }
        },
        _checkIfEmpty: function() {
            return !this._parts.length
        },
        _updatePath: function() {
            if (!this._checkIfEmpty()) {
                var t = this._ctx
                  , e = this.options;
                this._drawPath(),
                t.save(),
                this._updateStyle(),
                e.fill && (t.globalAlpha = e.fillOpacity,
                t.fill()),
                e.stroke && (t.globalAlpha = e.opacity,
                t.stroke()),
                t.restore()
            }
        },
        _initEvents: function() {
            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this),
            this._map.on("click", this._onClick, this))
        },
        _onClick: function(t) {
            this._containsPoint(t.layerPoint) && this.fire("click", t)
        },
        _onMouseMove: function(t) {
            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer",
            this._mouseInside = !0,
            this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "",
            this._mouseInside = !1,
            this.fire("mouseout", t)))
        }
    }),
    o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
        _initPathRoot: function() {
            var t, i = this._pathRoot;
            i || (i = this._pathRoot = e.createElement("canvas"),
            i.style.position = "absolute",
            t = this._canvasCtx = i.getContext("2d"),
            t.lineCap = "round",
            t.lineJoin = "round",
            this._panes.overlayPane.appendChild(i),
            this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated",
            this.on("zoomanim", this._animatePathZoom),
            this.on("zoomend", this._endPathZoom)),
            this.on("moveend", this._updateCanvasViewport),
            this._updateCanvasViewport())
        },
        _updateCanvasViewport: function() {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport
                  , e = t.min
                  , i = t.max.subtract(e)
                  , n = this._pathRoot;
                o.DomUtil.setPosition(n, e),
                n.width = i.x,
                n.height = i.y,
                n.getContext("2d").translate(-e.x, -e.y)
            }
        }
    }),
    o.LineUtil = {
        simplify: function(t, e) {
            if (!e || !t.length)
                return t.slice();
            var i = e * e;
            return t = this._reducePoints(t, i),
            t = this._simplifyDP(t, i)
        },
        pointToSegmentDistance: function(t, e, i) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
        },
        closestPointOnSegment: function(t, e, i) {
            return this._sqClosestPointOnSegment(t, e, i)
        },
        _simplifyDP: function(t, e) {
            var n = t.length
              , o = typeof Uint8Array != i + "" ? Uint8Array : Array
              , s = new o(n);
            s[0] = s[n - 1] = 1,
            this._simplifyDPStep(t, s, e, 0, n - 1);
            var a, r = [];
            for (a = 0; n > a; a++)
                s[a] && r.push(t[a]);
            return r
        },
        _simplifyDPStep: function(t, e, i, n, o) {
            var s, a, r, h = 0;
            for (a = n + 1; o - 1 >= a; a++)
                r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0),
                r > h && (s = a,
                h = r);
            h > i && (e[s] = 1,
            this._simplifyDPStep(t, e, i, n, s),
            this._simplifyDPStep(t, e, i, s, o))
        },
        _reducePoints: function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++)
                this._sqDist(t[n], t[o]) > e && (i.push(t[n]),
                o = n);
            return s - 1 > o && i.push(t[s - 1]),
            i
        },
        clipSegment: function(t, e, i, n) {
            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i), h = this._getBitCode(e, i);
            for (this._lastCode = h; ; ) {
                if (!(r | h))
                    return [t, e];
                if (r & h)
                    return !1;
                o = r || h,
                s = this._getEdgeIntersection(t, e, o, i),
                a = this._getBitCode(s, i),
                o === r ? (t = s,
                r = a) : (e = s,
                h = a)
            }
        },
        _getEdgeIntersection: function(t, e, i, n) {
            var s = e.x - t.x
              , a = e.y - t.y
              , r = n.min
              , h = n.max;
            return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a,h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a,r.y) : 2 & i ? new o.Point(h.x,t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x,t.y + a * (r.x - t.x) / s) : void 0
        },
        _getBitCode: function(t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
            t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
            i
        },
        _sqDist: function(t, e) {
            var i = e.x - t.x
              , n = e.y - t.y;
            return i * i + n * n
        },
        _sqClosestPointOnSegment: function(t, e, i, n) {
            var s, a = e.x, r = e.y, h = i.x - a, l = i.y - r, u = h * h + l * l;
            return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u,
            s > 1 ? (a = i.x,
            r = i.y) : s > 0 && (a += h * s,
            r += l * s)),
            h = t.x - a,
            l = t.y - r,
            n ? h * h + l * l : new o.Point(a,r)
        }
    },
    o.Polyline = o.Path.extend({
        initialize: function(t, e) {
            o.Path.prototype.initialize.call(this, e),
            this._latlngs = this._convertLatLngs(t)
        },
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        projectLatlngs: function() {
            this._originalPoints = [];
            for (var t = 0, e = this._latlngs.length; e > t; t++)
                this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
        },
        getPathString: function() {
            for (var t = 0, e = this._parts.length, i = ""; e > t; t++)
                i += this._getPathPartStr(this._parts[t]);
            return i
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._latlngs = this._convertLatLngs(t),
            this.redraw()
        },
        addLatLng: function(t) {
            return this._latlngs.push(o.latLng(t)),
            this.redraw()
        },
        spliceLatLngs: function() {
            var t = [].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs, !0),
            this.redraw(),
            t
        },
        closestLayerPoint: function(t) {
            for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)
                for (var l = s[r], u = 1, c = l.length; c > u; u++) {
                    e = l[u - 1],
                    i = l[u];
                    var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                    n > d && (n = d,
                    a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
                }
            return a && (a.distance = Math.sqrt(n)),
            a
        },
        getBounds: function() {
            return new o.LatLngBounds(this.getLatLngs())
        },
        _convertLatLngs: function(t, e) {
            var i, n, s = e ? t : [];
            for (i = 0,
            n = t.length; n > i; i++) {
                if (o.Util.isArray(t[i]) && "number" != typeof t[i][0])
                    return;
                s[i] = o.latLng(t[i])
            }
            return s
        },
        _initEvents: function() {
            o.Path.prototype._initEvents.call(this)
        },
        _getPathPartStr: function(t) {
            for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++)
                e = t[n],
                i && e._round(),
                a += (n ? "L" : "M") + e.x + " " + e.y;
            return a
        },
        _clipPoints: function() {
            var t, e, i, n = this._originalPoints, s = n.length;
            if (this.options.noClip)
                return this._parts = [n],
                void 0;
            this._parts = [];
            var a = this._parts
              , r = this._map._pathViewport
              , h = o.LineUtil;
            for (t = 0,
            e = 0; s - 1 > t; t++)
                i = h.clipSegment(n[t], n[t + 1], r, t),
                i && (a[e] = a[e] || [],
                a[e].push(i[0]),
                (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]),
                e++))
        },
        _simplifyPoints: function() {
            for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++)
                t[i] = e.simplify(t[i], this.options.smoothFactor)
        },
        _updatePath: function() {
            this._map && (this._clipPoints(),
            this._simplifyPoints(),
            o.Path.prototype._updatePath.call(this))
        }
    }),
    o.polyline = function(t, e) {
        return new o.Polyline(t,e)
    }
    ,
    o.PolyUtil = {},
    o.PolyUtil.clipPolygon = function(t, e) {
        var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8], p = o.LineUtil;
        for (n = 0,
        l = t.length; l > n; n++)
            t[n]._code = p._getBitCode(t[n], e);
        for (a = 0; 4 > a; a++) {
            for (u = d[a],
            i = [],
            n = 0,
            l = t.length,
            s = l - 1; l > n; s = n++)
                r = t[n],
                h = t[s],
                r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e),
                c._code = p._getBitCode(c, e),
                i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e),
                c._code = p._getBitCode(c, e),
                i.push(c)),
                i.push(r));
            t = i
        }
        return t
    }
    ,
    o.Polygon = o.Polyline.extend({
        options: {
            fill: !0
        },
        initialize: function(t, e) {
            o.Polyline.prototype.initialize.call(this, t, e),
            this._initWithHoles(t)
        },
        _initWithHoles: function(t) {
            var e, i, n;
            if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])
                for (this._latlngs = this._convertLatLngs(t[0]),
                this._holes = t.slice(1),
                e = 0,
                i = this._holes.length; i > e; e++)
                    n = this._holes[e] = this._convertLatLngs(this._holes[e]),
                    n[0].equals(n[n.length - 1]) && n.pop();
            t = this._latlngs,
            t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
        },
        projectLatlngs: function() {
            if (o.Polyline.prototype.projectLatlngs.call(this),
            this._holePoints = [],
            this._holes) {
                var t, e, i, n;
                for (t = 0,
                i = this._holes.length; i > t; t++)
                    for (this._holePoints[t] = [],
                    e = 0,
                    n = this._holes[t].length; n > e; e++)
                        this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
            }
        },
        setLatLngs: function(t) {
            return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t),
            this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
        },
        _clipPoints: function() {
            var t = this._originalPoints
              , e = [];
            if (this._parts = [t].concat(this._holePoints),
            !this.options.noClip) {
                for (var i = 0, n = this._parts.length; n > i; i++) {
                    var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                    s.length && e.push(s)
                }
                this._parts = e
            }
        },
        _getPathPartStr: function(t) {
            var e = o.Polyline.prototype._getPathPartStr.call(this, t);
            return e + (o.Browser.svg ? "z" : "x")
        }
    }),
    o.polygon = function(t, e) {
        return new o.Polygon(t,e)
    }
    ,
    function() {
        function t(t) {
            return o.FeatureGroup.extend({
                initialize: function(t, e) {
                    this._layers = {},
                    this._options = e,
                    this.setLatLngs(t)
                },
                setLatLngs: function(e) {
                    var i = 0
                      , n = e.length;
                    for (this.eachLayer(function(t) {
                        n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                    }, this); n > i; )
                        this.addLayer(new t(e[i++],this._options));
                    return this
                },
                getLatLngs: function() {
                    var t = [];
                    return this.eachLayer(function(e) {
                        t.push(e.getLatLngs())
                    }),
                    t
                }
            })
        }
        o.MultiPolyline = t(o.Polyline),
        o.MultiPolygon = t(o.Polygon),
        o.multiPolyline = function(t, e) {
            return new o.MultiPolyline(t,e)
        }
        ,
        o.multiPolygon = function(t, e) {
            return new o.MultiPolygon(t,e)
        }
    }(),
    o.Rectangle = o.Polygon.extend({
        initialize: function(t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return t = o.latLngBounds(t),
            [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    }),
    o.rectangle = function(t, e) {
        return new o.Rectangle(t,e)
    }
    ,
    o.Circle = o.Path.extend({
        initialize: function(t, e, i) {
            o.Path.prototype.initialize.call(this, i),
            this._latlng = o.latLng(t),
            this._mRadius = e
        },
        options: {
            fill: !0
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t),
            this.redraw()
        },
        setRadius: function(t) {
            return this._mRadius = t,
            this.redraw()
        },
        projectLatlngs: function() {
            var t = this._getLngRadius()
              , e = this._latlng
              , i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
            this._point = this._map.latLngToLayerPoint(e),
            this._radius = Math.max(this._point.x - i.x, 1)
        },
        getBounds: function() {
            var t = this._getLngRadius()
              , e = this._mRadius / 40075017 * 360
              , i = this._latlng;
            return new o.LatLngBounds([i.lat - e, i.lng - t],[i.lat + e, i.lng + t])
        },
        getLatLng: function() {
            return this._latlng
        },
        getPathString: function() {
            var t = this._point
              , e = this._radius;
            return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(),
            e = Math.round(e),
            "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
        },
        getRadius: function() {
            return this._mRadius
        },
        _getLatRadius: function() {
            return this._mRadius / 40075017 * 360
        },
        _getLngRadius: function() {
            return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
        },
        _checkIfEmpty: function() {
            if (!this._map)
                return !1;
            var t = this._map._pathViewport
              , e = this._radius
              , i = this._point;
            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
        }
    }),
    o.circle = function(t, e, i) {
        return new o.Circle(t,e,i)
    }
    ,
    o.CircleMarker = o.Circle.extend({
        options: {
            radius: 10,
            weight: 2
        },
        initialize: function(t, e) {
            o.Circle.prototype.initialize.call(this, t, null, e),
            this._radius = this.options.radius
        },
        projectLatlngs: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        },
        _updateStyle: function() {
            o.Circle.prototype._updateStyle.call(this),
            this.setRadius(this.options.radius)
        },
        setLatLng: function(t) {
            o.Circle.prototype.setLatLng.call(this, t),
            this._popup && this._popup._isOpen && this._popup.setLatLng(t)
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._radius
        }
    }),
    o.circleMarker = function(t, e) {
        return new o.CircleMarker(t,e)
    }
    ,
    o.Polyline.include(o.Path.CANVAS ? {
        _containsPoint: function(t, e) {
            var i, n, s, a, r, h, l, u = this.options.weight / 2;
            for (o.Browser.touch && (u += 10),
            i = 0,
            a = this._parts.length; a > i; i++)
                for (l = this._parts[i],
                n = 0,
                r = l.length,
                s = r - 1; r > n; s = n++)
                    if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]),
                    u >= h))
                        return !0;
            return !1
        }
    } : {}),
    o.Polygon.include(o.Path.CANVAS ? {
        _containsPoint: function(t) {
            var e, i, n, s, a, r, h, l, u = !1;
            if (o.Polyline.prototype._containsPoint.call(this, t, !0))
                return !0;
            for (s = 0,
            h = this._parts.length; h > s; s++)
                for (e = this._parts[s],
                a = 0,
                l = e.length,
                r = l - 1; l > a; r = a++)
                    i = e[a],
                    n = e[r],
                    i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
            return u
        }
    } : {}),
    o.Circle.include(o.Path.CANVAS ? {
        _drawPath: function() {
            var t = this._point;
            this._ctx.beginPath(),
            this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
        },
        _containsPoint: function(t) {
            var e = this._point
              , i = this.options.stroke ? this.options.weight / 2 : 0;
            return t.distanceTo(e) <= this._radius + i
        }
    } : {}),
    o.CircleMarker.include(o.Path.CANVAS ? {
        _updateStyle: function() {
            o.Path.prototype._updateStyle.call(this)
        }
    } : {}),
    o.GeoJSON = o.FeatureGroup.extend({
        initialize: function(t, e) {
            o.setOptions(this, e),
            this._layers = {},
            t && this.addData(t)
        },
        addData: function(t) {
            var e, i, n, s = o.Util.isArray(t) ? t : t.features;
            if (s) {
                for (e = 0,
                i = s.length; i > e; e++)
                    n = s[e],
                    (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
                return this
            }
            var a = this.options;
            if (!a.filter || a.filter(t)) {
                var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
                return r.feature = o.GeoJSON.asFeature(t),
                r.defaultOptions = r.options,
                this.resetStyle(r),
                a.onEachFeature && a.onEachFeature(t, r),
                this.addLayer(r)
            }
        },
        resetStyle: function(t) {
            var e = this.options.style;
            e && (o.Util.extend(t.options, t.defaultOptions),
            this._setLayerStyle(t, e))
        },
        setStyle: function(t) {
            this.eachLayer(function(e) {
                this._setLayerStyle(e, t)
            }, this)
        },
        _setLayerStyle: function(t, e) {
            "function" == typeof e && (e = e(t.feature)),
            t.setStyle && t.setStyle(e)
        }
    }),
    o.extend(o.GeoJSON, {
        geometryToLayer: function(t, e, i, n) {
            var s, a, r, h, l = "Feature" === t.type ? t.geometry : t, u = l.coordinates, c = [];
            switch (i = i || this.coordsToLatLng,
            l.type) {
            case "Point":
                return s = i(u),
                e ? e(t, s) : new o.Marker(s);
            case "MultiPoint":
                for (r = 0,
                h = u.length; h > r; r++)
                    s = i(u[r]),
                    c.push(e ? e(t, s) : new o.Marker(s));
                return new o.FeatureGroup(c);
            case "LineString":
                return a = this.coordsToLatLngs(u, 0, i),
                new o.Polyline(a,n);
            case "Polygon":
                if (2 === u.length && !u[1].length)
                    throw new Error("Invalid GeoJSON object.");
                return a = this.coordsToLatLngs(u, 1, i),
                new o.Polygon(a,n);
            case "MultiLineString":
                return a = this.coordsToLatLngs(u, 1, i),
                new o.MultiPolyline(a,n);
            case "MultiPolygon":
                return a = this.coordsToLatLngs(u, 2, i),
                new o.MultiPolygon(a,n);
            case "GeometryCollection":
                for (r = 0,
                h = l.geometries.length; h > r; r++)
                    c.push(this.geometryToLayer({
                        geometry: l.geometries[r],
                        type: "Feature",
                        properties: t.properties
                    }, e, i, n));
                return new o.FeatureGroup(c);
            default:
                throw new Error("Invalid GeoJSON object.")
            }
        },
        coordsToLatLng: function(t) {
            return new o.LatLng(t[1],t[0],t[2])
        },
        coordsToLatLngs: function(t, e, i) {
            var n, o, s, a = [];
            for (o = 0,
            s = t.length; s > o; o++)
                n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]),
                a.push(n);
            return a
        },
        latLngToCoords: function(t) {
            var e = [t.lng, t.lat];
            return t.alt !== i && e.push(t.alt),
            e
        },
        latLngsToCoords: function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++)
                e.push(o.GeoJSON.latLngToCoords(t[i]));
            return e
        },
        getFeature: function(t, e) {
            return t.feature ? o.extend({}, t.feature, {
                geometry: e
            }) : o.GeoJSON.asFeature(e)
        },
        asFeature: function(t) {
            return "Feature" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }
    });
    var a = {
        toGeoJSON: function() {
            return o.GeoJSON.getFeature(this, {
                type: "Point",
                coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
            })
        }
    };
    o.Marker.include(a),
    o.Circle.include(a),
    o.CircleMarker.include(a),
    o.Polyline.include({
        toGeoJSON: function() {
            return o.GeoJSON.getFeature(this, {
                type: "LineString",
                coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
            })
        }
    }),
    o.Polygon.include({
        toGeoJSON: function() {
            var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
            if (n[0].push(n[0][0]),
            this._holes)
                for (t = 0,
                e = this._holes.length; e > t; t++)
                    i = o.GeoJSON.latLngsToCoords(this._holes[t]),
                    i.push(i[0]),
                    n.push(i);
            return o.GeoJSON.getFeature(this, {
                type: "Polygon",
                coordinates: n
            })
        }
    }),
    function() {
        function t(t) {
            return function() {
                var e = [];
                return this.eachLayer(function(t) {
                    e.push(t.toGeoJSON().geometry.coordinates)
                }),
                o.GeoJSON.getFeature(this, {
                    type: t,
                    coordinates: e
                })
            }
        }
        o.MultiPolyline.include({
            toGeoJSON: t("MultiLineString")
        }),
        o.MultiPolygon.include({
            toGeoJSON: t("MultiPolygon")
        }),
        o.LayerGroup.include({
            toGeoJSON: function() {
                var e, i = this.feature && this.feature.geometry, n = [];
                if (i && "MultiPoint" === i.type)
                    return t("MultiPoint").call(this);
                var s = i && "GeometryCollection" === i.type;
                return this.eachLayer(function(t) {
                    t.toGeoJSON && (e = t.toGeoJSON(),
                    n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
                }),
                s ? o.GeoJSON.getFeature(this, {
                    geometries: n,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: n
                }
            }
        })
    }(),
    o.geoJson = function(t, e) {
        return new o.GeoJSON(t,e)
    }
    ,
    o.DomEvent = {
        addListener: function(t, e, i, n) {
            var s, a, r, h = o.stamp(i), l = "_leaflet_" + e + h;
            return t[l] ? this : (s = function(e) {
                return i.call(n || t, e || o.DomEvent._getEvent())
            }
            ,
            o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h),
            "addEventListener"in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1),
            t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s,
            r = "mouseenter" === e ? "mouseover" : "mouseout",
            s = function(e) {
                return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
            }
            ,
            t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s,
            s = function(t) {
                return o.DomEvent._filterClick(t, a)
            }
            ,
            t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent"in t && t.attachEvent("on" + e, s),
            t[l] = s,
            this))
        },
        removeListener: function(t, e, i) {
            var n = o.stamp(i)
              , s = "_leaflet_" + e + n
              , a = t[s];
            return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener"in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1),
            t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent"in t && t.detachEvent("on" + e, a),
            t[s] = null,
            this) : this
        },
        stopPropagation: function(t) {
            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
            o.DomEvent._skipped(t),
            this
        },
        disableScrollPropagation: function(t) {
            var e = o.DomEvent.stopPropagation;
            return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
        },
        disableClickPropagation: function(t) {
            for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--)
                o.DomEvent.on(t, o.Draggable.START[i], e);
            return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
        },
        preventDefault: function(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            this
        },
        stop: function(t) {
            return o.DomEvent.preventDefault(t).stopPropagation(t)
        },
        getMousePosition: function(t, i) {
            var n = e.body
              , s = e.documentElement
              , a = o.DomUtil.documentIsLtr() ? t.pageX ? t.pageX - n.scrollLeft - s.scrollLeft : t.clientX : o.Browser.gecko ? t.pageX - n.scrollLeft - s.scrollLeft : t.pageX ? t.pageX - n.scrollLeft + s.scrollLeft : t.clientX
              , r = t.pageY ? t.pageY - n.scrollTop - s.scrollTop : t.clientY
              , h = new o.Point(a,r);
            if (!i)
                return h;
            var l = i.getBoundingClientRect()
              , u = l.left - i.clientLeft
              , c = l.top - i.clientTop;
            return h._subtract(new o.Point(u,c))
        },
        getWheelDelta: function(t) {
            var e = 0;
            return t.wheelDelta && (e = t.wheelDelta / 120),
            t.detail && (e = -t.detail / 3),
            e
        },
        _skipEvents: {},
        _fakeStop: function(t) {
            o.DomEvent._skipEvents[t.type] = !0
        },
        _skipped: function(t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1,
            e
        },
        _checkMouse: function(t, e) {
            var i = e.relatedTarget;
            if (!i)
                return !0;
            try {
                for (; i && i !== t; )
                    i = i.parentNode
            } catch (n) {
                return !1
            }
            return i !== t
        },
        _getEvent: function() {
            var e = t.event;
            if (!e)
                for (var i = arguments.callee.caller; i && (e = i.arguments[0],
                !e || t.Event !== e.constructor); )
                    i = i.caller;
            return e
        },
        _filterClick: function(t, e) {
            var i = t.timeStamp || t.originalEvent.timeStamp
              , n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
            return n && n > 100 && 1e3 > n || t.target._simulatedClick && !t._simulated ? (o.DomEvent.stop(t),
            void 0) : (o.DomEvent._lastClick = i,
            e(t))
        }
    },
    o.DomEvent.on = o.DomEvent.addListener,
    o.DomEvent.off = o.DomEvent.removeListener,
    o.Draggable = o.Class.extend({
        includes: o.Mixin.Events,
        statics: {
            START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {
                mousedown: "mouseup",
                touchstart: "touchend",
                pointerdown: "touchend",
                MSPointerDown: "touchend"
            },
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }
        },
        initialize: function(t, e) {
            this._element = t,
            this._dragStartTarget = e || t
        },
        enable: function() {
            if (!this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)
                    o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !0
            }
        },
        disable: function() {
            if (this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)
                    o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !1,
                this._moved = !1
            }
        },
        _onDown: function(t) {
            if (this._moved = !1,
            !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t),
            o.Draggable._disabled || (o.DomUtil.disableImageDrag(),
            o.DomUtil.disableTextSelection(),
            this._moving)))) {
                var i = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(i.clientX,i.clientY),
                this._startPos = this._newPos = o.DomUtil.getPosition(this._element),
                o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
            }
        },
        _onMove: function(t) {
            if (t.touches && t.touches.length > 1)
                return this._moved = !0,
                void 0;
            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t
              , n = new o.Point(i.clientX,i.clientY)
              , s = n.subtract(this._startPoint);
            (s.x || s.y) && (o.DomEvent.preventDefault(t),
            this._moved || (this.fire("dragstart"),
            this._moved = !0,
            this._startPos = o.DomUtil.getPosition(this._element).subtract(s),
            o.DomUtil.addClass(e.body, "leaflet-dragging"),
            o.DomUtil.addClass(t.target || t.srcElement, "leaflet-drag-target")),
            this._newPos = this._startPos.add(s),
            this._moving = !0,
            o.Util.cancelAnimFrame(this._animRequest),
            this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
        },
        _updatePosition: function() {
            this.fire("predrag"),
            o.DomUtil.setPosition(this._element, this._newPos),
            this.fire("drag")
        },
        _onUp: function(t) {
            o.DomUtil.removeClass(e.body, "leaflet-dragging"),
            o.DomUtil.removeClass(t.target || t.srcElement, "leaflet-drag-target");
            for (var i in o.Draggable.MOVE)
                o.DomEvent.off(e, o.Draggable.MOVE[i], this._onMove).off(e, o.Draggable.END[i], this._onUp);
            o.DomUtil.enableImageDrag(),
            o.DomUtil.enableTextSelection(),
            this._moved && (o.Util.cancelAnimFrame(this._animRequest),
            this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1
        }
    }),
    o.Handler = o.Class.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            this._enabled || (this._enabled = !0,
            this.addHooks())
        },
        disable: function() {
            this._enabled && (this._enabled = !1,
            this.removeHooks())
        },
        enabled: function() {
            return !!this._enabled
        }
    }),
    o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        inertiaThreshold: o.Browser.touch ? 32 : 18,
        easeLinearity: .25,
        worldCopyJump: !1
    }),
    o.Map.Drag = o.Handler.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane,t._container),
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this),
                t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this),
                t.on("viewreset", this._onViewReset, this),
                t.whenReady(this._onViewReset, this))
            }
            this._draggable.enable()
        },
        removeHooks: function() {
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function() {
            var t = this._map;
            t._panAnim && t._panAnim.stop(),
            t.fire("movestart").fire("dragstart"),
            t.options.inertia && (this._positions = [],
            this._times = [])
        },
        _onDrag: function() {
            if (this._map.options.inertia) {
                var t = this._lastTime = +new Date
                  , e = this._lastPos = this._draggable._newPos;
                this._positions.push(e),
                this._times.push(t),
                t - this._times[0] > 200 && (this._positions.shift(),
                this._times.shift())
            }
            this._map.fire("move").fire("drag")
        },
        _onViewReset: function() {
            var t = this._map.getSize()._divideBy(2)
              , e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.project([0, 180]).x
        },
        _onPreDrag: function() {
            var t = this._worldWidth
              , e = Math.round(t / 2)
              , i = this._initialWorldOffset
              , n = this._draggable._newPos.x
              , o = (n - e + i) % t + e - i
              , s = (n + e + i) % t - e - i
              , a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._newPos.x = a
        },
        _onDragEnd: function(t) {
            var e = this._map
              , i = e.options
              , n = +new Date - this._lastTime
              , s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
            if (e.fire("dragend", t),
            s)
                e.fire("moveend");
            else {
                var a = this._lastPos.subtract(this._positions[0])
                  , r = (this._lastTime + n - this._times[0]) / 1e3
                  , h = i.easeLinearity
                  , l = a.multiplyBy(h / r)
                  , u = l.distanceTo([0, 0])
                  , c = Math.min(i.inertiaMaxSpeed, u)
                  , d = l.multiplyBy(c / u)
                  , p = c / (i.inertiaDeceleration * h)
                  , _ = d.multiplyBy(-p / 2).round();
                _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds),
                o.Util.requestAnimFrame(function() {
                    e.panBy(_, {
                        duration: p,
                        easeLinearity: h,
                        noMoveStart: !0
                    })
                })) : e.fire("moveend")
            }
        }
    }),
    o.Map.addInitHook("addHandler", "dragging", o.Map.Drag),
    o.Map.mergeOptions({
        doubleClickZoom: !0
    }),
    o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map
              , i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
        }
    }),
    o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom),
    o.Map.mergeOptions({
        scrollWheelZoom: !0
    }),
    o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function() {
            o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this),
            o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault),
            this._delta = 0
        },
        removeHooks: function() {
            o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll),
            o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
        },
        _onWheelScroll: function(t) {
            var e = o.DomEvent.getWheelDelta(t);
            this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date);
            var i = Math.max(40 - (+new Date - this._startTime), 0);
            clearTimeout(this._timer),
            this._timer = setTimeout(o.bind(this._performZoom, this), i),
            o.DomEvent.preventDefault(t),
            o.DomEvent.stopPropagation(t)
        },
        _performZoom: function() {
            var t = this._map
              , e = this._delta
              , i = t.getZoom();
            e = e > 0 ? Math.ceil(e) : Math.floor(e),
            e = Math.max(Math.min(e, 4), -4),
            e = t._limitZoom(i + e) - i,
            this._delta = 0,
            this._startTime = null,
            e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
        }
    }),
    o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom),
    o.extend(o.DomEvent, {
        _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
        _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
        addDoubleTapListener: function(t, i, n) {
            function s(t) {
                var e;
                if (o.Browser.pointer ? (_.push(t.pointerId),
                e = _.length) : e = t.touches.length,
                !(e > 1)) {
                    var i = Date.now()
                      , n = i - (r || i);
                    h = t.touches ? t.touches[0] : t,
                    l = n > 0 && u >= n,
                    r = i
                }
            }
            function a(t) {
                if (o.Browser.pointer) {
                    var e = _.indexOf(t.pointerId);
                    if (-1 === e)
                        return;
                    _.splice(e, 1)
                }
                if (l) {
                    if (o.Browser.pointer) {
                        var n, s = {};
                        for (var a in h)
                            n = h[a],
                            s[a] = "function" == typeof n ? n.bind(h) : n;
                        h = s
                    }
                    h.type = "dblclick",
                    i(h),
                    r = null
                }
            }
            var r, h, l = !1, u = 250, c = "_leaflet_", d = this._touchstart, p = this._touchend, _ = [];
            t[c + d + n] = s,
            t[c + p + n] = a;
            var m = o.Browser.pointer ? e.documentElement : t;
            return t.addEventListener(d, s, !1),
            m.addEventListener(p, a, !1),
            o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1),
            this
        },
        removeDoubleTapListener: function(t, i) {
            var n = "_leaflet_";
            return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1),
            (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1),
            o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1),
            this
        }
    }),
    o.extend(o.DomEvent, {
        POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
        POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
        POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
        POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
        _pointers: [],
        _pointerDocumentListener: !1,
        addPointerListener: function(t, e, i, n) {
            switch (e) {
            case "touchstart":
                return this.addPointerListenerStart(t, e, i, n);
            case "touchend":
                return this.addPointerListenerEnd(t, e, i, n);
            case "touchmove":
                return this.addPointerListenerMove(t, e, i, n);
            default:
                throw "Unknown touch event type"
            }
        },
        addPointerListenerStart: function(t, i, n, s) {
            var a = "_leaflet_"
              , r = this._pointers
              , h = function(t) {
                o.DomEvent.preventDefault(t);
                for (var e = !1, i = 0; i < r.length; i++)
                    if (r[i].pointerId === t.pointerId) {
                        e = !0;
                        break
                    }
                e || r.push(t),
                t.touches = r.slice(),
                t.changedTouches = [t],
                n(t)
            };
            if (t[a + "touchstart" + s] = h,
            t.addEventListener(this.POINTER_DOWN, h, !1),
            !this._pointerDocumentListener) {
                var l = function(t) {
                    for (var e = 0; e < r.length; e++)
                        if (r[e].pointerId === t.pointerId) {
                            r.splice(e, 1);
                            break
                        }
                };
                e.documentElement.addEventListener(this.POINTER_UP, l, !1),
                e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1),
                this._pointerDocumentListener = !0
            }
            return this
        },
        addPointerListenerMove: function(t, e, i, n) {
            function o(t) {
                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                    for (var e = 0; e < a.length; e++)
                        if (a[e].pointerId === t.pointerId) {
                            a[e] = t;
                            break
                        }
                    t.touches = a.slice(),
                    t.changedTouches = [t],
                    i(t)
                }
            }
            var s = "_leaflet_"
              , a = this._pointers;
            return t[s + "touchmove" + n] = o,
            t.addEventListener(this.POINTER_MOVE, o, !1),
            this
        },
        addPointerListenerEnd: function(t, e, i, n) {
            var o = "_leaflet_"
              , s = this._pointers
              , a = function(t) {
                for (var e = 0; e < s.length; e++)
                    if (s[e].pointerId === t.pointerId) {
                        s.splice(e, 1);
                        break
                    }
                t.touches = s.slice(),
                t.changedTouches = [t],
                i(t)
            };
            return t[o + "touchend" + n] = a,
            t.addEventListener(this.POINTER_UP, a, !1),
            t.addEventListener(this.POINTER_CANCEL, a, !1),
            this
        },
        removePointerListener: function(t, e, i) {
            var n = "_leaflet_"
              , o = t[n + e + i];
            switch (e) {
            case "touchstart":
                t.removeEventListener(this.POINTER_DOWN, o, !1);
                break;
            case "touchmove":
                t.removeEventListener(this.POINTER_MOVE, o, !1);
                break;
            case "touchend":
                t.removeEventListener(this.POINTER_UP, o, !1),
                t.removeEventListener(this.POINTER_CANCEL, o, !1)
            }
            return this
        }
    }),
    o.Map.mergeOptions({
        touchZoom: o.Browser.touch && !o.Browser.android23,
        bounceAtZoomLimits: !0
    }),
    o.Map.TouchZoom = o.Handler.extend({
        addHooks: function() {
            o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var n = i.mouseEventToLayerPoint(t.touches[0])
                  , s = i.mouseEventToLayerPoint(t.touches[1])
                  , a = i._getCenterLayerPoint();
                this._startCenter = n.add(s)._divideBy(2),
                this._startDist = n.distanceTo(s),
                this._moved = !1,
                this._zooming = !0,
                this._centerOffset = a.subtract(this._startCenter),
                i._panAnim && i._panAnim.stop(),
                o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this),
                o.DomEvent.preventDefault(t)
            }
        },
        _onTouchMove: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = e.mouseEventToLayerPoint(t.touches[0])
                  , n = e.mouseEventToLayerPoint(t.touches[1]);
                this._scale = i.distanceTo(n) / this._startDist,
                this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter),
                1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"),
                e.fire("movestart").fire("zoomstart"),
                this._moved = !0),
                o.Util.cancelAnimFrame(this._animRequest),
                this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container),
                o.DomEvent.preventDefault(t))
            }
        },
        _updateOnMove: function() {
            var t = this._map
              , e = this._getScaleOrigin()
              , i = t.layerPointToLatLng(e)
              , n = t.getScaleZoom(this._scale);
            t._animateZoom(i, n, this._startCenter, this._scale, this._delta)
        },
        _onTouchEnd: function() {
            if (!this._moved || !this._zooming)
                return this._zooming = !1,
                void 0;
            var t = this._map;
            this._zooming = !1,
            o.DomUtil.removeClass(t._mapPane, "leaflet-touching"),
            o.Util.cancelAnimFrame(this._animRequest),
            o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
            var i = this._getScaleOrigin()
              , n = t.layerPointToLatLng(i)
              , s = t.getZoom()
              , a = t.getScaleZoom(this._scale) - s
              , r = a > 0 ? Math.ceil(a) : Math.floor(a)
              , h = t._limitZoom(s + r)
              , l = t.getZoomScale(h) / this._scale;
            t._animateZoom(n, h, i, l)
        },
        _getScaleOrigin: function() {
            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(t)
        }
    }),
    o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom),
    o.Map.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }),
    o.Map.Tap = o.Handler.extend({
        addHooks: function() {
            o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (o.DomEvent.preventDefault(t),
                this._fireClick = !0,
                t.touches.length > 1)
                    return this._fireClick = !1,
                    clearTimeout(this._holdTimeout),
                    void 0;
                var i = t.touches[0]
                  , n = i.target;
                this._startPos = this._newPos = new o.Point(i.clientX,i.clientY),
                n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"),
                this._holdTimeout = setTimeout(o.bind(function() {
                    this._isTapValid() && (this._fireClick = !1,
                    this._onUp(),
                    this._simulateEvent("contextmenu", i))
                }, this), 1e3),
                o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout),
            o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this),
            this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0]
                  , n = i.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"),
                this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new o.Point(e.clientX,e.clientY)
        },
        _simulateEvent: function(i, n) {
            var o = e.createEvent("MouseEvents");
            o._simulated = !0,
            n.target._simulatedClick = !0,
            o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
            n.target.dispatchEvent(o)
        }
    }),
    o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap),
    o.Map.mergeOptions({
        boxZoom: !0
    }),
    o.Map.BoxZoom = o.Handler.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._moved = !1
        },
        addHooks: function() {
            o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            o.DomEvent.off(this._container, "mousedown", this._onMouseDown),
            this._moved = !1
        },
        moved: function() {
            return this._moved
        },
        _onMouseDown: function(t) {
            return this._moved = !1,
            !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(),
            o.DomUtil.disableImageDrag(),
            this._startLayerPoint = this._map.mouseEventToLayerPoint(t),
            o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this),
            void 0)
        },
        _onMouseMove: function(t) {
            this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane),
            o.DomUtil.setPosition(this._box, this._startLayerPoint),
            this._container.style.cursor = "crosshair",
            this._map.fire("boxzoomstart"));
            var e = this._startLayerPoint
              , i = this._box
              , n = this._map.mouseEventToLayerPoint(t)
              , s = n.subtract(e)
              , a = new o.Point(Math.min(n.x, e.x),Math.min(n.y, e.y));
            o.DomUtil.setPosition(i, a),
            this._moved = !0,
            i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px",
            i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
        },
        _finish: function() {
            this._moved && (this._pane.removeChild(this._box),
            this._container.style.cursor = ""),
            o.DomUtil.enableTextSelection(),
            o.DomUtil.enableImageDrag(),
            o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
        },
        _onMouseUp: function(t) {
            this._finish();
            var e = this._map
              , i = e.mouseEventToLayerPoint(t);
            if (!this._startLayerPoint.equals(i)) {
                var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));
                e.fitBounds(n),
                e.fire("boxzoomend", {
                    boxZoomBounds: n
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    }),
    o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom),
    o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }),
    o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 173]
        },
        initialize: function(t) {
            this._map = t,
            this._setPanOffset(t.options.keyboardPanOffset),
            this._setZoomOffset(t.options.keyboardZoomOffset)
        },
        addHooks: function() {
            var t = this._map._container;
            -1 === t.tabIndex && (t.tabIndex = "0"),
            o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this),
            this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
        },
        removeHooks: function() {
            this._removeHooks();
            var t = this._map._container;
            o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this),
            this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var i = e.body
                  , n = e.documentElement
                  , o = i.scrollTop || n.scrollTop
                  , s = i.scrollLeft || n.scrollLeft;
                this._map._container.focus(),
                t.scrollTo(s, o)
            }
        },
        _onFocus: function() {
            this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1,
            this._map.fire("blur")
        },
        _setPanOffset: function(t) {
            var e, i, n = this._panKeys = {}, o = this.keyCodes;
            for (e = 0,
            i = o.left.length; i > e; e++)
                n[o.left[e]] = [-1 * t, 0];
            for (e = 0,
            i = o.right.length; i > e; e++)
                n[o.right[e]] = [t, 0];
            for (e = 0,
            i = o.down.length; i > e; e++)
                n[o.down[e]] = [0, t];
            for (e = 0,
            i = o.up.length; i > e; e++)
                n[o.up[e]] = [0, -1 * t]
        },
        _setZoomOffset: function(t) {
            var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0,
            i = o.zoomIn.length; i > e; e++)
                n[o.zoomIn[e]] = t;
            for (e = 0,
            i = o.zoomOut.length; i > e; e++)
                n[o.zoomOut[e]] = -t
        },
        _addHooks: function() {
            o.DomEvent.on(e, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            o.DomEvent.off(e, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            var e = t.keyCode
              , i = this._map;
            if (e in this._panKeys) {
                if (i._panAnim && i._panAnim._inProgress)
                    return;
                i.panBy(this._panKeys[e]),
                i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
            } else {
                if (!(e in this._zoomKeys))
                    return;
                i.setZoom(i.getZoom() + this._zoomKeys[e])
            }
            o.DomEvent.stop(t)
        }
    }),
    o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard),
    o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t,t)),
            this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this),
            this._draggable.enable(),
            o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
        },
        removeHooks: function() {
            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this),
            this._draggable.disable(),
            o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function() {
            this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onDrag: function() {
            var t = this._marker
              , e = t._shadow
              , i = o.DomUtil.getPosition(t._icon)
              , n = t._map.layerPointToLatLng(i);
            e && o.DomUtil.setPosition(e, i),
            t._latlng = n,
            t.fire("move", {
                latlng: n
            }).fire("drag")
        },
        _onDragEnd: function(t) {
            this._marker.fire("moveend").fire("dragend", t)
        }
    }),
    o.Control = o.Class.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this._map = t;
            var e = this._container = this.onAdd(t)
              , i = this.getPosition()
              , n = t._controlCorners[i];
            return o.DomUtil.addClass(e, "leaflet-control"),
            -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
            this
        },
        removeFrom: function(t) {
            var e = this.getPosition()
              , i = t._controlCorners[e];
            return i.removeChild(this._container),
            this._map = null,
            this.onRemove && this.onRemove(t),
            this
        },
        _refocusOnMap: function() {
            this._map && this._map.getContainer().focus()
        }
    }),
    o.control = function(t) {
        return new o.Control(t)
    }
    ,
    o.Map.include({
        addControl: function(t) {
            return t.addTo(this),
            this
        },
        removeControl: function(t) {
            return t.removeFrom(this),
            this
        },
        _initControlPos: function() {
            function t(t, s) {
                var a = i + t + " " + i + s;
                e[t + s] = o.DomUtil.create("div", a, n)
            }
            var e = this._controlCorners = {}
              , i = "leaflet-"
              , n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
            t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function() {
            this._container.removeChild(this._controlContainer)
        }
    }),
    o.Control.Zoom = o.Control.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "-",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom"
              , i = o.DomUtil.create("div", e + " leaflet-bar");
            return this._map = t,
            this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this),
            this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        _zoomIn: function(t) {
            this._map.zoomIn(t.shiftKey ? 3 : 1)
        },
        _zoomOut: function(t) {
            this._map.zoomOut(t.shiftKey ? 3 : 1)
        },
        _createButton: function(t, e, i, n, s, a) {
            var r = o.DomUtil.create("a", i, n);
            r.innerHTML = t,
            r.href = "#",
            r.title = e;
            var h = o.DomEvent.stopPropagation;
            return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a),
            r
        },
        _updateDisabled: function() {
            var t = this._map
              , e = "leaflet-disabled";
            o.DomUtil.removeClass(this._zoomInButton, e),
            o.DomUtil.removeClass(this._zoomOutButton, e),
            t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e),
            t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }),
    o.Map.mergeOptions({
        zoomControl: !0
    }),
    o.Map.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom,
        this.addControl(this.zoomControl))
    }),
    o.control.zoom = function(t) {
        return new o.Control.Zoom(t)
    }
    ,
    o.Control.Attribution = o.Control.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function(t) {
            o.setOptions(this, t),
            this._attributions = {}
        },
        onAdd: function(t) {
            this._container = o.DomUtil.create("div", "leaflet-control-attribution"),
            o.DomEvent.disableClickPropagation(this._container);
            for (var e in t._layers)
                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this),
            this._update(),
            this._container
        },
        onRemove: function(t) {
            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
        },
        setPrefix: function(t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function(t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this) : void 0
        },
        removeAttribution: function(t) {
            return t ? (this._attributions[t] && (this._attributions[t]--,
            this._update()),
            this) : void 0
        },
        _update: function() {
            if (this._map) {
                var t = [];
                for (var e in this._attributions)
                    this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                t.length && i.push(t.join(", ")),
                this._container.innerHTML = i.join(" | ")
            }
        },
        _onLayerAdd: function(t) {
            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
        },
        _onLayerRemove: function(t) {
            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
        }
    }),
    o.Map.mergeOptions({
        attributionControl: !0
    }),
    o.Map.addInitHook(function() {
        this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
    }),
    o.control.attribution = function(t) {
        return new o.Control.Attribution(t)
    }
    ,
    o.Control.Scale = o.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        },
        onAdd: function(t) {
            this._map = t;
            var e = "leaflet-control-scale"
              , i = o.DomUtil.create("div", e)
              , n = this.options;
            return this._addScales(n, e, i),
            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            i
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function(t, e, i) {
            t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)),
            t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i))
        },
        _update: function() {
            var t = this._map.getBounds()
              , e = t.getCenter().lat
              , i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180)
              , n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180
              , o = this._map.getSize()
              , s = this.options
              , a = 0;
            o.x > 0 && (a = n * (s.maxWidth / o.x)),
            this._updateScales(s, a)
        },
        _updateScales: function(t, e) {
            t.metric && e && this._updateMetric(e),
            t.imperial && e && this._updateImperial(e)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t);
            this._mScale.style.width = this._getScaleWidth(e / t) + "px",
            this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
        },
        _updateImperial: function(t) {
            var e, i, n, o = 3.2808399 * t, s = this._iScale;
            o > 5280 ? (e = o / 5280,
            i = this._getRoundNum(e),
            s.style.width = this._getScaleWidth(i / e) + "px",
            s.innerHTML = i + " mi") : (n = this._getRoundNum(o),
            s.style.width = this._getScaleWidth(n / o) + "px",
            s.innerHTML = n + " ft")
        },
        _getScaleWidth: function(t) {
            return Math.round(this.options.maxWidth * t) - 10
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1)
              , i = t / e;
            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1,
            e * i
        }
    }),
    o.control.scale = function(t) {
        return new o.Control.Scale(t)
    }
    ,
    o.Control.Layers = o.Control.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0
        },
        initialize: function(t, e, i) {
            o.setOptions(this, i),
            this._layers = {},
            this._lastZIndex = 0,
            this._handlingClick = !1;
            for (var n in t)
                this._addLayer(t[n], n);
            for (n in e)
                this._addLayer(e[n], n, !0)
        },
        onAdd: function(t) {
            return this._initLayout(),
            this._update(),
            t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this),
            this._container
        },
        onRemove: function(t) {
            t.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e),
            this._update(),
            this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0),
            this._update(),
            this
        },
        removeLayer: function(t) {
            var e = o.stamp(t);
            return delete this._layers[e],
            this._update(),
            this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers"
              , e = this._container = o.DomUtil.create("div", t);
            e.setAttribute("aria-haspopup", !0),
            o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
            var i = this._form = o.DomUtil.create("form", t + "-list");
            if (this.options.collapsed) {
                o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                n.href = "#",
                n.title = "Layers",
                o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this),
                o.DomEvent.on(i, "click", function() {
                    setTimeout(o.bind(this._onInputClick, this), 0)
                }, this),
                this._map.on("click", this._collapse, this)
            } else
                this._expand();
            this._baseLayersList = o.DomUtil.create("div", t + "-base", i),
            this._separator = o.DomUtil.create("div", t + "-separator", i),
            this._overlaysList = o.DomUtil.create("div", t + "-overlays", i),
            e.appendChild(i)
        },
        _addLayer: function(t, e, i) {
            var n = o.stamp(t);
            this._layers[n] = {
                layer: t,
                name: e,
                overlay: i
            },
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
            t.setZIndex(this._lastZIndex))
        },
        _update: function() {
            if (this._container) {
                this._baseLayersList.innerHTML = "",
                this._overlaysList.innerHTML = "";
                var t, e, i = !1, n = !1;
                for (t in this._layers)
                    e = this._layers[t],
                    this._addItem(e),
                    n = n || e.overlay,
                    i = i || !e.overlay;
                this._separator.style.display = n && i ? "" : "none"
            }
        },
        _onLayerChange: function(t) {
            var e = this._layers[o.stamp(t.layer)];
            if (e) {
                this._handlingClick || this._update();
                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            }
        },
        _createRadioElement: function(t, i) {
            var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
            i && (n += ' checked="checked"'),
            n += "/>";
            var o = e.createElement("div");
            return o.innerHTML = n,
            o.firstChild
        },
        _addItem: function(t) {
            var i, n = e.createElement("label"), s = this._map.hasLayer(t.layer);
            t.overlay ? (i = e.createElement("input"),
            i.type = "checkbox",
            i.className = "leaflet-control-layers-selector",
            i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s),
            i.layerId = o.stamp(t.layer),
            o.DomEvent.on(i, "click", this._onInputClick, this);
            var a = e.createElement("span");
            a.innerHTML = " " + t.name,
            n.appendChild(i),
            n.appendChild(a);
            var r = t.overlay ? this._overlaysList : this._baseLayersList;
            return r.appendChild(n),
            n
        },
        _onInputClick: function() {
            var t, e, i, n = this._form.getElementsByTagName("input"), o = n.length;
            for (this._handlingClick = !0,
            t = 0; o > t; t++)
                e = n[t],
                i = this._layers[e.layerId],
                e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
            this._handlingClick = !1,
            this._refocusOnMap()
        },
        _expand: function() {
            o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
        },
        _collapse: function() {
            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
        }
    }),
    o.control.layers = function(t, e, i) {
        return new o.Control.Layers(t,e,i)
    }
    ,
    o.PosAnimation = o.Class.extend({
        includes: o.Mixin.Events,
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._newPos = e,
            this.fire("start"),
            t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)",
            o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
            o.DomUtil.setPosition(t, e),
            o.Util.falseFn(t.offsetWidth),
            this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
        },
        stop: function() {
            this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()),
            this._onTransitionEnd(),
            o.Util.falseFn(this._el.offsetWidth))
        },
        _onStep: function() {
            var t = this._getPos();
            return t ? (this._el._leaflet_pos = t,
            this.fire("step"),
            void 0) : (this._onTransitionEnd(),
            void 0)
        },
        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
        _getPos: function() {
            var e, i, n, s = this._el, a = t.getComputedStyle(s);
            if (o.Browser.any3d) {
                if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe),
                !n)
                    return;
                e = parseFloat(n[1]),
                i = parseFloat(n[2])
            } else
                e = parseFloat(a.left),
                i = parseFloat(a.top);
            return new o.Point(e,i,!0)
        },
        _onTransitionEnd: function() {
            o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
            this._inProgress && (this._inProgress = !1,
            this._el.style[o.DomUtil.TRANSITION] = "",
            this._el._leaflet_pos = this._newPos,
            clearInterval(this._stepTimer),
            this.fire("step").fire("end"))
        }
    }),
    o.Map.include({
        setView: function(t, e, n) {
            if (e = e === i ? this._zoom : this._limitZoom(e),
            t = this._limitCenter(o.latLng(t), e, this.options.maxBounds),
            n = n || {},
            this._panAnim && this._panAnim.stop(),
            this._loaded && !n.reset && n !== !0) {
                n.animate !== i && (n.zoom = o.extend({
                    animate: n.animate
                }, n.zoom),
                n.pan = o.extend({
                    animate: n.animate
                }, n.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                if (s)
                    return clearTimeout(this._sizeTimer),
                    this
            }
            return this._resetView(t, e),
            this
        },
        panBy: function(t, e) {
            if (t = o.point(t).round(),
            e = e || {},
            !t.x && !t.y)
                return this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation,
            this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)),
            e.noMoveStart || this.fire("movestart"),
            e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t);
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else
                this._rawPanBy(t),
                this.fire("move").fire("moveend");
            return this
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"),
            this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            var i = this._getCenterOffset(t)._floor();
            return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e),
            !0) : !1
        }
    }),
    o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = i || .25,
            this._easeOutPower = 1 / Math.max(n || .5, .2),
            this._startPos = o.DomUtil.getPosition(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = +new Date,
            this.fire("start"),
            this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(),
            this._complete())
        },
        _animate: function() {
            this._animId = o.Util.requestAnimFrame(this._animate, this),
            this._step()
        },
        _step: function() {
            var t = +new Date - this._startTime
              , e = 1e3 * this._duration;
            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1),
            this._complete())
        },
        _runFrame: function(t) {
            var e = this._startPos.add(this._offset.multiplyBy(t));
            o.DomUtil.setPosition(this._el, e),
            this.fire("step")
        },
        _complete: function() {
            o.Util.cancelAnimFrame(this._animId),
            this._inProgress = !1,
            this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }),
    o.Map.mergeOptions({
        zoomAnimation: !0,
        zoomAnimationThreshold: 4
    }),
    o.DomUtil.TRANSITION && o.Map.addInitHook(function() {
        this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera,
        this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }),
    o.Map.include(o.DomUtil.TRANSITION ? {
        _catchTransitionEnd: function() {
            this._animatingZoom && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom)
                return !0;
            if (i = i || {},
            !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                return !1;
            var n = this.getZoomScale(e)
              , o = this._getCenterOffset(t)._divideBy(1 - 1 / n)
              , s = this._getCenterLayerPoint()._add(o);
            return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"),
            this._animateZoom(t, e, s, n, null, !0),
            !0) : !1
        },
        _animateZoom: function(t, e, i, n, s, a) {
            this._animatingZoom = !0,
            o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"),
            this._animateToCenter = t,
            this._animateToZoom = e,
            o.Draggable && (o.Draggable._disabled = !0),
            this.fire("zoomanim", {
                center: t,
                zoom: e,
                origin: i,
                scale: n,
                delta: s,
                backwards: a
            })
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom = !1,
            o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"),
            this._resetView(this._animateToCenter, this._animateToZoom, !0, !0),
            o.Draggable && (o.Draggable._disabled = !1)
        }
    } : {}),
    o.TileLayer.include({
        _animateZoom: function(t) {
            this._animating || (this._animating = !0,
            this._prepareBgBuffer());
            var e = this._bgBuffer
              , i = o.DomUtil.TRANSFORM
              , n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i]
              , s = o.DomUtil.getScaleString(t.scale, t.origin);
            e.style[i] = t.backwards ? s + " " + n : n + " " + s
        },
        _endZoomAnim: function() {
            var t = this._tileContainer
              , e = this._bgBuffer;
            t.style.visibility = "",
            t.parentNode.appendChild(t),
            o.Util.falseFn(e.offsetWidth),
            this._animating = !1
        },
        _clearBgBuffer: function() {
            var t = this._map;
            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "",
            this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
        },
        _prepareBgBuffer: function() {
            var t = this._tileContainer
              , e = this._bgBuffer
              , i = this._getLoadedTilesPercentage(e)
              , n = this._getLoadedTilesPercentage(t);
            return e && i > .5 && .5 > n ? (t.style.visibility = "hidden",
            this._stopLoadingImages(t),
            void 0) : (e.style.visibility = "hidden",
            e.style[o.DomUtil.TRANSFORM] = "",
            this._tileContainer = e,
            e = this._bgBuffer = t,
            this._stopLoadingImages(e),
            clearTimeout(this._clearBgBufferTimer),
            void 0)
        },
        _getLoadedTilesPercentage: function(t) {
            var e, i, n = t.getElementsByTagName("img"), o = 0;
            for (e = 0,
            i = n.length; i > e; e++)
                n[e].complete && o++;
            return o / i
        },
        _stopLoadingImages: function(t) {
            var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
            for (e = 0,
            i = s.length; i > e; e++)
                n = s[e],
                n.complete || (n.onload = o.Util.falseFn,
                n.onerror = o.Util.falseFn,
                n.src = o.Util.emptyImageUrl,
                n.parentNode.removeChild(n))
        }
    }),
    o.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: 1 / 0,
            timeout: 1e4,
            maximumAge: 0,
            enableHighAccuracy: !1
        },
        locate: function(t) {
            if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t),
            !navigator.geolocation)
                return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }),
                this;
            var e = o.bind(this._handleGeolocationResponse, this)
              , i = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
            this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function(t) {
            var e = t.code
              , i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        },
        _handleGeolocationResponse: function(t) {
            var e = t.coords.latitude
              , i = t.coords.longitude
              , n = new o.LatLng(e,i)
              , s = 180 * t.coords.accuracy / 40075017
              , a = s / Math.cos(o.LatLng.DEG_TO_RAD * e)
              , r = o.latLngBounds([e - s, i - a], [e + s, i + a])
              , h = this._locateOptions;
            if (h.setView) {
                var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
                this.setView(n, l)
            }
            var u = {
                latlng: n,
                bounds: r,
                timestamp: t.timestamp
            };
            for (var c in t.coords)
                "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
            this.fire("locationfound", u)
        }
    })
}(window, document);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function(window, document, $, undefined) {
    "use strict";

    var H = $("html")
      , W = $(window)
      , D = $(document)
      , F = $.fancybox = function() {
        F.open.apply(this, arguments);
    }
      , IE = navigator.userAgent.match(/msie/i)
      , didUpdate = null
      , isTouch = document.createTouch !== undefined
      ,
    isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    }
      , isString = function(str) {
        return str && $.type(str) === "string";
    }
      , isPercentage = function(str) {
        return isString(str) && str.indexOf('%') > 0;
    }
      , isScrollable = function(el) {
        return ( el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight))) ;
    }
      , getScalar = function(orig, dim) {
        var value = parseInt(orig, 10) || 0;

        if (dim && isPercentage(orig)) {
            value = F.getViewport()[dim] / 100 * value;
        }

        return Math.ceil(value);
    }
      , getValue = function(value, dim) {
        return getScalar(value, dim) + 'px';
    };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto',
            // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left',
                    // enter
                    34: 'up',
                    // page down
                    39: 'left',
                    // right arrow
                    40: 'up'// down arrow
                },
                prev: {
                    8: 'right',
                    // backspace
                    33: 'down',
                    // page up
                    37: 'right',
                    // left arrow
                    38: 'down'// up arrow
                },
                close: [27],
                // escape key
                play: [32],
                // space - start/stop slideshow
                toggle: [70]// letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade',
            // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade',
            // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic',
            // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic',
            // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: $.noop,
            // If canceling
            beforeLoad: $.noop,
            // Before loading
            afterLoad: $.noop,
            // After loading
            beforeShow: $.noop,
            // Before changing in current item
            afterShow: $.noop,
            // After opening
            beforeChange: $.noop,
            // Before changing gallery item
            beforeClose: $.noop,
            // Before closing
            afterClose: $.noop // After closing
        },

        //Current state
        group: {},
        // Selected group
        opts: {},
        // Group options
        previous: null,
        // Previous element
        coming: null,
        // Element being loaded
        current: null,
        // Currently loaded element
        isActive: false,
        // Is activated
        isOpen: false,
        // Is currently open
        isOpened: false,
        // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
		 *	Static methods
		 */

        open: function(group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function(i, element) {
                var obj = {}, href, title, title2, content, type, rez, hrefParts, selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('data-title') || element.attr('title'),
                            title2: element.attr('data-title2'),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';
                title2 = opts.title2 !== undefined ? opts.title2 : obj.title2 || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href);
                            //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    title2: title2,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function() {
            var coming = F.coming;

            if (!coming || false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function(event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function(action) {
            var clear = function() {
                clearTimeout(F.player.timer);
            }
              , set = function() {
                clear();

                if (F.current && F.player.isActive) {
                    F.player.timer = setTimeout(F.next, F.current.playSpeed);
                }
            }
              , stop = function() {
                clear();

                D.unbind('.player');

                F.player.isActive = false;

                F.trigger('onPlayEnd');
            }
              , start = function() {
                if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                    F.player.isActive = true;

                    D.bind({
                        'onCancel.player beforeClose.player': stop,
                        'onUpdate.player': set,
                        'beforeLoad.player': clear
                    });

                    set();

                    F.trigger('onPlayStart');
                }
            };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function(index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(e, onlyAbsolute) {
            var current = F.current, wrap = current ? current.wrap : null, pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function(e) {
            var type = (e && e.type)
              , anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function() {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function() {
            var el, viewport;

            F.hideLoading();

            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },

        getViewport: function() {
            var locked = (F.current && F.current.locked) || false
              , rez = {
                x: W.scrollLeft(),
                y: W.scrollTop()
            };

            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function() {
            var current = F.current, keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode
                      , target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null
                      , parent = $(target)
                      , canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;

            if (!obj) {
                return;
            }

            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }

            if (ret === false) {
                return false;
            }

            if (obj.helpers) {
                $.each(obj.helpers, function(helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }

            D.trigger(event);
        },

        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function(index) {
            var coming = {}, obj, href, type, margin, padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function(type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function() {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            }
            ;

            img.onerror = function() {
                this.onload = this.onerror = null;

                F._error('image');
            }
            ;

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function() {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming
              , iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function() {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group = F.group, current = F.current, len = group.length, cnt = current.preload ? Math.min(current.preload, len - 1) : 0, item, i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function() {
            var coming = F.coming, previous = F.current, placeholder = 'fancybox-placeholder', current, content, type, scrolling, href, embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
            case 'inline':
            case 'ajax':
            case 'html':
                if (current.selector) {
                    content = $('<div>').html(content).find(current.selector);

                } else if (isQuery(content)) {
                    if (!content.data(placeholder)) {
                        content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                    }

                    content = content.show().detach();

                    current.wrap.bind('onReset', function() {
                        if ($(this).find(content).length) {
                            content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                        }
                    });
                }
                break;

            case 'image':
                content = current.tpl.image.replace('{href}', href);
                break;

            case 'swf':
                content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                embed = '';

                $.each(current.swf, function(name, val) {
                    content += '<param name="' + name + '" value="' + val + '"></param>';
                    embed += ' ' + name + '="' + val + '"';
                });

                content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function() {
            var viewport = F.getViewport(), steps = 0, canShrink = false, canExpand = false, wrap = F.wrap, skin = F.skin, inner = F.inner, current = F.current, width = current.width, height = current.height, minWidth = current.minWidth, minHeight = current.minHeight, maxWidth = current.maxWidth, maxHeight = current.maxHeight, scrolling = current.scrolling, scrollOut = current.scrollOutside ? current.scrollbarWidth : 0, margin = current.margin, wMargin = getScalar(margin[1] + margin[3]), hMargin = getScalar(margin[0] + margin[2]), wPadding, hPadding, wSpace, hSpace, origWidth, origHeight, origMaxWidth, origMaxHeight, ratio, width_, height_, maxWidth_, maxHeight_, iframe, body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function(onlyAbsolute) {
            var current = F.current
              , viewport = F.getViewport()
              , margin = current.margin
              , width = F.wrap.width() + margin[1] + margin[3]
              , height = F.wrap.height() + margin[0] + margin[2]
              , rez = {
                position: 'absolute',
                top: margin[0],
                left: margin[3]
            };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function() {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play();
            }
        },

        _afterZoomOut: function(obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
	 *	Default transitions
	 */

    F.transitions = {
        getOrigPosition: function() {
            var current = F.current
              , element = current.element
              , orig = current.orig
              , pos = {}
              , width = 50
              , height = 50
              , hPadding = current.hPadding
              , wPadding = current.wPadding
              , viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function(now, fx) {
            var ratio, padding, value, prop = fx.prop, current = F.current, wrapSpace = current.wrapSpace, skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function() {
            var current = F.current
              , startPos = current.pos
              , effect = current.openEffect
              , elastic = effect === 'elastic'
              , endPos = $.extend({
                opacity: 1
            }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function() {
            var current = F.current
              , effect = current.closeEffect
              , elastic = effect === 'elastic'
              , endPos = {
                opacity: 0.1
            };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function() {
            var current = F.current, effect = current.nextEffect, startPos = current.pos, endPos = {
                opacity: 1
            }, direction = F.direction, distance = 200, field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function() {
            var previous = F.previous
              , effect = previous.prevEffect
              , endPos = {
                opacity: 0.1
            }
              , direction = F.direction
              , distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
	 *	Overlay helper
	 */

    F.helpers.overlay = {
        defaults: {
            closeClick: true,
            // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200,
            // duration of fadeOut animation
            showEarly: true,
            // indicates if should be opened immediately or wait until the content is ready
            css: {},
            // custom CSS properties
            locked: !isTouch,
            // if true, the content will be locked into overlay
            fixed: true // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null,
        // current handle
        fixed: false,
        // indicates if the overlay has position "fixed"
        el: $('html'),
        // element that contains "the lock"

        // Public methods
        create: function(opts) {
            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function(opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function() {
            var scrollV, scrollH;

            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.removeClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function() {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }

                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function(opts, obj) {
            var scrollV, scrollH;

            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function() {
                        return ( $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap")) ;
                    }).addClass('fancybox-margin');

                    this.el.addClass('fancybox-margin');
                }

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            this.open(opts);
        },

        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function(opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            //if (this.overlay && !F.isActive) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };

    /*
	 *	Title helper
	 */

    F.helpers.title = {
        defaults: {
            type: 'float',
            // 'float', 'inside', 'outside' or 'over',
            position: 'bottom'// 'top' or 'bottom'
        },

        beforeShow: function(opts) {
            var current = F.current, text = current.title, text2 = current.title2, type = opts.type, title, title2, target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
            title2 = $('<div class="fancybox-title fancybox-title2 fancybox-title-' + type + '-wrap">' + text2 + '</div>');

            switch (type) {
            case 'inside':
                target = F.skin;
                break;

            case 'outside':
                target = F.wrap;
                break;

            case 'over':
                target = F.inner;
                break;

            default:
                // 'float'
                target = F.skin;

                title.appendTo('body');

                if (IE) {
                    title.width(title.width());
                }

                title.wrapInner('<span class="child"></span>');

                //Increase bottom margin so this title will also fit into viewport
                F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                break;
            }

            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
            title2['appendTo'](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function(options) {
        var index, that = $(this), selector = this.selector || '', run = function(e) {
            var what = $(this).blur(), idx = index, relType, relVal;

            if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                relType = options.groupAttr || 'data-fancybox-group';
                relVal = what.attr(relType);

                if (!relVal) {
                    relType = 'rel';
                    relVal = what.get(0)[relType];
                }

                if (relVal && relVal !== '' && relVal !== 'nofollow') {
                    what = selector.length ? $(selector) : that;
                    what = what.filter('[' + relType + '="' + relVal + '"]');
                    idx = what.index(this);
                }

                options.index = idx;

                // Stop an event from bubbling if everything is fine
                if (F.open(what, options) !== false) {
                    e.preventDefault();
                }
            }
        };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    }
    ;

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body')
                  , child = parent.children()
                  , width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            }
            ;
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body')
                  , fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function($) {
    "use strict";

    //Shortcut for fancyBox object
    var F = $.fancybox
      , format = function(url, rez, params) {
        params = params || '';

        if ($.type(params) === "object") {
            params = $.param(params, true);
        }

        $.each(rez, function(key, value) {
            url = url.replace('$' + key, value || '');
        });

        if (params.length) {
            url += (url.indexOf('?') > 0 ? '&' : '?') + params;
        }

        return url;
    };

    //Add helper object
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function(rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, true);

                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/?size=l'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function(rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },

        beforeLoad: function(opts, obj) {
            var url = obj.href || '', type = false, what, item, rez, params;

            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[what];
                    rez = url.match(item.matcher);

                    if (rez) {
                        type = item.type;
                        params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));

                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);

                        break;
                    }
                }
            }

            if (type) {
                obj.href = url;
                obj.type = type;

                obj.autoHeight = false;
            }
        }
    };

}(jQuery));
var maps, videos;

maps = {
    init: function() {
        var map = L.map('map', {
            scrollWheelZoom: false
        }).setView([39.7466, -104.99093], 17);
        var marker, icon;

        L.tileLayer('http://{s}.tile.cloudmade.com/332a960d508b496697302dfb759b6a1c/1714/256/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
        }).addTo(map);

        icon = L.icon({
            iconUrl: '/_themes/uxim14/img/leaflet/marker-icon.png',
            iconRetinaUrl: '/_themes/uxim14/img/leaflet/marker-icon-2x.png',
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            popupAnchor: [3, -36],
            shadowUrl: '/_themes/uxim14/img/leaflet/marker-shadow.png',
            shadowRetinaUrl: '/_themes/uxim14/img/leaflet/marker-shadow.png',
            shadowSize: [39, 18],
            shadowAnchor: [13, 20]
        });

        marker = L.marker([39.7464, -104.99095], {
            icon: icon
        }).addTo(map);
        marker.bindPopup("<h3><a href='http://www.marriott.com/hotels/travel/dendt-denver-marriott-city-center/'>Denver Marriott City Center</a></h3><p>1701 California Street<br>Denver, CO 80201<br>1-800-228-9290</p><p class='sub'><a href='#'>Get Directions</a></p>").openPopup();
    }
};

videos = {
    init: function() {
        var hash, slug;

        $('a.modal-video').fancybox({
            openEffect: 'elastic',
            openEasing: 'easeOutCubic',
            closeEffect: 'elastic',
            closeEasing: 'easeOutQuad',
            speedIn: 140,
            speedOut: 140,
            width: 800,
            height: 450,
            aspectRatio: true,
            helpers: {
                media: {
                    vimeo: {
                        params: {
                            autoplay: 0
                        }
                    }
                },
                title: {
                    type: 'inside',
                    position: 'top'
                }
            }
        });

        // look for hashes on homepage 
        hash = document.location.hash.substr(1);
        if (hash) {
            // found a hash, is this triggering a video?
            if (hash.substring(0, 6).toLowerCase() === 'watch-') {
                // homepage hash found
                slug = hash.substr(6);

                $('a#' + slug + '-video').click();
            } else if (hash.substring(0, 5).toLowerCase() === 'watch') {
                // workshop hash found
                $('a.modal-video').click();
            }
        }

        $('body').on('click', 'input.select-it', function() {
            $(this).select();
        });
    }
};

$(document).ready(function() {
    if ($("#map").length) {
        maps.init();
    }

    videos.init();

    // smooth scrolling
    $("a.smooth").smoothScroll({
        speed: 760,
        easing: "easeInOutCubic",
        afterScroll: function() {
            window.location.href = $(this).eq(0).attr("href");
        }
    });
});
