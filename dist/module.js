function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import e, { useRef as t, useState as i, useEffect as n, useCallback as r, useMemo as s, useLayoutEffect as o, forwardRef as a, useImperativeHandle as u } from "react";
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
      var r = arguments[n];
      if (r) {
        var s = typeof r;
        if ("string" === s || "number" === s) i.push(r);else if (Array.isArray(r)) {
          if (r.length) {
            var o = t.apply(null, r);
            o && i.push(o);
          }
        } else if ("object" === s) if (r.toString === Object.prototype.toString) for (var a in r) {
          e.call(r, a) && r[a] && i.push(a);
        } else i.push(r.toString());
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
function g(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function b(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && "[object Symbol]" == y.call(e);
  }(e)) return NaN;
  if (g(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = g(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(f, "");
  var i = d.test(e);
  return i || p.test(e) ? v(e.slice(2), i ? 2 : 8) : m.test(e) ? NaN : +e;
}
var z = function z(e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = b(i)) == i ? i : 0), void 0 !== t && (t = (t = b(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(b(e), t, i);
  },
  w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  S = {};
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    n = 9007199254740991,
    r = "[object Arguments]",
    s = "[object Array]",
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
    g = "[object WeakMap]",
    b = "[object ArrayBuffer]",
    z = "[object DataView]",
    S = /^\[object .+?Constructor\]$/,
    _ = /^(?:0|[1-9]\d*)$/,
    I = {};
  I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[r] = I[s] = I[b] = I[o] = I[z] = I[a] = I[u] = I[h] = I[c] = I[l] = I[f] = I[d] = I[p] = I[v] = I[g] = !1;
  var x = "object" == typeof w && w && w.Object === Object && w,
    E = "object" == typeof self && self && self.Object === Object && self,
    V = x || E || Function("return this")(),
    j = t && !t.nodeType && t,
    N = j && e && !e.nodeType && e,
    L = N && N.exports === j,
    D = L && x.process,
    O = function () {
      try {
        return D && D.binding && D.binding("util");
      } catch (e) {}
    }(),
    M = O && O.isTypedArray;
  function P(e, t) {
    for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) {
      if (t(e[i], i, e)) return !0;
    }
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
    B = V["__core-js_shared__"],
    R = H.toString,
    W = Y.hasOwnProperty,
    G = (C = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "",
    U = Y.toString,
    X = RegExp("^" + R.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    J = L ? V.Buffer : void 0,
    K = V.Symbol,
    Z = V.Uint8Array,
    Q = Y.propertyIsEnumerable,
    q = $.splice,
    ee = K ? K.toStringTag : void 0,
    te = Object.getOwnPropertySymbols,
    ie = J ? J.isBuffer : void 0,
    ne = (F = Object.keys, k = Object, function (e) {
      return F(k(e));
    }),
    re = Oe(V, "DataView"),
    se = Oe(V, "Map"),
    oe = Oe(V, "Promise"),
    ae = Oe(V, "Set"),
    ue = Oe(V, "WeakMap"),
    he = Oe(Object, "create"),
    ce = Te(re),
    le = Te(se),
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
  function ge(e) {
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
    for (this.__data__ = new be(); ++t < i;) {
      this.add(e[t]);
    }
  }
  function we(e) {
    var t = this.__data__ = new ge(e);
    this.size = t.size;
  }
  function Se(e, t) {
    var i = ke(e),
      n = !i && Fe(e),
      r = !i && !n && $e(e),
      s = !i && !n && !r && We(e),
      o = i || n || r || s,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) {
          n[i] = t(i);
        }
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var h in e) {
      !t && !W.call(e, h) || o && ("length" == h || r && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Ae(h, u)) || a.push(h);
    }
    return a;
  }
  function _e(e, t) {
    for (var i = e.length; i--;) {
      if (Ce(e[i][0], t)) return i;
    }
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
      var r = U.call(e);
      n && (t ? e[ee] = i : delete e[ee]);
      return r;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function xe(e) {
    return Re(e) && Ie(e) == r;
  }
  function Ee(e, t, i, n, h) {
    return e === t || (null == e || null == t || !Re(e) && !Re(t) ? e != e && t != t : function (e, t, i, n, h, m) {
      var g = ke(e),
        w = ke(t),
        S = g ? s : Pe(e),
        _ = w ? s : Pe(t),
        I = (S = S == r ? f : S) == f,
        x = (_ = _ == r ? f : _) == f,
        E = S == _;
      if (E && $e(e)) {
        if (!$e(t)) return !1;
        g = !0, I = !1;
      }
      if (E && !I) return m || (m = new we()), g || We(e) ? Ne(e, t, i, n, h, m) : function (e, t, i, n, r, s, h) {
        switch (i) {
          case z:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case b:
            return !(e.byteLength != t.byteLength || !s(new Z(e), new Z(t)));
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
            var g = h.get(e);
            if (g) return g == t;
            n |= 2, h.set(e, t);
            var w = Ne(f(e), f(t), n, r, s, h);
            return h.delete(e), w;
          case y:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, n, h, m);
      if (!(1 & i)) {
        var V = I && W.call(e, "__wrapped__"),
          j = x && W.call(t, "__wrapped__");
        if (V || j) {
          var N = V ? e.value() : e,
            L = j ? t.value() : t;
          return m || (m = new we()), h(N, L, i, n, m);
        }
      }
      if (!E) return !1;
      return m || (m = new we()), function (e, t, i, n, r, s) {
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
        var f = s.get(e);
        if (f && s.get(t)) return f == t;
        var m = !0;
        s.set(e, t), s.set(t, e);
        var d = o;
        for (; ++c < u;) {
          var p = e[l = a[c]],
            v = t[l];
          if (n) var y = o ? n(v, p, l, t, e, s) : n(p, v, l, e, t, s);
          if (!(void 0 === y ? p === v || r(p, v, i, n, s) : y)) {
            m = !1;
            break;
          }
          d || (d = "constructor" == l);
        }
        if (m && !d) {
          var g = e.constructor,
            b = t.constructor;
          g == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof b && b instanceof b || (m = !1);
        }
        return s.delete(e), s.delete(t), m;
      }(e, t, i, n, h, m);
    }(e, t, i, n, Ee, h));
  }
  function Ve(e) {
    return !(!Be(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Te(e));
  }
  function je(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || Y, t !== n) return ne(e);
    var t,
      i,
      n,
      r = [];
    for (var s in Object(e)) {
      W.call(e, s) && "constructor" != s && r.push(s);
    }
    return r;
  }
  function Ne(e, t, i, n, r, s) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var h = s.get(e);
    if (h && s.get(t)) return h == t;
    var c = -1,
      l = !0,
      f = 2 & i ? new ze() : void 0;
    for (s.set(e, t), s.set(t, e); ++c < a;) {
      var m = e[c],
        d = t[c];
      if (n) var p = o ? n(d, m, c, t, e, s) : n(m, d, c, e, t, s);
      if (void 0 !== p) {
        if (p) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!P(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || r(m, e, i, n, s))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== d && !r(m, d, i, n, s)) {
        l = !1;
        break;
      }
    }
    return s.delete(e), s.delete(t), l;
  }
  function Le(e) {
    return function (e, t, i) {
      var n = t(e);
      return ke(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, r = e.length; ++i < n;) {
          e[r + i] = t[i];
        }
        return e;
      }(n, i(e));
    }(e, Ge, Me);
  }
  function De(e, t) {
    var i,
      n,
      r = e.__data__;
    return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  }
  function Oe(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Ve(i) ? i : void 0;
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
  }, ge.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, ge.prototype.delete = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : q.call(t, i, 1), --this.size, !0);
  }, ge.prototype.get = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return i < 0 ? void 0 : t[i][1];
  }, ge.prototype.has = function (e) {
    return _e(this.__data__, e) > -1;
  }, ge.prototype.set = function (e, t) {
    var i = this.__data__,
      n = _e(i, e);
    return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
  }, be.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (se || ge)(),
      string: new ye()
    };
  }, be.prototype.delete = function (e) {
    var t = De(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }, be.prototype.get = function (e) {
    return De(this, e).get(e);
  }, be.prototype.has = function (e) {
    return De(this, e).has(e);
  }, be.prototype.set = function (e, t) {
    var i = De(this, e),
      n = i.size;
    return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
  }, ze.prototype.add = ze.prototype.push = function (e) {
    return this.__data__.set(e, i), this;
  }, ze.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.clear = function () {
    this.__data__ = new ge(), this.size = 0;
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
    if (i instanceof ge) {
      var n = i.__data__;
      if (!se || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new be(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Me = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (s[r++] = o);
        }
        return s;
      }(te(e), function (t) {
        return Q.call(e, t);
      }));
    } : function () {
      return [];
    },
    Pe = Ie;
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
  (re && Pe(new re(new ArrayBuffer(1))) != z || se && Pe(new se()) != c || oe && Pe(oe.resolve()) != m || ae && Pe(new ae()) != p || ue && Pe(new ue()) != g) && (Pe = function Pe(e) {
    var t = Ie(e),
      i = t == f ? e.constructor : void 0,
      n = i ? Te(i) : "";
    if (n) switch (n) {
      case ce:
        return z;
      case le:
        return c;
      case fe:
        return m;
      case me:
        return p;
      case de:
        return g;
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
  var We = M ? function (e) {
    return function (t) {
      return e(t);
    };
  }(M) : function (e) {
    return Re(e) && Ye(e.length) && !!I[Ie(e)];
  };
  function Ge(e) {
    return null != (t = e) && Ye(t.length) && !He(t) ? Se(e) : je(e);
    var t;
  }
  e.exports = function (e, t) {
    return Ee(e, t);
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
      var s = t(null),
        o = t(null);
      o.current = i;
      var a = t(null);
      n(function () {
        u();
      });
      var u = r(function () {
        var t = a.current,
          i = o.current,
          n = t || (i ? i instanceof Element ? i : i.current : null);
        s.current && s.current.element === n && s.current.subscriber === e || (s.current && s.current.cleanup && s.current.cleanup(), s.current = {
          element: n,
          subscriber: e,
          cleanup: n ? e(n) : void 0
        });
      }, [e]);
      return n(function () {
        return function () {
          s.current && s.current.cleanup && (s.current.cleanup(), s.current = null);
        };
      }, []), r(function (e) {
        a.current = e, u();
      }, [u]);
    }(r(function (t) {
      return h.current && h.current.box === e.box && h.current.round === u || (h.current = {
        box: e.box,
        round: u,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            r = I(i, n, "inlineSize"),
            s = I(i, n, "blockSize"),
            o = r ? u(r) : void 0,
            h = s ? u(s) : void 0;
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
  return s(function () {
    return {
      ref: p,
      width: l.width,
      height: l.height
    };
  }, [p, l.width, l.height]);
}
var E = "allotment-module_splitView__L-yRc",
  V = "allotment-module_sashContainer__fzwJF",
  j = "allotment-module_splitViewContainer__rQnVa",
  N = "allotment-module_splitViewView__MGZ6O",
  L = "allotment-module_vertical__WSwwa",
  D = "allotment-module_horizontal__7doS8",
  O = "allotment-module_separatorBorder__x-rDS";
var M,
  P = !1,
  A = !1;
"object" == typeof navigator && (M = navigator.userAgent, A = M.indexOf("Macintosh") >= 0, P = (M.indexOf("Macintosh") >= 0 || M.indexOf("iPad") >= 0 || M.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var T = P,
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
  var i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var H = {};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function r(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function s(e, t, n, s, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new r(n, s || e, o),
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
      r = [];
    if (0 === this._eventsCount) return r;
    for (n in e = this._events) {
      t.call(e, n) && r.push(i ? n.slice(1) : n);
    }
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var r = 0, s = n.length, o = new Array(s); r < s; r++) {
      o[r] = n[r].fn;
    }
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, r, s, o) {
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
          return c.fn.call(c.context, t, n, r), !0;
        case 5:
          return c.fn.call(c.context, t, n, r, s), !0;
        case 6:
          return c.fn.call(c.context, t, n, r, s, o), !0;
      }
      for (h = 1, u = new Array(l - 1); h < l; h++) {
        u[h - 1] = arguments[h];
      }
      c.fn.apply(c.context, u);
    } else {
      var f,
        m = c.length;
      for (h = 0; h < m; h++) {
        switch (c[h].once && this.removeListener(e, c[h].fn, void 0, !0), l) {
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
            c[h].fn.call(c[h].context, t, n, r);
            break;
          default:
            if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) {
              u[f - 1] = arguments[f];
            }
            c[h].fn.apply(c[h].context, u);
        }
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return s(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return s(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, r) {
    var s = i ? i + e : e;
    if (!this._events[s]) return this;
    if (!t) return o(this, s), this;
    var a = this._events[s];
    if (a.fn) a.fn !== t || r && !a.once || n && a.context !== n || o(this, s);else {
      for (var u = 0, h = [], c = a.length; u < c; u++) {
        (a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && h.push(a[u]);
      }
      h.length ? this._events[s] = 1 === h.length ? h[0] : h : o(this, s);
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
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function B(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function R(e, t, i) {
  if (i === void 0) {
    i = 1;
  }
  var n = Math.max(0, Math.ceil((t - e) / i)),
    r = new Array(n);
  var s = -1;
  for (; ++s < n;) {
    r[s] = e + s * i;
  }
  return r;
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
function re(e) {
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
var se = function se(e, t, i) {
    var n,
      r,
      s,
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
        s = r;
      return n = r = void 0, h = t, o = e.apply(s, i);
    }
    function d(e) {
      return h = e, a = setTimeout(v, t), c ? m(e) : o;
    }
    function p(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - h >= s;
    }
    function v() {
      var e = ie();
      if (p(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? te(i, s - (e - h)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && n ? m(e) : (n = r = void 0, o);
    }
    function g() {
      var e = ie(),
        i = p(e);
      if (n = arguments, r = this, u = e, i) {
        if (void 0 === a) return d(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = re(t) || 0, ne(i) && (c = !!i.leading, s = (l = "maxWait" in i) ? ee(re(i.maxWait) || 0, t) : s, f = "trailing" in i ? !!i.trailing : f), g.cancel = function () {
      void 0 !== a && clearTimeout(a), h = 0, n = u = r = a = void 0;
    }, g.flush = function () {
      return void 0 === a ? o : y(ie());
    }, g;
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
var pe, ve;
!function (e) {
  e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL";
}(pe || (pe = {})), function (e) {
  e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED";
}(ve || (ve = {}));
var ye = T ? 20 : 8;
var ge = new H();
class be extends H {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(ae, e === ve.Disabled), this.el.classList.toggle("sash-disabled", e === ve.Disabled), this.el.classList.toggle(ce, e === ve.Minimum), this.el.classList.toggle("sash-minimum", e === ve.Minimum), this.el.classList.toggle(le, e === ve.Maximum), this.el.classList.toggle("sash-maximum", e === ve.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = se(e => e.classList.add("sash-hover", me), this.hoverDelay), this._state = ve.Enabled, this.onPointerStart = e => {
      var t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", de), this.emit("start", n), this.el.setPointerCapture(e.pointerId);
      var r = e => {
          e.preventDefault();
          var n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", n);
        },
        s = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", de), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", s);
        };
      window.addEventListener("pointermove", r), window.addEventListener("pointerup", s);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(de) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", me)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", me);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", oe), this.el.dataset.testid = "sash", e.append(this.el), C && this.el.classList.add("sash-mac", ue), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === pe.Vertical ? this.el.style.width = this.size + "px" : this.el.style.height = this.size + "px") : (this.size = ye, ge.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : pe.Vertical, this.orientation === pe.Horizontal ? (this.el.classList.add("sash-horizontal", fe), this.el.classList.remove("sash-vertical", he)) : (this.el.classList.remove("sash-horizontal", fe), this.el.classList.add("sash-vertical", he)), this.layout();
  }
  layout() {
    if (this.orientation === pe.Vertical) {
      var _e2 = this.layoutProvider;
      this.el.style.left = _e2.getVerticalSashLeft(this) - this.size / 2 + "px", _e2.getVerticalSashTop && (this.el.style.top = _e2.getVerticalSashTop(this) + "px"), _e2.getVerticalSashHeight && (this.el.style.height = _e2.getVerticalSashHeight(this) + "px");
    } else {
      var _e3 = this.layoutProvider;
      this.el.style.top = _e3.getHorizontalSashTop(this) - this.size / 2 + "px", _e3.getHorizontalSashLeft && (this.el.style.left = _e3.getHorizontalSashLeft(this) + "px"), _e3.getHorizontalSashWidth && (this.el.style.width = _e3.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
var ze;
var we;
var Se;
(we = ze || (ze = {})).Distribute = {
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
    e !== this.visible && (e ? (this.size = z(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
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
    this.container.style.left = e + "px", this.container.style.width = this.size + "px";
  }
}
class xe extends _e {
  layoutContainer(e) {
    this.container.style.top = e + "px", this.container.style.height = this.size + "px";
  }
}
class Ee extends H {
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
  constructor(e, t, i, n, r) {
    var _t$orientation, _t$proportionalLayout;
    if (t === void 0) {
      t = {};
    }
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (var _e4 of this.viewItems) {
        _e4.enabled = !0;
      }
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : pe.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), n && (this.onDidDragStart = n), r && (this.onDidDragEnd = r), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", V), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (var [_e5, _i] of t.descriptor.views.entries()) {
        var _t = _i.size,
          _n = _i.container,
          _r = _i.view;
        this.addView(_n, _r, _t, _e5, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, n, r) {
    if (n === void 0) {
      n = this.viewItems.length;
    }
    var s;
    s = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    var o = this.orientation === pe.Vertical ? new xe(e, t, s) : new Ie(e, t, s);
    if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
      var _e6 = this.orientation === pe.Vertical ? new be(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: pe.Horizontal
        }) : new be(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: pe.Vertical
        }),
        _t2 = this.orientation === pe.Vertical ? t => ({
          sash: _e6,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e6,
          start: t.startX,
          current: t.currentX
        });
      _e6.on("start", e => {
        var _this$onDidDragStart;
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
        var i = this.viewItems.map(e => e.size);
        (_this$onDidDragStart = this.onDidDragStart) == null ? void 0 : _this$onDidDragStart.call(this, i);
      }), _e6.on("change", e => this.onSashChange(_t2(e))), _e6.on("end", () => {
        var _this$onDidDragEnd;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e6));
        var t = this.viewItems.map(e => e.size);
        (_this$onDidDragEnd = this.onDidDragEnd) == null ? void 0 : _this$onDidDragEnd.call(this, t);
      }), _e6.on("reset", () => {
        var t = this.sashItems.findIndex(t => t.sash === _e6),
          i = R(t, -1, -1),
          n = R(t + 1, this.viewItems.length),
          r = this.findFirstSnapIndex(i),
          s = this.findFirstSnapIndex(n);
        ("number" != typeof r || this.viewItems[r].visible) && ("number" != typeof s || this.viewItems[s].visible) && this.emit("sashreset", t);
      });
      var _i2 = {
        sash: _e6
      };
      this.sashItems.splice(n - 1, 0, _i2);
    }
    r || this.relayout(), r || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    var i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      var _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    var n = this.getViewCachedVisibleSize(t),
      r = void 0 === n ? this.getViewSize(t) : ze.Invisible(n),
      s = this.removeView(t);
    this.addView(e, s, r, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e) {
    if (e === void 0) {
      e = this.size;
    }
    var t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (var _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      var _i3 = this.viewItems[_t4];
      _i3.size = z(Math.round(this.proportions[_t4] * e), _i3.minimumSize, _i3.maximumSize);
    } else {
      var _i4 = R(0, this.viewItems.length),
        _n2 = _i4.filter(e => this.viewItems[e].priority === Se.Low),
        _r2 = _i4.filter(e => this.viewItems[e].priority === Se.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, _n2, _r2);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    var i = R(0, this.viewItems.length).filter(t => t !== e),
      n = [...i.filter(e => this.viewItems[e].priority === Se.Low), e],
      r = i.filter(e => this.viewItems[e].priority === Se.High),
      s = this.viewItems[e];
    t = Math.round(t), t = z(t, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = t, this.relayout(n, r);
  }
  resizeViews(e) {
    for (var _t5 = 0; _t5 < e.length; _t5++) {
      var _i5 = this.viewItems[_t5];
      var _n3 = e[_t5];
      _n3 = Math.round(_n3), _n3 = z(_n3, _i5.minimumSize, Math.min(_i5.maximumSize, this.size)), _i5.size = _n3;
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
    var e = [];
    var t = 0;
    for (var _i6 of this.viewItems) {
      _i6.maximumSize - _i6.minimumSize > 0 && (e.push(_i6), t += _i6.size);
    }
    var i = Math.floor(t / e.length);
    for (var _t6 of e) {
      _t6.size = z(i, _t6.minimumSize, _t6.maximumSize);
    }
    var n = R(0, this.viewItems.length),
      r = n.filter(e => this.viewItems[e].priority === Se.Low),
      s = n.filter(e => this.viewItems[e].priority === Se.High);
    this.relayout(r, s);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    var i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart(_ref) {
    var {
      sash: e,
      start: t
    } = _ref;
    var i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      var t = this.viewItems.map(e => e.size);
      var n,
        r,
        s = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      var a = R(i, -1, -1),
        u = R(i + 1, this.viewItems.length),
        h = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        c = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      s = Math.max(h, f), o = Math.min(l, c);
      var m = this.findFirstSnapIndex(a),
        d = this.findFirstSnapIndex(u);
      if ("number" == typeof m) {
        var _e7 = this.viewItems[m],
          _t7 = Math.floor(_e7.viewMinimumSize / 2);
        n = {
          index: m,
          limitDelta: _e7.visible ? s - _t7 : s + _t7,
          size: _e7.size
        };
      }
      if ("number" == typeof d) {
        var _e8 = this.viewItems[d],
          _t8 = Math.floor(_e8.viewMinimumSize / 2);
        r = {
          index: d,
          limitDelta: _e8.visible ? o + _t8 : o - _t8,
          size: _e8.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: s,
        maxDelta: o,
        snapBefore: n,
        snapAfter: r
      };
    })(t);
  }
  onSashChange(_ref2) {
    var {
      current: e
    } = _ref2;
    var {
      index: t,
      start: i,
      sizes: n,
      minDelta: r,
      maxDelta: s,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    var u = e - i;
    this.resize(t, u, n, void 0, void 0, r, s, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    var t = 0;
    for (var _i7 = 0; _i7 < this.sashItems.length; _i7++) {
      if (t += this.viewItems[_i7].size, this.sashItems[_i7].sash === e) return t;
    }
    return 0;
  }
  resize(e, t, i, n, r, s, o, a, u) {
    if (i === void 0) {
      i = this.viewItems.map(e => e.size);
    }
    if (s === void 0) {
      s = Number.NEGATIVE_INFINITY;
    }
    if (o === void 0) {
      o = Number.POSITIVE_INFINITY;
    }
    if (e < 0 || e >= this.viewItems.length) return 0;
    var h = R(e, -1, -1),
      c = R(e + 1, this.viewItems.length);
    if (r) for (var _e9 of r) {
      Y(h, _e9), Y(c, _e9);
    }
    if (n) for (var _e10 of n) {
      B(h, _e10), B(c, _e10);
    }
    var l = h.map(e => this.viewItems[e]),
      f = h.map(e => i[e]),
      m = c.map(e => this.viewItems[e]),
      d = c.map(e => i[e]),
      p = h.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = h.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      y = 0 === c.length ? Number.POSITIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      g = 0 === c.length ? Number.NEGATIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      b = Math.max(p, g, s),
      w = Math.min(y, v, o);
    var S = !1;
    if (a) {
      var _e11 = this.viewItems[a.index],
        _i8 = t >= a.limitDelta;
      S = _i8 !== _e11.visible, _e11.setVisible(_i8, a.size);
    }
    if (!S && u) {
      var _e12 = this.viewItems[u.index],
        _i9 = t < u.limitDelta;
      S = _i9 !== _e12.visible, _e12.setVisible(_i9, u.size);
    }
    if (S) return this.resize(e, t, i, n, r, s, o);
    for (var _e13 = 0, _i10 = t = z(t, b, w); _e13 < l.length; _e13++) {
      var _t9 = l[_e13],
        _n4 = z(f[_e13] + _i10, _t9.minimumSize, _t9.maximumSize);
      _i10 -= _n4 - f[_e13], _t9.size = _n4;
    }
    for (var _e14 = 0, _i11 = t; _e14 < m.length; _e14++) {
      var _t10 = m[_e14],
        _n5 = z(d[_e14] - _i11, _t10.minimumSize, _t10.maximumSize);
      _i11 += _n5 - d[_e14], _t10.size = _n5;
    }
    return t;
  }
  distributeEmptySpace(e) {
    var t = this.viewItems.reduce((e, t) => e + t.size, 0);
    var i = this.size - t;
    var n = R(this.viewItems.length - 1, -1, -1);
    "number" == typeof e && B(n, e);
    for (var _e15 = 0; 0 !== i && _e15 < n.length; _e15++) {
      var _t11 = this.viewItems[n[_e15]],
        _r3 = z(_t11.size + i, _t11.minimumSize, _t11.maximumSize);
      i -= _r3 - _t11.size, _t11.size = _r3;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    var e = 0;
    for (var _t12 of this.viewItems) {
      _t12.layout(e), e += _t12.size;
    }
    (_this$onDidChange = this.onDidChange) != null && _this$onDidChange.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    var e = !1;
    var t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    var i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      n = [...this.viewItems].reverse();
    e = !1;
    var r = n.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    var s = n.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    var o = 0;
    for (var _e16 = 0; _e16 < this.sashItems.length; _e16++) {
      var {
        sash: _n6
      } = this.sashItems[_e16];
      o += this.viewItems[_e16].size;
      var _a = !(t[_e16] && s[_e16 + 1]),
        _u = !(i[_e16] && r[_e16 + 1]);
      if (_a && _u) {
        var _i12 = R(_e16, -1, -1),
          _s = R(_e16 + 1, this.viewItems.length),
          _a2 = this.findFirstSnapIndex(_i12),
          _u2 = this.findFirstSnapIndex(_s),
          _h = "number" == typeof _a2 && !this.viewItems[_a2].visible,
          _c = "number" == typeof _u2 && !this.viewItems[_u2].visible;
        _h && r[_e16] && (o > 0 || this.startSnappingEnabled) ? _n6.state = ve.Minimum : _c && t[_e16] && (o < this.contentSize || this.endSnappingEnabled) ? _n6.state = ve.Maximum : _n6.state = ve.Disabled;
      } else _n6.state = _a && !_u ? ve.Minimum : !_a && _u ? ve.Maximum : ve.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (var _t13 of e) {
      var _e17 = this.viewItems[_t13];
      if (_e17.visible && _e17.snap) return _t13;
    }
    for (var _t14 of e) {
      var _e18 = this.viewItems[_t14];
      if (_e18.visible && _e18.maximumSize - _e18.minimumSize > 0) return;
      if (!_e18.visible && _e18.snap) return _t14;
    }
  }
}
class Ve {
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
    if ("number" == typeof e) this.layoutStrategy = new Ve(e);else if ("string" == typeof e) {
      var _t15 = e.trim();
      if ($(_t15, "%")) {
        var _e19 = Number(_t15.slice(0, -1)) / 100;
        this.layoutStrategy = new je(_e19, this.layoutService);
      } else if ($(_t15, "px")) {
        var _e20 = Number(_t15.slice(0, -2)) / 100;
        this.layoutStrategy = new Ve(_e20);
      } else if ("number" == typeof Number.parseFloat(_t15)) {
        var _e21 = Number.parseFloat(_t15);
        this.layoutStrategy = new Ve(_e21);
      } else this.layoutStrategy = new Ne();
    } else this.layoutStrategy = new Ne();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new Ve(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e22 = t.preferredSize.trim();
      if ($(_e22, "%")) {
        var _t16 = Number(_e22.slice(0, -1)) / 100;
        this.layoutStrategy = new je(_t16, this.layoutService);
      } else if ($(_e22, "px")) {
        var _t17 = Number(_e22.slice(0, -2));
        this.layoutStrategy = new Ve(_t17);
      } else if ("number" == typeof Number.parseFloat(_e22)) {
        var _t18 = Number.parseFloat(_e22);
        this.layoutStrategy = new Ve(_t18);
      } else this.layoutStrategy = new Ne();
    } else this.layoutStrategy = new Ne();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : Se.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function De(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var Oe = a((_ref3, n) => {
  var {
    className: t,
    children: i
  } = _ref3;
  return e.createElement("div", {
    ref: n,
    className: l("split-view-view", N, t)
  }, i);
});
Oe.displayName = "Allotment.Pane";
var Me = a((_ref4, I) => {
  var {
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
    onChange: g,
    onReset: b,
    onVisibleChange: z,
    onDragStart: w,
    onDragEnd: S
  } = _ref4;
  var V = t(null),
    N = t([]),
    M = t(new Map()),
    P = t(null),
    A = t(new Map()),
    C = t(new k()),
    $ = t([]),
    [H, Y] = i(!1);
  "production" !== process.env.NODE_ENV && d && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var B = s(() => e.Children.toArray(o).filter(e.isValidElement), [o]),
    R = r(e => {
      var _$$current, _P$current;
      var t = (_$$current = $.current) == null ? void 0 : _$$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_P$current = P.current) != null && _P$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return u(I, () => ({
    reset: () => {
      if (b) b();else {
        var _P$current2;
        (_P$current2 = P.current) == null ? void 0 : _P$current2.distributeViewSizes();
        for (var _e23 = 0; _e23 < $.current.length; _e23++) {
          R(_e23);
        }
      }
    },
    resize: e => {
      var _P$current3;
      (_P$current3 = P.current) == null ? void 0 : _P$current3.resizeViews(e);
    }
  })), F(() => {
    var e = !0;
    p && A.current.size !== p.length && (e = !1, console.warn("Expected " + p.length + " children based on defaultSizes but found " + A.current.size)), e && p && (N.current = B.map(e => e.key));
    var t = _extends({
      orientation: y ? pe.Vertical : pe.Horizontal,
      proportionalLayout: f
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          var i = M.current.get(N.current[t]),
            n = new Le(C.current, _extends({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i == null ? void 0 : i.minSize) != null ? _i$minSize : c,
              maximumSize: (_i$maxSize = i == null ? void 0 : i.maxSize) != null ? _i$maxSize : h,
              priority: (_i$priority = i == null ? void 0 : i.priority) != null ? _i$priority : Se.Normal
            }, (i == null ? void 0 : i.preferredSize) && {
              preferredSize: i == null ? void 0 : i.preferredSize
            }, {
              snap: (_i$snap = i == null ? void 0 : i.snap) != null ? _i$snap : v
            }));
          return $.current.push(n), {
            container: [...A.current.values()][t],
            size: e,
            view: n
          };
        })
      }
    });
    P.current = new Ee(V.current, t, g, w, S), P.current.on("sashDragStart", () => {
      var _V$current;
      (_V$current = V.current) == null ? void 0 : _V$current.classList.add("split-view-sash-dragging");
    }), P.current.on("sashDragEnd", () => {
      var _V$current2;
      (_V$current2 = V.current) == null ? void 0 : _V$current2.classList.remove("split-view-sash-dragging");
    }), P.current.on("sashchange", e => {
      if (z && P.current) {
        var _e24 = B.map(e => e.key);
        for (var _t19 = 0; _t19 < _e24.length; _t19++) {
          var _i13 = M.current.get(_e24[_t19]);
          void 0 !== (_i13 == null ? void 0 : _i13.visible) && _i13.visible !== P.current.isViewVisible(_t19) && z(_t19, P.current.isViewVisible(_t19));
        }
      }
    }), P.current.on("sashreset", e => {
      if (b) b();else {
        var _P$current4;
        if (R(e)) return;
        if (R(e + 1)) return;
        (_P$current4 = P.current) == null ? void 0 : _P$current4.distributeViewSizes();
      }
    });
    var i = P.current;
    return () => {
      i.dispose();
    };
  }, []), F(() => {
    if (H) {
      var _e25 = B.map(e => e.key),
        _t20 = [...N.current],
        _i14 = _e25.filter(e => !N.current.includes(e)),
        _n7 = _e25.filter(e => N.current.includes(e)),
        _r4 = N.current.map(t => !_e25.includes(t));
      for (var _e26 = _r4.length - 1; _e26 >= 0; _e26--) {
        var _P$current5;
        _r4[_e26] && ((_P$current5 = P.current) != null && _P$current5.removeView(_e26), _t20.splice(_e26, 1), $.current.splice(_e26, 1));
      }
      var _loop = function _loop(_n8) {
        var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _P$current7;
        var i = M.current.get(_n8),
          r = new Le(C.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i$minSize2 = i == null ? void 0 : i.minSize) != null ? _i$minSize2 : c,
            maximumSize: (_i$maxSize2 = i == null ? void 0 : i.maxSize) != null ? _i$maxSize2 : h,
            priority: (_i$priority2 = i == null ? void 0 : i.priority) != null ? _i$priority2 : Se.Normal
          }, (i == null ? void 0 : i.preferredSize) && {
            preferredSize: i == null ? void 0 : i.preferredSize
          }, {
            snap: (_i$snap2 = i == null ? void 0 : i.snap) != null ? _i$snap2 : v
          }));
        (_P$current7 = P.current) != null && _P$current7.addView(A.current.get(_n8), r, ze.Distribute, _e25.findIndex(e => e === _n8)), _t20.splice(_e25.findIndex(e => e === _n8), 0, _n8), $.current.splice(_e25.findIndex(e => e === _n8), 0, r);
      };
      for (var _n8 of _i14) {
        _loop(_n8);
      }
      for (; !_(_e25, _t20);) {
        var _loop2 = function _loop2(_i15, _n9) {
          var e = _t20.findIndex(e => e === _n9);
          if (e !== _i15) {
            var _P$current6;
            (_P$current6 = P.current) == null ? void 0 : _P$current6.moveView(A.current.get(_n9), e, _i15);
            var _r5 = _t20[e];
            _t20.splice(e, 1), _t20.splice(_i15, 0, _r5);
            return "break";
          }
        };
        for (var [_i15, _n9] of _e25.entries()) {
          var _ret = _loop2(_i15, _n9);
          if (_ret === "break") break;
        }
      }
      var _loop3 = function _loop3(_t21) {
        var _P$current8;
        var i = _e25.findIndex(e => e === _t21),
          n = $.current[i].preferredSize;
        void 0 !== n && ((_P$current8 = P.current) == null ? void 0 : _P$current8.resizeView(i, n));
      };
      for (var _t21 of _i14) {
        _loop3(_t21);
      }
      var _loop4 = function _loop4(_t22) {
        var _P$current9, _P$current10;
        var i = M.current.get(_t22),
          n = _e25.findIndex(e => e === _t22);
        i && De(i) && void 0 !== i.visible && ((_P$current9 = P.current) == null ? void 0 : _P$current9.isViewVisible(n)) !== i.visible && ((_P$current10 = P.current) == null ? void 0 : _P$current10.setViewVisible(n, i.visible));
      };
      for (var _t22 of [..._i14, ..._n7]) {
        _loop4(_t22);
      }
      var _loop5 = function _loop5(_t23) {
        var i = M.current.get(_t23),
          n = _e25.findIndex(e => e === _t23);
        if (i && De(i)) {
          var _P$current11;
          void 0 !== i.preferredSize && $.current[n].preferredSize !== i.preferredSize && ($.current[n].preferredSize = i.preferredSize);
          var _e27 = !1;
          void 0 !== i.minSize && $.current[n].minimumSize !== i.minSize && ($.current[n].minimumSize = i.minSize, _e27 = !0), void 0 !== i.maxSize && $.current[n].maximumSize !== i.maxSize && ($.current[n].maximumSize = i.maxSize, _e27 = !0), _e27 && ((_P$current11 = P.current) == null ? void 0 : _P$current11.layout());
        }
      };
      for (var _t23 of _n7) {
        _loop5(_t23);
      }
      (_i14.length > 0 || _r4.length > 0) && (N.current = _e25);
    }
  }, [B, H, h, c, v]), n(() => {
    P.current && (P.current.onDidChange = g);
  }, [g]), n(() => {
    P.current && (P.current.onDidDragStart = w);
  }, [w]), n(() => {
    P.current && (P.current.onDidDragEnd = S);
  }, [S]), x({
    ref: V,
    onResize: _ref5 => {
      var _P$current12;
      var {
        width: e,
        height: t
      } = _ref5;
      e && t && ((_P$current12 = P.current) != null && _P$current12.layout(y ? t : e), C.current.setSize(y ? t : e));
    }
  }), F(() => {
    Y(!0);
  }, []), n(() => {
    T && Pe(20);
  }, []), e.createElement("div", {
    ref: V,
    className: l("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": m
    }, E, y ? L : D, {
      [O]: m
    }, a)
  }, e.createElement("div", {
    className: l("split-view-container", j)
  }, e.Children.toArray(o).map(t => {
    if (!e.isValidElement(t)) return null;
    var i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (M.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        var n = t.ref;
        n && (n.current = e), e ? A.current.set(i, e) : A.current.delete(i);
      }
    })) : e.createElement(Oe, {
      key: i,
      ref: e => {
        e ? A.current.set(i, e) : A.current.delete(i);
      }
    }, t);
  })));
});
function Pe(e) {
  var t = z(e, 4, 20),
    i = z(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    ye = e, ge.emit("onDidChangeGlobalSize", e);
  }(t);
}
Me.displayName = "Allotment";
var Ae = Object.assign(Me, {
  Pane: Oe
});
export { Ae as Allotment, Se as LayoutPriority, Pe as setSashSize };
