var rt=(I,X)=>()=>(X||I((X={exports:{}}).exports,X),X.exports);import{d as Ue,r as N,u as it,Y as ge,E as dt,h as st,w as ct,a as A,m as K,b as G,c as J,e as d,o as _,f as S,g as E,i as t,j as n,k as m,p as ft,F as U,l as q,n as y,q as Ce,s as h,t as j,v as Q,x as xe,y as R,z as Pe,A as mt,B as Ae,C as _t,D as be,G as ye,H as Re,I as pt,J as gt,K as bt,L as yt,M as vt,N as Vt,O as wt,P as ht,Q as kt,R as Et,__tla as St}from"./vendor-Df1kOD3n.js";var Ut=rt((Pt,fe)=>{Promise.all([(()=>{try{return St}catch{}})()]).then(async()=>{(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();const I=Ue("config",()=>{const l=N({patterns:{},categories:{},ruleSets:{}}),{open:e,reset:a,onChange:o}=it({accept:".yaml,.yml,text/vnd.yaml"});o(c=>{var f;c&&((f=c.item(0))==null||f.text().then(s=>{l.value=ge.parse(s)}).catch(s=>{dt.alert(st("pre",{style:{overflow:"scroll"}},`\u6253\u5F00\u6587\u4EF6\u65F6\u9047\u5230\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u6B63\u786E\u3002
\u9519\u8BEF\u4FE1\u606F\uFF1A
${s}`),"\u9519\u8BEF",{type:"error"})}).finally(()=>a()))});function u(){e()}function r(){const c=ge.stringify(l.value),f=new File([c],"config.yaml"),s=URL.createObjectURL(f),i=document.createElement("a");i.href=s,i.download="config.yaml",i.click(),setTimeout(()=>{URL.revokeObjectURL(s),i.remove()},100)}return{config:l,load:u,save:r}}),X="/assets/rhythmologist_core_bg-DCjiwKJq.wasm",Ie=async(l={},e)=>{let a;if(e.startsWith("data:")){const o=e.replace(/^data:.*?base64,/,"");let u;if(typeof Buffer=="function"&&typeof Buffer.from=="function")u=Buffer.from(o,"base64");else if(typeof atob=="function"){const r=atob(o);u=new Uint8Array(r.length);for(let c=0;c<r.length;c++)u[c]=r.charCodeAt(c)}else throw new Error("Cannot decode base64-encoded data URL");a=await WebAssembly.instantiate(u,l)}else{const o=await fetch(e),u=o.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&u.startsWith("application/wasm"))a=await WebAssembly.instantiateStreaming(o,l);else{const r=await o.arrayBuffer();a=await WebAssembly.instantiate(r,l)}}return a.instance.exports};let C;function Ne(l){C=l}const qe=typeof TextDecoder>"u"?(0,fe.require)("util").TextDecoder:TextDecoder;let ve=new qe("utf-8",{ignoreBOM:!0,fatal:!0});ve.decode();let le=null;function te(){return(le===null||le.byteLength===0)&&(le=new Uint8Array(C.memory.buffer)),le}function ae(l,e){return l=l>>>0,ve.decode(te().subarray(l,l+e))}const O=new Array(128).fill(void 0);O.push(void 0,null,!0,!1);let H=O.length;function k(l){H===O.length&&O.push(O.length+1);const e=H;return H=O[e],O[e]=l,e}function v(l){return O[l]}function Be(l){l<132||(O[l]=H,H=l)}function ne(l){const e=v(l);return Be(l),e}let oe=0;const Le=typeof TextEncoder>"u"?(0,fe.require)("util").TextEncoder:TextEncoder;let ue=new Le("utf-8");const Te=typeof ue.encodeInto=="function"?function(l,e){return ue.encodeInto(l,e)}:function(l,e){const a=ue.encode(l);return e.set(a),{read:l.length,written:a.length}};function Ve(l,e,a){if(a===void 0){const f=ue.encode(l),s=e(f.length,1)>>>0;return te().subarray(s,s+f.length).set(f),oe=f.length,s}let o=l.length,u=e(o,1)>>>0;const r=te();let c=0;for(;c<o;c++){const f=l.charCodeAt(c);if(f>127)break;r[u+c]=f}if(c!==o){c!==0&&(l=l.slice(c)),u=a(u,o,o=c+l.length*3,1)>>>0;const f=te().subarray(u+c,u+o),s=Te(l,f);c+=s.written,u=a(u,o,c,1)>>>0}return oe=c,u}let re=null;function $(){return(re===null||re.byteLength===0)&&(re=new Int32Array(C.memory.buffer)),re}function je(l){try{const u=C.__wbindgen_add_to_stack_pointer(-16),r=Ve(l,C.__wbindgen_malloc,C.__wbindgen_realloc),c=oe;C.parse_config(u,r,c);var e=$()[u/4+0],a=$()[u/4+1],o=$()[u/4+2];if(o)throw ne(a);return ie.__wrap(e)}finally{C.__wbindgen_add_to_stack_pointer(16)}}function Oe(l,e){if(!(l instanceof e))throw new Error(`expected instance of ${e.name}`);return l.ptr}function Me(l,e){let a,o;try{const p=C.__wbindgen_add_to_stack_pointer(-16);Oe(l,ie);const V=Ve(e,C.__wbindgen_malloc,C.__wbindgen_realloc),g=oe;C.generate_batch_json(p,l.__wbg_ptr,V,g);var u=$()[p/4+0],r=$()[p/4+1],c=$()[p/4+2],f=$()[p/4+3],s=u,i=r;if(f)throw s=0,i=0,ne(c);return a=s,o=i,ae(s,i)}finally{C.__wbindgen_add_to_stack_pointer(16),C.__wbindgen_free(a,o,1)}}function M(l,e){try{return l.apply(this,e)}catch(a){C.__wbindgen_exn_store(k(a))}}const we=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(l=>C.__wbg_config_free(l>>>0));class ie{static __wrap(e){e=e>>>0;const a=Object.create(ie.prototype);return a.__wbg_ptr=e,we.register(a,a.__wbg_ptr,a),a}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,we.unregister(this),e}free(){const e=this.__destroy_into_raw();C.__wbg_config_free(e)}}function Fe(l,e){const a=ae(l,e);return k(a)}function $e(l){ne(l)}function De(l){const e=v(l).crypto;return k(e)}function We(l){const e=v(l);return typeof e=="object"&&e!==null}function ze(l){const e=v(l).process;return k(e)}function Ke(l){const e=v(l).versions;return k(e)}function Ge(l){const e=v(l).node;return k(e)}function Je(l){return typeof v(l)=="string"}function Qe(l){const e=v(l).msCrypto;return k(e)}function Xe(){return M(function(){const l=fe.require;return k(l)},arguments)}function Ye(l){return typeof v(l)=="function"}function He(){return M(function(l,e){v(l).randomFillSync(ne(e))},arguments)}function Ze(){return M(function(l,e){v(l).getRandomValues(v(e))},arguments)}function el(l,e){const a=new Function(ae(l,e));return k(a)}function ll(){return M(function(l,e){const a=v(l).call(v(e));return k(a)},arguments)}function tl(l){const e=v(l);return k(e)}function al(){return M(function(){const l=self.self;return k(l)},arguments)}function nl(){return M(function(){const l=window.window;return k(l)},arguments)}function ol(){return M(function(){const l=globalThis.globalThis;return k(l)},arguments)}function ul(){return M(function(){const l=global.global;return k(l)},arguments)}function rl(l){return v(l)===void 0}function il(){return M(function(l,e,a){const o=v(l).call(v(e),v(a));return k(o)},arguments)}function dl(l){const e=v(l).buffer;return k(e)}function sl(l,e,a){const o=new Uint8Array(v(l),e>>>0,a>>>0);return k(o)}function cl(l){const e=new Uint8Array(v(l));return k(e)}function fl(l,e,a){v(l).set(v(e),a>>>0)}function ml(l){const e=new Uint8Array(l>>>0);return k(e)}function _l(l,e,a){const o=v(l).subarray(e>>>0,a>>>0);return k(o)}function pl(l,e){throw new Error(ae(l,e))}function gl(){const l=C.memory;return k(l)}URL=globalThis.URL;const B=await Ie({"./rhythmologist_core_bg.js":{__wbindgen_string_new:Fe,__wbindgen_object_drop_ref:$e,__wbg_crypto_d05b68a3572bb8ca:De,__wbindgen_is_object:We,__wbg_process_b02b3570280d0366:ze,__wbg_versions_c1cb42213cedf0f5:Ke,__wbg_node_43b1089f407e4ec2:Ge,__wbindgen_is_string:Je,__wbg_msCrypto_10fc94afee92bd76:Qe,__wbg_require_9a7e0f667ead4995:Xe,__wbindgen_is_function:Ye,__wbg_randomFillSync_b70ccbdf4926a99d:He,__wbg_getRandomValues_7e42b4fb8779dc6d:Ze,__wbg_newnoargs_cfecb3965268594c:el,__wbg_call_3f093dd26d5569f8:ll,__wbindgen_object_clone_ref:tl,__wbg_self_05040bd9523805b9:al,__wbg_window_adc720039f2cb14f:nl,__wbg_globalThis_622105db80c1457d:ol,__wbg_global_f56b013ed9bcf359:ul,__wbindgen_is_undefined:rl,__wbg_call_67f2111acd2dfdb6:il,__wbg_buffer_b914fb8b50ebbc3e:dl,__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e:sl,__wbg_new_b1f2d6842d615181:cl,__wbg_set_7d988c98e6ced92d:fl,__wbg_newwithlength_0d03cef43b68a530:ml,__wbg_subarray_adc418253d76e2f1:_l,__wbindgen_throw:pl,__wbindgen_memory:gl}},X),bl=B.memory,yl=B.parse_config,vl=B.generate_batch_yaml,Vl=B.generate_batch_json,wl=B.__wbg_config_free,hl=B.__wbindgen_add_to_stack_pointer,kl=B.__wbindgen_malloc,El=B.__wbindgen_realloc,Sl=B.__wbindgen_free,Ul=B.__wbindgen_exn_store,Cl=Object.freeze(Object.defineProperty({__proto__:null,__wbg_config_free:wl,__wbindgen_add_to_stack_pointer:hl,__wbindgen_exn_store:Ul,__wbindgen_free:Sl,__wbindgen_malloc:kl,__wbindgen_realloc:El,generate_batch_json:Vl,generate_batch_yaml:vl,memory:bl,parse_config:yl},Symbol.toStringTag,{value:"Module"}));Ne(Cl);const de=Ue("appStatus",()=>{const l=I(),e=N("editing"),a=N(""),o=N([]),u=N(""),r=N(null);ct(()=>{try{r.value=je(JSON.stringify(l.config)),e.value="editing"}catch(i){r.value=null,u.value=i.toString(),e.value="edit-err"}});function c(){e.value="editing"}function f(){if(r.value!==null){o.value=[],e.value="running";try{const i=Me(r.value,a.value);o.value=JSON.parse(i),s()}catch(i){u.value=i.toString(),e.value="exec-err"}}}function s(){e.value="result"}return{currentStep:e,selectedPresetName:a,generationResult:o,errorMsg:u,configParsed:r,edit:c,run:f,showResult:s}}),F=Symbol("keyForXObjArray");function he(l){return l[F]||(l[F]=Symbol()),l[F]}const xl={style:{"margin-bottom":"8px"}},Pl={style:{"margin-bottom":"8px"}},Al=A({__name:"ConfigChildItemList",props:K({defaultNewItemValue:{},dialogTitle:{default:""},dialogPrompt:{default:""},dialogErrorText:{default:""},disableScroll:{type:Boolean,default:!0},retrieveKey:{type:Function,default:(l,e)=>e}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue"),a=l,o=N(!1),u=N(""),r=J(()=>!(u.value in e.value)&&u.value.length>0);function c(){Array.isArray(e.value)?e.value.push(a.defaultNewItemValue()):(e.value[u.value]=a.defaultNewItemValue(),u.value="",o.value=!1)}function f(){Array.isArray(e.value)?c():o.value=!0}function s(g){Array.isArray(e.value)?e.value.splice(g,1):delete e.value[g]}function i(g){if(Array.isArray(e.value)){const b=a.defaultNewItemValue();typeof e.value[g][F]<"u"&&(b[F]=e.value[g][F]),e.value[g]=b}else e.value[g]=a.defaultNewItemValue()}function p(g){if(Array.isArray(e.value)){let b=e.value.splice(g,1);e.value.splice(g-1,0,...b)}}function V(g){if(Array.isArray(e.value)){let b=e.value.splice(g,1);e.value.splice(g+1,0,...b)}}return(g,b)=>{const x=d("ElIcon"),Z=d("ElButton"),W=d("ElForm"),z=d("ElCollapseItem"),ee=d("ElCollapse"),w=d("ElScrollbar"),P=d("ElInput"),ce=d("ElText"),Se=d("el-button"),ut=d("ElDialog");return _(),S(U,null,[E("div",{class:_t({"disable-scroll":a.disableScroll}),style:{display:"flex","flex-direction":"column"}},[E("div",xl,[t(Z,{onClick:b[0]||(b[0]=L=>f())},{default:n(()=>[t(x,null,{default:n(()=>[t(m(ft))]),_:1})]),_:1})]),t(w,{style:{"padding-right":"10px"}},{default:n(()=>[t(ee,null,{default:n(()=>[(_(!0),S(U,null,q(e.value,(L,T)=>(_(),y(z,{key:g.retrieveKey(L,T)},{title:n(()=>[Ce(g.$slots,"itemTitle",{item:L,key:T},()=>[h(j(T),1)],!0),Array.isArray(e.value)?(_(),S(U,{key:0},[T!==0?(_(),y(x,{key:0,class:"icon",onClick:Q(pe=>p(T),["stop"])},{default:n(()=>[t(m(xe))]),_:2},1032,["onClick"])):R("",!0),T<e.value.length-1?(_(),y(x,{key:1,class:"icon",onClick:Q(pe=>V(T),["stop"])},{default:n(()=>[t(m(Pe))]),_:2},1032,["onClick"])):R("",!0)],64)):R("",!0),t(x,{class:"icon",onClick:Q(pe=>i(T),["stop"])},{default:n(()=>[t(m(mt))]),_:2},1032,["onClick"]),t(x,{class:"icon",onClick:Q(pe=>s(T),["stop"])},{default:n(()=>[t(m(Ae))]),_:2},1032,["onClick"])]),default:n(()=>[t(W,{"label-position":"top"},{default:n(()=>[Ce(g.$slots,"default",{item:L,key:T},void 0,!0)]),_:2},1024)]),_:2},1024))),128))]),_:3})]),_:3})],2),t(ut,{modelValue:o.value,"onUpdate:modelValue":b[4]||(b[4]=L=>o.value=L),title:a.dialogTitle},{footer:n(()=>[E("span",null,[t(Se,{onClick:b[2]||(b[2]=L=>o.value=!1)},{default:n(()=>[h("\u53D6\u6D88")]),_:1}),t(Se,{type:"primary",disabled:!r.value,onClick:b[3]||(b[3]=L=>c())},{default:n(()=>[h(" \u6DFB\u52A0 ")]),_:1},8,["disabled"])])]),default:n(()=>[E("div",Pl,j(a.dialogPrompt),1),t(P,{modelValue:u.value,"onUpdate:modelValue":b[1]||(b[1]=L=>u.value=L)},null,8,["modelValue"]),be(t(ce,{type:"danger"},{default:n(()=>[h(j(a.dialogErrorText),1)]),_:1},512),[[ye,!r.value]])]),_:1},8,["modelValue","title"])],64)}}}),me=(l,e)=>{const a=l.__vccOpts||l;for(const[o,u]of e)a[o]=u;return a},D=me(Al,[["__scopeId","data-v-613da4c1"]]),Rl=A({__name:"PatternsPane",setup(l){const e=I();return(a,o)=>{const u=d("ElInputNumber"),r=d("ElFormItem"),c=d("ElInput");return _(),y(D,{modelValue:m(e).config.patterns,"onUpdate:modelValue":o[0]||(o[0]=f=>m(e).config.patterns=f),"default-new-item-value":()=>({length:1}),"dialog-title":"\u6DFB\u52A0\u8282\u594F\u578B","dialog-prompt":"\u8BF7\u4E3A\u8282\u594F\u578B\u8BBE\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u7528\u4E8E\u6307\u4EE3\u6B64\u8282\u594F\u578B\u3002","dialog-error-text":"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0E\u73B0\u6709\u8282\u594F\u578B\u91CD\u590D\u3002"},{default:n(({item:f})=>[t(r,{label:"\u957F\u5EA6length",required:""},{default:n(()=>[t(u,{modelValue:f.length,"onUpdate:modelValue":s=>f.length=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"\u663E\u793A\u540D\u79F0displayName"},{default:n(()=>[t(c,{modelValue:f.displayName,"onUpdate:modelValue":s=>f.displayName=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"ABC\u683C\u5F0F\u663E\u793A\u5185\u5BB9displayAbc (\u9ED8\u8BA4L: 1/16)"},{default:n(()=>[t(c,{modelValue:f.displayAbc,"onUpdate:modelValue":s=>f.displayAbc=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["modelValue"])}}}),Il=A({__name:"CategoriesPane",setup(l){const e=I();return(a,o)=>{const u=d("ElOption"),r=d("ElSelect"),c=d("ElFormItem");return _(),y(D,{modelValue:m(e).config.categories,"onUpdate:modelValue":o[0]||(o[0]=f=>m(e).config.categories=f),"default-new-item-value":()=>[],"dialog-title":"\u6DFB\u52A0\u7C7B\u522B","dialog-prompt":"\u8BF7\u4E3A\u8282\u594F\u578B\u7C7B\u522B\u8BBE\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u7528\u4E8E\u6307\u4EE3\u6B64\u7C7B\u522B\u3002","dialog-error-text":"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0E\u73B0\u6709\u7C7B\u522B\u540D\u91CD\u590D\u3002"},{default:n(({key:f})=>[t(c,{required:""},{default:n(()=>[t(r,{modelValue:m(e).config.categories[f],"onUpdate:modelValue":s=>m(e).config.categories[f]=s,multiple:"",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(m(e).config.patterns,(s,i)=>(_(),y(u,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["modelValue"])}}}),Nl=A({__name:"FillEachBlankActionView",props:K({parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue"),a=l;return(o,u)=>{const r=d("ElOption"),c=d("ElSelect"),f=d("ElFormItem"),s=d("ElCard");return e.value?(_(),S(U,{key:0},[t(f,{label:"\u533A\u57DF\u8303\u56F4in",required:""},{default:n(()=>[t(c,{modelValue:e.value.in,"onUpdate:modelValue":u[0]||(u[0]=i=>e.value.in=i),multiple:"",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(a.parentRuleSet.layout,(i,p)=>(_(),y(r,{key:p,label:p,value:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"\u8C03\u7528\u52A8\u4F5Cwith",required:""},{default:n(()=>[t(s,{shadow:"never",style:{width:"100%"},class:"card-remove-last-margin-bottom"},{default:n(()=>[t(se,{modelValue:e.value.with,"onUpdate:modelValue":u[1]||(u[1]=i=>e.value.with=i),mode:"action","parent-rule-set":o.parentRuleSet},null,8,["modelValue","parent-rule-set"])]),_:1})]),_:1})],64)):R("",!0)}}}),ql=A({__name:"ChooseARandomPositionActionView",props:K({parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue"),a=l;return(o,u)=>{const r=d("ElOption"),c=d("ElSelect"),f=d("ElFormItem"),s=d("ElInputNumber"),i=d("ElCard");return e.value?(_(),S(U,{key:0},[t(f,{label:"\u533A\u57DF\u8303\u56F4in",required:""},{default:n(()=>[t(c,{modelValue:e.value.in,"onUpdate:modelValue":u[0]||(u[0]=p=>e.value.in=p),multiple:"",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(a.parentRuleSet.layout,(p,V)=>(_(),y(r,{key:V,label:V,value:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"\u957F\u5EA6length",required:""},{default:n(()=>[t(s,{modelValue:e.value.length,"onUpdate:modelValue":u[1]||(u[1]=p=>e.value.length=p)},null,8,["modelValue"])]),_:1}),t(f,{label:"\u8C03\u7528\u52A8\u4F5Cdo",required:""},{default:n(()=>[t(i,{shadow:"never",style:{width:"100%"},class:"card-remove-last-margin-bottom"},{default:n(()=>[t(se,{modelValue:e.value.do,"onUpdate:modelValue":u[2]||(u[2]=p=>e.value.do=p),mode:"action","parent-rule-set":o.parentRuleSet},null,8,["modelValue","parent-rule-set"])]),_:1})]),_:1})],64)):R("",!0)}}}),Bl=A({__name:"RandomPickActionView",props:K({parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=I(),a=G(l,"modelValue"),o=l;return(u,r)=>{const c=d("ElOption"),f=d("ElSelect"),s=d("ElButton"),i=d("ElFormItem"),p=d("ElInputNumber"),V=d("ElCard");return a.value?(_(),S(U,{key:0},[t(i,{label:"\u4ECE\u5206\u7C7B\u4E2D\u9009\u53D6\u8282\u594F\u578BfromCategories"},{default:n(()=>[a.value.fromCategories?(_(),y(f,{key:0,modelValue:a.value.fromCategories,"onUpdate:modelValue":r[0]||(r[0]=g=>a.value.fromCategories=g),multiple:"",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(m(e).config.categories,(g,b)=>(_(),y(c,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):(_(),y(s,{key:1,onClick:r[1]||(r[1]=g=>a.value.fromCategories=[])},{default:n(()=>[h("\u521B\u5EFA")]),_:1}))]),_:1}),t(i,{label:"\u4ECE\u6B64\u5217\u8868\u4E2D\u9009\u53D6\u8282\u594F\u578BfromList"},{default:n(()=>[a.value.fromList?(_(),y(f,{key:0,modelValue:a.value.fromList,"onUpdate:modelValue":r[2]||(r[2]=g=>a.value.fromList=g),multiple:"",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(m(e).config.patterns,(g,b)=>(_(),y(c,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):(_(),y(s,{key:1,onClick:r[3]||(r[3]=g=>a.value.fromList=[])},{default:n(()=>[h("\u521B\u5EFA")]),_:1}))]),_:1}),t(i,{label:"\u6700\u5927\u957F\u5EA6maxLength"},{default:n(()=>[t(p,{modelValue:a.value.maxLength,"onUpdate:modelValue":r[4]||(r[4]=g=>a.value.maxLength=g)},null,8,["modelValue"])]),_:1}),t(i,{label:"\u5728\u6B64\u5E03\u5C40\u533A\u57DF\u5F00\u5934\u653E\u7F6Ein"},{default:n(()=>[t(f,{modelValue:a.value.in,"onUpdate:modelValue":r[5]||(r[5]=g=>a.value.in=g),filterable:""},{default:n(()=>[(_(!0),S(U,null,q(o.parentRuleSet.layout,(g,b)=>(_(),y(c,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"\u5728\u6307\u5B9A\u8282\u62CD\u4F4D\u7F6E\u653E\u7F6E(0\u8D77\u8BA1\u6570)at"},{default:n(()=>[t(p,{modelValue:a.value.at,"onUpdate:modelValue":r[6]||(r[6]=g=>a.value.at=g)},null,8,["modelValue"])]),_:1}),t(i,{label:"\u7EA6\u675Fconstraints"},{default:n(()=>[a.value.constraints?(_(),y(V,{key:0,shadow:"never",style:{width:"100%"}},{default:n(()=>[t(D,{modelValue:a.value.constraints,"onUpdate:modelValue":r[7]||(r[7]=g=>a.value.constraints=g),"default-new-item-value":()=>({type:"Blank"}),"disable-scroll":!1,"retrieve-key":m(he)},{itemTitle:n(({item:g,key:b})=>[h(j(b)+" : "+j(g.type),1)]),default:n(({key:g})=>[t(se,{modelValue:a.value.constraints[g],"onUpdate:modelValue":b=>a.value.constraints[g]=b,mode:"constraint","parent-rule-set":o.parentRuleSet},null,8,["modelValue","onUpdate:modelValue","parent-rule-set"])]),_:1},8,["modelValue","retrieve-key"])]),_:1})):(_(),y(s,{key:1,onClick:r[8]||(r[8]=g=>a.value.constraints=[])},{default:n(()=>[h("\u521B\u5EFA")]),_:1}))]),_:1})],64)):R("",!0)}}}),Ll=A({__name:"UsageCountGroupConstraintView",props:K({parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue");return(a,o)=>{const u=d("ElInput"),r=d("ElFormItem");return e.value?(_(),y(r,{key:0,label:"\u540D\u79F0name",required:""},{default:n(()=>[t(u,{modelValue:e.value.name,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value.name=c)},null,8,["modelValue"])]),_:1})):R("",!0)}}}),Tl={style:{"margin-top":"4px",display:"flex","align-items":"center"}},jl=A({__name:"RejectPatternWithUsageCountConstraintView",props:K({parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue"),a=J(()=>e.value.value==="max"||e.value.value==="maxAutoBalance"||typeof e.value.value=="number");return(o,u)=>{const r=d("ElRadio"),c=d("ElRadioGroup"),f=d("ElFormItem"),s=d("ElInput"),i=d("ElOption"),p=d("ElSelect"),V=d("ElText"),g=d("ElButton");return e.value?(_(),S(U,{key:0},[t(f,{label:"\u5C42\u7EA7level",required:""},{default:n(()=>[t(c,{modelValue:e.value.level,"onUpdate:modelValue":u[0]||(u[0]=b=>e.value.level=b)},{default:n(()=>[t(r,{value:"batch"},{default:n(()=>[h("\u6279\u6B21batch")]),_:1}),t(r,{value:"piece"},{default:n(()=>[h("\u6761\u76EEpiece")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"\u8BA1\u6570\u7EC4\u540D\u79F0groupName",required:""},{default:n(()=>[t(s,{modelValue:e.value.groupName,"onUpdate:modelValue":u[1]||(u[1]=b=>e.value.groupName=b)},null,8,["modelValue"])]),_:1}),t(f,{label:"\u6BD4\u8F83\u8FD0\u7B97\u7B26comparator",required:""},{default:n(()=>[t(p,{modelValue:e.value.comparator,"onUpdate:modelValue":u[2]||(u[2]=b=>e.value.comparator=b)},{default:n(()=>[(_(),S(U,null,q(["<","<=","==",">=",">","!="],b=>t(i,{key:b,label:b,value:b},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"\u6BD4\u8F83\u503Cvalue",required:""},{default:n(()=>[t(s,{modelValue:e.value.value,"onUpdate:modelValue":u[3]||(u[3]=b=>e.value.value=b),modelModifiers:{number:!0}},null,8,["modelValue"]),E("div",Tl,[t(V,{size:"small"},{default:n(()=>[h("\u7279\u6B8A\u503C\uFF1A")]),_:1}),t(g,{size:"small",onClick:u[4]||(u[4]=b=>e.value.value="max")},{default:n(()=>[h("max")]),_:1}),t(g,{size:"small",onClick:u[5]||(u[5]=b=>e.value.value="maxAutoBalance")},{default:n(()=>[h("maxAutoBalance")]),_:1})]),be(t(V,{type:"danger"},{default:n(()=>[h("value\u503C\u65E0\u6548\uFF0C\u5E94\u4E3A\u6570\u5B57\u6216\u201Cmax\u201D\uFF0C\u201CmaxAutoBalance\u201D")]),_:1},512),[[ye,!a.value]])]),_:1})],64)):R("",!0)}}}),{allActions:Ol,allConstraints:Ml,optionsRegistry:ke}=function(){const l={Blank:{defaults:()=>({type:"Blank"}),view:{}},FillEachBlank:{defaults:()=>({type:"FillEachBlank",in:[],with:{type:"Blank"}}),view:Nl},ChooseARandomPosition:{defaults:()=>({type:"ChooseARandomPosition",in:[],length:1,do:{type:"Blank"}}),view:ql},RandomPick:{defaults:()=>({type:"RandomPick"}),view:Bl}},e={Blank:{defaults:()=>({type:"Blank"}),view:{}},UsageCountGroup:{defaults:()=>({type:"UsageCountGroup",name:""}),view:Ll},RejectPatternWithUsageCount:{defaults:()=>({type:"RejectPatternWithUsageCount",level:"piece",groupName:"",comparator:">=",value:"maxAutoBalance"}),view:jl}};return{allActions:Object.keys(l),allConstraints:Object.keys(e),optionsRegistry:{...l,...e}}}(),se=A({__name:"XObjEditor",props:K({mode:{},parentRuleSet:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=G(l,"modelValue"),a=J({get:()=>e.value.type,set:o=>{e.value={...ke[o].defaults(),[F]:e.value[F]}}});return(o,u)=>{const r=d("ElOption"),c=d("ElSelect"),f=d("ElFormItem");return _(),S(U,null,[t(f,{label:"\u7C7B\u578Btype",required:""},{default:n(()=>[t(c,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=s=>a.value=s),filterable:""},{default:n(()=>[(_(!0),S(U,null,q(o.mode==="action"?m(Ol):m(Ml),s=>(_(),y(r,{key:s,value:s},null,8,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.value.type!=="Blank"?(_(),y(Re(m(ke)[e.value.type].view),{key:0,modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=s=>e.value=s),"parent-rule-set":o.parentRuleSet},null,8,["modelValue","parent-rule-set"])):R("",!0)],64)}}}),Fl=A({__name:"RuleSetsPane",setup(l){const e=I();return(a,o)=>{const u=d("ElInput"),r=d("ElFormItem"),c=d("ElInputNumber"),f=d("ElCard");return _(),y(D,{modelValue:m(e).config.ruleSets,"onUpdate:modelValue":o[0]||(o[0]=s=>m(e).config.ruleSets=s),"default-new-item-value":()=>({timeSignature:"4/4",bpm:72,pieceLength:8,layout:{},actions:[]}),"dialog-title":"\u6DFB\u52A0\u89C4\u5219\u96C6","dialog-prompt":"\u8BF7\u4E3A\u89C4\u5219\u96C6\u8BBE\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u7528\u4E8E\u6307\u4EE3\u6B64\u89C4\u5219\u96C6\u3002","dialog-error-text":"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0E\u73B0\u6709\u89C4\u5219\u96C6\u91CD\u590D\u3002"},{default:n(({item:s,key:i})=>[t(r,{label:"\u62CD\u53F7timeSignature",required:""},{default:n(()=>[t(u,{modelValue:s.timeSignature,"onUpdate:modelValue":p=>s.timeSignature=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"\u901F\u5EA6bpm",required:""},{default:n(()=>[t(c,{modelValue:s.bpm,"onUpdate:modelValue":p=>s.bpm=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"\u6BCF\u6761\u957F\u5EA6pieceLength",required:""},{default:n(()=>[t(c,{modelValue:s.pieceLength,"onUpdate:modelValue":p=>s.pieceLength=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"\u5E03\u5C40layout",required:""},{default:n(()=>[t(f,{shadow:"never",style:{width:"100%"}},{default:n(()=>[t(D,{modelValue:m(e).config.ruleSets[i].layout,"onUpdate:modelValue":p=>m(e).config.ruleSets[i].layout=p,"default-new-item-value":()=>({start:0,end:s.pieceLength}),"dialog-title":"\u6DFB\u52A0\u5E03\u5C40\u533A\u57DF","dialog-prompt":"\u8BF7\u4E3A\u5E03\u5C40\u533A\u57DF\u8BBE\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u7528\u4E8E\u6307\u4EE3\u6B64\u5E03\u5C40\u533A\u57DF\u3002","dialog-error-text":"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0E\u73B0\u6709\u5E03\u5C40\u533A\u57DF\u91CD\u590D\u3002","disable-scroll":!1},{default:n(({item:p})=>[t(r,{label:"\u8D77\u70B9(\u542B)start",required:""},{default:n(()=>[t(c,{modelValue:p.start,"onUpdate:modelValue":V=>p.start=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(r,{label:"\u7EC8\u70B9(\u4E0D\u542B)end",required:""},{default:n(()=>[t(c,{modelValue:p.end,"onUpdate:modelValue":V=>p.end=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","default-new-item-value"])]),_:2},1024)]),_:2},1024),t(r,{label:"\u52A8\u4F5Cactions",required:""},{default:n(()=>[t(f,{shadow:"never",style:{width:"100%"}},{default:n(()=>[t(D,{modelValue:m(e).config.ruleSets[i].actions,"onUpdate:modelValue":p=>m(e).config.ruleSets[i].actions=p,"default-new-item-value":()=>({type:"Blank"}),"disable-scroll":!1,"retrieve-key":m(he)},{itemTitle:n(({item:p,key:V})=>[h(j(V)+" : "+j(p.type),1)]),default:n(({key:p})=>[t(se,{modelValue:m(e).config.ruleSets[i].actions[p],"onUpdate:modelValue":V=>m(e).config.ruleSets[i].actions[p]=V,mode:"action","parent-rule-set":m(e).config.ruleSets[i]},null,8,["modelValue","onUpdate:modelValue","parent-rule-set"])]),_:2},1032,["modelValue","onUpdate:modelValue","retrieve-key"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"])}}}),$l={style:{display:"flex","justify-content":"flex-end"}},Dl=A({__name:"BatchPresetsPane",setup(l){const e=I(),a=N(""),o=N(1);function u(s){e.config.batchPresets&&e.config.batchPresets[s].push({ruleSetName:a.value,amount:o.value})}function r(s,i){e.config.batchPresets&&e.config.batchPresets[s].splice(i,1)}function c(s,i){if(e.config.batchPresets){let p=e.config.batchPresets[s].splice(i,1);e.config.batchPresets[s].splice(i-1,0,...p)}}function f(s,i){if(e.config.batchPresets){let p=e.config.batchPresets[s].splice(i,1);e.config.batchPresets[s].splice(i+1,0,...p)}}return(s,i)=>{const p=d("ElOption"),V=d("ElSelect"),g=d("ElFormItem"),b=d("ElInputNumber"),x=d("ElButton"),Z=d("ElForm"),W=d("ElTableColumn"),z=d("ElIcon"),ee=d("ElTable");return m(e).config.batchPresets?(_(),y(D,{key:0,modelValue:m(e).config.batchPresets,"onUpdate:modelValue":i[2]||(i[2]=w=>m(e).config.batchPresets=w),"default-new-item-value":()=>[],"dialog-title":"\u6DFB\u52A0\u6279\u91CF\u751F\u6210\u9884\u8BBE","dialog-prompt":"\u8BF7\u4E3A\u6279\u91CF\u751F\u6210\u9884\u8BBE\u8BBE\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u7528\u4E8E\u6307\u4EE3\u6B64\u9884\u8BBE\u3002","dialog-error-text":"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0E\u73B0\u6709\u6279\u91CF\u751F\u6210\u9884\u8BBE\u91CD\u590D\u3002"},{default:n(({key:w})=>[t(Z,{inline:"",style:{display:"flex"}},{default:n(()=>[t(g,{style:{width:"calc((100% - 110px) * 0.5)"}},{default:n(()=>[t(V,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=P=>a.value=P),placeholder:"\u89C4\u5219\u96C6\u540D\u79F0ruleSetName",filterable:""},{default:n(()=>[(_(!0),S(U,null,q(Object.keys(m(e).config.ruleSets),P=>(_(),y(p,{key:P,label:P,value:P},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(g,null,{default:n(()=>[t(b,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=P=>o.value=P),placeholder:"\u6570\u91CFamount"},null,8,["modelValue"])]),_:1}),t(g,null,{default:n(()=>[t(x,{onClick:P=>u(w)},{default:n(()=>[h("\u6DFB\u52A0")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),t(ee,{data:m(e).config.batchPresets[w]},{default:n(()=>[t(W,{prop:"ruleSetName",label:"\u89C4\u5219\u96C6\u540D\u79F0ruleSetName"}),t(W,{prop:"amount",label:"\u6570\u91CFamount"}),t(W,{label:"\u64CD\u4F5C",width:"110px"},{default:n(P=>[E("div",$l,[P.$index>0?(_(),y(x,{key:0,link:"",class:"icon",onClick:Q(ce=>c(w,P.$index),["stop"])},{default:n(()=>[t(z,null,{default:n(()=>[t(m(xe))]),_:1})]),_:2},1032,["onClick"])):R("",!0),P.$index<m(e).config.batchPresets[w].length-1?(_(),y(x,{key:1,link:"",class:"icon",onClick:Q(ce=>f(w,P.$index),["stop"])},{default:n(()=>[t(z,null,{default:n(()=>[t(m(Pe))]),_:1})]),_:2},1032,["onClick"])):R("",!0),t(x,{link:"",onClick:Q(ce=>r(w,P.$index),["prevent"])},{default:n(()=>[t(z,null,{default:n(()=>[t(m(Ae))]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1032,["data"])]),_:1},8,["modelValue"])):(_(),y(x,{key:1,onClick:i[3]||(i[3]=w=>m(e).config.batchPresets={})},{default:n(()=>[h("\u521B\u5EFA")]),_:1}))}}}),Wl=me(Dl,[["__scopeId","data-v-6de72cc6"]]),zl=A({__name:"SettingsPane",setup(l){const e=I();return e.config.settings||(e.config.settings={autoSeed:!0}),pt(()=>{var a;return(a=e.config.settings)==null?void 0:a.autoSeed},a=>{a&&delete e.config.settings.fixedSeed}),(a,o)=>{const u=d("ElSwitch"),r=d("ElFormItem"),c=d("ElInput"),f=d("ElForm"),s=d("ElButton");return m(e).config.settings?(_(),y(f,{key:0,"label-position":"top"},{default:n(()=>[t(r,{label:"\u81EA\u52A8\u8BBE\u7F6E\u968F\u673A\u6570\u79CD\u5B50autoSeed"},{default:n(()=>[t(u,{modelValue:m(e).config.settings.autoSeed,"onUpdate:modelValue":o[0]||(o[0]=i=>m(e).config.settings.autoSeed=i)},null,8,["modelValue"])]),_:1}),be(t(r,{label:"\u56FA\u5B9A\u79CD\u5B50\u6570\u503CfixedSeed"},{default:n(()=>[t(c,{modelValue:m(e).config.settings.fixedSeed,"onUpdate:modelValue":o[1]||(o[1]=i=>m(e).config.settings.fixedSeed=i),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},512),[[ye,!m(e).config.settings.autoSeed]])]),_:1})):(_(),y(s,{key:1,onClick:o[2]||(o[2]=i=>m(e).config.settings={})},{default:n(()=>[h("\u521B\u5EFA")]),_:1}))}}}),Ee=A({__name:"EditorPage",setup(l){const e=I(),a=de();return(o,u)=>{const r=d("el-text"),c=d("ElTabPane"),f=d("ElTabs"),s=d("ElCol"),i=d("ElScrollbar"),p=d("ElRow");return _(),y(p,{class:"disable-scroll"},{default:n(()=>[t(s,{span:16,class:"disable-scroll"},{default:n(()=>[m(a).currentStep==="edit-err"?(_(),y(r,{key:0,type:"danger"},{default:n(()=>[h(" \u9519\u8BEF\uFF1A"+j(m(a).errorMsg),1)]),_:1})):R("",!0),t(f,{"tab-position":"left",class:"disable-scroll"},{default:n(()=>[t(c,{label:"\u8282\u594F\u578B\u5217\u8868patterns",class:"disable-scroll"},{default:n(()=>[t(Rl)]),_:1}),t(c,{label:"\u8282\u594F\u578B\u5206\u7C7Bcategories",class:"disable-scroll"},{default:n(()=>[t(Il)]),_:1}),t(c,{label:"\u89C4\u5219\u96C6ruleSets",class:"disable-scroll"},{default:n(()=>[t(Fl)]),_:1}),t(c,{label:"\u6279\u91CF\u751F\u6210\u9884\u8BBEbatchPresets",class:"disable-scroll"},{default:n(()=>[t(Wl)]),_:1}),t(c,{label:"\u751F\u6210\u5668\u8BBE\u7F6Esettings",class:"disable-scroll"},{default:n(()=>[t(zl)]),_:1})]),_:1})]),_:1}),t(s,{span:8,class:"disable-scroll"},{default:n(()=>[t(i,null,{default:n(()=>[E("code",null,[E("pre",null,j(m(ge).stringify(m(e).config)),1)])]),_:1})]),_:1})]),_:1})}}});function Kl(l,e){return l.map((a,o)=>{const u=e.ruleSets[a.ruleSetName];return`
X: ${o}
V: T1 name=${o+1} stem=up
K:  perc stafflines=1 middle=A
M: ${u.timeSignature}
L: 1/16
Q: ${u.bpm}
${a.beats.map((r,c)=>{const f=e.patterns[r.patternName];return(c%Gl(u.timeSignature).upper==0&&c>0?" | ":"")+(r.offset===0?f.displayAbc:"")}).join(" ")}|]
`}).join("")}function Gl(l){const e=l.split("/");return{upper:Number.parseInt(e[0]),lower:Number.parseInt(e[1])}}const Jl=A({__name:"AbcNotationRenderer",setup(l){const e=de(),a=I(),o=N(null);function u(){if(o.value){const r=e.generationResult.map(()=>document.createElement("div"));yt.renderAbc(r,Kl(e.generationResult,a.config)),o.value.replaceChildren(...r)}}return gt(()=>{bt(()=>{u()})}),(r,c)=>(_(),S("div",{ref_key:"abcContainer",ref:o},null,512))}}),Ql=A({__name:"ResultPage",setup(l){const e=de();return(a,o)=>{const u=d("el-text"),r=d("ElScrollbar");return _(),y(r,null,{default:n(()=>[m(e).currentStep==="exec-err"?(_(),y(u,{key:0,type:"danger"},{default:n(()=>[h(" \u9519\u8BEF\uFF1A"+j(m(e).errorMsg),1)]),_:1})):(_(),y(Jl,{key:1}))]),_:1})}}}),Y=l=>(Vt("data-v-5ac67947"),l=l(),wt(),l),Xl={style:{"margin-left":"50px","margin-right":"50px",flex:"1"}},Yl={style:{"margin-left":"auto"}},Hl=Y(()=>E("h1",null,"Rhythmologist",-1)),Zl=Y(()=>E("p",null,"Copyright \xA9 2024 Liu Chibing. All rights reserved.",-1)),et=Y(()=>E("h2",null,"\u9E23\u8C22",-1)),lt=Y(()=>E("p",null,"\u738B\u6654 \u6559\u6388",-1)),tt=Y(()=>E("h3",null,"\u5F00\u6E90\u4EE3\u7801",-1)),at=Y(()=>E("ul",null,[E("li",null,"Vue"),E("li",null,"Element Plus"),E("li",null,"TypeScript"),E("li",null,"Rust"),E("li",null,"Electron")],-1)),nt=A({__name:"App",setup(l){const e=de(),a=I(),o=J(()=>{switch(e.currentStep){case"editing":case"edit-err":return 1;case"running":case"exec-err":case"result":return 2;default:return 0}}),u=J(()=>{switch(e.currentStep){case"editing":return"process";case"edit-err":return"error";case"running":case"exec-err":case"result":return"success";default:return"wait"}}),r=J(()=>{switch(e.currentStep){case"editing":case"edit-err":return"wait";case"running":return"process";case"exec-err":return"error";case"result":return"success";default:return"wait"}}),c=J(()=>{switch(e.currentStep){case"editing":case"edit-err":return Ee;case"running":case"exec-err":case"result":return Ql;default:return Ee}}),f=N(!1);return(s,i)=>{const p=d("ElStep"),V=d("ElSteps"),g=d("ElOption"),b=d("ElSelect"),x=d("ElButton"),Z=d("ElHeader"),W=d("ElMain"),z=d("ElContainer"),ee=d("ElDialog");return _(),S(U,null,[t(z,{class:"disable-scroll"},{default:n(()=>[t(Z,null,{default:n(()=>[E("h1",{onClick:i[0]||(i[0]=w=>f.value=!0)},"Rhythmologist"),E("div",Xl,[t(V,{simple:"",active:o.value},{default:n(()=>[t(p,{title:"\u914D\u7F6E\u7F16\u8F91",status:u.value},null,8,["status"]),t(p,{title:"\u8FD0\u884C\u7ED3\u679C",status:r.value},null,8,["status"])]),_:1},8,["active"])]),E("div",Yl,[m(a).config.batchPresets?(_(),y(b,{key:0,modelValue:m(e).selectedPresetName,"onUpdate:modelValue":i[1]||(i[1]=w=>m(e).selectedPresetName=w),placeholder:"\u9009\u62E9\u751F\u6210\u9884\u8BBE",style:{width:"150px","margin-right":"12px"}},{default:n(()=>[(_(!0),S(U,null,q(Object.keys(m(a).config.batchPresets),w=>(_(),y(g,{key:w,label:w,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):R("",!0),t(x,{disabled:!m(a).config.batchPresets||!(m(e).selectedPresetName in m(a).config.batchPresets),onClick:i[2]||(i[2]=w=>m(e).run())},{default:n(()=>[h(" \u8FD0\u884C ")]),_:1},8,["disabled"]),R("",!0),o.value===1?(_(),S(U,{key:2},[t(x,{onClick:i[3]||(i[3]=w=>m(a).load())},{default:n(()=>[h("\u6253\u5F00")]),_:1}),t(x,{onClick:i[4]||(i[4]=w=>m(a).save())},{default:n(()=>[h("\u4FDD\u5B58")]),_:1})],64)):(_(),y(x,{key:3,onClick:i[5]||(i[5]=w=>m(e).edit())},{default:n(()=>[h("\u8FD4\u56DE\u7F16\u8F91")]),_:1}))])]),_:1}),t(W,{class:"disable-scroll"},{default:n(()=>[(_(),y(vt,null,[(_(),y(Re(c.value)))],1024))]),_:1})]),_:1}),t(ee,{modelValue:f.value,"onUpdate:modelValue":i[6]||(i[6]=w=>f.value=w),title:"\u5173\u4E8E",class:"about-dialog"},{default:n(()=>[Hl,Zl,et,lt,tt,at]),_:1},8,["modelValue"])],64)}}}),ot=me(nt,[["__scopeId","data-v-5ac67947"]]),_e=ht(ot);_e.use(kt()),_e.use(Et),_e.mount("#app")})});export default Ut();
