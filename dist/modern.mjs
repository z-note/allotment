function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import e, { useRef as t, useState as i, useEffect as n, useCallback as s, useMemo as r, useLayoutEffect as o, forwardRef as a, useImperativeHandle as u } from "react";
var h,
  c = {};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
h = {
  get exports() {
    return c;
  },
  set exports(e) {
    c = e;
  }
}, function () {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = [], n = 0; n < arguments.length; n++) {
      var s = arguments[n];
      if (s) {
        var r = typeof s;
        if ("string" === r || "number" === r) i.push(s);else if (Array.isArray(s)) {
          if (s.length) {
            var o = t.apply(null, s);
            o && i.push(o);
          }
        } else if ("object" === r) if (s.toString === Object.prototype.toString) for (var a in s) e.call(s, a) && s[a] && i.push(a);else i.push(s.toString());
      }
    }
    return i.join(" ");
  }
  h.exports ? (t.default = t, h.exports = t) : window.classNames = t;
}();
var l = c,
  f = /^\s+|\s+$/g,
  m = /^[-+]0x[0-9a-f]+$/i,
  d = /^0b[01]+$/i,
  p = /^0o[0-7]+$/i,
  v = parseInt,
  y = Object.prototype.toString;
function b(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function z(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && "[object Symbol]" == y.call(e);
  }(e)) return NaN;
  if (b(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = b(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(f, "");
  var i = d.test(e);
  return i || p.test(e) ? v(e.slice(2), i ? 2 : 8) : m.test(e) ? NaN : +e;
}
var g = function g(e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = z(i)) == i ? i : 0), void 0 !== t && (t = (t = z(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(z(e), t, i);
  },
  w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  S = {};
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    n = 9007199254740991,
    s = "[object Arguments]",
    r = "[object Array]",
    o = "[object Boolean]",
    a = "[object Date]",
    u = "[object Error]",
    h = "[object Function]",
    c = "[object Map]",
    l = "[object Number]",
    f = "[object Object]",
    m = "[object Promise]",
    d = "[object RegExp]",
    p = "[object Set]",
    v = "[object String]",
    y = "[object Symbol]",
    b = "[object WeakMap]",
    z = "[object ArrayBuffer]",
    g = "[object DataView]",
    S = /^\[object .+?Constructor\]$/,
    _ = /^(?:0|[1-9]\d*)$/,
    I = {};
  I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[s] = I[r] = I[z] = I[o] = I[g] = I[a] = I[u] = I[h] = I[c] = I[l] = I[f] = I[d] = I[p] = I[v] = I[b] = !1;
  var x = "object" == typeof w && w && w.Object === Object && w,
    V = "object" == typeof self && self && self.Object === Object && self,
    E = x || V || Function("return this")(),
    j = t && !t.nodeType && t,
    N = j && e && !e.nodeType && e,
    L = N && N.exports === j,
    O = L && x.process,
    M = function () {
      try {
        return O && O.binding && O.binding("util");
      } catch (e) {}
    }(),
    P = M && M.isTypedArray;
  function D(e, t) {
    for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  function A(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, n) {
      i[++t] = [n, e];
    }), i;
  }
  function T(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var C,
    F,
    k,
    $ = Array.prototype,
    H = Function.prototype,
    Y = Object.prototype,
    B = E["__core-js_shared__"],
    R = H.toString,
    W = Y.hasOwnProperty,
    G = (C = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "",
    U = Y.toString,
    X = RegExp("^" + R.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    J = L ? E.Buffer : void 0,
    K = E.Symbol,
    Z = E.Uint8Array,
    Q = Y.propertyIsEnumerable,
    q = $.splice,
    ee = K ? K.toStringTag : void 0,
    te = Object.getOwnPropertySymbols,
    ie = J ? J.isBuffer : void 0,
    ne = (F = Object.keys, k = Object, function (e) {
      return F(k(e));
    }),
    se = Me(E, "DataView"),
    re = Me(E, "Map"),
    oe = Me(E, "Promise"),
    ae = Me(E, "Set"),
    ue = Me(E, "WeakMap"),
    he = Me(Object, "create"),
    ce = Te(se),
    le = Te(re),
    fe = Te(oe),
    me = Te(ae),
    de = Te(ue),
    pe = K ? K.prototype : void 0,
    ve = pe ? pe.valueOf : void 0;
  function ye(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function be(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function ze(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function ge(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.__data__ = new ze(); ++t < i;) this.add(e[t]);
  }
  function we(e) {
    var t = this.__data__ = new be(e);
    this.size = t.size;
  }
  function Se(e, t) {
    var i = ke(e),
      n = !i && Fe(e),
      s = !i && !n && $e(e),
      r = !i && !n && !s && We(e),
      o = i || n || s || r,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var h in e) !t && !W.call(e, h) || o && ("length" == h || s && ("offset" == h || "parent" == h) || r && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Ae(h, u)) || a.push(h);
    return a;
  }
  function _e(e, t) {
    for (var i = e.length; i--;) if (Ce(e[i][0], t)) return i;
    return -1;
  }
  function Ie(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ee && ee in Object(e) ? function (e) {
      var t = W.call(e, ee),
        i = e[ee];
      try {
        e[ee] = void 0;
        var n = !0;
      } catch (e) {}
      var s = U.call(e);
      n && (t ? e[ee] = i : delete e[ee]);
      return s;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function xe(e) {
    return Re(e) && Ie(e) == s;
  }
  function Ve(e, t, i, n, h) {
    return e === t || (null == e || null == t || !Re(e) && !Re(t) ? e != e && t != t : function (e, t, i, n, h, m) {
      var b = ke(e),
        w = ke(t),
        S = b ? r : De(e),
        _ = w ? r : De(t),
        I = (S = S == s ? f : S) == f,
        x = (_ = _ == s ? f : _) == f,
        V = S == _;
      if (V && $e(e)) {
        if (!$e(t)) return !1;
        b = !0, I = !1;
      }
      if (V && !I) return m || (m = new we()), b || We(e) ? Ne(e, t, i, n, h, m) : function (e, t, i, n, s, r, h) {
        switch (i) {
          case g:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case z:
            return !(e.byteLength != t.byteLength || !r(new Z(e), new Z(t)));
          case o:
          case a:
          case l:
            return Ce(+e, +t);
          case u:
            return e.name == t.name && e.message == t.message;
          case d:
          case v:
            return e == t + "";
          case c:
            var f = A;
          case p:
            var m = 1 & n;
            if (f || (f = T), e.size != t.size && !m) return !1;
            var b = h.get(e);
            if (b) return b == t;
            n |= 2, h.set(e, t);
            var w = Ne(f(e), f(t), n, s, r, h);
            return h.delete(e), w;
          case y:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, n, h, m);
      if (!(1 & i)) {
        var E = I && W.call(e, "__wrapped__"),
          j = x && W.call(t, "__wrapped__");
        if (E || j) {
          var N = E ? e.value() : e,
            L = j ? t.value() : t;
          return m || (m = new we()), h(N, L, i, n, m);
        }
      }
      if (!V) return !1;
      return m || (m = new we()), function (e, t, i, n, s, r) {
        var o = 1 & i,
          a = Le(e),
          u = a.length,
          h = Le(t).length;
        if (u != h && !o) return !1;
        var c = u;
        for (; c--;) {
          var l = a[c];
          if (!(o ? l in t : W.call(t, l))) return !1;
        }
        var f = r.get(e);
        if (f && r.get(t)) return f == t;
        var m = !0;
        r.set(e, t), r.set(t, e);
        var d = o;
        for (; ++c < u;) {
          var p = e[l = a[c]],
            v = t[l];
          if (n) var y = o ? n(v, p, l, t, e, r) : n(p, v, l, e, t, r);
          if (!(void 0 === y ? p === v || s(p, v, i, n, r) : y)) {
            m = !1;
            break;
          }
          d || (d = "constructor" == l);
        }
        if (m && !d) {
          var b = e.constructor,
            z = t.constructor;
          b == z || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof z && z instanceof z || (m = !1);
        }
        return r.delete(e), r.delete(t), m;
      }(e, t, i, n, h, m);
    }(e, t, i, n, Ve, h));
  }
  function Ee(e) {
    return !(!Be(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Te(e));
  }
  function je(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || Y, t !== n) return ne(e);
    var t,
      i,
      n,
      s = [];
    for (var r in Object(e)) W.call(e, r) && "constructor" != r && s.push(r);
    return s;
  }
  function Ne(e, t, i, n, s, r) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var h = r.get(e);
    if (h && r.get(t)) return h == t;
    var c = -1,
      l = !0,
      f = 2 & i ? new ge() : void 0;
    for (r.set(e, t), r.set(t, e); ++c < a;) {
      var m = e[c],
        d = t[c];
      if (n) var p = o ? n(d, m, c, t, e, r) : n(m, d, c, e, t, r);
      if (void 0 !== p) {
        if (p) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!D(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || s(m, e, i, n, r))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== d && !s(m, d, i, n, r)) {
        l = !1;
        break;
      }
    }
    return r.delete(e), r.delete(t), l;
  }
  function Le(e) {
    return function (e, t, i) {
      var n = t(e);
      return ke(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, s = e.length; ++i < n;) e[s + i] = t[i];
        return e;
      }(n, i(e));
    }(e, Ge, Pe);
  }
  function Oe(e, t) {
    var i,
      n,
      s = e.__data__;
    return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? s["string" == typeof t ? "string" : "hash"] : s.map;
  }
  function Me(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Ee(i) ? i : void 0;
  }
  ye.prototype.clear = function () {
    this.__data__ = he ? he(null) : {}, this.size = 0;
  }, ye.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, ye.prototype.get = function (e) {
    var t = this.__data__;
    if (he) {
      var n = t[e];
      return n === i ? void 0 : n;
    }
    return W.call(t, e) ? t[e] : void 0;
  }, ye.prototype.has = function (e) {
    var t = this.__data__;
    return he ? void 0 !== t[e] : W.call(t, e);
  }, ye.prototype.set = function (e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = he && void 0 === t ? i : t, this;
  }, be.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, be.prototype.delete = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : q.call(t, i, 1), --this.size, !0);
  }, be.prototype.get = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return i < 0 ? void 0 : t[i][1];
  }, be.prototype.has = function (e) {
    return _e(this.__data__, e) > -1;
  }, be.prototype.set = function (e, t) {
    var i = this.__data__,
      n = _e(i, e);
    return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
  }, ze.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (re || be)(),
      string: new ye()
    };
  }, ze.prototype.delete = function (e) {
    var t = Oe(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }, ze.prototype.get = function (e) {
    return Oe(this, e).get(e);
  }, ze.prototype.has = function (e) {
    return Oe(this, e).has(e);
  }, ze.prototype.set = function (e, t) {
    var i = Oe(this, e),
      n = i.size;
    return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
  }, ge.prototype.add = ge.prototype.push = function (e) {
    return this.__data__.set(e, i), this;
  }, ge.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.clear = function () {
    this.__data__ = new be(), this.size = 0;
  }, we.prototype.delete = function (e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }, we.prototype.get = function (e) {
    return this.__data__.get(e);
  }, we.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof be) {
      var n = i.__data__;
      if (!re || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new ze(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Pe = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, s = 0, r = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (r[s++] = o);
        }
        return r;
      }(te(e), function (t) {
        return Q.call(e, t);
      }));
    } : function () {
      return [];
    },
    De = Ie;
  function Ae(e, t) {
    return !!(t = null == t ? n : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Te(e) {
    if (null != e) {
      try {
        return R.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  function Ce(e, t) {
    return e === t || e != e && t != t;
  }
  (se && De(new se(new ArrayBuffer(1))) != g || re && De(new re()) != c || oe && De(oe.resolve()) != m || ae && De(new ae()) != p || ue && De(new ue()) != b) && (De = function (e) {
    var t = Ie(e),
      i = t == f ? e.constructor : void 0,
      n = i ? Te(i) : "";
    if (n) switch (n) {
      case ce:
        return g;
      case le:
        return c;
      case fe:
        return m;
      case me:
        return p;
      case de:
        return b;
    }
    return t;
  });
  var Fe = xe(function () {
      return arguments;
    }()) ? xe : function (e) {
      return Re(e) && W.call(e, "callee") && !Q.call(e, "callee");
    },
    ke = Array.isArray;
  var $e = ie || function () {
    return !1;
  };
  function He(e) {
    if (!Be(e)) return !1;
    var t = Ie(e);
    return t == h || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  }
  function Ye(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
  }
  function Be(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  }
  function Re(e) {
    return null != e && "object" == typeof e;
  }
  var We = P ? function (e) {
    return function (t) {
      return e(t);
    };
  }(P) : function (e) {
    return Re(e) && Ye(e.length) && !!I[Ie(e)];
  };
  function Ge(e) {
    return null != (t = e) && Ye(t.length) && !He(t) ? Se(e) : je(e);
    var t;
  }
  e.exports = function (e, t) {
    return Ve(e, t);
  };
}({
  get exports() {
    return S;
  },
  set exports(e) {
    S = e;
  }
}, S);
var _ = S;
function I(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function x(e) {
  void 0 === e && (e = {});
  var o = e.onResize,
    a = t(void 0);
  a.current = o;
  var u = e.round || Math.round,
    h = t(),
    c = i({
      width: void 0,
      height: void 0
    }),
    l = c[0],
    f = c[1],
    m = t(!1);
  n(function () {
    return m.current = !1, function () {
      m.current = !0;
    };
  }, []);
  var d = t({
      width: void 0,
      height: void 0
    }),
    p = function (e, i) {
      var r = t(null),
        o = t(null);
      o.current = i;
      var a = t(null);
      n(function () {
        u();
      });
      var u = s(function () {
        var t = a.current,
          i = o.current,
          n = t || (i ? i instanceof Element ? i : i.current : null);
        r.current && r.current.element === n && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
          element: n,
          subscriber: e,
          cleanup: n ? e(n) : void 0
        });
      }, [e]);
      return n(function () {
        return function () {
          r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
        };
      }, []), s(function (e) {
        a.current = e, u();
      }, [u]);
    }(s(function (t) {
      return h.current && h.current.box === e.box && h.current.round === u || (h.current = {
        box: e.box,
        round: u,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            s = I(i, n, "inlineSize"),
            r = I(i, n, "blockSize"),
            o = s ? u(s) : void 0,
            h = r ? u(r) : void 0;
          if (d.current.width !== o || d.current.height !== h) {
            var c = {
              width: o,
              height: h
            };
            d.current.width = o, d.current.height = h, a.current ? a.current(c) : m.current || f(c);
          }
        })
      }), h.current.instance.observe(t, {
        box: e.box
      }), function () {
        h.current && h.current.instance.unobserve(t);
      };
    }, [e.box, u]), e.ref);
  return r(function () {
    return {
      ref: p,
      width: l.width,
      height: l.height
    };
  }, [p, l.width, l.height]);
}
var V = "allotment-module_splitView__L-yRc",
  E = "allotment-module_sashContainer__fzwJF",
  j = "allotment-module_splitViewContainer__rQnVa",
  N = "allotment-module_splitViewView__MGZ6O",
  L = "allotment-module_vertical__WSwwa",
  O = "allotment-module_horizontal__7doS8",
  M = "allotment-module_separatorBorder__x-rDS";
let P,
  D = !1,
  A = !1;
"object" == typeof navigator && (P = navigator.userAgent, A = P.indexOf("Macintosh") >= 0, D = (P.indexOf("Macintosh") >= 0 || P.indexOf("iPad") >= 0 || P.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const T = D,
  C = A,
  F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o : n;
class k {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(e) {
    this._size = e;
  }
}
function $(e, t) {
  const i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var H = {};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function s(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function r(e, t, n, r, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new s(n, r || e, o),
      u = i ? i + t : t;
    return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
  }
  function o(e, t) {
    0 == --e._eventsCount ? e._events = new n() : delete e._events[t];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = Object.create(null), new n().__proto__ || (i = !1)), a.prototype.eventNames = function () {
    var e,
      n,
      s = [];
    if (0 === this._eventsCount) return s;
    for (n in e = this._events) t.call(e, n) && s.push(i ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var s = 0, r = n.length, o = new Array(r); s < r; s++) o[s] = n[s].fn;
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, s, r, o) {
    var a = i ? i + e : e;
    if (!this._events[a]) return !1;
    var u,
      h,
      c = this._events[a],
      l = arguments.length;
    if (c.fn) {
      switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
        case 1:
          return c.fn.call(c.context), !0;
        case 2:
          return c.fn.call(c.context, t), !0;
        case 3:
          return c.fn.call(c.context, t, n), !0;
        case 4:
          return c.fn.call(c.context, t, n, s), !0;
        case 5:
          return c.fn.call(c.context, t, n, s, r), !0;
        case 6:
          return c.fn.call(c.context, t, n, s, r, o), !0;
      }
      for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
      c.fn.apply(c.context, u);
    } else {
      var f,
        m = c.length;
      for (h = 0; h < m; h++) switch (c[h].once && this.removeListener(e, c[h].fn, void 0, !0), l) {
        case 1:
          c[h].fn.call(c[h].context);
          break;
        case 2:
          c[h].fn.call(c[h].context, t);
          break;
        case 3:
          c[h].fn.call(c[h].context, t, n);
          break;
        case 4:
          c[h].fn.call(c[h].context, t, n, s);
          break;
        default:
          if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
          c[h].fn.apply(c[h].context, u);
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return r(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return r(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, s) {
    var r = i ? i + e : e;
    if (!this._events[r]) return this;
    if (!t) return o(this, r), this;
    var a = this._events[r];
    if (a.fn) a.fn !== t || s && !a.once || n && a.context !== n || o(this, r);else {
      for (var u = 0, h = [], c = a.length; u < c; u++) (a[u].fn !== t || s && !a[u].once || n && a[u].context !== n) && h.push(a[u]);
      h.length ? this._events[r] = 1 === h.length ? h[0] : h : o(this, r);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}({
  get exports() {
    return H;
  },
  set exports(e) {
    H = e;
  }
});
function Y(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function B(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function R(e, t, i = 1) {
  const n = Math.max(0, Math.ceil((t - e) / i)),
    s = new Array(n);
  let r = -1;
  for (; ++r < n;) s[r] = e + r * i;
  return s;
}
var W = /^\s+|\s+$/g,
  G = /^[-+]0x[0-9a-f]+$/i,
  U = /^0b[01]+$/i,
  X = /^0o[0-7]+$/i,
  J = parseInt,
  K = "object" == typeof w && w && w.Object === Object && w,
  Z = "object" == typeof self && self && self.Object === Object && self,
  Q = K || Z || Function("return this")(),
  q = Object.prototype.toString,
  ee = Math.max,
  te = Math.min,
  ie = function ie() {
    return Q.Date.now();
  };
function ne(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function se(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && "[object Symbol]" == q.call(e);
  }(e)) return NaN;
  if (ne(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(W, "");
  var i = U.test(e);
  return i || X.test(e) ? J(e.slice(2), i ? 2 : 8) : G.test(e) ? NaN : +e;
}
var re = function re(e, t, i) {
    var n,
      s,
      r,
      o,
      a,
      u,
      h = 0,
      c = !1,
      l = !1,
      f = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function m(t) {
      var i = n,
        r = s;
      return n = s = void 0, h = t, o = e.apply(r, i);
    }
    function d(e) {
      return h = e, a = setTimeout(v, t), c ? m(e) : o;
    }
    function p(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - h >= r;
    }
    function v() {
      var e = ie();
      if (p(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? te(i, r - (e - h)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && n ? m(e) : (n = s = void 0, o);
    }
    function b() {
      var e = ie(),
        i = p(e);
      if (n = arguments, s = this, u = e, i) {
        if (void 0 === a) return d(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = se(t) || 0, ne(i) && (c = !!i.leading, r = (l = "maxWait" in i) ? ee(se(i.maxWait) || 0, t) : r, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), h = 0, n = u = s = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(ie());
    }, b;
  },
  oe = "sash-module_sash__K-9lB",
  ae = "sash-module_disabled__Hm-wx",
  ue = "sash-module_mac__Jf6OJ",
  he = "sash-module_vertical__pB-rs",
  ce = "sash-module_minimum__-UKxp",
  le = "sash-module_maximum__TCWxD",
  fe = "sash-module_horizontal__kFbiw",
  me = "sash-module_hover__80W6I",
  de = "sash-module_active__bJspD";
let pe, ve;
!function (e) {
  e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL";
}(pe || (pe = {})), function (e) {
  e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED";
}(ve || (ve = {}));
let ye = T ? 20 : 8;
const be = new H();
class ze extends H {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(ae, e === ve.Disabled), this.el.classList.toggle("dash-disabled", e === ve.Disabled), this.el.classList.toggle(ce, e === ve.Minimum), this.el.classList.toggle("sash-minimum", e === ve.Minimum), this.el.classList.toggle(le, e === ve.Maximum), this.el.classList.toggle("sash-maximum", e === ve.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = re(e => e.classList.add("sash-hover", me), this.hoverDelay), this._state = ve.Enabled, this.onPointerStart = e => {
      const t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", de), this.emit("start", n), this.el.setPointerCapture(e.pointerId);
      const s = e => {
          e.preventDefault();
          const n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", n);
        },
        r = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", de), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", r);
        };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", r);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(de) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", me)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", me);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", oe), this.el.dataset.testid = "sash", e.append(this.el), C && this.el.classList.add("sash-mac", ue), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === pe.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = ye, be.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : pe.Vertical, this.orientation === pe.Horizontal ? (this.el.classList.add("sash-horizontal", fe), this.el.classList.remove("sash-vertical", he)) : (this.el.classList.remove("sash-horizontal", fe), this.el.classList.add("sash-vertical", he)), this.layout();
  }
  layout() {
    if (this.orientation === pe.Vertical) {
      const e = this.layoutProvider;
      this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px", e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px");
    } else {
      const e = this.layoutProvider;
      this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px", e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let ge;
var we;
let Se;
(we = ge || (ge = {})).Distribute = {
  type: "distribute"
}, we.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, we.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
}, function (e) {
  e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH";
}(Se || (Se = {}));
class _e {
  constructor(e, t, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", N), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  set size(e) {
    this._size = e;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return void 0 === this._cachedVisibleSize;
  }
  setVisible(e, t) {
    e !== this.visible && (e ? (this.size = g(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(e) {
    this.container.style.pointerEvents = e ? "" : "none";
  }
  layout(e) {
    this.layoutContainer(e), this.view.layout(this.size, e);
  }
}
class Ie extends _e {
  layoutContainer(e) {
    this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
  }
}
class xe extends _e {
  layoutContainer(e) {
    this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
  }
}
class Ve extends H {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(e) {
    this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(e) {
    this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
  }
  constructor(e, t = {}, i) {
    var _t$orientation, _t$proportionalLayout;
    if (super(), this.onDidChange = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (const _e2 of this.viewItems) _e2.enabled = !0;
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : pe.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", E), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (const [_e3, _i] of t.descriptor.views.entries()) {
        const _t = _i.size,
          n = _i.container,
          s = _i.view;
        this.addView(n, s, _t, _e3, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, n = this.viewItems.length, s) {
    let r;
    r = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    const o = this.orientation === pe.Vertical ? new xe(e, t, r) : new Ie(e, t, r);
    if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
      const _e4 = this.orientation === pe.Vertical ? new ze(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: pe.Horizontal
        }) : new ze(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: pe.Vertical
        }),
        _t2 = this.orientation === pe.Vertical ? t => ({
          sash: _e4,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e4,
          start: t.startX,
          current: t.currentX
        });
      _e4.on("start", e => {
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
      }), _e4.on("change", e => this.onSashChange(_t2(e))), _e4.on("end", () => {
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e4));
      }), _e4.on("reset", () => {
        const t = this.sashItems.findIndex(t => t.sash === _e4),
          i = R(t, -1, -1),
          n = R(t + 1, this.viewItems.length),
          s = this.findFirstSnapIndex(i),
          r = this.findFirstSnapIndex(n);
        ("number" != typeof s || this.viewItems[s].visible) && ("number" != typeof r || this.viewItems[r].visible) && this.emit("sashreset", t);
      });
      const _i2 = {
        sash: _e4
      };
      this.sashItems.splice(n - 1, 0, _i2);
    }
    s || this.relayout(), s || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    const i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    const n = this.getViewCachedVisibleSize(t),
      s = void 0 === n ? this.getViewSize(t) : ge.Invisible(n),
      r = this.removeView(t);
    this.addView(e, r, s, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e = this.size) {
    const t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (let _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      const i = this.viewItems[_t4];
      i.size = g(Math.round(this.proportions[_t4] * e), i.minimumSize, i.maximumSize);
    } else {
      const i = R(0, this.viewItems.length),
        n = i.filter(e => this.viewItems[e].priority === Se.Low),
        s = i.filter(e => this.viewItems[e].priority === Se.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, n, s);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    const i = R(0, this.viewItems.length).filter(t => t !== e),
      n = [...i.filter(e => this.viewItems[e].priority === Se.Low), e],
      s = i.filter(e => this.viewItems[e].priority === Se.High),
      r = this.viewItems[e];
    t = Math.round(t), t = g(t, r.minimumSize, Math.min(r.maximumSize, this.size)), r.size = t, this.relayout(n, s);
  }
  resizeViews(e) {
    for (let t = 0; t < e.length; t++) {
      const i = this.viewItems[t];
      let n = e[t];
      n = Math.round(n), n = g(n, i.minimumSize, Math.min(i.maximumSize, this.size)), i.size = n;
    }
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(e) {
    return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
  }
  isViewVisible(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].visible;
  }
  setViewVisible(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const e = [];
    let t = 0;
    for (const _i3 of this.viewItems) _i3.maximumSize - _i3.minimumSize > 0 && (e.push(_i3), t += _i3.size);
    const i = Math.floor(t / e.length);
    for (const _t5 of e) _t5.size = g(i, _t5.minimumSize, _t5.maximumSize);
    const n = R(0, this.viewItems.length),
      s = n.filter(e => this.viewItems[e].priority === Se.Low),
      r = n.filter(e => this.viewItems[e].priority === Se.High);
    this.relayout(s, r);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    const i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: e,
    start: t
  }) {
    const i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      const t = this.viewItems.map(e => e.size);
      let n,
        s,
        r = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      const a = R(i, -1, -1),
        u = R(i + 1, this.viewItems.length),
        h = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        c = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      r = Math.max(h, f), o = Math.min(l, c);
      const m = this.findFirstSnapIndex(a),
        d = this.findFirstSnapIndex(u);
      if ("number" == typeof m) {
        const _e5 = this.viewItems[m],
          _t6 = Math.floor(_e5.viewMinimumSize / 2);
        n = {
          index: m,
          limitDelta: _e5.visible ? r - _t6 : r + _t6,
          size: _e5.size
        };
      }
      if ("number" == typeof d) {
        const _e6 = this.viewItems[d],
          _t7 = Math.floor(_e6.viewMinimumSize / 2);
        s = {
          index: d,
          limitDelta: _e6.visible ? o + _t7 : o - _t7,
          size: _e6.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: r,
        maxDelta: o,
        snapBefore: n,
        snapAfter: s
      };
    })(t);
  }
  onSashChange({
    current: e
  }) {
    const {
      index: t,
      start: i,
      sizes: n,
      minDelta: s,
      maxDelta: r,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    const u = e - i;
    this.resize(t, u, n, void 0, void 0, s, r, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    let t = 0;
    for (let i = 0; i < this.sashItems.length; i++) if (t += this.viewItems[i].size, this.sashItems[i].sash === e) return t;
    return 0;
  }
  resize(e, t, i = this.viewItems.map(e => e.size), n, s, r = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, u) {
    if (e < 0 || e >= this.viewItems.length) return 0;
    const h = R(e, -1, -1),
      c = R(e + 1, this.viewItems.length);
    if (s) for (const _e7 of s) Y(h, _e7), Y(c, _e7);
    if (n) for (const _e8 of n) B(h, _e8), B(c, _e8);
    const l = h.map(e => this.viewItems[e]),
      f = h.map(e => i[e]),
      m = c.map(e => this.viewItems[e]),
      d = c.map(e => i[e]),
      p = h.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = h.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      y = 0 === c.length ? Number.POSITIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      b = 0 === c.length ? Number.NEGATIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      z = Math.max(p, b, r),
      w = Math.min(y, v, o);
    let S = !1;
    if (a) {
      const _e9 = this.viewItems[a.index],
        _i4 = t >= a.limitDelta;
      S = _i4 !== _e9.visible, _e9.setVisible(_i4, a.size);
    }
    if (!S && u) {
      const _e10 = this.viewItems[u.index],
        _i5 = t < u.limitDelta;
      S = _i5 !== _e10.visible, _e10.setVisible(_i5, u.size);
    }
    if (S) return this.resize(e, t, i, n, s, r, o);
    for (let _e11 = 0, _i6 = t = g(t, z, w); _e11 < l.length; _e11++) {
      const _t8 = l[_e11],
        _n = g(f[_e11] + _i6, _t8.minimumSize, _t8.maximumSize);
      _i6 -= _n - f[_e11], _t8.size = _n;
    }
    for (let _e12 = 0, _i7 = t; _e12 < m.length; _e12++) {
      const _t9 = m[_e12],
        _n2 = g(d[_e12] - _i7, _t9.minimumSize, _t9.maximumSize);
      _i7 += _n2 - d[_e12], _t9.size = _n2;
    }
    return t;
  }
  distributeEmptySpace(e) {
    const t = this.viewItems.reduce((e, t) => e + t.size, 0);
    let i = this.size - t;
    const n = R(this.viewItems.length - 1, -1, -1);
    "number" == typeof e && B(n, e);
    for (let _e13 = 0; 0 !== i && _e13 < n.length; _e13++) {
      const _t10 = this.viewItems[n[_e13]],
        s = g(_t10.size + i, _t10.minimumSize, _t10.maximumSize);
      i -= s - _t10.size, _t10.size = s;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    let e = 0;
    for (const t of this.viewItems) t.layout(e), e += t.size;
    (_this$onDidChange = this.onDidChange) != null && _this$onDidChange.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    let e = !1;
    const t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    const i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      n = [...this.viewItems].reverse();
    e = !1;
    const s = n.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    const r = n.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    let o = 0;
    for (let _e14 = 0; _e14 < this.sashItems.length; _e14++) {
      const {
        sash: _n3
      } = this.sashItems[_e14];
      o += this.viewItems[_e14].size;
      const a = !(t[_e14] && r[_e14 + 1]),
        u = !(i[_e14] && s[_e14 + 1]);
      if (a && u) {
        const _i8 = R(_e14, -1, -1),
          _r = R(_e14 + 1, this.viewItems.length),
          _a = this.findFirstSnapIndex(_i8),
          _u = this.findFirstSnapIndex(_r),
          h = "number" == typeof _a && !this.viewItems[_a].visible,
          c = "number" == typeof _u && !this.viewItems[_u].visible;
        h && s[_e14] && (o > 0 || this.startSnappingEnabled) ? _n3.state = ve.Minimum : c && t[_e14] && (o < this.contentSize || this.endSnappingEnabled) ? _n3.state = ve.Maximum : _n3.state = ve.Disabled;
      } else _n3.state = a && !u ? ve.Minimum : !a && u ? ve.Maximum : ve.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (const t of e) {
      const _e15 = this.viewItems[t];
      if (_e15.visible && _e15.snap) return t;
    }
    for (const t of e) {
      const _e16 = this.viewItems[t];
      if (_e16.visible && _e16.maximumSize - _e16.minimumSize > 0) return;
      if (!_e16.visible && _e16.snap) return t;
    }
  }
}
class Ee {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class je {
  constructor(e, t) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Ne {
  getPreferredSize() {}
}
class Le {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if ("number" == typeof e) this.layoutStrategy = new Ee(e);else if ("string" == typeof e) {
      const t = e.trim();
      if ($(t, "%")) {
        const _e17 = Number(t.slice(0, -1)) / 100;
        this.layoutStrategy = new je(_e17, this.layoutService);
      } else if ($(t, "px")) {
        const _e18 = Number(t.slice(0, -2)) / 100;
        this.layoutStrategy = new Ee(_e18);
      } else if ("number" == typeof Number.parseFloat(t)) {
        const _e19 = Number.parseFloat(t);
        this.layoutStrategy = new Ee(_e19);
      } else this.layoutStrategy = new Ne();
    } else this.layoutStrategy = new Ne();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new Ee(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      const _e20 = t.preferredSize.trim();
      if ($(_e20, "%")) {
        const _t11 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new je(_t11, this.layoutService);
      } else if ($(_e20, "px")) {
        const _t12 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new Ee(_t12);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        const _t13 = Number.parseFloat(_e20);
        this.layoutStrategy = new Ee(_t13);
      } else this.layoutStrategy = new Ne();
    } else this.layoutStrategy = new Ne();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : Se.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function Oe(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
const Me = a(({
  className: t,
  children: i
}, n) => e.createElement("div", {
  ref: n,
  className: l("split-view-view", N, t)
}, i));
Me.displayName = "Allotment.Pane";
const Pe = a(({
  children: o,
  className: a,
  maxSize: h = 1 / 0,
  minSize: c = 30,
  proportionalLayout: f = !0,
  separator: m = !0,
  sizes: d,
  defaultSizes: p = d,
  snap: v = !1,
  vertical: y = !1,
  onChange: b,
  onReset: z,
  onVisibleChange: g
}, w) => {
  const S = t(null),
    I = t([]),
    E = t(new Map()),
    N = t(null),
    P = t(new Map()),
    D = t(new k()),
    A = t([]),
    [C, $] = i(!1);
  "production" !== process.env.NODE_ENV && d && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const H = r(() => e.Children.toArray(o).filter(e.isValidElement), [o]),
    Y = s(e => {
      var _A$current, _N$current;
      const t = (_A$current = A.current) == null ? void 0 : _A$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_N$current = N.current) != null && _N$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return u(w, () => ({
    reset: () => {
      if (z) z();else {
        var _N$current2;
        (_N$current2 = N.current) == null ? void 0 : _N$current2.distributeViewSizes();
        for (let e = 0; e < A.current.length; e++) Y(e);
      }
    },
    resize: e => {
      var _N$current3;
      (_N$current3 = N.current) == null ? void 0 : _N$current3.resizeViews(e);
    }
  })), F(() => {
    let e = !0;
    p && P.current.size !== p.length && (e = !1, console.warn(`Expected ${p.length} children based on defaultSizes but found ${P.current.size}`)), e && p && (I.current = H.map(e => e.key));
    const t = _extends({
      orientation: y ? pe.Vertical : pe.Horizontal,
      proportionalLayout: f
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          const i = E.current.get(I.current[t]),
            n = new Le(D.current, _extends({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i == null ? void 0 : i.minSize) != null ? _i$minSize : c,
              maximumSize: (_i$maxSize = i == null ? void 0 : i.maxSize) != null ? _i$maxSize : h,
              priority: (_i$priority = i == null ? void 0 : i.priority) != null ? _i$priority : Se.Normal
            }, (i == null ? void 0 : i.preferredSize) && {
              preferredSize: i == null ? void 0 : i.preferredSize
            }, {
              snap: (_i$snap = i == null ? void 0 : i.snap) != null ? _i$snap : v
            }));
          return A.current.push(n), {
            container: [...P.current.values()][t],
            size: e,
            view: n
          };
        })
      }
    });
    N.current = new Ve(S.current, t, b), N.current.on("sashDragStart", () => {
      var _S$current;
      (_S$current = S.current) == null ? void 0 : _S$current.classList.add("split-view-sash-dragging");
    }), N.current.on("sashDragEnd", () => {
      var _S$current2;
      (_S$current2 = S.current) == null ? void 0 : _S$current2.classList.remove("split-view-sash-dragging");
    }), N.current.on("sashchange", e => {
      if (g && N.current) {
        const _e21 = H.map(e => e.key);
        for (let t = 0; t < _e21.length; t++) {
          const i = E.current.get(_e21[t]);
          void 0 !== (i == null ? void 0 : i.visible) && i.visible !== N.current.isViewVisible(t) && g(t, N.current.isViewVisible(t));
        }
      }
    }), N.current.on("sashreset", e => {
      if (z) z();else {
        var _N$current4;
        if (Y(e)) return;
        if (Y(e + 1)) return;
        (_N$current4 = N.current) == null ? void 0 : _N$current4.distributeViewSizes();
      }
    });
    const i = N.current;
    return () => {
      i.dispose();
    };
  }, []), F(() => {
    if (C) {
      const e = H.map(e => e.key),
        t = [...I.current],
        i = e.filter(e => !I.current.includes(e)),
        n = e.filter(e => I.current.includes(e)),
        s = I.current.map(t => !e.includes(t));
      for (let _e22 = s.length - 1; _e22 >= 0; _e22--) {
        var _N$current5;
        s[_e22] && ((_N$current5 = N.current) != null && _N$current5.removeView(_e22), t.splice(_e22, 1), A.current.splice(_e22, 1));
      }
      for (const _n4 of i) {
        var _i9$minSize, _i9$maxSize, _i9$priority, _i9$snap, _N$current6;
        const _i9 = E.current.get(_n4),
          _s = new Le(D.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i9$minSize = _i9 == null ? void 0 : _i9.minSize) != null ? _i9$minSize : c,
            maximumSize: (_i9$maxSize = _i9 == null ? void 0 : _i9.maxSize) != null ? _i9$maxSize : h,
            priority: (_i9$priority = _i9 == null ? void 0 : _i9.priority) != null ? _i9$priority : Se.Normal
          }, (_i9 == null ? void 0 : _i9.preferredSize) && {
            preferredSize: _i9 == null ? void 0 : _i9.preferredSize
          }, {
            snap: (_i9$snap = _i9 == null ? void 0 : _i9.snap) != null ? _i9$snap : v
          }));
        (_N$current6 = N.current) != null && _N$current6.addView(P.current.get(_n4), _s, ge.Distribute, e.findIndex(e => e === _n4)), t.splice(e.findIndex(e => e === _n4), 0, _n4), A.current.splice(e.findIndex(e => e === _n4), 0, _s);
      }
      for (; !_(e, t);) for (const [_i10, _n5] of e.entries()) {
        const _e23 = t.findIndex(e => e === _n5);
        if (_e23 !== _i10) {
          var _N$current7;
          (_N$current7 = N.current) == null ? void 0 : _N$current7.moveView(P.current.get(_n5), _e23, _i10);
          const _s2 = t[_e23];
          t.splice(_e23, 1), t.splice(_i10, 0, _s2);
          break;
        }
      }
      for (const _t14 of i) {
        var _N$current8;
        const _i11 = e.findIndex(e => e === _t14),
          _n6 = A.current[_i11].preferredSize;
        void 0 !== _n6 && ((_N$current8 = N.current) == null ? void 0 : _N$current8.resizeView(_i11, _n6));
      }
      for (const _t15 of [...i, ...n]) {
        var _N$current9, _N$current10;
        const _i12 = E.current.get(_t15),
          _n7 = e.findIndex(e => e === _t15);
        _i12 && Oe(_i12) && void 0 !== _i12.visible && ((_N$current9 = N.current) == null ? void 0 : _N$current9.isViewVisible(_n7)) !== _i12.visible && ((_N$current10 = N.current) == null ? void 0 : _N$current10.setViewVisible(_n7, _i12.visible));
      }
      for (const _t16 of n) {
        const _i13 = E.current.get(_t16),
          _n8 = e.findIndex(e => e === _t16);
        if (_i13 && Oe(_i13)) {
          var _N$current11;
          void 0 !== _i13.preferredSize && A.current[_n8].preferredSize !== _i13.preferredSize && (A.current[_n8].preferredSize = _i13.preferredSize);
          let _e24 = !1;
          void 0 !== _i13.minSize && A.current[_n8].minimumSize !== _i13.minSize && (A.current[_n8].minimumSize = _i13.minSize, _e24 = !0), void 0 !== _i13.maxSize && A.current[_n8].maximumSize !== _i13.maxSize && (A.current[_n8].maximumSize = _i13.maxSize, _e24 = !0), _e24 && ((_N$current11 = N.current) == null ? void 0 : _N$current11.layout());
        }
      }
      (i.length > 0 || s.length > 0) && (I.current = e);
    }
  }, [H, C, h, c, v]), n(() => {
    N.current && (N.current.onDidChange = b);
  }, [b]), x({
    ref: S,
    onResize: ({
      width: e,
      height: t
    }) => {
      var _N$current12;
      e && t && ((_N$current12 = N.current) != null && _N$current12.layout(y ? t : e), D.current.setSize(y ? t : e), $(!0));
    }
  }), n(() => {
    T && De(20);
  }, []), e.createElement("div", {
    ref: S,
    className: l("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": m
    }, V, y ? L : O, {
      [M]: m
    }, a)
  }, e.createElement("div", {
    className: l("split-view-container", j)
  }, e.Children.toArray(o).map(t => {
    if (!e.isValidElement(t)) return null;
    const i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (E.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        e ? P.current.set(i, e) : P.current.delete(i);
      }
    })) : e.createElement(Me, {
      key: i,
      ref: e => {
        e ? P.current.set(i, e) : P.current.delete(i);
      }
    }, t);
  })));
});
function De(e) {
  const t = g(e, 4, 20),
    i = g(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    ye = e, be.emit("onDidChangeGlobalSize", e);
  }(t);
}
Pe.displayName = "Allotment";
var Ae = Object.assign(Pe, {
  Pane: Me
});
export { Ae as Allotment, Se as LayoutPriority, De as setSashSize };
