import{r as v,b as o,c as p,d as e,t as l,g as r,q as t,m,u as s,F as f,e as C,B as y,T as D,n as N}from"./index.926e0650.js";import{i as S}from"./homeBg1.cd847ee1.js";import{a as w,S as _}from"./swiper.min.0484c9cb.js";import{A as h}from"./pagination.min.d0e85359.js";import{A as j,M as k}from"./MobilePopup.97e77602.js";const $="/assets/French.a2816b00.svg",x="/assets/1.071a2d23.jpeg?webp",B="/assets/2.4bb3df19.png?webp",F="/assets/1.13dc3996.jpeg?webp",A="/assets/2.a7251d5d.jpeg?webp",H="/assets/3.ef9841d8.jpeg?webp",X="/assets/4.25e824a3.jpeg?webp",I="/assets/XHXC.8ab918cc.png?webp",T="/assets/NS.47406d93.png?webp",V="/assets/LY.6dc53aae.png?webp",i=[x,B],Y=[F,A,H,X],M=[{logo:$,bgColor:"rgba(255,251,243,1)",color:"rgba(18,42,43,1)",name:"StudentLife.Clubs.Club1.Name",description:"StudentLife.Clubs.Club1.Description",images:i},{logo:S,bgColor:"var(--standard-blue)",color:"white",name:"StudentLife.Clubs.Club2.Name",description:"StudentLife.Clubs.Club2.Description",images:Y},{logo:S,bgColor:"rgba(255, 195, 0, 1)",color:"white",name:"StudentLife.Clubs.Club3.Name",description:"StudentLife.Clubs.Club3.Description",images:i},{logo:I,bgColor:"var(--standard-red)",color:"white",name:"StudentLife.Clubs.Club4.Name",description:"StudentLife.Clubs.Club4.Description",images:i},{logo:T,bgColor:"rgba(255, 195, 0, 1)",color:"white",name:"StudentLife.Clubs.Club5.Name",description:"StudentLife.Clubs.Club5.Description",images:i},{logo:V,bgColor:"rgba(255,251,243,1)",color:"rgba(18,42,43,1)",name:"StudentLife.Clubs.Club6.Name",description:"StudentLife.Clubs.Club6.Description",images:i}],P="/assets/ZWTZY.5ff54f34.jpg?webp",Z="/assets/Camping.841b4fb1.jpg?webp",q={class:"color-white font-title text-10"},z={class:"color-yellow"},E={class:"text-6"},O={class:"my-4"},W=["src"],G=e("span",{class:"text-white m-4"},"(\u5DE6\u53F3\u6ED1\u52A8\u67E5\u770B\u66F4\u591A\u5185\u5BB9)",-1),L={__name:"SplashBlock",props:["title","image"],setup(d){const n=d,c=v(!1);return(g,u)=>(o(),p("div",{class:"flex justify-center items-center flex-col h-50% w-full bg-cover font-sans",style:N({"background-image":`url(${n.image})`})},[e("h2",q,[e("span",null,l(n.title[0]),1),e("span",z,l(n.title[1]),1),e("span",null,l(n.title.substr(2)),1)]),e("span",{class:"decoration-none color-yellow",onClick:u[0]||(u[0]=a=>c.value=!0)},"\u4E86\u89E3\u66F4\u591A"),r(D,{name:"fade",mode:"out-in"},{default:t(()=>[c.value?(o(),m(k,{key:0,onClose:u[1]||(u[1]=a=>c.value=!1)},{content:t(()=>[r(s(w),{modules:[s(h)],"slides-per-view":1,"space-between":10,loop:!0,autoHeight:!0},{default:t(()=>[(o(!0),p(f,null,C(s(M),a=>(o(),m(s(_),{key:a},{default:t(()=>[e("h3",E,l(g.$t(a.name)),1),e("p",O,l(g.$t(a.description)),1),r(s(w),{modules:[s(j),s(h)],"slides-per-view":1,"space-between":10,autoplay:{delay:2500,disableOnInteraction:!1}},{default:t(()=>[(o(!0),p(f,null,C(a.images,b=>(o(),m(s(_),{key:b},{default:t(()=>[e("img",{src:b,alt:"",class:"w-full object-cover aspect-3/2"},null,8,W)]),_:2},1024))),128))]),_:2},1032,["modules"])]),_:2},1024))),128))]),_:1},8,["modules"])]),description:t(()=>[G]),_:1})):y("",!0)]),_:1})],4))}},J={class:"w-screen h-[calc(100vh-5rem)] font-sans"},K=e("div",{class:"placeholder"},null,-1),te={__name:"StudentLife",setup(d){return(n,c)=>(o(),p("div",J,[K,r(L,{title:"\u5B66\u751F\u793E\u56E2",image:s(Z)},null,8,["image"]),r(L,{title:"\u7279\u8272\u6D3B\u52A8",image:s(P)},null,8,["image"])]))}};export{te as default};
