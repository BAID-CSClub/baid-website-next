import{C as T}from"./CarouselHorizontal-15df8a96.js";import{_ as k,b as a,c as r,d as e,t as v,g as i,q as _,F as h,e as $,B as m,u as o,E as A,i as w,r as p,n as C,A as f,T as B,f as L,s as I,l as H,v as N}from"./index-becffbb1.js";import{S as j}from"./swiper.min-59f05de3.js";import{_ as S}from"./DesktopSwiper-447aa675.js";import{_ as z}from"./NotFancyTitle-d4273277.js";import{d as M,a as D}from"./StudentLife-2a5cccfa.js";import"./create-element-if-not-defined-4119079c.js";const E={class:"w-full max-w-50vw max-h-80vh bg-white rd-5 p-12 box-border overflow-auto"},V={class:"flex flex-col m-b-4"},F={class:"text-8"},q=["innerHTML"],Z={class:"flex items-center justify-center"},G={class:"flex items-center px-4 max-w-160 w-full"},J=["src","onClick"],K={__name:"ClubInfo",props:["name","description","images"],setup(l){const t=l;return(s,n)=>(a(),r("div",{class:"backdrop flex items-center justify-center p-20 box-border",onClick:n[0]||(n[0]=A(d=>s.$emit("close"),["self"]))},[e("div",E,[e("div",V,[e("h3",F,v(t.name),1),e("pre",{class:"my-4",innerHTML:t.description},null,8,q)]),e("div",Z,[e("div",G,[i(S,null,{default:_(()=>[(a(!0),r(h,null,$(t.images,(d,g)=>(a(),m(o(j),{key:d},{default:_(()=>[e("img",{src:d,class:"w-full object-cover aspect-3/2",onClick:x=>s.change(g),alt:"pic1"},null,8,J)]),_:2},1024))),128))]),_:1})])])])]))}},O=k(K,[["__scopeId","data-v-aa7533dd"]]),P={id:"container",class:"my-10 py-5 flex flex-col justify-center items-center bg-gray-200"},Q={class:"text-10 font-300 font-title text-center"},R={class:"flex justify-center items-center w-274"},U={class:"text-8 font-title m-1"},W={class:"m-1"},X=["src"],Y={__name:"ClubsSection",setup(l){const t=w("data"),s=p(!1),n=p(null),d=p(null),g=p(null);return(x,y)=>(a(),r("div",P,[e("h1",Q,v(x.$t("StudentLife.Clubs.Title")),1),e("div",R,[i(S,{autoplay:"true",slides:"4"},{default:_(()=>[(a(!0),r(h,null,$(o(t).clubs,c=>(a(),m(o(j),{key:c,onClick:()=>{n.value=c.name,d.value=c.content,g.value=c.images,s.value=!0},class:"flex justify-center py-3"},{default:_(()=>[e("div",{class:"h-220px aspect-1 items-center justify-center flex flex-col transition-300 hover:shadow-xl",style:C({"background-color":c.bg_color,color:c.color})},[e("div",U,v(c.name),1),e("div",W,[e("img",{src:c.icon,class:"w-80px aspect-1 object-cover block"},null,8,X)])],4)]),_:2},1032,["onClick"]))),128))]),_:1}),i(B,{name:"fade"},{default:_(()=>[s.value?(a(),m(O,{key:0,onClose:y[0]||(y[0]=c=>s.value=!1),name:n.value,description:d.value,images:g.value},null,8,["name","description","images"])):f("",!0)]),_:1})])]))}};const tt={class:"text-2xl font-bold"},et=["innerHTML"],st={__name:"ActivityTextBlock",props:["name","description","background","light"],setup(l){const t=l;return(s,n)=>(a(),r("div",{class:"w-full h-80 p-8",style:C({background:t.background,color:t.light?"white":"black"})},[e("h3",tt,v(t.name),1),e("hr",{class:L(["mb-4",t.light?"border-white/30":"border-black/30"])},null,2),e("div",{class:"no-size text-sm",innerHTML:t.description},null,8,et)],4))}},b=k(st,[["__scopeId","data-v-55251934"]]),it=["src"],u={__name:"ActivityBlock",props:["activity","background","light","text-align"],setup(l){const t=l;return(s,n)=>(a(),r(h,null,[t.textAlign==="left"?(a(),m(b,{key:0,name:t.activity.name,description:t.activity.content,background:t.background,light:t.light},null,8,["name","description","background","light"])):f("",!0),e("img",{src:t.activity.image,class:"w-full h-80 object-cover object-center"},null,8,it),t.textAlign==="right"?(a(),m(b,{key:1,name:t.activity.name,description:t.activity.content,background:t.background,light:t.light},null,8,["name","description","background","light"])):f("",!0)],64))}},at={class:"section"},nt={class:"flex justify-end"},ct={class:"xl:grid-cols-4 grid-cols-2 gap-0 grid shadow-xl"},ot={__name:"ActivitiesSection",setup(l){const t=w("data");return(s,n)=>(a(),r("div",at,[e("div",nt,[i(z,{cn:s.$t("StudentLife.Activities.Title"),en:"Activities",color:"red",right:""},null,8,["cn"])]),e("div",ct,[i(u,{activity:o(t).activities[0],background:"var(--standard-blue)",light:!0,"text-align":"right"},null,8,["activity"]),i(u,{activity:o(t).activities[1],background:"var(--standard-red)",light:!0,"text-align":"right"},null,8,["activity"]),i(u,{activity:o(t).activities[2],background:"var(--standard-red)",light:!0,"text-align":"left"},null,8,["activity"]),i(u,{activity:o(t).activities[3],background:"#d3d3d3",light:!1,"text-align":"left"},null,8,["activity"]),i(u,{activity:o(t).activities[4],background:"var(--standard-blue)",light:!0,"text-align":"right"},null,8,["activity"]),i(u,{activity:o(t).activities[5],background:"var(--standard-red)",light:!0,"text-align":"right"},null,8,["activity"])])]))}},lt={class:"text-18 font-sans color-white"},rt={id:"activities"},dt={id:"clubs"},ht={__name:"StudentLife",setup(l){const{locale:t}=I({useScope:"global"}),s=H(()=>t.value==="zh-CN"?M:D);return N("data",s),(n,d)=>(a(),r("div",null,[i(T,{images:s.value.carousel_images||[]},{default:_(()=>[e("h1",lt,v(n.$t("views.StudentLife")),1)]),_:1},8,["images"]),e("section",rt,[i(ot)]),e("section",dt,[i(Y)])]))}};export{ht as default};
