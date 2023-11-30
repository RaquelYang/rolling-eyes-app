import{g as p}from"./chunk-ZIU3LM6C.js";import{a as rn}from"./chunk-LF5XB4YN.js";import{e as Sn}from"./chunk-FP7EQKGB.js";var sn,pe=i=>(i.forEach(o=>{for(let r in o)if(o.hasOwnProperty(r)){let l=o[r];if(r==="easing"){let u="animation-timing-function";o[u]=l,delete o[r]}else{let u=Ce(r);u!==r&&(o[u]=l,delete o[r])}}}),i),Ce=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cn=i=>{if(sn===void 0){let o=i.style.animationName!==void 0,r=i.style.webkitAnimationName!==void 0;sn=!o&&r?"-webkit-":""}return sn},f=(i,o,r)=>{let l=o.startsWith("animation")?cn(i):"";i.style.setProperty(l+o,r)},b=(i,o)=>{let r=o.startsWith("animation")?cn(i):"";i.style.removeProperty(r+o)},Ae=(i,o)=>{let r,l={passive:!0},u=()=>{r&&r()},C=L=>{i===L.target&&(u(),o(L))};return i&&(i.addEventListener("webkitAnimationEnd",C,l),i.addEventListener("animationend",C,l),r=()=>{i.removeEventListener("webkitAnimationEnd",C,l),i.removeEventListener("animationend",C,l)}),u},ve=(i=[])=>i.map(o=>{let r=o.offset,l=[];for(let u in o)o.hasOwnProperty(u)&&u!=="offset"&&l.push(`${u}: ${o[u]};`);return`${r*100}% { ${l.join(" ")} }`}).join(" "),Fn=[],be=i=>{let o=Fn.indexOf(i);return o<0&&(o=Fn.push(i)-1),`ion-animation-${o}`},we=i=>{let o=i.getRootNode!==void 0?i.getRootNode():i;return o.head||o},Le=(i,o,r)=>{var l;let u=we(r),C=cn(r),L=u.querySelector("#"+i);if(L)return L;let c=((l=r.ownerDocument)!==null&&l!==void 0?l:document).createElement("style");return c.id=i,c.textContent=`@${C}keyframes ${i} { ${o} } @${C}keyframes ${i}-alt { ${o} }`,u.appendChild(c),c},Z=(i=[],o)=>{if(o!==void 0){let r=Array.isArray(o)?o:[o];return[...i,...r]}return i},Ie=i=>{let o,r,l,u,C,L,c=[],j=[],J=[],F=!1,m,Q={},X=[],nn=[],en={},T=0,U=!1,M=!1,Y,_,R,I,k=!0,x=!1,K=!0,O,a,H=!1,fn=i,tn=[],V=[],q=[],g=[],h=[],on=[],ln=[],un=[],dn=[],mn=[],w=[],Pn=typeof AnimationEffect=="function"||rn!==void 0&&typeof rn.AnimationEffect=="function",A=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&Pn,Tn=100,gn=()=>w,_n=n=>(h.forEach(e=>{e.destroy(n)}),In(n),g.length=0,h.length=0,c.length=0,$n(),F=!1,K=!0,a),In=n=>{En(),n&&yn()},kn=()=>{U=!1,M=!1,K=!0,_=void 0,R=void 0,I=void 0,T=0,x=!1,k=!0,H=!1},Dn=()=>T!==0&&!H,hn=(n,e)=>{let t=e.findIndex(s=>s.c===n);t>-1&&e.splice(t,1)},Wn=(n,e)=>(q.push({c:n,o:e}),a),G=(n,e)=>((e?.oneTimeCallback?V:tn).push({c:n,o:e}),a),$n=()=>(tn.length=0,V.length=0,a),En=()=>{if(A)w.forEach(n=>{n.cancel()}),w.length=0;else{let n=g.slice();p(()=>{n.forEach(e=>{b(e,"animation-name"),b(e,"animation-duration"),b(e,"animation-timing-function"),b(e,"animation-iteration-count"),b(e,"animation-delay"),b(e,"animation-play-state"),b(e,"animation-fill-mode"),b(e,"animation-direction")})})}},yn=()=>{on.forEach(n=>{n?.parentNode&&n.parentNode.removeChild(n)}),on.length=0},Rn=n=>(ln.push(n),a),xn=n=>(un.push(n),a),Kn=n=>(dn.push(n),a),On=n=>(mn.push(n),a),Vn=n=>(j=Z(j,n),a),Nn=n=>(J=Z(J,n),a),Bn=(n={})=>(Q=n,a),zn=(n=[])=>{for(let e of n)Q[e]="";return a},Un=n=>(X=Z(X,n),a),Mn=n=>(nn=Z(nn,n),a),Yn=(n={})=>(en=n,a),Hn=(n=[])=>{for(let e of n)en[e]="";return a},N=()=>C!==void 0?C:m?m.getFill():"both",D=()=>_!==void 0?_:L!==void 0?L:m?m.getDirection():"normal",B=()=>U?"linear":l!==void 0?l:m?m.getEasing():"linear",v=()=>M?0:R!==void 0?R:r!==void 0?r:m?m.getDuration():0,S=()=>u!==void 0?u:m?m.getIterations():1,W=()=>I!==void 0?I:o!==void 0?o:m?m.getDelay():0,qn=()=>c,Gn=n=>(L=n,E(!0),a),Zn=n=>(C=n,E(!0),a),jn=n=>(o=n,E(!0),a),Jn=n=>(l=n,E(!0),a),Qn=n=>(!A&&n===0&&(n=1),r=n,E(!0),a),Xn=n=>(u=n,E(!0),a),ne=n=>(m=n,a),ee=n=>{if(n!=null)if(n.nodeType===1)g.push(n);else if(n.length>=0)for(let e=0;e<n.length;e++)g.push(n[e]);else console.error("Invalid addElement value");return a},te=n=>{if(n!=null)if(Array.isArray(n))for(let e of n)e.parent(a),h.push(e);else n.parent(a),h.push(n);return a},ie=n=>{let e=c!==n;return c=n,e&&oe(c),a},oe=n=>{A?gn().forEach(e=>{let t=e.effect;if(t.setKeyframes)t.setKeyframes(n);else{let s=new KeyframeEffect(t.target,n,t.getTiming());e.effect=s}}):pn()},ae=()=>{ln.forEach(s=>s()),un.forEach(s=>s());let n=j,e=J,t=Q;g.forEach(s=>{let d=s.classList;n.forEach(y=>d.add(y)),e.forEach(y=>d.remove(y));for(let y in t)t.hasOwnProperty(y)&&f(s,y,t[y])})},re=()=>{an(),dn.forEach(d=>d()),mn.forEach(d=>d());let n=k?1:0,e=X,t=nn,s=en;g.forEach(d=>{let y=d.classList;e.forEach(P=>y.add(P)),t.forEach(P=>y.remove(P));for(let P in s)s.hasOwnProperty(P)&&f(d,P,s[P])}),tn.forEach(d=>d.c(n,a)),V.forEach(d=>d.c(n,a)),V.length=0,K=!0,k&&(x=!0),k=!0},$=()=>{T!==0&&(T--,T===0&&(re(),m&&m.animationFinish()))},pn=(n=!0)=>{yn();let e=pe(c);g.forEach(t=>{if(e.length>0){let s=ve(e);O=i!==void 0?i:be(s);let d=Le(O,s,t);on.push(d),f(t,"animation-duration",`${v()}ms`),f(t,"animation-timing-function",B()),f(t,"animation-delay",`${W()}ms`),f(t,"animation-fill-mode",N()),f(t,"animation-direction",D());let y=S()===1/0?"infinite":S().toString();f(t,"animation-iteration-count",y),f(t,"animation-play-state","paused"),n&&f(t,"animation-name",`${d.id}-alt`),p(()=>{f(t,"animation-name",d.id||null)})}})},se=()=>{g.forEach(n=>{let e=n.animate(c,{id:fn,delay:W(),duration:v(),easing:B(),iterations:S(),fill:N(),direction:D()});e.pause(),w.push(e)}),w.length>0&&(w[0].onfinish=()=>{$()})},Cn=(n=!0)=>{ae(),c.length>0&&(A?se():pn(n)),F=!0},z=n=>{if(n=Math.min(Math.max(n,0),.9999),A)w.forEach(e=>{e.currentTime=e.effect.getComputedTiming().delay+v()*n,e.pause()});else{let e=`-${v()*n}ms`;g.forEach(t=>{c.length>0&&(f(t,"animation-delay",e),f(t,"animation-play-state","paused"))})}},An=n=>{w.forEach(e=>{e.effect.updateTiming({delay:W(),duration:v(),easing:B(),iterations:S(),fill:N(),direction:D()})}),n!==void 0&&z(n)},vn=(n=!0,e)=>{p(()=>{g.forEach(t=>{f(t,"animation-name",O||null),f(t,"animation-duration",`${v()}ms`),f(t,"animation-timing-function",B()),f(t,"animation-delay",e!==void 0?`-${e*v()}ms`:`${W()}ms`),f(t,"animation-fill-mode",N()||null),f(t,"animation-direction",D()||null);let s=S()===1/0?"infinite":S().toString();f(t,"animation-iteration-count",s),n&&f(t,"animation-name",`${O}-alt`),p(()=>{f(t,"animation-name",O||null)})})})},E=(n=!1,e=!0,t)=>(n&&h.forEach(s=>{s.update(n,e,t)}),A?An(t):vn(e,t),a),ce=(n=!1,e)=>(h.forEach(t=>{t.progressStart(n,e)}),bn(),U=n,F||Cn(),E(!1,!0,e),a),fe=n=>(h.forEach(e=>{e.progressStep(n)}),z(n),a),le=(n,e,t)=>(U=!1,h.forEach(s=>{s.progressEnd(n,e,t)}),t!==void 0&&(R=t),x=!1,k=!0,n===0?(_=D()==="reverse"?"normal":"reverse",_==="reverse"&&(k=!1),A?(E(),z(1-e)):(I=(1-e)*v()*-1,E(!1,!1))):n===1&&(A?(E(),z(e)):(I=e*v()*-1,E(!1,!1))),n!==void 0&&(G(()=>{R=void 0,_=void 0,I=void 0},{oneTimeCallback:!0}),m||wn()),a),bn=()=>{F&&(A?w.forEach(n=>{n.pause()}):g.forEach(n=>{f(n,"animation-play-state","paused")}),H=!0)},ue=()=>(h.forEach(n=>{n.pause()}),bn(),a),de=()=>{Y=void 0,$()},an=()=>{Y&&clearTimeout(Y)},me=()=>{if(an(),p(()=>{g.forEach(n=>{c.length>0&&f(n,"animation-play-state","running")})}),c.length===0||g.length===0)$();else{let n=W()||0,e=v()||0,t=S()||1;isFinite(t)&&(Y=setTimeout(de,n+e*t+Tn)),Ae(g[0],()=>{an(),p(()=>{ge(),p($)})})}},ge=()=>{g.forEach(n=>{b(n,"animation-duration"),b(n,"animation-delay"),b(n,"animation-play-state")})},he=()=>{w.forEach(n=>{n.play()}),(c.length===0||g.length===0)&&$()},Ee=()=>{A?(z(0),An()):vn()},wn=n=>new Promise(e=>{n?.sync&&(M=!0,G(()=>M=!1,{oneTimeCallback:!0})),F||Cn(),x&&(Ee(),x=!1),K&&(T=h.length+1,K=!1);let t=()=>{hn(s,V),e()},s=()=>{hn(t,q),e()};G(s,{oneTimeCallback:!0}),Wn(t,{oneTimeCallback:!0}),h.forEach(d=>{d.play()}),A?he():me(),H=!1}),ye=()=>{h.forEach(n=>{n.stop()}),F&&(En(),F=!1),kn(),q.forEach(n=>n.c(0,a)),q.length=0},Ln=(n,e)=>{let t=c[0];return t!==void 0&&(t.offset===void 0||t.offset===0)?t[n]=e:c=[{offset:0,[n]:e},...c],a};return a={parentAnimation:m,elements:g,childAnimations:h,id:fn,animationFinish:$,from:Ln,to:(n,e)=>{let t=c[c.length-1];return t!==void 0&&(t.offset===void 0||t.offset===1)?t[n]=e:c=[...c,{offset:1,[n]:e}],a},fromTo:(n,e,t)=>Ln(n,e).to(n,t),parent:ne,play:wn,pause:ue,stop:ye,destroy:_n,keyframes:ie,addAnimation:te,addElement:ee,update:E,fill:Zn,direction:Gn,iterations:Xn,duration:Qn,easing:Jn,delay:jn,getWebAnimations:gn,getKeyframes:qn,getFill:N,getDirection:D,getDelay:W,getIterations:S,getEasing:B,getDuration:v,afterAddRead:Kn,afterAddWrite:On,afterClearStyles:Hn,afterStyles:Yn,afterRemoveClass:Mn,afterAddClass:Un,beforeAddRead:Rn,beforeAddWrite:xn,beforeClearStyles:zn,beforeStyles:Bn,beforeRemoveClass:Nn,beforeAddClass:Vn,onFinish:G,isRunning:Dn,progressStart:ce,progressStep:fe,progressEnd:le}};var We="ionViewWillEnter",$e="ionViewDidEnter",Re="ionViewWillLeave",xe="ionViewDidLeave",Ke="ionViewWillUnload";var Oe=()=>new Promise(i=>p(()=>p(()=>i()))),Se=i=>Sn(void 0,null,function*(){let o=i;if(o){if(o.componentOnReady!=null){if((yield o.componentOnReady())!=null)return}else if(o.__registerHost!=null){yield new Promise(l=>p(l));return}yield Promise.all(Array.from(o.children).map(Se))}});var Ve=i=>{if(i.classList.contains("ion-page"))return i;let o=i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return o||i};export{Ie as a,We as b,$e as c,Re as d,xe as e,Ke as f,Oe as g,Se as h,Ve as i};
