const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CoEaNoas.js","./core-DV6XEvTN.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
(async () => {
  var _a2, _l, _e2, _u, _f, _n2, _i, _r2, _t2, _s, _c, _v, _Ie_instances, __fn, o_fn, d_fn, _a3;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
    new MutationObserver((a) => {
      for (const l of a) if (l.type === "childList") for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(a) {
      const l = {};
      return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
    }
    function r(a) {
      if (a.ep) return;
      a.ep = true;
      const l = n(a);
      fetch(a.href, l);
    }
  })();
  const mn = false;
  var Qe = Array.isArray, sr = Array.prototype.indexOf, Rt = Array.from, it = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, gn = Object.getOwnPropertyDescriptors, or = Object.prototype, ur = Array.prototype, Dt = Object.getPrototypeOf, en = Object.isExtensible;
  const Re = () => {
  };
  function fr(e) {
    return e();
  }
  function St(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  function cr() {
    var e, t, n = new Promise((r, a) => {
      e = r, t = a;
    });
    return {
      promise: n,
      resolve: e,
      reject: t
    };
  }
  const j = 2, En = 4, pt = 8, Ue = 16, se = 32, Ee = 64, kn = 128, K = 256, st = 512, D = 1024, G = 2048, oe = 4096, J = 8192, ke = 16384, Mt = 32768, $t = 65536, tn = 1 << 17, vr = 1 << 18, It = 1 << 19, xn = 1 << 20, Tt = 1 << 21, Vt = 1 << 22, ye = 1 << 23, De = Symbol("$state"), dr = Symbol("legacy props"), Ft = new class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function _r() {
    throw new Error("https://svelte.dev/e/await_outside_boundary");
  }
  function hr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function pr() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function wr(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function yr() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function br(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function mr() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function gr(e) {
    throw new Error("https://svelte.dev/e/props_invalid_value");
  }
  function Er() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function kr() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function xr() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  const Sr = 1, Tr = 2, Ar = 16, Lr = 2, Pr = 4, Nr = 8, Cr = 1, Or = 2, R = Symbol(), Rr = "http://www.w3.org/1999/xhtml";
  let Dr = false;
  function Sn(e) {
    return e === this.v;
  }
  function Tn(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function An(e) {
    return !Tn(e, this.v);
  }
  let et = false, Mr = false;
  function $r() {
    et = true;
  }
  let N = null;
  function ot(e) {
    N = e;
  }
  function xe(e, t = false, n) {
    N = {
      p: N,
      c: null,
      e: null,
      s: e,
      x: null,
      l: et && !t ? {
        s: null,
        u: null,
        $: []
      } : null
    };
  }
  function Se(e) {
    var t = N, n = t.e;
    if (n !== null) {
      t.e = null;
      for (var r of n) qn(r);
    }
    return N = t.p, {};
  }
  function Be() {
    return !et || N !== null && N.l === null;
  }
  const Ir = /* @__PURE__ */ new WeakMap();
  function Vr(e) {
    var t = E;
    if (t === null) return k.f |= ye, e;
    if ((t.f & Mt) === 0) {
      if ((t.f & kn) === 0) throw !t.parent && e instanceof Error && Ln(e), e;
      t.b.error(e);
    } else qt(e, t);
  }
  function qt(e, t) {
    for (; t !== null; ) {
      if ((t.f & kn) !== 0) try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
      t = t.parent;
    }
    throw e instanceof Error && Ln(e), e;
  }
  function Ln(e) {
    const t = Ir.get(e);
    t && (it(e, "message", {
      value: t.message
    }), it(e, "stack", {
      value: t.stack
    }));
  }
  let ut = [];
  function Fr() {
    var e = ut;
    ut = [], St(e);
  }
  function qr(e) {
    ut.length === 0 && queueMicrotask(Fr), ut.push(e);
  }
  function Ur() {
    for (var e = E.b; e !== null && !e.has_pending_snippet(); ) e = e.parent;
    return e === null && _r(), e;
  }
  function Ut(e) {
    var t = j | G, n = k !== null && (k.f & j) !== 0 ? k : null;
    return E === null || n !== null && (n.f & K) !== 0 ? t |= K : E.f |= It, {
      ctx: N,
      deps: null,
      effects: null,
      equals: Sn,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: R,
      wv: 0,
      parent: n ?? E,
      ac: null
    };
  }
  function Br(e, t) {
    let n = E;
    n === null && pr();
    var r = n.b, a = void 0, l = Ge(R), i = null, s = !k;
    return ta(() => {
      try {
        var o = e();
      } catch (d) {
        o = Promise.reject(d);
      }
      var u = () => o;
      a = (i == null ? void 0 : i.then(u, u)) ?? Promise.resolve(o), i = a;
      var c = P, _ = r.pending;
      s && (r.update_pending_count(1), _ || c.increment());
      const f = (d, v = void 0) => {
        i = null, _ || c.activate(), v ? v !== Ft && (l.f |= ye, ct(l, v)) : ((l.f & ye) !== 0 && (l.f ^= ye), ct(l, d)), s && (r.update_pending_count(-1), _ || c.decrement()), Cn();
      };
      if (a.then(f, (d) => f(null, d || "unknown")), c) return () => {
        queueMicrotask(() => c.neuter());
      };
    }), new Promise((o) => {
      function u(c) {
        function _() {
          c === a ? o(l) : u(a);
        }
        c.then(_, _);
      }
      u(a);
    });
  }
  function Bt(e) {
    const t = Ut(e);
    return t.equals = An, t;
  }
  function Pn(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) ie(t[n]);
    }
  }
  function jr(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & j) === 0) return t;
      t = t.parent;
    }
    return null;
  }
  function jt(e) {
    var t, n = E;
    he(jr(e));
    try {
      Pn(e), t = Jn(e);
    } finally {
      he(n);
    }
    return t;
  }
  function Nn(e) {
    var t = jt(e);
    if (e.equals(t) || (e.v = t, e.wv = Xn()), !Te) if ($e !== null) $e.set(e, e.v);
    else {
      var n = (de || (e.f & K) !== 0) && e.deps !== null ? oe : D;
      F(e, n);
    }
  }
  function Wr(e, t, n) {
    const r = Be() ? Ut : Bt;
    if (t.length === 0) {
      n(e.map(r));
      return;
    }
    var a = P, l = E, i = Hr(), s = Ur();
    Promise.all(t.map((o) => Br(o))).then((o) => {
      a == null ? void 0 : a.activate(), i();
      try {
        n([
          ...e.map(r),
          ...o
        ]);
      } catch (u) {
        (l.f & ke) === 0 && qt(u, l);
      }
      a == null ? void 0 : a.deactivate(), Cn();
    }).catch((o) => {
      s.error(o);
    });
  }
  function Hr() {
    var e = E, t = k, n = N;
    return function() {
      he(e), te(t), ot(n);
    };
  }
  function Cn() {
    he(null), te(null), ot(null);
  }
  const He = /* @__PURE__ */ new Set();
  let P = null, at = null, $e = null, nn = /* @__PURE__ */ new Set(), ft = [];
  function On() {
    const e = ft.shift();
    ft.length > 0 && queueMicrotask(On), e();
  }
  let Ke = [], Wt = null, At = false;
  const _Ie = class _Ie {
    constructor() {
      __privateAdd(this, _Ie_instances);
      __publicField(this, "current", /* @__PURE__ */ new Map());
      __privateAdd(this, _a2, /* @__PURE__ */ new Map());
      __privateAdd(this, _l, /* @__PURE__ */ new Set());
      __privateAdd(this, _e2, 0);
      __privateAdd(this, _u, null);
      __privateAdd(this, _f, false);
      __privateAdd(this, _n2, []);
      __privateAdd(this, _i, []);
      __privateAdd(this, _r2, []);
      __privateAdd(this, _t2, []);
      __privateAdd(this, _s, []);
      __privateAdd(this, _c, []);
      __privateAdd(this, _v, []);
      __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var _a4;
      Ke = [], at = null;
      var n = null;
      if (He.size > 1) {
        n = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
        for (const [l, i] of this.current) n.set(l, {
          v: l.v,
          wv: l.wv
        }), l.v = i;
        for (const l of He) if (l !== this) for (const [i, s] of __privateGet(l, _a2)) n.has(i) || (n.set(i, {
          v: i.v,
          wv: i.wv
        }), i.v = s);
      }
      for (const l of t) __privateMethod(this, _Ie_instances, __fn).call(this, l);
      if (__privateGet(this, _n2).length === 0 && __privateGet(this, _e2) === 0) {
        __privateMethod(this, _Ie_instances, d_fn).call(this);
        var r = __privateGet(this, _r2), a = __privateGet(this, _t2);
        __privateSet(this, _r2, []), __privateSet(this, _t2, []), __privateSet(this, _s, []), at = P, P = null, rn(r), rn(a), P === null ? P = this : He.delete(this), (_a4 = __privateGet(this, _u)) == null ? void 0 : _a4.resolve();
      } else __privateMethod(this, _Ie_instances, o_fn).call(this, __privateGet(this, _r2)), __privateMethod(this, _Ie_instances, o_fn).call(this, __privateGet(this, _t2)), __privateMethod(this, _Ie_instances, o_fn).call(this, __privateGet(this, _s));
      if (n) {
        for (const [l, { v: i, wv: s }] of n) l.wv <= s && (l.v = i);
        $e = null;
      }
      for (const l of __privateGet(this, _n2)) me(l);
      for (const l of __privateGet(this, _i)) me(l);
      __privateSet(this, _n2, []), __privateSet(this, _i, []);
    }
    capture(t, n) {
      __privateGet(this, _a2).has(t) || __privateGet(this, _a2).set(t, n), this.current.set(t, t.v);
    }
    activate() {
      P = this;
    }
    deactivate() {
      P = null, at = null;
      for (const t of nn) if (nn.delete(t), t(), P !== null) break;
    }
    neuter() {
      __privateSet(this, _f, true);
    }
    flush() {
      Ke.length > 0 ? Yr() : __privateMethod(this, _Ie_instances, d_fn).call(this), P === this && (__privateGet(this, _e2) === 0 && He.delete(this), this.deactivate());
    }
    increment() {
      __privateSet(this, _e2, __privateGet(this, _e2) + 1);
    }
    decrement() {
      if (__privateSet(this, _e2, __privateGet(this, _e2) - 1), __privateGet(this, _e2) === 0) {
        for (const t of __privateGet(this, _c)) F(t, G), Ve(t);
        for (const t of __privateGet(this, _v)) F(t, oe), Ve(t);
        __privateSet(this, _r2, []), __privateSet(this, _t2, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      __privateGet(this, _l).add(t);
    }
    settled() {
      return (__privateGet(this, _u) ?? __privateSet(this, _u, cr())).promise;
    }
    static ensure() {
      if (P === null) {
        const t = P = new _Ie();
        He.add(P), _Ie.enqueue(() => {
          P === t && t.flush();
        });
      }
      return P;
    }
    static enqueue(t) {
      ft.length === 0 && queueMicrotask(On), ft.unshift(t);
    }
  };
  _a2 = new WeakMap();
  _l = new WeakMap();
  _e2 = new WeakMap();
  _u = new WeakMap();
  _f = new WeakMap();
  _n2 = new WeakMap();
  _i = new WeakMap();
  _r2 = new WeakMap();
  _t2 = new WeakMap();
  _s = new WeakMap();
  _c = new WeakMap();
  _v = new WeakMap();
  _Ie_instances = new WeakSet();
  __fn = function(t) {
    var _a4;
    t.f ^= D;
    for (var n = t.first; n !== null; ) {
      var r = n.f, a = (r & (se | Ee)) !== 0, l = a && (r & D) !== 0, i = l || (r & J) !== 0 || this.skipped_effects.has(n);
      if (!i && n.fn !== null) {
        if (a) n.f ^= D;
        else if ((r & En) !== 0) __privateGet(this, _t2).push(n);
        else if ((r & D) === 0) if ((r & Vt) !== 0) {
          var s = ((_a4 = n.b) == null ? void 0 : _a4.pending) ? __privateGet(this, _i) : __privateGet(this, _n2);
          s.push(n);
        } else tt(n) && ((n.f & Ue) !== 0 && __privateGet(this, _s).push(n), me(n));
        var o = n.first;
        if (o !== null) {
          n = o;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; ) n = u.next, u = u.parent;
    }
  };
  o_fn = function(t) {
    for (const n of t) ((n.f & G) !== 0 ? __privateGet(this, _c) : __privateGet(this, _v)).push(n), F(n, D);
    t.length = 0;
  };
  d_fn = function() {
    if (!__privateGet(this, _f)) for (const t of __privateGet(this, _l)) t();
    __privateGet(this, _l).clear();
  };
  let Ie = _Ie;
  function Yr() {
    var e = Me;
    At = true;
    try {
      var t = 0;
      for (on(true); Ke.length > 0; ) {
        var n = Ie.ensure();
        if (t++ > 1e3) {
          var r, a;
          zr();
        }
        n.process(Ke), _e.clear();
      }
    } finally {
      At = false, on(e), Wt = null;
    }
  }
  function zr() {
    try {
      mr();
    } catch (e) {
      qt(e, Wt);
    }
  }
  let we = null;
  function rn(e) {
    var t = e.length;
    if (t !== 0) {
      for (var n = 0; n < t; ) {
        var r = e[n++];
        if ((r.f & (ke | J)) === 0 && tt(r) && (we = [], me(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Yn(r) : r.fn = null), we.length > 0)) {
          _e.clear();
          for (const a of we) me(a);
          we = [];
        }
      }
      we = null;
    }
  }
  function Ve(e) {
    for (var t = Wt = e; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (At && t === E && (n & Ue) !== 0) return;
      if ((n & (Ee | se)) !== 0) {
        if ((n & D) === 0) return;
        t.f ^= D;
      }
    }
    Ke.push(t);
  }
  const _e = /* @__PURE__ */ new Map();
  function Ge(e, t) {
    var n = {
      f: 0,
      v: e,
      reactions: null,
      equals: Sn,
      rv: 0,
      wv: 0
    };
    return n;
  }
  function fe(e, t) {
    const n = Ge(e);
    return aa(n), n;
  }
  function U(e, t = false, n = true) {
    var _a4;
    const r = Ge(e);
    return t || (r.equals = An), et && n && N !== null && N.l !== null && ((_a4 = N.l).s ?? (_a4.s = [])).push(r), r;
  }
  function b(e, t, n = false) {
    k !== null && (!ee || (k.f & tn) !== 0) && Be() && (k.f & (j | Ue | Vt | tn)) !== 0 && !(le == null ? void 0 : le.includes(e)) && xr();
    let r = n ? Ce(t) : t;
    return ct(e, r);
  }
  function ct(e, t) {
    if (!e.equals(t)) {
      var n = e.v;
      Te ? _e.set(e, t) : _e.set(e, n), e.v = t;
      var r = Ie.ensure();
      r.capture(e, n), (e.f & j) !== 0 && ((e.f & G) !== 0 && jt(e), F(e, (e.f & K) === 0 ? D : oe)), e.wv = Xn(), Rn(e, G), Be() && E !== null && (E.f & D) !== 0 && (E.f & (se | Ee)) === 0 && (Y === null ? la([
        e
      ]) : Y.push(e));
    }
    return t;
  }
  function mt(e) {
    b(e, e.v + 1);
  }
  function Rn(e, t) {
    var n = e.reactions;
    if (n !== null) for (var r = Be(), a = n.length, l = 0; l < a; l++) {
      var i = n[l], s = i.f;
      if (!(!r && i === E)) {
        var o = (s & G) === 0;
        o && F(i, t), (s & j) !== 0 ? Rn(i, oe) : o && ((s & Ue) !== 0 && we !== null && we.push(i), Ve(i));
      }
    }
  }
  function Ce(e) {
    if (typeof e != "object" || e === null || De in e) return e;
    const t = Dt(e);
    if (t !== or && t !== ur) return e;
    var n = /* @__PURE__ */ new Map(), r = Qe(e), a = fe(0), l = be, i = (s) => {
      if (be === l) return s();
      var o = k, u = be;
      te(null), fn(l);
      var c = s();
      return te(o), fn(u), c;
    };
    return r && n.set("length", fe(e.length)), new Proxy(e, {
      defineProperty(s, o, u) {
        (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && Er();
        var c = n.get(o);
        return c === void 0 ? c = i(() => {
          var _ = fe(u.value);
          return n.set(o, _), _;
        }) : b(c, u.value, true), true;
      },
      deleteProperty(s, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in s) {
            const c = i(() => fe(R));
            n.set(o, c), mt(a);
          }
        } else b(u, R), mt(a);
        return true;
      },
      get(s, o, u) {
        var _a4;
        if (o === De) return e;
        var c = n.get(o), _ = o in s;
        if (c === void 0 && (!_ || ((_a4 = Oe(s, o)) == null ? void 0 : _a4.writable)) && (c = i(() => {
          var d = Ce(_ ? s[o] : R), v = fe(d);
          return v;
        }), n.set(o, c)), c !== void 0) {
          var f = y(c);
          return f === R ? void 0 : f;
        }
        return Reflect.get(s, o, u);
      },
      getOwnPropertyDescriptor(s, o) {
        var u = Reflect.getOwnPropertyDescriptor(s, o);
        if (u && "value" in u) {
          var c = n.get(o);
          c && (u.value = y(c));
        } else if (u === void 0) {
          var _ = n.get(o), f = _ == null ? void 0 : _.v;
          if (_ !== void 0 && f !== R) return {
            enumerable: true,
            configurable: true,
            value: f,
            writable: true
          };
        }
        return u;
      },
      has(s, o) {
        var _a4;
        if (o === De) return true;
        var u = n.get(o), c = u !== void 0 && u.v !== R || Reflect.has(s, o);
        if (u !== void 0 || E !== null && (!c || ((_a4 = Oe(s, o)) == null ? void 0 : _a4.writable))) {
          u === void 0 && (u = i(() => {
            var f = c ? Ce(s[o]) : R, d = fe(f);
            return d;
          }), n.set(o, u));
          var _ = y(u);
          if (_ === R) return false;
        }
        return c;
      },
      set(s, o, u, c) {
        var _a4;
        var _ = n.get(o), f = o in s;
        if (r && o === "length") for (var d = u; d < _.v; d += 1) {
          var v = n.get(d + "");
          v !== void 0 ? b(v, R) : d in s && (v = i(() => fe(R)), n.set(d + "", v));
        }
        if (_ === void 0) (!f || ((_a4 = Oe(s, o)) == null ? void 0 : _a4.writable)) && (_ = i(() => fe(void 0)), b(_, Ce(u)), n.set(o, _));
        else {
          f = _.v !== R;
          var h = i(() => Ce(u));
          b(_, h);
        }
        var m = Reflect.getOwnPropertyDescriptor(s, o);
        if ((m == null ? void 0 : m.set) && m.set.call(c, u), !f) {
          if (r && typeof o == "string") {
            var g = n.get("length"), p = Number(o);
            Number.isInteger(p) && p >= g.v && b(g, p + 1);
          }
          mt(a);
        }
        return true;
      },
      ownKeys(s) {
        y(a);
        var o = Reflect.ownKeys(s).filter((_) => {
          var f = n.get(_);
          return f === void 0 || f.v !== R;
        });
        for (var [u, c] of n) c.v !== R && !(u in s) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        kr();
      }
    });
  }
  var an, Dn, Mn, $n;
  function Kr() {
    if (an === void 0) {
      an = window, Dn = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, n = Text.prototype;
      Mn = Oe(t, "firstChild").get, $n = Oe(t, "nextSibling").get, en(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), en(n) && (n.__t = void 0);
    }
  }
  function Ht(e = "") {
    return document.createTextNode(e);
  }
  function vt(e) {
    return Mn.call(e);
  }
  function wt(e) {
    return $n.call(e);
  }
  function S(e, t) {
    return vt(e);
  }
  function Lt(e, t) {
    {
      var n = vt(e);
      return n instanceof Comment && n.data === "" ? wt(n) : n;
    }
  }
  function L(e, t = 1, n = false) {
    let r = e;
    for (; t--; ) r = wt(r);
    return r;
  }
  function Gr(e) {
    e.textContent = "";
  }
  function In() {
    return false;
  }
  let ln = false;
  function Xr() {
    ln || (ln = true, document.addEventListener("reset", (e) => {
      Promise.resolve().then(() => {
        var _a4;
        if (!e.defaultPrevented) for (const t of e.target.elements) (_a4 = t.__on_r) == null ? void 0 : _a4.call(t);
      });
    }, {
      capture: true
    }));
  }
  function yt(e) {
    var t = k, n = E;
    te(null), he(null);
    try {
      return e();
    } finally {
      te(t), he(n);
    }
  }
  function Zr(e, t, n, r = n) {
    e.addEventListener(t, () => yt(n));
    const a = e.__on_r;
    a ? e.__on_r = () => {
      a(), r(true);
    } : e.__on_r = () => r(true), Xr();
  }
  function Vn(e) {
    E === null && k === null && br(), k !== null && (k.f & K) !== 0 && E === null && yr(), Te && wr();
  }
  function Jr(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
  }
  function ue(e, t, n, r = true) {
    var a = E;
    a !== null && (a.f & J) !== 0 && (e |= J);
    var l = {
      ctx: N,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | G,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: a,
      b: a && a.b,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
      ac: null
    };
    if (n) try {
      me(l), l.f |= Mt;
    } catch (o) {
      throw ie(l), o;
    }
    else t !== null && Ve(l);
    var i = n && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & It) === 0;
    if (!i && r && (a !== null && Jr(l, a), k !== null && (k.f & j) !== 0 && (e & Ee) === 0)) {
      var s = k;
      (s.effects ?? (s.effects = [])).push(l);
    }
    return l;
  }
  function Fn(e) {
    const t = ue(pt, null, false);
    return F(t, D), t.teardown = e, t;
  }
  function sn(e) {
    Vn();
    var t = E.f, n = !k && (t & se) !== 0 && (t & Mt) === 0;
    if (n) {
      var r = N;
      (r.e ?? (r.e = [])).push(e);
    } else return qn(e);
  }
  function qn(e) {
    return ue(En | xn, e, false);
  }
  function Qr(e) {
    return Vn(), ue(pt | xn, e, true);
  }
  function ea(e) {
    Ie.ensure();
    const t = ue(Ee, e, true);
    return (n = {}) => new Promise((r) => {
      n.outro ? zt(t, () => {
        ie(t), r(void 0);
      }) : (ie(t), r(void 0));
    });
  }
  function Un(e, t) {
    var n = N, r = {
      effect: null,
      ran: false,
      deps: e
    };
    n.l.$.push(r), r.effect = Yt(() => {
      e(), !r.ran && (r.ran = true, Fe(t));
    });
  }
  function Bn() {
    var e = N;
    Yt(() => {
      for (var t of e.l.$) {
        t.deps();
        var n = t.effect;
        (n.f & D) !== 0 && F(n, oe), tt(n) && me(n), t.ran = false;
      }
    });
  }
  function ta(e) {
    return ue(Vt | It, e, true);
  }
  function Yt(e, t = 0) {
    return ue(pt | t, e, true);
  }
  function ge(e, t = [], n = []) {
    Wr(t, n, (r) => {
      ue(pt, () => e(...r.map(y)), true);
    });
  }
  function jn(e, t = 0) {
    var n = ue(Ue | t, e, true);
    return n;
  }
  function Xe(e, t = true) {
    return ue(se, e, true, t);
  }
  function Wn(e) {
    var t = e.teardown;
    if (t !== null) {
      const n = Te, r = k;
      un(true), te(null);
      try {
        t.call(null);
      } finally {
        un(n), te(r);
      }
    }
  }
  function Hn(e, t = false) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
      const a = n.ac;
      a !== null && yt(() => {
        a.abort(Ft);
      });
      var r = n.next;
      (n.f & Ee) !== 0 ? n.parent = null : ie(n, t), n = r;
    }
  }
  function na(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next;
      (t.f & se) === 0 && ie(t), t = n;
    }
  }
  function ie(e, t = true) {
    var n = false;
    (t || (e.f & vr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ra(e.nodes_start, e.nodes_end), n = true), Hn(e, t && !n), dt(e, 0), F(e, ke);
    var r = e.transitions;
    if (r !== null) for (const l of r) l.stop();
    Wn(e);
    var a = e.parent;
    a !== null && a.first !== null && Yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
  }
  function ra(e, t) {
    for (; e !== null; ) {
      var n = e === t ? null : wt(e);
      e.remove(), e = n;
    }
  }
  function Yn(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
  }
  function zt(e, t) {
    var n = [];
    Kt(e, n, true), zn(n, () => {
      ie(e), t && t();
    });
  }
  function zn(e, t) {
    var n = e.length;
    if (n > 0) {
      var r = () => --n || t();
      for (var a of e) a.out(r);
    } else t();
  }
  function Kt(e, t, n) {
    if ((e.f & J) === 0) {
      if (e.f ^= J, e.transitions !== null) for (const i of e.transitions) (i.is_global || n) && t.push(i);
      for (var r = e.first; r !== null; ) {
        var a = r.next, l = (r.f & $t) !== 0 || (r.f & se) !== 0;
        Kt(r, t, l ? n : false), r = a;
      }
    }
  }
  function Gt(e) {
    Kn(e, true);
  }
  function Kn(e, t) {
    if ((e.f & J) !== 0) {
      e.f ^= J, (e.f & D) === 0 && (F(e, G), Ve(e));
      for (var n = e.first; n !== null; ) {
        var r = n.next, a = (n.f & $t) !== 0 || (n.f & se) !== 0;
        Kn(n, a ? t : false), n = r;
      }
      if (e.transitions !== null) for (const l of e.transitions) (l.is_global || t) && l.in();
    }
  }
  let Me = false;
  function on(e) {
    Me = e;
  }
  let Te = false;
  function un(e) {
    Te = e;
  }
  let k = null, ee = false;
  function te(e) {
    k = e;
  }
  let E = null;
  function he(e) {
    E = e;
  }
  let le = null;
  function aa(e) {
    k !== null && (le === null ? le = [
      e
    ] : le.push(e));
  }
  let I = null, B = 0, Y = null;
  function la(e) {
    Y = e;
  }
  let Gn = 1, Ze = 0, be = Ze;
  function fn(e) {
    be = e;
  }
  let de = false;
  function Xn() {
    return ++Gn;
  }
  function tt(e) {
    var _a4;
    var t = e.f;
    if ((t & G) !== 0) return true;
    if ((t & oe) !== 0) {
      var n = e.deps, r = (t & K) !== 0;
      if (n !== null) {
        var a, l, i = (t & st) !== 0, s = r && E !== null && !de, o = n.length;
        if ((i || s) && (E === null || (E.f & ke) === 0)) {
          var u = e, c = u.parent;
          for (a = 0; a < o; a++) l = n[a], (i || !((_a4 = l == null ? void 0 : l.reactions) == null ? void 0 : _a4.includes(u))) && (l.reactions ?? (l.reactions = [])).push(u);
          i && (u.f ^= st), s && c !== null && (c.f & K) === 0 && (u.f ^= K);
        }
        for (a = 0; a < o; a++) if (l = n[a], tt(l) && Nn(l), l.wv > e.wv) return true;
      }
      (!r || E !== null && !de) && F(e, D);
    }
    return false;
  }
  function Zn(e, t, n = true) {
    var r = e.reactions;
    if (r !== null && !(le == null ? void 0 : le.includes(e))) for (var a = 0; a < r.length; a++) {
      var l = r[a];
      (l.f & j) !== 0 ? Zn(l, t, false) : t === l && (n ? F(l, G) : (l.f & D) !== 0 && F(l, oe), Ve(l));
    }
  }
  function Jn(e) {
    var _a4;
    var t = I, n = B, r = Y, a = k, l = de, i = le, s = N, o = ee, u = be, c = e.f;
    I = null, B = 0, Y = null, de = (c & K) !== 0 && (ee || !Me || k === null), k = (c & (se | Ee)) === 0 ? e : null, le = null, ot(e.ctx), ee = false, be = ++Ze, e.ac !== null && (yt(() => {
      e.ac.abort(Ft);
    }), e.ac = null);
    try {
      e.f |= Tt;
      var _ = e.fn, f = _(), d = e.deps;
      if (I !== null) {
        var v;
        if (dt(e, B), d !== null && B > 0) for (d.length = B + I.length, v = 0; v < I.length; v++) d[B + v] = I[v];
        else e.deps = d = I;
        if (!de || (c & j) !== 0 && e.reactions !== null) for (v = B; v < d.length; v++) ((_a4 = d[v]).reactions ?? (_a4.reactions = [])).push(e);
      } else d !== null && B < d.length && (dt(e, B), d.length = B);
      if (Be() && Y !== null && !ee && d !== null && (e.f & (j | oe | G)) === 0) for (v = 0; v < Y.length; v++) Zn(Y[v], e);
      return a !== null && a !== e && (Ze++, Y !== null && (r === null ? r = Y : r.push(...Y))), (e.f & ye) !== 0 && (e.f ^= ye), f;
    } catch (h) {
      return Vr(h);
    } finally {
      e.f ^= Tt, I = t, B = n, Y = r, k = a, de = l, le = i, ot(s), ee = o, be = u;
    }
  }
  function ia(e, t) {
    let n = t.reactions;
    if (n !== null) {
      var r = sr.call(n, e);
      if (r !== -1) {
        var a = n.length - 1;
        a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
      }
    }
    n === null && (t.f & j) !== 0 && (I === null || !I.includes(t)) && (F(t, oe), (t.f & (K | st)) === 0 && (t.f ^= st), Pn(t), dt(t, 0));
  }
  function dt(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) ia(e, n[r]);
  }
  function me(e) {
    var t = e.f;
    if ((t & ke) === 0) {
      F(e, D);
      var n = E, r = Me;
      E = e, Me = true;
      try {
        (t & Ue) !== 0 ? na(e) : Hn(e), Wn(e);
        var a = Jn(e);
        e.teardown = typeof a == "function" ? a : null, e.wv = Gn;
        var l;
        mn && Mr && (e.f & G) !== 0 && e.deps;
      } finally {
        Me = r, E = n;
      }
    }
  }
  function y(e) {
    var t = e.f, n = (t & j) !== 0;
    if (k !== null && !ee) {
      var r = E !== null && (E.f & ke) !== 0;
      if (!r && !(le == null ? void 0 : le.includes(e))) {
        var a = k.deps;
        if ((k.f & Tt) !== 0) e.rv < Ze && (e.rv = Ze, I === null && a !== null && a[B] === e ? B++ : I === null ? I = [
          e
        ] : (!de || !I.includes(e)) && I.push(e));
        else {
          (k.deps ?? (k.deps = [])).push(e);
          var l = e.reactions;
          l === null ? e.reactions = [
            k
          ] : l.includes(k) || l.push(k);
        }
      }
    } else if (n && e.deps === null && e.effects === null) {
      var i = e, s = i.parent;
      s !== null && (s.f & K) === 0 && (i.f ^= K);
    }
    if (Te) {
      if (_e.has(e)) return _e.get(e);
      if (n) {
        i = e;
        var o = i.v;
        return ((i.f & D) === 0 && i.reactions !== null || Qn(i)) && (o = jt(i)), _e.set(i, o), o;
      }
    } else if (n) {
      if (i = e, $e == null ? void 0 : $e.has(i)) return $e.get(i);
      tt(i) && Nn(i);
    }
    if ((e.f & ye) !== 0) throw e.v;
    return e.v;
  }
  function Qn(e) {
    if (e.v === R) return true;
    if (e.deps === null) return false;
    for (const t of e.deps) if (_e.has(t) || (t.f & j) !== 0 && Qn(t)) return true;
    return false;
  }
  function Fe(e) {
    var t = ee;
    try {
      return ee = true, e();
    } finally {
      ee = t;
    }
  }
  const sa = -7169;
  function F(e, t) {
    e.f = e.f & sa | t;
  }
  function er(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (De in e) Pt(e);
      else if (!Array.isArray(e)) for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && De in n && Pt(n);
      }
    }
  }
  function Pt(e, t = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime();
      for (let r in e) try {
        Pt(e[r], t);
      } catch {
      }
      const n = Dt(e);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = gn(n);
        for (let a in r) {
          const l = r[a].get;
          if (l) try {
            l.call(e);
          } catch {
          }
        }
      }
    }
  }
  const oa = [
    "touchstart",
    "touchmove"
  ];
  function ua(e) {
    return oa.includes(e);
  }
  const fa = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
  function ca(e, t, n, r = {}) {
    function a(l) {
      if (r.capture || Ye.call(t, l), !l.cancelBubble) return yt(() => n == null ? void 0 : n.call(this, l));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qr(() => {
      t.addEventListener(e, a, r);
    }) : t.addEventListener(e, a, r), a;
  }
  function M(e, t, n, r, a) {
    var l = {
      capture: r,
      passive: a
    }, i = ca(e, t, n, l);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Fn(() => {
      t.removeEventListener(e, i, l);
    });
  }
  let vn = null;
  function Ye(e) {
    var _a4;
    var t = this, n = t.ownerDocument, r = e.type, a = ((_a4 = e.composedPath) == null ? void 0 : _a4.call(e)) || [], l = a[0] || e.target;
    vn = e;
    var i = 0, s = vn === e && e.__root;
    if (s) {
      var o = a.indexOf(s);
      if (o !== -1 && (t === document || t === window)) {
        e.__root = t;
        return;
      }
      var u = a.indexOf(t);
      if (u === -1) return;
      o <= u && (i = o);
    }
    if (l = a[i] || e.target, l !== t) {
      it(e, "currentTarget", {
        configurable: true,
        get() {
          return l || n;
        }
      });
      var c = k, _ = E;
      te(null), he(null);
      try {
        for (var f, d = []; l !== null; ) {
          var v = l.assignedSlot || l.parentNode || l.host || null;
          try {
            var h = l["__" + r];
            if (h != null && (!l.disabled || e.target === l)) if (Qe(h)) {
              var [m, ...g] = h;
              m.apply(l, [
                e,
                ...g
              ]);
            } else h.call(l, e);
          } catch (p) {
            f ? d.push(p) : f = p;
          }
          if (e.cancelBubble || v === t || v === null) break;
          l = v;
        }
        if (f) {
          for (let p of d) queueMicrotask(() => {
            throw p;
          });
          throw f;
        }
      } finally {
        e.__root = t, delete e.currentTarget, te(c), he(_);
      }
    }
  }
  function va(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
  }
  function dn(e, t) {
    var n = E;
    n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
  }
  function q(e, t) {
    var n = (t & Cr) !== 0, r = (t & Or) !== 0, a, l = !e.startsWith("<!>");
    return () => {
      a === void 0 && (a = va(l ? e : "<!>" + e), n || (a = vt(a)));
      var i = r || Dn ? document.importNode(a, true) : a.cloneNode(true);
      if (n) {
        var s = vt(i), o = i.lastChild;
        dn(s, o);
      } else dn(i, i);
      return i;
    };
  }
  function V(e, t) {
    e !== null && e.before(t);
  }
  function Je(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
  }
  function da(e, t) {
    return _a(e, t);
  }
  const Le = /* @__PURE__ */ new Map();
  function _a(e, { target: t, anchor: n, props: r = {}, events: a, context: l, intro: i = true }) {
    Kr();
    var s = /* @__PURE__ */ new Set(), o = (_) => {
      for (var f = 0; f < _.length; f++) {
        var d = _[f];
        if (!s.has(d)) {
          s.add(d);
          var v = ua(d);
          t.addEventListener(d, Ye, {
            passive: v
          });
          var h = Le.get(d);
          h === void 0 ? (document.addEventListener(d, Ye, {
            passive: v
          }), Le.set(d, 1)) : Le.set(d, h + 1);
        }
      }
    };
    o(Rt(fa)), cn.add(o);
    var u = void 0, c = ea(() => {
      var _ = n ?? t.appendChild(Ht());
      return Xe(() => {
        if (l) {
          xe({});
          var f = N;
          f.c = l;
        }
        a && (r.$$events = a), u = e(_, r) || {}, l && Se();
      }), () => {
        var _a4;
        for (var f of s) {
          t.removeEventListener(f, Ye);
          var d = Le.get(f);
          --d === 0 ? (document.removeEventListener(f, Ye), Le.delete(f)) : Le.set(f, d);
        }
        cn.delete(o), _ !== n && ((_a4 = _.parentNode) == null ? void 0 : _a4.removeChild(_));
      };
    });
    return ha.set(u, c), u;
  }
  let ha = /* @__PURE__ */ new WeakMap();
  function qe(e, t, n = false) {
    var r = e, a = null, l = null, i = R, s = n ? $t : 0, o = false;
    const u = (d, v = true) => {
      o = true, f(v, d);
    };
    var c = null;
    function _() {
      c !== null && (c.lastChild.remove(), r.before(c), c = null);
      var d = i ? a : l, v = i ? l : a;
      d && Gt(d), v && zt(v, () => {
        i ? l = null : a = null;
      });
    }
    const f = (d, v) => {
      if (i !== (i = d)) {
        var h = In(), m = r;
        if (h && (c = document.createDocumentFragment(), c.append(m = Ht())), i ? a ?? (a = v && Xe(() => v(m))) : l ?? (l = v && Xe(() => v(m))), h) {
          var g = P, p = i ? a : l, w = i ? l : a;
          p && g.skipped_effects.delete(p), w && g.skipped_effects.add(w), g.add_callback(_);
        } else _();
      }
    };
    jn(() => {
      o = false, t(u), o || f(null, null);
    }, s);
  }
  function pa(e, t, n) {
    for (var r = e.items, a = [], l = t.length, i = 0; i < l; i++) Kt(t[i].e, a, true);
    var s = l > 0 && a.length === 0 && n !== null;
    if (s) {
      var o = n.parentNode;
      Gr(o), o.append(n), r.clear(), Q(e, t[0].prev, t[l - 1].next);
    }
    zn(a, () => {
      for (var u = 0; u < l; u++) {
        var c = t[u];
        s || (r.delete(c.k), Q(e, c.prev, c.next)), ie(c.e, !s);
      }
    });
  }
  function wa(e, t, n, r, a, l = null) {
    var i = e, s = {
      flags: t,
      items: /* @__PURE__ */ new Map(),
      first: null
    }, o = null, u = false, c = /* @__PURE__ */ new Map(), _ = Bt(() => {
      var h = n();
      return Qe(h) ? h : h == null ? [] : Rt(h);
    }), f, d;
    function v() {
      ya(d, f, s, c, i, a, t, r, n), l !== null && (f.length === 0 ? o ? Gt(o) : o = Xe(() => l(i)) : o !== null && zt(o, () => {
        o = null;
      }));
    }
    jn(() => {
      d ?? (d = E), f = y(_);
      var h = f.length;
      if (!(u && h === 0)) {
        u = h === 0;
        var m, g, p, w;
        if (In()) {
          var T = /* @__PURE__ */ new Set(), C = P;
          for (g = 0; g < h; g += 1) {
            p = f[g], w = r(p, g);
            var X = s.items.get(w) ?? c.get(w);
            X ? tr(X, p, g) : (m = nr(null, s, null, null, p, w, g, a, t, n, true), c.set(w, m)), T.add(w);
          }
          for (const [ne, W] of s.items) T.has(ne) || C.skipped_effects.add(W.e);
          C.add_callback(v);
        } else v();
        y(_);
      }
    });
  }
  function ya(e, t, n, r, a, l, i, s, o) {
    var u = t.length, c = n.items, _ = n.first, f = _, d, v = null, h = [], m = [], g, p, w, T;
    for (T = 0; T < u; T += 1) {
      if (g = t[T], p = s(g, T), w = c.get(p), w === void 0) {
        var C = r.get(p);
        if (C !== void 0) {
          r.delete(p), c.set(p, C);
          var X = v ? v.next : f;
          Q(n, v, C), Q(n, C, X), gt(C, X, a), v = C;
        } else {
          var ne = f ? f.e.nodes_start : a;
          v = nr(ne, n, v, v === null ? n.first : v.next, g, p, T, l, i, o);
        }
        c.set(p, v), h = [], m = [], f = v.next;
        continue;
      }
      if (tr(w, g, T), (w.e.f & J) !== 0 && Gt(w.e), w !== f) {
        if (d !== void 0 && d.has(w)) {
          if (h.length < m.length) {
            var W = m[0], H;
            v = W.prev;
            var Ae = h[0], re = h[h.length - 1];
            for (H = 0; H < h.length; H += 1) gt(h[H], W, a);
            for (H = 0; H < m.length; H += 1) d.delete(m[H]);
            Q(n, Ae.prev, re.next), Q(n, v, Ae), Q(n, re, W), f = W, v = re, T -= 1, h = [], m = [];
          } else d.delete(w), gt(w, f, a), Q(n, w.prev, w.next), Q(n, w, v === null ? n.first : v.next), Q(n, v, w), v = w;
          continue;
        }
        for (h = [], m = []; f !== null && f.k !== p; ) (f.e.f & J) === 0 && (d ?? (d = /* @__PURE__ */ new Set())).add(f), m.push(f), f = f.next;
        if (f === null) continue;
        w = f;
      }
      h.push(w), v = w, f = w.next;
    }
    if (f !== null || d !== void 0) {
      for (var pe = d === void 0 ? [] : Rt(d); f !== null; ) (f.e.f & J) === 0 && pe.push(f), f = f.next;
      var x = pe.length;
      if (x > 0) {
        var A = null;
        pa(n, pe, A);
      }
    }
    e.first = n.first && n.first.e, e.last = v && v.e;
    for (var $ of r.values()) ie($.e);
    r.clear();
  }
  function tr(e, t, n, r) {
    ct(e.v, t), e.i = n;
  }
  function nr(e, t, n, r, a, l, i, s, o, u, c) {
    var _ = (o & Sr) !== 0, f = (o & Ar) === 0, d = _ ? f ? U(a, false, false) : Ge(a) : a, v = (o & Tr) === 0 ? i : Ge(i), h = {
      i: v,
      v: d,
      k: l,
      a: null,
      e: null,
      prev: n,
      next: r
    };
    try {
      if (e === null) {
        var m = document.createDocumentFragment();
        m.append(e = Ht());
      }
      return h.e = Xe(() => s(e, d, v, u), Dr), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? c || (t.first = h) : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
    } finally {
    }
  }
  function gt(e, t, n) {
    for (var r = e.next ? e.next.e.nodes_start : n, a = t ? t.e.nodes_start : n, l = e.e.nodes_start; l !== null && l !== r; ) {
      var i = wt(l);
      a.before(l), l = i;
    }
  }
  function Q(e, t, n) {
    t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
  }
  const _n = [
    ...` 	
\r\f\xA0\v\uFEFF`
  ];
  function ba(e, t, n) {
    var r = e == null ? "" : "" + e;
    if (n) {
      for (var a in n) if (n[a]) r = r ? r + " " + a : a;
      else if (r.length) for (var l = a.length, i = 0; (i = r.indexOf(a, i)) >= 0; ) {
        var s = i + l;
        (i === 0 || _n.includes(r[i - 1])) && (s === r.length || _n.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
      }
    }
    return r === "" ? null : r;
  }
  function rr(e, t, n, r, a, l) {
    var i = e.__className;
    if (i !== n || i === void 0) {
      var s = ba(n, r, l);
      s == null ? e.removeAttribute("class") : e.className = s, e.__className = n;
    } else if (l && a !== l) for (var o in l) {
      var u = !!l[o];
      (a == null || u !== !!a[o]) && e.classList.toggle(o, u);
    }
    return l;
  }
  const ma = Symbol("is custom element"), ga = Symbol("is html");
  function Nt(e, t, n, r) {
    var a = Ea(e);
    a[t] !== (a[t] = n) && (n == null ? e.removeAttribute(t) : typeof n != "string" && ka(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }
  function Ea(e) {
    return e.__attributes ?? (e.__attributes = {
      [ma]: e.nodeName.includes("-"),
      [ga]: e.namespaceURI === Rr
    });
  }
  var hn = /* @__PURE__ */ new Map();
  function ka(e) {
    var t = hn.get(e.nodeName);
    if (t) return t;
    hn.set(e.nodeName, t = []);
    for (var n, r = e, a = Element.prototype; a !== r; ) {
      n = gn(r);
      for (var l in n) n[l].set && t.push(l);
      r = Dt(r);
    }
    return t;
  }
  function _t(e, t, n = t) {
    var r = Be(), a = /* @__PURE__ */ new WeakSet();
    Zr(e, "input", (l) => {
      var i = l ? e.defaultValue : e.value;
      if (i = Et(e) ? kt(i) : i, n(i), P !== null && a.add(P), r && i !== (i = t())) {
        var s = e.selectionStart, o = e.selectionEnd;
        e.value = i ?? "", o !== null && (e.selectionStart = s, e.selectionEnd = Math.min(o, e.value.length));
      }
    }), Fe(t) == null && e.value && (n(Et(e) ? kt(e.value) : e.value), P !== null && a.add(P)), Yt(() => {
      var l = t();
      if (e === document.activeElement) {
        var i = at ?? P;
        if (a.has(i)) return;
      }
      Et(e) && l === kt(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l ?? "");
    });
  }
  function Et(e) {
    var t = e.type;
    return t === "number" || t === "range";
  }
  function kt(e) {
    return e === "" ? null : +e;
  }
  function Xt(e) {
    return function(...t) {
      var n = t[0];
      return n.preventDefault(), e == null ? void 0 : e.apply(this, t);
    };
  }
  function je(e = false) {
    const t = N, n = t.l.u;
    if (!n) return;
    let r = () => er(t.s);
    if (e) {
      let a = 0, l = {};
      const i = Ut(() => {
        let s = false;
        const o = t.s;
        for (const u in o) o[u] !== l[u] && (l[u] = o[u], s = true);
        return s && a++, a;
      });
      r = () => y(i);
    }
    n.b.length && Qr(() => {
      pn(t, r), St(n.b);
    }), sn(() => {
      const a = Fe(() => n.m.map(fr));
      return () => {
        for (const l of a) typeof l == "function" && l();
      };
    }), n.a.length && sn(() => {
      pn(t, r), St(n.a);
    });
  }
  function pn(e, t) {
    if (e.l.s) for (const n of e.l.s) y(n);
    t();
  }
  function xa(e, t) {
    var _a4;
    var n = (_a4 = e.$$events) == null ? void 0 : _a4[t.type], r = Qe(n) ? n.slice() : n == null ? [] : [
      n
    ];
    for (var a of r) a.call(this, t);
  }
  function ar(e, t, n) {
    if (e == null) return t(void 0), Re;
    const r = Fe(() => e.subscribe(t, n));
    return r.unsubscribe ? () => r.unsubscribe() : r;
  }
  const Pe = [];
  function bt(e, t = Re) {
    let n = null;
    const r = /* @__PURE__ */ new Set();
    function a(s) {
      if (Tn(e, s) && (e = s, n)) {
        const o = !Pe.length;
        for (const u of r) u[1](), Pe.push(u, e);
        if (o) {
          for (let u = 0; u < Pe.length; u += 2) Pe[u][0](Pe[u + 1]);
          Pe.length = 0;
        }
      }
    }
    function l(s) {
      a(s(e));
    }
    function i(s, o = Re) {
      const u = [
        s,
        o
      ];
      return r.add(u), r.size === 1 && (n = t(a, l) || Re), s(e), () => {
        r.delete(u), r.size === 0 && n && (n(), n = null);
      };
    }
    return {
      set: a,
      update: l,
      subscribe: i
    };
  }
  function Sa(e) {
    let t;
    return ar(e, (n) => t = n)(), t;
  }
  let nt = false, Ct = Symbol();
  function ht(e, t, n) {
    const r = n[t] ?? (n[t] = {
      store: null,
      source: U(void 0),
      unsubscribe: Re
    });
    if (r.store !== e && !(Ct in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = Re;
    else {
      var a = true;
      r.unsubscribe = ar(e, (l) => {
        a ? r.source.v = l : b(r.source, l);
      }), a = false;
    }
    return e && Ct in n ? Sa(e) : y(r.source);
  }
  function Zt() {
    const e = {};
    function t() {
      Fn(() => {
        for (var n in e) e[n].unsubscribe();
        it(e, Ct, {
          enumerable: false,
          value: true
        });
      });
    }
    return [
      e,
      t
    ];
  }
  function Ta(e) {
    var t = nt;
    try {
      return nt = false, [
        e(),
        nt
      ];
    } finally {
      nt = t;
    }
  }
  function lr(e, t, n, r) {
    var _a4;
    var a = !et || (n & Lr) !== 0, l = (n & Nr) !== 0, i = r, s = true, o = () => (s && (s = false, i = r), i), u;
    {
      var c = De in e || dr in e;
      u = ((_a4 = Oe(e, t)) == null ? void 0 : _a4.set) ?? (c && t in e ? (p) => e[t] = p : void 0);
    }
    var _, f = false;
    [_, f] = Ta(() => e[t]), _ === void 0 && r !== void 0 && (_ = o(), u && (a && gr(), u(_)));
    var d;
    if (a ? d = () => {
      var p = e[t];
      return p === void 0 ? o() : (s = true, p);
    } : d = () => {
      var p = e[t];
      return p !== void 0 && (i = void 0), p === void 0 ? i : p;
    }, a && (n & Pr) === 0) return d;
    if (u) {
      var v = e.$$legacy;
      return (function(p, w) {
        return arguments.length > 0 ? ((!a || !w || v || f) && u(w ? d() : p), p) : d();
      });
    }
    var h = false, m = Bt(() => (h = false, d()));
    y(m);
    var g = E;
    return (function(p, w) {
      if (arguments.length > 0) {
        const T = w ? y(m) : a && l ? Ce(p) : p;
        return b(m, T), h = true, i !== void 0 && (i = T), p;
      }
      return Te && h || (g.f & ke) !== 0 ? m.v : y(m);
    });
  }
  function Aa(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  function Jt() {
    const e = N;
    return e === null && hr(), (t, n, r) => {
      var _a4;
      const a = (_a4 = e.s.$$events) == null ? void 0 : _a4[t];
      if (a) {
        const l = Qe(a) ? a.slice() : [
          a
        ], i = Aa(t, n, r);
        for (const s of l) s.call(e.x, i);
        return !i.defaultPrevented;
      }
      return true;
    };
  }
  const La = "5";
  typeof window < "u" && ((_a3 = window.__svelte ?? (window.__svelte = {})).v ?? (_a3.v = /* @__PURE__ */ new Set())).add(La);
  $r();
  const Qt = bt("locked"), ze = bt([]), z = bt(null), Ot = bt(""), Pa = "modulepreload", Na = function(e, t) {
    return new URL(e, t).href;
  }, wn = {}, lt = function(t, n, r) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      let u = function(c) {
        return Promise.all(c.map((_) => Promise.resolve(_).then((f) => ({
          status: "fulfilled",
          value: f
        }), (f) => ({
          status: "rejected",
          reason: f
        }))));
      };
      const i = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), o = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      a = u(n.map((c) => {
        if (c = Na(c, r), c in wn) return;
        wn[c] = true;
        const _ = c.endsWith(".css"), f = _ ? '[rel="stylesheet"]' : "";
        if (!!r) for (let h = i.length - 1; h >= 0; h--) {
          const m = i[h];
          if (m.href === c && (!_ || m.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${f}`)) return;
        const v = document.createElement("link");
        if (v.rel = _ ? "stylesheet" : Pa, _ || (v.as = "script"), v.crossOrigin = "", v.href = c, o && v.setAttribute("nonce", o), document.head.appendChild(v), _) return new Promise((h, m) => {
          v.addEventListener("load", h), v.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function l(i) {
      const s = new Event("vite:preloadError", {
        cancelable: true
      });
      if (s.payload = i, window.dispatchEvent(s), !s.defaultPrevented) throw i;
    }
    return a.then((i) => {
      for (const s of i || []) s.status === "rejected" && l(s.reason);
      return t().catch(l);
    });
  };
  function yn(e, t) {
    const n = new Blob([
      t
    ], {
      type: "application/octet-stream"
    }), r = URL.createObjectURL(n), a = document.createElement("a");
    a.href = r, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(r);
  }
  let rt = null;
  function ae() {
    return rt === null && (rt = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0, console.log(`[MyVault] isTauri() check executed. Result: ${rt}`)), rt;
  }
  async function ce() {
    return ae() ? {
      invoke: (await lt(async () => {
        const { invoke: e } = await import("./core-DV6XEvTN.js");
        return {
          invoke: e
        };
      }, [], import.meta.url)).invoke,
      open: (await lt(async () => {
        const { open: e } = await import("./index-CoEaNoas.js");
        return {
          open: e
        };
      }, __vite__mapDeps([0,1]), import.meta.url)).open,
      save: (await lt(async () => {
        const { save: e } = await import("./index-CoEaNoas.js");
        return {
          save: e
        };
      }, __vite__mapDeps([0,1]), import.meta.url)).save
    } : new Proxy({}, {
      get() {
        return () => {
          throw new Error("Tauri API is not available in this environment.");
        };
      }
    });
  }
  let O = null, Ne = null, xt = null;
  async function bn() {
    return xt || (xt = await lt(() => import("./myvault_wasm-vRDVF8LM.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)), xt;
  }
  const ve = {
    async create(e) {
      if (ae()) {
        const { save: t, invoke: n } = await ce(), r = await t({
          title: "Create New Vault",
          filters: [
            {
              name: "MyVault File",
              extensions: [
                "mvault"
              ]
            }
          ]
        });
        if (!r) throw new Error("Cancelled");
        return await n("create_vault", {
          path: r,
          password: e
        }), [];
      } else {
        const t = await bn();
        return O = new t.WasmVault("new_vault.mvault"), Ne = await O.save(e), yn("myvault.mvault", Ne), [];
      }
    },
    async open(e) {
      if (ae()) {
        const { open: t, invoke: n } = await ce(), r = await t({
          title: "Open Vault",
          multiple: false,
          filters: [
            {
              name: "MyVault File",
              extensions: [
                "mvault"
              ]
            }
          ]
        });
        if (!r) throw new Error("Cancelled");
        return await n("open_vault", {
          path: r,
          password: e
        });
      } else {
        const t = document.createElement("input");
        return t.type = "file", t.accept = ".mvault", new Promise((n, r) => {
          t.onchange = async (a) => {
            var _a4;
            const l = (_a4 = a.target.files) == null ? void 0 : _a4[0];
            if (!l) return r("No file selected");
            const i = await l.arrayBuffer(), s = new Uint8Array(i), o = await bn();
            try {
              O = o.WasmVault.open(l.name, s, e), Ne = s, n(O.listLabels());
            } catch (u) {
              r(u);
            }
          }, t.click();
        });
      }
    },
    async save(e) {
      if (ae()) {
        const { invoke: t } = await ce();
        await t("save_vault", {
          password: e
        });
      } else {
        if (!O) throw new Error("Vault not open");
        Ne = await O.save(e), yn("myvault.mvault", Ne);
      }
    },
    async addEntry(e, t) {
      if (ae()) {
        const { invoke: n } = await ce();
        return await n("add_entry", {
          label: e,
          data: Array.from(t)
        }), await n("list_labels");
      } else {
        if (!O) throw new Error("Vault not open");
        return await O.addEntry(e, t), O.listLabels();
      }
    },
    async getEntryData(e) {
      if (ae()) {
        const { invoke: t } = await ce(), n = await t("get_entry_data", {
          label: e
        });
        return new Uint8Array(n);
      } else {
        if (!O) throw new Error("Vault not open");
        const t = O.getEntryData(e);
        if (!t) throw new Error("Entry not found");
        return t;
      }
    },
    async deleteEntry(e) {
      if (ae()) {
        const { invoke: t } = await ce();
        return await t("delete_entry", {
          label: e
        }), await t("list_labels");
      } else {
        if (!O) throw new Error("Vault not open");
        return await O.deleteEntry(e), O.listLabels();
      }
    },
    async updateEntry(e, t) {
      if (ae()) {
        const { invoke: n } = await ce();
        await n("update_entry", {
          label: e,
          data: Array.from(t)
        });
      } else {
        if (!O) throw new Error("Vault not open");
        await O.updateEntry(e, t);
      }
    },
    async close() {
      if (ae()) {
        const { invoke: e } = await ce();
        await e("close_vault");
      } else O = null, Ne = null;
    }
  };
  var Ca = q('<article><header><h2>MyVault is Locked</h2></header> <form><label for="password">Vault Password</label> <input type="password" id="password" required/> <div class="grid"><button>Open Existing Vault</button> <button class="secondary">Create New Vault</button></div></form></article>');
  function Oa(e, t) {
    xe(t, false);
    let n = U(""), r = U(false);
    async function a(_) {
      if (!y(n)) {
        z.set("Password cannot be empty.");
        return;
      }
      b(r, true), z.set(null);
      try {
        const f = _ === "create" ? await ve.create(y(n)) : await ve.open(y(n));
        ze.set(f), Ot.set(y(n)), Qt.set("unlocked");
      } catch (f) {
        z.set(String(f));
      } finally {
        b(r, false);
      }
    }
    je();
    var l = Ca(), i = L(S(l), 2), s = L(S(i), 2), o = L(s, 2), u = S(o), c = L(u, 2);
    ge(() => {
      s.disabled = y(r), Nt(u, "aria-busy", y(r)), Nt(c, "aria-busy", y(r));
    }), _t(s, () => y(n), (_) => b(n, _)), M("click", u, () => a("open")), M("click", c, () => a("create")), M("submit", i, Xt(function(_) {
      xa.call(this, t, _);
    })), V(e, l), Se();
  }
  var Ra = q("<li><small>No entries yet.</small></li>"), Da = q('<li><a href="#" role="button"> </a></li>'), Ma = q('<aside class="svelte-1eygff7"><div class="list-header svelte-1eygff7"><h3 class="svelte-1eygff7"> </h3> <button class="outline">+ New</button></div> <nav class="svelte-1eygff7"><ul class="svelte-1eygff7"><!> <!></ul></nav></aside>');
  function $a(e, t) {
    xe(t, false);
    const [n, r] = Zt(), a = () => ht(ze, "$entries", n);
    let l = lr(t, "selectedLabel", 8, null);
    const i = Jt();
    je();
    var s = Ma(), o = S(s), u = S(o), c = S(u), _ = L(u, 2), f = L(o, 2), d = S(f), v = S(d);
    {
      var h = (g) => {
        var p = Ra();
        V(g, p);
      };
      qe(v, (g) => {
        a(), Fe(() => a().length === 0) && g(h);
      });
    }
    var m = L(v, 2);
    wa(m, 1, a, (g) => g, (g, p) => {
      var w = Da(), T = S(w);
      let C;
      var X = S(T);
      ge((ne) => {
        C = rr(T, 1, "svelte-1eygff7", null, C, ne), Je(X, y(p));
      }, [
        () => ({
          secondary: l() !== y(p)
        })
      ]), M("click", T, Xt(() => i("select", y(p)))), V(g, w);
    }), ge(() => Je(c, `Entries (${a(), Fe(() => a().length) ?? ""})`)), M("click", _, () => i("add")), V(e, s), Se(), r();
  }
  var Ia = q('<article aria-busy="true">Loading entry...</article>'), Va = q('<div class="grid"><button class="secondary">Cancel</button> <button>Save Changes</button></div>'), Fa = q('<div class="button-group svelte-486tpz"><button>Edit</button> <button> </button> <button class="contrast outline">Delete</button></div>'), qa = q('<header><h2 class="entry-title svelte-486tpz"> </h2></header> <textarea rows="10" aria-label="Entry Data"></textarea> <footer><!></footer>', 1), Ua = q('<section class="svelte-486tpz"><!></section>');
  function Ba(e, t) {
    xe(t, false);
    let n = lr(t, "label", 8);
    const r = Jt();
    let a = U(false), l = U(true), i = "", s = U(""), o = U("Copy");
    async function u() {
      b(l, true), b(a, false);
      try {
        const w = await ve.getEntryData(n());
        i = new TextDecoder().decode(w), b(s, i);
      } catch (w) {
        z.set(String(w));
      } finally {
        b(l, false);
      }
    }
    function c() {
      b(a, true);
    }
    function _() {
      b(s, i), b(a, false);
    }
    async function f() {
      r("update", {
        label: n(),
        data: y(s)
      }), b(a, false), i = y(s);
    }
    async function d() {
      confirm(`Are you sure you want to delete "${n()}"? This cannot be undone.`) && r("delete", {
        label: n()
      });
    }
    async function v() {
      try {
        await navigator.clipboard.writeText(i), b(o, "Copied!"), setTimeout(() => b(o, "Copy"), 2e3);
      } catch {
        z.set("Failed to copy text.");
      }
    }
    Un(() => er(n()), () => {
      n() && u();
    }), Bn(), je();
    var h = Ua(), m = S(h);
    {
      var g = (w) => {
        var T = Ia();
        V(w, T);
      }, p = (w) => {
        var T = qa(), C = Lt(T), X = S(C), ne = S(X), W = L(C, 2), H = L(W, 2), Ae = S(H);
        {
          var re = (x) => {
            var A = Va(), $ = S(A), Z = L($, 2);
            M("click", $, _), M("click", Z, f), V(x, A);
          }, pe = (x) => {
            var A = Fa(), $ = S(A), Z = L($, 2), We = S(Z), ir = L(Z, 2);
            ge(() => Je(We, y(o))), M("click", $, c), M("click", Z, v), M("click", ir, d), V(x, A);
          };
          qe(Ae, (x) => {
            y(a) ? x(re) : x(pe, false);
          });
        }
        ge(() => {
          Je(ne, n()), W.readOnly = !y(a);
        }), _t(W, () => y(s), (x) => b(s, x)), V(w, T);
      };
      qe(m, (w) => {
        y(l) ? w(g) : w(p, false);
      });
    }
    V(e, h), Se();
  }
  var ja = q('<article><header><button aria-label="Close" class="close"></button> <strong>Add New Entry</strong></header> <form><label for="label">Label</label> <input type="text" id="label" required/> <label for="data">Data</label> <textarea id="data" rows="5" required></textarea> <div class="grid"><button type="button" class="secondary">Cancel</button> <button type="submit">Add Entry</button></div></form></article>');
  function Wa(e, t) {
    xe(t, false);
    const n = Jt();
    let r = U(""), a = U("");
    function l() {
      y(r) && y(a) && n("add", {
        label: y(r),
        data: y(a)
      });
    }
    je();
    var i = ja(), s = S(i), o = S(s), u = L(s, 2), c = L(S(u), 2), _ = L(c, 4), f = L(_, 2), d = S(f);
    M("click", o, () => n("close")), _t(c, () => y(r), (v) => b(r, v)), _t(_, () => y(a), (v) => b(a, v)), M("click", d, () => n("close")), M("submit", u, Xt(l)), V(e, i), Se();
  }
  var Ha = q('<div class="mobile-header svelte-l81px2"><button class="outline">&larr; Back</button></div> <!>', 1), Ya = q('<div class="placeholder svelte-l81px2"><article>Select an entry from the list to view its details, or add a new one.</article></div>'), za = q('<dialog><!></dialog> <div class="view-wrapper svelte-l81px2"><div><div class="list-pane svelte-l81px2"><!></div> <div class="detail-pane svelte-l81px2"><!></div></div> <footer class="unlocked-footer svelte-l81px2"><button>Save Vault</button> <button class="secondary outline">Lock Vault</button></footer></div>', 1);
  function Ka(e, t) {
    xe(t, false);
    const [n, r] = Zt(), a = () => ht(Ot, "$currentPassword", n);
    let l = U(null), i = U(false), s = U(false), o = U(false);
    async function u(x) {
      b(i, true), z.set(null);
      try {
        const { label: A, data: $ } = x.detail, Z = new TextEncoder().encode($);
        await ve.updateEntry(A, Z);
      } catch (A) {
        z.set(String(A));
      } finally {
        b(i, false);
      }
    }
    async function c(x) {
      b(i, true);
      try {
        const { label: A } = x.detail, $ = await ve.deleteEntry(A);
        ze.set($), b(l, null);
      } catch (A) {
        z.set(String(A));
      } finally {
        b(i, false);
      }
    }
    async function _(x) {
      b(i, true);
      try {
        const { label: A, data: $ } = x.detail, Z = new TextEncoder().encode($), We = await ve.addEntry(A, Z);
        ze.set(We), b(l, A), b(s, false);
      } catch (A) {
        z.set(String(A));
      } finally {
        b(i, false);
      }
    }
    async function f() {
      b(i, true);
      try {
        await ve.save(a()), alert("Vault saved successfully!");
      } catch (x) {
        z.set(String(x));
      } finally {
        b(i, false);
      }
    }
    function d() {
      ve.close(), Ot.set(""), ze.set([]), b(l, null), Qt.set("locked");
    }
    Un(() => y(l), () => {
      b(o, !!y(l));
    }), Bn(), je();
    var v = za(), h = Lt(v), m = S(h);
    Wa(m, {
      $$events: {
        add: _,
        close: () => b(s, false)
      }
    });
    var g = L(h, 2), p = S(g);
    let w;
    var T = S(p), C = S(T);
    $a(C, {
      get selectedLabel() {
        return y(l);
      },
      set selectedLabel(x) {
        b(l, x);
      },
      $$events: {
        add: () => b(s, true),
        select: (x) => b(l, x.detail)
      },
      $$legacy: true
    });
    var X = L(T, 2), ne = S(X);
    {
      var W = (x) => {
        var A = Ha(), $ = Lt(A), Z = S($), We = L($, 2);
        Ba(We, {
          get label() {
            return y(l);
          },
          $$events: {
            update: u,
            delete: c
          }
        }), M("click", Z, () => b(l, null)), V(x, A);
      }, H = (x) => {
        var A = Ya();
        V(x, A);
      };
      qe(ne, (x) => {
        y(l) ? x(W) : x(H, false);
      });
    }
    var Ae = L(p, 2), re = S(Ae), pe = L(re, 2);
    ge((x) => {
      h.open = y(s), w = rr(p, 1, "unlocked-container svelte-l81px2", null, w, x), Nt(re, "aria-busy", y(i));
    }, [
      () => ({
        "show-detail": y(o)
      })
    ]), M("click", re, f), M("click", pe, d), V(e, v), Se(), r();
  }
  var Ga = q('<article class="error svelte-1vu38ze"><p> </p> <button>Close</button></article>'), Xa = q("<main><!> <!></main>");
  function Za(e, t) {
    xe(t, false);
    const [n, r] = Zt(), a = () => ht(z, "$currentError", n), l = () => ht(Qt, "$vaultState", n);
    je();
    var i = Xa(), s = S(i);
    {
      var o = (f) => {
        var d = Ga(), v = S(d), h = S(v), m = L(v, 2);
        ge(() => Je(h, a())), M("click", m, () => z.set(null)), V(f, d);
      };
      qe(s, (f) => {
        a() && f(o);
      });
    }
    var u = L(s, 2);
    {
      var c = (f) => {
        Oa(f, {});
      }, _ = (f) => {
        Ka(f, {});
      };
      qe(u, (f) => {
        l() === "locked" ? f(c) : f(_, false);
      });
    }
    V(e, i), Se(), r();
  }
  da(Za, {
    target: document.getElementById("app")
  });
})();
