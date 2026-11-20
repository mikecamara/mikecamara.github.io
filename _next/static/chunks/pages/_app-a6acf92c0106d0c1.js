(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5351:function(e,t,r){"use strict";let n,a,i,s,o,l;r.r(t),r.d(t,{default:function(){return t6}});var c,u,h,f,d,p=r(4805);r(5348),r(9614),r(1312),r(6388);var g=r(959),m=r(1390),b=r(1450),w=r(3119),y=r.n(w);/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v=()=>void 0;var I=r(9931);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):(64512&a)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},E=function(e){let t=[],r=0,n=0;for(;r<e.length;){let a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=e[r++],s=e[r++],o=e[r++],l=((7&a)<<18|(63&i)<<12|(63&s)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let i=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=a>>2,u=(3&a)<<4|s>>4,h=(15&s)<<2|l>>6,f=63&l;o||(f=64,i||(h=64)),n.push(r[c],r[u],r[h],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let a=r[e.charAt(t++)],i=t<e.length,s=i?r[e.charAt(t)]:0;++t;let o=t<e.length,l=o?r[e.charAt(t)]:64;++t;let c=t<e.length,u=c?r[e.charAt(t)]:64;if(++t,null==a||null==s||null==l||null==u)throw new D;let h=a<<2|s>>4;if(n.push(h),64!==l){let e=s<<4&240|l>>2;if(n.push(e),64!==u){let e=l<<6&192|u;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let C=function(e){let t=_(e);return S.encodeByteArray(t,!0)},T=function(e){return C(e).replace(/\./g,"")},A=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},O=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,k=()=>{if(void 0===I||void 0===I.env)return;let e=I.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},L=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&A(e[1]);return t&&JSON.parse(t)},P=()=>{try{return v()||O()||k()||L()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},B=()=>P()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}function $(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function j(){try{return"object"==typeof indexedDB}catch(e){return!1}}function x(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(e){t(e)}})}function N(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class F extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(H,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${n}).`,o=new F(n,s,r);return o}}let H=/\{\$([^}]+)}/g;function z(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let a of r){if(!n.includes(a))return!1;let r=e[a],i=t[a];if(V(r)&&V(i)){if(!z(r,i))return!1}else if(r!==i)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function V(e){return null!==e&&"object"==typeof e}function U(e,t=1e3,r=2){let n=t*Math.pow(r,e);return Math.min(144e5,n+Math.round(.5*n*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return e&&e._delegate?e._delegate:e}class q{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new M;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:G})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(e);r===a&&t.resolve(n)}return n}onInit(e,t){let r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);let a=this.instances.get(r);return a&&e(a,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===G?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new K(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z=[];(u=d||(d={}))[u.DEBUG=0]="DEBUG",u[u.VERBOSE=1]="VERBOSE",u[u.INFO=2]="INFO",u[u.WARN=3]="WARN",u[u.ERROR=4]="ERROR",u[u.SILENT=5]="SILENT";let X={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Q=d.INFO,Y={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},ee=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),a=Y[t];if(a)console[a](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class et{constructor(e){this.name=e,this._logLevel=Q,this._logHandler=ee,this._userLogHandler=null,Z.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?X[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}let er=(e,t)=>t.some(t=>e instanceof t),en=new WeakMap,ea=new WeakMap,ei=new WeakMap,es=new WeakMap,eo=new WeakMap,el={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return ea.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ei.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ec(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ec(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(ec(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&en.set(t,e)}).catch(()=>{}),eo.set(t,e),t}(e);if(es.has(e))return es.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eu(this),e),ec(en.get(this))}:function(...e){return ec(t.apply(eu(this),e))}:function(e,...r){let n=t.call(eu(this),e,...r);return ei.set(n,e.sort?e.sort():[e]),ec(n)}:(t instanceof IDBTransaction&&function(e){if(ea.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});ea.set(e,t)}(t),er(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,el):t;return r!==e&&(es.set(e,r),eo.set(r,e)),r}let eu=e=>eo.get(e);function eh(e,t,{blocked:r,upgrade:n,blocking:a,terminated:i}={}){let s=indexedDB.open(e,t),o=ec(s);return n&&s.addEventListener("upgradeneeded",e=>{n(ec(s.result),e.oldVersion,e.newVersion,ec(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let ef=["get","getKey","getAll","getAllKeys","count"],ed=["put","add","delete","clear"],ep=new Map;function eg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ep.get(t))return ep.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,a=ed.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(a||ef.includes(r)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),s=i.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),a&&i.done]))[0]};return ep.set(t,i),i}el={...c=el,get:(e,t,r)=>eg(e,t)||c.get(e,t,r),has:(e,t)=>!!eg(e,t)||c.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return t?.type==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eb="@firebase/app",ew="0.14.8",ey=new et("@firebase/app"),ev="[DEFAULT]",eI={[eb]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e_=new Map,eE=new Map,eS=new Map;function eD(e,t){try{e.container.addComponent(t)}catch(r){ey.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eC(e){let t=e.name;if(eS.has(t))return ey.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eS.set(t,e),e_.values()))eD(r,e);for(let t of eE.values())eD(t,e);return!0}function eT(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let eA=new R("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eA.create("app-deleted",{appName:this._name})}}function ek(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n={name:ev,automaticDataCollectionEnabled:!0,...t},a=n.name;if("string"!=typeof a||!a)throw eA.create("bad-app-name",{appName:String(a)});if(r||(r=B()),!r)throw eA.create("no-options");let i=e_.get(a);if(i){if(z(r,i.options)&&z(n,i.config))return i;throw eA.create("duplicate-app",{appName:a})}let s=new J(a);for(let e of eS.values())s.addComponent(e);let o=new eO(r,n,s);return e_.set(a,o),o}function eL(e=ev){let t=e_.get(e);if(!t&&e===ev&&B())return ek();if(!t)throw eA.create("no-app",{appName:e});return t}function eP(e,t,r){let n=eI[e]??e;r&&(n+=`-${r}`);let a=n.match(/\s|\//),i=t.match(/\s|\//);if(a||i){let e=[`Unable to register library "${n}" with version "${t}":`];a&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ey.warn(e.join(" "));return}eC(new q(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}let eB="firebase-heartbeat-store",eM=null;function e$(){return eM||(eM=eh("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eB)}catch(e){console.warn(e)}}}).catch(e=>{throw eA.create("idb-open",{originalErrorMessage:e.message})})),eM}async function ej(e){try{let t=await e$(),r=t.transaction(eB),n=await r.objectStore(eB).get(eN(e));return await r.done,n}catch(e){if(e instanceof F)ey.warn(e.message);else{let t=eA.create("idb-get",{originalErrorMessage:e?.message});ey.warn(t.message)}}}async function ex(e,t){try{let r=await e$(),n=r.transaction(eB,"readwrite"),a=n.objectStore(eB);await a.put(t,eN(e)),await n.done}catch(e){if(e instanceof F)ey.warn(e.message);else{let t=eA.create("idb-set",{originalErrorMessage:e?.message});ey.warn(t.message)}}}function eN(e){return`${e.name}!${e.options.appId}`}class eF{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eH(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=eR();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ey.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||0===this._heartbeatsCache.heartbeats.length)return"";let e=eR(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let a of e){let e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),ez(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),ez(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=T(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return ey.warn(e),""}}}function eR(){let e=new Date;return e.toISOString().substring(0,10)}class eH{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!j()&&x().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await ej(this.app);return e?.heartbeats?e:{heartbeats:[]}}}async overwrite(e){let t=await this._canUseIndexedDBPromise;if(t){let t=await this.read();return ex(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){let t=await this._canUseIndexedDBPromise;if(t){let t=await this.read();return ex(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ez(e){return T(JSON.stringify({version:2,heartbeats:e})).length}eC(new q("platform-logger",e=>new em(e),"PRIVATE")),eC(new q("heartbeat",e=>new eF(e),"PRIVATE")),eP(eb,ew,""),eP(eb,ew,"esm2020"),eP("fire-js","");let eV="@firebase/installations",eU="0.6.19",eW=`w:${eU}`,eq="FIS_v2",eG=new R("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eK(e){return e instanceof F&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eJ({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function eZ(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function eX(e,t){let r=await t.json(),n=r.error;return eG.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function eQ({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function eY(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=eJ(e),a=eQ(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={fid:r,authVersion:eq,appId:e.appId,sdkVersion:eW},o={method:"POST",headers:a,body:JSON.stringify(s)},l=await eY(()=>fetch(n,o));if(l.ok){let e=await l.json(),t={fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:eZ(e.authToken)};return t}throw await eX("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e2=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e6(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e3=new Map;function e4(e,t){let r=e6(e);e5(r,t),function(e,t){let r=(!e8&&"BroadcastChannel"in self&&((e8=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{e5(e.data.key,e.data.fid)}),e8);r&&r.postMessage({key:e,fid:t}),0===e3.size&&e8&&(e8.close(),e8=null)}(r,t)}function e5(e,t){let r=e3.get(e);if(r)for(let e of r)e(t)}let e8=null,e9="firebase-installations-store",e7=null;function te(){return e7||(e7=eh("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(e9)}})),e7}async function tt(e,t){let r=e6(e),n=await te(),a=n.transaction(e9,"readwrite"),i=a.objectStore(e9),s=await i.get(r);return await i.put(t,r),await a.done,s&&s.fid===t.fid||e4(e,t.fid),t}async function tr(e){let t=e6(e),r=await te(),n=r.transaction(e9,"readwrite");await n.objectStore(e9).delete(t),await n.done}async function tn(e,t){let r=e6(e),n=await te(),a=n.transaction(e9,"readwrite"),i=a.objectStore(e9),s=await i.get(r),o=t(s);return void 0===o?await i.delete(r):await i.put(o,r),await a.done,o&&(!s||s.fid!==o.fid)&&e4(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(e){let t;let r=await tn(e.appConfig,r=>{let n=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let r=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return e2.test(r)?r:""}catch{return""}}(),registrationStatus:0};return tl(t)}(r),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(eG.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=ti(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ts(e)}:{installationEntry:t}}(e,n);return t=a.registrationPromise,a.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function ti(e,t){try{let r=await e0(e,t);return tt(e.appConfig,r)}catch(r){throw eK(r)&&409===r.customData.serverCode?await tr(e.appConfig):await tt(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function ts(e){let t=await to(e.appConfig);for(;1===t.registrationStatus;)await e1(100),t=await to(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await ta(e);return r||t}return t}function to(e){return tn(e,e=>{if(!e)throw eG.create("installation-not-found");return tl(e)})}function tl(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${eJ(e)}/${t}/authTokens:generate`}(e,r),a=function(e,{refreshToken:t}){let r=eQ(e);return r.append("Authorization",`${eq} ${t}`),r}(e,r),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={installation:{sdkVersion:eW,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},l=await eY(()=>fetch(n,o));if(l.ok){let e=await l.json(),t=eZ(e);return t}throw await eX("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e,t=!1){let r;let n=await tn(e.appConfig,n=>{var a;if(!tp(n))throw eG.create("not-registered");let i=n.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return n;if(1===i.requestStatus)return r=th(e,t),n;{if(!navigator.onLine)throw eG.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(n);return r=td(e,t),t}}),a=r?await r:n.authToken;return a}async function th(e,t){let r=await tf(e.appConfig);for(;1===r.authToken.requestStatus;)await e1(100),r=await tf(e.appConfig);let n=r.authToken;return 0===n.requestStatus?tu(e,t):n}function tf(e){return tn(e,e=>{if(!tp(e))throw eG.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?{...e,authToken:{requestStatus:0}}:e})}async function td(e,t){try{let r=await tc(e,t),n={...t,authToken:r};return await tt(e.appConfig,n),r}catch(r){if(eK(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await tr(e.appConfig);else{let r={...t,authToken:{requestStatus:0}};await tt(e.appConfig,r)}throw r}}function tp(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(e){let{installationEntry:t,registrationPromise:r}=await ta(e);return r?r.catch(console.error):tu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(e,t=!1){await tb(e);let r=await tu(e,t);return r.token}async function tb(e){let{registrationPromise:t}=await ta(e);t&&await t}function tw(e){return eG.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty="installations",tv=e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tw("App Configuration");if(!e.name)throw tw("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tw(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=eT(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},tI=e=>{let t=e.getProvider("app").getImmediate(),r=eT(t,ty).getImmediate();return{getId:()=>tg(r),getToken:e=>tm(r,e)}};eC(new q(ty,tv,"PUBLIC")),eC(new q("installations-internal",tI,"PRIVATE")),eP(eV,eU),eP(eV,eU,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_="analytics",tE="https://www.googletagmanager.com/gtag/js",tS=new et("@firebase/analytics"),tD=new R("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(e){if(!e.startsWith(tE)){let t=tD.create("invalid-gtag-resource",{gtagURL:e});return tS.warn(t.message),""}return e}function tT(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function tA(e,t,r,n,a,i){let s=n[a];try{if(s)await t[s];else{let e=await tT(r),n=e.find(e=>e.measurementId===a);n&&await t[n.appId]}}catch(e){tS.error(e)}e("config",a,i)}async function tO(e,t,r,n,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);let n=await tT(r);for(let r of e){let e=n.find(e=>e.measurementId===r),a=e&&t[e.appId];if(a)i.push(a);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",n,a||{})}catch(e){tS.error(e)}}let tk=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function tL(e){let{appId:t,apiKey:r}=e,n={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),i=await fetch(a,n);if(200!==i.status&&304!==i.status){let e="";try{let t=await i.json();t.error?.message&&(e=t.error.message)}catch(e){}throw tD.create("config-fetch-failed",{httpStatus:i.status,responseMessage:e})}return i.json()}async function tP(e,t=tk,r){let{appId:n,apiKey:a,measurementId:i}=e.options;if(!n)throw tD.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:n};throw tD.create("no-api-key")}let s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tM;return setTimeout(async()=>{o.abort()},void 0!==r?r:6e4),tB({appId:n,apiKey:a,measurementId:i},s,o,t)}async function tB(e,{throttleEndTimeMillis:t,backoffCount:r},n,a=tk){let{appId:i,measurementId:s}=e;try{await new Promise((e,r)=>{let a=Math.max(t-Date.now(),0),i=setTimeout(e,a);n.addEventListener(()=>{clearTimeout(i),r(tD.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(s)return tS.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:i,measurementId:s};throw e}try{let t=await tL(e);return a.deleteThrottleMetadata(i),t}catch(l){if(!function(e){if(!(e instanceof F)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(a.deleteThrottleMetadata(i),s)return tS.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:s};throw l}let t=503===Number(l?.customData?.httpStatus)?U(r,a.intervalMillis,30):U(r,a.intervalMillis),o={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return a.setThrottleMetadata(i,o),tS.debug(`Calling attemptFetch again in ${t} millis`),tB(e,o,n,a)}}class tM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function t$(e,t,r,n,a){if(a&&a.global){e("event",r,n);return}{let a=await t,i={...n,send_to:a};e("event",r,i)}}async function tj(e,t,r,n){if(n&&n.global){let t={};for(let e of Object.keys(r))t[`user_properties.${e}`]=r[e];return e("set",t),Promise.resolve()}{let n=await t;e("config",n,{update:!0,user_properties:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(){if(!j())return tS.warn(tD.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await x()}catch(e){return tS.warn(tD.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}async function tN(e,t,r,n,a,o,l){let c=tP(e);c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tS.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tS.error(e)),t.push(c);let u=tx().then(e=>e?n.getId():void 0),[h,f]=await Promise.all([c,u]);!function(e){let t=window.document.getElementsByTagName("script");for(let r of Object.values(t))if(r.src&&r.src.includes(tE)&&r.src.includes(e))return r;return null}(o)&&function(e,t){let r;let n=(window.trustedTypes&&(r=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:tC})),r),a=document.createElement("script"),i=`${tE}?l=${e}&id=${t}`;a.src=n?n?.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}(o,h.measurementId),s&&(a("consent","default",s),s=void 0),a("js",new Date);let d=l?.config??{};return d.origin="firebase",d.update=!0,null!=f&&(d.firebase_id=f),a("config",h.measurementId,d),i&&(a("set",i),i=void 0),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.app=e}_delete(){return delete tR[this.app.options.appId],Promise.resolve()}}let tR={},tH=[],tz={},tV="dataLayer",tU=!1;async function tW(){if($()||!N()||!j())return!1;try{let e=await x();return e}catch(e){return!1}}function tq(e,t,r,n){t$(l,tR[(e=W(e)).app.options.appId],t,r,n).catch(e=>tS.error(e))}let tG="@firebase/analytics",tK="0.10.19";eC(new q(t_,(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return function(e,t,r){!function(){let e=[];if($()&&e.push("This is a browser extension environment."),N()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=tD.create("invalid-analytics-context",{errorInfo:t});tS.warn(r.message)}}();let n=e.options.appId;if(!n)throw tD.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tS.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tD.create("no-api-key")}if(null!=tR[n])throw tD.create("already-exists",{id:n});if(!tU){var a,i;let e,t;e=[],Array.isArray(window[tV])?e=window[tV]:window[tV]=e;let{wrappedGtag:r,gtagCore:n}=(a="gtag",t=function(...e){window[tV].push(arguments)},window[a]&&"function"==typeof window[a]&&(t=window[a]),window[a]=(i=t,async function(e,...t){try{if("event"===e){let[e,r]=t;await tO(i,tR,tH,e,r)}else if("config"===e){let[e,r]=t;await tA(i,tR,tH,tz,e,r)}else if("consent"===e){let[e,r]=t;i("consent",e,r)}else if("get"===e){let[e,r,n]=t;i("get",e,r,n)}else if("set"===e){let[e]=t;i("set",e)}else i(e,...t)}catch(e){tS.error(e)}}),{gtagCore:t,wrappedGtag:window[a]});l=r,o=n,tU=!0}tR[n]=tN(e,tH,tz,t,o,tV,r);let s=new tF(e);return s}(r,n,t)},"PUBLIC")),eC(new q("analytics-internal",function(e){try{let t=e.getProvider(t_).getImmediate();return{logEvent:(e,r,n)=>tq(t,e,r,n),setUserProperties:(e,r)=>(function(e,t,r){tj(l,tR[(e=W(e)).app.options.appId],t,r).catch(e=>tS.error(e))})(t,e,r)}}catch(e){throw tD.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),eP(tG,tK),eP(tG,tK,"esm2020"),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eP("firebase","12.9.0","app");var tJ=Array.from(e_.values()).length?eL():ek({apiKey:"AIzaSyDv1CvvQ6t89UedLLk396gfOqlKnGgQvzY",authDomain:"mikecamaraxyz-62913.firebaseapp.com",projectId:"mikecamaraxyz-62913",storageBucket:"mikecamaraxyz-62913.firebasestorage.app",messagingSenderId:"571813502181",appId:"1:571813502181:web:0bc391c48e4f0e7ac8480c",measurementId:"G-H6LG1M1FVG"}),tZ=null,tX=!1,tQ=(h=(0,b.Z)(y().mark(function e(){return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:if(!tZ){e.next=4;break}return e.abrupt("return",tZ);case 4:if(!tX){e.next=6;break}return e.abrupt("return",null);case 6:return tX=!0,e.prev=7,e.next=10,tW();case 10:if(e.sent){e.next=13;break}return e.abrupt("return",null);case 13:return tZ=function(e=eL()){e=W(e);let t=eT(e,t_);return t.isInitialized()?t.getImmediate():function(e,t={}){let r=eT(e,t_);if(r.isInitialized()){let e=r.getImmediate();if(z(t,r.getOptions()))return e;throw tD.create("already-initialized")}let n=r.initialize({options:t});return n}(e)}(tJ),e.abrupt("return",tZ);case 17:return e.prev=17,e.t0=e.catch(7),console.error("Analytics init failed:",e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}},e,null,[[7,17]])})),function(){return h.apply(this,arguments)}),tY=(f=(0,b.Z)(y().mark(function e(t,r){var n;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,tQ();case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:r?tq(n,t,r):tq(n,t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Analytics event failed (".concat(t,"):"),e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(e,t){return f.apply(this,arguments)});function t0(){var e=(0,m.useRouter)();return(0,g.useEffect)(function(){tQ().catch(function(e){console.error("Firebase Analytics init failed:",e)})},[]),(0,g.useEffect)(function(){e.isReady&&tY("page_view",{page_path:e.asPath})},[e.asPath,e.isReady]),null}var t1=r(1527);function t2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t6(e){var t=e.Component,r=e.pageProps;return(0,t1.jsxs)(t1.Fragment,{children:[(0,t1.jsx)(t0,{}),(0,t1.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?t2(Object(r),!0).forEach(function(t){(0,p.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t2(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r))]})}},9931:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(8065)},2188:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5351)}])},6388:function(){},5348:function(){},1312:function(){},9614:function(){},8065:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],c=!1,u=-1;function h(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=o(h);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||c||o(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var a=n(229);e.exports=a}()},1390:function(e,t,r){e.exports=r(6614)},1450:function(e,t,r){"use strict";function n(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var s=e.apply(t,r);function o(e){n(s,a,i,o,l,"next",e)}function l(e){n(s,a,i,o,l,"throw",e)}o(void 0)})}}r.d(t,{Z:function(){return a}})},4805:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(2188),t(6614)}),_N_E=e.O()}]);