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
    for (var e = [], s = 0; s < arguments.length; s++) {
      var r = arguments[s];
      if (r) {
        var n = _typeof(r);
        if ("string" === n || "number" === n) e.push(r);else if (Array.isArray(r)) {
          if (r.length) {
            var o = i.apply(null, r);
            o && e.push(o);
          }
        } else if ("object" === n) if (r.toString === Object.prototype.toString) for (var a in r) {
          t.call(r, a) && r[a] && e.push(a);
        } else e.push(r.toString());
      }
    }
    return e.join(" ");
  }
  e.exports ? (i["default"] = i, e.exports = i) : window.classNames = i;
}();
var s = i,
  r = /^\s+|\s+$/g,
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
  e = e.replace(r, "");
  var i = o.test(e);
  return i || a.test(e) ? u(e.slice(2), i ? 2 : 8) : n.test(e) ? NaN : +e;
}
var f = function f(e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = l(i)) == i ? i : 0), void 0 !== t && (t = (t = l(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(l(e), t, i);
  },
  m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  p = {};
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    s = 9007199254740991,
    r = "[object Arguments]",
    n = "[object Array]",
    o = "[object Boolean]",
    a = "[object Date]",
    u = "[object Error]",
    c = "[object Function]",
    h = "[object Map]",
    l = "[object Number]",
    f = "[object Object]",
    p = "[object Promise]",
    d = "[object RegExp]",
    v = "[object Set]",
    y = "[object String]",
    b = "[object Symbol]",
    z = "[object WeakMap]",
    g = "[object ArrayBuffer]",
    w = "[object DataView]",
    S = /^\[object .+?Constructor\]$/,
    _ = /^(?:0|[1-9]\d*)$/,
    x = {};
  x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, x[r] = x[n] = x[g] = x[o] = x[w] = x[a] = x[u] = x[c] = x[h] = x[l] = x[f] = x[d] = x[v] = x[y] = x[z] = !1;
  var I = "object" == _typeof(m) && m && m.Object === Object && m,
    E = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    V = I || E || Function("return this")(),
    L = t && !t.nodeType && t,
    j = L && e && !e.nodeType && e,
    N = j && j.exports === L,
    P = N && I.process,
    O = function () {
      try {
        return P && P.binding && P.binding("util");
      } catch (e) {}
    }(),
    M = O && O.isTypedArray;
  function D(e, t) {
    for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
      if (t(e[i], i, e)) return !0;
    }
    return !1;
  }
  function A(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, s) {
      i[++t] = [s, e];
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
    se = (F = Object.keys, k = Object, function (e) {
      return F(k(e));
    }),
    re = Oe(V, "DataView"),
    ne = Oe(V, "Map"),
    oe = Oe(V, "Promise"),
    ae = Oe(V, "Set"),
    ue = Oe(V, "WeakMap"),
    ce = Oe(Object, "create"),
    he = Ce(re),
    le = Ce(ne),
    fe = Ce(oe),
    me = Ce(ae),
    pe = Ce(ue),
    de = K ? K.prototype : void 0,
    ve = de ? de.valueOf : void 0;
  function ye(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var s = e[t];
      this.set(s[0], s[1]);
    }
  }
  function be(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var s = e[t];
      this.set(s[0], s[1]);
    }
  }
  function ze(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var s = e[t];
      this.set(s[0], s[1]);
    }
  }
  function ge(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.__data__ = new ze(); ++t < i;) {
      this.add(e[t]);
    }
  }
  function we(e) {
    var t = this.__data__ = new be(e);
    this.size = t.size;
  }
  function Se(e, t) {
    var i = ke(e),
      s = !i && Fe(e),
      r = !i && !s && Re(e),
      n = !i && !s && !r && We(e),
      o = i || s || r || n,
      a = o ? function (e, t) {
        for (var i = -1, s = Array(e); ++i < e;) {
          s[i] = t(i);
        }
        return s;
      }(e.length, String) : [],
      u = a.length;
    for (var c in e) {
      !t && !W.call(e, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || n && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ae(c, u)) || a.push(c);
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
        var s = !0;
      } catch (e) {}
      var r = U.call(e);
      s && (t ? e[ee] = i : delete e[ee]);
      return r;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function Ie(e) {
    return Be(e) && xe(e) == r;
  }
  function Ee(e, t, i, s, c) {
    return e === t || (null == e || null == t || !Be(e) && !Be(t) ? e != e && t != t : function (e, t, i, s, c, m) {
      var p = ke(e),
        z = ke(t),
        S = p ? n : De(e),
        _ = z ? n : De(t),
        x = (S = S == r ? f : S) == f,
        I = (_ = _ == r ? f : _) == f,
        E = S == _;
      if (E && Re(e)) {
        if (!Re(t)) return !1;
        p = !0, x = !1;
      }
      if (E && !x) return m || (m = new we()), p || We(e) ? je(e, t, i, s, c, m) : function (e, t, i, s, r, n, c) {
        switch (i) {
          case w:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case g:
            return !(e.byteLength != t.byteLength || !n(new Z(e), new Z(t)));
          case o:
          case a:
          case l:
            return Te(+e, +t);
          case u:
            return e.name == t.name && e.message == t.message;
          case d:
          case y:
            return e == t + "";
          case h:
            var f = A;
          case v:
            var m = 1 & s;
            if (f || (f = C), e.size != t.size && !m) return !1;
            var p = c.get(e);
            if (p) return p == t;
            s |= 2, c.set(e, t);
            var z = je(f(e), f(t), s, r, n, c);
            return c["delete"](e), z;
          case b:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, s, c, m);
      if (!(1 & i)) {
        var V = x && W.call(e, "__wrapped__"),
          L = I && W.call(t, "__wrapped__");
        if (V || L) {
          var j = V ? e.value() : e,
            N = L ? t.value() : t;
          return m || (m = new we()), c(j, N, i, s, m);
        }
      }
      if (!E) return !1;
      return m || (m = new we()), function (e, t, i, s, r, n) {
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
        var p = o;
        for (; ++h < u;) {
          var d = e[l = a[h]],
            v = t[l];
          if (s) var y = o ? s(v, d, l, t, e, n) : s(d, v, l, e, t, n);
          if (!(void 0 === y ? d === v || r(d, v, i, s, n) : y)) {
            m = !1;
            break;
          }
          p || (p = "constructor" == l);
        }
        if (m && !p) {
          var b = e.constructor,
            z = t.constructor;
          b == z || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof z && z instanceof z || (m = !1);
        }
        return n["delete"](e), n["delete"](t), m;
      }(e, t, i, s, c, m);
    }(e, t, i, s, Ee, c));
  }
  function Ve(e) {
    return !(!Ye(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Ce(e));
  }
  function Le(e) {
    if (i = (t = e) && t.constructor, s = "function" == typeof i && i.prototype || $, t !== s) return se(e);
    var t,
      i,
      s,
      r = [];
    for (var n in Object(e)) {
      W.call(e, n) && "constructor" != n && r.push(n);
    }
    return r;
  }
  function je(e, t, i, s, r, n) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var c = n.get(e);
    if (c && n.get(t)) return c == t;
    var h = -1,
      l = !0,
      f = 2 & i ? new ge() : void 0;
    for (n.set(e, t), n.set(t, e); ++h < a;) {
      var m = e[h],
        p = t[h];
      if (s) var d = o ? s(p, m, h, t, e, n) : s(m, p, h, e, t, n);
      if (void 0 !== d) {
        if (d) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!D(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || r(m, e, i, s, n))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== p && !r(m, p, i, s, n)) {
        l = !1;
        break;
      }
    }
    return n["delete"](e), n["delete"](t), l;
  }
  function Ne(e) {
    return function (e, t, i) {
      var s = t(e);
      return ke(e) ? s : function (e, t) {
        for (var i = -1, s = t.length, r = e.length; ++i < s;) {
          e[r + i] = t[i];
        }
        return e;
      }(s, i(e));
    }(e, Ge, Me);
  }
  function Pe(e, t) {
    var i,
      s,
      r = e.__data__;
    return ("string" == (s = _typeof(i = t)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  }
  function Oe(e, t) {
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
      var s = t[e];
      return s === i ? void 0 : s;
    }
    return W.call(t, e) ? t[e] : void 0;
  }, ye.prototype.has = function (e) {
    var t = this.__data__;
    return ce ? void 0 !== t[e] : W.call(t, e);
  }, ye.prototype.set = function (e, t) {
    var s = this.__data__;
    return this.size += this.has(e) ? 0 : 1, s[e] = ce && void 0 === t ? i : t, this;
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
      s = _e(i, e);
    return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
  }, ze.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (ne || be)(),
      string: new ye()
    };
  }, ze.prototype["delete"] = function (e) {
    var t = Pe(this, e)["delete"](e);
    return this.size -= t ? 1 : 0, t;
  }, ze.prototype.get = function (e) {
    return Pe(this, e).get(e);
  }, ze.prototype.has = function (e) {
    return Pe(this, e).has(e);
  }, ze.prototype.set = function (e, t) {
    var i = Pe(this, e),
      s = i.size;
    return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
  }, ge.prototype.add = ge.prototype.push = function (e) {
    return this.__data__.set(e, i), this;
  }, ge.prototype.has = function (e) {
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
      var s = i.__data__;
      if (!ne || s.length < 199) return s.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new ze(s);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Me = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, s = null == e ? 0 : e.length, r = 0, n = []; ++i < s;) {
          var o = e[i];
          t(o, i, e) && (n[r++] = o);
        }
        return n;
      }(te(e), function (t) {
        return q.call(e, t);
      }));
    } : function () {
      return [];
    },
    De = xe;
  function Ae(e, t) {
    return !!(t = null == t ? s : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
  (re && De(new re(new ArrayBuffer(1))) != w || ne && De(new ne()) != h || oe && De(oe.resolve()) != p || ae && De(new ae()) != v || ue && De(new ue()) != z) && (De = function De(e) {
    var t = xe(e),
      i = t == f ? e.constructor : void 0,
      s = i ? Ce(i) : "";
    if (s) switch (s) {
      case he:
        return w;
      case le:
        return h;
      case fe:
        return p;
      case me:
        return v;
      case pe:
        return z;
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
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
  }
  function Ye(e) {
    var t = _typeof(e);
    return null != e && ("object" == t || "function" == t);
  }
  function Be(e) {
    return null != e && "object" == _typeof(e);
  }
  var We = M ? function (e) {
    return function (t) {
      return e(t);
    };
  }(M) : function (e) {
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
    return p;
  },
  set exports(e) {
    p = e;
  }
}, p);
var d = p;
function v(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function y(e) {
  void 0 === e && (e = {});
  var i = e.onResize,
    s = t.useRef(void 0);
  s.current = i;
  var r = e.round || Math.round,
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
      var s = t.useRef(null),
        r = t.useRef(null);
      r.current = i;
      var n = t.useRef(null);
      t.useEffect(function () {
        o();
      });
      var o = t.useCallback(function () {
        var t = n.current,
          i = r.current,
          o = t || (i ? i instanceof Element ? i : i.current : null);
        s.current && s.current.element === o && s.current.subscriber === e || (s.current && s.current.cleanup && s.current.cleanup(), s.current = {
          element: o,
          subscriber: e,
          cleanup: o ? e(o) : void 0
        });
      }, [e]);
      return t.useEffect(function () {
        return function () {
          s.current && s.current.cleanup && (s.current.cleanup(), s.current = null);
        };
      }, []), t.useCallback(function (e) {
        n.current = e, o();
      }, [o]);
    }(t.useCallback(function (t) {
      return n.current && n.current.box === e.box && n.current.round === r || (n.current = {
        box: e.box,
        round: r,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            o = v(i, n, "inlineSize"),
            a = v(i, n, "blockSize"),
            l = o ? r(o) : void 0,
            f = a ? r(a) : void 0;
          if (h.current.width !== l || h.current.height !== f) {
            var m = {
              width: l,
              height: f
            };
            h.current.width = l, h.current.height = f, s.current ? s.current(m) : c.current || u(m);
          }
        })
      }), n.current.instance.observe(t, {
        box: e.box
      }), function () {
        n.current && n.current.instance.unobserve(t);
      };
    }, [e.box, r]), e.ref);
  return t.useMemo(function () {
    return {
      ref: l,
      width: a.width,
      height: a.height
    };
  }, [l, a.width, a.height]);
}
var b = "allotment-module_splitView__L-yRc",
  z = "allotment-module_sashContainer__fzwJF",
  g = "allotment-module_splitViewContainer__rQnVa",
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
var P = /*#__PURE__*/function () {
  function P() {
    _classCallCheck(this, P);
    this._size = void 0;
  }
  _createClass(P, [{
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
  return P;
}();
function O(e, t) {
  var i = e.length,
    s = i - t.length;
  return s >= 0 && e.slice(s, i) === t;
}
var M = {};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function s() {}
  function r(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function n(e, t, s, n, o) {
    if ("function" != typeof s) throw new TypeError("The listener must be a function");
    var a = new r(s, n || e, o),
      u = i ? i + t : t;
    return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
  }
  function o(e, t) {
    0 == --e._eventsCount ? e._events = new s() : delete e._events[t];
  }
  function a() {
    this._events = new s(), this._eventsCount = 0;
  }
  Object.create && (s.prototype = Object.create(null), new s().__proto__ || (i = !1)), a.prototype.eventNames = function () {
    var e,
      s,
      r = [];
    if (0 === this._eventsCount) return r;
    for (s in e = this._events) {
      t.call(e, s) && r.push(i ? s.slice(1) : s);
    }
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      s = this._events[t];
    if (!s) return [];
    if (s.fn) return [s.fn];
    for (var r = 0, n = s.length, o = new Array(n); r < n; r++) {
      o[r] = s[r].fn;
    }
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      s = this._events[t];
    return s ? s.fn ? 1 : s.length : 0;
  }, a.prototype.emit = function (e, t, s, r, n, o) {
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
          return h.fn.call(h.context, t, s), !0;
        case 4:
          return h.fn.call(h.context, t, s, r), !0;
        case 5:
          return h.fn.call(h.context, t, s, r, n), !0;
        case 6:
          return h.fn.call(h.context, t, s, r, n, o), !0;
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
            h[c].fn.call(h[c].context, t, s);
            break;
          case 4:
            h[c].fn.call(h[c].context, t, s, r);
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
  }, a.prototype.removeListener = function (e, t, s, r) {
    var n = i ? i + e : e;
    if (!this._events[n]) return this;
    if (!t) return o(this, n), this;
    var a = this._events[n];
    if (a.fn) a.fn !== t || r && !a.once || s && a.context !== s || o(this, n);else {
      for (var u = 0, c = [], h = a.length; u < h; u++) {
        (a[u].fn !== t || r && !a[u].once || s && a[u].context !== s) && c.push(a[u]);
      }
      c.length ? this._events[n] = 1 === c.length ? c[0] : c : o(this, n);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new s(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}({
  get exports() {
    return M;
  },
  set exports(e) {
    M = e;
  }
});
function D(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function A(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function C(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var s = Math.max(0, Math.ceil((t - e) / i)),
    r = new Array(s);
  var n = -1;
  for (; ++n < s;) {
    r[n] = e + n * i;
  }
  return r;
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
    var s,
      r,
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
      var i = s,
        n = r;
      return s = r = void 0, c = t, o = e.apply(n, i);
    }
    function p(e) {
      return c = e, a = setTimeout(v, t), h ? m(e) : o;
    }
    function d(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - c >= n;
    }
    function v() {
      var e = X();
      if (d(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? U(i, n - (e - c)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && s ? m(e) : (s = r = void 0, o);
    }
    function b() {
      var e = X(),
        i = d(e);
      if (s = arguments, r = this, u = e, i) {
        if (void 0 === a) return p(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = K(t) || 0, J(i) && (h = !!i.leading, n = (l = "maxWait" in i) ? G(K(i.maxWait) || 0, t) : n, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, s = u = r = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(X());
    }, b;
  },
  q = "sash-module_sash__K-9lB",
  Q = "sash-module_disabled__Hm-wx",
  ee = "sash-module_mac__Jf6OJ",
  te = "sash-module_vertical__pB-rs",
  ie = "sash-module_minimum__-UKxp",
  se = "sash-module_maximum__TCWxD",
  re = "sash-module_horizontal__kFbiw",
  ne = "sash-module_hover__80W6I",
  oe = "sash-module_active__bJspD";
var ae, ue;
!function (e) {
  e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL";
}(ae || (ae = {})), function (e) {
  e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED";
}(ue || (ue = {}));
var ce = L ? 20 : 8;
var he = new M();
var le = /*#__PURE__*/function (_M) {
  _inherits(le, _M);
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
        s = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      _this.el.classList.add("sash-active", oe), _this.emit("start", s), _this.el.setPointerCapture(e.pointerId);
      var r = function r(e) {
          e.preventDefault();
          var s = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          _this.emit("change", s);
        },
        n = function n(e) {
          e.preventDefault(), _this.el.classList.remove("sash-active", oe), _this.hoverDelayer.cancel(), _this.emit("end"), _this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", n);
        };
      window.addEventListener("pointermove", r), window.addEventListener("pointerup", n);
    }, _this.onPointerDoublePress = function () {
      _this.emit("reset");
    }, _this.onMouseEnter = function () {
      _this.el.classList.contains(oe) ? (_this.hoverDelayer.cancel(), _this.el.classList.add("sash-hover", ne)) : _this.hoverDelayer(_this.el);
    }, _this.onMouseLeave = function () {
      _this.hoverDelayer.cancel(), _this.el.classList.remove("sash-hover", ne);
    }, _this.el = document.createElement("div"), _this.el.classList.add("sash", q), _this.el.dataset.testid = "sash", e.append(_this.el), j && _this.el.classList.add("sash-mac", ee), _this.el.addEventListener("pointerdown", _this.onPointerStart), _this.el.addEventListener("dblclick", _this.onPointerDoublePress), _this.el.addEventListener("mouseenter", _this.onMouseEnter), _this.el.addEventListener("mouseleave", _this.onMouseLeave), "number" == typeof i.size ? (_this.size = i.size, i.orientation === ae.Vertical ? _this.el.style.width = "".concat(_this.size, "px") : _this.el.style.height = "".concat(_this.size, "px")) : (_this.size = ce, he.on("onDidChangeGlobalSize", function (e) {
      _this.size = e, _this.layout();
    })), _this.layoutProvider = t, _this.orientation = (_i$orientation = i.orientation) !== null && _i$orientation !== void 0 ? _i$orientation : ae.Vertical, _this.orientation === ae.Horizontal ? (_this.el.classList.add("sash-horizontal", re), _this.el.classList.remove("sash-vertical", te)) : (_this.el.classList.remove("sash-horizontal", re), _this.el.classList.add("sash-vertical", te)), _this.layout();
    return _this;
  }
  _createClass(le, [{
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(e) {
      this._state !== e && (this.el.classList.toggle(Q, e === ue.Disabled), this.el.classList.toggle("dash-disabled", e === ue.Disabled), this.el.classList.toggle(ie, e === ue.Minimum), this.el.classList.toggle("sash-minimum", e === ue.Minimum), this.el.classList.toggle(se, e === ue.Maximum), this.el.classList.toggle("sash-maximum", e === ue.Maximum), this._state = e, this.emit("enablementChange", e));
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
}(M);
var fe;
var me, pe;
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
}, exports.LayoutPriority = void 0, (pe = exports.LayoutPriority || (exports.LayoutPriority = {})).Normal = "NORMAL", pe.Low = "LOW", pe.High = "HIGH";
var de = /*#__PURE__*/function () {
  function de(e, t, i) {
    _classCallCheck(this, de);
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", w), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  _createClass(de, [{
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
  return de;
}();
var ve = /*#__PURE__*/function (_de) {
  _inherits(ve, _de);
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
}(de);
var ye = /*#__PURE__*/function (_de2) {
  _inherits(ye, _de2);
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
}(de);
var be = /*#__PURE__*/function (_M2) {
  _inherits(be, _M2);
  var _super4 = _createSuper(be);
  function be(e) {
    var _t$orientation, _t$proportionalLayout;
    var _this3;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, be);
    if (_this3 = _super4.call(this), _this3.onDidChange = void 0, _this3.orientation = void 0, _this3.sashContainer = void 0, _this3.size = 0, _this3.contentSize = 0, _this3.proportions = void 0, _this3.viewItems = [], _this3.sashItems = [], _this3.sashDragState = void 0, _this3.proportionalLayout = void 0, _this3.getSashOrthogonalSize = void 0, _this3._startSnappingEnabled = !0, _this3._endSnappingEnabled = !0, _this3.onSashEnd = function (e) {
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
    }, _this3.orientation = (_t$orientation = t.orientation) !== null && _t$orientation !== void 0 ? _t$orientation : ae.Vertical, _this3.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) !== null && _t$proportionalLayout !== void 0 ? _t$proportionalLayout : !0, _this3.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (_this3.onDidChange = i), _this3.sashContainer = document.createElement("div"), _this3.sashContainer.classList.add("sash-container", z), e.prepend(_this3.sashContainer), t.descriptor) {
      _this3.size = t.descriptor.size;
      var _iterator2 = _createForOfIteratorHelper(t.descriptor.views.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _e5 = _step2$value[0],
            _i = _step2$value[1];
          var _t = _i.size,
            _s = _i.container,
            _r = _i.view;
          _this3.addView(_s, _r, _t, _e5, !0);
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
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.viewItems.length;
      var r = arguments.length > 4 ? arguments[4] : undefined;
      var n;
      n = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
        cachedVisibleSize: i.cachedVisibleSize
      } : t.minimumSize;
      var o = this.orientation === ae.Vertical ? new ye(e, t, n) : new ve(e, t, n);
      if (this.viewItems.splice(s, 0, o), this.viewItems.length > 1) {
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
          _this4.emit("sashDragStart"), _this4.onSashStart(_t2(e));
        }), _e6.on("change", function (e) {
          return _this4.onSashChange(_t2(e));
        }), _e6.on("end", function () {
          _this4.emit("sashDragEnd"), _this4.onSashEnd(_this4.sashItems.findIndex(function (t) {
            return t.sash === _e6;
          }));
        }), _e6.on("reset", function () {
          var t = _this4.sashItems.findIndex(function (t) {
              return t.sash === _e6;
            }),
            i = C(t, -1, -1),
            s = C(t + 1, _this4.viewItems.length),
            r = _this4.findFirstSnapIndex(i),
            n = _this4.findFirstSnapIndex(s);
          ("number" != typeof r || _this4.viewItems[r].visible) && ("number" != typeof n || _this4.viewItems[n].visible) && _this4.emit("sashreset", t);
        });
        var _i2 = {
          sash: _e6
        };
        this.sashItems.splice(s - 1, 0, _i2);
      }
      r || this.relayout(), r || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
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
      var s = this.getViewCachedVisibleSize(t),
        r = void 0 === s ? this.getViewSize(t) : fe.Invisible(s),
        n = this.removeView(t);
      this.addView(e, n, r, i);
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
          _s2 = _i4.filter(function (e) {
            return _this5.viewItems[e].priority === exports.LayoutPriority.Low;
          }),
          _r2 = _i4.filter(function (e) {
            return _this5.viewItems[e].priority === exports.LayoutPriority.High;
          });
        this.resize(this.viewItems.length - 1, e - t, void 0, _s2, _r2);
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
        s = [].concat(_toConsumableArray(i.filter(function (e) {
          return _this6.viewItems[e].priority === exports.LayoutPriority.Low;
        })), [e]),
        r = i.filter(function (e) {
          return _this6.viewItems[e].priority === exports.LayoutPriority.High;
        }),
        n = this.viewItems[e];
      t = Math.round(t), t = f(t, n.minimumSize, Math.min(n.maximumSize, this.size)), n.size = t, this.relayout(s, r);
    }
  }, {
    key: "resizeViews",
    value: function resizeViews(e) {
      for (var _t5 = 0; _t5 < e.length; _t5++) {
        var _i5 = this.viewItems[_t5];
        var _s3 = e[_t5];
        _s3 = Math.round(_s3), _s3 = f(_s3, _i5.minimumSize, Math.min(_i5.maximumSize, this.size)), _i5.size = _s3;
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
      var s = C(0, this.viewItems.length),
        r = s.filter(function (e) {
          return _this7.viewItems[e].priority === exports.LayoutPriority.Low;
        }),
        n = s.filter(function (e) {
          return _this7.viewItems[e].priority === exports.LayoutPriority.High;
        });
      this.relayout(r, n);
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
        var s,
          r,
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
          p = _this8.findFirstSnapIndex(u);
        if ("number" == typeof m) {
          var _e8 = _this8.viewItems[m],
            _t7 = Math.floor(_e8.viewMinimumSize / 2);
          s = {
            index: m,
            limitDelta: _e8.visible ? n - _t7 : n + _t7,
            size: _e8.size
          };
        }
        if ("number" == typeof p) {
          var _e9 = _this8.viewItems[p],
            _t8 = Math.floor(_e9.viewMinimumSize / 2);
          r = {
            index: p,
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
          snapBefore: s,
          snapAfter: r
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
        s = _this$sashDragState.sizes,
        r = _this$sashDragState.minDelta,
        n = _this$sashDragState.maxDelta,
        o = _this$sashDragState.snapBefore,
        a = _this$sashDragState.snapAfter;
      this.sashDragState.current = e;
      var u = e - i;
      this.resize(t, u, s, void 0, void 0, r, n, o, a), this.distributeEmptySpace(), this.layoutViews();
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
      var s = arguments.length > 3 ? arguments[3] : undefined;
      var r = arguments.length > 4 ? arguments[4] : undefined;
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.NEGATIVE_INFINITY;
      var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.POSITIVE_INFINITY;
      var a = arguments.length > 7 ? arguments[7] : undefined;
      var u = arguments.length > 8 ? arguments[8] : undefined;
      if (e < 0 || e >= this.viewItems.length) return 0;
      var c = C(e, -1, -1),
        h = C(e + 1, this.viewItems.length);
      if (r) {
        var _iterator4 = _createForOfIteratorHelper(r),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e10 = _step4.value;
            D(c, _e10), D(h, _e10);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (s) {
        var _iterator5 = _createForOfIteratorHelper(s),
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
        p = h.map(function (e) {
          return _this9.viewItems[e];
        }),
        d = h.map(function (e) {
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
        z = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].maximumSize);
        }, 0),
        g = Math.max(v, z, n),
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
      if (S) return this.resize(e, t, i, s, r, n, o);
      for (var _e14 = 0, _i11 = t = f(t, g, w); _e14 < l.length; _e14++) {
        var _t9 = l[_e14],
          _s4 = f(m[_e14] + _i11, _t9.minimumSize, _t9.maximumSize);
        _i11 -= _s4 - m[_e14], _t9.size = _s4;
      }
      for (var _e15 = 0, _i12 = t; _e15 < p.length; _e15++) {
        var _t10 = p[_e15],
          _s5 = f(d[_e15] - _i12, _t10.minimumSize, _t10.maximumSize);
        _i12 += _s5 - d[_e15], _t10.size = _s5;
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
      var s = C(this.viewItems.length - 1, -1, -1);
      "number" == typeof e && A(s, e);
      for (var _e16 = 0; 0 !== i && _e16 < s.length; _e16++) {
        var _t11 = this.viewItems[s[_e16]],
          _r3 = f(_t11.size + i, _t11.minimumSize, _t11.maximumSize);
        i -= _r3 - _t11.size, _t11.size = _r3;
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
        s = _toConsumableArray(this.viewItems).reverse();
      e = !1;
      var r = s.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      }).reverse();
      e = !1;
      var n = s.map(function (t) {
        return e = t.maximumSize - t.size > 0 || e;
      }).reverse();
      var o = 0;
      for (var _e17 = 0; _e17 < this.sashItems.length; _e17++) {
        var _s6 = this.sashItems[_e17].sash;
        o += this.viewItems[_e17].size;
        var _a = !(t[_e17] && n[_e17 + 1]),
          _u = !(i[_e17] && r[_e17 + 1]);
        if (_a && _u) {
          var _i13 = C(_e17, -1, -1),
            _n2 = C(_e17 + 1, this.viewItems.length),
            _a2 = this.findFirstSnapIndex(_i13),
            _u2 = this.findFirstSnapIndex(_n2),
            _c = "number" == typeof _a2 && !this.viewItems[_a2].visible,
            _h = "number" == typeof _u2 && !this.viewItems[_u2].visible;
          _c && r[_e17] && (o > 0 || this.startSnappingEnabled) ? _s6.state = ue.Minimum : _h && t[_e17] && (o < this.contentSize || this.endSnappingEnabled) ? _s6.state = ue.Maximum : _s6.state = ue.Disabled;
        } else _s6.state = _a && !_u ? ue.Minimum : !_a && _u ? ue.Maximum : ue.Enabled;
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
}(M);
var ze = /*#__PURE__*/function () {
  function ze(e) {
    _classCallCheck(this, ze);
    this.size = void 0, this.size = e;
  }
  _createClass(ze, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.size;
    }
  }]);
  return ze;
}();
var ge = /*#__PURE__*/function () {
  function ge(e, t) {
    _classCallCheck(this, ge);
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  _createClass(ge, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.proportion * this.layoutService.getSize();
    }
  }]);
  return ge;
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
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new ze(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e20 = t.preferredSize.trim();
      if (O(_e20, "%")) {
        var _t15 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new ge(_t15, this.layoutService);
      } else if (O(_e20, "px")) {
        var _t16 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new ze(_t16);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        var _t17 = Number.parseFloat(_e20);
        this.layoutStrategy = new ze(_t17);
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
      if ("number" == typeof e) this.layoutStrategy = new ze(e);else if ("string" == typeof e) {
        var _t18 = e.trim();
        if (O(_t18, "%")) {
          var _e21 = Number(_t18.slice(0, -1)) / 100;
          this.layoutStrategy = new ge(_e21, this.layoutService);
        } else if (O(_t18, "px")) {
          var _e22 = Number(_t18.slice(0, -2)) / 100;
          this.layoutStrategy = new ze(_e22);
        } else if ("number" == typeof Number.parseFloat(_t18)) {
          var _e23 = Number.parseFloat(_t18);
          this.layoutStrategy = new ze(_e23);
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
var xe = t.forwardRef(function (_ref3, r) {
  var e = _ref3.className,
    i = _ref3.children;
  return t.createElement("div", {
    ref: r,
    className: s("split-view-view", w, e)
  }, i);
});
xe.displayName = "Allotment.Pane";
var Ie = t.forwardRef(function (_ref4, v) {
  var e = _ref4.children,
    i = _ref4.className,
    _ref4$maxSize = _ref4.maxSize,
    r = _ref4$maxSize === void 0 ? 1 / 0 : _ref4$maxSize,
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
    p = _ref4.onVisibleChange;
  var z = t.useRef(null),
    w = t.useRef([]),
    I = t.useRef(new Map()),
    E = t.useRef(null),
    V = t.useRef(new Map()),
    j = t.useRef(new P()),
    O = t.useRef([]),
    _t$useState = t.useState(!1),
    _t$useState2 = _slicedToArray(_t$useState, 2),
    M = _t$useState2[0],
    D = _t$useState2[1];
  "production" !== process.env.NODE_ENV && u && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var A = t.useMemo(function () {
      return t.Children.toArray(e).filter(t.isValidElement);
    }, [e]),
    C = t.useCallback(function (e) {
      var _O$current, _E$current;
      var t = (_O$current = O.current) === null || _O$current === void 0 ? void 0 : _O$current[e];
      return "number" == typeof (t === null || t === void 0 ? void 0 : t.preferredSize) && ((_E$current = E.current) !== null && _E$current !== void 0 && _E$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return t.useImperativeHandle(v, function () {
    return {
      reset: function reset() {
        if (m) m();else {
          var _E$current2;
          (_E$current2 = E.current) === null || _E$current2 === void 0 ? void 0 : _E$current2.distributeViewSizes();
          for (var _e24 = 0; _e24 < O.current.length; _e24++) {
            C(_e24);
          }
        }
      },
      resize: function resize(e) {
        var _E$current3;
        (_E$current3 = E.current) === null || _E$current3 === void 0 ? void 0 : _E$current3.resizeViews(e);
      }
    };
  }), N(function () {
    var e = !0;
    c && V.current.size !== c.length && (e = !1, console.warn("Expected ".concat(c.length, " children based on defaultSizes but found ").concat(V.current.size))), e && c && (w.current = A.map(function (e) {
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
          var i = I.current.get(w.current[t]),
            s = new Se(j.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize !== void 0 ? _i$minSize : n,
              maximumSize: (_i$maxSize = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize !== void 0 ? _i$maxSize : r,
              priority: (_i$priority = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority !== void 0 ? _i$priority : exports.LayoutPriority.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap !== void 0 ? _i$snap : h
            }));
          return O.current.push(s), {
            container: _toConsumableArray(V.current.values())[t],
            size: e,
            view: s
          };
        })
      }
    });
    E.current = new be(z.current, t, f), E.current.on("sashDragStart", function () {
      var _z$current;
      (_z$current = z.current) === null || _z$current === void 0 ? void 0 : _z$current.classList.add("split-view-sash-dragging");
    }), E.current.on("sashDragEnd", function () {
      var _z$current2;
      (_z$current2 = z.current) === null || _z$current2 === void 0 ? void 0 : _z$current2.classList.remove("split-view-sash-dragging");
    }), E.current.on("sashchange", function (e) {
      if (p && E.current) {
        var _e25 = A.map(function (e) {
          return e.key;
        });
        for (var _t19 = 0; _t19 < _e25.length; _t19++) {
          var _i14 = I.current.get(_e25[_t19]);
          void 0 !== (_i14 === null || _i14 === void 0 ? void 0 : _i14.visible) && _i14.visible !== E.current.isViewVisible(_t19) && p(_t19, E.current.isViewVisible(_t19));
        }
      }
    }), E.current.on("sashreset", function (e) {
      if (m) m();else {
        var _E$current4;
        if (C(e)) return;
        if (C(e + 1)) return;
        (_E$current4 = E.current) === null || _E$current4 === void 0 ? void 0 : _E$current4.distributeViewSizes();
      }
    });
    var i = E.current;
    return function () {
      i.dispose();
    };
  }, []), N(function () {
    if (M) {
      var _e26 = A.map(function (e) {
          return e.key;
        }),
        _t20 = _toConsumableArray(w.current),
        _i15 = _e26.filter(function (e) {
          return !w.current.includes(e);
        }),
        _s7 = _e26.filter(function (e) {
          return w.current.includes(e);
        }),
        _o = w.current.map(function (t) {
          return !_e26.includes(t);
        });
      for (var _e27 = _o.length - 1; _e27 >= 0; _e27--) {
        var _E$current5;
        _o[_e27] && ((_E$current5 = E.current) !== null && _E$current5 !== void 0 && _E$current5.removeView(_e27), _t20.splice(_e27, 1), O.current.splice(_e27, 1));
      }
      var _iterator9 = _createForOfIteratorHelper(_i15),
        _step9;
      try {
        var _loop3 = function _loop3() {
          var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _E$current9;
          var s = _step9.value;
          var i = I.current.get(s),
            o = new Se(j.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize2 = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize2 !== void 0 ? _i$minSize2 : n,
              maximumSize: (_i$maxSize2 = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize2 !== void 0 ? _i$maxSize2 : r,
              priority: (_i$priority2 = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority2 !== void 0 ? _i$priority2 : exports.LayoutPriority.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap2 = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap2 !== void 0 ? _i$snap2 : h
            }));
          (_E$current9 = E.current) !== null && _E$current9 !== void 0 && _E$current9.addView(V.current.get(s), o, fe.Distribute, _e26.findIndex(function (e) {
            return e === s;
          })), _t20.splice(_e26.findIndex(function (e) {
            return e === s;
          }), 0, s), O.current.splice(_e26.findIndex(function (e) {
            return e === s;
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
      for (; !d(_e26, _t20);) {
        var _iterator10 = _createForOfIteratorHelper(_e26.entries()),
          _step10;
        try {
          var _loop = function _loop() {
            var _step10$value = _slicedToArray(_step10.value, 2),
              i = _step10$value[0],
              s = _step10$value[1];
            var e = _t20.findIndex(function (e) {
              return e === s;
            });
            if (e !== i) {
              var _E$current6;
              (_E$current6 = E.current) === null || _E$current6 === void 0 ? void 0 : _E$current6.moveView(V.current.get(s), e, i);
              var _r4 = _t20[e];
              _t20.splice(e, 1), _t20.splice(i, 0, _r4);
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
          var _E$current10;
          var t = _step11.value;
          var i = _e26.findIndex(function (e) {
              return e === t;
            }),
            s = O.current[i].preferredSize;
          void 0 !== s && ((_E$current10 = E.current) === null || _E$current10 === void 0 ? void 0 : _E$current10.resizeView(i, s));
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
        var _E$current7, _E$current8;
        var t = _arr2[_i16];
        var i = I.current.get(t),
          s = _e26.findIndex(function (e) {
            return e === t;
          });
        i && _e(i) && void 0 !== i.visible && ((_E$current7 = E.current) === null || _E$current7 === void 0 ? void 0 : _E$current7.isViewVisible(s)) !== i.visible && ((_E$current8 = E.current) === null || _E$current8 === void 0 ? void 0 : _E$current8.setViewVisible(s, i.visible));
      };
      for (var _i16 = 0, _arr2 = [].concat(_toConsumableArray(_i15), _toConsumableArray(_s7)); _i16 < _arr2.length; _i16++) {
        _loop2();
      }
      var _iterator12 = _createForOfIteratorHelper(_s7),
        _step12;
      try {
        var _loop5 = function _loop5() {
          var t = _step12.value;
          var i = I.current.get(t),
            s = _e26.findIndex(function (e) {
              return e === t;
            });
          if (i && _e(i)) {
            var _E$current11;
            void 0 !== i.preferredSize && O.current[s].preferredSize !== i.preferredSize && (O.current[s].preferredSize = i.preferredSize);
            var _e28 = !1;
            void 0 !== i.minSize && O.current[s].minimumSize !== i.minSize && (O.current[s].minimumSize = i.minSize, _e28 = !0), void 0 !== i.maxSize && O.current[s].maximumSize !== i.maxSize && (O.current[s].maximumSize = i.maxSize, _e28 = !0), _e28 && ((_E$current11 = E.current) === null || _E$current11 === void 0 ? void 0 : _E$current11.layout());
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
      (_i15.length > 0 || _o.length > 0) && (w.current = _e26);
    }
  }, [A, M, r, n, h]), t.useEffect(function () {
    E.current && (E.current.onDidChange = f);
  }, [f]), y({
    ref: z,
    onResize: function onResize(_ref5) {
      var _E$current12;
      var e = _ref5.width,
        t = _ref5.height;
      e && t && ((_E$current12 = E.current) !== null && _E$current12 !== void 0 && _E$current12.layout(l ? t : e), j.current.setSize(l ? t : e), D(!0));
    }
  }), t.useEffect(function () {
    L && Ee(20);
  }, []), t.createElement("div", {
    ref: z,
    className: s("split-view", l ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": a
    }, b, l ? S : _, _defineProperty({}, x, a), i)
  }, t.createElement("div", {
    className: s("split-view-container", g)
  }, t.Children.toArray(e).map(function (e) {
    if (!t.isValidElement(e)) return null;
    var i = e.key;
    return "Allotment.Pane" === e.type.displayName ? (I.current.set(i, e.props), t.cloneElement(e, {
      key: i,
      ref: function ref(e) {
        e ? V.current.set(i, e) : V.current["delete"](i);
      }
    })) : t.createElement(xe, {
      key: i,
      ref: function ref(e) {
        e ? V.current.set(i, e) : V.current["delete"](i);
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
