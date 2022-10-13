import{_ as C,r as v,w as H,a as j,o as I,b as l,c as n,d as t,F as f,e as w,n as $,f as _,g as c,h as k,u as g,i as S,j as B,k as P,t as d,l as h,m as A,p as M,q as R}from"./index.a55b1e31.js";import{_ as L}from"./NotFancyTitle.64752bec.js";const q="/assets/Summer.e89c72be.webp",D="/assets/Autumn.a14e9b01.webp",N="/assets/Dongba1.862d2c15.webp",V="/assets/Dongba2.4a984e4b.webp";const E={class:"h-screen w-full overflow-hidden relative"},F=["src","alt"],Z={class:"absolute right-10 bottom-10"},T=["onClick"],z={__name:"CarouselVertical",props:["images"],setup(i){const e=i,o=v(0),a=v("0vh");let s;H(o,b=>{s&&s.stop(),s=j({from:a.value,to:b*-100+"vh",onUpdate(p){a.value=p},duration:300})});let r=setInterval(()=>{o.value=(o.value+1)%e.images.length},5e3);I(()=>{clearInterval(r)});function m(){clearInterval(r),r=setInterval(()=>{o.value=(o.value+1)%e.images.length},5e3)}return(b,p)=>(l(),n("div",E,[t("div",{class:"absolute flex flex-col w-full",style:$({top:a.value})},[(l(!0),n(f,null,w(e.images,u=>(l(),n("img",{key:u,src:u,alt:u,class:"h-screen w-full dimmer object-cover"},null,8,F))),128))],4),t("div",Z,[(l(!0),n(f,null,w(e.images,(u,x)=>(l(),n("div",{key:u,class:_([{"important-bg-white":o.value===x},"dot w-3 h-3 m-y-3 cursor-pointer"]),onClick:()=>{o.value=x,m()}},null,10,T))),128))])]))}},O=C(z,[["__scopeId","data-v-0cc2db60"]]);const U={class:"h-screen m-t-[-4.25rem] relative overflow-hidden"},W={class:"absolute top-0 w-full h-screen"},Q=k('<div class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black" data-v-035d4795></div><div class="absolute bottom-15% font-sans left-0 right-0 pointer-events-none" data-v-035d4795><div class="max-w-77rem ma p-x-20px" data-v-035d4795><h1 class="text-20 color-white text-shadow-lg m-0" data-v-035d4795> \u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\uFF01 </h1><p class="text-7 color-white" data-v-035d4795> Welcome to Beijing Academy International Division (BAID)! </p></div></div>',2),Y=k('<span class="text-6 font-sans select-none" data-v-035d4795>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-035d4795><div class="middle transition-all op-0" data-v-035d4795></div><div class="left transition-all" data-v-035d4795></div><div class="right transition-all" data-v-035d4795></div></div>',2),G=[Y],J={__name:"FirstSection",setup(i){const e=[N,q,V,D];function o(a){const s=document.querySelector(a);s&&s.scrollIntoView({behavior:"smooth"})}return(a,s)=>(l(),n("div",U,[t("div",W,[c(O,{images:e})]),Q,t("div",{class:"absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity",onClick:s[0]||(s[0]=r=>o("#secondSection"))},G)]))}},K=C(J,[["__scopeId","data-v-035d4795"]]),X={class:"flex items-center w-min"},tt={class:"m-r-2 flex items-center"},et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30",viewBox:"0 0 32.99999997656249 32.99999997656255",fill:"none"},st={__name:"ReadMore",props:{to:{type:String,required:!0},color:{type:String,required:!1,default:"var(--standard-blue)"}},setup(i){const e=i,{locale:o}=g({useScope:"global"});return(a,s)=>{const r=S("router-link");return l(),B(r,{to:"/"+h(o)+e.to,class:"decoration-none op-80 hover:op-100 active:op-70 transition-opacity"},{default:P(()=>[t("div",X,[t("i",tt,[(l(),n("svg",et,[t("path",{id:"\u5206\u7EC4 1","fill-rule":"evenodd",style:$({fill:e.color}),transform:"translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)",opacity:"1",d:"M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "},null,4)]))]),t("span",{class:"w-max font-sans tracking-wide",style:$({color:e.color})},d(a.$t("HomePage.ReadMore")),5)])]),_:1},8,["to"])}}},ot="/assets/sample_video.d6617a00.mp4",at={class:""},lt={class:"contentArea"},nt={class:"flex"},it={class:"flex-1 mr-4"},rt={class:"color-[var(--standard-blue)] text-9 m-t-0"},ct={class:"flex justify-end m-t-5"},dt={class:"ml-4 flex-1 flex justify-center items-center"},ut={class:"w-480px h-270px",controls:""},_t=["src"],ht={__name:"SecondSection",setup(i){return(e,o)=>(l(),n("div",at,[t("div",lt,[t("div",nt,[t("div",it,[t("h2",rt,d(e.$t("HomePage.SecondSection.Title")),1),t("pre",null,d(e.$t("HomePage.SecondSection.Content")),1),t("div",ct,[c(st,{to:"/about#overview"})])]),t("div",dt,[t("video",ut,[t("source",{src:h(ot),type:"video/mp4"},null,8,_t),A(" Your browser does not support the video tag. ")])])])])]))}},mt={class:"text-9 !m-0 write-vertical-left tracking-wider"},pt={class:"self-end write-vertical-left text-6 leading-normal text-right min-w-120px"},vt={__name:"PhilosophyBlock",props:["left","right","blue"],setup(i){const e=i;return(o,a)=>(l(),n("div",{class:_(["border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-52 h-80 justify-around p-x-3 p-y-6 m-x-4",{"bg-[var(--standard-blue)] color-white":e.blue}])},[t("h2",mt,d(e.left),1),t("hr",{class:_(["m-x-2 h-75% self-center border-width-2 border-solid border-color-[var(--standard-blue)]",{"border-color-white":e.blue}])},null,2),t("pre",pt,d(e.right),1)],2))}},ft={class:"contentArea"},wt={class:"grid md-grid-cols-[repeat(4,1fr)] sm-grid-cols-[repeat(2,1fr)] w-full m-t-10 justify-items-center gap-4"},gt={__name:"EducationPhilosophy",setup(i){const e=["HomePage.EducationPhilosophy.1","HomePage.EducationPhilosophy.2","HomePage.EducationPhilosophy.3","HomePage.EducationPhilosophy.4"];return(o,a)=>(l(),n("div",ft,[c(L,{cn:"\u529E\u5B66\u7406\u5FF5",en:"Education Philosophy",color:"blue"}),t("div",wt,[(l(),n(f,null,w(e,(s,r)=>c(vt,{key:s,left:o.$t(s+".left"),right:o.$t(s+".right"),blue:r%2===0,class:_({"m-t-8":r%2!==0})},null,8,["left","right","blue","class"])),64))])]))}},bt={class:"relative flex contentArea important:p-y-20 md:flex-row flex-col items-center"},xt=t("div",{class:"absolute left-20px top-0"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"56.55765920826161",height:"53",viewBox:"0 0 56.55765920826161 53",fill:"none"},[t("defs",null,[t("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("mask",{id:"bg-mask-0",fill:"white"},[t("use",{"xlink:href":"#path_0"})]),t("g",{mask:"url(#bg-mask-0)"},[t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("path",{id:"path 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)",opacity:"1",d:"M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "}),t("path",{id:"path 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "})])])])])],-1),$t={class:"m-l-30 m-r-20"},yt={class:"tracking-wide"},Ct={class:"w-full text-right font-title text-5"},Lt=["src"],kt=t("div",{class:"absolute right-20px bottom-0"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"56.55765920826161",height:"53",viewBox:"0 0 56.55765920826161 53",fill:"none"},[t("defs",null,[t("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("mask",{id:"bg-mask-0",fill:"white"},[t("use",{"xlink:href":"#path_0"})]),t("g",{mask:"url(#bg-mask-0)"},[t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("path",{id:"path 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "}),t("path",{id:"path 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)",opacity:"1",d:"M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "})])])])])],-1),St={__name:"QuoteMessage",props:["author","content","avatar"],setup(i){const e=i;return(o,a)=>(l(),n("div",bt,[xt,t("div",$t,[t("h2",yt,d(e.content),1),t("p",Ct,"\u2014\u2014 "+d(e.author),1)]),t("img",{src:e.avatar,alt:"Avatar",class:"object-cover md:w-30% md:m-r-30 md:m-t-0 m-t-10 w-1/2 min-w-50 h-50 flex-2"},null,8,Lt),kt]))}},Pt={class:"contentArea"},At={class:"flex items-center md:flex-row flex-col m-t-20"},Ht=t("div",{class:"w-full bg-gray-300 h-60"},null,-1),jt={class:"w-full h-max bg-[var(--standard-red)] p-8"},It={class:"color-white text-8"},Bt={class:"color-white op-90 m-b-10"},Mt=t("div",{class:"w-full bg-gray-300 h-90"},null,-1),Rt={__name:"AdmissionResults",setup(i){const{locale:e}=g({useScope:"global"});return(o,a)=>{const s=S("router-link");return l(),n("div",Pt,[c(L,{cn:"\u9047\u89C1BAID",en:"Meet BAID",color:"red"}),t("div",At,[Ht,t("div",jt,[t("h3",It,d(o.$t("HomePage.AdmissionResults.title")),1),t("pre",Bt,d(o.$t("HomePage.AdmissionResults.content")),1),c(s,{to:`${h(e)}/about`,class:"color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"},{default:P(()=>[A(" Read More ")]),_:1},8,["to"])]),Mt])])}}},y="/assets/homeBg1.337b7353.jpg";const qt={class:"section"},Dt={class:"flex justify-end"},Nt={class:"flex h-130"},Vt={class:"flex-1 relative"},Et=["src"],Ft={class:"font-sans color-white text-9 mb-2 ml-10"},Zt={class:"font-sans color-white text-7 mb-10 ml-10"},Tt={class:"w-80"},zt=["onClick"],Ot={class:"w-50% pl-3"},Ut=["src"],Wt={__name:"HomeNews",props:["newsList"],setup(i){const e=i,{locale:o}=g({useScope:"global"}),a=v(0),s=v(!1);function r(m){m===a.value||s.value||(s.value=!0,setTimeout(()=>{a.value=m,s.value=!1},300))}return(m,b)=>(l(),n("section",qt,[t("div",Dt,[c(L,{cn:"\u65B0\u95FB",en:"News",right:"",color:"blue"})]),t("div",Nt,[t("div",Vt,[t("img",{src:h(y),alt:"",class:"w-full h-full object-cover"},null,8,Et),t("div",{class:_(["absolute bottom-0 w-full special-bg transition-opacity-300",{"op-0":s.value}])},[t("h2",Ft,d(e.newsList[a.value][h(o)].title),1),t("p",Zt,d(e.newsList[a.value][h(o)].abstract),1)],2)]),t("div",Tt,[(l(!0),n(f,null,w(e.newsList,(p,u)=>(l(),n("div",{class:_(["flex-row flex b-1 h-32 transition-all-300 bg-white",{"scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]":a.value===u&&!s.value}]),key:u,onClick:x=>r(u)},[t("div",Ot,[t("p",{class:_(["font-sans color-gray-8 text-4 mt-3 mb-0 transition-color-300",{"!color-gray-2":a.value===u&&!s.value}])},d(p.date),3),t("p",{class:_(["font-sans color-[var(--standard-blue)] text-6 transition-color-300",{"color-white":a.value===u&&!s.value}])},d(p[h(o)].title),3)]),t("img",{src:h(y),class:_(["w-50% transition-all-300 object-cover",{"m-2":a.value===u&&!s.value}])},null,10,Ut)],10,zt))),128))])])]))}},Qt=C(Wt,[["__scopeId","data-v-d8adf2b9"]]),Yt={id:"firstSection"},Gt={id:"secondSection"},Jt={id:"educationPhilosophy"},Kt={id:"quote"},Xt={id:"admissionResults"},te={id:"homeNews"},oe={__name:"HomePage",setup(i){const e=v({news:[]});fetch("/data/HomePage.json").then(async r=>{e.value=await r.json()});const{locale:o}=g({useScope:"global"}),a=M(),s=R();return a.params.lang||s.push("/"+o.value),(r,m)=>(l(),n("div",null,[t("section",Yt,[c(K)]),t("section",Gt,[c(ht)]),t("section",Jt,[c(gt)]),t("section",Kt,[c(St,{author:"WHO",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!",avatar:h(y)},null,8,["avatar"])]),t("section",Xt,[c(Rt)]),t("section",te,[c(Qt,{newsList:e.value.news},null,8,["newsList"])])]))}};export{oe as default};
