import{z as h,r as u,A as _,b as o,c as l,d as e,g as r,q as c,F as p,e as f,s as m,n as v,t as s,u as g,R as w}from"./index-99cd8b1c.js";import{M as b}from"./MobileTitle-fb586b94.js";import{_ as k}from"./MobileCard-6ae7878e.js";import x from"./db-d5621d2a.js";import N from"./db-6bd74177.js";import"./swiper.min-14b3228a.js";const y=e("div",{class:"placeholder"},null,-1),A={class:"section"},B={class:"w-full h-full bg-black bg-op-60 p-5 box-border"},V={class:"m0 text-white truncate"},z={class:"mt-1 color-white op-80"},C={class:"op-50 color-white"},D={class:"text-right mt-5"},E=e("svg",{width:"25",height:"25",viewBox:"0 0 20 20"},[e("path",{fill:"currentColor",d:"M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v7.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-2a.75.75 0 0 1 1.5 0v2A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5A3.25 3.25 0 0 1 6.25 3h2a.75.75 0 0 1 0 1.5h-2Zm4.25-.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-3.19a.75.75 0 0 1-.75-.75Z"})],-1),O={__name:"NewsPage",setup(M){const d=h(),n=u([]);return _(()=>{let a;d.params.lang==="zh-CN"?a=Object.values(x):a=Object.values(N),a.sort((i,t)=>new Date(t.date)-new Date(i.date)),n.value=a}),(a,i)=>(o(),l("main",null,[y,e("section",A,[r(b,null,{default:c(()=>[m("新闻")]),_:1}),(o(!0),l(p,null,f(n.value,t=>(o(),l("div",{key:t.id},[r(k,{border:!1},{default:c(()=>[e("div",{class:"w-full h-38 bg-cover",style:v({backgroundImage:"url("+t.cover+")"})},[e("div",B,[e("h2",V,s(t.title),1),e("p",z,s(t.description),1),e("p",C,s(a.$t("NewsPage.Publish"))+" "+s(t.date),1),e("p",D,[r(g(w),{class:"color-sky-1 op-80 decoration-none",to:t.href},{default:c(()=>[E]),_:2},1032,["to"])])])],4)]),_:2},1024)]))),128))])]))}};export{O as default};
