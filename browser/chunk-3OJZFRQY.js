import{e as s}from"./chunk-FP7EQKGB.js";var l=()=>{document.addEventListener("backbutton",()=>{})},u=()=>{let c=document,o=!1;c.addEventListener("backbutton",()=>{if(o)return;let i=0,n=[],a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:i++})}}});c.dispatchEvent(a);let d=t=>s(void 0,null,function*(){try{if(t?.handler){let e=t.handler(r);e!=null&&(yield e)}}catch(e){console.error(e)}}),r=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach(e=>{e.priority>=t.priority&&(t=e)}),o=!0,n=n.filter(e=>e.id!==t.id),d(t).then(()=>o=!1)}};r()})},f=100,b=99;export{l as a,u as b,f as c,b as d};
