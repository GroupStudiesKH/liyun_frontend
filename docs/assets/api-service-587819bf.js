import{_ as Ne,a as et,r as tt,b as nt,c as q,d as M,f as m,e as ee,w as te,j as P,t as R,F as rt,g as st,q as Pe,s as Fe}from"./index-f6ff4a19.js";const ot="/assets/img/logo.png";const it={name:"Header",setup(){const{t:e,locale:t}=et(),n=tt([{lang:"eng",name:"English"},{lang:"zh_TW",name:"繁體中文"},{lang:"jp",name:"日本語"}]);return{t:e,locale:t,setLocale:s=>{t.value=s,localStorage.setItem("locale",s)},localeOptions:n}}},K=e=>(Pe("data-v-f85de4fa"),e=e(),Fe(),e),at={class:"navbar navbar-expand-lg navbar-light"},ct={class:"container"},lt=K(()=>m("a",{class:"navbar-brand",href:"/"},[m("img",{src:ot,alt:""})],-1)),ut=K(()=>m("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[m("span",{class:"navbar-toggler-icon"})],-1)),ft={class:"collapse navbar-collapse",id:"navbarNav"},dt={class:"navbar-nav ml-auto"},pt={class:"nav-item"},ht={class:"nav-item"},mt={class:"nav-link",href:"/product"},yt={class:"nav-item"},bt={class:"nav-item"},wt={class:"nav-item language_switch dropdown"},_t=K(()=>m("div",{class:"dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[m("span",{class:"material-icons"},""),m("span",null,"Language")],-1)),Et={class:"dropdown-menu"},gt=K(()=>m("li",null,[m("a",{class:"dropdown-item",href:"#"},[m("span",{class:"material-icons"},""),m("span",null,"Language")])],-1)),St=["onClick"];function Rt(e,t,n,r,s,o){const i=nt("router-link");return q(),M("header",at,[m("div",ct,[lt,ut,m("div",ft,[m("ul",dt,[m("li",pt,[ee(i,{class:"nav-link",to:{name:"company"}},{default:te(()=>[P(R(r.t("header.companyIntro")),1)]),_:1})]),m("li",ht,[m("a",mt,R(r.t("header.product")),1)]),m("li",yt,[ee(i,{class:"nav-link",to:{name:"applied"}},{default:te(()=>[P(R(r.t("header.applied")),1)]),_:1})]),m("li",bt,[ee(i,{class:"nav-link",to:"#"},{default:te(()=>[P(R(r.t("header.contact")),1)]),_:1})]),m("li",wt,[_t,m("ul",Et,[gt,(q(!0),M(rt,null,st(r.localeOptions,(c,p)=>(q(),M("li",{key:p},[m("a",{class:"dropdown-item",role:"button",onClick:h=>r.setLocale(c.lang)},R(c.name),9,St)]))),128))])])])])])])}const fr=Ne(it,[["render",Rt],["__scopeId","data-v-f85de4fa"]]),Ot="/assets/img/footer_logo.png",At="/assets/img/footer_iso.png";const Tt={name:"Footer",setup(){}},U=e=>(Pe("data-v-fbb1057c"),e=e(),Fe(),e),xt={class:"footer bg-dark text-light"},Ct={class:"container"},Nt={class:"row"},Pt=U(()=>m("div",{class:"col-lg-3 d-lg-block d-none"},[m("img",{src:Ot,class:"mt-4"})],-1)),Ft={class:"col-lg-4 col-md-6 company_info col-12"},kt={class:"h2"},Lt={class:"h5"},Bt={class:"address"},Ut=U(()=>m("span",{class:"material-icons"},"",-1)),Dt=U(()=>m("span",{class:"material-icons"},"",-1)),jt=U(()=>m("span",{class:"material-icons"},"",-1)),$t=U(()=>m("div",{class:"col-lg-5 copyright col-12"},[m("img",{src:At}),m("p",null,"Copyright © Li Yun Enterprise Co., Ltd All rights reserved.")],-1));function It(e,t,n,r,s,o){return q(),M("footer",xt,[m("div",Ct,[m("div",Nt,[Pt,m("div",Ft,[m("p",kt,R(e.$t("footer.company")),1),m("p",Lt,R(e.$t("footer.intro")),1),m("div",Bt,[m("p",null,R(e.$t("footer.address")),1),m("p",null,[Ut,P(R(e.$t("footer.email")),1)]),m("p",null,[Dt,P(R(e.$t("footer.phone")),1)]),m("p",null,[jt,P(R(e.$t("footer.fax")),1)])])]),$t])])])}const dr=Ne(Tt,[["render",It],["__scopeId","data-v-fbb1057c"]]);function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:vt}=Object.prototype,{getPrototypeOf:de}=Object,G=(e=>t=>{const n=vt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:k}=Array,B=X("undefined");function Ht(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=A("ArrayBuffer");function qt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const Mt=X("string"),S=X("function"),Be=X("number"),Q=e=>e!==null&&typeof e=="object",zt=e=>e===!0||e===!1,z=e=>{if(G(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Jt=A("Date"),Vt=A("File"),Wt=A("Blob"),Kt=A("FileList"),Gt=e=>Q(e)&&S(e.pipe),Xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=G(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},Qt=A("URLSearchParams"),Yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const De=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),je=e=>!B(e)&&e!==De;function ie(){const{caseless:e}=je(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;z(t[o])&&z(r)?t[o]=ie(t[o],r):z(r)?t[o]=ie({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Zt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&S(s)?e[o]=ke(s,n):e[o]=s},{allOwnKeys:r}),e),en=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),tn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},nn=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},rn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},sn=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},on=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),an=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},cn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ln=A("HTMLFormElement"),un=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),we=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fn=A("RegExp"),$e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},dn=e=>{$e(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},hn=()=>{},mn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ne="abcdefghijklmnopqrstuvwxyz",_e="0123456789",Ie={DIGIT:_e,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+_e},yn=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bn(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const wn=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return D(r,(i,c)=>{const p=n(i,s+1);!B(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},_n=A("AsyncFunction"),En=e=>e&&(Q(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:k,isArrayBuffer:Le,isBuffer:Ht,isFormData:Xt,isArrayBufferView:qt,isString:Mt,isNumber:Be,isBoolean:zt,isObject:Q,isPlainObject:z,isUndefined:B,isDate:Jt,isFile:Vt,isBlob:Wt,isRegExp:fn,isFunction:S,isStream:Gt,isURLSearchParams:Qt,isTypedArray:on,isFileList:Kt,forEach:D,merge:ie,extend:Zt,trim:Yt,stripBOM:en,inherits:tn,toFlatObject:nn,kindOf:G,kindOfTest:A,endsWith:rn,toArray:sn,forEachEntry:an,matchAll:cn,isHTMLForm:ln,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:$e,freezeMethods:dn,toObjectSet:pn,toCamelCase:un,noop:hn,toFiniteNumber:mn,findKey:Ue,global:De,isContextDefined:je,ALPHABET:Ie,generateString:yn,isSpecCompliantForm:bn,toJSONObject:wn,isAsyncFn:_n,isThenable:En};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=y.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{He[e]={value:e}});Object.defineProperties(y,He);Object.defineProperty(ve,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const gn=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(s,o){return s=qe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Sn(e){return a.isArray(e)&&!e.some(ae)}const Rn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Y(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,_){return!a.isUndefined(_[d])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,_){let E=f;if(f&&!_&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Sn(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(E=a.toArray(f)))return d=qe(d),E.forEach(function(C,Ze){!(a.isUndefined(C)||C===null)&&t.append(i===!0?Ee([d],Ze,o):i===null?d:d+"[]",h(C))}),!1}return ae(f)?!0:(t.append(Ee(_,d,o),h(f)),!1)}const l=[],w=Object.assign(Rn,{defaultVisitor:u,convertValue:h,isVisitable:ae});function g(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(E,x){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(x)?x.trim():x,d,w))===!0&&g(E,d?d.concat(x):[x])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Y(e,this,t)}const Me=pe.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,ge)}:ge;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function On(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||On,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class An{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Se=An,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tn=typeof URLSearchParams<"u"?URLSearchParams:pe,xn=typeof FormData<"u"?FormData:null,Cn=typeof Blob<"u"?Blob:null,Nn={isBrowser:!0,classes:{URLSearchParams:Tn,FormData:xn,Blob:Cn},protocols:["http","https","file","blob","url","data"]},Ve=typeof window<"u"&&typeof document<"u",Pn=(e=>Ve&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Fn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),kn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ve,hasStandardBrowserEnv:Pn,hasStandardBrowserWebWorkerEnv:Fn},Symbol.toStringTag,{value:"Module"})),O={...kn,...Nn};function Ln(e,t){return Y(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Un(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function We(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Un(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Bn(r),s,n,0)}),n}return null}function Dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const he={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ln(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Y(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Dn(t)):t}],transformResponse:[function(t){const n=this.transitional||he.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{he.headers[e]={}});const me=he,jn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$n=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&jn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function In(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Hn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const u=L(p);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||p]=J(c))}const i=(c,p)=>a.forEach(c,(h,u)=>o(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!vn(t)?i($n(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return In(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const c=a.findKey(r,i);c&&(!n||re(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?Hn(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=L(i);r[c]||(qn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Z);const T=Z;function se(e,t){const n=this||me,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,y,{__CANCEL__:!0});function Mn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!Jn(t)?Vn(e,t):t}const Wn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Kn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=r[o];i||(i=h),n[s]=p,r[s]=h;let l=o,w=0;for(;l!==s;)w+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const g=u&&h-u;return g?Math.round(w*1e3/g):void 0}}function Oe(e,t){let n=0;const r=Gn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Xn=typeof XMLHttpRequest<"u",Qn=Xn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,..._]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",..._].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+_))}const w=Ge(e.baseURL,e.url);l.open(e.method.toUpperCase(),ze(w,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function g(){if(!l)return;const d=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};Mn(function(C){n(C),h()},function(C){r(C),h()},E),l=null}if("onloadend"in l?l.onloadend=g:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(g)},l.onabort=function(){l&&(r(new y("Request aborted",y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Je;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),r(new y(_,E.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,l)),l=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Wn(w))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&zn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(_,E){l.setRequestHeader(E,_)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{l&&(r(!d||d.type?new j(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=Kn(w);if(f&&O.protocols.indexOf(f)===-1){r(new y("Unsupported protocol "+f+":",y.ERR_BAD_REQUEST,e));return}l.send(s||null)})},ce={http:gn,xhr:Qn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,Yn=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Yn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Te(e){return oe(e),e.headers=T.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||me.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ke(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof T?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(h,u,l){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:l},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,l){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,l)}else return r(h,u,l)}function o(h,u){if(!a.isUndefined(u))return r(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function c(h,u,l){if(l in t)return r(h,u);if(l in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,u)=>s(xe(h),xe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=p[u]||s,w=l(e[u],t[u],u);a.isUndefined(w)&&l!==c||(n[u]=w)}),n}const Qe="1.6.7",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};ye.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ce[i]&&(Ce[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Zn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const le={assertOptions:Zn,validators:ye},N=le.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let u,l=0,w;if(!p){const f=[Te.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),w=f.length,u=Promise.resolve(n);l<w;)u=u.then(f[l++],f[l++]);return u}w=c.length;let g=n;for(l=0;l<w;){const f=c[l++],d=c[l++];try{g=f(g)}catch(_){d.call(this,_);break}}try{u=Te.call(this,g)}catch(f){return Promise.reject(f)}for(l=0,w=h.length;l<w;)u=u.then(h[l++],h[l++]);return u}getUri(t){t=F(this.defaults,t);const n=Ge(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const V=W;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new j(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}const er=be;function tr(e){return function(n){return e.apply(null,n)}}function nr(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});const rr=ue;function Ye(e){const t=new V(e),n=ke(V.prototype.request,t);return a.extend(n,V.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(F(e,s))},n}const b=Ye(me);b.Axios=V;b.CanceledError=j;b.CancelToken=er;b.isCancel=Ke;b.VERSION=Qe;b.toFormData=Y;b.AxiosError=y;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=tr;b.isAxiosError=nr;b.mergeConfig=F;b.AxiosHeaders=T;b.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Xe.getAdapter;b.HttpStatusCode=rr;b.default=b;const $=b;let I="https://admin.liyun.hanyuan.info/api/",fe=new Date;fe.setTime(fe.getTime()+7*24*60*60*1e3);""+fe.toGMTString();const v=e=>({url:e,method:"GET",headers:{"Cache-Control":"no-cache","Content-type":"application/json"}}),H=e=>{if(e.data.status!="success"||e.status!=200)throw e.data.message;return e.data.content},sr=e=>{const t=[];for(const n in e)if(e.hasOwnProperty(n)){const r=e[n],s=encodeURIComponent(n),o=encodeURIComponent(r);t.push(`${s}=${o}`)}return t.join("&")},or=async e=>{const t=v(`${I}products?${sr(e)}`);try{const n=await $(t);return H(n)}catch(n){throw n}},ir=async()=>{const e=v(`${I}home-banner`);try{const t=await $(e);return H(t)}catch(t){throw t}},ar=async e=>{const t=v(`${I}products/${e}`);try{const n=await $(t);return H(n)}catch(n){throw n}},cr=async()=>{const e=v(`${I}category/list`);try{const t=await $(e);return H(t)}catch(t){throw t}},lr=async e=>{const t=v(`${I}category/path/${e}`);try{const n=await $(t);return H(n)}catch(n){throw n}},pr={getProducts:or,getProduct:ar,getAllCategory:cr,getCategoryPath:lr,getBanner:ir};export{dr as F,fr as H,pr as a};