import{c as $e,e as z}from"./chunk-FP7EQKGB.js";var n={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1};var j="app";var ns=$e({});var D,Ie,I,st,nt=0,we=!1,F=!1,oe=!1,v=!1,de=null,K=0,U=!1,is={isDev:!!n.isDev,isBrowser:!0,isServer:!1,isTesting:!!n.isTesting};var T=(e,t="")=>{if(n.profile&&performance.mark){let s=`st:${e}:${t}:${nt++}`;return performance.mark(s),()=>performance.measure(`[Stencil] ${e}() <${t}>`,s)}else return()=>{}},ot=(e,t)=>n.profile&&performance.mark?(performance.getEntriesByName(e,"mark").length===0&&performance.mark(e),()=>{performance.getEntriesByName(t,"measure").length===0&&performance.measure(t,e)}):()=>{};var it="r",lt="o",rt="s",at="t",J="s-id",fe="sty-id",ue="c-id";var ct="slot-fb{display:contents}slot-fb[hidden]{display:none}",pe="http://www.w3.org/1999/xlink",$t=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],he={},dt="http://www.w3.org/2000/svg",ft="http://www.w3.org/1999/xhtml",ut=e=>e!=null,ie=e=>(e=typeof e,e==="object"||e==="function");function pt(e){var t,s,o;return(o=(s=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&o!==void 0?o:void 0}var Ee=(e,t,...s)=>{let o=null,l=null,i=null,c=!1,a=!1,r=[],$=f=>{for(let u=0;u<f.length;u++)o=f[u],Array.isArray(o)?$(o):o!=null&&typeof o!="boolean"&&((c=typeof e!="function"&&!ie(o))?o=String(o):n.isDev&&typeof e!="function"&&o.$flags$===void 0&&M(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`),c&&a?r[r.length-1].$text$+=o:r.push(c?w(null,o):o),a=c)};if($(s),t&&(n.isDev&&e==="input"&&yt(t),n.vdomKey&&t.key&&(l=t.key),n.slotRelocation&&t.name&&(i=t.name),n.vdomClass)){let f=t.className||t.class;f&&(t.class=typeof f!="object"?f:Object.keys(f).filter(u=>f[u]).join(" "))}if(n.isDev&&r.some(Z)&&M(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`),n.vdomFunctional&&typeof e=="function")return e(t===null?{}:t,r,gt);let d=w(e,null);return d.$attrs$=t,r.length>0&&(d.$children$=r),n.vdomKey&&(d.$key$=l),n.slotRelocation&&(d.$name$=i),d},w=(e,t)=>{let s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.vdomAttribute&&(s.$attrs$=null),n.vdomKey&&(s.$key$=null),n.slotRelocation&&(s.$name$=null),s},ht={},Z=e=>e&&e.$tag$===ht,gt={forEach:(e,t)=>e.map(ge).forEach(t),map:(e,t)=>e.map(ge).map(t).map(mt)},ge=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),mt=e=>{if(typeof e.vtag=="function"){let s=Object.assign({},e.vattrs);return e.vkey&&(s.key=e.vkey),e.vname&&(s.name=e.vname),Ee(e.vtag,s,...e.vchildren||[])}let t=w(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},yt=e=>{let t=Object.keys(e),s=t.indexOf("value");if(s===-1)return;let o=t.indexOf("type"),l=t.indexOf("min"),i=t.indexOf("max"),c=t.indexOf("step");(s<o||s<l||s<i||s<c)&&_('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},vt=(e,t,s,o)=>{let l=T("hydrateClient",t),i=e.shadowRoot,c=[],a=[],r=n.shadowDom&&i?[]:null,$=o.$vnode$=w(t,null);h.$orgLocNodes$||ee(g.body,h.$orgLocNodes$=new Map),e[J]=s,e.removeAttribute(J),V($,c,a,r,e,e,s),c.map(d=>{let f=d.$hostId$+"."+d.$nodeId$,u=h.$orgLocNodes$.get(f),p=d.$elm$;u&&k&&u["s-en"]===""&&u.parentNode.insertBefore(p,u.nextSibling),i||(p["s-hn"]=t,u&&(p["s-ol"]=u,p["s-ol"]["s-nr"]=p)),h.$orgLocNodes$.delete(f)}),n.shadowDom&&i&&r.map(d=>{d&&i.appendChild(d)}),l()},V=(e,t,s,o,l,i,c)=>{let a,r,$,d;if(i.nodeType===1){for(a=i.getAttribute(ue),a&&(r=a.split("."),(r[0]===c||r[0]==="0")&&($={$flags$:0,$hostId$:r[0],$nodeId$:r[1],$depth$:r[2],$index$:r[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push($),i.removeAttribute(ue),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$,e=$,o&&$.$depth$==="0"&&(o[$.$index$]=$.$elm$))),d=i.childNodes.length-1;d>=0;d--)V(e,t,s,o,l,i.childNodes[d],c);if(i.shadowRoot)for(d=i.shadowRoot.childNodes.length-1;d>=0;d--)V(e,t,s,o,l,i.shadowRoot.childNodes[d],c)}else if(i.nodeType===8)r=i.nodeValue.split("."),(r[1]===c||r[1]==="0")&&(a=r[0],$={$flags$:0,$hostId$:r[1],$nodeId$:r[2],$depth$:r[3],$index$:r[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},a===at?($.$elm$=i.nextSibling,$.$elm$&&$.$elm$.nodeType===3&&($.$text$=$.$elm$.textContent,t.push($),i.remove(),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$,o&&$.$depth$==="0"&&(o[$.$index$]=$.$elm$))):$.$hostId$===c&&(a===rt?($.$tag$="slot",r[5]?i["s-sn"]=$.$name$=r[5]:i["s-sn"]="",i["s-sr"]=!0,n.shadowDom&&o&&($.$elm$=g.createElement($.$tag$),$.$name$&&$.$elm$.setAttribute("name",$.$name$),i.parentNode.insertBefore($.$elm$,i),i.remove(),$.$depth$==="0"&&(o[$.$index$]=$.$elm$)),s.push($),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$):a===it&&(n.shadowDom&&o?i.remove():n.slotRelocation&&(l["s-cr"]=i,i["s-cn"]=!0))));else if(e&&e.$tag$==="style"){let f=w(null,i.textContent);f.$elm$=i,f.$index$="0",e.$children$=[f]}},ee=(e,t)=>{if(e.nodeType===1){let s=0;for(;s<e.childNodes.length;s++)ee(e.childNodes[s],t);if(e.shadowRoot)for(s=0;s<e.shadowRoot.childNodes.length;s++)ee(e.shadowRoot.childNodes[s],t)}else if(e.nodeType===8){let s=e.nodeValue.split(".");s[0]===lt&&(t.set(s[1]+"."+s[2],e),e.nodeValue="",e["s-en"]=s[3])}},St=e=>et.map(t=>t(e)).find(t=>!!t),ls=e=>et.push(e),rs=e=>S(e).$modeName$,bt=(e,t)=>e!=null&&!ie(e)?n.propBoolean&&t&4?e==="false"?!1:e===""||!!e:n.propNumber&&t&2?parseFloat(e):n.propString&&t&1?String(e):e:e,Lt=e=>n.lazyLoad?S(e).$hostElement$:e,as=(e,t,s)=>{let o=Lt(e);return{emit:l=>(n.isDev&&!o.isConnected&&_(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),le(o,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:l}))}},le=(e,t,s)=>{let o=h.ce(t,s);return e.dispatchEvent(o),o},me=new WeakMap,Tt=(e,t,s)=>{let o=W.get(e);Zt&&s?(o=o||new CSSStyleSheet,typeof o=="string"?o=t:o.replaceSync(t)):o=t,W.set(e,o)},te=(e,t,s)=>{var o;let l=Re(t,s),i=W.get(l);if(!n.attachStyles)return l;if(e=e.nodeType===11?e:g,i)if(typeof i=="string"){e=e.head||e;let c=me.get(e),a;if(c||me.set(e,c=new Set),!c.has(l)){if(n.hydrateClientSide&&e.host&&(a=e.querySelector(`[${fe}="${l}"]`)))a.innerHTML=i;else{a=g.createElement("style"),a.innerHTML=i;let r=(o=h.$nonce$)!==null&&o!==void 0?o:pt(g);r!=null&&a.setAttribute("nonce",r),(n.hydrateServerSide||n.hotModuleReplacement)&&a.setAttribute(fe,l),e.insertBefore(a,e.querySelector("link"))}t.$flags$&4&&(a.innerHTML+=ct),c&&c.add(l)}}else n.constructableCSS&&!e.adoptedStyleSheets.includes(i)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]);return l},xt=e=>{let t=e.$cmpMeta$,s=e.$hostElement$,o=t.$flags$,l=T("attachStyles",t.$tagName$),i=te(n.shadowDom&&k&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);(n.shadowDom||n.scoped)&&n.cssAnnotations&&o&10&&(s["s-sc"]=i,s.classList.add(i+"-h"),n.scoped&&o&2&&s.classList.add(i+"-s")),l()},Re=(e,t)=>"sc-"+(n.mode&&t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$);var ye=(e,t,s,o,l,i)=>{if(s!==o){let c=ke(e,t),a=t.toLowerCase();if(n.vdomClass&&t==="class"){let r=e.classList,$=ve(s),d=ve(o);r.remove(...$.filter(f=>f&&!d.includes(f))),r.add(...d.filter(f=>f&&!$.includes(f)))}else if(n.vdomStyle&&t==="style"){if(n.updatable)for(let r in s)(!o||o[r]==null)&&(!n.hydrateServerSide&&r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(let r in o)(!s||o[r]!==s[r])&&(!n.hydrateServerSide&&r.includes("-")?e.style.setProperty(r,o[r]):e.style[r]=o[r])}else if(!(n.vdomKey&&t==="key")){if(n.vdomRef&&t==="ref")o&&o(e);else if(n.vdomListener&&(n.lazyLoad?!c:!e.__lookupSetter__(t))&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):ke(O,a)?t=a.slice(2):t=a[2]+t.slice(3),s||o){let r=t.endsWith(_e);t=t.replace(kt,""),s&&h.rel(e,t,s,r),o&&h.ael(e,t,o,r)}}else if(n.vdomPropOrAttr){let r=ie(o);if((c||r&&o!==null)&&!l)try{if(e.tagName.includes("-"))e[t]=o;else{let d=o??"";t==="list"?c=!1:(s==null||e[t]!=d)&&(e[t]=d)}}catch{}let $=!1;n.vdomXlink&&a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,$=!0),o==null||o===!1?(o!==!1||e.getAttribute(t)==="")&&(n.vdomXlink&&$?e.removeAttributeNS(pe,t):e.removeAttribute(t)):(!c||i&4||l)&&!r&&(o=o===!0?"":o,n.vdomXlink&&$?e.setAttributeNS(pe,t,o):e.setAttribute(t,o))}}}},Ct=/\s/,ve=e=>e?e.split(Ct):[],_e="Capture",kt=new RegExp(_e+"$"),Oe=(e,t,s,o)=>{let l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||he,c=t.$attrs$||he;if(n.updatable)for(o in i)o in c||ye(l,o,i[o],void 0,s,t.$flags$);for(o in c)ye(l,o,i[o],c[o],s,t.$flags$)},B=(e,t,s,o)=>{var l;let i=t.$children$[s],c=0,a,r,$;if(n.slotRelocation&&!we&&(oe=!0,i.$tag$==="slot"&&(D&&o.classList.add(D+"-s"),i.$flags$|=i.$children$?2:1)),n.isDev&&i.$elm$&&M(`The JSX ${i.$text$!==null?`"${i.$text$}" text`:`"${i.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),n.vdomText&&i.$text$!==null)a=i.$elm$=g.createTextNode(i.$text$);else if(n.slotRelocation&&i.$flags$&1)a=i.$elm$=n.isDebug||n.hydrateServerSide?At(i):g.createTextNode("");else{if(n.svg&&!v&&(v=i.$tag$==="svg"),a=i.$elm$=n.svg?g.createElementNS(v?dt:ft,n.slotRelocation&&i.$flags$&2?"slot-fb":i.$tag$):g.createElement(n.slotRelocation&&i.$flags$&2?"slot-fb":i.$tag$),n.svg&&v&&i.$tag$==="foreignObject"&&(v=!1),n.vdomAttribute&&Oe(null,i,v),(n.shadowDom||n.scoped)&&ut(D)&&a["s-si"]!==D&&a.classList.add(a["s-si"]=D),i.$children$)for(c=0;c<i.$children$.length;++c)r=B(e,i,c,a),r&&a.appendChild(r);n.svg&&(i.$tag$==="svg"?v=!1:a.tagName==="foreignObject"&&(v=!0))}return n.slotRelocation&&(a["s-hn"]=I,i.$flags$&3&&(a["s-sr"]=!0,a["s-fs"]=(l=i.$attrs$)===null||l===void 0?void 0:l.slot,a["s-cr"]=Ie,a["s-sn"]=i.$name$||"",$=e&&e.$children$&&e.$children$[s],$&&$.$tag$===i.$tag$&&e.$elm$&&E(e.$elm$,!1))),a},E=(e,t)=>{var s;h.$flags$|=1;let o=e.childNodes;for(let l=o.length-1;l>=0;l--){let i=o[l];i["s-hn"]!==I&&i["s-ol"]&&(Pe(i).insertBefore(i,re(i)),i["s-ol"].remove(),i["s-ol"]=void 0,i["s-sh"]=void 0,i.nodeType===1&&i.setAttribute("slot",(s=i["s-sn"])!==null&&s!==void 0?s:""),oe=!0),t&&E(i,t)}h.$flags$&=-2},ze=(e,t,s,o,l,i)=>{let c=n.slotRelocation&&e["s-cr"]&&e["s-cr"].parentNode||e,a;for(n.shadowDom&&c.shadowRoot&&c.tagName===I&&(c=c.shadowRoot);l<=i;++l)o[l]&&(a=B(null,s,l,e),a&&(o[l].$elm$=a,c.insertBefore(a,n.slotRelocation?re(t):t)))},je=(e,t,s)=>{for(let o=t;o<=s;++o){let l=e[o];if(l){let i=l.$elm$;Ue(l),i&&(n.slotRelocation&&(F=!0,i["s-ol"]?i["s-ol"].remove():E(i,!0)),i.remove())}}},Dt=(e,t,s,o)=>{let l=0,i=0,c=0,a=0,r=t.length-1,$=t[0],d=t[r],f=o.length-1,u=o[0],p=o[f],y,m;for(;l<=r&&i<=f;)if($==null)$=t[++l];else if(d==null)d=t[--r];else if(u==null)u=o[++i];else if(p==null)p=o[--f];else if(P($,u))A($,u),$=t[++l],u=o[++i];else if(P(d,p))A(d,p),d=t[--r],p=o[--f];else if(P($,p))n.slotRelocation&&($.$tag$==="slot"||p.$tag$==="slot")&&E($.$elm$.parentNode,!1),A($,p),e.insertBefore($.$elm$,d.$elm$.nextSibling),$=t[++l],p=o[--f];else if(P(d,u))n.slotRelocation&&($.$tag$==="slot"||p.$tag$==="slot")&&E(d.$elm$.parentNode,!1),A(d,u),e.insertBefore(d.$elm$,$.$elm$),d=t[--r],u=o[++i];else{if(c=-1,n.vdomKey){for(a=l;a<=r;++a)if(t[a]&&t[a].$key$!==null&&t[a].$key$===u.$key$){c=a;break}}n.vdomKey&&c>=0?(m=t[c],m.$tag$!==u.$tag$?y=B(t&&t[i],s,c,e):(A(m,u),t[c]=void 0,y=m.$elm$),u=o[++i]):(y=B(t&&t[i],s,i,e),u=o[++i]),y&&(n.slotRelocation?Pe($.$elm$).insertBefore(y,re($.$elm$)):$.$elm$.parentNode.insertBefore(y,$.$elm$))}l>r?ze(e,o[f+1]==null?null:o[f+1].$elm$,s,o,i,f):n.updatable&&i>f&&je(t,l,r)},P=(e,t)=>e.$tag$===t.$tag$?n.slotRelocation&&e.$tag$==="slot"?e.$name$===t.$name$:n.vdomKey?e.$key$===t.$key$:!0:!1,re=e=>e&&e["s-ol"]||e,Pe=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{let s=t.$elm$=e.$elm$,o=e.$children$,l=t.$children$,i=t.$tag$,c=t.$text$,a;!n.vdomText||c===null?(n.svg&&(v=i==="svg"?!0:i==="foreignObject"?!1:v),(n.vdomAttribute||n.reflect)&&(n.slot&&i==="slot"||Oe(e,t,v)),n.updatable&&o!==null&&l!==null?Dt(s,o,t,l):l!==null?(n.updatable&&n.vdomText&&e.$text$!==null&&(s.textContent=""),ze(s,null,t,l,0,l.length-1)):n.updatable&&o!==null&&je(o,0,o.length-1),n.svg&&v&&i==="svg"&&(v=!1)):n.vdomText&&n.slotRelocation&&(a=s["s-cr"])?a.parentNode.textContent=c:n.vdomText&&e.$text$!==c&&(s.data=c)},He=e=>{let t=e.childNodes;for(let s of t)if(s.nodeType===1){if(s["s-sr"]){let o=s["s-sn"];s.hidden=!1;for(let l of t)if(l!==s){if(l["s-hn"]!==s["s-hn"]||o!==""){if(l.nodeType===1&&(o===l.getAttribute("slot")||o===l["s-sn"])){s.hidden=!0;break}}else if(l.nodeType===1||l.nodeType===3&&l.textContent.trim()!==""){s.hidden=!0;break}}}He(s)}},L=[],Fe=e=>{let t,s,o;for(let l of e.childNodes){if(l["s-sr"]&&(t=l["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;let i=l["s-sn"];for(o=s.length-1;o>=0;o--)if(t=s[o],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==l["s-hn"]&&(!n.experimentalSlotFixes||!t["s-sh"]||t["s-sh"]!==l["s-hn"]))if(Se(t,i)){let c=L.find(a=>a.$nodeToRelocate$===t);F=!0,t["s-sn"]=t["s-sn"]||i,c?(c.$nodeToRelocate$["s-sh"]=l["s-hn"],c.$slotRefNode$=l):(t["s-sh"]=l["s-hn"],L.push({$slotRefNode$:l,$nodeToRelocate$:t})),t["s-sr"]&&L.map(a=>{Se(a.$nodeToRelocate$,t["s-sn"])&&(c=L.find(r=>r.$nodeToRelocate$===t),c&&!a.$slotRefNode$&&(a.$slotRefNode$=c.$slotRefNode$))})}else L.some(c=>c.$nodeToRelocate$===t)||L.push({$nodeToRelocate$:t})}l.nodeType===1&&Fe(l)}},Se=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",Ue=e=>{n.vdomRef&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Ue))},be=(e,t,s=!1)=>{var o,l;let i=e.$hostElement$,c=e.$cmpMeta$,a=e.$vnode$||w(null,null),r=Z(t)?t:Ee(null,null,t);if(I=i.tagName,n.isDev&&Array.isArray(t)&&t.some(Z))throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${I.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);if(n.reflect&&c.$attrsToReflect$&&(r.$attrs$=r.$attrs$||{},c.$attrsToReflect$.map(([$,d])=>r.$attrs$[d]=i[$])),s&&r.$attrs$)for(let $ of Object.keys(r.$attrs$))i.hasAttribute($)&&!["key","ref","style","class"].includes($)&&(r.$attrs$[$]=i[$]);if(r.$tag$=null,r.$flags$|=4,e.$vnode$=r,r.$elm$=a.$elm$=n.shadowDom&&i.shadowRoot||i,(n.scoped||n.shadowDom)&&(D=i["s-sc"]),n.slotRelocation&&(Ie=i["s-cr"],we=k&&(c.$flags$&1)!==0,F=!1),A(a,r),n.slotRelocation){if(h.$flags$|=1,oe){Fe(r.$elm$);for(let $ of L){let d=$.$nodeToRelocate$;if(!d["s-ol"]){let f=n.isDebug||n.hydrateServerSide?Nt(d):g.createTextNode("");f["s-nr"]=d,d.parentNode.insertBefore(d["s-ol"]=f,d)}}for(let $ of L){let d=$.$nodeToRelocate$,f=$.$slotRefNode$;if(f){let u=f.parentNode,p=f.nextSibling;if(!n.experimentalSlotFixes||p&&p.nodeType===1){let y=(o=d["s-ol"])===null||o===void 0?void 0:o.previousSibling;for(;y;){let m=(l=y["s-nr"])!==null&&l!==void 0?l:null;if(m&&m["s-sn"]===d["s-sn"]&&u===m.parentNode&&(m=m.nextSibling,!m||!m["s-nr"])){p=m;break}y=y.previousSibling}}(!p&&u!==d.parentNode||d.nextSibling!==p)&&d!==p&&(!d["s-hn"]&&d["s-ol"]&&(d["s-hn"]=d["s-ol"].parentNode.nodeName),n.experimentalSlotFixes&&d.nodeType===1&&f["s-fs"]!==d.getAttribute("slot")&&(f["s-fs"]?d.setAttribute("slot",f["s-fs"]):d.removeAttribute("slot")),u.insertBefore(d,p))}else d.nodeType===1&&(d.hidden=!0)}}F&&He(r.$elm$),h.$flags$&=-2,L.length=0}},At=e=>g.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${I.toLowerCase()})`),Nt=e=>g.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),Be=(e,t)=>{n.asyncLoading&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(s=>e.$onRenderResolve$=s))},ae=(e,t)=>{if(n.taskQueue&&n.updatable&&(e.$flags$|=16),n.asyncLoading&&e.$flags$&4){e.$flags$|=512;return}Be(e,e.$ancestorComponent$);let s=()=>It(e,t);return n.taskQueue?Vt(s):s()},It=(e,t)=>{let s=e.$hostElement$,o=T("scheduleUpdate",e.$cmpMeta$.$tagName$),l=n.lazyLoad?e.$lazyInstance$:s,i;return t?(n.lazyLoad&&n.hostListener&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([c,a])=>b(l,c,a)),e.$queuedListeners$=void 0)),N(s,"componentWillLoad"),n.cmpWillLoad&&(i=b(l,"componentWillLoad"))):(N(s,"componentWillUpdate"),n.cmpWillUpdate&&(i=b(l,"componentWillUpdate"))),N(s,"componentWillRender"),n.cmpWillRender&&(i=Le(i,()=>b(l,"componentWillRender"))),o(),Le(i,()=>Et(e,l,t))},Le=(e,t)=>wt(e)?e.then(t):t(),wt=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Et=(e,t,s)=>z(void 0,null,function*(){var o;let l=e.$hostElement$,i=T("update",e.$cmpMeta$.$tagName$),c=l["s-rc"];n.style&&s&&xt(e);let a=T("render",e.$cmpMeta$.$tagName$);if(n.isDev&&(e.$flags$|=1024),n.hydrateServerSide?yield Te(e,t,l,s):Te(e,t,l,s),n.isDev&&(e.$renderCount$=e.$renderCount$===void 0?1:e.$renderCount$+1,e.$flags$&=-1025),n.hydrateServerSide)try{We(l),s&&(e.$cmpMeta$.$flags$&1?l["s-en"]="":e.$cmpMeta$.$flags$&2&&(l["s-en"]="c"))}catch(r){x(r,l)}if(n.asyncLoading&&c&&(c.map(r=>r()),l["s-rc"]=void 0),a(),i(),n.asyncLoading){let r=(o=l["s-p"])!==null&&o!==void 0?o:[],$=()=>xe(e);r.length===0?$():(Promise.all(r).then($),e.$flags$|=4,r.length=0)}else xe(e)}),Te=(e,t,s,o)=>{let l=!!n.allRenderFn,i=!!n.lazyLoad,c=!!n.taskQueue,a=!!n.updatable;try{if(de=t,t=(l||t.render)&&t.render(),a&&c&&(e.$flags$&=-17),(a||i)&&(e.$flags$|=2),n.hasRenderFn||n.reflect)if(n.vdomRender||n.reflect){if(n.hydrateServerSide)return Promise.resolve(t).then(r=>be(e,r,o));be(e,t,o)}else{let r=s.shadowRoot;e.$cmpMeta$.$flags$&1?r.textContent=t:s.textContent=t}}catch(r){x(r,e.$hostElement$)}return de=null,null};var xe=e=>{let t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,o=T("postUpdate",t),l=n.lazyLoad?e.$lazyInstance$:s,i=e.$ancestorComponent$;n.cmpDidRender&&(n.isDev&&(e.$flags$|=1024),b(l,"componentDidRender"),n.isDev&&(e.$flags$&=-1025)),N(s,"componentDidRender"),e.$flags$&64?(n.cmpDidUpdate&&(n.isDev&&(e.$flags$|=1024),b(l,"componentDidUpdate"),n.isDev&&(e.$flags$&=-1025)),N(s,"componentDidUpdate"),o()):(e.$flags$|=64,n.asyncLoading&&n.cssAnnotations&&Me(s),n.cmpDidLoad&&(n.isDev&&(e.$flags$|=2048),b(l,"componentDidLoad"),n.isDev&&(e.$flags$&=-2049)),N(s,"componentDidLoad"),o(),n.asyncLoading&&(e.$onReadyResolve$(s),i||Rt(t))),n.method&&n.lazyLoad&&e.$onInstanceResolve$(s),n.asyncLoading&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&Q(()=>ae(e,!1)),e.$flags$&=-517)};var Rt=e=>{n.cssAnnotations&&Me(g.documentElement),n.asyncQueue&&(h.$flags$|=2),Q(()=>le(O,"appload",{detail:{namespace:j}})),n.profile&&performance.measure&&performance.measure(`[Stencil] ${j} initial load (by ${e})`,"st:app:start")},b=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(o){x(o)}},N=(e,t)=>{n.lifecycleDOMEvents&&le(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:j}})},Me=e=>n.hydratedClass?e.classList.add("hydrated"):n.hydratedAttribute?e.setAttribute("hydrated",""):void 0,We=e=>{let t=e.children;if(t!=null)for(let s=0,o=t.length;s<o;s++){let l=t[s];typeof l.connectedCallback=="function"&&l.connectedCallback(),We(l)}},_t=(e,t)=>S(e).$instanceValues$.get(t),Ot=(e,t,s,o)=>{let l=S(e),i=n.lazyLoad?l.$hostElement$:e,c=l.$instanceValues$.get(t),a=l.$flags$,r=n.lazyLoad?l.$lazyInstance$:i;s=bt(s,o.$members$[t][0]);let $=Number.isNaN(c)&&Number.isNaN(s),d=s!==c&&!$;if((!n.lazyLoad||!(a&8)||c===void 0)&&d&&(l.$instanceValues$.set(t,s),n.isDev&&(l.$flags$&1024?_(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,`
Element`,i,`
New value`,s,`
Old value`,c):l.$flags$&2048&&_(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,`
Element`,i,`
New value`,s,`
Old value`,c)),!n.lazyLoad||r)){if(n.watchCallback&&o.$watchers$&&a&128){let f=o.$watchers$[t];f&&f.map(u=>{try{r[u](s,c,t)}catch(p){x(p,i)}})}if(n.updatable&&(a&18)===2){if(n.cmpShouldUpdate&&r.componentShouldUpdate&&r.componentShouldUpdate(s,c,t)===!1)return;ae(l,!1)}}},qe=(e,t,s)=>{var o;let l=e.prototype;if(n.formAssociated&&t.$flags$&64&&s&1&&$t.forEach(i=>Object.defineProperty(l,i,{value(...c){let a=S(this),r=n.lazyLoad?a.$hostElement$:this,$=n.lazyLoad?a.$lazyInstance$:r;if(!$)a.$onReadyPromise$.then(d=>{var f;return(f=d[i])===null||f===void 0?void 0:f.call(d,...c)});else{let d=$[i];typeof d=="function"&&d(...c)}}})),n.member&&t.$members$){n.watchCallback&&e.watchers&&(t.$watchers$=e.watchers);let i=Object.entries(t.$members$);if(i.map(([c,[a]])=>{(n.prop||n.state)&&(a&31||(!n.lazyLoad||s&2)&&a&32)?Object.defineProperty(l,c,{get(){return _t(this,c)},set(r){if(n.isDev){let $=S(this);!(s&1)&&($&&$.$flags$&8)===0&&a&31&&!(a&1024)&&_(`@Prop() "${c}" on <${t.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`)}Ot(this,c,r,t)},configurable:!0,enumerable:!0}):n.lazyLoad&&n.method&&s&1&&a&64&&Object.defineProperty(l,c,{value(...r){var $;let d=S(this);return($=d?.$onInstancePromise$)===null||$===void 0?void 0:$.then(()=>{var f;return(f=d.$lazyInstance$)===null||f===void 0?void 0:f[c](...r)})}})}),n.observeAttribute&&(!n.lazyLoad||s&1)){let c=new Map;l.attributeChangedCallback=function(a,r,$){h.jmp(()=>{var d;let f=c.get(a);if(this.hasOwnProperty(f))$=this[f],delete this[f];else{if(l.hasOwnProperty(f)&&typeof this[f]=="number"&&this[f]==$)return;if(f==null){let u=S(this),p=u?.$flags$;if(p&&!(p&8)&&p&128&&$!==r){let y=n.lazyLoad?u.$hostElement$:this,m=n.lazyLoad?u.$lazyInstance$:y,X=(d=t.$watchers$)===null||d===void 0?void 0:d[a];X?.forEach(ce=>{m[ce]!=null&&m[ce].call(m,$,r,a)})}return}}this[f]=$===null&&typeof this[f]=="boolean"?!1:$})},e.observedAttributes=Array.from(new Set([...Object.keys((o=t.$watchers$)!==null&&o!==void 0?o:{}),...i.filter(([a,r])=>r[0]&15).map(([a,r])=>{var $;let d=r[1]||a;return c.set(d,a),n.reflect&&r[0]&512&&(($=t.$attrsToReflect$)===null||$===void 0||$.push([a,d])),d})]))}}return e},Ce=(e,t,s,o)=>z(void 0,null,function*(){let l;if(!(t.$flags$&32)){if(t.$flags$|=32,n.lazyLoad||n.hydrateClientSide){if(l=Yt(s,t,o),l.then){let r=ot(`st:load:${s.$tagName$}:${t.$modeName$}`,`[Stencil] Load module for <${s.$tagName$}>`);l=yield l,r()}if((n.isDev||n.isDebug)&&!l)throw new Error(`Constructor for "${s.$tagName$}#${t.$modeName$}" was not found`);n.member&&!l.isProxied&&(n.watchCallback&&(s.$watchers$=l.watchers),qe(l,s,2),l.isProxied=!0);let a=T("createInstance",s.$tagName$);n.member&&(t.$flags$|=8);try{new l(t)}catch(r){x(r)}n.member&&(t.$flags$&=-9),n.watchCallback&&(t.$flags$|=128),a(),se(t.$lazyInstance$)}else l=e.constructor,customElements.whenDefined(s.$tagName$).then(()=>t.$flags$|=128);if(n.style&&l.style){let a=l.style;n.mode&&typeof a!="string"&&(a=a[t.$modeName$=St(e)],n.hydrateServerSide&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));let r=Re(s,t.$modeName$);if(!W.has(r)){let $=T("registerStyles",s.$tagName$);!n.hydrateServerSide&&n.shadowDom&&n.shadowDomShim&&s.$flags$&8&&(a=yield import("./chunk-7BL5IEWL.js").then(d=>d.scopeCss(a,r,!1))),Tt(r,a,!!(s.$flags$&1)),$()}}}let i=t.$ancestorComponent$,c=()=>ae(t,!0);n.asyncLoading&&i&&i["s-rc"]?i["s-rc"].push(c):c()}),se=e=>{n.lazyLoad&&n.connectedCallback&&b(e,"connectedCallback")},zt=e=>{if(!(h.$flags$&1)){let t=S(e),s=t.$cmpMeta$,o=T("connectedCallback",s.$tagName$);if(n.hostListenerTargetParent&&ne(e,t,s.$listeners$,!0),t.$flags$&1)ne(e,t,s.$listeners$,!1),t?.$lazyInstance$?se(t.$lazyInstance$):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>se(t.$lazyInstance$));else{t.$flags$|=1;let l;if(n.hydrateClientSide&&(l=e.getAttribute(J),l)){if(n.shadowDom&&k&&s.$flags$&1){let i=n.mode?te(e.shadowRoot,s,e.getAttribute("s-mode")):te(e.shadowRoot,s);e.classList.remove(i+"-h",i+"-s")}vt(e,s.$tagName$,l,t)}if(n.slotRelocation&&!l&&(n.hydrateServerSide||(n.slot||n.shadowDom)&&s.$flags$&12)&&jt(e),n.asyncLoading){let i=e;for(;i=i.parentNode||i.host;)if(n.hydrateClientSide&&i.nodeType===1&&i.hasAttribute("s-id")&&i["s-p"]||i["s-p"]){Be(t,t.$ancestorComponent$=i);break}}n.prop&&!n.hydrateServerSide&&s.$members$&&Object.entries(s.$members$).map(([i,[c]])=>{if(c&31&&e.hasOwnProperty(i)){let a=e[i];delete e[i],e[i]=a}}),n.initializeNextTick?Q(()=>Ce(e,t,s)):Ce(e,t,s)}o()}},jt=e=>{let t=e["s-cr"]=g.createComment(n.isDebug?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Y=e=>{n.lazyLoad&&n.disconnectedCallback&&b(e,"disconnectedCallback"),n.cmpDidUnload&&b(e,"componentDidUnload")},Pt=e=>z(void 0,null,function*(){if(!(h.$flags$&1)){let t=S(e);n.hostListener&&t.$rmListeners$&&(t.$rmListeners$.map(s=>s()),t.$rmListeners$=void 0),n.lazyLoad?t?.$lazyInstance$?Y(t.$lazyInstance$):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Y(t.$lazyInstance$)):Y(e)}}),Ht=(e,t)=>{Qe(e),Xe(e),Ut(e),Ft(e),Wt(e),Bt(e),Mt(e),Ke(e,t),Ye(e,t)},Qe=e=>{let t=e.cloneNode;e.cloneNode=function(s){let o=this,l=n.shadowDom?o.shadowRoot&&k:!1,i=t.call(o,l?s:!1);if(n.slot&&!l&&s){let c=0,a,r,$=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;c<o.childNodes.length;c++)a=o.childNodes[c]["s-nr"],r=$.every(d=>!o.childNodes[c][d]),a&&(n.appendChildSlotFix&&i.__appendChild?i.__appendChild(a.cloneNode(!0)):i.appendChild(a.cloneNode(!0))),r&&i.appendChild(o.childNodes[c].cloneNode(!0))}return i}},Xe=e=>{e.__appendChild=e.appendChild,e.appendChild=function(t){let s=t["s-sn"]=Ge(t),o=R(this.childNodes,s);if(o){let l=Je(o,s),i=l[l.length-1];return i.parentNode.insertBefore(t,i.nextSibling)}return this.__appendChild(t)}},Ft=e=>{let t=e.prepend;e.prepend=function(...s){s.forEach(o=>{typeof o=="string"&&(o=this.ownerDocument.createTextNode(o));let l=o["s-sn"]=Ge(o),i=R(this.childNodes,l);if(i){let c=document.createTextNode("");c["s-nr"]=o,i["s-cr"].parentNode.__appendChild(c),o["s-ol"]=c;let r=Je(i,l)[0];return r.parentNode.insertBefore(o,r.nextSibling)}return o.nodeType===1&&o.getAttribute("slot")&&(o.hidden=!0),t.call(this,o)})}},Ut=e=>{e.append=function(...t){t.forEach(s=>{typeof s=="string"&&(s=this.ownerDocument.createTextNode(s)),this.appendChild(s)})}},Bt=e=>{let t=e.insertAdjacentHTML;e.insertAdjacentHTML=function(s,o){if(s!=="afterbegin"&&s!=="beforeend")return t.call(this,s,o);let l=this.ownerDocument.createElement("_"),i;if(l.innerHTML=o,s==="afterbegin")for(;i=l.firstChild;)this.prepend(i);else if(s==="beforeend")for(;i=l.firstChild;)this.append(i)}},Mt=e=>{e.insertAdjacentText=function(t,s){this.insertAdjacentHTML(t,s)}},Wt=e=>{let t=e.insertAdjacentElement;e.insertAdjacentElement=function(s,o){return s!=="afterbegin"&&s!=="beforeend"?t.call(this,s,o):s==="afterbegin"?(this.prepend(o),o):(s==="beforeend"&&this.append(o),o)}},Ke=(e,t)=>{if(n.scoped&&t.$flags$&2){let s=Object.getOwnPropertyDescriptor(Node.prototype,"textContent");Object.defineProperty(e,"__textContent",s),Object.defineProperty(e,"textContent",{get(){var o;let l=R(this.childNodes,"");return((o=l?.nextSibling)===null||o===void 0?void 0:o.nodeType)===3?l.nextSibling.textContent:l?l.textContent:this.__textContent},set(o){var l;let i=R(this.childNodes,"");if(((l=i?.nextSibling)===null||l===void 0?void 0:l.nodeType)===3)i.nextSibling.textContent=o;else if(i)i.textContent=o;else{this.__textContent=o;let c=this["s-cr"];c&&this.insertBefore(c,this.firstChild)}}})}},Ye=(e,t)=>{class s extends Array{item(l){return this[l]}}if(t.$flags$&8){let o=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map(l=>l.nodeType===1)}}),Object.defineProperty(e,"childElementCount",{get(){return e.children.length}}),Object.defineProperty(e,"childNodes",{get(){let l=o.call(this);if(!(h.$flags$&1)&&S(this).$flags$&2){let i=new s;for(let c=0;c<l.length;c++){let a=l[c]["s-nr"];a&&i.push(a)}return i}return s.from(l)}})}},Ge=e=>e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||"",R=(e,t)=>{let s=0,o;for(;s<e.length;s++)if(o=e[s],o["s-sr"]&&o["s-sn"]===t||(o=R(o.childNodes,t),o))return o;return null},Je=(e,t)=>{let s=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)s.push(e);return s};var cs=(e,t)=>{let s={$flags$:t[0],$tagName$:t[1]};n.member&&(s.$members$=t[2]),n.hostListener&&(s.$listeners$=t[3]),n.watchCallback&&(s.$watchers$=e.$watchers$),n.reflect&&(s.$attrsToReflect$=[]),n.shadowDom&&!k&&s.$flags$&1&&(s.$flags$|=8),n.experimentalSlotFixes&&n.scoped?Ht(e.prototype,s):(n.slotChildNodesFix&&Ye(e.prototype,s),n.cloneNodeFix&&Qe(e.prototype),n.appendChildSlotFix&&Xe(e.prototype),n.scopedSlotTextContentFix&&Ke(e.prototype,s));let o=e.prototype.connectedCallback,l=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){Kt(this,s)},connectedCallback(){zt(this),n.connectedCallback&&o&&o.call(this)},disconnectedCallback(){Pt(this),n.disconnectedCallback&&l&&l.call(this)},__attachShadow(){k?n.shadowDelegatesFocus?this.attachShadow({mode:"open",delegatesFocus:!!(s.$flags$&16)}):this.attachShadow({mode:"open"}):this.shadowRoot=this}}),e.is=s.$tagName$,qe(e,s,3)};var ne=(e,t,s,o)=>{n.hostListener&&s&&(n.hostListenerTargetParent&&(o?s=s.filter(([l])=>l&32):s=s.filter(([l])=>!(l&32))),s.map(([l,i,c])=>{let a=n.hostListenerTarget?Qt(e,l):e,r=qt(t,c),$=Xt(l);h.ael(a,i,r,$),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>h.rel(a,i,r,$))}))},qt=(e,t)=>s=>{try{n.lazyLoad?e.$flags$&256?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s]):e.$hostElement$[t](s)}catch(o){x(o)}},Qt=(e,t)=>n.hostListenerTargetDocument&&t&4?g:n.hostListenerTargetWindow&&t&8?O:n.hostListenerTargetBody&&t&16?g.body:n.hostListenerTargetParent&&t&32?e.parentElement:e,Xt=e=>Gt?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;var Ze=new WeakMap,S=e=>Ze.get(e);var Kt=(e,t)=>{let s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.isDev&&(s.$renderCount$=0),n.method&&n.lazyLoad&&(s.$onInstancePromise$=new Promise(o=>s.$onInstanceResolve$=o)),n.asyncLoading&&(s.$onReadyPromise$=new Promise(o=>s.$onReadyResolve$=o),e["s-p"]=[],e["s-rc"]=[]),ne(e,s,t.$listeners$,!1),Ze.set(e,s)},ke=(e,t)=>t in e,x=(e,t)=>(st||console.error)(e,t),Ve=n.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],M=(...e)=>console.error(...Ve,...e),_=(...e)=>console.warn(...Ve,...e);var De=new Map,Yt=(e,t,s)=>{let o=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$;if(n.isDev&&typeof l!="string"){M(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);return}let i=n.hotModuleReplacement?!1:De.get(l);if(i)return i[o];return ns(`./${l}.entry.js${n.hotModuleReplacement&&s?"?s-hmr="+s:""}`).then(c=>(n.hotModuleReplacement||De.set(l,c),c[o]),x)},W=new Map,et=[],O=typeof window<"u"?window:{},g=O.document||{head:{}},$s=O.HTMLElement||class{},h={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,o)=>e.addEventListener(t,s,o),rel:(e,t,s,o)=>e.removeEventListener(t,s,o),ce:(e,t)=>new CustomEvent(e,t)},ds=e=>{Object.assign(h,e)},k=n.shadowDomShim&&n.shadowDom?(()=>(g.head.attachShadow+"").indexOf("[native")>-1)():!0,Gt=(()=>{let e=!1;try{g.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),Jt=e=>Promise.resolve(e),Zt=n.constructableCSS?(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})():!1,H=[],C=[],G=[],tt=(e,t)=>s=>{e.push(s),U||(U=!0,t&&h.$flags$&4?Q(q):h.raf(q))},Ae=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){x(s)}e.length=0},Ne=(e,t)=>{let s=0,o=0;for(;s<e.length&&(o=performance.now())<t;)try{e[s++](o)}catch(l){x(l)}s===e.length?e.length=0:s!==0&&e.splice(0,s)},q=()=>{if(n.asyncQueue&&K++,Ae(H),n.asyncQueue){let e=(h.$flags$&6)===2?performance.now()+14*Math.ceil(K*.1):1/0;Ne(C,e),Ne(G,e),C.length>0&&(G.push(...C),C.length=0),(U=H.length+C.length+G.length>0)?h.raf(q):K=0}else Ae(C),(U=H.length>0)&&h.raf(q)},Q=e=>Jt().then(e),fs=tt(H,!1),Vt=tt(C,!0);export{Ee as a,ht as b,ls as c,rs as d,as as e,cs as f,$s as g,ds as h,fs as i,Vt as j};
