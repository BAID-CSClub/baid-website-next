import{_ as m}from"./MobileHead.f2724647.js";import{i as _}from"./Dongba_1.29760978.js";import{p as d,s as p,r as c,B as f,w as h,b as n,c as o,g,l as y,d as r}from"./index.f627a75d.js";const v={class:"section"},$=r("h1",null,"Todo: Mobile Article Page",-1),w=r("h2",null,"Assigned to lihe07",-1),k={key:0},A=["innerHTML"],b={__name:"ArticlePage",setup(B){const e=d(),u=p(()=>e.params.lang&&e.params.year&&e.params.month&&e.params.day&&e.params.title?`/${e.params.lang}/articles/${e.params.year}/${e.params.month}/${e.params.day}/${e.params.title}.json`:!1),l=c(null),a=c(!0);return f(async()=>{h(u,async t=>{if(!t)return;a.value=!0;const s=await fetch(t);setTimeout(()=>a.value=!1,1e3),s.status===200?l.value=await s.json():location.href=`/${e.params.lang}/404`},{immediate:!0})}),(t,s)=>{var i;return n(),o("div",null,[g(m,{img:y(_)},null,8,["img"]),r("section",v,[$,w,a.value?(n(),o("h3",k,"Now loading...")):(n(),o("article",{key:1,innerHTML:(i=l.value)==null?void 0:i.body},null,8,A))])])}}};export{b as default};
