import{p as _,r as h,O as f,b as l,c,g as p,F as u,e as v,f as d,d as s,t as a}from"./index.c5c210c7.js";import{_ as w}from"./NotFancyTitle.00c821c0.js";const m={class:"section"},x=["src"],b={class:"p-10 flex-1 flex flex-col"},g={class:"flex"},j={class:"mt-0 flex-1"},B=["href"],N=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[s("path",{fill:"currentColor",d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3h9z"})],-1),O=[N],k={class:"op-80"},y=s("div",{class:"flex-1"},null,-1),z={class:"op-50"},E={__name:"NewsPage",setup(D){const i=_(),n=h([]);return f(()=>{fetch(`/${i.params.lang}/db.json`).then(r=>{r.status===200&&r.json().then(t=>{t=Object.values(t),t.sort((e,o)=>new Date(o.date)-new Date(e.date)),n.value=t})})}),(r,t)=>(l(),c("section",m,[p(w,{cn:"\u65B0\u95FB",en:"News",color:"blue"}),(l(!0),c(u,null,v(n.value,(e,o)=>(l(),c("div",{key:e.id,class:d(["w-full border-solid border-[var(--standard-red)] flex h-70 my-10",{"flex-row-reverse !border-[var(--standard-blue)]":o%2}])},[s("img",{src:e.cover,alt:"",class:"w-50% h-full object-cover"},null,8,x),s("div",b,[s("div",g,[s("h2",j,a(e.title),1),s("a",{href:e.href,alt:"GOTO",class:d(["ml-3 mt--2px color-[var(--standard-red)] op-50 hover:op-100 transition",{"!color-[var(--standard-blue)]":o%2}])},O,10,B)]),s("p",k,a(e.description),1),y,s("p",z," \u53D1\u5E03\u4E8E "+a(e.date.split("T")[0])+" "+a(e.time.split(":").slice(0,2).join(":")),1)])],2))),128))]))}};export{E as default};