import{y as _,B as f,r as u,z as p,b as r,c as a,g as v,F as w,e as m,f as d,u as x,d as e,t as l}from"./index-a6d59cee.js";import{_ as b}from"./NotFancyTitle-5a03ff40.js";import g from"./db-fa315a15.js";import N from"./db-6bd74177.js";const k={class:"section"},z=["onClick"],B=["src"],C={class:"p-10 flex-1 flex flex-col"},y={class:"flex"},O={class:"mt-0 flex-1"},j=["href"],D=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3h9z"})],-1),E=[D],H={class:"op-80"},V=e("div",{class:"flex-1"},null,-1),F={class:"op-50"},S={__name:"NewsPage",setup(L){const i=_(),h=f(),c=u([]);return p(()=>{let o;i.params.lang==="zh-CN"?o=Object.values(g):o=Object.values(N),window.prod||(o=o.map(t=>(t.href="/"+t.href,t))),o.sort((t,s)=>new Date(s.date)-new Date(t.date)),c.value=o}),(o,t)=>(r(),a("section",k,[v(b,{cn:"新闻",en:"News",color:"blue"}),(r(!0),a(w,null,m(c.value,(s,n)=>(r(),a("div",{key:s.id,class:d(["w-full border-solid border-[var(--standard-red)] flex h-70 my-10 cursor-pointer op-100 hover:op-90 active:op-70 transition",{"flex-row-reverse !border-[var(--standard-blue)]":n%2}]),onClick:R=>x(h).push(s.href)},[e("img",{src:s.cover,alt:"",class:"w-50% h-full object-cover"},null,8,B),e("div",C,[e("div",y,[e("h2",O,l(s.title),1),e("a",{href:s.href,alt:"GOTO",class:d(["ml-3 mt--2px color-[var(--standard-red)] op-50 hover:op-100 transition",{"!color-[var(--standard-blue)]":n%2}])},E,10,j)]),e("p",H,l(s.intro),1),V,e("p",F,"发布于 "+l(s.date),1)])],10,z))),128))]))}};export{S as default};