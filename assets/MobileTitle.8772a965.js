import{S as p,a as _}from"./swiper.min.73c7575e.js";import{r as d,b as t,c as a,x as f,j as m,k as b,F as v,e as h,l as g,v as k,f as w,z as y,A as S,B as $,o as x,d as C,n as B,_ as z}from"./index.b562848c.js";const M={key:2,class:"absolute bottom-3 flex left-50% translate-x--50%"},E=["onClick"],Y={__name:"MobileCard",props:{bg:{type:String,default:"white"},border:{type:Boolean,default:!0},items:{default:void 0}},emits:["change"],setup(o,{emit:i}){const e=o,r=d(0);function n(s){r.value!==s&&s<e.items.length&&s>=0&&(r.value=s,i("change"))}return(s,u)=>(t(),a("div",{class:w(["rounded-4 min-h-35 w-full shadow-lg box-border overflow-hidden relative transition-colors m-y-3",{"bg-[var(--standard-blue)] color-white":e.bg==="blue","bg-white color-[var(--standard-blue)] border-[var(--standard-blue)]":e.bg==="white","border-solid":e.border}])},[o.items?(t(),m(g(p),{key:1,"slides-per-view":1,onSlideChange:u[0]||(u[0]=c=>n(c.activeIndex))},{default:b(()=>[(t(!0),a(v,null,h(e.items,(c,l)=>(t(),m(g(_),{key:l},{default:b(()=>[f(s.$slots,"item",y(S(c)))]),_:2},1024))),128))]),_:3})):f(s.$slots,"default",{key:0}),o.items?(t(),a("div",M,[(t(!0),a(v,null,h(e.items,(c,l)=>(t(),a("div",{key:l,class:w(["h-2 m-x-1 rounded-1 transition-all",{"bg-[var(--standard-blue)]":e.bg==="white","bg-white":e.bg==="blue","w-6":r.value===l,"w-2 op-70":r.value!=l}]),onClick:N=>n(l)},null,10,E))),128))])):k("",!0)],2))}},L={class:"w-full relative z-0 h-260px overflow-hidden"},A={__name:"MobileHead",props:["img"],setup(o){const i=o,e=d(260),r=d(0);function n(){e.value=260-window.scrollY,r.value=window.scrollY}return $(()=>{window.addEventListener("scroll",n)}),x(()=>{window.removeEventListener("scroll",n)}),(s,u)=>(t(),a("section",L,[C("div",{class:"absolute w-full h-full flex items-center justify-center bg-cover bg-center",style:B({"background-image":`url(${i.img})`,height:e.value+"px",top:r.value+"px"})},null,4)]))}},j={},F={class:"font-sans font-title"};function H(o,i){return t(),a("h2",F,[f(o.$slots,"default")])}const I=z(j,[["render",H]]);export{I as M,Y as _,A as a};
