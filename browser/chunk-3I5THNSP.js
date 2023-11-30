import{c as N,e as O,g as k}from"./chunk-NO5WRTDL.js";import{a as p,d as D,e as T,g as _}from"./chunk-ZIU3LM6C.js";import{b as F,c as H}from"./chunk-TQEIIVVC.js";import{a as v}from"./chunk-LF5XB4YN.js";import{e as w}from"./chunk-FP7EQKGB.js";var I=new WeakMap,C=(e,o,t,s=0,n=!1)=>{I.has(e)!==t&&(t?W(e,o,s,n):z(e,o))},G=e=>e===e.getRootNode().activeElement,W=(e,o,t,s=!1)=>{let n=o.parentNode,i=o.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,s&&(i.disabled=!0),n.appendChild(i),I.set(e,i);let a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},z=(e,o)=>{let t=I.get(e);t&&(I.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},q=50,j=(e,o,t)=>{if(!t||!o)return()=>{};let s=a=>{G(o)&&C(e,o,a)},n=()=>C(e,o,!1),i=()=>s(!0),c=()=>s(!1);return D(t,"ionScrollStart",i),D(t,"ionScrollEnd",c),o.addEventListener("blur",n),()=>{T(t,"ionScrollStart",i),T(t,"ionScrollEnd",c),o.removeEventListener("blur",n)}},B="input, textarea, [no-blur], [contenteditable]",J=()=>{let e=!0,o=!1,t=document,s=()=>{o=!0},n=()=>{e=!0},i=c=>{if(o){o=!1;return}let a=t.activeElement;if(!a||a.matches(B))return;let f=c.target;f!==a&&(f.matches(B)||f.closest(B)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return D(t,"ionScrollStart",s),t.addEventListener("focusin",n,!0),t.addEventListener("touchend",i,!1),()=>{T(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",n,!0),t.removeEventListener("touchend",i,!1)}},Q=.3,V=(e,o,t,s)=>{var n;let i=(n=e.closest("ion-item,[ion-item]"))!==null&&n!==void 0?n:e;return X(i.getBoundingClientRect(),o.getBoundingClientRect(),t,s)},X=(e,o,t,s)=>{let n=e.top,i=e.bottom,c=o.top,a=Math.min(o.bottom,s-t),f=c+15,S=a-q-i,d=f-n,l=Math.round(S<0?-S:d>0?-d:0),m=Math.min(l,n-c),P=Math.abs(m)/Q,r=Math.min(400,Math.max(150,P));return{scrollAmount:m,scrollDuration:r,scrollPadding:t,inputSafeY:-(n-f)+4}},U="$ionPaddingTimer",K=(e,o,t)=>{let s=e[U];s&&clearTimeout(s),o>0?e.style.setProperty("--keyboard-offset",`${o}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},Y=(e,o,t)=>{let s=()=>{o&&K(o,0,t)};e.addEventListener("focusout",s,{once:!0})},A=0,x="data-ionic-skip-scroll-assist",Z=(e,o,t,s,n,i,c,a=!1)=>{let f=i&&(c===void 0||c.mode===F.None),u=!1,S=v!==void 0?v.innerHeight:0,d=h=>{if(u===!1){u=!0;return}$(e,o,t,s,h.detail.keyboardHeight,f,a,S,!1)},l=()=>{u=!1,v===null||v===void 0||v.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)},m=()=>w(void 0,null,function*(){if(o.hasAttribute(x)){o.removeAttribute(x);return}$(e,o,t,s,n,f,a,S),v===null||v===void 0||v.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",l,!0)});return e.addEventListener("focusin",m,!0),()=>{e.removeEventListener("focusin",m,!0),v===null||v===void 0||v.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)}},M=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},$=(e,o,t,s,n,i,c=!1,a=0,f=!0)=>w(void 0,null,function*(){if(!t&&!s)return;let u=V(e,t||s,n,a);if(t&&Math.abs(u.scrollAmount)<4){M(o),i&&t!==null&&(K(t,A),Y(o,t,()=>A=0));return}if(C(e,o,!0,u.inputSafeY,c),M(o),_(()=>e.click()),i&&t&&(A=u.scrollPadding,K(t,A)),typeof window<"u"){let S,d=()=>w(void 0,null,function*(){S!==void 0&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",d),t&&(yield k(t,0,u.scrollAmount,u.scrollDuration)),C(e,o,!1,u.inputSafeY),M(o),i&&Y(o,t,()=>A=0)}),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",d)};if(t){let m=yield N(t),h=m.scrollHeight-m.clientHeight;if(f&&u.scrollAmount>h-m.scrollTop){o.type==="password"?(u.scrollAmount+=q,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",d),S=setTimeout(d,1e3);return}}d()}}),E=!0,ne=(e,o)=>w(void 0,null,function*(){let t=document,s=o==="ios",n=o==="android",i=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",s),f=e.getBoolean("inputBlurring",s),u=e.getBoolean("scrollPadding",!0),S=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,l=new WeakMap,m=yield H.getResizeMode(),h=r=>w(void 0,null,function*(){yield new Promise(g=>p(r,g));let y=r.shadowRoot||r,L=y.querySelector("input")||y.querySelector("textarea"),b=O(r),R=b?null:r.closest("ion-footer");if(!L)return;if(b&&a&&!d.has(r)){let g=j(r,L,b);d.set(r,g)}if(!(L.type==="date"||L.type==="datetime-local")&&(b||R)&&c&&!l.has(r)){let g=Z(r,L,b,R,i,u,m,n);l.set(r,g)}}),P=r=>{if(a){let y=d.get(r);y&&y(),d.delete(r)}if(c){let y=l.get(r);y&&y(),l.delete(r)}};f&&E&&J();for(let r of S)h(r);t.addEventListener("ionInputDidLoad",r=>{h(r.detail)}),t.addEventListener("ionInputDidUnload",r=>{P(r.detail)})});export{ne as startInputShims};
