import{c as y,d as x,e as w}from"./chunk-XUDWX2R5.js";import"./chunk-YUCP47GW.js";import{b as C}from"./chunk-RJM2LQ76.js";import"./chunk-5Z5ZZYNM.js";import{b as k,c as I}from"./chunk-NX5S36VC.js";import{c as r,d as A,g as E,h as S,k as M}from"./chunk-BASM3GTO.js";import{h,i as m}from"./chunk-GUDIR2QP.js";import{e as p}from"./chunk-FP7EQKGB.js";var L=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",_=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}",T=class{constructor(i){M(this,i),this.ionChange=S(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(e,t=!0,s=!0)=>{let{el:n,isColumnVisible:l}=this;if(l){let o=e.offsetTop-3*e.clientHeight+e.clientHeight/2;n.scrollTop!==o&&(this.canExitInputMode=s,n.scroll({top:o,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(e,t)=>{t?(e.classList.add(u),e.part.add(v)):(e.classList.remove(u),e.part.remove(v))},this.inputModeChange=e=>{if(!this.numericInput)return;let{useInputMode:t,inputModeColumn:s}=e.detail,n=s===void 0||s===this.el;if(!t||!n){this.setInputModeActive(!1);return}this.setInputModeActive(!0)},this.setInputModeActive=e=>{if(this.isScrolling){this.scrollEndCallback=()=>{this.isActive=e};return}this.isActive=e},this.initializeScrollListener=()=>{let e=k("ios"),{el:t}=this,s,n=this.activeItem,l=()=>{m(()=>{s&&(clearTimeout(s),s=void 0),this.isScrolling||(e&&y(),this.isScrolling=!0);let o=t.getBoundingClientRect(),c=o.x+o.width/2,d=o.y+o.height/2,a=t.shadowRoot.elementFromPoint(c,d);n!==null&&this.setPickerItemActiveState(n,!1),!(a===null||a.disabled)&&(a!==n&&(e&&x(),this.canExitInputMode&&this.exitInputMode()),n=a,this.setPickerItemActiveState(a,!0),s=setTimeout(()=>{this.isScrolling=!1,e&&w();let{scrollEndCallback:f}=this;f&&(f(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;let g=a.getAttribute("data-index");if(g===null)return;let P=parseInt(g,10),b=this.items[P];b.value!==this.value&&this.setValue(b.value)},250))})};m(()=>{t.addEventListener("scroll",l),this.destroyScrollListener=()=>{t.removeEventListener("scroll",l)}})},this.exitInputMode=()=>{let{parentEl:e}=this;e!=null&&(e.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.disabled=!1,this.items=[],this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){let i=t=>{if(t[0].isIntersecting){let{activeItem:n,el:l}=this;this.isColumnVisible=!0;let o=h(l).querySelector(`.${u}`);o&&this.setPickerItemActiveState(o,!1),this.scrollActiveItemIntoView(),n&&this.setPickerItemActiveState(n,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)};new IntersectionObserver(i,{threshold:.001}).observe(this.el);let e=this.parentEl=this.el.closest("ion-picker-internal");e!==null&&e.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){var i;let{activeItem:e,items:t,isColumnVisible:s,value:n}=this;s&&(e?this.scrollActiveItemIntoView():((i=t[0])===null||i===void 0?void 0:i.value)!==n&&this.setValue(t[0].value))}scrollActiveItemIntoView(){return p(this,null,function*(){let i=this.activeItem;i&&this.centerPickerItemInView(i,!1,!1)})}setValue(i){return p(this,null,function*(){let{items:e}=this;this.value=i;let t=e.find(s=>s.value===i&&s.disabled!==!0);t&&this.ionChange.emit(t)})}get activeItem(){let i=`.picker-item[data-value="${this.value}"]${this.disabled?"":":not([disabled])"}`;return h(this.el).querySelector(i)}render(){let{items:i,color:e,disabled:t,isActive:s,numericInput:n}=this,l=I(this);return r(A,{exportparts:`${V}, ${v}`,disabled:t,tabindex:t?null:0,class:C(e,{[l]:!0,"picker-column-active":s,"picker-column-numeric-input":n})},r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),i.map((o,c)=>{let d=t||o.disabled||!1;return r("button",{tabindex:"-1",class:{"picker-item":!0},"data-value":o.value,"data-index":c,onClick:a=>{this.centerPickerItemInView(a.target,!0)},disabled:d,part:V},o.text)}),r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"))}get el(){return E(this)}static get watchers(){return{value:["valueChange"]}}},u="picker-item-active",V="wheel-item",v="active";T.style={ios:L,md:_};export{T as ion_picker_column_internal};
