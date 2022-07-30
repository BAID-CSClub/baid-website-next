import{h as g}from"./homeBg1.5b6e9a3a.js";import{_ as w,r as h,w as x,a as C,o as b,b as o,c as a,d as t,F as m,e as u,n as $,f,g as d,h as y,i as k,j as S,k as B,t as _}from"./index.2df6e72e.js";const L="/assets/homeBg2.15f4912c.webp",F="/assets/homeBg3.c00c4cc2.webp";const M={class:"h-screen w-screen overflow-hidden relative"},I=["src"],A={class:"absolute right-10 bottom-10"},j=["onClick"],D={__name:"FirstCarousel",setup(n){const s=[g,L,F],e=h(0),l=h("0vh");let c;return x(e,p=>{c&&c.stop(),c=C({from:l.value,to:p*-100+"vh",onUpdate(v){l.value=v},duration:300})}),b(()=>{setInterval(()=>{e.value=(e.value+1)%3},5e3)}),(p,v)=>(o(),a("div",M,[t("div",{class:"h-max w-screen absolute",style:$({top:l.value})},[(o(),a(m,null,u(s,(r,i)=>t("img",{key:r,src:r,class:f(["h-screen w-screen brightness-80 m-0",{"m-t--4px":i>0}])},null,10,I)),64))],4),t("div",A,[(o(),a(m,null,u(s,(r,i)=>t("div",{key:r,class:f([{"important-bg-white":e.value===i},"dot w-4 h-4 m-y-3"]),onClick:O=>e.value=i},null,10,j)),64))])]))}},H=w(D,[["__scopeId","data-v-f0cfef43"]]);const N={class:"h-screen m-t-[-4.25rem] relative overflow-hidden"},P={class:"absolute top-0 w-screen h-screen"},V=y('<div class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black" data-v-1c053124></div><div class="absolute bottom-15% font-sans left-0 right-0" data-v-1c053124><div class="max-w-77rem ma p-x-20px" data-v-1c053124><h1 class="text-20 color-white text-shadow-lg m-0" data-v-1c053124> \u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\uFF01 </h1><p class="text-7 color-white" data-v-1c053124> Welcome to Beijing Academy International Department (BAID)! </p></div></div><div class="absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col" data-v-1c053124><span class="text-6 font-sans select-none" data-v-1c053124>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-1c053124><div class="middle transition-all op-0" data-v-1c053124></div><div class="left transition-all" data-v-1c053124></div><div class="right transition-all" data-v-1c053124></div></div></div>',3),z={__name:"FirstSection",setup(n){return(s,e)=>(o(),a("section",N,[t("div",P,[d(H)]),V]))}},R=w(z,[["__scopeId","data-v-1c053124"]]),Z={class:"flex items-center w-min"},q=t("i",{class:"m-r-2 flex items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30",viewBox:"0 0 32.99999997656249 32.99999997656255",fill:"none"},[t("path",{id:"\u5206\u7EC4 1","fill-rule":"evenodd",style:{fill:"#103c74"},transform:"translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)",opacity:"1",d:"M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "})])],-1),E={class:"w-max"},T={__name:"ReadMore",props:{to:{type:String,required:!0}},setup(n){const s=n;return(e,l)=>{const c=k("router-link");return o(),S(c,{to:s.to,class:"color-[var(--standard-blue)] decoration-none font-600 op-80 hover:op-100 active:op-70 transition-opacity"},{default:B(()=>[t("div",Z,[q,t("span",E,_(e.$t("ReadMore")),1)])]),_:1},8,["to"])}}},U={class:"contentArea"},W={class:"color-[var(--standard-blue)] text-9 font-sans"},G={style:{"line-height":"25px","letter-spacing":"1px"},class:"font-500 font-sans"},J={class:"flex justify-end"},K={__name:"SecondSection",setup(n){return(s,e)=>(o(),a("section",U,[t("h2",W,_(s.$t("HomePage.SecondSection.Title")),1),t("p",G,_(s.$t("HomePage.SecondSection.Content")),1),t("div",J,[d(T,{to:"/demo"})])]))}},Y={__name:"HomePage",setup(n){return(s,e)=>(o(),a("div",null,[d(R),d(K)]))}};export{Y as default};
