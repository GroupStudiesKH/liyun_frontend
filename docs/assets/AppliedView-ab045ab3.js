import{_ as P,u as F,k as A,r as p,a as H,o as M,b as m,c as n,d as c,e as r,f as t,w as b,j as l,F as k,g as C,h as N,t as h,n as L}from"./index-8696e278.js";import{H as V,F as x,a as T}from"./api-service-a48137cf.js";import{A as B}from"./AppliedMenu-d56848c8.js";const D="/assets/img/applied_banner.png",I={components:{Header:V,Footer:x,AppliedMenu:B},setup(){F(),A();const i=p([]),u=A().params.categoryID,v=p([]),o=p(0),{locale:_}=H(),s=p({page:1,per_page:10,category:""}),g=async()=>{try{const e=await T.getApplicationContent(s.value);s.value.page=e.current_page,s.value.perPage=e.per_page,o.value=e.last_page,i.value=e.data}catch(e){console.log(e)}},f=async e=>{try{const a=await T.getAppliedCategoryPath(e);v.value=a}catch(a){console.log(a)}},d=e=>e.get_title_attribute.find(a=>a.language==_.value).meta_value!=null&&e.get_title_attribute.find(a=>a.language==_.value).meta_value!=""?e.get_title_attribute.find(a=>a.language==_.value).meta_value:"No Title",y=async e=>{s.value.page=e,await g()};return M(async()=>{u&&(s.value.category=u,await f(u)),await g()}),{applicationList:i,locale:_,totalPage:o,params:s,changePage:y,getTitle:d,categoryPath:v}}},R={id:"applied"},S=t("div",{class:"banner"},[t("img",{src:D,alt:""})],-1),j={class:"gray-background"},z={class:"white-rounded-background"},E={class:"container"},q={class:"row"},G={class:"col-12 col-lg-10 list",id:"applied_content"},J={class:"row"},K={class:"col-12 route"},O=t("span",{class:"material-icons"},"",-1),Q={key:0},U={class:"col-12"},W={class:"row"},X={class:"heading"},Y=t("span",{class:"material-icons"},"  ",-1),Z=["innerHTML"];function $(i,u,v,o,_,s){const g=m("Header"),f=m("AppliedMenu"),d=m("router-link"),y=m("Footer");return n(),c(k,null,[r(g),t("main",R,[S,t("div",j,[t("div",z,[t("div",E,[t("div",q,[r(f),t("div",G,[t("div",J,[t("div",K,[O,r(d,{to:{name:"home"}},{default:b(()=>[l(h(i.$t("header.index")),1)]),_:1}),l(" / "),r(d,{to:{name:"applied"}},{default:b(()=>[l(h(i.$t("header.applied")),1)]),_:1}),o.params.category.length?(n(),c("span",Q,[(n(!0),c(k,null,C(o.categoryPath,(e,a)=>(n(),c("span",{key:a},[l(" / "),r(d,{to:`/product/category/${e.id}`},{default:b(()=>[l(h(e.get_title_attribute.find(w=>w.language==o.locale).meta_value),1)]),_:2},1032,["to"])]))),128))])):N("",!0)]),t("div",U,[t("div",W,[(n(!0),c(k,null,C(o.applicationList.filter(e=>o.getTitle(e)!="No Title"),(e,a)=>(n(),c("div",{class:L(["col-12 col",a>0?"mt-5":""]),key:a},[t("h3",X,[Y,l(" "+h(o.getTitle(e)),1)]),t("p",{innerHTML:e.get_content_attribute.find(w=>w.language==o.locale).meta_value},null,8,Z)],2))),128))])])])])])])])])]),r(y)],64)}const oe=P(I,[["render",$]]);export{oe as default};