import{_ as g}from"./MobileHead-ee3ff5aa.js";import{M as d}from"./MobileTitle-2ef5fd47.js";import{g as A,i as $,a as v,b as T,c as U,d as x,e as S,f as w}from"./AboutUs-1fed0bea.js";import{i as p,b as r,c as l,g as e,q as i,s as _,t as o,u as m,d as t,F as C,e as H,k as M,x as D,y as L,m as k}from"./index-ad8baab0.js";import{_ as b}from"./MobileCard-ad91a64b.js";import{_ as y}from"./MobileTitleSplash-4af84f8f.js";import"./swiper.min-202ff1a7.js";import"./autoplay-efbff9c1.js";const B={class:"section"},N=["innerHTML"],j={__name:"OverviewSection",setup(u){const a=p("data");return(s,n)=>(r(),l("div",null,[e(g,{img:m(A)},{default:i(()=>[_(o(s.$t("views.AboutUs")),1)]),_:1},8,["img"]),t("section",B,[e(d,null,{default:i(()=>[_(o(s.$t("AboutUs.Overview.Title")),1)]),_:1}),t("pre",{innerHTML:m(a).overview},null,8,N)])]))}},I={class:"section"},V={class:"flex flex-col h-auto color-black m-5"},E=["innerHTML"],F={class:"text-right"},O={__name:"AlumniSection",setup(u){const a=p("data");return(s,n)=>(r(),l("section",I,[e(d,null,{default:i(()=>[_(o(s.$t("AboutUs.Alumni.Title")),1)]),_:1}),e(b,{items:m(a).alumni,border:!1},{item:i(({content:c,name:f})=>[t("div",V,[t("p",{class:"p-3 box-border overflow-auto",innerHTML:c},null,8,E),t("p",F,"——"+o(f),1)])]),_:1},8,["items"])]))}},P={class:"color-white bg-[var(--standard-blue)]"},q={class:"section"},z={class:"flex flex-col gap-5"},Z={class:"text-24 font-bold font-sans"},G={__name:"DataSection",setup(u){const a=p("data");return(s,n)=>(r(),l("div",P,[t("section",q,[e(d,null,{default:i(()=>[_(o(s.$t("AboutUs.Data.Title")),1)]),_:1}),t("div",z,[(r(!0),l(C,null,H(m(a).data,c=>(r(),l("div",{key:c,class:"text-center"},[t("span",Z,o(c.content),1),t("p",null,o(c.name),1)]))),128))])])]))}},J={class:"section"},K=["innerHTML"],Q={class:"bg-yellow flex flex-col justify-center items-center h-45"},R=["src"],W={class:"font-sans"},X={__name:"AccreditationSection",setup(u){const a=p("data"),s=[{image:$,name:"AboutUs.Accreditation.AP"},{image:v,name:"AboutUs.Accreditation.ACT"},{image:T,name:"AboutUs.Accreditation.CIS"},{image:U,name:"AboutUs.Accreditation.Cambridge"},{image:x,name:"AboutUs.Accreditation.Apple"}];return(n,c)=>(r(),l("section",J,[e(d,null,{default:i(()=>[_(o(n.$t("AboutUs.Accreditation.Title")),1)]),_:1}),t("pre",{innerHTML:m(a).accreditation},null,8,K),e(b,{items:s,border:!1,autoplay:!0},{item:i(({image:f,name:h})=>[t("div",Q,[t("img",{src:f,class:"max-h-15 w-auto h-auto object-cover m-b-2"},null,8,R),t("span",W,o(n.$t(h)),1)])]),_:1})]))}},ct={__name:"AboutUs",setup(u){const{locale:a}=M({useScope:"global"}),s=D(()=>a.value==="zh-CN"?S:w);return L("data",s),(n,c)=>(r(),k(y,{top:n.$t("AboutUs.Splash.Top"),bottom:n.$t("AboutUs.Splash.Bottom"),color:"blue"},{default:i(()=>[t("section",null,[e(j),e(O),e(X),e(G)])]),_:1},8,["top","bottom"]))}};export{ct as default};
