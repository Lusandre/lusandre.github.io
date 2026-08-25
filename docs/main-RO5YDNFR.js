import{$ as Ce,$a as _n,A as we,Aa as Ma,Ab as z,B as pa,Ba as Ra,Bb as Na,C as Qe,Ca as Aa,Cb as Ae,D as Je,Da as Ta,Db as Bt,E as zr,Ea as R,Eb as Yr,F as ma,Fa as Pt,Fb as Ua,G as fa,Ga as xa,Gb as ja,H as ga,Ha as yi,Hb as bt,I as Tt,Ia as Hr,Ib as Ba,J as X,Ja as tt,Jb as re,K as le,Ka as _i,Kb as Cn,L as V,La as Fa,Lb as za,M as D,Ma as Di,N as fn,Na as Oa,O as h,Oa as Vr,P as G,Pa as I,Q as va,Qa as q,R as f,Ra as H,S as v,Sa as wi,T as l,Ta as Lt,U as ft,Ua as Gr,V as ba,Va as Ci,W as ge,Wa as Wr,X as ae,Xa as ka,Y as de,Ya as bn,Z as J,Za as Re,_ as S,_a as yn,a as p,aa as ya,ab as Ei,b as $,ba as ve,bb as Nt,c as ca,ca as W,cb as Ut,d as Br,da as gt,db as Dn,e as At,ea as fi,eb as y,f as la,fa as P,fb as w,g as ht,ga as _a,gb as Y,h as O,ha as $r,hb as Ne,i as oe,ia as xt,ib as Ue,j as ie,ja as gi,jb as jt,k as fe,ka as Me,kb as Pa,l as g,la as ee,lb as vt,m as pi,ma as gn,mb as qr,n as Le,na as Da,nb as se,o as da,oa as vn,ob as U,p as T,pa as wa,pb as wn,q as ua,qa as et,qb as La,r as Ze,ra as vi,rb as ue,s as pn,sa as Ft,sb as he,t as pt,ta as bi,tb as te,u as mi,ua as Ot,ub as nt,v as Xe,va as kt,vb as A,w as ce,wa as Ca,wb as j,x as mn,xa as Ea,xb as it,y as mt,ya as Ia,yb as Kr,z as ha,za as Sa,zb as B}from"./chunk-TPUDRZNV.js";var $a=null;function je(){return $a}function Zr(n){$a??=n}var En=class{},zt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(Ha),providedIn:"platform"})}return n})();var Ha=(()=>{class n extends zt{_location;_history;_doc=l(S);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return je().getBaseHref(this._doc)}onPopState(e){let t=je().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=je().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Wa(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function Va(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function rt(n){return n&&n[0]!=="?"?`?${n}`:n}var Ii=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(ml),providedIn:"root"})}return n})(),pl=new f(""),ml=(()=>{class n extends Ii{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(S).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Wa(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+rt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+rt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+rt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(v(zt),v(pl,8))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $t=(()=>{class n{_subject=new O;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=vl(Va(Ga(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+rt(t))}normalize(e){return n.stripTrailingSlash(gl(this._basePath,Ga(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+rt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+rt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=rt;static joinWithSlash=Wa;static stripTrailingSlash=Va;static \u0275fac=function(t){return new(t||n)(v(Ii))};static \u0275prov=h({token:n,factory:()=>fl(),providedIn:"root"})}return n})();function fl(){return new $t(v(Ii))}function gl(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ga(n){return n.replace(/\/index\.html$/,"")}function vl(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function yl(n,i){return new D(2100,!1)}var Xr=(()=>{class n{transform(e){return e==null?null:(_l(n,e),e.toUpperCase())}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=wi({name:"uppercase",type:n,pure:!0})}return n})();function _l(n,i){if(typeof i!="string")throw yl(n,i)}var Te=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();function In(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var yt=class{};var Qr="browser";function Si(n){return n===Qr}var Sn=class{_doc;constructor(i){this._doc=i}manager},Mi=(()=>{class n extends Sn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(v(S))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Ti=new f(""),no=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Mi));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Mi);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new D(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(v(Ti),v(W))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Jr="ng-app-id";function qa(n){for(let i of n)i.remove()}function Ka(n,i){let e=i.createElement("style");return e.textContent=n,e}function wl(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Jr}="${i}"],link[${Jr}="${i}"]`);if(r)for(let o of r)o.removeAttribute(Jr),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function to(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var io=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,wl(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Ka);t?.forEach(r=>this.addUsage(r,this.external,to))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(qa(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])qa(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Ka(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,to(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(v(S),v(vn),v(Ft,8),v(et))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),eo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ro=/%COMP%/g;var Za="%COMP%",Cl=`_nghost-${Za}`,El=`_ngcontent-${Za}`,Il=!0,Sl=new f("",{factory:()=>Il});function Ml(n){return El.replace(ro,n)}function Rl(n){return Cl.replace(ro,n)}function Xa(n,i){return i.map(e=>e.replace(ro,n))}var An=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Mn(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Ai?r.applyToHost(e):r instanceof Rn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case bi.Emulated:o=new Ai(c,d,t,this.appId,u,a,s,m);break;case bi.ShadowDom:return new Ri(c,e,t,a,s,this.nonce,m,d);case bi.ExperimentalIsolatedShadowDom:return new Ri(c,e,t,a,s,this.nonce,m);default:o=new Rn(c,d,t,u,a,s,m);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(v(no),v(io),v(vn),v(Sl),v(S),v(W),v(Ft),v(yi,8))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Mn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(eo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Ya(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(Ya(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new D(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=eo[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=eo[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Pt.DashCase|Pt.Important)?i.style.setProperty(e,t,r&Pt.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Pt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=je().getGlobalEventTarget(this.doc,i),!i))throw new D(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Ya(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ri=class extends Mn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Xa(t.id,d);for(let m of d){let C=document.createElement("style");a&&C.setAttribute("nonce",a),C.textContent=m,this.shadowRoot.appendChild(C)}let u=t.getExternalStyles?.();if(u)for(let m of u){let C=to(m,r);a&&C.setAttribute("nonce",a),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Rn=class extends Mn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?Xa(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&xa.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ai=class extends Rn{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(i,e,t,o,a,s,c,d),this.contentAttr=Ml(d),this.hostAttr=Rl(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var xi=class n extends En{supportsDOMEvents=!0;static makeCurrent(){Zr(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Tl();return e==null?null:xl(e)}resetBaseElement(){Tn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return In(document.cookie,i)}},Tn=null;function Tl(){return Tn=Tn||document.head.querySelector("base"),Tn?Tn.getAttribute("href"):null}function xl(n){return new URL(n,document.baseURI).pathname}var Fl=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Qa=["alt","control","meta","shift"],Ol={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kl={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ja=(()=>{class n extends Sn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>je().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Qa.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=Ol[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Qa.forEach(a=>{if(a!==r){let s=kl[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(v(S))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();async function oo(n,i,e){let t=p({rootComponent:n},Pl(i,e));return Ba(t)}function Pl(n,i){return{platformRef:i?.platformRef,appProviders:[...Bl,...n?.providers??[]],platformProviders:jl}}function Ll(){xi.makeCurrent()}function Nl(){return new gt}function Ul(){return Da(document),document}var jl=[{provide:et,useValue:Qr},{provide:wa,useValue:Ll,multi:!0},{provide:S,useFactory:Ul}];var Bl=[{provide:ba,useValue:"root"},{provide:gt,useFactory:Nl},{provide:Ti,useClass:Mi,multi:!0},{provide:Ti,useClass:Ja,multi:!0},An,io,no,{provide:tt,useExisting:An},{provide:yt,useClass:Fl},[]];var Fe=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(e);if(!s)return;s=s.filter(c=>a.indexOf(c)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ki=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Pi=class{encodeKey(i){return es(i)}encodeValue(i){return es(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function zl(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var $l=/%(\d[a-f0-9])/gi,Hl={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function es(n){return encodeURIComponent(n).replace($l,(i,e)=>Hl[e]??i)}function Fi(n){return`${n}`}var Be=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Pi,i.fromString){if(i.fromObject)throw new D(2805,!1);this.map=zl(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Fi):[Fi(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Fi(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Fi(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Vl(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ts(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ns(n){return typeof Blob<"u"&&n instanceof Blob}function is(n){return typeof FormData<"u"&&n instanceof FormData}function Gl(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var xn="Content-Type",Li="Accept",rs="text/plain",os="application/json",as=`${os}, ${rs}, */*`,Ht=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Vl(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Fe,this.context??=new ki,!this.params)this.params=new Be,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ts(this.body)||ns(this.body)||is(this.body)||Gl(this.body)?this.body:this.body instanceof Be?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||is(this.body)?null:ns(this.body)?this.body.type||null:ts(this.body)?null:typeof this.body=="string"?rs:this.body instanceof Be?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?os:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,m=i.referrer??this.referrer,C=i.integrity||this.integrity,K=i.referrerPolicy||this.referrerPolicy,N=i.transferCache??this.transferCache,x=i.timeout??this.timeout,_=i.body!==void 0?i.body:this.body,M=i.withCredentials??this.withCredentials,k=i.reportProgress??this.reportProgress,Q=i.headers||this.headers,L=i.params||this.params,Ke=i.context??this.context;return i.setHeaders!==void 0&&(Q=Object.keys(i.setHeaders).reduce((Ye,Pe)=>Ye.set(Pe,i.setHeaders[Pe]),Q)),i.setParams&&(L=Object.keys(i.setParams).reduce((Ye,Pe)=>Ye.set(Pe,i.setParams[Pe]),L)),new n(e,t,_,{params:L,headers:Q,context:Ke,reportProgress:k,responseType:r,withCredentials:M,transferCache:N,keepalive:o,cache:s,priority:a,timeout:x,mode:c,redirect:d,credentials:u,referrer:m,integrity:C,referrerPolicy:K})}},ze=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ze||{}),Vt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new Fe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Fn=class n extends Vt{constructor(i={}){super(i)}type=ze.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Gt=class n extends Vt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ze.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},xe=class extends Vt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},ss=200,Wl=204;var ql=/^\)\]\}',?\n/,cs=new f(""),Oi=(()=>{class n{fetchImpl=l(so,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(W);destroyRef=l(Ce);handle(e){return new ht(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(co,a=>t.error(new xe({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let x=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,p({signal:t},o)));Kl(x),r.next({type:ze.Sent}),a=await x}catch(x){r.error(new xe({error:x,status:x.status??0,statusText:x.statusText,url:e.urlWithParams,headers:x.headers}));return}let s=new Fe(a.headers),c=a.statusText,d=a.url||e.urlWithParams,u=a.status,m=null;if(e.reportProgress&&r.next(new Fn({headers:s,status:u,statusText:c,url:d})),a.body){let x=a.headers.get("content-length"),_=[],M=a.body.getReader(),k=0,Q,L,Ke=typeof Zone<"u"&&Zone.current,Ye=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await M.cancel(),Ye=!0;break}let{done:hn,value:jr}=await M.read();if(hn)break;if(_.push(jr),k+=jr.length,e.reportProgress){L=e.responseType==="text"?(L??"")+(Q??=new TextDecoder).decode(jr,{stream:!0}):void 0;let sa=()=>r.next({type:ze.DownloadProgress,total:x?+x:void 0,loaded:k,partialText:L});Ke?Ke.run(sa):sa()}}}),Ye){r.complete();return}let Pe=this.concatChunks(_,k);try{let hn=a.headers.get(xn)??"";m=this.parseBody(e,Pe,hn,u)}catch(hn){r.error(new xe({error:hn,headers:new Fe(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=m?ss:0);let C=u>=200&&u<300,K=a.redirected,N=a.type;C?(r.next(new Gt({body:m,headers:s,status:u,statusText:c,url:d,redirected:K,responseType:N})),r.complete()):r.error(new xe({error:m,headers:s,status:u,statusText:c,url:d,redirected:K,responseType:N}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(ql,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Li)||(t[Li]=as),!e.headers.has(xn)){let o=e.detectContentTypeHeader();o!==null&&(t[xn]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),so=class{};function co(){}function Kl(n){n.then(co,co)}var Yl=/^\)\]\}',?\n/;var lo=(()=>{class n{xhrFactory;tracingService=l(yi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let t=this.xhrFactory;return g(null).pipe(X(()=>new ht(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((_,M)=>a.setRequestHeader(_,M.join(","))),e.headers.has(Li)||a.setRequestHeader(Li,as),!e.headers.has(xn)){let _=e.detectContentTypeHeader();_!==null&&a.setRequestHeader(xn,_)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let _=e.responseType.toLowerCase();a.responseType=_!=="json"?_:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let _=a.statusText||"OK",M=new Fe(a.getAllResponseHeaders()),k=a.responseURL||e.url;return c=new Fn({headers:M,status:a.status,statusText:_,url:k}),c},u=this.maybePropagateTrace(()=>{let{headers:_,status:M,statusText:k,url:Q}=d(),L=null;M!==Wl&&(L=typeof a.response>"u"?a.responseText:a.response),M===0&&(M=L?ss:0);let Ke=M>=200&&M<300;if(e.responseType==="json"&&typeof L=="string"){let Ye=L;L=L.replace(Yl,"");try{L=L!==""?JSON.parse(L):null}catch(Pe){L=Ye,Ke&&(Ke=!1,L={error:Pe,text:L})}}Ke?(o.next(new Gt({body:L,headers:_,status:M,statusText:k,url:Q||void 0})),o.complete()):o.error(new xe({error:L,headers:_,status:M,statusText:k,url:Q||void 0}))}),m=this.maybePropagateTrace(_=>{let{url:M}=d(),k=new xe({error:_,status:a.status||0,statusText:a.statusText||"Unknown Error",url:M||void 0});o.error(k)}),C=m;e.timeout&&(C=this.maybePropagateTrace(_=>{let{url:M}=d(),k=new xe({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:M||void 0});o.error(k)}));let K=!1,N=this.maybePropagateTrace(_=>{K||(o.next(d()),K=!0);let M={type:ze.DownloadProgress,loaded:_.loaded};_.lengthComputable&&(M.total=_.total),e.responseType==="text"&&a.responseText&&(M.partialText=a.responseText),o.next(M)}),x=this.maybePropagateTrace(_=>{let M={type:ze.UploadProgress,loaded:_.loaded};_.lengthComputable&&(M.total=_.total),o.next(M)});return a.addEventListener("load",u),a.addEventListener("error",m),a.addEventListener("timeout",C),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",N),s!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(s),o.next({type:ze.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",u),a.removeEventListener("timeout",C),e.reportProgress&&(a.removeEventListener("progress",N),s!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(v(yt))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zl=new f("",{factory:()=>!0}),Xl="XSRF-TOKEN",Ql=new f("",{factory:()=>Xl}),Jl="X-XSRF-TOKEN",ed=new f("",{factory:()=>Jl}),td=(()=>{class n{cookieName=l(Ql);doc=l(S);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=In(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ls=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=v(td),r},providedIn:"root"})}return n})();function ds(n,i){if(!l(Zl)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(zt).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let e=l(ls).getToken(),t=l(ed);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function nd(n,i){return i(n)}function id(n,i,e){return(t,r)=>ae(e,()=>i(t,o=>n(o,r)))}var us=new f("",{factory:()=>[ds]}),hs=new f(""),ps=new f("",{factory:()=>!0});var Ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=v(lo),r},providedIn:"root"})}return n})();var Ni=(()=>{class n{backend;injector;chain=null;pendingTasks=l($r);contributeToStability=l(ps);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=this.injector.get(ji,null,{skipSelf:!0}),r=t!==null&&this.backend===t,o=this.injector.get(hs,[],r?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(us),...o]));this.chain=a.reduceRight((s,c)=>id(s,c,this.injector),nd)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Qe(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(v(Ui),v(ge))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=v(Ni),r},providedIn:"root"})}return n})();function ao(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Wt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Ht)o=e;else{let c;r.headers instanceof Fe?c=r.headers:c=new Fe(r.headers);let d;r.params&&(r.params instanceof Be?d=r.params:d=new Be({fromObject:r.params})),o=new Ht(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=g(o).pipe(mt(c=>this.handler.handle(c)));if(e instanceof Ht||r.observe==="events")return a;let s=a.pipe(ce(c=>c instanceof Gt));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(T(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return s.pipe(T(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return s.pipe(T(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return s.pipe(T(c=>c.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Be().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ao(r,t))}post(e,t,r={}){return this.request("POST",e,ao(r,t))}put(e,t,r={}){return this.request("PUT",e,ao(r,t))}static \u0275fac=function(t){return new(t||n)(v(ji))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var uo=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(uo||{});function rd(n,i){return{\u0275kind:n,\u0275providers:i}}function ho(...n){let i=[Wt,Ni,{provide:ji,useExisting:Ni},{provide:Ui,useFactory:()=>l(cs,{optional:!0})??l(lo)},{provide:us,useValue:ds,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return ft(i)}function po(){return rd(uo.Fetch,[Oi,{provide:cs,useExisting:Oi},{provide:Ui,useExisting:Oi}])}var ms=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(v(S))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var On=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=v(cd),r},providedIn:"root"})}return n})(),cd=(()=>{class n extends On{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case de.NONE:return t;case de.HTML:return kt(t,"HTML")?Ot(t):Aa(this._doc,String(t)).toString();case de.STYLE:return kt(t,"Style")?Ot(t):t;case de.SCRIPT:if(kt(t,"Script"))return Ot(t);throw new D(5200,!1);case de.URL:return kt(t,"URL")?Ot(t):Ra(String(t));case de.RESOURCE_URL:if(kt(t,"ResourceURL"))return Ot(t);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Ca(e)}bypassSecurityTrustStyle(e){return Ea(e)}bypassSecurityTrustScript(e){return Ia(e)}bypassSecurityTrustUrl(e){return Sa(e)}bypassSecurityTrustResourceUrl(e){return Ma(e)}static \u0275fac=function(t){return new(t||n)(v(S))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var b="primary",qn=Symbol("RouteTitle"),bo=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Dt(n){return new bo(n)}function mo(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Es(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},d=n.slice(0,t.length);return mo(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!mo(o,n.slice(0,o.length),s)||!mo(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Gi(n){return new Promise((i,e)=>{n.pipe(Je()).subscribe({next:t=>i(t),error:t=>e(t)})})}function ld(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Oe(n[e],i[e]))return!1;return!0}function Oe(n,i){let e=n?yo(n):void 0,t=i?yo(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Is(n[r],i[r]))return!1;return!0}function yo(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Is(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function dd(n){return n.length>0?n[n.length-1]:null}function Et(n){return Le(n)?n:Wr(n)?fe(Promise.resolve(n)):g(n)}function Ss(n){return Le(n)?Gi(n):Promise.resolve(n)}var ud={exact:As,subset:Ts},Ms={exact:hd,subset:pd,ignored:()=>!0},Rs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_o={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function gs(n,i,e){return ud[e.paths](n.root,i.root,e.matrixParams)&&Ms[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function hd(n,i){return Oe(n,i)}function As(n,i,e){if(!_t(n.segments,i.segments)||!$i(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!As(n.children[t],i.children[t],e))return!1;return!0}function pd(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Is(n[e],i[e]))}function Ts(n,i,e){return xs(n,i,i.segments,e)}function xs(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!_t(r,e)||i.hasChildren()||!$i(r,e,t))}else if(n.segments.length===e.length){if(!_t(n.segments,e)||!$i(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Ts(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!_t(n.segments,r)||!$i(n.segments,r,t)||!n.children[b]?!1:xs(n.children[b],i,o,t)}}function $i(n,i,e){return i.every((t,r)=>Ms[e](n[r].parameters,t.parameters))}var ye=class{root;queryParams;fragment;_queryParamMap;constructor(i=new F([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Dt(this.queryParams),this._queryParamMap}toString(){return gd.serialize(this)}},F=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Hi(this)}},ot=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Dt(this.parameters),this._parameterMap}toString(){return Os(this)}};function md(n,i){return _t(n,i)&&n.every((e,t)=>Oe(e.parameters,i[t].parameters))}function _t(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function fd(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===b&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==b&&(e=e.concat(i(r,t)))}),e}var Kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>new at,providedIn:"root"})}return n})(),at=class{parse(i){let e=new wo(i);return new ye(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${kn(i.root,!0)}`,t=yd(i.queryParams),r=typeof i.fragment=="string"?`#${vd(i.fragment)}`:"";return`${e}${t}${r}`}},gd=new at;function Hi(n){return n.segments.map(i=>Os(i)).join("/")}function kn(n,i){if(!n.hasChildren())return Hi(n);if(i){let e=n.children[b]?kn(n.children[b],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==b&&t.push(`${r}:${kn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=fd(n,(t,r)=>r===b?[kn(n.children[b],!1)]:[`${r}:${kn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[b]!=null?`${Hi(n)}/${e[0]}`:`${Hi(n)}/(${e.join("//")})`}}function Fs(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Bi(n){return Fs(n).replace(/%3B/gi,";")}function vd(n){return encodeURI(n)}function Do(n){return Fs(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Vi(n){return decodeURIComponent(n)}function vs(n){return Vi(n.replace(/\+/g,"%20"))}function Os(n){return`${Do(n.path)}${bd(n.parameters)}`}function bd(n){return Object.entries(n).map(([i,e])=>`;${Do(i)}=${Do(e)}`).join("")}function yd(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Bi(e)}=${Bi(r)}`).join("&"):`${Bi(e)}=${Bi(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var _d=/^[^\/()?;#]+/;function fo(n){let i=n.match(_d);return i?i[0]:""}var Dd=/^[^\/()?;=#]+/;function wd(n){let i=n.match(Dd);return i?i[0]:""}var Cd=/^[^=?&#]+/;function Ed(n){let i=n.match(Cd);return i?i[0]:""}var Id=/^[^&#]+/;function Sd(n){let i=n.match(Id);return i?i[0]:""}var wo=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new F([],{}):new F([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[b]=new F(e,t)),r}parseSegment(){let i=fo(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(i),new ot(Vi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=wd(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=fo(this.remaining);r&&(t=r,this.capture(t))}i[Vi(e)]=Vi(t)}parseQueryParam(i){let e=Ed(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Sd(this.remaining);a&&(t=a,this.capture(t))}let r=vs(e),o=vs(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=fo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=b);let s=this.parseChildren(e+1);t[a??b]=Object.keys(s).length===1&&s[b]?s[b]:new F([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new D(4011,!1)}};function ks(n){return n.segments.length>0?new F([],{[b]:n}):n}function Ps(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Ps(r);if(t===b&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new F(n.segments,i);return Md(e)}function Md(n){if(n.numberOfChildren===1&&n.children[b]){let i=n.children[b];return new F(n.segments.concat(i.segments),i.children)}return n}function Zt(n){return n instanceof ye}function Ls(n,i,e=null,t=null,r=new at){let o=Ns(n);return Us(o,i,e,t,r)}function Ns(n){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new F(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=ks(t);return i??r}function Us(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return go(o,o,o,e,t,r);let a=Rd(i);if(a.toRoot())return go(o,o,new F([],{}),e,t,r);let s=Ad(a,o,n),c=s.processChildren?Ln(s.segmentGroup,s.index,a.commands):Bs(s.segmentGroup,s.index,a.commands);return go(o,s.segmentGroup,c,e,t,r)}function Wi(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function jn(n){return typeof n=="object"&&n!=null&&n.outlets}function bs(n,i,e){n||="\u0275";let t=new ye;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function go(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(m=>bs(d,m,o)):bs(d,u,o);let s;n===i?s=e:s=js(n,i,e);let c=ks(Ps(s));return new ye(c,a,r)}function js(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=js(o,i,e)}),new F(n.segments,t)}var qi=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Wi(t[0]))throw new D(4003,!1);let r=t.find(jn);if(r&&r!==dd(t))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Rd(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new qi(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new qi(e,i,t)}var Kt=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Ad(n,i,e){if(n.isAbsolute)return new Kt(i,!0,0);if(!e)return new Kt(i,!1,NaN);if(e.parent===null)return new Kt(e,!0,0);let t=Wi(n.commands[0])?0:1,r=e.segments.length-1+t;return Td(e,r,n.numberOfDoubleDots)}function Td(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new D(4005,!1);r=t.segments.length}return new Kt(t,!1,r-o)}function xd(n){return jn(n[0])?n[0].outlets:{[b]:n}}function Bs(n,i,e){if(n??=new F([],{}),n.segments.length===0&&n.hasChildren())return Ln(n,i,e);let t=Fd(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new F(n.segments.slice(0,t.pathIndex),{});return o.children[b]=new F(n.segments.slice(t.pathIndex),n.children),Ln(o,0,r)}else return t.match&&r.length===0?new F(n.segments,{}):t.match&&!n.hasChildren()?Co(n,i,e):t.match?Ln(n,0,r):Co(n,i,e)}function Ln(n,i,e){if(e.length===0)return new F(n.segments,{});{let t=xd(e),r={};if(Object.keys(t).some(o=>o!==b)&&n.children[b]&&n.numberOfChildren===1&&n.children[b].segments.length===0){let o=Ln(n.children[b],i,e);return new F(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Bs(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new F(n.segments,r)}}function Fd(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(jn(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!_s(c,d,a))return o;t+=2}else{if(!_s(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Co(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(jn(o)){let c=Od(o.outlets);return new F(t,c)}if(r===0&&Wi(e[0])){let c=n.segments[i];t.push(new ot(c.path,ys(e[0]))),r++;continue}let a=jn(o)?o.outlets[b]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Wi(s)?(t.push(new ot(a,ys(s))),r+=2):(t.push(new ot(a,{})),r++)}return new F(t,{})}function Od(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Co(new F([],{}),0,t))}),i}function ys(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function _s(n,i,e){return n==e.path&&Oe(i,e.parameters)}var Nn="imperative",Z=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Z||{}),me=class{id;url;constructor(i,e){this.id=i,this.url=e}},wt=class extends me{type=Z.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},He=class extends me{urlAfterRedirects;type=Z.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ne=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(ne||{}),Bn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Bn||{}),be=class extends me{reason;code;type=Z.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zs(n){return n instanceof be&&(n.code===ne.Redirect||n.code===ne.SupersededByNewNavigation)}var Ve=class extends me{reason;code;type=Z.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Ct=class extends me{error;target;type=Z.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zn=class extends me{urlAfterRedirects;state;type=Z.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ki=class extends me{urlAfterRedirects;state;type=Z.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yi=class extends me{urlAfterRedirects;state;shouldActivate;type=Z.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zi=class extends me{urlAfterRedirects;state;type=Z.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xi=class extends me{urlAfterRedirects;state;type=Z.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qi=class{route;type=Z.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ji=class{route;type=Z.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},er=class{snapshot;type=Z.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tr=class{snapshot;type=Z.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nr=class{snapshot;type=Z.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ir=class{snapshot;type=Z.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Xt=class{},$n=class{},Qt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function kd(n){return!(n instanceof Xt)&&!(n instanceof Qt)&&!(n instanceof $n)}var rr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new nn(this.rootInjector)}},nn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new rr(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(v(ge))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),or=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Eo(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Eo(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Io(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Io(i,this._root).map(e=>e.value)}};function Eo(n,i){if(n===i.value)return i;for(let e of i.children){let t=Eo(n,e);if(t)return t}return null}function Io(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Io(n,e);if(t.length)return t.unshift(i),t}return[]}var pe=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function qt(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Hn=class extends or{snapshot;constructor(i,e){super(i),this.snapshot=e,ko(this,i)}toString(){return this.snapshot.toString()}};function $s(n,i){let e=Pd(n,i),t=new oe([new ot("",{})]),r=new oe({}),o=new oe({}),a=new oe({}),s=new oe(""),c=new st(t,r,a,s,o,b,n,e.root);return c.snapshot=e.root,new Hn(new pe(c,[]),e)}function Pd(n,i){let e={},t={},r={},a=new Jt([],e,r,"",t,b,n,null,{},i);return new Vn("",new pe(a,[]))}var st=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(T(d=>d[qn]))??g(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(T(i=>Dt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(T(i=>Dt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Oo(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:p(p({},i.params),n.params),data:p(p({},i.data),n.data),resolve:p(p(p(p({},n.data),i.data),r?.data),n._resolvedData)}:t={params:p({},n.params),data:p({},n.data),resolve:p(p({},n.data),n._resolvedData??{})},r&&Vs(r)&&(t.resolve[qn]=r.title),t}var Jt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[qn]}constructor(i,e,t,r,o,a,s,c,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Dt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Dt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Vn=class extends or{url;constructor(i,e){super(e),this.url=i,ko(this,e)}toString(){return Hs(this._root)}};function ko(n,i){i.value._routerState=n,i.children.forEach(e=>ko(n,e))}function Hs(n){let i=n.children.length>0?` { ${n.children.map(Hs).join(", ")} } `:"";return`${n.value}${i}`}function vo(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Oe(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Oe(i.params,e.params)||n.paramsSubject.next(e.params),ld(i.url,e.url)||n.urlSubject.next(e.url),Oe(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function So(n,i){let e=Oe(n.params,i.params)&&md(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||So(n.parent,i.parent))}function Vs(n){return typeof n.title=="string"||n.title===null}var Gs=new f(""),Yn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=b;activateEvents=new ve;deactivateEvents=new ve;attachEvents=new ve;detachEvents=new ve;routerOutletData=ja();parentContexts=l(nn);location=l(Di);changeDetector=l(bt);inputBinder=l(lr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Mo(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[gi]})}return n})(),Mo=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===st?this.route:i===nn?this.childContexts:i===Gs?this.outletData:this.parent.get(i,e)}},lr=new f("");var Po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&Y(0,"router-outlet")},dependencies:[Yn],encapsulation:2})}return n})();function Lo(n){let i=n.children&&n.children.map(Lo),e=i?$(p({},n),{children:i}):p({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==b&&(e.component=Po),e}function Ld(n,i,e){let t=Gn(n,i._root,e?e._root:void 0);return new Hn(t,i)}function Gn(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Nd(n,i,e);return new pe(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Gn(n,s)),a}}let t=Ud(i.value),r=i.children.map(o=>Gn(n,o));return new pe(t,r)}}function Nd(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return Gn(n,t,r);return Gn(n,t)})}function Ud(n){return new st(new oe(n.url),new oe(n.params),new oe(n.queryParams),new oe(n.fragment),new oe(n.data),n.outlet,n.component,n)}var en=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Ws="ngNavigationCancelingError";function ar(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Zt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=qs(!1,ne.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function qs(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Ws]=!0,e.cancellationCode=i,e}function jd(n){return Ks(n)&&Zt(n.url)}function Ks(n){return!!n&&n[Ws]}var Ro=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),vo(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=qt(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=qt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=qt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=qt(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new ir(o.value.snapshot))}),i.children.length&&this.forwardEvent(new tr(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(vo(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),vo(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},sr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Yt=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Bd(n,i,e){let t=n._root,r=i?i._root:null;return Pn(t,r,e,[t.value])}function zd(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function rn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!va(n)?n:i.get(n):t}function Pn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=qt(i);return n.children.forEach(a=>{$d(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Un(s,e.getContext(a),r)),r}function $d(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Hd(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new sr(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Pn(n,i,s?s.children:null,t,r):Pn(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Yt(s.outlet.component,a))}else a&&Un(i,s,r),r.canActivateChecks.push(new sr(t)),o.component?Pn(n,null,s?s.children:null,t,r):Pn(n,null,e,t,r);return r}function Hd(n,i,e){if(typeof e=="function")return ae(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!_t(n.url,i.url);case"pathParamsOrQueryParamsChange":return!_t(n.url,i.url)||!Oe(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!So(n,i)||!Oe(n.queryParams,i.queryParams);default:return!So(n,i)}}function Un(n,i,e){let t=qt(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Un(a,i.children.getContext(o),e):Un(a,null,e):Un(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Yt(i.outlet.component,r)):e.canDeactivateChecks.push(new Yt(null,r)):e.canDeactivateChecks.push(new Yt(null,r))}function Zn(n){return typeof n=="function"}function Vd(n){return typeof n=="boolean"}function Gd(n){return n&&Zn(n.canLoad)}function Wd(n){return n&&Zn(n.canActivate)}function qd(n){return n&&Zn(n.canActivateChild)}function Kd(n){return n&&Zn(n.canDeactivate)}function Yd(n){return n&&Zn(n.canMatch)}function Ys(n){return n instanceof da||n?.name==="EmptyError"}var zi=Symbol("INITIAL_VALUE");function tn(){return X(n=>ua(n.map(i=>i.pipe(we(1),Tt(zi)))).pipe(T(i=>{for(let e of i)if(e!==!0){if(e===zi)return zi;if(e===!1||Zd(e))return e}return!0}),ce(i=>i!==zi),we(1)))}function Zd(n){return Zt(n)||n instanceof en}function Zs(n){return n.aborted?g(void 0).pipe(we(1)):new ht(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Xs(n){return le(Zs(n))}function Xd(n){return Ze(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?g($(p({},i),{guardsResult:!0})):Qd(o,e,t).pipe(Ze(a=>a&&Vd(a)?Jd(e,r,n):g(a)),T(a=>$(p({},i),{guardsResult:a})))})}function Qd(n,i,e){return fe(n).pipe(Ze(t=>ru(t.component,t.route,e,i)),Je(t=>t!==!0,!0))}function Jd(n,i,e){return fe(i).pipe(mt(t=>pn(tu(t.route.parent,e),eu(t.route,e),iu(n,t.path),nu(n,t.route))),Je(t=>t!==!0,!0))}function eu(n,i){return n!==null&&i&&i(new nr(n)),g(!0)}function tu(n,i){return n!==null&&i&&i(new er(n)),g(!0)}function nu(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return g(!0);let t=e.map(r=>pt(()=>{let o=i._environmentInjector,a=rn(r,o),s=Wd(a)?a.canActivate(i,n):ae(o,()=>a(i,n));return Et(s).pipe(Je())}));return g(t).pipe(tn())}function iu(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>zd(o)).filter(o=>o!==null).map(o=>pt(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=rn(s,c),u=qd(d)?d.canActivateChild(e,n):ae(c,()=>d(e,n));return Et(u).pipe(Je())});return g(a).pipe(tn())}));return g(r).pipe(tn())}function ru(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let o=r.map(a=>{let s=i._environmentInjector,c=rn(a,s),d=Kd(c)?c.canDeactivate(n,i,e,t):ae(s,()=>c(n,i,e,t));return Et(d).pipe(Je())});return g(o).pipe(tn())}function ou(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return g(!0);let a=o.map(s=>{let c=rn(s,n),d=Gd(c)?c.canLoad(i,e):ae(n,()=>c(i,e)),u=Et(d);return r?u.pipe(Xs(r)):u});return g(a).pipe(tn(),Qs(t))}function Qs(n){return la(V(i=>{if(typeof i!="boolean")throw ar(n,i)}),T(i=>i===!0))}function au(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return g(!0);let s=a.map(c=>{let d=rn(c,n),u=Yd(d)?d.canMatch(i,e,r):ae(n,()=>d(i,e,r));return Et(u).pipe(Xs(o))});return g(s).pipe(tn(),Qs(t))}var $e=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Wn=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function su(n){throw new D(4e3,!1)}function cu(n){throw qs(!1,ne.GuardRejected)}var Ao=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[b])throw su(`${i.redirectTo}`);r=r.children[b]}}async applyRedirectCommands(i,e,t,r,o){let a=await lu(e,r,o);if(a instanceof ye)throw new Wn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new Wn(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new ye(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,t,r)}),new F(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function lu(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Gi(Et(ae(e,()=>t(i))))}function du(n,i){return n.providers&&!n._injector&&(n._injector=Vr(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Ee(n){return n.outlet||b}function uu(n,i){let e=n.filter(t=>Ee(t)===i);return e.push(...n.filter(t=>Ee(t)!==i)),e}var To={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Js(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function hu(n,i,e,t,r,o,a){let s=ec(n,i,e);if(!s.matched)return g(s);let c=Js(o(s));return t=du(i,t),au(t,i,e,r,c,a).pipe(T(d=>d===!0?s:p({},To)))}function ec(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?p({},To):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Es)(e,n,i);if(!r)return p({},To);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?p(p({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Ds(n,i,e,t,r){return e.length>0&&fu(n,e,t,r)?{segmentGroup:new F(i,mu(t,new F(e,n.children))),slicedSegments:[]}:e.length===0&&gu(n,e,t)?{segmentGroup:new F(n.segments,pu(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new F(n.segments,n.children),slicedSegments:e}}function pu(n,i,e,t){let r={};for(let o of e)if(dr(n,i,o)&&!t[Ee(o)]){let a=new F([],{});r[Ee(o)]=a}return p(p({},t),r)}function mu(n,i){let e={};e[b]=i;for(let t of n)if(t.path===""&&Ee(t)!==b){let r=new F([],{});e[Ee(t)]=r}return e}function fu(n,i,e,t){return e.some(r=>!dr(n,i,r)||!(Ee(r)!==b)?!1:!(t!==void 0&&Ee(r)===t))}function gu(n,i,e){return e.some(t=>dr(n,i,t))}function dr(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function vu(n,i,e){return i.length===0&&!n.children[e]}var xo=class{};async function bu(n,i,e,t,r,o,a="emptyOnly",s){return new Fo(n,i,e,t,r,a,o,s).recognize()}var yu=31,Fo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Ao(this.urlSerializer,this.urlTree)}noMatchError(i){return new D(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Ds(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new pe(t,e),o=new Vn("",r),a=Ls(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new Jt([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),b,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,b,e),rootSnapshot:e}}catch(t){if(t instanceof Wn)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof $e?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof pe?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],u=uu(e,c),m=await this.processSegmentGroup(i,u,d,c,r);a.push(...m)}let s=tc(a);return _u(s),s}async processSegment(i,e,t,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,o,a,s)}catch(d){if(d instanceof $e||Ys(d))continue;throw d}if(vu(t,r,o))return new xo;throw new $e(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,c){if(Ee(t)!==a&&(a===b||!dr(r,o,t)))throw new $e(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,c);throw new $e(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:m,remainingSegments:C}=ec(e,r,o);if(!c)throw new $e(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yu&&(this.allowRedirects=!1));let K=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let N=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,Js(K),i),x=await this.applyRedirects.lineralizeSegments(r,N);return this.processSegment(i,t,e,x.concat(C),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new Jt(t,r,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,wu(e),Ee(e),e.component??e._loadedComponent??null,e,Cu(e),i),s=Oo(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Q=>this.createSnapshot(i,t,Q.consumedSegments,Q.parameters,a),c=await Gi(hu(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new $e(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:m,consumedSegments:C,remainingSegments:K}=c,N=this.createSnapshot(i,t,C,m,a),{segmentGroup:x,slicedSegments:_}=Ds(e,C,K,d,o);if(_.length===0&&x.hasChildren()){let Q=await this.processChildren(u,d,x,N);return new pe(N,Q)}if(d.length===0&&_.length===0)return new pe(N,[]);let M=Ee(t)===o,k=await this.processSegment(u,d,x,_,M?b:o,!0,N);return new pe(N,k instanceof pe?[k]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Gi(ou(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw cu(e)}return{routes:[],injector:i}}};function _u(n){n.sort((i,e)=>i.value.outlet===b?-1:e.value.outlet===b?1:i.value.outlet.localeCompare(e.value.outlet))}function Du(n){let i=n.value.routeConfig;return i&&i.path===""}function tc(n){let i=[],e=new Set;for(let t of n){if(!Du(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=tc(t.children);i.push(new pe(t.value,r))}return i.filter(t=>!e.has(t))}function wu(n){return n.data||{}}function Cu(n){return n.resolve||{}}function Eu(n,i,e,t,r,o,a){return Ze(async s=>{let{state:c,tree:d}=await bu(n,i,e,t,s.extractedUrl,r,o,a);return $(p({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Iu(n){return Ze(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return g(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of nc(s))o.add(c);let a=0;return fe(o).pipe(mt(s=>r.has(s)?Su(s,e,n):(s.data=Oo(s,s.parent,n).resolve,g(void 0))),V(()=>a++),zr(1),Ze(s=>a===o.size?g(i):ie))})}function nc(n){let i=n.children.map(e=>nc(e)).flat();return[n,...i]}function Su(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Vs(t)&&(r[qn]=t.title),pt(()=>(n.data=Oo(n,n.parent,e).resolve,Mu(r,n,i).pipe(T(o=>(n._resolvedData=o,n.data=p(p({},n.data),o),null)))))}function Mu(n,i,e){let t=yo(n);if(t.length===0)return g({});let r={};return fe(t).pipe(Ze(o=>Ru(n[o],i,e).pipe(Je(),V(a=>{if(a instanceof en)throw ar(new at,a);r[o]=a}))),zr(1),T(()=>r),mn(o=>Ys(o)?ie:pi(o)))}function Ru(n,i,e){let t=i._environmentInjector,r=rn(n,t),o=r.resolve?r.resolve(i,e):ae(t,()=>r(i,e));return Et(o)}function ws(n){return X(i=>{let e=n(i);return e?fe(e).pipe(T(()=>i)):g(i)})}var No=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===b);return t}getResolvedTitleForRoute(e){return e.data[qn]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(ic),providedIn:"root"})}return n})(),ic=(()=>{class n extends No{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(v(ms))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xn=new f("",{factory:()=>({})}),Qn=new f(""),rc=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Na);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Ss(ae(e,()=>t.loadComponent())),a=await sc(ac(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await oc(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function oc(n,i,e,t){let r=await Ss(ae(e,()=>n.loadChildren())),o=await sc(ac(r)),a;o instanceof Oa||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(Qn,[],{optional:!0,self:!0}).flat()),{routes:c.map(Lo),injector:s,factory:u}}function Au(n){return n&&typeof n=="object"&&"default"in n}function ac(n){return Au(n)?n.default:n}async function sc(n){return n}var ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(Tu),providedIn:"root"})}return n})(),Tu=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cc=new f("");var xu=()=>{},lc=new f(""),dc=(()=>{class n{currentNavigation=P(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=P(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=l(rc);environmentInjector=l(ge);destroyRef=l(Ce);urlSerializer=l(Kn);rootContexts=l(nn);location=l($t);inputBindingEnabled=l(lr,{optional:!0})!==null;titleStrategy=l(No);options=l(Xn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(ur);createViewTransition=l(cc,{optional:!0});navigationErrorHandler=l(lc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Qi(r)),t=r=>this.events.next(new Ji(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ae(()=>{this.transitions?.next($(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new oe(null),this.transitions.pipe(ce(t=>t!==null),X(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return g(t).pipe(X(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",ne.SupersededByNewNavigation),ie;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?$(p({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Ve(s.id,this.urlSerializer.serialize(s.rawUrl),"",Bn.IgnoredSameUrlNavigation)),s.resolve(!1),ie;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(X(m=>(this.events.next(new wt(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ie:Promise.resolve(m))),Eu(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),V(m=>{t.targetSnapshot=m.targetSnapshot,t.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=m.urlAfterRedirects,C)),this.events.next(new $n)}),X(m=>fe(t.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(T(()=>m))),V(()=>{let m=new zn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:C,source:K,restoredState:N,extras:x}=s,_=new wt(m,this.urlSerializer.serialize(C),K,N);this.events.next(_);let M=$s(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=$(p({},s),{targetSnapshot:M,urlAfterRedirects:C,extras:$(p({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(k=>(k.finalUrl=C,k)),g(t)}else return this.events.next(new Ve(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Bn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ie}),T(s=>{let c=new Ki(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=$(p({},s),{guards:Bd(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Xd(s=>this.events.next(s)),X(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ar(this.urlSerializer,s.guardsResult);let c=new Yi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return ie;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ne.GuardRejected),ie;if(s.guards.canActivateChecks.length===0)return g(s);let d=new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return ie;let u=!1;return g(s).pipe(Iu(this.paramsInheritanceStrategy),V({next:()=>{u=!0;let m=new Xi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{u||this.cancelNavigationTransition(s,"",ne.NoDataFromResolver)}}))}),ws(s=>{let c=u=>{let m=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let C=u._environmentInjector;m.push(this.configLoader.loadComponent(C,u.routeConfig).then(K=>{u.component=K}))}for(let C of u.children)m.push(...c(C));return m},d=c(s.targetSnapshot.root);return d.length===0?g(s):fe(Promise.all(d).then(()=>s))}),ws(()=>this.afterPreactivation()),X(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?fe(d).pipe(T(()=>t)):g(t)}),we(1),X(s=>{let c=Ld(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=$(p({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Xt);let d=t.beforeActivateHandler.deferredHandle;return d?fe(d.then(()=>s)):g(s)}),V(s=>{new Ro(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=xu,c)),this.lastSuccessfulNavigation.set(Ae(this.currentNavigation)),this.events.next(new He(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),le(Zs(o.signal).pipe(ce(()=>!r&&!t.targetRouterState),V(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",ne.Aborted)}))),V({complete:()=>{r=!0}}),le(this.transitionAbortWithErrorSubject.pipe(V(s=>{throw s}))),Qe(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",ne.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),mn(s=>{if(r=!0,this.destroyed)return t.resolve(!1),ie;if(Ks(s))this.events.next(new be(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),jd(s)?this.events.next(new Qt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Ct(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=ae(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof en){let{message:u,cancellationCode:m}=ar(this.urlSerializer,d);this.events.next(new be(t.id,this.urlSerializer.serialize(t.extractedUrl),u,m)),this.events.next(new Qt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return ie}))}))}cancelNavigationTransition(e,t,r){let o=new be(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ae(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fu(n){return n!==Nn}var uc=new f("");var hc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(Ou),providedIn:"root"})}return n})(),cr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Ou=(()=>{class n extends cr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Uo=(()=>{class n{urlSerializer=l(Kn);options=l(Xn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l($t);urlHandlingStrategy=l(ur);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ye;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ye?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=$s(null,l(ge));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:()=>l(ku),providedIn:"root"})}return n})(),ku=(()=>{class n extends Uo{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof wt?this.updateStateMemento():e instanceof Ve?this.commitTransition(t):e instanceof zn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Xt?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof be&&!zs(e)?this.restoreHistory(t):e instanceof Ct?this.restoreHistory(t,!0):e instanceof He&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=p(p({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=p(p({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?p({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):p({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jo(n,i){n.events.pipe(ce(e=>e instanceof He||e instanceof be||e instanceof Ct||e instanceof Ve),T(e=>e instanceof He||e instanceof Ve?0:(e instanceof be?e.code===ne.Redirect||e.code===ne.SupersededByNewNavigation:!1)?2:1),ce(e=>e!==2),we(1)).subscribe(()=>{i()})}var hr=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Gr);stateManager=l(Uo);options=l(Xn,{optional:!0})||{};pendingTasks=l(ya);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(dc);urlSerializer=l(Kn);location=l($t);urlHandlingStrategy=l(ur);injector=l(ge);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(hc);injectorCleanup=l(uc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Qn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(lr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new At;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Ae(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof be&&t.code!==ne.Redirect&&t.code!==ne.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof He)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Qt){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=p({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Fu(r.source)},a);this.scheduleNavigation(s,Nn,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}kd(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Nn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=$(p({},o),{browserUrl:e})),r){let d=p({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(fi)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ae(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Lo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=p(p({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let C=r?r.snapshot:this.routerState.snapshot.root;m=Ns(C)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return Us(m,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Zt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Nn,null,t)}navigate(e,t={skipLocationChange:!1}){return Pu(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(fn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=p({},Rs):t===!1?r=p({},_o):r=p(p({},_o),t),Zt(e))return gs(this.currentUrlTree,e,r);let o=this.parseUrl(e);return gs(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((m,C)=>{s=m,c=C});let u=this.pendingTasks.add();return jo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Pu(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new D(4008,!1)}var Uu=new f("");function Bo(n,...i){return ft([{provide:Qn,multi:!0,useValue:n},[],{provide:st,useFactory:ju},{provide:ka,multi:!0,useFactory:Bu},i.map(e=>e.\u0275providers)])}function ju(){return l(hr).routerState.root}function Bu(){let n=l(J);return i=>{let e=n.get(bn);if(i!==e.components[0])return;let t=n.get(hr),r=n.get(zu);n.get($u)===1&&t.initialNavigation(),n.get(Hu,null,{optional:!0})?.setUpPreloading(),n.get(Uu,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var zu=new f("",{factory:()=>new O}),$u=new f("",{factory:()=>1});var Hu=new f("");var pc=[];var Gu="@",Wu=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(J);loadingSchedulerFn=l(qu,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-QAEWOSRD.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new D(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new zo(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(_a,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Fa()};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),zo=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Gu)}},qu=new f("");function mc(n="animations"){return Hr("NgAsyncAnimations"),ft([{provide:tt,useFactory:()=>new Wu(l(S),l(An),l(W),n)},{provide:vi,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function ct(n){n||(n=l(Ce));let i=new ht(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(le(i))}function fc(n,i){let e={};for(let t of Object.keys(n))t!==i&&(e[t]=n[t]);return e}var $o=class{state=P({});hasAny=Bt(()=>Object.keys(this.state()).length>0);isLoading(i){return this.state()[i]!==void 0}get(i){return this.state()[i]}set(i,e){this.state.update(t=>$(p({},t),{[i]:e}))}clear(i){this.state.update(e=>fc(e,i))}clearIfOwner(i,e){this.state.update(t=>t[i]===e?fc(t,i):t)}},mr=class{},Ku=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),ti=class{},Yu=(()=>{class n extends ti{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),St=class{},Zu=(()=>{class n extends St{getTranslation(e){return g({})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();function Ho(n,i){if(n===i)return!0;if(n===null||i===null)return!1;if(n!==n&&i!==i)return!0;let e=typeof n,t=typeof i,r;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(i))return!1;if((r=n.length)==i.length){for(let o=0;o<r;o++)if(!Ho(n[o],i[o]))return!1;return!0}}else{if(Array.isArray(i))return!1;if(We(n)&&We(i)){let o=Object.create(null);for(let a in n){if(!Ho(n[a],i[a]))return!1;o[a]=!0}for(let a in i)if(!(a in o)&&typeof i[a]<"u")return!1;return!0}}return!1}function Ge(n){return typeof n<"u"&&n!==null}function gc(n){return n!==void 0}function We(n){return ei(n)&&!It(n)&&n!==null}function ei(n){return typeof n=="object"&&n!==null}function It(n){return Array.isArray(n)}function fr(n){return typeof n=="string"}function Xu(n){return typeof n=="function"}function gr(n){if(It(n))return n.map(i=>gr(i));if(We(n)){let i={};return Object.keys(n).forEach(e=>{i[e]=gr(n[e])}),i}else return n}function Vo(n,i){if(!ei(n))return gr(i);let e=gr(n);return ei(e)&&ei(i)&&Object.keys(i).forEach(t=>{We(i[t])?t in n?e[t]=Vo(n[t],i[t]):Object.assign(e,{[t]:i[t]}):Object.assign(e,{[t]:i[t]})}),e}function bc(n,i){let e=i.split(".");i="";do{i+=e.shift();let t=!e.length;if(Ge(n)){if(We(n)&&gc(n[i])&&(We(n[i])||It(n[i])||t)){n=n[i],i="";continue}if(It(n)){if(i==="length"&&t){n=n.length,i="";continue}if(/^\d+$/.test(i)){let r=parseInt(i,10);if(gc(n[r])&&(We(n[r])||It(n[r])||t)){n=n[r],i="";continue}}}}if(t){n=void 0;continue}i+="."}while(e.length);return n}function Qu(n,i,e){return Vo(n,Ju(i,e))}function Ju(n,i){return n.split(".").reduceRight((e,t)=>({[t]:e}),i)}var ni=class{},eh=(()=>{class n extends ni{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if(fr(e))return this.interpolateString(e,t);if(Xu(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(r,o)=>{let a=this.getInterpolationReplacement(t,o);return a!==void 0?a:r}):e}getInterpolationReplacement(e,t){return this.formatValue(bc(e,t))}formatValue(e){if(fr(e))return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(e===null)return"null";if(It(e))return e.join(", ");if(ei(e))return typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),yc=(()=>{class n{_translations=P({});translations=this._translations.asReadonly();_languages=P([]);languages=this._languages.asReadonly();_lastTranslationChange=P(null);lastTranslationChange=this._lastTranslationChange.asReadonly();_translationChange$=new O;translationChange$=this._translationChange$.asObservable();constructor(){l(Ce).onDestroy(()=>{this._translationChange$.complete()})}getTranslations(e){return this.translations()[e]}setTranslations(e,t,r){this._translations.update(a=>$(p({},a),{[e]:r&&this.hasTranslationFor(e)?Vo(a[e],t):t})),this.addLanguages([e]);let o={lang:e,translations:this.getTranslations(e)};this._lastTranslationChange.set(o),this._translationChange$.next(o)}getLanguages(){return this.languages()}addLanguages(e){this._languages.update(t=>Array.from(new Set([...t,...e])))}hasTranslationFor(e){return typeof this.translations()[e]<"u"}deleteTranslations(e){this._translations.update(t=>{let a=t,{[e]:r}=a;return Br(a,[ca(e)])})}getTranslationValue(e,t){return bc(this.getTranslations(e),t)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),_c=new f("TRANSLATE_CONFIG"),Jn=n=>Le(n)?n:g(n),Mt=(()=>{class n{loadingTranslations=new $o;lastUseLanguage=null;currentLoader=l(St);compiler=l(ti);parser=l(ni);missingTranslationHandler=l(mr);store=l(yc);destroyRef=l(Ce);parent;get isRoot(){return this.parent===null}_onLangChange=new O;_onFallbackLangChange=new O;_currentLang=P(null);_fallbackLang=P(null);_onTranslationRefresh=null;_isLoading=Bt(()=>this.loadingTranslations.hasAny()||(this.parent?.isLoading()??!1));getRoot(){let e=this;for(;e.parent;)e=e.parent;return e}getParent(){return this.parent}getActiveRequestedLang(){return this.getRoot().lastUseLanguage}hasTranslationInChain(e){for(let t=this;t;t=t.parent)if(t.store.hasTranslationFor(e))return!0;return!1}chainTranslationChange$(){let e=[];for(let t=this;t;t=t.parent)e.push(t.store.translationChange$);return e.length===1?e[0]:Xe(...e)}get onTranslationChange(){return this.store.translationChange$}get onLangChange(){return this.isRoot?this._onLangChange.asObservable():this.parent?this.parent.onLangChange:ie}get onFallbackLangChange(){return this.isRoot?this._onFallbackLangChange.asObservable():this.parent?this.parent.onFallbackLangChange:ie}get onTranslationRefresh(){if(!this._onTranslationRefresh){let e=Xe(this.onTranslationChange.pipe(ce(t=>t.lang===this.getCurrentLang()||t.lang===this.getFallbackLang())),this.onLangChange,this.onFallbackLangChange).pipe(T(()=>{}));this.isRoot?this._onTranslationRefresh=e:this._onTranslationRefresh=this.parent?Xe(e,this.parent.onTranslationRefresh):e}return this._onTranslationRefresh}constructor(){let e=p({isRoot:!0,fallbackLang:null},l(_c,{optional:!0}));this.parent=e.isRoot?null:l(n,{optional:!0,skipSelf:!0});let t=l(Ce);if(this.isRoot)e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang);else{let r=this.getCurrentLang();r&&this.loadOrExtendLanguage(r)?.pipe(ct(t)).subscribe({error:a=>{console.warn(`@ngx-translate/core: child failed to load "${r}". Cause:`,a)}});let o=this.getFallbackLang();o&&o!==r&&this.loadOrExtendLanguage(o)?.pipe(ct(t)).subscribe({error:a=>{console.warn(`@ngx-translate/core: child failed to load "${o}". Cause:`,a)}})}this.onLangChange.pipe(ct(t)).subscribe(r=>{this.isRoot||this.loadOrExtendLanguage(r.lang)?.pipe(ct(t)).subscribe({error:o=>{console.warn(`@ngx-translate/core: child failed to load "${r.lang}". Cause:`,o)}})}),this.onFallbackLangChange.pipe(ct(t)).subscribe(r=>{this.isRoot||this.loadOrExtendLanguage(r.lang)?.pipe(ct(t)).subscribe({error:o=>{console.warn(`@ngx-translate/core: child failed to load "${r.lang}". Cause:`,o)}})}),t.onDestroy(()=>{this._onLangChange.complete(),this._onFallbackLangChange.complete()})}setFallbackLang(e){if(!this.isRoot)return this.parent.setFallbackLang(e);this._fallbackLang()||this._fallbackLang.set(e);let t=this.loadOrExtendLanguage(e);return Le(t)?(t.pipe(we(1)).subscribe({next:()=>{this._fallbackLang.set(e),this._onFallbackLangChange.next({lang:e,translations:this.store.getTranslations(e)})},error:r=>{console.warn(`@ngx-translate/core: failed to load fallback "${e}". Cause:`,r)}}),t):(this._fallbackLang.set(e),this._onFallbackLangChange.next({lang:e,translations:this.store.getTranslations(e)}),g(this.store.getTranslations(e)))}get isLoading(){return this._isLoading}use(e){if(!this.isRoot)return this.parent.use(e);let t=this._currentLang(),r=this.lastUseLanguage;this.lastUseLanguage=e,this._currentLang()||this._currentLang.set(e);let o=this.loadOrExtendLanguage(e);return Le(o)?(o.pipe(we(1)).subscribe({next:()=>{this.changeLang(e)},error:a=>{this.lastUseLanguage===e&&(this._currentLang.set(t),this.lastUseLanguage=r),console.warn(`@ngx-translate/core: failed to load "${e}". currentLang was NOT changed; remains "${t??"null"}". Cause:`,a)}}),o):(this.changeLang(e),g(this.store.getTranslations(e)))}loadOrExtendLanguage(e){return this.store.hasTranslationFor(e)?g(this.store.getTranslations(e)):this.loadAndCompileTranslations(e)}getTranslations(e){return this.store.getTranslations(e)}changeLang(e){e===this.lastUseLanguage&&(this._currentLang.set(e),this._onLangChange.next({lang:e,translations:this.store.getTranslations(e)}))}getCurrentLang(){return this.isRoot?this._currentLang():this.parent?.getCurrentLang()??null}loadAndCompileTranslations(e){let t=this.loadingTranslations.get(e);if(t)return t;let r=this.currentLoader.getTranslation(e).pipe(T(o=>this.compiler.compileTranslations(o,e)),V(o=>{this.store.setTranslations(e,o,!1),this.loadingTranslations.clearIfOwner(e,r)}),Qe(()=>this.loadingTranslations.clearIfOwner(e,r)),fa({bufferSize:1,refCount:!0}));return this.loadingTranslations.set(e,r),r.pipe(ct(this.destroyRef)).subscribe({error:()=>{}}),r}setTranslation(e,t,r=!1){let o=this.compiler.compileTranslations(t,e);this.store.setTranslations(e,o,r)}setCompiledTranslation(e,t,r=!1){this.store.setTranslations(e,t,r)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,t,r){let o=this.getTextToInterpolate(e,r);if(Ge(o))return this.runInterpolation(o,t);let s=this.getMissingTranslationHandler().handle(p({key:e,translateService:this},t!==void 0&&{interpolateParams:t}));return s!==void 0?s:e}getMissingTranslationHandler(){return this.missingTranslationHandler}getFallbackLang(){return this.isRoot?this._fallbackLang():this.parent?.getFallbackLang()??null}getTextToInterpolate(e,t){if(t){let s=this.store.getTranslationValue(t,e);return s!==void 0?s:this.parent?.getTextToInterpolate(e,t)}let r=this.getCurrentLang(),o=this.getFallbackLang(),a;return r&&(a=this.store.getTranslationValue(r,e)),!Ge(a)&&o&&o!==r&&(a=this.store.getTranslationValue(o,e)),a!==void 0?a:this.parent?.getTextToInterpolate(e)}runInterpolation(e,t){if(Ge(e))return It(e)?this.runInterpolationOnArray(e,t):We(e)?this.runInterpolationOnDict(e,t):this.parser.interpolate(e,t)}runInterpolationOnArray(e,t){return e.map(r=>this.runInterpolation(r,t))}runInterpolationOnDict(e,t){let r={};for(let o in e){let a=this.runInterpolation(e[o],t);a!==void 0&&(r[o]=a)}return r}getParsedResult(e,t,r){return e instanceof Array?this.getParsedResultForArray(e,t,r):this.getParsedResultForKey(e,t,r)}getParsedResultForArray(e,t,r){let o={},a=!1;for(let c of e)o[c]=this.getParsedResultForKey(c,t,r),a=a||Le(o[c]);if(!a)return o;let s=e.map(c=>Jn(o[c]));return mi(s).pipe(T(c=>{let d={};return c.forEach((u,m)=>{d[e[m]]=u}),d}))}get(e,t,r){if(!Ge(e)||!e.length)return g("");let o=r??this.getActiveRequestedLang()??this.getCurrentLang(),a=o?this.loadingTranslations.get(o):void 0;return a?a.pipe(mt(()=>Jn(this.getParsedResult(e,t,r)))):Jn(this.getParsedResult(e,t,r))}getStreamOnTranslationChange(e,t,r){if(!Ge(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return pn(pt(()=>this.get(e,t,r)),this.onTranslationChange.pipe(X(()=>{let o=this.getParsedResult(e,t,r);return Jn(o)})))}stream(e,t,r){if(!Ge(e)||!e.length)throw new Error('Parameter "key" required');let o=r?Xe(this.onLangChange,this.chainTranslationChange$().pipe(ce(a=>a.lang===r))):this.onLangChange;return pn(pt(()=>this.get(e,t,r)),o.pipe(X(()=>{let a=this.getParsedResult(e,t,r);return Jn(a)})))}instant(e,t,r){if(!Ge(e)||e.length===0)return"";r&&!this.hasTranslationInChain(r)&&this.warnUnloadedInstantLang(r);let o=this.getParsedResult(e,t,r);return Le(o)?this.keyToObject(e):o}warnedUnloadedInstantLangs=new Set;warnUnloadedInstantLang(e){let t=this.getRoot();if(t!==this){t.warnUnloadedInstantLang(e);return}this.warnedUnloadedInstantLangs.has(e)||Ae(()=>{this.warnedUnloadedInstantLangs.add(e),console.warn(`@ngx-translate/core: instant() called with lang="${e}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${e}") or setTranslation("${e}", ...) first.`)})}translate(e,t,r){return Bt(()=>{let o=typeof e=="function"?e():e,a=typeof t=="function"?t():t,s=typeof r=="function"?r():r;return this.instant(o,a,s)})}keyToObject(e){return Array.isArray(e)?e.reduce((t,r)=>(t[r]=r,t),{}):e}set(e,t,r=this.getCurrentLang()){this.store.setTranslations(r,Qu(this.store.getTranslations(r),e,fr(t)?this.compiler.compile(t,r):this.compiler.compileTranslations(t,r)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){this.loadingTranslations.clear(e),this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return n.getBrowserLang()}getBrowserCultureLang(){return n.getBrowserCultureLang()}get currentLang(){return this.isRoot?this._currentLang.asReadonly():this.parent.currentLang}get fallbackLang(){return this.isRoot?this._fallbackLang.asReadonly():this.parent.fallbackLang}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();var ke=(()=>{class n{translateService=l(Mt);cachedSignal=null;lastKey=null;lastParams;transform(e,...t){if(!e||!e.length)return e;let r=this.parseArgs(t);return(e!==this.lastKey||!Ho(r,this.lastParams))&&(this.cachedSignal=this.translateService.translate(e,r),this.lastKey=e,this.lastParams=r),this.cachedSignal()}parseArgs(e){if(!(!Ge(e[0])||!e.length)){if(fr(e[0])&&e[0].length){let t=e[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{return JSON.parse(t)}catch(r){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}if(We(e[0]))return e[0]}}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=wi({name:"translate",type:n,pure:!1});static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();function Dc(n){return/^class\s/.test(Function.prototype.toString.call(n))}function vc(n,i){return Dc(i)?{provide:n,useClass:i}:{provide:n,useFactory:i}}function wc(n={}){return th($(p({},n),{isRoot:!0}))}function pr(n,i,e,t,r){if(i===void 0)return vc(n,e);if(typeof i=="function"){if(Dc(i)){let o=i.name||"YourClass";console.warn(`@ngx-translate/core: "${t}" received a bare class (${o}); auto-wrapping with ${r}(). For clarity, prefer ${t}: ${r}(${o}).`)}return vc(n,i)}return i}function th(n){let i=[],e=pr(St,n.loader,Zu,"loader","provideTranslateLoader"),t=pr(ti,n.compiler,Yu,"compiler","provideTranslateCompiler"),r=pr(ni,n.parser,eh,"parser","provideTranslateParser"),o=pr(mr,n.missingTranslationHandler,Ku,"missingTranslationHandler","provideMissingTranslationHandler");i.push(e,t,r,o),i.push(yc);let a={fallbackLang:n.fallbackLang??null,lang:n.lang,isRoot:n.isRoot};return i.push({provide:_c,useValue:a}),i.push({provide:Mt,useClass:Mt}),i}var Go=class{http=l(Wt);getTranslation(i){return this.http.get(`./i18n/${i}.json`)}},Cc={providers:[Bo(pc),mc(),ho(po()),wc({loader:{provide:St,useClass:Go}})]};var nh=new f("cdk-dir-doc",{providedIn:"root",factory:()=>l(S)}),ih=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ec(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?ih.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Wo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=P("ltr");change=new ve;constructor(){let e=l(nh,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ec(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();var rh=["*"];var oh=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ah=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],sh=new f("MAT_CARD_CONFIG"),Ic=(()=>{class n{appearance;constructor(){let e=l(sh,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&te("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:rh,decls:1,vars:0,template:function(t,r){t&1&&(se(),U(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Sc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Mc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Rc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),Ac=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&te("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})(),Tc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ah,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(se(oh),U(0),Ne(1,"div",0),U(2,1),Ue(),U(3,2))},encapsulation:2,changeDetection:0})}return n})();var xc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return n})();var Fc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[_e]})}return n})();function ii(n){return n.buttons===0||n.detail===0}function ri(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var qo;function Oc(){if(qo==null){let n=typeof document<"u"?document.head:null;qo=!!(n&&(n.createShadowRoot||n.attachShadow))}return qo}function Ko(n){if(Oc()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ie(n){return n.composedPath?n.composedPath()[0]:n.target}var Yo;try{Yo=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Yo=!1}var Se=(()=>{class n{_platformId=l(et);isBrowser=this._platformId?Si(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Yo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var oi;function kc(){if(oi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>oi=!0}))}finally{oi=oi||!1}return oi}function on(n){return kc()?n:!!n.capture}function lt(n){return n instanceof ee?n.nativeElement:n}var Pc=new f("cdk-input-modality-detector-options"),Lc={ignoreKeys:[18,17,224,91,16]},Nc=650,Zo={passive:!0,capture:!0},Uc=(()=>{class n{_platform=l(Se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new oe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ie(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Nc||(this._modality.next(ii(e)?"keyboard":"mouse"),this._mostRecentTarget=Ie(e))};_onTouchstart=e=>{if(ri(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ie(e)};constructor(){let e=l(W),t=l(S),r=l(Pc,{optional:!0});if(this._options=p(p({},Lc),r),this.modalityDetected=this._modality.pipe(ga(1)),this.modalityChanged=this.modalityDetected.pipe(pa()),this._platform.isBrowser){let o=l(tt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Zo),o.listen(t,"mousedown",this._onMousedown,Zo),o.listen(t,"touchstart",this._onTouchstart,Zo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ai=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(ai||{}),jc=new f("cdk-focus-monitor-default-options"),vr=on({passive:!0,capture:!0}),si=(()=>{class n{_ngZone=l(W);_platform=l(Se);_inputModalityDetector=l(Uc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(S);_stopInputModalityDetector=new O;constructor(){let e=l(jc,{optional:!0});this._detectionMode=e?.detectionMode||ai.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ie(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=lt(e);if(!this._platform.isBrowser||r.nodeType!==1)return g();let o=Ko(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new O,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=lt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=lt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ai.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ai.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Nc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ie(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,vr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,vr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var br=new WeakMap,dt=(()=>{class n{_appRef;_injector=l(J);_environmentInjector=l(ge);load(e){let t=this._appRef=this._appRef||this._injector.get(bn),r=br.get(t);r||(r={loaders:new Set,refs:[]},br.set(t,r),t.onDestroy(()=>{br.get(t)?.refs.forEach(o=>o.destroy()),br.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(za(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),yr;function lh(){if(yr===void 0&&(yr=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(yr=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return yr}function an(n){return lh()?.createHTML(n)||n}var zc=new Set,Rt,Xo=(()=>{class n{_platform=l(Se);_nonce=l(Ft,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):uh}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&dh(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dh(n,i){if(!zc.has(n))try{Rt||(Rt=document.createElement("style"),i&&Rt.setAttribute("nonce",i),Rt.setAttribute("type","text/css"),document.head.appendChild(Rt)),Rt.sheet&&(Rt.sheet.insertRule(`@media ${n} {body{ }}`,0),zc.add(n))}catch(e){console.error(e)}}function uh(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var hh=200,_r=class{_letterKeyStream=new O;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new O;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:hh;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(V(e=>this._pressedLetters.push(e)),ha(i),ce(()=>this._pressedLetters.length>0),T(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function $c(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Dr=class{_items;_activeItemIndex=P(-1);_activeItem=P(null);_wrap=!1;_typeaheadSubscription=At.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof gn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ci(i)&&(this._effectRef=xt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new O;change=new O;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new _r(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||$c(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ci(this._items)?this._items():this._items instanceof gn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var ci=class extends Dr{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Qo={},li=class n{_appId=l(vn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Qo.hasOwnProperty(i)||(Qo[i]=0),`${i}${e?n._infix+"-":""}${Qo[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})};var ph=new f("MATERIAL_ANIMATIONS"),Hc=null;function mh(){return l(ph,{optional:!0})?.animationsDisabled||l(vi,{optional:!0})==="NoopAnimations"?"di-disabled":(Hc??=l(Xo).matchMedia("(prefers-reduced-motion)").matches,Hc?"reduced-motion":"enabled")}function sn(){return mh()!=="enabled"}var De=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(De||{}),Jo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=De.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Vc=on({passive:!0,capture:!0}),ea=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Vc)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Vc)))}_delegateEventHandler=i=>{let e=Ie(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},di={enterDuration:225,exitDuration:150},fh=800,Gc=on({passive:!0,capture:!0}),Wc=["mousedown","touchstart"],qc=["mouseup","mouseleave","touchend","touchcancel"],gh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),wr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ea;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=lt(t)),o&&o.get(dt).load(gh)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},di),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||vh(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),C=m.transitionProperty,K=m.transitionDuration,N=C==="none"||K==="0s"||K==="0s, 0s"||r.width===0&&r.height===0,x=new Jo(this,u,t,N);u.style.transform="scale3d(1, 1, 1)",x.state=De.FADING_IN,t.persistent||(this._mostRecentTransientRipple=x);let _=null;return!N&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let M=()=>{_&&(_.fallbackTimer=null),clearTimeout(Q),this._finishRippleTransition(x)},k=()=>this._destroyRipple(x),Q=setTimeout(k,d+100);u.addEventListener("transitionend",M),u.addEventListener("transitioncancel",k),_={onTransitionEnd:M,onTransitionCancel:k,fallbackTimer:Q}}),this._activeRipples.set(x,_),(N||!d)&&this._finishRippleTransition(x),x}fadeOutRipple(i){if(i.state===De.FADING_OUT||i.state===De.HIDDEN)return;let e=i.element,t=p(p({},di),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=De.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=lt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Wc.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{qc.forEach(e=>{this._triggerElement.addEventListener(e,this,Gc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===De.FADING_IN?this._startFadeOutTransition(i):i.state===De.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=De.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=De.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ii(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fh;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ri(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===De.VISIBLE||i.config.terminateOnPointerUp&&i.state===De.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Wc.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(qc.forEach(e=>i.removeEventListener(e,this,Gc)),this._pointerUpEventsRegistered=!1))}};function vh(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Cr=new f("mat-ripple-global-options");var bh={capture:!0},yh=["focus","mousedown","mouseenter","touchstart"],ta="mat-ripple-loader-uninitialized",na="mat-ripple-loader-class-name",Kc="mat-ripple-loader-centered",Er="mat-ripple-loader-disabled",Ir=(()=>{class n{_document=l(S);_animationsDisabled=sn();_globalRippleOptions=l(Cr,{optional:!0});_platform=l(Se);_ngZone=l(W);_injector=l(J);_eventCleanups;_hosts=new Map;constructor(){let e=l(tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>yh.map(t=>e.listen(this._document,t,this._onInteraction,bh)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ta,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(na))&&e.setAttribute(na,t.className||""),t.centered&&e.setAttribute(Kc,""),t.disabled&&e.setAttribute(Er,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Er,""):e.removeAttribute(Er)}_onInteraction=e=>{let t=Ie(e);if(t instanceof HTMLElement){let r=t.closest(`[${ta}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(na)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??di.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??di.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Er),rippleConfig:{centered:e.hasAttribute(Kc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new wr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(ta)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var _h=["mat-icon-button",""],Dh=["*"],wh=new f("MAT_BUTTON_CONFIG");function Yc(n){return n==null?void 0:Cn(n)}var ia=(()=>{class n{_elementRef=l(ee);_ngZone=l(W);_animationsDisabled=sn();_config=l(wh,{optional:!0});_focusMonitor=l(si);_cleanupClick;_renderer=l(_i);_rippleLoader=l(Ir);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(dt).load(ui);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),nt(r.color?"mat-"+r.color:""),te("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re],ariaDisabled:[2,"aria-disabled","ariaDisabled",re],disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],tabIndex:[2,"tabIndex","tabIndex",Yc],_tabindex:[2,"tabindex","_tabindex",Yc]}})}return n})(),ra=(()=>{class n extends ia{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Lt],attrs:_h,ngContentSelectors:Dh,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(se(),jt(0,"span",0),U(1),jt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Sr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[_e]})}return n})();var Ch=["matButton",""],Eh=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ih=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mr=(()=>{class n extends ia{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Sh(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Zc.get(this._appearance):null,o=Zc.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Lt],attrs:Ch,ngContentSelectors:Ih,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(se(Eh),jt(0,"span",0),U(1),Ne(2,"span",1),U(3,1),Ue(),U(4,2),jt(5,"span",2)(6,"span",3)),t&2&&te("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Sh(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[Sr,_e]})}return n})();function Xc(n){return Error(`Unable to find icon with the name "${n}"`)}function Mh(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Qc(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Jc(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var qe=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Ar=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new qe(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(de.HTML,r);if(!a)throw Jc(r);let s=an(a);return this._addSvgIconConfig(e,t,new qe("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new qe(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(de.HTML,t);if(!o)throw Jc(t);let a=an(o);return this._addSvgIconSetConfig(e,new qe("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(de.RESOURCE_URL,e);if(!t)throw Qc(e);let r=this._cachedIconsByUrl.get(t);return r?g(Rr(r)):this._loadSvgIconFromConfig(new qe(e,null)).pipe(V(o=>this._cachedIconsByUrl.set(t,o)),T(o=>Rr(o)))}getNamedSvgIcon(e,t=""){let r=el(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):pi(Xc(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?g(Rr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(T(t=>Rr(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return g(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(mn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(de.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),g(null)})));return mi(o).pipe(T(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Xc(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(V(t=>e.svgText=t),T(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?g(null):this._fetchIcon(e).pipe(V(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(an("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(an("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Mh();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(de.RESOURCE_URL,t);if(!a)throw Qc(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(T(d=>an(d)),Qe(()=>this._inProgressUrlFetches.delete(a)),ma());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(el(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Rh(o)?new qe(o.url,null,o.options):new qe(o,null)}}static \u0275fac=function(t){return new(t||n)(v(Wt,8),v(On),v(S,8),v(gt))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Rr(n){return n.cloneNode(!0)}function el(n,i){return n+":"+i}function Rh(n){return!!(n.url&&n.options)}var Ah=["*"],Th=new f("MAT_ICON_DEFAULT_OPTIONS"),xh=new f("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(S),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),tl=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Fh=tl.map(n=>`[${n}]`).join(", "),Oh=/^url\(['"]?#(.*?)['"]?\)$/,ln=(()=>{class n{_elementRef=l(ee);_iconRegistry=l(Ar);_location=l(xh);_errorHandler=l(gt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=At.EMPTY;constructor(){let e=l(new Yr("aria-hidden"),{optional:!0}),t=l(Th,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Fh),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)tl.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(Oh):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(we(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),nt(r.color?"mat-"+r.color:""),te("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",re],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ah,decls:1,vars:0,template:function(t,r){t&1&&(se(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[_e]})}return n})();var nl=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kh=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ph=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Lh(n,i){n&1&&(y(0,"span",3),U(1,1),w())}function Nh(n,i){n&1&&(y(0,"span",6),U(1,2),w())}var Uh=["*"];var jh=new f("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),il=new f("MatChipAvatar"),rl=new f("MatChipTrailingIcon"),ol=new f("MatChipEdit"),al=new f("MatChipRemove"),cl=new f("MatChip"),ll=(()=>{class n{_elementRef=l(ee);_parentChip=l(cl);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(dt).load(ui),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(Re("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),te("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",re],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Cn(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Bh=(()=>{class n extends ll{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=H({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&vt("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Re("tabindex",r._getTabindex()),te("mdc-evolution-chip__action--presentational",!1))},features:[Lt]})}return n})();var hi=(()=>{class n{_changeDetectorRef=l(bt);_elementRef=l(ee);_tagName=l(Ua);_ngZone=l(W);_focusMonitor=l(si);_globalRippleOptions=l(Cr,{optional:!0});_document=l(S);_onFocus=new O;_onBlur=new O;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=sn();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(li).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ve;destroyed=new ve;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(Ir);_injector=l(J);constructor(){let e=l(dt);e.load(ui),e.load(Bc),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Xe(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&wn(o,il,5)(o,ol,5)(o,rl,5)(o,al,5)(o,il,5)(o,rl,5)(o,ol,5)(o,al,5),t&2){let a;ue(a=he())&&(r.leadingIcon=a.first),ue(a=he())&&(r.editIcon=a.first),ue(a=he())&&(r.trailingIcon=a.first),ue(a=he())&&(r.removeIcon=a.first),ue(a=he())&&(r._allLeadingIcons=a),ue(a=he())&&(r._allTrailingIcons=a),ue(a=he())&&(r._allEditIcons=a),ue(a=he())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&La(Bh,5),t&2){let o;ue(o=he())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&vt("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Pa("id",r.id),Re("role",r.role)("aria-label",r.ariaLabel),nt("mat-"+(r.color||"primary")),te("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",re],highlighted:[2,"highlighted","highlighted",re],disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Kr([{provide:cl,useExisting:n}])],ngContentSelectors:Ph,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(se(kh),Y(0,"span",0),y(1,"span",1)(2,"span",2),yn(3,Lh,2,0,"span",3),y(4,"span",4),U(5),Y(6,"span",5),w()()(),yn(7,Nh,2,0,"span",6)),t&2&&(R(3),_n(r.leadingIcon?3:-1),R(4),_n(r._hasTrailingIcon()?7:-1))},dependencies:[ll],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Tr=(()=>{class n{_elementRef=l(ee);_changeDetectorRef=l(bt);_dir=l(Wo,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new O;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new gn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Tt(null),X(()=>Xe(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Tt(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new ci(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(le(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(le(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Tt(null),le(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(le(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&wn(o,hi,5),t&2){let a;ue(a=he())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&vt("keydown",function(a){return r._handleKeydown(a)}),t&2&&Re("role",r.role)},inputs:{disabled:[2,"disabled","disabled",re],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Cn(e)]},ngContentSelectors:Uh,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(se(),Ne(0,"div",0),U(1),Ue())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var xr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({providers:[nl,{provide:jh,useValue:{separatorKeyCodes:[13]}}],imports:[Sr,_e]})}return n})();function zh(n,i){if(n&1&&(y(0,"mat-chip"),A(1),w()),n&2){let e=i.$implicit;R(),j(e)}}function $h(n,i){if(n&1&&(y(0,"a",6),Y(1,"mat-icon",7),A(2),B(3,"translate"),w()),n&2){let e=qr();Dn("href",e.project.repoUrl,Ta),R(2),it(" ",z(3,2,"HERO.VIEW_GITHUB")," ")}}var Fr=class n{project;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-project-card"]],inputs:{project:"project"},decls:19,vars:9,consts:[[1,"project-card","mat-elevation-z4"],["mat-card-avatar","",1,"header-icon"],["color","primary"],[1,"card-content"],["aria-label","Tecnolog\xEDas"],["align","end"],["mat-button","","color","primary","target","_blank",3,"href"],["svgIcon","github"]],template:function(e,t){e&1&&(y(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"mat-icon",2),A(4),w()(),y(5,"mat-card-title"),A(6),B(7,"translate"),w(),y(8,"mat-card-subtitle"),A(9),w()(),y(10,"mat-card-content",3)(11,"p"),A(12),B(13,"translate"),w(),y(14,"mat-chip-set",4),Nt(15,zh,2,1,"mat-chip",null,Ei),w()(),y(17,"mat-card-actions",5),yn(18,$h,4,4,"a",6),w()()),e&2&&(R(4),j(t.project.icon),R(2),j(z(7,5,t.project.title)),R(3),j(t.project.technologies),R(3),j(z(13,7,t.project.description)),R(3),Ut(t.project.tags),R(3),_n(t.project.repoUrl?18:-1))},dependencies:[Te,Fc,Ic,Ac,xc,Mc,Tc,Rc,Sc,cn,Mr,ut,ln,xr,hi,Tr,ke],styles:[".project-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;transition:transform .3s ease,box-shadow .3s ease;margin-bottom:20px}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0003!important}.header-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#3f51b51a;border-radius:50%}.card-content[_ngcontent-%COMP%]{flex-grow:1;margin-top:15px}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;margin-bottom:20px}mat-chip-set[_ngcontent-%COMP%]{margin-top:15px}"]})};var un=class n{constructor(){}getProjects(){return[{id:1,title:"PROJECTS.LOGISTICS.TITLE",description:"PROJECTS.LOGISTICS.DESC",technologies:"Angular, Ionic, Supabase, Mapbox API",tags:["Angular 21","Mobile","Routing"],repoUrl:"https://github.com/Lusandre",icon:"local_shipping"},{id:2,title:"PROJECTS.RENTAPRO.TITLE",description:"PROJECTS.RENTAPRO.DESC",technologies:"Electron, NestJS",tags:["Desktop","Backend"],icon:"desktop_windows"},{id:3,title:"PROJECTS.MARKETPLACE.TITLE",description:"PROJECTS.MARKETPLACE.DESC",technologies:"Angular | Node.js | MongoDB",tags:["Angular","Node.js","MongoDB","Express"],icon:"shopping_cart"}]}getSkills(){return["Angular","Ionic","TypeScript","Node.js","NestJS","PostgreSQL","Supabase","MongoDB","Electron","Mapbox API","Google Maps API","HTML/CSS"]}static \u0275fac=function(e){return new(e||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hh=(n,i)=>i.id;function Vh(n,i){if(n&1&&Y(0,"app-project-card",3),n&2){let e=i.$implicit;Dn("project",e)}}function Gh(n,i){n&1&&(y(0,"p",4),A(1,"Cargando proyectos..."),w())}var Or=class n{portfolioService=l(un);projects=P([]);ngOnInit(){this.projects.set(this.portfolioService.getProjects())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-projects"]],decls:8,vars:4,consts:[[1,"projects-section"],[1,"section-title"],[1,"projects-grid"],[3,"project"],[2,"text-align","center","grid-column","1 / -1"]],template:function(e,t){e&1&&(y(0,"section",0)(1,"h2",1),A(2),B(3,"translate"),w(),y(4,"div",2),Nt(5,Vh,1,1,"app-project-card",3,Hh,!1,Gh,2,0,"p",4),w()()),e&2&&(R(2),j(z(3,2,"PROJECTS.SECTION_TITLE")),R(3),Ut(t.projects()))},dependencies:[Te,Fr,ke],styles:[".projects-section[_ngcontent-%COMP%]{padding:40px 5%;max-width:1200px;margin:0 auto}.section-title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:30px;text-align:center;color:#3f51b5}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:25px}"]})};var Wh=["*",[["mat-toolbar-row"]]],qh=["*","mat-toolbar-row"],Kh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),ul=(()=>{class n{_elementRef=l(ee);_platform=l(Se);_document=l(S);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&wn(o,Kh,5),t&2){let a;ue(a=he())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(nt(r.color?"mat-"+r.color:""),te("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:qh,decls:2,vars:0,template:function(t,r){t&1&&(se(Wh),U(0),U(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var hl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[_e]})}return n})();var kr=class n{platformId=l(et);translate=l(Mt);isDarkMode=P(!1);currentLang=P("es");constructor(){xt(()=>{Si(this.platformId)&&(this.isDarkMode()?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"))})}toggleTheme(){this.isDarkMode.update(i=>!i)}toggleLanguage(){let i=this.currentLang()==="es"?"en":"es";this.currentLang.set(i),this.translate.use(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-header"]],decls:16,vars:4,consts:[["color","primary",1,"header-toolbar","mat-elevation-z4"],[1,"logo"],[1,"spacer"],[1,"nav-links"],["mat-icon-button","","aria-label","Cambiar idioma",3,"click"],[1,"lang-text"],["mat-icon-button","","aria-label","Cambiar tema",3,"click"]],template:function(e,t){e&1&&(y(0,"mat-toolbar",0)(1,"span",1),A(2,"Lusandre"),y(3,"span"),A(4,".dev"),w()(),Y(5,"span",2),y(6,"div",3)(7,"button",4),vt("click",function(){return t.toggleLanguage()}),y(8,"mat-icon"),A(9,"language"),w(),y(10,"span",5),A(11),B(12,"uppercase"),w()(),y(13,"button",6),vt("click",function(){return t.toggleTheme()}),y(14,"mat-icon"),A(15),w()()()()),e&2&&(R(11),it(" ",z(12,2,t.currentLang())," "),R(4),j(t.isDarkMode()?"light_mode":"dark_mode"))},dependencies:[hl,ul,cn,ra,ut,ln,Xr],styles:[".header-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;padding:0 16px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.logo[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;letter-spacing:1px;white-space:nowrap}.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff4081}@media(max-width:600px){.logo[_ngcontent-%COMP%]{font-size:1.2rem}}.lang-text[_ngcontent-%COMP%]{font-size:.5rem;font-weight:700;margin-left:-7px}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}@media(max-width:600px){.nav-links[_ngcontent-%COMP%]{gap:0}.nav-links[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:none}.nav-links[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]{min-width:48px;padding:0 8px}}"]})};var Pr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-hero"]],decls:33,vars:21,consts:[[1,"hero-section"],[1,"hero-content"],[1,"greeting"],[1,"name"],[1,"subtitle"],[1,"description"],[1,"actions"],["mat-raised-button","","color","primary","href","mailto:lusandremarcano@gmail.com",1,"action-btn"],["mat-raised-button","","color","primary","href","https://github.com/Lusandre","target","_blank",1,"action-btn"],["svgIcon","github"],["mat-raised-button","","color","primary","href","https://linkedin.com/in/lusandre-marcano","target","_blank",1,"action-btn"],["svgIcon","linkedin"],[1,"btn-text"],["mat-raised-button","","color","accent","href","Lusandre_marcano_cv.pdf","download","Lusandre_marcano_cv.pdf",1,"action-btn"]],template:function(e,t){e&1&&(y(0,"section",0)(1,"div",1)(2,"p",2),A(3),B(4,"translate"),w(),y(5,"h1",3),A(6,"Lusandre Marcano."),w(),y(7,"h2",4),A(8),B(9,"translate"),w(),y(10,"p",5),A(11),B(12,"translate"),w(),y(13,"div",6)(14,"a",7)(15,"mat-icon"),A(16,"mail"),w(),A(17),B(18,"translate"),w(),y(19,"a",8),Y(20,"mat-icon",9),A(21),B(22,"translate"),w(),y(23,"a",10),Y(24,"mat-icon",11),y(25,"span",12),A(26),B(27,"translate"),w()(),y(28,"a",13)(29,"mat-icon"),A(30,"picture_as_pdf"),w(),A(31),B(32,"translate"),w()()()()),e&2&&(R(3),j(z(4,7,"HERO.GREETING")),R(5),j(z(9,9,"HERO.SUBTITLE")),R(3),j(z(12,11,"HERO.DESC")),R(6),it(" ",z(18,13,"HERO.CONTACT")," "),R(4),it(" ",z(22,15,"HERO.VIEW_GITHUB")," "),R(5),j(z(27,17,"HERO.VIEW_LINKEDLN")),R(5),it(" ",z(32,19,"HERO.DOWNLOAD_CV")," "))},dependencies:[cn,Mr,ut,ln,ke],styles:[".hero-section[_ngcontent-%COMP%]{min-height:80vh;display:flex;align-items:center;padding:0 5%;max-width:1200px;margin:0 auto}.hero-content[_ngcontent-%COMP%]{max-width:800px}.greeting[_ngcontent-%COMP%]{font-size:1.2rem;color:#3f51b5;font-weight:500;margin-bottom:10px}.name[_ngcontent-%COMP%]{font-size:clamp(3rem,5vw,5rem);font-weight:700;margin:0;line-height:1.1}.subtitle[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3.5rem);font-weight:700;color:#757575;margin:10px 0 20px;line-height:1.1}.description[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#616161;max-width:600px;margin-bottom:30px}.actions[_ngcontent-%COMP%]{display:flex;gap:15px;flex-wrap:wrap}@media(max-width:600px){.actions[_ngcontent-%COMP%]{flex-direction:column;width:100%}}.actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{padding:5px 20px;font-size:1rem}@media(max-width:600px){.actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{width:100%;padding:10px 20px}}"]})};var Lr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-footer"]],decls:7,vars:6,consts:[[1,"footer"],[1,"tech-stack"]],template:function(e,t){e&1&&(Ne(0,"footer",0)(1,"p"),A(2),B(3,"translate"),Ue(),Ne(4,"p",1),A(5),B(6,"translate"),Ue()()),e&2&&(R(2),j(z(3,2,"FOOTER.DESIGNED_BY")),R(3),j(z(6,4,"FOOTER.BUILT_WITH")))},dependencies:[ut,ke],styles:[".footer[_ngcontent-%COMP%]{text-align:center;padding:40px 20px;background-color:#f5f5f5;margin-top:60px;transition:background-color .3s ease,border-color .3s ease;border-top:1px solid transparent}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;color:#616161;transition:color .3s ease}.footer[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%]{font-size:.85rem;font-style:italic}.dark-theme[_nghost-%COMP%]   .footer[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{background-color:#0f172a;border-top:1px solid #334155}.dark-theme[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#94a3b8}.dark-theme[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%]{color:#64748b}"]})};function Zh(n,i){if(n&1&&(y(0,"mat-chip",4),A(1),w()),n&2){let e=i.$implicit;R(),j(e)}}var Nr=class n{skills=[];portfolioService=l(un);ngOnInit(){this.skills=this.portfolioService.getSkills()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-skills"]],decls:8,vars:3,consts:[[1,"skills-section"],[1,"section-title"],[1,"chips-container"],["aria-label","Habilidades T\xE9cnicas"],[1,"custom-chip"]],template:function(e,t){e&1&&(y(0,"section",0)(1,"h2",1),A(2),B(3,"translate"),w(),y(4,"div",2)(5,"mat-chip-set",3),Nt(6,Zh,2,1,"mat-chip",4,Ei),w()()()),e&2&&(R(2),j(z(3,1,"PROJECTS.SKILL_SECTION_TITLE")),R(4),Ut(t.skills))},dependencies:[Te,xr,hi,Tr,ke],styles:[".skills-section[_ngcontent-%COMP%]{padding:40px 5%;max-width:1200px;margin:0 auto;text-align:center}.section-title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:30px;color:#3f51b5}.chips-container[_ngcontent-%COMP%]{display:flex;justify-content:center;max-width:800px;margin:0 auto}.custom-chip[_ngcontent-%COMP%]{padding:8px 12px;font-size:1rem;font-weight:500}"]})};var Ur=class n{title=P("portafolio-lusandre");translate=l(Mt);matIconRegistry=l(Ar);domSanitizer=l(On);constructor(){this.translate.use("es"),this.matIconRegistry.addSvgIcon("github",this.domSanitizer.bypassSecurityTrustResourceUrl("github.svg")),this.matIconRegistry.addSvgIcon("linkedin",this.domSanitizer.bypassSecurityTrustResourceUrl("linkedin.svg"))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-root"]],decls:7,vars:0,template:function(e,t){e&1&&(Y(0,"app-header"),y(1,"main"),Y(2,"app-hero")(3,"app-skills")(4,"app-projects"),w(),Y(5,"app-footer")(6,"router-outlet"))},dependencies:[Yn,Te,Or,kr,Pr,Lr,Nr],encapsulation:2})};oo(Ur,Cc).catch(n=>console.error(n));
