import{_ as b,H,F as M,u as C,r as v,a as F,b as N,o as V,c as i,e as n,f as r,g as l,h as t,i as _,j as y,k as x,l as k,t as d,m as P,w as D}from"./index-204fc82a.js";import{P as B}from"./ProductMenu-c0685071.js";import{_ as L}from"./product_banner-64a38df3.js";const T={components:{Header:H,Footer:M,ProductMenu:B},setup(){C();const a=v([]),h=F().params.id,u=v([]),{locale:o}=N(),p=async()=>{try{const e=await P.getProduct(h);a.value=e,a.value.category_id&&f(a.value.category_id)}catch(e){console.log(e)}},f=async e=>{try{const c=await P.getCategoryPath(e);u.value=c}catch(c){console.log(c)}},g=(e,c)=>{let m=c=="feature_image"?"/assets/img/product_image.png":"No Data";return e.product_detail.find(s=>s.language==o.value&&s.meta_key==c).meta_value!=null&&e.product_detail.find(s=>s.language==o.value&&s.meta_key==c).meta_value!=""?e.product_detail.find(s=>s.language==o.value&&s.meta_key==c).meta_value:m};return V(async()=>{await p()}),{product:a,getInfo:g,categoryPath:u,locale:o}}},j={id:"product"},R=t("div",{class:"banner"},[t("img",{src:L,alt:""})],-1),S={class:"container"},A={class:"row"},E={class:"col-12 col-lg-10 list"},O={class:"row"},q={class:"col-12 route"},z=t("span",{class:"material-icons"},"",-1),G=t("a",{href:"/"},"首頁",-1),J=t("a",{href:"/product"},"產品介紹",-1),Q={key:0},U={key:0,class:"row"},W={class:"col-4"},X=["src"],Y={class:"col-8"},Z={class:"title"},K={class:"subtitle"},$=t("div",{class:"col-4"},null,-1),tt={class:"col-8"},ot={class:"askPrice"},et=t("span",{class:"material-icons"},"",-1),st=["innerHTML"];function ct(a,h,u,o,p,f){const g=i("Header"),e=i("ProductMenu"),c=i("router-link"),m=i("Footer");return n(),r(y,null,[l(g),t("main",j,[R,t("div",S,[t("div",A,[l(e),t("div",E,[t("div",O,[t("div",q,[z,G,_(" / "),J,o.product.category_id?(n(),r("span",Q,[(n(!0),r(y,null,x(o.categoryPath,(s,w)=>(n(),r("span",{key:w},[_(" / "),l(c,{to:`/product/category/${s.id}`},{default:D(()=>[_(d(s.get_title_attribute.find(I=>I.language==o.locale).meta_value),1)]),_:2},1032,["to"])]))),128))])):k("",!0)])]),Object.keys(o.product).length>0?(n(),r("div",U,[t("div",W,[t("img",{src:o.getInfo(o.product,"feature_image")},null,8,X)]),t("div",Y,[t("h3",Z,d(o.getInfo(o.product,"title")),1),t("p",K,d(o.getInfo(o.product,"subtitle")),1)]),$,t("div",tt,[t("div",ot,[_(d(a.$t("product.addAskPrice"))+" ",1),et])]),t("div",{class:"col-12 pt-5 content",innerHTML:o.getInfo(o.product,"content")},null,8,st)])):k("",!0)])])])]),l(m)],64)}const it=b(T,[["render",ct]]);export{it as default};
