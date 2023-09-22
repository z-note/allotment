"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e29) { throw _e29; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e30) { didErr = true; err = _e30; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var e,
  t = require("react"),
  i = {};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
e = {
  get exports() {
    return i;
  },
  set exports(e) {
    i = e;
  }
}, function () {
  var t = {}.hasOwnProperty;
  function i() {
    for (var e = [], r = 0; r < arguments.length; r++) {
      var s = arguments[r];
      if (s) {
        var n = _typeof(s);
        if ("string" === n || "number" === n) e.push(s);else if (Array.isArray(s)) {
          if (s.length) {
            var o = i.apply(null, s);
            o && e.push(o);
          }
        } else if ("object" === n) if (s.toString === Object.prototype.toString) for (var a in s) {
          t.call(s, a) && s[a] && e.push(a);
        } else e.push(s.toString());
      }
    }
    return e.join(" ");
  }
  e.exports ? (i["default"] = i, e.exports = i) : window.classNames = i;
}();
var r = i,
  s = /^\s+|\s+$/g,
  n = /^[-+]0x[0-9a-f]+$/i,
  o = /^0b[01]+$/i,
  a = /^0o[0-7]+$/i,
  u = parseInt,
  c = Object.prototype.toString;
function h(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function l(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && "[object Symbol]" == c.call(e);
  }(e)) return NaN;
  if (h(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = h(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(s, "");
  var i = o.test(e);
  return i || a.test(e) ? u(e.slice(2), i ? 2 : 8) : n.test(e) ? NaN : +e;
}
var f = function f(e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = l(i)) == i ? i : 0), void 0 !== t && (t = (t = l(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(l(e), t, i);
  },
  m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  d = {};
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    r = 9007199254740991,
    s = "[object Arguments]",
    n = "[object Array]",
    o = "[object Boolean]",
    a = "[object Date]",
    u = "[object Error]",
    c = "[object Function]",
    h = "[object Map]",
    l = "[object Number]",
    f = "[object Object]",
    d = "[object Promise]",
    p = "[object RegExp]",
    v = "[object Set]",
    y = "[object String]",
    b = "[object Symbol]",
    g = "[object WeakMap]",
    z = "[object ArrayBuffer]",
    w = "[object DataView]",
    S = /^\[object .+?Constructor\]$/,
    _ = /^(?:0|[1-9]\d*)$/,
    x = {};
  x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, x[s] = x[n] = x[z] = x[o] = x[w] = x[a] = x[u] = x[c] = x[h] = x[l] = x[f] = x[p] = x[v] = x[y] = x[g] = !1;
  var I = "object" == _typeof(m) && m && m.Object === Object && m,
    E = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    V = I || E || Function("return this")(),
    L = t && !t.nodeType && t,
    j = L && e && !e.nodeType && e,
    N = j && j.exports === L,
    D = N && I.process,
    P = function () {
      try {
        return D && D.binding && D.binding("util");
      } catch (e) {}
    }(),
    O = P && P.isTypedArray;
  function M(e, t) {
    for (var i = -1, r = null == e ? 0 : e.length; ++i < r;) {
      if (t(e[i], i, e)) return !0;
    }
    return !1;
  }
  function A(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, r) {
      i[++t] = [r, e];
    }), i;
  }
  function C(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var T,
    F,
    k,
    R = Array.prototype,
    H = Function.prototype,
    $ = Object.prototype,
    Y = V["__core-js_shared__"],
    B = H.toString,
    W = $.hasOwnProperty,
    G = (T = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + T : "",
    U = $.toString,
    X = RegExp("^" + B.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    J = N ? V.Buffer : void 0,
    K = V.Symbol,
    Z = V.Uint8Array,
    q = $.propertyIsEnumerable,
    Q = R.splice,
    ee = K ? K.toStringTag : void 0,
    te = Object.getOwnPropertySymbols,
    ie = J ? J.isBuffer : void 0,
    re = (F = Object.keys, k = Object, function (e) {
      return F(k(e));
    }),
    se = Pe(V, "DataView"),
    ne = Pe(V, "Map"),
    oe = Pe(V, "Promise"),
    ae = Pe(V, "Set"),
    ue = Pe(V, "WeakMap"),
    ce = Pe(Object, "create"),
    he = Ce(se),
    le = Ce(ne),
    fe = Ce(oe),
    me = Ce(ae),
    de = Ce(ue),
    pe = K ? K.prototype : void 0,
    ve = pe ? pe.valueOf : void 0;
  function ye(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function be(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function ge(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function ze(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.__data__ = new ge(); ++t < i;) {
      this.add(e[t]);
    }
  }
  function we(e) {
    var t = this.__data__ = new be(e);
    this.size = t.size;
  }
  function Se(e, t) {
    var i = ke(e),
      r = !i && Fe(e),
      s = !i && !r && Re(e),
      n = !i && !r && !s && We(e),
      o = i || r || s || n,
      a = o ? function (e, t) {
        for (var i = -1, r = Array(e); ++i < e;) {
          r[i] = t(i);
        }
        return r;
      }(e.length, String) : [],
      u = a.length;
    for (var c in e) {
      !t && !W.call(e, c) || o && ("length" == c || s && ("offset" == c || "parent" == c) || n && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ae(c, u)) || a.push(c);
    }
    return a;
  }
  function _e(e, t) {
    for (var i = e.length; i--;) {
      if (Te(e[i][0], t)) return i;
    }
    return -1;
  }
  function xe(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ee && ee in Object(e) ? function (e) {
      var t = W.call(e, ee),
        i = e[ee];
      try {
        e[ee] = void 0;
        var r = !0;
      } catch (e) {}
      var s = U.call(e);
      r && (t ? e[ee] = i : delete e[ee]);
      return s;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function Ie(e) {
    return Be(e) && xe(e) == s;
  }
  function Ee(e, t, i, r, c) {
    return e === t || (null == e || null == t || !Be(e) && !Be(t) ? e != e && t != t : function (e, t, i, r, c, m) {
      var d = ke(e),
        g = ke(t),
        S = d ? n : Me(e),
        _ = g ? n : Me(t),
        x = (S = S == s ? f : S) == f,
        I = (_ = _ == s ? f : _) == f,
        E = S == _;
      if (E && Re(e)) {
        if (!Re(t)) return !1;
        d = !0, x = !1;
      }
      if (E && !x) return m || (m = new we()), d || We(e) ? je(e, t, i, r, c, m) : function (e, t, i, r, s, n, c) {
        switch (i) {
          case w:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case z:
            return !(e.byteLength != t.byteLength || !n(new Z(e), new Z(t)));
          case o:
          case a:
          case l:
            return Te(+e, +t);
          case u:
            return e.name == t.name && e.message == t.message;
          case p:
          case y:
            return e == t + "";
          case h:
            var f = A;
          case v:
            var m = 1 & r;
            if (f || (f = C), e.size != t.size && !m) return !1;
            var d = c.get(e);
            if (d) return d == t;
            r |= 2, c.set(e, t);
            var g = je(f(e), f(t), r, s, n, c);
            return c["delete"](e), g;
          case b:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, r, c, m);
      if (!(1 & i)) {
        var V = x && W.call(e, "__wrapped__"),
          L = I && W.call(t, "__wrapped__");
        if (V || L) {
          var j = V ? e.value() : e,
            N = L ? t.value() : t;
          return m || (m = new we()), c(j, N, i, r, m);
        }
      }
      if (!E) return !1;
      return m || (m = new we()), function (e, t, i, r, s, n) {
        var o = 1 & i,
          a = Ne(e),
          u = a.length,
          c = Ne(t).length;
        if (u != c && !o) return !1;
        var h = u;
        for (; h--;) {
          var l = a[h];
          if (!(o ? l in t : W.call(t, l))) return !1;
        }
        var f = n.get(e);
        if (f && n.get(t)) return f == t;
        var m = !0;
        n.set(e, t), n.set(t, e);
        var d = o;
        for (; ++h < u;) {
          var p = e[l = a[h]],
            v = t[l];
          if (r) var y = o ? r(v, p, l, t, e, n) : r(p, v, l, e, t, n);
          if (!(void 0 === y ? p === v || s(p, v, i, r, n) : y)) {
            m = !1;
            break;
          }
          d || (d = "constructor" == l);
        }
        if (m && !d) {
          var b = e.constructor,
            g = t.constructor;
          b == g || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g || (m = !1);
        }
        return n["delete"](e), n["delete"](t), m;
      }(e, t, i, r, c, m);
    }(e, t, i, r, Ee, c));
  }
  function Ve(e) {
    return !(!Ye(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Ce(e));
  }
  function Le(e) {
    if (i = (t = e) && t.constructor, r = "function" == typeof i && i.prototype || $, t !== r) return re(e);
    var t,
      i,
      r,
      s = [];
    for (var n in Object(e)) {
      W.call(e, n) && "constructor" != n && s.push(n);
    }
    return s;
  }
  function je(e, t, i, r, s, n) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var c = n.get(e);
    if (c && n.get(t)) return c == t;
    var h = -1,
      l = !0,
      f = 2 & i ? new ze() : void 0;
    for (n.set(e, t), n.set(t, e); ++h < a;) {
      var m = e[h],
        d = t[h];
      if (r) var p = o ? r(d, m, h, t, e, n) : r(m, d, h, e, t, n);
      if (void 0 !== p) {
        if (p) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!M(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || s(m, e, i, r, n))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== d && !s(m, d, i, r, n)) {
        l = !1;
        break;
      }
    }
    return n["delete"](e), n["delete"](t), l;
  }
  function Ne(e) {
    return function (e, t, i) {
      var r = t(e);
      return ke(e) ? r : function (e, t) {
        for (var i = -1, r = t.length, s = e.length; ++i < r;) {
          e[s + i] = t[i];
        }
        return e;
      }(r, i(e));
    }(e, Ge, Oe);
  }
  function De(e, t) {
    var i,
      r,
      s = e.__data__;
    return ("string" == (r = _typeof(i = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== i : null === i) ? s["string" == typeof t ? "string" : "hash"] : s.map;
  }
  function Pe(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Ve(i) ? i : void 0;
  }
  ye.prototype.clear = function () {
    this.__data__ = ce ? ce(null) : {}, this.size = 0;
  }, ye.prototype["delete"] = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, ye.prototype.get = function (e) {
    var t = this.__data__;
    if (ce) {
      var r = t[e];
      return r === i ? void 0 : r;
    }
    return W.call(t, e) ? t[e] : void 0;
  }, ye.prototype.has = function (e) {
    var t = this.__data__;
    return ce ? void 0 !== t[e] : W.call(t, e);
  }, ye.prototype.set = function (e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = ce && void 0 === t ? i : t, this;
  }, be.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, be.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : Q.call(t, i, 1), --this.size, !0);
  }, be.prototype.get = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return i < 0 ? void 0 : t[i][1];
  }, be.prototype.has = function (e) {
    return _e(this.__data__, e) > -1;
  }, be.prototype.set = function (e, t) {
    var i = this.__data__,
      r = _e(i, e);
    return r < 0 ? (++this.size, i.push([e, t])) : i[r][1] = t, this;
  }, ge.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (ne || be)(),
      string: new ye()
    };
  }, ge.prototype["delete"] = function (e) {
    var t = De(this, e)["delete"](e);
    return this.size -= t ? 1 : 0, t;
  }, ge.prototype.get = function (e) {
    return De(this, e).get(e);
  }, ge.prototype.has = function (e) {
    return De(this, e).has(e);
  }, ge.prototype.set = function (e, t) {
    var i = De(this, e),
      r = i.size;
    return i.set(e, t), this.size += i.size == r ? 0 : 1, this;
  }, ze.prototype.add = ze.prototype.push = function (e) {
    return this.__data__.set(e, i), this;
  }, ze.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.clear = function () {
    this.__data__ = new be(), this.size = 0;
  }, we.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = t["delete"](e);
    return this.size = t.size, i;
  }, we.prototype.get = function (e) {
    return this.__data__.get(e);
  }, we.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof be) {
      var r = i.__data__;
      if (!ne || r.length < 199) return r.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new ge(r);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Oe = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, r = null == e ? 0 : e.length, s = 0, n = []; ++i < r;) {
          var o = e[i];
          t(o, i, e) && (n[s++] = o);
        }
        return n;
      }(te(e), function (t) {
        return q.call(e, t);
      }));
    } : function () {
      return [];
    },
    Me = xe;
  function Ae(e, t) {
    return !!(t = null == t ? r : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Ce(e) {
    if (null != e) {
      try {
        return B.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  function Te(e, t) {
    return e === t || e != e && t != t;
  }
  (se && Me(new se(new ArrayBuffer(1))) != w || ne && Me(new ne()) != h || oe && Me(oe.resolve()) != d || ae && Me(new ae()) != v || ue && Me(new ue()) != g) && (Me = function Me(e) {
    var t = xe(e),
      i = t == f ? e.constructor : void 0,
      r = i ? Ce(i) : "";
    if (r) switch (r) {
      case he:
        return w;
      case le:
        return h;
      case fe:
        return d;
      case me:
        return v;
      case de:
        return g;
    }
    return t;
  });
  var Fe = Ie(function () {
      return arguments;
    }()) ? Ie : function (e) {
      return Be(e) && W.call(e, "callee") && !q.call(e, "callee");
    },
    ke = Array.isArray;
  var Re = ie || function () {
    return !1;
  };
  function He(e) {
    if (!Ye(e)) return !1;
    var t = xe(e);
    return t == c || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  }
  function $e(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
  }
  function Ye(e) {
    var t = _typeof(e);
    return null != e && ("object" == t || "function" == t);
  }
  function Be(e) {
    return null != e && "object" == _typeof(e);
  }
  var We = O ? function (e) {
    return function (t) {
      return e(t);
    };
  }(O) : function (e) {
    return Be(e) && $e(e.length) && !!x[xe(e)];
  };
  function Ge(e) {
    return null != (t = e) && $e(t.length) && !He(t) ? Se(e) : Le(e);
    var t;
  }
  e.exports = function (e, t) {
    return Ee(e, t);
  };
}({
  get exports() {
    return d;
  },
  set exports(e) {
    d = e;
  }
}, d);
var p = d;
function v(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function y(e) {
  void 0 === e && (e = {});
  var i = e.onResize,
    r = t.useRef(void 0);
  r.current = i;
  var s = e.round || Math.round,
    n = t.useRef(),
    o = t.useState({
      width: void 0,
      height: void 0
    }),
    a = o[0],
    u = o[1],
    c = t.useRef(!1);
  t.useEffect(function () {
    return c.current = !1, function () {
      c.current = !0;
    };
  }, []);
  var h = t.useRef({
      width: void 0,
      height: void 0
    }),
    l = function (e, i) {
      var r = t.useRef(null),
        s = t.useRef(null);
      s.current = i;
      var n = t.useRef(null);
      t.useEffect(function () {
        o();
      });
      var o = t.useCallback(function () {
        var t = n.current,
          i = s.current,
          o = t || (i ? i instanceof Element ? i : i.current : null);
        r.current && r.current.element === o && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
          element: o,
          subscriber: e,
          cleanup: o ? e(o) : void 0
        });
      }, [e]);
      return t.useEffect(function () {
        return function () {
          r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
        };
      }, []), t.useCallback(function (e) {
        n.current = e, o();
      }, [o]);
    }(t.useCallback(function (t) {
      return n.current && n.current.box === e.box && n.current.round === s || (n.current = {
        box: e.box,
        round: s,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            o = v(i, n, "inlineSize"),
            a = v(i, n, "blockSize"),
            l = o ? s(o) : void 0,
            f = a ? s(a) : void 0;
          if (h.current.width !== l || h.current.height !== f) {
            var m = {
              width: l,
              height: f
            };
            h.current.width = l, h.current.height = f, r.current ? r.current(m) : c.current || u(m);
          }
        })
      }), n.current.instance.observe(t, {
        box: e.box
      }), function () {
        n.current && n.current.instance.unobserve(t);
      };
    }, [e.box, s]), e.ref);
  return t.useMemo(function () {
    return {
      ref: l,
      width: a.width,
      height: a.height
    };
  }, [l, a.width, a.height]);
}
var b = "allotment-module_splitView__L-yRc",
  g = "allotment-module_sashContainer__fzwJF",
  z = "allotment-module_splitViewContainer__rQnVa",
  w = "allotment-module_splitViewView__MGZ6O",
  S = "allotment-module_vertical__WSwwa",
  _ = "allotment-module_horizontal__7doS8",
  x = "allotment-module_separatorBorder__x-rDS";
var I,
  E = !1,
  V = !1;
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && (I = navigator.userAgent, V = I.indexOf("Macintosh") >= 0, E = (I.indexOf("Macintosh") >= 0 || I.indexOf("iPad") >= 0 || I.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var L = E,
  j = V,
  N = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? t.useLayoutEffect : t.useEffect;
var D = /*#__PURE__*/function () {
  function D() {
    _classCallCheck(this, D);
    this._size = void 0;
  }
  _createClass(D, [{
    key: "getSize",
    value: function getSize() {
      return this._size;
    }
  }, {
    key: "setSize",
    value: function setSize(e) {
      this._size = e;
    }
  }]);
  return D;
}();
function P(e, t) {
  var i = e.length,
    r = i - t.length;
  return r >= 0 && e.slice(r, i) === t;
}
var O = {};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function r() {}
  function s(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function n(e, t, r, n, o) {
    if ("function" != typeof r) throw new TypeError("The listener must be a function");
    var a = new s(r, n || e, o),
      u = i ? i + t : t;
    return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
  }
  function o(e, t) {
    0 == --e._eventsCount ? e._events = new r() : delete e._events[t];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  Object.create && (r.prototype = Object.create(null), new r().__proto__ || (i = !1)), a.prototype.eventNames = function () {
    var e,
      r,
      s = [];
    if (0 === this._eventsCount) return s;
    for (r in e = this._events) {
      t.call(e, r) && s.push(i ? r.slice(1) : r);
    }
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var s = 0, n = r.length, o = new Array(n); s < n; s++) {
      o[s] = r[s].fn;
    }
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      r = this._events[t];
    return r ? r.fn ? 1 : r.length : 0;
  }, a.prototype.emit = function (e, t, r, s, n, o) {
    var a = i ? i + e : e;
    if (!this._events[a]) return !1;
    var u,
      c,
      h = this._events[a],
      l = arguments.length;
    if (h.fn) {
      switch (h.once && this.removeListener(e, h.fn, void 0, !0), l) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, t), !0;
        case 3:
          return h.fn.call(h.context, t, r), !0;
        case 4:
          return h.fn.call(h.context, t, r, s), !0;
        case 5:
          return h.fn.call(h.context, t, r, s, n), !0;
        case 6:
          return h.fn.call(h.context, t, r, s, n, o), !0;
      }
      for (c = 1, u = new Array(l - 1); c < l; c++) {
        u[c - 1] = arguments[c];
      }
      h.fn.apply(h.context, u);
    } else {
      var f,
        m = h.length;
      for (c = 0; c < m; c++) {
        switch (h[c].once && this.removeListener(e, h[c].fn, void 0, !0), l) {
          case 1:
            h[c].fn.call(h[c].context);
            break;
          case 2:
            h[c].fn.call(h[c].context, t);
            break;
          case 3:
            h[c].fn.call(h[c].context, t, r);
            break;
          case 4:
            h[c].fn.call(h[c].context, t, r, s);
            break;
          default:
            if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) {
              u[f - 1] = arguments[f];
            }
            h[c].fn.apply(h[c].context, u);
        }
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return n(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return n(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, r, s) {
    var n = i ? i + e : e;
    if (!this._events[n]) return this;
    if (!t) return o(this, n), this;
    var a = this._events[n];
    if (a.fn) a.fn !== t || s && !a.once || r && a.context !== r || o(this, n);else {
      for (var u = 0, c = [], h = a.length; u < h; u++) {
        (a[u].fn !== t || s && !a[u].once || r && a[u].context !== r) && c.push(a[u]);
      }
      c.length ? this._events[n] = 1 === c.length ? c[0] : c : o(this, n);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}({
  get exports() {
    return O;
  },
  set exports(e) {
    O = e;
  }
});
function M(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function A(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function C(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var r = Math.max(0, Math.ceil((t - e) / i)),
    s = new Array(r);
  var n = -1;
  for (; ++n < r;) {
    s[n] = e + n * i;
  }
  return s;
}
var T = /^\s+|\s+$/g,
  F = /^[-+]0x[0-9a-f]+$/i,
  k = /^0b[01]+$/i,
  R = /^0o[0-7]+$/i,
  H = parseInt,
  $ = "object" == _typeof(m) && m && m.Object === Object && m,
  Y = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
  B = $ || Y || Function("return this")(),
  W = Object.prototype.toString,
  G = Math.max,
  U = Math.min,
  X = function X() {
    return B.Date.now();
  };
function J(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function K(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && "[object Symbol]" == W.call(e);
  }(e)) return NaN;
  if (J(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = J(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(T, "");
  var i = k.test(e);
  return i || R.test(e) ? H(e.slice(2), i ? 2 : 8) : F.test(e) ? NaN : +e;
}
var Z = function Z(e, t, i) {
    var r,
      s,
      n,
      o,
      a,
      u,
      c = 0,
      h = !1,
      l = !1,
      f = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function m(t) {
      var i = r,
        n = s;
      return r = s = void 0, c = t, o = e.apply(n, i);
    }
    function d(e) {
      return c = e, a = setTimeout(v, t), h ? m(e) : o;
    }
    function p(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - c >= n;
    }
    function v() {
      var e = X();
      if (p(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? U(i, n - (e - c)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && r ? m(e) : (r = s = void 0, o);
    }
    function b() {
      var e = X(),
        i = p(e);
      if (r = arguments, s = this, u = e, i) {
        if (void 0 === a) return d(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = K(t) || 0, J(i) && (h = !!i.leading, n = (l = "maxWait" in i) ? G(K(i.maxWait) || 0, t) : n, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, r = u = s = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(X());
    }, b;
  },
  q = "sash-module_sash__K-9lB",
  Q = "sash-module_disabled__Hm-wx",
  ee = "sash-module_mac__Jf6OJ",
  te = "sash-module_vertical__pB-rs",
  ie = "sash-module_minimum__-UKxp",
  re = "sash-module_maximum__TCWxD",
  se = "sash-module_horizontal__kFbiw",
  ne = "sash-module_hover__80W6I",
  oe = "sash-module_active__bJspD";
var ae, ue;
!function (e) {
  e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL";
}(ae || (ae = {})), function (e) {
  e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED";
}(ue || (ue = {}));
var ce = L ? 20 : 8;
var he = new O();
var le = /*#__PURE__*/function (_O) {
  _inherits(le, _O);
  var _super = _createSuper(le);
  function le(e, t, i) {
    var _i$orientation;
    var _this;
    _classCallCheck(this, le);
    _this = _super.call(this), _this.el = void 0, _this.layoutProvider = void 0, _this.orientation = void 0, _this.size = void 0, _this.hoverDelay = 300, _this.hoverDelayer = Z(function (e) {
      return e.classList.add("sash-hover", ne);
    }, _this.hoverDelay), _this._state = ue.Enabled, _this.onPointerStart = function (e) {
      var t = e.pageX,
        i = e.pageY,
        r = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      _this.el.classList.add("sash-active", oe), _this.emit("start", r), _this.el.setPointerCapture(e.pointerId);
      var s = function s(e) {
          e.preventDefault();
          var r = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          _this.emit("change", r);
        },
        n = function n(e) {
          e.preventDefault(), _this.el.classList.remove("sash-active", oe), _this.hoverDelayer.cancel(), _this.emit("end"), _this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", n);
        };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", n);
    }, _this.onPointerDoublePress = function () {
      _this.emit("reset");
    }, _this.onMouseEnter = function () {
      _this.el.classList.contains(oe) ? (_this.hoverDelayer.cancel(), _this.el.classList.add("sash-hover", ne)) : _this.hoverDelayer(_this.el);
    }, _this.onMouseLeave = function () {
      _this.hoverDelayer.cancel(), _this.el.classList.remove("sash-hover", ne);
    }, _this.el = document.createElement("div"), _this.el.classList.add("sash", q), _this.el.dataset.testid = "sash", e.append(_this.el), j && _this.el.classList.add("sash-mac", ee), _this.el.addEventListener("pointerdown", _this.onPointerStart), _this.el.addEventListener("dblclick", _this.onPointerDoublePress), _this.el.addEventListener("mouseenter", _this.onMouseEnter), _this.el.addEventListener("mouseleave", _this.onMouseLeave), "number" == typeof i.size ? (_this.size = i.size, i.orientation === ae.Vertical ? _this.el.style.width = "".concat(_this.size, "px") : _this.el.style.height = "".concat(_this.size, "px")) : (_this.size = ce, he.on("onDidChangeGlobalSize", function (e) {
      _this.size = e, _this.layout();
    })), _this.layoutProvider = t, _this.orientation = (_i$orientation = i.orientation) !== null && _i$orientation !== void 0 ? _i$orientation : ae.Vertical, _this.orientation === ae.Horizontal ? (_this.el.classList.add("sash-horizontal", se), _this.el.classList.remove("sash-vertical", te)) : (_this.el.classList.remove("sash-horizontal", se), _this.el.classList.add("sash-vertical", te)), _this.layout();
    return _this;
  }
  _createClass(le, [{
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(e) {
      this._state !== e && (this.el.classList.toggle(Q, e === ue.Disabled), this.el.classList.toggle("sash-disabled", e === ue.Disabled), this.el.classList.toggle(ie, e === ue.Minimum), this.el.classList.toggle("sash-minimum", e === ue.Minimum), this.el.classList.toggle(re, e === ue.Maximum), this.el.classList.toggle("sash-maximum", e === ue.Maximum), this._state = e, this.emit("enablementChange", e));
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this.orientation === ae.Vertical) {
        var _e2 = this.layoutProvider;
        this.el.style.left = _e2.getVerticalSashLeft(this) - this.size / 2 + "px", _e2.getVerticalSashTop && (this.el.style.top = _e2.getVerticalSashTop(this) + "px"), _e2.getVerticalSashHeight && (this.el.style.height = _e2.getVerticalSashHeight(this) + "px");
      } else {
        var _e3 = this.layoutProvider;
        this.el.style.top = _e3.getHorizontalSashTop(this) - this.size / 2 + "px", _e3.getHorizontalSashLeft && (this.el.style.left = _e3.getHorizontalSashLeft(this) + "px"), _e3.getHorizontalSashWidth && (this.el.style.width = _e3.getHorizontalSashWidth(this) + "px");
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;
      this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", function () {
        return _this2.onMouseLeave;
      }), this.el.remove();
    }
  }]);
  return le;
}(O);
var fe;
var me, de;
(me = fe || (fe = {})).Distribute = {
  type: "distribute"
}, me.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, me.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
}, exports.LayoutPriority = void 0, (de = exports.LayoutPriority || (exports.LayoutPriority = {})).Normal = "NORMAL", de.Low = "LOW", de.High = "HIGH";
var pe = /*#__PURE__*/function () {
  function pe(e, t, i) {
    _classCallCheck(this, pe);
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", w), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  _createClass(pe, [{
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(e) {
      this._size = e;
    }
  }, {
    key: "priority",
    get: function get() {
      return this.view.priority;
    }
  }, {
    key: "snap",
    get: function get() {
      return !!this.view.snap;
    }
  }, {
    key: "cachedVisibleSize",
    get: function get() {
      return this._cachedVisibleSize;
    }
  }, {
    key: "visible",
    get: function get() {
      return void 0 === this._cachedVisibleSize;
    }
  }, {
    key: "setVisible",
    value: function setVisible(e, t) {
      e !== this.visible && (e ? (this.size = f(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
    }
  }, {
    key: "minimumSize",
    get: function get() {
      return this.visible ? this.view.minimumSize : 0;
    }
  }, {
    key: "viewMinimumSize",
    get: function get() {
      return this.view.minimumSize;
    }
  }, {
    key: "maximumSize",
    get: function get() {
      return this.visible ? this.view.maximumSize : 0;
    }
  }, {
    key: "viewMaximumSize",
    get: function get() {
      return this.view.maximumSize;
    }
  }, {
    key: "enabled",
    set: function set(e) {
      this.container.style.pointerEvents = e ? "" : "none";
    }
  }, {
    key: "layout",
    value: function layout(e) {
      this.layoutContainer(e), this.view.layout(this.size, e);
    }
  }]);
  return pe;
}();
var ve = /*#__PURE__*/function (_pe) {
  _inherits(ve, _pe);
  var _super2 = _createSuper(ve);
  function ve() {
    _classCallCheck(this, ve);
    return _super2.apply(this, arguments);
  }
  _createClass(ve, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.left = "".concat(e, "px"), this.container.style.width = "".concat(this.size, "px");
    }
  }]);
  return ve;
}(pe);
var ye = /*#__PURE__*/function (_pe2) {
  _inherits(ye, _pe2);
  var _super3 = _createSuper(ye);
  function ye() {
    _classCallCheck(this, ye);
    return _super3.apply(this, arguments);
  }
  _createClass(ye, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.top = "".concat(e, "px"), this.container.style.height = "".concat(this.size, "px");
    }
  }]);
  return ye;
}(pe);
var be = /*#__PURE__*/function (_O2) {
  _inherits(be, _O2);
  var _super4 = _createSuper(be);
  function be(e) {
    var _t$orientation, _t$proportionalLayout;
    var _this3;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var r = arguments.length > 3 ? arguments[3] : undefined;
    var s = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, be);
    if (_this3 = _super4.call(this), _this3.onDidChange = void 0, _this3.onDidDragStart = void 0, _this3.onDidDragEnd = void 0, _this3.orientation = void 0, _this3.sashContainer = void 0, _this3.size = 0, _this3.contentSize = 0, _this3.proportions = void 0, _this3.viewItems = [], _this3.sashItems = [], _this3.sashDragState = void 0, _this3.proportionalLayout = void 0, _this3.getSashOrthogonalSize = void 0, _this3._startSnappingEnabled = !0, _this3._endSnappingEnabled = !0, _this3.onSashEnd = function (e) {
      _this3.emit("sashchange", e), _this3.saveProportions();
      var _iterator = _createForOfIteratorHelper(_this3.viewItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e4 = _step.value;
          _e4.enabled = !0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, _this3.orientation = (_t$orientation = t.orientation) !== null && _t$orientation !== void 0 ? _t$orientation : ae.Vertical, _this3.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) !== null && _t$proportionalLayout !== void 0 ? _t$proportionalLayout : !0, _this3.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (_this3.onDidChange = i), r && (_this3.onDidDragStart = r), s && (_this3.onDidDragEnd = s), _this3.sashContainer = document.createElement("div"), _this3.sashContainer.classList.add("sash-container", g), e.prepend(_this3.sashContainer), t.descriptor) {
      _this3.size = t.descriptor.size;
      var _iterator2 = _createForOfIteratorHelper(t.descriptor.views.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _e5 = _step2$value[0],
            _i = _step2$value[1];
          var _t = _i.size,
            _r = _i.container,
            _s = _i.view;
          _this3.addView(_r, _s, _t, _e5, !0);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      _this3.contentSize = _this3.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), _this3.saveProportions();
    }
    return _possibleConstructorReturn(_this3);
  }
  _createClass(be, [{
    key: "startSnappingEnabled",
    get: function get() {
      return this._startSnappingEnabled;
    },
    set: function set(e) {
      this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "endSnappingEnabled",
    get: function get() {
      return this._endSnappingEnabled;
    },
    set: function set(e) {
      this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "addView",
    value: function addView(e, t, i) {
      var _this4 = this;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.viewItems.length;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var n;
      n = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
        cachedVisibleSize: i.cachedVisibleSize
      } : t.minimumSize;
      var o = this.orientation === ae.Vertical ? new ye(e, t, n) : new ve(e, t, n);
      if (this.viewItems.splice(r, 0, o), this.viewItems.length > 1) {
        var _e6 = this.orientation === ae.Vertical ? new le(this.sashContainer, {
            getHorizontalSashTop: function getHorizontalSashTop(e) {
              return _this4.getSashPosition(e);
            },
            getHorizontalSashWidth: this.getSashOrthogonalSize
          }, {
            orientation: ae.Horizontal
          }) : new le(this.sashContainer, {
            getVerticalSashLeft: function getVerticalSashLeft(e) {
              return _this4.getSashPosition(e);
            },
            getVerticalSashHeight: this.getSashOrthogonalSize
          }, {
            orientation: ae.Vertical
          }),
          _t2 = this.orientation === ae.Vertical ? function (t) {
            return {
              sash: _e6,
              start: t.startY,
              current: t.currentY
            };
          } : function (t) {
            return {
              sash: _e6,
              start: t.startX,
              current: t.currentX
            };
          };
        _e6.on("start", function (e) {
          var _this4$onDidDragStart;
          _this4.emit("sashDragStart"), _this4.onSashStart(_t2(e));
          var i = _this4.viewItems.map(function (e) {
            return e.size;
          });
          (_this4$onDidDragStart = _this4.onDidDragStart) === null || _this4$onDidDragStart === void 0 ? void 0 : _this4$onDidDragStart.call(_this4, i);
        }), _e6.on("change", function (e) {
          return _this4.onSashChange(_t2(e));
        }), _e6.on("end", function () {
          var _this4$onDidDragEnd;
          _this4.emit("sashDragEnd"), _this4.onSashEnd(_this4.sashItems.findIndex(function (t) {
            return t.sash === _e6;
          }));
          var t = _this4.viewItems.map(function (e) {
            return e.size;
          });
          (_this4$onDidDragEnd = _this4.onDidDragEnd) === null || _this4$onDidDragEnd === void 0 ? void 0 : _this4$onDidDragEnd.call(_this4, t);
        }), _e6.on("reset", function () {
          var t = _this4.sashItems.findIndex(function (t) {
              return t.sash === _e6;
            }),
            i = C(t, -1, -1),
            r = C(t + 1, _this4.viewItems.length),
            s = _this4.findFirstSnapIndex(i),
            n = _this4.findFirstSnapIndex(r);
          ("number" != typeof s || _this4.viewItems[s].visible) && ("number" != typeof n || _this4.viewItems[n].visible) && _this4.emit("sashreset", t);
        });
        var _i2 = {
          sash: _e6
        };
        this.sashItems.splice(r - 1, 0, _i2);
      }
      s || this.relayout(), s || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
    }
  }, {
    key: "removeView",
    value: function removeView(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      var i = this.viewItems.splice(e, 1)[0].view;
      if (this.viewItems.length >= 1) {
        var _t3 = Math.max(e - 1, 0);
        this.sashItems.splice(_t3, 1)[0].sash.dispose();
      }
      return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
    }
  }, {
    key: "moveView",
    value: function moveView(e, t, i) {
      var r = this.getViewCachedVisibleSize(t),
        s = void 0 === r ? this.getViewSize(t) : fe.Invisible(r),
        n = this.removeView(t);
      this.addView(e, n, s, i);
    }
  }, {
    key: "getViewCachedVisibleSize",
    value: function getViewCachedVisibleSize(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].cachedVisibleSize;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this5 = this;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size;
      var t = Math.max(this.size, this.contentSize);
      if (this.size = e, this.proportions) for (var _t4 = 0; _t4 < this.viewItems.length; _t4++) {
        var _i3 = this.viewItems[_t4];
        _i3.size = f(Math.round(this.proportions[_t4] * e), _i3.minimumSize, _i3.maximumSize);
      } else {
        var _i4 = C(0, this.viewItems.length),
          _r2 = _i4.filter(function (e) {
            return _this5.viewItems[e].priority === exports.LayoutPriority.Low;
          }),
          _s2 = _i4.filter(function (e) {
            return _this5.viewItems[e].priority === exports.LayoutPriority.High;
          });
        this.resize(this.viewItems.length - 1, e - t, void 0, _r2, _s2);
      }
      this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "resizeView",
    value: function resizeView(e, t) {
      var _this6 = this;
      if (e < 0 || e >= this.viewItems.length) return;
      var i = C(0, this.viewItems.length).filter(function (t) {
          return t !== e;
        }),
        r = [].concat(_toConsumableArray(i.filter(function (e) {
          return _this6.viewItems[e].priority === exports.LayoutPriority.Low;
        })), [e]),
        s = i.filter(function (e) {
          return _this6.viewItems[e].priority === exports.LayoutPriority.High;
        }),
        n = this.viewItems[e];
      t = Math.round(t), t = f(t, n.minimumSize, Math.min(n.maximumSize, this.size)), n.size = t, this.relayout(r, s);
    }
  }, {
    key: "resizeViews",
    value: function resizeViews(e) {
      for (var _t5 = 0; _t5 < e.length; _t5++) {
        var _i5 = this.viewItems[_t5];
        var _r3 = e[_t5];
        _r3 = Math.round(_r3), _r3 = f(_r3, _i5.minimumSize, Math.min(_i5.maximumSize, this.size)), _i5.size = _r3;
      }
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), this.saveProportions(), this.layout(this.size);
    }
  }, {
    key: "getViewSize",
    value: function getViewSize(e) {
      return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
    }
  }, {
    key: "isViewVisible",
    value: function isViewVisible(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].visible;
    }
  }, {
    key: "setViewVisible",
    value: function setViewVisible(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "distributeViewSizes",
    value: function distributeViewSizes() {
      var _this7 = this;
      var e = [];
      var t = 0;
      var _iterator3 = _createForOfIteratorHelper(this.viewItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i7 = _step3.value;
          _i7.maximumSize - _i7.minimumSize > 0 && (e.push(_i7), t += _i7.size);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var i = Math.floor(t / e.length);
      for (var _i6 = 0, _e7 = e; _i6 < _e7.length; _i6++) {
        var _t6 = _e7[_i6];
        _t6.size = f(i, _t6.minimumSize, _t6.maximumSize);
      }
      var r = C(0, this.viewItems.length),
        s = r.filter(function (e) {
          return _this7.viewItems[e].priority === exports.LayoutPriority.Low;
        }),
        n = r.filter(function (e) {
          return _this7.viewItems[e].priority === exports.LayoutPriority.High;
        });
      this.relayout(s, n);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.sashItems.forEach(function (e) {
        return e.sash.dispose();
      }), this.sashItems = [], this.sashContainer.remove();
    }
  }, {
    key: "relayout",
    value: function relayout(e, t) {
      var i = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "onSashStart",
    value: function onSashStart(_ref) {
      var _this8 = this;
      var e = _ref.sash,
        t = _ref.start;
      var i = this.sashItems.findIndex(function (t) {
        return t.sash === e;
      });
      (function (e) {
        var t = _this8.viewItems.map(function (e) {
          return e.size;
        });
        var r,
          s,
          n = Number.NEGATIVE_INFINITY,
          o = Number.POSITIVE_INFINITY;
        var a = C(i, -1, -1),
          u = C(i + 1, _this8.viewItems.length),
          c = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].minimumSize - t[i]);
          }, 0),
          h = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].viewMaximumSize - t[i]);
          }, 0),
          l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].minimumSize);
          }, 0),
          f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].viewMaximumSize);
          }, 0);
        n = Math.max(c, f), o = Math.min(l, h);
        var m = _this8.findFirstSnapIndex(a),
          d = _this8.findFirstSnapIndex(u);
        if ("number" == typeof m) {
          var _e8 = _this8.viewItems[m],
            _t7 = Math.floor(_e8.viewMinimumSize / 2);
          r = {
            index: m,
            limitDelta: _e8.visible ? n - _t7 : n + _t7,
            size: _e8.size
          };
        }
        if ("number" == typeof d) {
          var _e9 = _this8.viewItems[d],
            _t8 = Math.floor(_e9.viewMinimumSize / 2);
          s = {
            index: d,
            limitDelta: _e9.visible ? o + _t8 : o - _t8,
            size: _e9.size
          };
        }
        _this8.sashDragState = {
          start: e,
          current: e,
          index: i,
          sizes: t,
          minDelta: n,
          maxDelta: o,
          snapBefore: r,
          snapAfter: s
        };
      })(t);
    }
  }, {
    key: "onSashChange",
    value: function onSashChange(_ref2) {
      var e = _ref2.current;
      var _this$sashDragState = this.sashDragState,
        t = _this$sashDragState.index,
        i = _this$sashDragState.start,
        r = _this$sashDragState.sizes,
        s = _this$sashDragState.minDelta,
        n = _this$sashDragState.maxDelta,
        o = _this$sashDragState.snapBefore,
        a = _this$sashDragState.snapAfter;
      this.sashDragState.current = e;
      var u = e - i;
      this.resize(t, u, r, void 0, void 0, s, n, o, a), this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "getSashPosition",
    value: function getSashPosition(e) {
      var t = 0;
      for (var _i8 = 0; _i8 < this.sashItems.length; _i8++) {
        if (t += this.viewItems[_i8].size, this.sashItems[_i8].sash === e) return t;
      }
      return 0;
    }
  }, {
    key: "resize",
    value: function resize(e, t) {
      var _this9 = this;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.viewItems.map(function (e) {
        return e.size;
      });
      var r = arguments.length > 3 ? arguments[3] : undefined;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.NEGATIVE_INFINITY;
      var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.POSITIVE_INFINITY;
      var a = arguments.length > 7 ? arguments[7] : undefined;
      var u = arguments.length > 8 ? arguments[8] : undefined;
      if (e < 0 || e >= this.viewItems.length) return 0;
      var c = C(e, -1, -1),
        h = C(e + 1, this.viewItems.length);
      if (s) {
        var _iterator4 = _createForOfIteratorHelper(s),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e10 = _step4.value;
            M(c, _e10), M(h, _e10);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (r) {
        var _iterator5 = _createForOfIteratorHelper(r),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e11 = _step5.value;
            A(c, _e11), A(h, _e11);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      var l = c.map(function (e) {
          return _this9.viewItems[e];
        }),
        m = c.map(function (e) {
          return i[e];
        }),
        d = h.map(function (e) {
          return _this9.viewItems[e];
        }),
        p = h.map(function (e) {
          return i[e];
        }),
        v = c.reduce(function (e, t) {
          return e + (_this9.viewItems[t].minimumSize - i[t]);
        }, 0),
        y = c.reduce(function (e, t) {
          return e + (_this9.viewItems[t].maximumSize - i[t]);
        }, 0),
        b = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].minimumSize);
        }, 0),
        g = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].maximumSize);
        }, 0),
        z = Math.max(v, g, n),
        w = Math.min(b, y, o);
      var S = !1;
      if (a) {
        var _e12 = this.viewItems[a.index],
          _i9 = t >= a.limitDelta;
        S = _i9 !== _e12.visible, _e12.setVisible(_i9, a.size);
      }
      if (!S && u) {
        var _e13 = this.viewItems[u.index],
          _i10 = t < u.limitDelta;
        S = _i10 !== _e13.visible, _e13.setVisible(_i10, u.size);
      }
      if (S) return this.resize(e, t, i, r, s, n, o);
      for (var _e14 = 0, _i11 = t = f(t, z, w); _e14 < l.length; _e14++) {
        var _t9 = l[_e14],
          _r4 = f(m[_e14] + _i11, _t9.minimumSize, _t9.maximumSize);
        _i11 -= _r4 - m[_e14], _t9.size = _r4;
      }
      for (var _e15 = 0, _i12 = t; _e15 < d.length; _e15++) {
        var _t10 = d[_e15],
          _r5 = f(p[_e15] - _i12, _t10.minimumSize, _t10.maximumSize);
        _i12 += _r5 - p[_e15], _t10.size = _r5;
      }
      return t;
    }
  }, {
    key: "distributeEmptySpace",
    value: function distributeEmptySpace(e) {
      var t = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var i = this.size - t;
      var r = C(this.viewItems.length - 1, -1, -1);
      "number" == typeof e && A(r, e);
      for (var _e16 = 0; 0 !== i && _e16 < r.length; _e16++) {
        var _t11 = this.viewItems[r[_e16]],
          _s3 = f(_t11.size + i, _t11.minimumSize, _t11.maximumSize);
        i -= _s3 - _t11.size, _t11.size = _s3;
      }
    }
  }, {
    key: "layoutViews",
    value: function layoutViews() {
      var _this$onDidChange;
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var e = 0;
      var _iterator6 = _createForOfIteratorHelper(this.viewItems),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t12 = _step6.value;
          _t12.layout(e), e += _t12.size;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      (_this$onDidChange = this.onDidChange) !== null && _this$onDidChange !== void 0 && _this$onDidChange.call(this, this.viewItems.map(function (e) {
        return e.size;
      })), this.sashItems.forEach(function (e) {
        return e.sash.layout();
      }), this.updateSashEnablement();
    }
  }, {
    key: "saveProportions",
    value: function saveProportions() {
      var _this10 = this;
      this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(function (e) {
        return e.size / _this10.contentSize;
      }));
    }
  }, {
    key: "updateSashEnablement",
    value: function updateSashEnablement() {
      var e = !1;
      var t = this.viewItems.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      });
      e = !1;
      var i = this.viewItems.map(function (t) {
          return e = t.maximumSize - t.size > 0 || e;
        }),
        r = _toConsumableArray(this.viewItems).reverse();
      e = !1;
      var s = r.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      }).reverse();
      e = !1;
      var n = r.map(function (t) {
        return e = t.maximumSize - t.size > 0 || e;
      }).reverse();
      var o = 0;
      for (var _e17 = 0; _e17 < this.sashItems.length; _e17++) {
        var _r6 = this.sashItems[_e17].sash;
        o += this.viewItems[_e17].size;
        var _a = !(t[_e17] && n[_e17 + 1]),
          _u = !(i[_e17] && s[_e17 + 1]);
        if (_a && _u) {
          var _i13 = C(_e17, -1, -1),
            _n2 = C(_e17 + 1, this.viewItems.length),
            _a2 = this.findFirstSnapIndex(_i13),
            _u2 = this.findFirstSnapIndex(_n2),
            _c = "number" == typeof _a2 && !this.viewItems[_a2].visible,
            _h = "number" == typeof _u2 && !this.viewItems[_u2].visible;
          _c && s[_e17] && (o > 0 || this.startSnappingEnabled) ? _r6.state = ue.Minimum : _h && t[_e17] && (o < this.contentSize || this.endSnappingEnabled) ? _r6.state = ue.Maximum : _r6.state = ue.Disabled;
        } else _r6.state = _a && !_u ? ue.Minimum : !_a && _u ? ue.Maximum : ue.Enabled;
      }
    }
  }, {
    key: "findFirstSnapIndex",
    value: function findFirstSnapIndex(e) {
      var _iterator7 = _createForOfIteratorHelper(e),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t13 = _step7.value;
          var _e18 = this.viewItems[_t13];
          if (_e18.visible && _e18.snap) return _t13;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(e),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _t14 = _step8.value;
          var _e19 = this.viewItems[_t14];
          if (_e19.visible && _e19.maximumSize - _e19.minimumSize > 0) return;
          if (!_e19.visible && _e19.snap) return _t14;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }]);
  return be;
}(O);
var ge = /*#__PURE__*/function () {
  function ge(e) {
    _classCallCheck(this, ge);
    this.size = void 0, this.size = e;
  }
  _createClass(ge, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.size;
    }
  }]);
  return ge;
}();
var ze = /*#__PURE__*/function () {
  function ze(e, t) {
    _classCallCheck(this, ze);
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  _createClass(ze, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.proportion * this.layoutService.getSize();
    }
  }]);
  return ze;
}();
var we = /*#__PURE__*/function () {
  function we() {
    _classCallCheck(this, we);
  }
  _createClass(we, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {}
  }]);
  return we;
}();
var Se = /*#__PURE__*/function () {
  function Se(e, t) {
    var _t$priority;
    _classCallCheck(this, Se);
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new ge(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e20 = t.preferredSize.trim();
      if (P(_e20, "%")) {
        var _t15 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new ze(_t15, this.layoutService);
      } else if (P(_e20, "px")) {
        var _t16 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new ge(_t16);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        var _t17 = Number.parseFloat(_e20);
        this.layoutStrategy = new ge(_t17);
      } else this.layoutStrategy = new we();
    } else this.layoutStrategy = new we();
    this.priority = (_t$priority = t.priority) !== null && _t$priority !== void 0 ? _t$priority : exports.LayoutPriority.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  _createClass(Se, [{
    key: "preferredSize",
    get: function get() {
      return this.layoutStrategy.getPreferredSize();
    },
    set: function set(e) {
      if ("number" == typeof e) this.layoutStrategy = new ge(e);else if ("string" == typeof e) {
        var _t18 = e.trim();
        if (P(_t18, "%")) {
          var _e21 = Number(_t18.slice(0, -1)) / 100;
          this.layoutStrategy = new ze(_e21, this.layoutService);
        } else if (P(_t18, "px")) {
          var _e22 = Number(_t18.slice(0, -2)) / 100;
          this.layoutStrategy = new ge(_e22);
        } else if ("number" == typeof Number.parseFloat(_t18)) {
          var _e23 = Number.parseFloat(_t18);
          this.layoutStrategy = new ge(_e23);
        } else this.layoutStrategy = new we();
      } else this.layoutStrategy = new we();
    }
  }, {
    key: "layout",
    value: function layout(e) {}
  }]);
  return Se;
}();
function _e(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var xe = t.forwardRef(function (_ref3, s) {
  var e = _ref3.className,
    i = _ref3.children;
  return t.createElement("div", {
    ref: s,
    className: r("split-view-view", w, e)
  }, i);
});
xe.displayName = "Allotment.Pane";
var Ie = t.forwardRef(function (_ref4, w) {
  var e = _ref4.children,
    i = _ref4.className,
    _ref4$maxSize = _ref4.maxSize,
    s = _ref4$maxSize === void 0 ? 1 / 0 : _ref4$maxSize,
    _ref4$minSize = _ref4.minSize,
    n = _ref4$minSize === void 0 ? 30 : _ref4$minSize,
    _ref4$proportionalLay = _ref4.proportionalLayout,
    o = _ref4$proportionalLay === void 0 ? !0 : _ref4$proportionalLay,
    _ref4$separator = _ref4.separator,
    a = _ref4$separator === void 0 ? !0 : _ref4$separator,
    u = _ref4.sizes,
    _ref4$defaultSizes = _ref4.defaultSizes,
    c = _ref4$defaultSizes === void 0 ? u : _ref4$defaultSizes,
    _ref4$snap = _ref4.snap,
    h = _ref4$snap === void 0 ? !1 : _ref4$snap,
    _ref4$vertical = _ref4.vertical,
    l = _ref4$vertical === void 0 ? !1 : _ref4$vertical,
    f = _ref4.onChange,
    m = _ref4.onReset,
    d = _ref4.onVisibleChange,
    v = _ref4.onDragStart,
    g = _ref4.onDragEnd;
  var I = t.useRef(null),
    E = t.useRef([]),
    V = t.useRef(new Map()),
    j = t.useRef(null),
    P = t.useRef(new Map()),
    O = t.useRef(new D()),
    M = t.useRef([]),
    _t$useState = t.useState(!1),
    _t$useState2 = _slicedToArray(_t$useState, 2),
    A = _t$useState2[0],
    C = _t$useState2[1];
  "production" !== process.env.NODE_ENV && u && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var T = t.useMemo(function () {
      return t.Children.toArray(e).filter(t.isValidElement);
    }, [e]),
    F = t.useCallback(function (e) {
      var _M$current, _j$current;
      var t = (_M$current = M.current) === null || _M$current === void 0 ? void 0 : _M$current[e];
      return "number" == typeof (t === null || t === void 0 ? void 0 : t.preferredSize) && ((_j$current = j.current) !== null && _j$current !== void 0 && _j$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return t.useImperativeHandle(w, function () {
    return {
      reset: function reset() {
        if (m) m();else {
          var _j$current2;
          (_j$current2 = j.current) === null || _j$current2 === void 0 ? void 0 : _j$current2.distributeViewSizes();
          for (var _e24 = 0; _e24 < M.current.length; _e24++) {
            F(_e24);
          }
        }
      },
      resize: function resize(e) {
        var _j$current3;
        (_j$current3 = j.current) === null || _j$current3 === void 0 ? void 0 : _j$current3.resizeViews(e);
      }
    };
  }), N(function () {
    var e = !0;
    c && P.current.size !== c.length && (e = !1, console.warn("Expected ".concat(c.length, " children based on defaultSizes but found ").concat(P.current.size))), e && c && (E.current = T.map(function (e) {
      return e.key;
    }));
    var t = _objectSpread({
      orientation: l ? ae.Vertical : ae.Horizontal,
      proportionalLayout: o
    }, e && c && {
      descriptor: {
        size: c.reduce(function (e, t) {
          return e + t;
        }, 0),
        views: c.map(function (e, t) {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          var i = V.current.get(E.current[t]),
            r = new Se(O.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize !== void 0 ? _i$minSize : n,
              maximumSize: (_i$maxSize = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize !== void 0 ? _i$maxSize : s,
              priority: (_i$priority = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority !== void 0 ? _i$priority : exports.LayoutPriority.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap !== void 0 ? _i$snap : h
            }));
          return M.current.push(r), {
            container: _toConsumableArray(P.current.values())[t],
            size: e,
            view: r
          };
        })
      }
    });
    j.current = new be(I.current, t, f, v, g), j.current.on("sashDragStart", function () {
      var _I$current;
      (_I$current = I.current) === null || _I$current === void 0 ? void 0 : _I$current.classList.add("split-view-sash-dragging");
    }), j.current.on("sashDragEnd", function () {
      var _I$current2;
      (_I$current2 = I.current) === null || _I$current2 === void 0 ? void 0 : _I$current2.classList.remove("split-view-sash-dragging");
    }), j.current.on("sashchange", function (e) {
      if (d && j.current) {
        var _e25 = T.map(function (e) {
          return e.key;
        });
        for (var _t19 = 0; _t19 < _e25.length; _t19++) {
          var _i14 = V.current.get(_e25[_t19]);
          void 0 !== (_i14 === null || _i14 === void 0 ? void 0 : _i14.visible) && _i14.visible !== j.current.isViewVisible(_t19) && d(_t19, j.current.isViewVisible(_t19));
        }
      }
    }), j.current.on("sashreset", function (e) {
      if (m) m();else {
        var _j$current4;
        if (F(e)) return;
        if (F(e + 1)) return;
        (_j$current4 = j.current) === null || _j$current4 === void 0 ? void 0 : _j$current4.distributeViewSizes();
      }
    });
    var i = j.current;
    return function () {
      i.dispose();
    };
  }, []), N(function () {
    if (A) {
      var _e26 = T.map(function (e) {
          return e.key;
        }),
        _t20 = _toConsumableArray(E.current),
        _i15 = _e26.filter(function (e) {
          return !E.current.includes(e);
        }),
        _r7 = _e26.filter(function (e) {
          return E.current.includes(e);
        }),
        _o = E.current.map(function (t) {
          return !_e26.includes(t);
        });
      for (var _e27 = _o.length - 1; _e27 >= 0; _e27--) {
        var _j$current5;
        _o[_e27] && ((_j$current5 = j.current) !== null && _j$current5 !== void 0 && _j$current5.removeView(_e27), _t20.splice(_e27, 1), M.current.splice(_e27, 1));
      }
      var _iterator9 = _createForOfIteratorHelper(_i15),
        _step9;
      try {
        var _loop3 = function _loop3() {
          var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _j$current9;
          var r = _step9.value;
          var i = V.current.get(r),
            o = new Se(O.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize2 = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize2 !== void 0 ? _i$minSize2 : n,
              maximumSize: (_i$maxSize2 = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize2 !== void 0 ? _i$maxSize2 : s,
              priority: (_i$priority2 = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority2 !== void 0 ? _i$priority2 : exports.LayoutPriority.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap2 = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap2 !== void 0 ? _i$snap2 : h
            }));
          (_j$current9 = j.current) !== null && _j$current9 !== void 0 && _j$current9.addView(P.current.get(r), o, fe.Distribute, _e26.findIndex(function (e) {
            return e === r;
          })), _t20.splice(_e26.findIndex(function (e) {
            return e === r;
          }), 0, r), M.current.splice(_e26.findIndex(function (e) {
            return e === r;
          }), 0, o);
        };
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      for (; !p(_e26, _t20);) {
        var _iterator10 = _createForOfIteratorHelper(_e26.entries()),
          _step10;
        try {
          var _loop = function _loop() {
            var _step10$value = _slicedToArray(_step10.value, 2),
              i = _step10$value[0],
              r = _step10$value[1];
            var e = _t20.findIndex(function (e) {
              return e === r;
            });
            if (e !== i) {
              var _j$current6;
              (_j$current6 = j.current) === null || _j$current6 === void 0 ? void 0 : _j$current6.moveView(P.current.get(r), e, i);
              var _s4 = _t20[e];
              _t20.splice(e, 1), _t20.splice(i, 0, _s4);
              return "break";
            }
          };
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _ret = _loop();
            if (_ret === "break") break;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      var _iterator11 = _createForOfIteratorHelper(_i15),
        _step11;
      try {
        var _loop4 = function _loop4() {
          var _j$current10;
          var t = _step11.value;
          var i = _e26.findIndex(function (e) {
              return e === t;
            }),
            r = M.current[i].preferredSize;
          void 0 !== r && ((_j$current10 = j.current) === null || _j$current10 === void 0 ? void 0 : _j$current10.resizeView(i, r));
        };
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      var _loop2 = function _loop2() {
        var _j$current7, _j$current8;
        var t = _arr2[_i16];
        var i = V.current.get(t),
          r = _e26.findIndex(function (e) {
            return e === t;
          });
        i && _e(i) && void 0 !== i.visible && ((_j$current7 = j.current) === null || _j$current7 === void 0 ? void 0 : _j$current7.isViewVisible(r)) !== i.visible && ((_j$current8 = j.current) === null || _j$current8 === void 0 ? void 0 : _j$current8.setViewVisible(r, i.visible));
      };
      for (var _i16 = 0, _arr2 = [].concat(_toConsumableArray(_i15), _toConsumableArray(_r7)); _i16 < _arr2.length; _i16++) {
        _loop2();
      }
      var _iterator12 = _createForOfIteratorHelper(_r7),
        _step12;
      try {
        var _loop5 = function _loop5() {
          var t = _step12.value;
          var i = V.current.get(t),
            r = _e26.findIndex(function (e) {
              return e === t;
            });
          if (i && _e(i)) {
            var _j$current11;
            void 0 !== i.preferredSize && M.current[r].preferredSize !== i.preferredSize && (M.current[r].preferredSize = i.preferredSize);
            var _e28 = !1;
            void 0 !== i.minSize && M.current[r].minimumSize !== i.minSize && (M.current[r].minimumSize = i.minSize, _e28 = !0), void 0 !== i.maxSize && M.current[r].maximumSize !== i.maxSize && (M.current[r].maximumSize = i.maxSize, _e28 = !0), _e28 && ((_j$current11 = j.current) === null || _j$current11 === void 0 ? void 0 : _j$current11.layout());
          }
        };
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      (_i15.length > 0 || _o.length > 0) && (E.current = _e26);
    }
  }, [T, A, s, n, h]), t.useEffect(function () {
    j.current && (j.current.onDidChange = f);
  }, [f]), t.useEffect(function () {
    j.current && (j.current.onDidDragStart = v);
  }, [v]), t.useEffect(function () {
    j.current && (j.current.onDidDragEnd = g);
  }, [g]), y({
    ref: I,
    onResize: function onResize(_ref5) {
      var _j$current12;
      var e = _ref5.width,
        t = _ref5.height;
      e && t && ((_j$current12 = j.current) !== null && _j$current12 !== void 0 && _j$current12.layout(l ? t : e), O.current.setSize(l ? t : e));
    }
  }), N(function () {
    C(!0);
  }, []), t.useEffect(function () {
    L && Ee(20);
  }, []), t.createElement("div", {
    ref: I,
    className: r("split-view", l ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": a
    }, b, l ? S : _, _defineProperty({}, x, a), i)
  }, t.createElement("div", {
    className: r("split-view-container", z)
  }, t.Children.toArray(e).map(function (e) {
    if (!t.isValidElement(e)) return null;
    var i = e.key;
    return "Allotment.Pane" === e.type.displayName ? (V.current.set(i, e.props), t.cloneElement(e, {
      key: i,
      ref: function ref(t) {
        var r = e.ref;
        r && (r.current = t), t ? P.current.set(i, t) : P.current["delete"](i);
      }
    })) : t.createElement(xe, {
      key: i,
      ref: function ref(e) {
        e ? P.current.set(i, e) : P.current["delete"](i);
      }
    }, e);
  })));
});
function Ee(e) {
  var t = f(e, 4, 20),
    i = f(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    ce = e, he.emit("onDidChangeGlobalSize", e);
  }(t);
}
Ie.displayName = "Allotment";
var Ve = Object.assign(Ie, {
  Pane: xe
});
exports.Allotment = Ve, exports.setSashSize = Ee;
