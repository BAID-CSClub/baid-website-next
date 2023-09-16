import{_ as $,r as g,w as L,a as T,o as P,b as c,c as r,d as t,F as b,e as x,n as C,f as p,i as w,g as d,u as _,t as v,p as I,h as S,j as y,k as M,l as H,m as j,q as B,s as A,v as D,x as R,y as V,z as q,A as Z}from"./index-0de60ae3.js";import{_ as E}from"./ReadMore-20e1aa48.js";import{_ as k}from"./NotFancyTitle-d620d195.js";import F from"./db-a255e1f7.js";import z from"./db-6bd74177.js";import{d as O,a as U}from"./Home-bff5a34e.js";const W={class:"h-screen w-full overflow-hidden relative"},Q=["src","alt"],Y={class:"absolute right-10 bottom-10"},G=["onClick"],J={__name:"CarouselVertical",props:["images"],setup(n){const e=n,o=g(0),s=g("0vh");let a;L(o,u=>{a&&a.stop(),a=T({from:s.value,to:u*-100+"vh",onUpdate(f){s.value=f},duration:300})});let i=setInterval(()=>{o.value=(o.value+1)%e.images.length},5e3);P(()=>{clearInterval(i)});function l(){clearInterval(i),i=setInterval(()=>{o.value=(o.value+1)%e.images.length},5e3)}return(u,f)=>(c(),r("div",W,[t("div",{class:"absolute flex flex-col w-full",style:C({top:s.value})},[(c(!0),r(b,null,x(e.images,h=>(c(),r("img",{key:h,src:h,alt:h,class:"h-screen w-full dimmer object-cover"},null,8,Q))),128))],4),t("div",Y,[(c(!0),r(b,null,x(e.images,(h,m)=>(c(),r("div",{key:h,class:p([{"important-bg-white":o.value===m},"dot w-3 h-3 my-3 cursor-pointer"]),onClick:()=>{o.value=m,l()}},null,10,G))),128))])]))}},K=$(J,[["__scopeId","data-v-2b8ec19d"]]);const N=n=>(I("data-v-be345c07"),n=n(),S(),n),X={class:"h-screen m-t-[-4.25rem] relative overflow-hidden mb-45px"},tt={class:"absolute w-full h-screen"},et=N(()=>t("div",{class:"absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black"},null,-1)),st={class:"absolute bottom-15% font-sans left-0 right-0 pointer-events-none"},ot={class:"max-w-77rem ma px-20px"},at={class:"text-20 color-white text-shadow-lg m-0"},lt=N(()=>t("p",{class:"text-7 color-white"}," Welcome to Beijing Academy International Division (BAID)! ",-1)),nt=y('<span class="text-6 font-sans select-none" data-v-be345c07>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-be345c07><div class="middle transition-all op-0" data-v-be345c07></div><div class="left transition-all" data-v-be345c07></div><div class="right transition-all" data-v-be345c07></div></div>',2),it=[nt],ct={__name:"FirstSection",setup(n){const e=w("data");function o(s){const a=document.querySelector(s);a&&a.scrollIntoView({behavior:"smooth"})}return(s,a)=>(c(),r("div",X,[t("div",tt,[d(K,{images:_(e).carousel_images},null,8,["images"])]),et,t("div",st,[t("div",ot,[t("h1",at,v(_(e).head),1),lt])]),t("div",{class:"absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity",onClick:a[0]||(a[0]=i=>o("#secondSection"))},it)]))}},rt=$(ct,[["__scopeId","data-v-be345c07"]]),dt="/assets/sample_video-d6617a00.mp4",_t={class:""},ut={class:"section"},vt={class:"flex"},ht={class:"flex-1 mr-4"},pt={class:"color-[var(--standard-blue)] text-9 m-t-0"},mt=["innerHTML"],ft={class:"flex justify-end m-t-5"},gt={class:"ml-4 flex-1 flex justify-center items-center"},wt={class:"w-480px h-270px",controls:""},bt=["src"],xt={__name:"SecondSection",setup(n){const e=w("data");return(o,s)=>(c(),r("div",_t,[t("div",ut,[t("div",vt,[t("div",ht,[t("h2",pt,v(_(e).introduction_title),1),t("pre",{innerHTML:_(e).introduction},null,8,mt),t("div",ft,[d(E,{to:"/about#overview"})])]),t("div",gt,[t("video",wt,[t("source",{src:_(dt),type:"video/mp4"},null,8,bt),M(" Your browser does not support the video tag. ")])])])])]))}};const $t={__name:"PhilosophyBlock",props:["title","content","image","index","active","deactivate"],setup(n){const e=n,o=H(()=>e.active===e.index),s=g(!1);let a;return L(o,i=>{i?a=setTimeout(()=>s.value=!0,300):(clearTimeout(a),s.value=!1)}),(i,l)=>(c(),r("div",{class:p(["h-100 color-white bg-cover relative transition-all transition-duration-.3s",{"w-33%":o.value,"w-25%":!o.value}]),style:C({backgroundImage:"url("+n.image+")"}),onMousemove:l[0]||(l[0]=u=>i.$emit("activate")),onMouseleave:l[1]||(l[1]=u=>i.$emit("deactivate"))},[t("div",{class:p(["w-full h-full bg-#103c74 bg-op-70 transition transition-duration-.5s relative",{"!bg-op-10":o.value}])},[t("pre",{class:p(["text-6 leading-normal text-right",{"op-0":!s.value,"op-100":s.value}])},v(e.content),3),t("h2",{class:p(["text-8 !m-0 tracking-wide text-center write-vertical-left",{center:!o.value,right:o.value}])},v(e.title),3)],2)],38))}},yt=$($t,[["__scopeId","data-v-6fdeb9f7"]]),kt={class:"bg-[var(--standard-blue)] mb-15"},Lt={class:"section"},Ct={class:"flex m-t-10 m-auto justify-items-center"},It={__name:"EducationPhilosophy",setup(n){const e=w("data"),o=["motto","spirit","key_competency","cultivation"],s=g(null);return(a,i)=>(c(),r("div",kt,[t("div",Lt,[d(k,{cn:"办学理念",en:"Education Philosophy",color:"white"}),t("div",Ct,[(c(),r(b,null,x(o,(l,u)=>d(yt,{key:l,title:_(e)[l+"_title"],content:_(e)[l+"_content"],image:"https://images.unsplash.com/photo-1693047995769-80b8b4af4eee",index:u,active:s.value,onActivate:f=>s.value=u,onDeactivate:i[0]||(i[0]=f=>s.value=null)},null,8,["title","content","index","active","onActivate"])),64))])])]))}},St={class:"relative flex section important:py-20 md:flex-row flex-col items-center"},Mt=y('<div class="absolute left-20px top-0"><svg width="56.55765920826161" height="53" viewBox="0 0 56.55765920826161 53" fill="none"><defs><rect id="path_0" x="0" y="0" width="56.55765920826162" height="53"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><path id="path 1" fill-rule="evenodd" style="fill:#122a28;" transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)" opacity="1" d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "></path><path id="path 2" fill-rule="evenodd" style="fill:#122a28;" transform="translate(0 0)  rotate(0 12.345280171360665 26.5)" opacity="1" d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "></path></g></g></g></svg></div>',1),Ht={class:"m-l-30 m-r-20 flex-1"},jt={class:"tracking-wide"},Bt=["innerHTML"],At={class:"w-full text-right font-title text-5"},Dt=["src"],Nt=y('<div class="absolute right-20px bottom-0"><svg width="56.55765920826161" height="53" viewBox="0 0 56.55765920826161 53" fill="none"><defs><rect id="path_0" x="0" y="0" width="56.55765920826162" height="53"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><path id="path 1" fill-rule="evenodd" style="fill:#122a28;" transform="translate(0 0)  rotate(0 12.345280171360665 26.5)" opacity="1" d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "></path><path id="path 2" fill-rule="evenodd" style="fill:#122a28;" transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)" opacity="1" d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "></path></g></g></g></svg></div>',1),Tt={__name:"QuoteMessage",setup(n){const e=w("data");return(o,s)=>(c(),r("div",St,[Mt,t("div",Ht,[t("h2",jt,[t("pre",{innerHTML:_(e).principal_message},null,8,Bt)]),t("p",At," —— "+v(_(e).principal_name),1)]),t("img",{src:_(e).principal_avatar,alt:"Avatar",class:"object-contain md:w-20% md:m-r-30 md:m-t-0 m-t-10 w-1/2 min-w-50 h-80 flex-2"},null,8,Dt),Nt]))}},Pt={class:"section"},Rt={class:"flex items-center md:flex-row flex-col m-t-20"},Vt=t("div",{class:"w-full bg-gray-300 h-60"},null,-1),qt={class:"w-full h-max bg-[var(--standard-red)] p-8"},Zt={class:"color-white text-8"},Et=["innerHTML"],Ft=t("div",{class:"w-full bg-gray-300 h-90"},null,-1),zt={__name:"AdmissionResults",setup(n){const{locale:e}=j({useScope:"global"}),o=w("data");return(s,a)=>{const i=B("router-link");return c(),r("div",Pt,[d(k,{cn:"遇见BAID",en:"Meet BAID",color:"red"}),t("div",Rt,[Vt,t("div",qt,[t("h3",Zt,v(s.$t("HomePage.AdmissionResults.TitleSub")),1),t("pre",{class:"color-white op-90 m-b-10",innerHTML:_(o).admission_results_content},null,8,Et),d(i,{to:`${_(e)}/about`,class:"color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"},{default:A(()=>[M(" Read More ")]),_:1},8,["to"])]),Ft])])}}};const Ot=n=>(I("data-v-6ea7e469"),n=n(),S(),n),Ut={class:"section"},Wt={class:"flex items-center justify-between"},Qt={class:"font-sans"},Yt=Ot(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor",d:"M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"})],-1)),Gt={class:"flex h-130"},Jt={class:"flex-1 relative b-1 b-black b-solid b-r-0 m-t--1px m-b--1px"},Kt=["src"],Xt={class:"absolute bottom-0 w-full special-bg"},te={class:"font-sans color-white text-9 mb-2 ml-10"},ee={class:"font-sans color-white text-7 mb-10 ml-10"},se={class:"w-85 flex flex-col"},oe=["onClick"],ae={class:"w-50% ml-3 mt-3"},le=["src"],ne={__name:"HomeNews",props:["newsList"],setup(n){const e=n,o=D(),s=g(0),a=g(!1);function i(l){l===s.value||a.value||(a.value=!0,setTimeout(()=>{s.value=l,a.value=!1},300))}return(l,u)=>{const f=B("router-link");return c(),r("div",Ut,[t("div",Wt,[d(k,{cn:"新闻",en:"News",color:"blue"}),d(f,{class:"flex items-center gap-1 color-black decoration-none op-80 hover:op-100 transition",to:"/"+l.$i18n.locale+"/news"},{default:A(()=>[t("span",Qt,v(l.$t("HomePage.ReadMore")),1),Yt]),_:1},8,["to"])]),t("div",Gt,[t("div",Jt,[t("div",{class:p(["transition-opacity-300 h-full cursor-pointer",{"op-0":a.value}]),onClick:u[0]||(u[0]=h=>_(o).push(e.newsList[s.value].href))},[t("img",{src:e.newsList[s.value].cover,alt:"",class:"w-full h-full object-cover"},null,8,Kt),t("div",Xt,[t("h2",te,v(e.newsList[s.value].title),1),t("p",ee,v(e.newsList[s.value].abstract),1)])],2)]),t("div",se,[(c(!0),r(b,null,x(e.newsList.slice(0,4),(h,m)=>(c(),r("div",{class:p(["h-25% flex b-1 b-black b-solid transition-all-300 bg-white m-t--1px m-b--1px",{"scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]":s.value===m&&!a.value}]),key:m,onClick:pe=>i(m)},[t("div",ae,[t("p",{class:p(["font-sans color-gray-8 text-4 mb-0 transition-color-300",{"!color-gray-2":s.value===m&&!a.value}])},v(h.date.toLocaleString().substring(0,10)),3),t("h3",{class:p(["my-1 font-sans color-[var(--standard-blue)] text-6 transition-color-300",{"color-white":s.value===m&&!a.value}]),style:{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2","white-space":"pre-wrap"}},v(h.title),3)]),t("img",{src:h.cover,class:p(["w-50% transition-all-300 object-cover aspect-4/3",{"m-2":s.value===m&&!a.value}])},null,10,le)],10,oe))),128))])])])}}},ie=$(ne,[["__scopeId","data-v-6ea7e469"]]),ce="/assets/homeBg1-337b7353.jpg",re={id:"firstSection"},de={id:"secondSection"},_e={id:"educationPhilosophy"},ue={id:"quote"},ve={id:"admissionResults"},he={key:0,id:"news"},$e={__name:"HomePage",setup(n){const{locale:e}=j({useScope:"global"}),o=H(()=>e.value==="zh-CN"?O:U);R("data",o);const s=V(),a=D();s.params.lang||a.push("/"+e.value);const i=g([]);return q(()=>{let l;s.params.lang==="zh-CN"?l=Object.values(F):l=Object.values(z),l.sort((u,f)=>new Date(f.date)-new Date(u.date)),i.value=l}),(l,u)=>(c(),r("div",null,[t("section",re,[d(rt)]),t("section",de,[d(xt)]),t("section",_e,[d(It)]),t("section",ue,[d(Tt,{author:"WHO",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!",avatar:_(ce)},null,8,["avatar"])]),t("section",ve,[d(zt)]),i.value.length?(c(),r("section",he,[d(ie,{newsList:i.value},null,8,["newsList"])])):Z("",!0)]))}};export{$e as default};
