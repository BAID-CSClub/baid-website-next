import{b as c,c as p,n as H,u as _,m as P,q as a,d as e,r as k,z as S,v as j,A as z,l as E,g as o,s as f,F as C,e as L,t as m,C as T,D,f as v}from"./index.29d02137.js";import{_ as y,M as $}from"./MobileTitle.d8d34e5e.js";import{_ as A}from"./MobileHead.5a6b4a70.js";import{f as B}from"./Autumn.845e9c96.js";import{S as Y,a as Z}from"./swiper.min.b2050171.js";const I="/assets/mobileHomeBg.5a44ee5f.svg",N={__name:"HomeBackground",setup(w){return(s,t)=>(c(),p("div",{class:"z--1 absolute w-screen h-screen top-0 bg-cover bg-center",style:H({"background-image":"url("+_(I)+")"})},null,4))}},R=e("div",{class:"w-20 h-20 color-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},[e("g",{fill:"none"},[e("path",{d:"M9.125 7.184A.75.75 0 0 0 8 7.834v4.333a.75.75 0 0 0 1.125.65l4.125-2.384a.5.5 0 0 0 0-.866L9.125 7.184zM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14z",fill:"currentColor",style:{"--darkreader-inline-fill":"currentColor"},"data-darkreader-inline-fill":""})])])],-1),V=[R],F={__name:"VideoCard",props:["cover","src"],setup(w){const s=w;return(t,i)=>(c(),P(y,{border:!1},{default:a(()=>[e("div",{class:"flex items-center justify-center w-full h-35",style:H({background:`url(${s.cover})`})},V,4)]),_:1}))}},q={class:"section"},O={class:"flex items-center justify-between m-4"},Q=["src"],G={class:"w-45%"},J={class:"m-0 text-xl"},K={class:"flex justify-end m-4"},U={class:"font-sans"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor",d:"M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"})],-1),X={__name:"NewsSection",setup(w){const s=k([]),t=S(),i=j();return z(()=>{fetch(`/${t.params.lang}/db.json`).then(l=>{l.status===200&&l.json().then(r=>{r=Object.values(r),r.sort((g,d)=>new Date(d.date)-new Date(g.date)),s.value=r})})}),(l,r)=>{const g=E("router-link");return c(),p("section",q,[o($,null,{default:a(()=>[f("\u65B0\u95FB")]),_:1}),(c(!0),p(C,null,L(s.value.slice(0,4),(d,b)=>(c(),P(y,{key:b,bg:b%2===0?"blue":"white",onClick:n=>_(i).push(d.href)},{default:a(()=>[e("div",O,[e("img",{src:d.cover,class:"rounded-xl w-45% h-35 object-cover",alt:""},null,8,Q),e("div",G,[e("h3",J,m(d.title),1)])])]),_:2},1032,["bg","onClick"]))),128)),e("div",K,[o(g,{class:"flex items-center gap-1 color-black decoration-none op-100 font-18px",to:"/"+l.$i18n.locale+"/news"},{default:a(()=>[e("span",U,m(l.$t("HomePage.ReadMore")),1),W]),_:1},8,["to"])])])}}},M="/assets/Autumn.be19a7db.jpg",ee={class:"section relative"},te=e("div",{class:"absolute w-5 h-5 left-3 top-0"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 56.55765920826161 53",fill:"none"},[e("defs",null,[e("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),e("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[e("mask",{id:"bg-mask-0",fill:"white"},[e("use",{"xlink:href":"#path_0"})]),e("g",{mask:"url(#bg-mask-0)"},[e("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[e("path",{id:"path 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)",opacity:"1",d:"M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "}),e("path",{id:"path 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "})])])])])],-1),se={class:"m-5 flex justify-between"},oe=e("div",{class:"w-48%"},[e("p",{class:"m-0 my-3 font-sans"}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ipsam, minus doloribus beatae fuga dolore rem ")],-1),le=["src"],ae=e("div",{class:"absolute w-5 h-5 right-3 bottom-0"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 56.55765920826161 53",fill:"none"},[e("defs",null,[e("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),e("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[e("mask",{id:"bg-mask-0",fill:"white"},[e("use",{"xlink:href":"#path_0"})]),e("g",{mask:"url(#bg-mask-0)"},[e("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[e("path",{id:"path 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "}),e("path",{id:"path 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)",opacity:"1",d:"M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "})])])])])],-1),ne={__name:"PrincipalMessage",setup(w){return(s,t)=>(c(),p("section",ee,[te,e("div",se,[oe,e("img",{src:_(M),alt:"",class:"w-48% object-cover rounded-xl"},null,8,le)]),ae]))}},ie="/assets/Dongba_1.5a3f89ed.jpg",re=["src"],ce=e("div",{class:"border-l-3 p-l-3 border-white absolute bottom-10 left-10% color-white w-70% z-1"},[e("h2",{class:"m-t-3 mb-1 font-black text-8"},[f(" \u8FD9\u91CC\u662F"),e("br"),f("\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\uFF01 ")]),e("p",{class:"font-sans m0 m-b-3"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ")],-1),ue={class:"absolute bottom-3 left-50% translate-x--50% flex z-1"},de=["onClick"],he=e("span",null,"Learn More",-1),me=e("div",{class:"w10 h10 ma"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 48 48"},[e("g",{fill:"none"},[e("path",{d:"M8.366 16.116a1.25 1.25 0 0 0 0 1.768l14.75 14.75a1.25 1.25 0 0 0 1.768 0l14.75-14.75a1.25 1.25 0 0 0-1.768-1.768L24 29.982L10.134 16.116a1.25 1.25 0 0 0-1.768 0z",fill:"currentColor",style:{"--darkreader-inline-fill":"currentColor"},"data-darkreader-inline-fill":""})])])],-1),fe=[he,me],pe={__name:"HomeSplash",setup(w){const s=[M,ie],t=k(0);let i;const l=k(!0);function r(n){t.value!==n&&n<s.length&&n>=0&&(t.value=n,i.slideTo(n))}let g=0;function d(n){g=n.touches[0].clientY}function b(n){n.touches[0].clientY-g<-100&&(l.value=!1)}return(n,h)=>(c(),p("div",{class:v(["relative",{"h-screen overflow-hidden":l.value}])},[T(n.$slots,"default"),e("div",{class:v(["bg-blue fixed top-0 w-full h-full transition-opacity-300 z-1",{"op-0 pointer-events-none":!l.value}])},[e("div",{class:"w-full h-90% relative",onTouchmove:b,onTouchstart:d},[o(_(Z),{class:"h-full brightness-80",onSlideChange:h[0]||(h[0]=u=>r(u.activeIndex)),onSwiper:h[1]||(h[1]=u=>D(i)?i.value=u:i=u),"resistance-ratio":0},{default:a(()=>[(c(),p(C,null,L(s,u=>o(_(Y),{key:u},{default:a(()=>[e("img",{src:u,class:"w-full h-full object-cover",alt:"",srcset:""},null,8,re)]),_:2},1024)),64))]),_:1}),ce,e("div",ue,[(c(),p(C,null,L(s,(u,x)=>e("div",{key:x,class:v(["border-solid border-white rounded-50% w-3 h-3 m-x-1",{"bg-white":x===t.value}]),onClick:be=>r(x)},null,10,de)),64))])],32),e("div",{class:"text-center font-sans color-white absolute bottom-0 left-50% translate-x--50%",onClick:h[2]||(h[2]=u=>l.value=!1)},fe)],2)],2))}},_e={class:"section"},we=e("br",null,null,-1),ge={class:"m-5"},ve=e("div",{class:"flex h-35 justify-center items-center text-6"}," \u5185\u5BB9\u5B58\u7591 ",-1),Le={__name:"HomePage",setup(w){const s=k("white");return(t,i)=>(c(),P(pe,null,{default:a(()=>[o(N),o(A,{img:_(B)},{default:a(()=>[f(m(t.$t("views.HomePage")),1)]),_:1},8,["img"]),e("section",_e,[o($,null,{default:a(()=>[f(m(t.$t("HomePage.SecondSection.Title")),1)]),_:1}),o(F,{cover:_(B)},null,8,["cover"]),we,o($,null,{default:a(()=>[f(m(t.$t("HomePage.EducationPhilosophy.Title")),1)]),_:1}),o(y,{items:[{title:t.$t("HomePage.EducationPhilosophy.1.Top"),content:t.$t("HomePage.EducationPhilosophy.1.Bottom")},{title:t.$t("HomePage.EducationPhilosophy.2.Top"),content:t.$t("HomePage.EducationPhilosophy.2.Bottom")},{title:t.$t("HomePage.EducationPhilosophy.3.Top"),content:t.$t("HomePage.EducationPhilosophy.3.Bottom")},{title:t.$t("HomePage.EducationPhilosophy.4.Top"),content:t.$t("HomePage.EducationPhilosophy.4.Bottom")}],bg:s.value,onChange:i[0]||(i[0]=l=>s.value=s.value==="white"?"blue":"white")},{item:a(({title:l,content:r})=>[e("div",ge,[e("h3",{class:v(["m-y-0",{"color-[var(--standard-blue)]":s.value==="white","color-white":s.value==="blue"}])},m(l),3),e("p",{class:v(["m-y-3",{"color-black":s.value==="white","color-white":s.value==="blue"}])},m(r),3)])]),_:1},8,["items","bg"]),o($,null,{default:a(()=>[f("\u9047\u89C1BAID")]),_:1}),o(y,null,{default:a(()=>[ve]),_:1})]),o(ne),o(X)]),_:1}))}};export{Le as default};