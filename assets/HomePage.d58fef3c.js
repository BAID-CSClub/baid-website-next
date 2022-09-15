import{_ as C,r as w,w as H,a as j,o as B,b as a,c as n,d as e,F as f,e as g,n as h,f as _,g as i,h as k,u as b,i as S,j as L,k as P,t as d,l as u,m as R,p as q,q as M}from"./index.bb095893.js";import{_ as x}from"./NotFancyTitle.cc5d2543.js";import{a as A,_ as V}from"./homeBg1.5e62448e.js";const E="/assets/Spring.a64a2816.webp",N="/assets/Summer.96dd2041.webp",F="/assets/Autumn.ca62bdef.webp",D="/assets/Winter.c2ebcd0e.webp";const W={class:"h-screen w-full overflow-hidden relative"},z=["src","alt"],T={class:"absolute right-10 bottom-10"},U=["onClick"],Z={__name:"CarouselVertical",props:["images"],setup(r){const t=r,s=w(0),c=w("0vh");let o;H(s,$=>{o&&o.stop(),o=j({from:c.value,to:$*-100+"vh",onUpdate(y){c.value=y},duration:300})});let l=setInterval(()=>{s.value=(s.value+1)%t.images.length},5e3);B(()=>{clearInterval(l)});function m(){clearInterval(l),l=setInterval(()=>{s.value=(s.value+1)%t.images.length},5e3)}return($,y)=>(a(),n("div",W,[e("div",{class:"absolute",style:_({top:c.value})},[(a(!0),n(f,null,g(t.images,(p,v)=>(a(),n("img",{key:p,src:p,alt:p,class:h(["h-screen w-full brightness-80 object-cover",{"m-t--3.5px":v>0}])},null,10,z))),128))],4),e("div",T,[(a(!0),n(f,null,g(t.images,(p,v)=>(a(),n("div",{key:p,class:h([{"important-bg-white":s.value===v},"dot w-3 h-3 m-y-3 cursor-pointer"]),onClick:()=>{s.value=v,m()}},null,10,U))),128))])]))}},O=C(Z,[["__scopeId","data-v-e0f2aede"]]);const G={class:"h-screen m-t-[-4.25rem] relative overflow-hidden"},J={class:"absolute top-0 w-full h-screen"},K=k('<div class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black" data-v-2c5579c5></div><div class="absolute bottom-15% font-sans left-0 right-0" data-v-2c5579c5><div class="max-w-77rem ma p-x-20px" data-v-2c5579c5><h1 class="text-20 color-white text-shadow-lg m-0" data-v-2c5579c5> \u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\uFF01 </h1><p class="text-7 color-white" data-v-2c5579c5> Welcome to Beijing Academy International Department (BAID)! </p></div></div>',2),Q=k('<span class="text-6 font-sans select-none" data-v-2c5579c5>Learn More</span><div class="arrow relative w-full h-1 m-t-1 transition-all" data-v-2c5579c5><div class="middle transition-all op-0" data-v-2c5579c5></div><div class="left transition-all" data-v-2c5579c5></div><div class="right transition-all" data-v-2c5579c5></div></div>',2),X=[Q],Y={__name:"FirstSection",setup(r){const t=[E,N,F,D];function s(c){const o=document.querySelector(c);o&&o.scrollIntoView({behavior:"smooth"})}return(c,o)=>(a(),n("section",G,[e("div",J,[i(O,{images:t})]),K,e("div",{class:"absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity",onClick:o[0]||(o[0]=l=>s("#secondSection"))},X)]))}},tt=C(Y,[["__scopeId","data-v-2c5579c5"]]),et={class:"flex items-center w-min"},st={class:"m-r-2 flex items-center"},ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30",viewBox:"0 0 32.99999997656249 32.99999997656255",fill:"none"},I={__name:"ReadMore",props:{to:{type:String,required:!0},color:{type:String,required:!1,default:"var(--standard-blue)"}},setup(r){const t=r,{locale:s}=b({useScope:"global"});return(c,o)=>{const l=S("router-link");return a(),L(l,{to:"/"+u(s)+t.to,class:"decoration-none op-80 hover:op-100 active:op-70 transition-opacity"},{default:P(()=>[e("div",et,[e("i",st,[(a(),n("svg",ot,[e("path",{id:"\u5206\u7EC4 1","fill-rule":"evenodd",style:_({fill:t.color}),transform:"translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)",opacity:"1",d:"M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "},null,4)]))]),e("span",{class:"w-max font-sans tracking-wide",style:_({color:t.color})},d(c.$t("ReadMore")),5)])]),_:1},8,["to"])}}},at={id:"secondSection",class:"p-y-90px"},lt={class:"section"},nt={class:"color-[var(--standard-blue)] text-9 m-t-0"},ct={class:"flex justify-end m-t-5"},rt={__name:"SecondSection",setup(r){return(t,s)=>(a(),n("section",at,[e("div",lt,[e("h2",nt,d(t.$t("HomePage.SecondSection.Title")),1),e("pre",null,d(t.$t("HomePage.SecondSection.Content")),1),e("div",ct,[i(I,{to:"/about"})])])]))}},it={class:"font-dianzi m-l-3 text-8 font-300"},dt={class:"self-end content !m-b-8 m-r-3"},ut={__name:"PhilosophyBlock",props:["left","right","blue"],setup(r){const t=r;return(s,c)=>(a(),n("div",{class:h(["border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-55 h-80 justify-around",{"bg-[var(--standard-blue)] color-white":t.blue}])},[e("h2",it,d(t.left),1),e("hr",{class:h(["m-x-2 h-70% self-center border-width-2 border-solid border-color-[var(--standard-blue)]",{"border-color-white":t.blue}])},null,2),e("p",dt,d(t.right),1)],2))}},_t={class:"contentArea"},mt={class:"grid md-grid-cols-[repeat(4,1fr)] sm-grid-cols-[repeat(2,1fr)] w-full m-t-10 justify-items-center gap-4"},pt={__name:"EducationPhilosophy",setup(r){const t=["HomePage.EducationPhilosophy.1","HomePage.EducationPhilosophy.2","HomePage.EducationPhilosophy.3","HomePage.EducationPhilosophy.4"];return(s,c)=>(a(),n("section",_t,[i(x,{cn:"\u529E\u5B66\u7406\u5FF5",en:"Education Philosophy",color:"blue"}),e("div",mt,[(a(),n(f,null,g(t,(o,l)=>i(ut,{key:o,left:s.$t(o+".left"),right:s.$t(o+".right"),blue:l%2===0,class:h({"m-t-8":l%3!==0})},null,8,["left","right","blue","class"])),64))])]))}},ht={class:"contentArea"},vt={class:"flex items-center md:flex-row flex-col m-t-20"},ft=e("div",{class:"w-full bg-gray-300 h-60"},null,-1),gt={class:"w-full h-max bg-[var(--standard-red)] p-8"},bt={class:"color-white text-8"},wt={class:"color-white op-90 m-b-10"},xt=R(" Read More "),$t=e("div",{class:"w-full bg-gray-300 h-90"},null,-1),yt={__name:"AdmissionResults",setup(r){const{locale:t}=b({useScope:"global"});return(s,c)=>{const o=S("router-link");return a(),n("section",ht,[i(x,{cn:"\u9047\u89C1BAID",en:"Meet BAID",color:"red"}),e("div",vt,[ft,e("div",gt,[e("h3",bt,d(s.$t("HomePage.AdmissionResults.title")),1),e("pre",wt,d(s.$t("HomePage.AdmissionResults.content")),1),i(o,{to:`${u(t)}/about`,class:"color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"},{default:P(()=>[xt]),_:1},8,["to"])]),$t])])}}},Ct={class:"absolute top-0 left-10 m-0 color-black font-500 font-sans"},kt=["src"],St={class:"m-5 h-min font-sans"},Lt={__name:"NewsBlock",props:["title","abstract","color","img","pos","link"],setup(r){const t=r;return(s,c)=>(a(),n("div",{class:"relative p-t-4 md:w-min w-full m-y-5",style:_({"align-self":t.pos})},[e("h1",Ct,d(t.title),1),e("div",{class:"bg-red w-25 h-8",style:_({"background-color":t.color})},null,4),e("div",{class:"bg-red w-1 h-8",style:_({"background-color":t.color})},null,4),e("img",{src:t.img,alt:"",class:"md:w-60 w-full h-90 object-cover"},null,8,kt),e("div",{class:"flex md:w-60 w-full b-l-solid m-t--1 m-b-5",style:_({"border-left-color":t.color})},[e("p",St,d(t.abstract),1)],4),i(I,{color:t.color,to:t.link},null,8,["color","to"])],4))}},Pt={class:"contentArea"},At={class:"flex justify-end mb--15"},It={class:"flex justify-around md:flex-row flex-col min-h-180"},Ht={__name:"HomeNews",props:["newsList"],setup(r){const t=r,{locale:s}=b({useScope:"global"});return(c,o)=>(a(),n("section",Pt,[e("div",At,[i(x,{cn:"\u65B0\u95FB",en:"News",right:"",color:"blue"})]),e("div",It,[(a(!0),n(f,null,g(t.newsList,(l,m)=>(a(),L(Lt,{title:l[u(s)].title,abstract:l[u(s)].abstract,img:u(A),color:l[u(s)].color,pos:{0:"center",1:"start",2:"end"}[m%3],link:l[u(s)].link,key:m},null,8,["title","abstract","img","color","pos","link"]))),128))])]))}},qt={__name:"HomePage",setup(r){const t=w({news:[]});fetch("/data/HomePage.json").then(async l=>{t.value=await l.json()});const{locale:s}=b({useScope:"global"}),c=q(),o=M();return c.params.lang||o.push("/"+s.value),(l,m)=>(a(),n("div",null,[i(tt),i(rt),i(pt),i(V,{author:"WHO",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!",avatar:u(A)},null,8,["avatar"]),i(yt),i(Ht,{newsList:t.value.news},null,8,["newsList"])]))}};export{qt as default};
