import{A as k,b as i,S,a as C}from"./swiper.min-8e546bee.js";import{l as _,r as A,b as t,c as l,C as d,A as m,m as b,F as c,e as f,u as g,G as B,f as h,q as x}from"./index-e1008ff7.js";const z={key:2,class:"absolute bottom-3 flex left-50% translate-x--50% z-1"},$={__name:"MobileCard",props:{bg:{type:String,default:"white"},border:{type:Boolean,default:!0},items:{default:void 0},autoplay:{default:!1}},emits:["change"],setup(n,{emit:p}){const e=n,v=_(()=>e.autoplay?[k,i]:[i]),s=A(0),w=p;function y(r){s.value!==r&&(s.value=r,w("change"))}return(r,u)=>(t(),l("div",{class:h(["rounded-4 min-h-35 w-full shadow-lg box-border overflow-hidden relative transition-colors m-y-5 color-black",{"bg-[var(--standard-blue)] !color-white":e.bg==="blue","bg-white !color-[var(--standard-blue)] border-[var(--standard-blue)]":e.bg==="white","border-solid":e.border}])},[n.items?(t(),m(g(C),{key:1,"slides-per-view":1,onSlideChange:u[0]||(u[0]=o=>y(o.activeIndex)),loop:!0,"auto-height":!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:v.value},{default:b(()=>[(t(!0),l(c,null,f(e.items,(o,a)=>(t(),m(g(S),{key:a},{default:b(()=>[d(r.$slots,"item",B({ref_for:!0},o,{index:a}))]),_:2},1024))),128))]),_:3},8,["modules"])):d(r.$slots,"default",{key:0}),n.items?(t(),l("div",z,[(t(!0),l(c,null,f(e.items,(o,a)=>(t(),l("div",{key:a,class:h(["h-2 m-x-1 rounded-1 transition-all z-1",{"bg-[var(--standard-blue)]":e.bg==="white","bg-white":e.bg==="blue","w-6":s.value%e.items.length===a,"w-2 op-70":s.value%e.items.length!=a}])},null,2))),128))])):x("",!0)],2))}};export{$ as _};
