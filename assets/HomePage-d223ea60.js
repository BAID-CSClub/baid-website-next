import{_ as y,r as w,w as D,a as R,o as q,b as n,c,d as t,F as b,e as x,n as $,f as m,i as g,g as _,u as d,t as u,p as I,h as H,j as L,k as C,l as k,m as A,q as S,s as B,v as j,x as T,y as V,z as Z,A as P,B as E}from"./index-ad8baab0.js";import{_ as M}from"./NotFancyTitle-2a5747b6.js";import F from"./db-d5621d2a.js";import z from"./db-6bd74177.js";import{d as O,a as U}from"./Home-9986106d.js";const W={class:"h-screen w-full overflow-hidden relative"},Q=["src","alt"],Y={class:"absolute right-10 bottom-10"},G=["onClick"],J={__name:"CarouselVertical",props:["images"],setup(l){const e=l,a=w(0),s=w("0vh");let o;D(a,v=>{o&&o.stop(),o=R({from:s.value,to:v*-100+"vh",onUpdate(f){s.value=f},duration:300})});let i=setInterval(()=>{a.value=(a.value+1)%e.images.length},5e3);q(()=>{clearInterval(i)});function r(){clearInterval(i),i=setInterval(()=>{a.value=(a.value+1)%e.images.length},5e3)}return(v,f)=>(n(),c("div",W,[t("div",{class:"absolute flex flex-col w-full",style:$({top:s.value})},[(n(!0),c(b,null,x(e.images,p=>(n(),c("img",{key:p,src:p,alt:p,class:"h-screen w-full dimmer object-cover"},null,8,Q))),128))],4),t("div",Y,[(n(!0),c(b,null,x(e.images,(p,h)=>(n(),c("div",{key:p,class:m([{"important-bg-white":a.value===h},"dot w-3 h-3 my-3 cursor-pointer"]),onClick:()=>{a.value=h,r()}},null,10,G))),128))])]))}},K=y(J,[["__scopeId","data-v-2b8ec19d"]]);const N=l=>(I("data-v-be345c07"),l=l(),H(),l),X={class:"h-screen m-t-[-4.25rem] relative overflow-hidden mb-45px"},tt={class:"absolute w-full h-screen"},et=N(()=>t("div",{class:"absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black"},null,-1)),st={class:"absolute bottom-15% font-sans left-0 right-0 pointer-events-none"},ot={class:"max-w-77rem ma px-20px"},at={class:"text-20 color-white text-shadow-lg m-0"},lt=N(()=>t("p",{class:"text-7 color-white"}," Welcome to Beijing Academy International Division (BAID)! ",-1)),nt=L('<span class="text-6 font-sans select-none" data-v-be345c07>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-be345c07><div class="middle transition-all op-0" data-v-be345c07></div><div class="left transition-all" data-v-be345c07></div><div class="right transition-all" data-v-be345c07></div></div>',2),it=[nt],ct={__name:"FirstSection",setup(l){const e=g("data");function a(s){const o=document.querySelector(s);o&&o.scrollIntoView({behavior:"smooth"})}return(s,o)=>(n(),c("div",X,[t("div",tt,[_(K,{images:d(e).carousel_images},null,8,["images"])]),et,t("div",st,[t("div",ot,[t("h1",at,u(d(e).head),1),lt])]),t("div",{class:"absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity",onClick:o[0]||(o[0]=i=>a("#secondSection"))},it)]))}},rt=y(ct,[["__scopeId","data-v-be345c07"]]),dt={class:"flex items-center w-min"},_t={class:"m-r-2 flex items-center"},ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30",viewBox:"0 0 32.99999997656249 32.99999997656255",fill:"none"},pt={__name:"ReadMore",props:{to:{type:String,required:!0},color:{type:String,required:!1,default:"var(--standard-blue)"}},setup(l){const e=l,{locale:a}=C({useScope:"global"});return(s,o)=>{const i=k("router-link");return n(),A(i,{to:"/"+d(a)+e.to,class:"decoration-none op-80 hover:op-100 active:op-70 transition-opacity"},{default:S(()=>[t("div",dt,[t("i",_t,[(n(),c("svg",ut,[t("path",{id:"分组 1","fill-rule":"evenodd",style:$({fill:e.color}),transform:"translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)",opacity:"1",d:"M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "},null,4)]))]),t("span",{class:"w-max font-sans tracking-wide",style:$({color:e.color})},u(s.$t("HomePage.ReadMore")),5)])]),_:1},8,["to"])}}},ht="/assets/sample_video-d6617a00.mp4",mt={class:""},vt={class:"section"},ft={class:"flex"},wt={class:"flex-1 mr-4"},gt={class:"color-[var(--standard-blue)] text-9 m-t-0"},bt=["innerHTML"],xt={class:"flex justify-end m-t-5"},$t={class:"ml-4 flex-1 flex justify-center items-center"},yt={class:"w-480px h-270px",controls:""},Lt=["src"],Ct={__name:"SecondSection",setup(l){const e=g("data");return(a,s)=>(n(),c("div",mt,[t("div",vt,[t("div",ft,[t("div",wt,[t("h2",gt,u(d(e).introduction_title),1),t("pre",{innerHTML:d(e).introduction},null,8,bt),t("div",xt,[_(pt,{to:"/about#overview"})])]),t("div",$t,[t("video",yt,[t("source",{src:d(ht),type:"video/mp4"},null,8,Lt),B(" Your browser does not support the video tag. ")])])])])]))}},kt={class:"m-5"},St={class:"text-8 !m-0 tracking-wide"},Mt={class:"text-6 leading-normal text-right"},It={__name:"PhilosophyBlock",props:["top","bottom","blue"],setup(l){const e=l;return(a,s)=>(n(),c("div",{class:m(["border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] w-full h-48 max-w-100 box-border",{"bg-[var(--standard-blue)] color-white":e.blue}])},[t("div",kt,[t("h2",St,u(e.top),1),t("hr",{class:m(["w-70% self-center border-width-2 border-solid border-color-[var(--standard-blue)] my-3",{"border-color-white":e.blue}])},null,2),t("pre",Mt,u(e.bottom),1)])],2))}},Ht={class:"section"},Bt={class:"grid md-grid-cols-[repeat(2,1fr)] md-grid-rows-[repeat(2,1fr)] w-80% m-t-10 m-auto justify-items-center gap-8"},jt={__name:"EducationPhilosophy",setup(l){const e=g("data"),a=["motto","spirit","key_competency","cultivation"];return(s,o)=>(n(),c("div",Ht,[_(M,{cn:"办学理念",en:"Education Philosophy",color:"blue"}),t("div",Bt,[(n(),c(b,null,x(a,(i,r)=>_(It,{key:i,top:d(e)[i+"_title"],bottom:d(e)[i+"_content"],blue:r%2===0,class:m({"m-t-6":r%2!==0,"m-l-8":r>=2})},null,8,["top","bottom","blue","class"])),64))])]))}},Nt={class:"relative flex section important:py-20 md:flex-row flex-col items-center"},Dt=L('<div class="absolute left-20px top-0"><svg width="56.55765920826161" height="53" viewBox="0 0 56.55765920826161 53" fill="none"><defs><rect id="path_0" x="0" y="0" width="56.55765920826162" height="53"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><path id="path 1" fill-rule="evenodd" style="fill:#122a28;" transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)" opacity="1" d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "></path><path id="path 2" fill-rule="evenodd" style="fill:#122a28;" transform="translate(0 0)  rotate(0 12.345280171360665 26.5)" opacity="1" d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "></path></g></g></g></svg></div>',1),Rt={class:"m-l-30 m-r-20 flex-1"},qt={class:"tracking-wide"},At=["innerHTML"],Tt={class:"w-full text-right font-title text-5"},Vt=["src"],Zt=L('<div class="absolute right-20px bottom-0"><svg width="56.55765920826161" height="53" viewBox="0 0 56.55765920826161 53" fill="none"><defs><rect id="path_0" x="0" y="0" width="56.55765920826162" height="53"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><g opacity="1" transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"><path id="path 1" fill-rule="evenodd" style="fill:#122a28;" transform="translate(0 0)  rotate(0 12.345280171360665 26.5)" opacity="1" d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "></path><path id="path 2" fill-rule="evenodd" style="fill:#122a28;" transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)" opacity="1" d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "></path></g></g></g></svg></div>',1),Pt={__name:"QuoteMessage",setup(l){const e=g("data");return(a,s)=>(n(),c("div",Nt,[Dt,t("div",Rt,[t("h2",qt,[t("pre",{innerHTML:d(e).principal_message},null,8,At)]),t("p",Tt," —— "+u(d(e).principal_name),1)]),t("img",{src:d(e).principal_avatar,alt:"Avatar",class:"object-contain md:w-20% md:m-r-30 md:m-t-0 m-t-10 w-1/2 min-w-50 h-80 flex-2"},null,8,Vt),Zt]))}},Et={class:"section"},Ft={class:"flex items-center md:flex-row flex-col m-t-20"},zt=t("div",{class:"w-full bg-gray-300 h-60"},null,-1),Ot={class:"w-full h-max bg-[var(--standard-red)] p-8"},Ut={class:"color-white text-8"},Wt=["innerHTML"],Qt=t("div",{class:"w-full bg-gray-300 h-90"},null,-1),Yt={__name:"AdmissionResults",setup(l){const{locale:e}=C({useScope:"global"}),a=g("data");return(s,o)=>{const i=k("router-link");return n(),c("div",Et,[_(M,{cn:"遇见BAID",en:"Meet BAID",color:"red"}),t("div",Ft,[zt,t("div",Ot,[t("h3",Ut,u(s.$t("HomePage.AdmissionResults.TitleSub")),1),t("pre",{class:"color-white op-90 m-b-10",innerHTML:d(a).admission_results_content},null,8,Wt),_(i,{to:`${d(e)}/about`,class:"color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"},{default:S(()=>[B(" Read More ")]),_:1},8,["to"])]),Qt])])}}};const Gt=l=>(I("data-v-6ea7e469"),l=l(),H(),l),Jt={class:"section"},Kt={class:"flex items-center justify-between"},Xt={class:"font-sans"},te=Gt(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor",d:"M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"})],-1)),ee={class:"flex h-130"},se={class:"flex-1 relative b-1 b-black b-solid b-r-0 m-t--1px m-b--1px"},oe=["src"],ae={class:"absolute bottom-0 w-full special-bg"},le={class:"font-sans color-white text-9 mb-2 ml-10"},ne={class:"font-sans color-white text-7 mb-10 ml-10"},ie={class:"w-85 flex flex-col"},ce=["onClick"],re={class:"w-50% ml-3 mt-3"},de=["src"],_e={__name:"HomeNews",props:["newsList"],setup(l){const e=l,a=j(),s=w(0),o=w(!1);function i(r){r===s.value||o.value||(o.value=!0,setTimeout(()=>{s.value=r,o.value=!1},300))}return(r,v)=>{const f=k("router-link");return n(),c("div",Jt,[t("div",Kt,[_(M,{cn:"新闻",en:"News",color:"blue"}),_(f,{class:"flex items-center gap-1 color-black decoration-none op-80 hover:op-100 transition",to:"/"+r.$i18n.locale+"/news"},{default:S(()=>[t("span",Xt,u(r.$t("HomePage.ReadMore")),1),te]),_:1},8,["to"])]),t("div",ee,[t("div",se,[t("div",{class:m(["transition-opacity-300 h-full cursor-pointer",{"op-0":o.value}]),onClick:v[0]||(v[0]=p=>d(a).push(e.newsList[s.value].href))},[t("img",{src:e.newsList[s.value].cover,alt:"",class:"w-full h-full object-cover"},null,8,oe),t("div",ae,[t("h2",le,u(e.newsList[s.value].title),1),t("p",ne,u(e.newsList[s.value].abstract),1)])],2)]),t("div",ie,[(n(!0),c(b,null,x(e.newsList.slice(0,4),(p,h)=>(n(),c("div",{class:m(["h-25% flex b-1 b-black b-solid transition-all-300 bg-white m-t--1px m-b--1px",{"scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]":s.value===h&&!o.value}]),key:h,onClick:be=>i(h)},[t("div",re,[t("p",{class:m(["font-sans color-gray-8 text-4 mb-0 transition-color-300",{"!color-gray-2":s.value===h&&!o.value}])},u(p.date.toLocaleString().substring(0,10)),3),t("h3",{class:m(["my-1 font-sans color-[var(--standard-blue)] text-6 transition-color-300",{"color-white":s.value===h&&!o.value}]),style:{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2","white-space":"pre-wrap"}},u(p.title),3)]),t("img",{src:p.cover,class:m(["w-50% transition-all-300 object-cover aspect-4/3",{"m-2":s.value===h&&!o.value}])},null,10,de)],10,ce))),128))])])])}}},ue=y(_e,[["__scopeId","data-v-6ea7e469"]]),pe="/assets/homeBg1-337b7353.jpg",he={id:"firstSection"},me={id:"secondSection"},ve={id:"educationPhilosophy"},fe={id:"quote"},we={id:"admissionResults"},ge={key:0,id:"news"},ke={__name:"HomePage",setup(l){const{locale:e}=C({useScope:"global"}),a=T(()=>e.value==="zh-CN"?O:U);V("data",a);const s=Z(),o=j();s.params.lang||o.push("/"+e.value);const i=w([]);return P(()=>{let r;s.params.lang==="zh-CN"?r=Object.values(F):r=Object.values(z),r.sort((v,f)=>new Date(f.date)-new Date(v.date)),i.value=r}),(r,v)=>(n(),c("div",null,[t("section",he,[_(rt)]),t("section",me,[_(Ct)]),t("section",ve,[_(jt)]),t("section",fe,[_(Pt,{author:"WHO",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!",avatar:d(pe)},null,8,["avatar"])]),t("section",we,[_(Yt)]),i.value.length?(n(),c("section",ge,[_(ue,{newsList:i.value},null,8,["newsList"])])):E("",!0)]))}};export{ke as default};
