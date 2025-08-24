let L, M, V, k, q, G, z, N, H, $, J, P, K, Q, X, Y, Z, ee, te, C, ne, _e, re, oe, ae, ce, se, ie, le, ue, de, be, we, fe, ge, Ie;
let __tla = (async () => {
  const U = "" + new URL("myvault_wasm_bg-CaFcwGWA.wasm", import.meta.url).href, O = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const o = t.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(o, "base64");
      else if (typeof atob == "function") {
        const s = atob(o);
        r = new Uint8Array(s.length);
        for (let a = 0; a < s.length; a++) r[a] = s.charCodeAt(a);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(r, e);
    } else {
      const o = await fetch(t), r = o.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(o, e);
      else {
        const s = await o.arrayBuffer();
        n = await WebAssembly.instantiate(s, e);
      }
    }
    return n.instance.exports;
  };
  let _;
  C = function(e) {
    _ = e;
  };
  function g(e) {
    const t = _.__externref_table_alloc();
    return _.__wbindgen_export_2.set(t, e), t;
  }
  function m(e, t) {
    try {
      return e.apply(this, t);
    } catch (n) {
      const o = g(n);
      _.__wbindgen_exn_store(o);
    }
  }
  const R = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let S = new R("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  S.decode();
  let p = null;
  function w() {
    return (p === null || p.byteLength === 0) && (p = new Uint8Array(_.memory.buffer)), p;
  }
  function y(e, t) {
    return e = e >>> 0, S.decode(w().subarray(e, e + t));
  }
  let l = 0;
  const B = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let h = new B("utf-8");
  const j = typeof h.encodeInto == "function" ? function(e, t) {
    return h.encodeInto(e, t);
  } : function(e, t) {
    const n = h.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function u(e, t, n) {
    if (n === void 0) {
      const i = h.encode(e), d = t(i.length, 1) >>> 0;
      return w().subarray(d, d + i.length).set(i), l = i.length, d;
    }
    let o = e.length, r = t(o, 1) >>> 0;
    const s = w();
    let a = 0;
    for (; a < o; a++) {
      const i = e.charCodeAt(a);
      if (i > 127) break;
      s[r + a] = i;
    }
    if (a !== o) {
      a !== 0 && (e = e.slice(a)), r = n(r, o, o = a + e.length * 3, 1) >>> 0;
      const i = w().subarray(r + a, r + o), d = j(e, i);
      a += d.written, r = n(r, o, a, 1) >>> 0;
    }
    return l = a, r;
  }
  let b = null;
  function A() {
    return (b === null || b.buffer.detached === true || b.buffer.detached === void 0 && b.buffer !== _.memory.buffer) && (b = new DataView(_.memory.buffer)), b;
  }
  function v(e) {
    return e == null;
  }
  Ie = function() {
    _.start();
  };
  function E(e, t) {
    const n = t(e.length * 1, 1) >>> 0;
    return w().set(e, n / 1), l = e.length, n;
  }
  function f(e) {
    const t = _.__wbindgen_export_2.get(e);
    return _.__externref_table_dealloc(e), t;
  }
  function W(e, t) {
    return e = e >>> 0, w().subarray(e / 1, e / 1 + t);
  }
  function I(e, t) {
    e = e >>> 0;
    const n = A(), o = [];
    for (let r = e; r < e + 4 * t; r += 4) o.push(_.__wbindgen_export_2.get(n.getUint32(r, true)));
    return _.__externref_drop_slice(e, t), o;
  }
  const T = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => _.__wbg_wasmvault_free(e >>> 0, 1));
  L = class {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(L.prototype);
      return n.__wbg_ptr = t, T.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, T.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_wasmvault_free(t, 0);
    }
    constructor(t) {
      const n = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = l, r = _.wasmvault_new(n, o);
      return this.__wbg_ptr = r >>> 0, T.register(this, this.__wbg_ptr, this), this;
    }
    static open(t, n, o) {
      const r = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), s = l, a = E(n, _.__wbindgen_malloc), i = l, d = u(o, _.__wbindgen_malloc, _.__wbindgen_realloc), D = l, x = _.wasmvault_open(r, s, a, i, d, D);
      if (x[2]) throw f(x[1]);
      return L.__wrap(x[0]);
    }
    save(t) {
      const n = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = l, r = _.wasmvault_save(this.__wbg_ptr, n, o);
      if (r[3]) throw f(r[2]);
      var s = W(r[0], r[1]).slice();
      return _.__wbindgen_free(r[0], r[1] * 1, 1), s;
    }
    addEntry(t, n) {
      const o = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = l, s = E(n, _.__wbindgen_malloc), a = l, i = _.wasmvault_addEntry(this.__wbg_ptr, o, r, s, a);
      if (i[1]) throw f(i[0]);
    }
    listLabels() {
      const t = _.wasmvault_listLabels(this.__wbg_ptr);
      var n = I(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), n;
    }
    getEntryData(t) {
      const n = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = l, r = _.wasmvault_getEntryData(this.__wbg_ptr, n, o);
      let s;
      return r[0] !== 0 && (s = W(r[0], r[1]).slice(), _.__wbindgen_free(r[0], r[1] * 1, 1)), s;
    }
    deleteEntry(t) {
      const n = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = l, r = _.wasmvault_deleteEntry(this.__wbg_ptr, n, o);
      if (r[1]) throw f(r[0]);
    }
    updateEntry(t, n) {
      const o = u(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = l, s = E(n, _.__wbindgen_malloc), a = l, i = _.wasmvault_updateEntry(this.__wbg_ptr, o, r, s, a);
      if (i[1]) throw f(i[0]);
    }
  };
  M = function(e) {
    return e.buffer;
  };
  V = function() {
    return m(function(e, t) {
      return e.call(t);
    }, arguments);
  };
  k = function() {
    return m(function(e, t, n) {
      return e.call(t, n);
    }, arguments);
  };
  q = function(e) {
    return e.crypto;
  };
  G = function(e, t) {
    let n, o;
    try {
      n = e, o = t, console.error(y(e, t));
    } finally {
      _.__wbindgen_free(n, o, 1);
    }
  };
  z = function() {
    return m(function(e, t) {
      e.getRandomValues(t);
    }, arguments);
  };
  N = function(e) {
    return e.msCrypto;
  };
  H = function() {
    return new Error();
  };
  $ = function(e) {
    return new Uint8Array(e);
  };
  J = function(e, t) {
    return new Error(y(e, t));
  };
  P = function(e, t) {
    return new Function(y(e, t));
  };
  K = function(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
  };
  Q = function(e) {
    return new Uint8Array(e >>> 0);
  };
  X = function(e) {
    return e.node;
  };
  Y = function(e) {
    return e.process;
  };
  Z = function() {
    return m(function(e, t) {
      e.randomFillSync(t);
    }, arguments);
  };
  ee = function() {
    return m(function() {
      return module.require;
    }, arguments);
  };
  te = function(e, t, n) {
    e.set(t, n >>> 0);
  };
  ne = function(e, t) {
    const n = t.stack, o = u(n, _.__wbindgen_malloc, _.__wbindgen_realloc), r = l;
    A().setInt32(e + 4, r, true), A().setInt32(e + 0, o, true);
  };
  _e = function() {
    const e = typeof global > "u" ? null : global;
    return v(e) ? 0 : g(e);
  };
  re = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return v(e) ? 0 : g(e);
  };
  oe = function() {
    const e = typeof self > "u" ? null : self;
    return v(e) ? 0 : g(e);
  };
  ae = function() {
    const e = typeof window > "u" ? null : window;
    return v(e) ? 0 : g(e);
  };
  ce = function(e, t, n) {
    return e.subarray(t >>> 0, n >>> 0);
  };
  se = function(e) {
    return e.versions;
  };
  ie = function() {
    const e = _.__wbindgen_export_2, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  };
  le = function(e) {
    return typeof e == "function";
  };
  ue = function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  };
  de = function(e) {
    return typeof e == "string";
  };
  be = function(e) {
    return e === void 0;
  };
  we = function() {
    return _.memory;
  };
  fe = function(e, t) {
    return y(e, t);
  };
  ge = function(e, t) {
    throw new Error(y(e, t));
  };
  URL = globalThis.URL;
  const c = await O({
    "./myvault_wasm_bg.js": {
      __wbg_new_8a6f238a6ece86ea: H,
      __wbg_stack_0ed75d68575b0f3c: ne,
      __wbg_error_7534b8e9a36f1ab4: G,
      __wbg_crypto_574e78ad8b13b65f: q,
      __wbindgen_is_object: ue,
      __wbg_process_dc0fbacc7c1c06f7: Y,
      __wbg_versions_c01dfd4722a88165: se,
      __wbg_node_905d3e251edff8a2: X,
      __wbindgen_is_string: de,
      __wbg_require_60cc747a6bc5215a: ee,
      __wbindgen_is_function: le,
      __wbindgen_string_new: fe,
      __wbg_msCrypto_a61aeb35a24c1329: N,
      __wbg_randomFillSync_ac0988aba3254290: Z,
      __wbg_getRandomValues_b8f5dbd5f3995a9e: z,
      __wbg_newnoargs_105ed471475aaf50: P,
      __wbg_call_672a4d21634d4a24: V,
      __wbindgen_is_undefined: be,
      __wbg_new_c68d7209be747379: J,
      __wbg_call_7cccdd69e0791ae2: k,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: re,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: oe,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: ae,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: _e,
      __wbg_buffer_609cc3eee51ed158: M,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: K,
      __wbg_new_a12002a7f91c75be: $,
      __wbg_set_65595bdd868b3009: te,
      __wbg_newwithlength_a381634e90c276d4: Q,
      __wbg_subarray_aa9065fa9dc5df96: ce,
      __wbindgen_throw: ge,
      __wbindgen_memory: we,
      __wbindgen_init_externref_table: ie
    }
  }, U), me = c.memory, ye = c.__wbg_wasmvault_free, pe = c.wasmvault_new, he = c.wasmvault_open, ve = c.wasmvault_save, xe = c.wasmvault_addEntry, Ee = c.wasmvault_listLabels, Te = c.wasmvault_getEntryData, Ae = c.wasmvault_deleteEntry, Le = c.wasmvault_updateEntry, We = c.start, Se = c.__wbindgen_exn_store, Fe = c.__externref_table_alloc, De = c.__wbindgen_export_2, Ue = c.__wbindgen_free, Oe = c.__wbindgen_malloc, Ce = c.__wbindgen_realloc, Re = c.__externref_table_dealloc, Be = c.__externref_drop_slice, F = c.__wbindgen_start, je = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_drop_slice: Be,
    __externref_table_alloc: Fe,
    __externref_table_dealloc: Re,
    __wbg_wasmvault_free: ye,
    __wbindgen_exn_store: Se,
    __wbindgen_export_2: De,
    __wbindgen_free: Ue,
    __wbindgen_malloc: Oe,
    __wbindgen_realloc: Ce,
    __wbindgen_start: F,
    memory: me,
    start: We,
    wasmvault_addEntry: xe,
    wasmvault_deleteEntry: Ae,
    wasmvault_getEntryData: Te,
    wasmvault_listLabels: Ee,
    wasmvault_new: pe,
    wasmvault_open: he,
    wasmvault_save: ve,
    wasmvault_updateEntry: Le
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  C(je);
  F();
})();
export {
  L as WasmVault,
  __tla,
  M as __wbg_buffer_609cc3eee51ed158,
  V as __wbg_call_672a4d21634d4a24,
  k as __wbg_call_7cccdd69e0791ae2,
  q as __wbg_crypto_574e78ad8b13b65f,
  G as __wbg_error_7534b8e9a36f1ab4,
  z as __wbg_getRandomValues_b8f5dbd5f3995a9e,
  N as __wbg_msCrypto_a61aeb35a24c1329,
  H as __wbg_new_8a6f238a6ece86ea,
  $ as __wbg_new_a12002a7f91c75be,
  J as __wbg_new_c68d7209be747379,
  P as __wbg_newnoargs_105ed471475aaf50,
  K as __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a,
  Q as __wbg_newwithlength_a381634e90c276d4,
  X as __wbg_node_905d3e251edff8a2,
  Y as __wbg_process_dc0fbacc7c1c06f7,
  Z as __wbg_randomFillSync_ac0988aba3254290,
  ee as __wbg_require_60cc747a6bc5215a,
  te as __wbg_set_65595bdd868b3009,
  C as __wbg_set_wasm,
  ne as __wbg_stack_0ed75d68575b0f3c,
  _e as __wbg_static_accessor_GLOBAL_88a902d13a557d07,
  re as __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0,
  oe as __wbg_static_accessor_SELF_37c5d418e4bf5819,
  ae as __wbg_static_accessor_WINDOW_5de37043a91a9c40,
  ce as __wbg_subarray_aa9065fa9dc5df96,
  se as __wbg_versions_c01dfd4722a88165,
  ie as __wbindgen_init_externref_table,
  le as __wbindgen_is_function,
  ue as __wbindgen_is_object,
  de as __wbindgen_is_string,
  be as __wbindgen_is_undefined,
  we as __wbindgen_memory,
  fe as __wbindgen_string_new,
  ge as __wbindgen_throw,
  Ie as start
};
