import{_ as w,H as C,F,u as N,a as T,r as l,o as x,b as m,c as H,d as c,e as r,f as v,g as e,h as p,i as k,j as f,k as P,w as M,t as b}from"./index-b640228c.js";import{P as V,a as B,_ as D}from"./product_banner-1a6f5f77.js";const I={components:{Header:C,Footer:F,ProductMenu:V},setup(){N();const _=T(),o=l([]),i=l("zh_TW"),s=l(0),n=l({page:1,per_page:10,category:""}),g=async()=>{try{const t=await B.getProducts(n.value);n.value.page=t.current_page,n.value.perPage=t.per_page,s.value=t.last_page,o.value=t.data}catch(t){console.log(t)}},d=t=>t.get_title_attribute.find(a=>a.language==i.value).meta_value.length>0?t.get_title_attribute.find(a=>a.language==i.value).meta_value:"No Title",u=t=>t.get_feature_image.find(a=>a.language==i.value).meta_value.length>0?t.get_feature_image.find(a=>a.language==i.value).meta_value:"/assets/img/product_image.png",h=async t=>{n.value.page=t,await g()};return x(async()=>{_.query.category&&(n.value.category=_.query.category),await g()}),{products:o,currentLang:i,totalPage:s,params:n,changePage:h,getTitle:d,getFeatureImage:u}}},L={id:"product"},R=e("div",{class:"banner"},[e("img",{src:D,alt:""})],-1),q={class:"gray-background"},S={class:"white-rounded-background"},j={class:"container"},z={class:"row"},A={class:"col-12 col-lg-10 list"},E={class:"row"},O={class:"col-12 route"},W=e("span",{class:"material-icons"},"",-1),G=e("a",{href:"#"},"首頁",-1),J=e("a",{href:"#"},"產品介紹",-1),K={key:0},Q=e("a",{href:"#"},"絕緣材料",-1),U=e("a",{href:"#"},"NR-INOAC",-1),X={class:"row"},Y={class:"col-6 col-lg-3"},Z=["href"],$={class:"feature_image"},ee=["src"],te={key:0,"aria-label":"Page navigation"},ae={class:"pagination"},se={class:"page-item"},oe=["onClick"],ne={role:"button",class:"page-link"},ce={class:"page-item"};function re(_,o,i,s,n,g){const d=m("Header"),u=m("ProductMenu"),h=m("Footer"),t=H("key");return c(),r(f,null,[v(d),e("main",L,[R,e("div",q,[e("div",S,[e("div",j,[e("div",z,[v(u),e("div",A,[e("div",E,[e("div",O,[W,G,p(" / "),J,s.params.category.length?(c(),r("span",K,[p("/ "),Q,p(" / "),U])):k("",!0)])]),e("div",X,[(c(!0),r(f,null,P(s.products,(a,y)=>M((c(),r("div",Y,[e("a",{href:`product/${a.id}`},[e("div",$,[e("img",{src:s.getFeatureImage(a)},null,8,ee)]),e("p",null,b(s.getTitle(a)),1)],8,Z)])),[[t,y]])),256))]),s.totalPage>1?(c(),r("nav",te,[e("ul",ae,[e("li",se,[e("a",{role:"button",class:"page-link",onClick:o[0]||(o[0]=a=>s.changePage(s.params.page-1))},"上一頁")]),(c(!0),r(f,null,P(s.totalPage,a=>(c(),r("li",{class:"page-item",onClick:y=>s.changePage(a)},[e("a",ne,b(a),1)],8,oe))),256)),e("li",ce,[e("a",{role:"button",class:"page-link",onClick:o[1]||(o[1]=a=>s.changePage(s.params.page+1))},"下一頁")])])])):k("",!0)])])])])])]),v(h)],64)}const _e=w(I,[["render",re]]);export{_e as default};