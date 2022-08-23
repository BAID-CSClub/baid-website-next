import{h as M,a as H}from"./homeBg2.e4cc07bd.js";import{h as A}from"./homeBg3.4be7193f.js";import{_ as $,r as b,w as I,a as j,o as R,b as a,c as n,d as t,F as v,e as g,n as p,f as _,g as c,h as k,u as w,i as C,j as L,k as S,t as d,l as u,m as q,p as V,q as E}from"./index.58d2415c.js";import{_ as F}from"./NotFancyTitle.a66e1966.js";import{_ as N}from"./FancyTitle.1dda3280.js";const Z={class:"h-screen w-screen overflow-hidden relative"},D=["src","alt"],T={class:"absolute right-10 bottom-10"},z=["onClick"],U={__name:"CarouselVertical",props:["images"],setup(r){const e=r,s=b(0),i=b("0vh");let o;I(s,x=>{o&&o.stop(),o=j({from:i.value,to:x*-100+"vh",onUpdate(y){i.value=y},duration:300})});let l=setInterval(()=>{s.value=(s.value+1)%e.images.length},5e3);R(()=>{clearInterval(l)});function m(){clearInterval(l),l=setInterval(()=>{s.value=(s.value+1)%e.images.length},5e3)}return(x,y)=>(a(),n("div",Z,[t("div",{class:"absolute",style:_({top:i.value})},[(a(!0),n(v,null,g(e.images,(h,f)=>(a(),n("img",{key:h,src:h,alt:h,class:p(["h-screen w-screen brightness-80 object-cover",{"m-t--3.5px":f>0}])},null,10,D))),128))],4),t("div",T,[(a(!0),n(v,null,g(e.images,(h,f)=>(a(),n("div",{key:h,class:p([{"important-bg-white":s.value===f},"dot w-3 h-3 m-y-3 cursor-pointer"]),onClick:()=>{s.value=f,m()}},null,10,z))),128))])]))}},W=$(U,[["__scopeId","data-v-f6dec0e1"]]);const O={class:"h-screen m-t-[-4.25rem] relative overflow-hidden"},Q={class:"absolute top-0 w-screen h-screen"},G=k('<div class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black" data-v-3f1aadd8></div><div class="absolute bottom-15% font-sans left-0 right-0" data-v-3f1aadd8><div class="max-w-77rem ma p-x-20px" data-v-3f1aadd8><h1 class="text-20 color-white text-shadow-lg m-0" data-v-3f1aadd8> \u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\uFF01 </h1><p class="text-7 color-white" data-v-3f1aadd8> Welcome to Beijing Academy International Department (BAID)! </p></div></div>',2),J=k('<span class="text-6 font-sans select-none" data-v-3f1aadd8>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-3f1aadd8><div class="middle transition-all op-0" data-v-3f1aadd8></div><div class="left transition-all" data-v-3f1aadd8></div><div class="right transition-all" data-v-3f1aadd8></div></div>',2),K=[J],X={__name:"FirstSection",setup(r){const e=[M,H,A];function s(i){const o=document.querySelector(i);o&&o.scrollIntoView({behavior:"smooth"})}return(i,o)=>(a(),n("section",O,[t("div",Q,[c(W,{images:e})]),G,t("div",{class:"absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity",onClick:o[0]||(o[0]=l=>s("#secondSection"))},K)]))}},Y=$(X,[["__scopeId","data-v-3f1aadd8"]]),tt={class:"flex items-center w-min"},et={class:"m-r-2 flex items-center"},st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30",viewBox:"0 0 32.99999997656249 32.99999997656255",fill:"none"},B={__name:"ReadMore",props:{to:{type:String,required:!0},color:{type:String,required:!1,default:"var(--standard-blue)"}},setup(r){const e=r,{locale:s}=w({useScope:"global"});return(i,o)=>{const l=C("router-link");return a(),L(l,{to:"/"+u(s)+e.to,class:"decoration-none op-80 hover:op-100 active:op-70 transition-opacity"},{default:S(()=>[t("div",tt,[t("i",et,[(a(),n("svg",st,[t("path",{id:"\u5206\u7EC4 1","fill-rule":"evenodd",style:_({fill:e.color}),transform:"translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)",opacity:"1",d:"M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "},null,4)]))]),t("span",{class:"w-max font-sans tracking-wide",style:_({color:e.color})},d(i.$t("ReadMore")),5)])]),_:1},8,["to"])}}},ot={id:"secondSection",class:"p-y-90px"},at={class:"section"},lt={class:"color-[var(--standard-blue)] text-9 m-t-0"},nt={class:"content"},rt={class:"flex justify-end"},it={__name:"SecondSection",setup(r){return(e,s)=>(a(),n("section",ot,[t("div",at,[t("h2",lt,d(e.$t("HomePage.SecondSection.Title")),1),t("p",nt,d(e.$t("HomePage.SecondSection.Content")),1),t("div",rt,[c(B,{to:"/about"})])])]))}},ct={class:"font-dianzi m-l-3 text-8 font-300"},dt={class:"self-end content !m-b-8"},ut={__name:"PhilosophyBlock",props:["left","right","blue"],setup(r){const e=r;return(s,i)=>(a(),n("div",{class:p(["border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-50 h-75 justify-around",{"bg-[var(--standard-blue)] color-white":e.blue}])},[t("h2",ct,d(e.left),1),t("hr",{class:p(["m-x-2 h-70% self-center border-width-2 border-solid border-color-[var(--standard-blue)]",{"border-color-white":e.blue}])},null,2),t("p",dt,d(e.right),1)],2))}},_t={class:"contentArea"},mt={class:"grid md-grid-cols-[repeat(4,1fr)] sm-grid-cols-[repeat(2,1fr)] w-full m-t-10 justify-items-center gap-4"},ht={__name:"EducationPhilosophy",setup(r){const e=["HomePage.EducationPhilosophy.1","HomePage.EducationPhilosophy.2","HomePage.EducationPhilosophy.3","HomePage.EducationPhilosophy.4"];return(s,i)=>(a(),n("section",_t,[c(F,{cn:"\u529E\u5B66\u7406\u5FF5",en:"Education Philosophy",color:"blue"}),t("div",mt,[(a(),n(v,null,g(e,(o,l)=>c(ut,{key:o,left:s.$t(o+".left"),right:s.$t(o+".right"),blue:l%2===0,class:p({"m-t-8":l%3!==0})},null,8,["left","right","blue","class"])),64))])]))}},pt={class:"relative flex contentArea important:p-y-20 md:flex-row flex-col items-center"},ft=t("div",{class:"absolute left-20px top-0"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"56.55765920826161",height:"53",viewBox:"0 0 56.55765920826161 53",fill:"none"},[t("defs",null,[t("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("mask",{id:"bg-mask-0",fill:"white"},[t("use",{"xlink:href":"#path_0"})]),t("g",{mask:"url(#bg-mask-0)"},[t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("path",{id:"\u8DEF\u5F84 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)",opacity:"1",d:"M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "}),t("path",{id:"\u8DEF\u5F84 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "})])])])])],-1),vt={class:"m-l-30 m-r-20"},gt={class:"tracking-wide"},wt={class:"w-full text-right font-title text-5"},bt=["src"],xt=t("div",{class:"absolute right-20px bottom-0"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"56.55765920826161",height:"53",viewBox:"0 0 56.55765920826161 53",fill:"none"},[t("defs",null,[t("rect",{id:"path_0",x:"0",y:"0",width:"56.55765920826162",height:"53"})]),t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("mask",{id:"bg-mask-0",fill:"white"},[t("use",{"xlink:href":"#path_0"})]),t("g",{mask:"url(#bg-mask-0)"},[t("g",{opacity:"1",transform:"translate(0 0)  rotate(0 28.27882960413081 26.5)"},[t("path",{id:"\u8DEF\u5F84 1","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(0 0)  rotate(0 12.345280171360665 26.5)",opacity:"1",d:"M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "}),t("path",{id:"\u8DEF\u5F84 2","fill-rule":"evenodd",style:{fill:"#122a28"},transform:"translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)",opacity:"1",d:"M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "})])])])])],-1),yt={__name:"QuoteMessage",props:["author","content","avatar"],setup(r){const e=r;return(s,i)=>(a(),n("section",pt,[ft,t("div",vt,[t("h2",gt,d(e.content),1),t("p",wt,"\u2014\u2014 "+d(e.author),1)]),t("img",{src:e.avatar,alt:"Avatar",class:"object-cover md:w-30% md:m-r-30 md:m-t-0 m-t-10 w-1/2 min-w-50 h-50 flex-2"},null,8,bt),xt]))}},$t={class:"contentArea"},kt={class:"flex items-center md:flex-row flex-col m-t-20"},Ct=t("div",{class:"w-full bg-gray-300 h-60"},null,-1),Lt={class:"w-full h-max bg-[var(--standard-red)] p-8"},St={class:"color-white font-sans text-8 tracking-wide"},Bt=["innerHTML"],Pt=q(" Read More "),Mt=t("div",{class:"w-full bg-gray-300 h-90"},null,-1),Ht={__name:"AdmissionResults",setup(r){const{locale:e}=w({useScope:"global"});return(s,i)=>{const o=C("router-link");return a(),n("section",$t,[c(N,{top:"\u9047\u89C1BAID",btm:"Meet BAID",color:"red"}),t("div",kt,[Ct,t("div",Lt,[t("h1",St,d(s.$t("HomePage.AdmissionResults.title")),1),t("p",{class:"color-white tracking-wide font-sans op-90 m-b-10",style:{"line-height":"25px"},innerHTML:s.$t("HomePage.AdmissionResults.content")},null,8,Bt),c(o,{to:`${u(e)}/about`,class:"color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"},{default:S(()=>[Pt]),_:1},8,["to"])]),Mt])])}}},At={class:"absolute top-0 left-10 m-0 color-black font-500 font-sans"},It=["src"],jt={class:"m-5 h-min font-sans"},Rt={__name:"NewsBlock",props:["title","abstract","color","img","pos","link"],setup(r){const e=r;return(s,i)=>(a(),n("div",{class:"relative p-t-4 md:w-min w-full m-y-5",style:_({"align-self":e.pos})},[t("h1",At,d(e.title),1),t("div",{class:"bg-red w-25 h-8",style:_({"background-color":e.color})},null,4),t("div",{class:"bg-red w-1 h-8",style:_({"background-color":e.color})},null,4),t("img",{src:e.img,alt:"",class:"md:w-60 w-full h-90 object-cover"},null,8,It),t("div",{class:"flex md:w-60 w-full b-l-solid m-t--1 m-b-5",style:_({"border-left-color":e.color})},[t("p",jt,d(e.abstract),1)],4),c(B,{color:e.color,to:e.link},null,8,["color","to"])],4))}},P="/assets/homeBg1.337b7353.jpg",qt={class:"contentArea flex justify-around md:flex-row flex-col min-h-180"},Vt={__name:"HomeNews",props:["newsList"],setup(r){const e=r,{locale:s}=w({useScope:"global"});return(i,o)=>(a(),n("section",qt,[(a(!0),n(v,null,g(e.newsList,(l,m)=>(a(),L(Rt,{title:l[u(s)].title,abstract:l[u(s)].abstract,img:u(P),color:l[u(s)].color,pos:{0:"center",1:"start",2:"end"}[m%3],link:l[u(s)].link,key:m},null,8,["title","abstract","img","color","pos","link"]))),128))]))}},Tt={__name:"HomePage",setup(r){const e=b({news:[]});fetch("/data/HomePage.json").then(async l=>{e.value=await l.json()});const{locale:s}=w({useScope:"global"}),i=V(),o=E();return i.params.lang||o.push("/"+s.value),(l,m)=>(a(),n("div",null,[c(Y),c(it),c(ht),c(yt,{author:"WHO",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!",avatar:u(P)},null,8,["avatar"]),c(Ht),c(Vt,{newsList:e.value.news},null,8,["newsList"])]))}};export{Tt as default};
