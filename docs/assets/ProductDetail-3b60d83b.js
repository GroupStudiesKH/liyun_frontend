import{_ as h,H as f,F as v,u as N,r as u,a as P,o as k,b as i,d as m,e as p,f as l,g as e,t as g,i as I,j as y,l as H,h as M}from"./index-b640228c.js";import{P as V,a as w,_ as F}from"./product_banner-1a6f5f77.js";const b={components:{Header:f,Footer:v,ProductMenu:V},setup(){N();const n=u([]),c=u("zh_TW"),d=P().params.id,o=async()=>{try{const t=await w.getProduct(d);n.value=t}catch(t){console.log(t)}},_=(t,a)=>{let r=a=="feature_image"?"/assets/img/product_image.png":"No Data";return t.product_detail.find(s=>s.language==c.value&&s.meta_key==a).meta_value.length>0?t.product_detail.find(s=>s.language==c.value&&s.meta_key==a).meta_value:r};return k(async()=>{await o()}),{product:n,currentLang:c,getInfo:_}}},x={id:"product"},D=e("div",{class:"banner"},[e("img",{src:F,alt:""})],-1),T={class:"container"},B={class:"row"},C={class:"col-12 col-lg-10 list"},L=H('<div class="row"><div class="col-12 route"><span class="material-icons"></span><a href="#">首頁</a> / <a href="#">產品介紹</a> / <a href="#">絕緣材料</a> / <a href="#">NR-INOAC</a></div></div>',1),R={key:0,class:"row"},S={class:"col-4"},j=["src"],O={class:"col-8"},z=e("div",{class:"col-4"},null,-1),A=e("div",{class:"col-8"},[e("div",{class:"askPrice"},[M(" 加入詢價表單 "),e("span",{class:"material-icons"},"")])],-1),E=["innerHTML"];function W(n,c,d,o,_,t){const a=i("Header"),r=i("ProductMenu"),s=i("Footer");return m(),p(y,null,[l(a),e("main",x,[D,e("div",T,[e("div",B,[l(r),e("div",C,[L,Object.keys(o.product).length>0?(m(),p("div",R,[e("div",S,[e("img",{src:o.getInfo(o.product,"feature_image")},null,8,j)]),e("div",O,[e("h3",null,g(o.getInfo(o.product,"title")),1),e("p",null,g(o.getInfo(o.product,"subtitle")),1)]),z,A,e("div",{class:"col-12 pt-5 content",innerHTML:o.getInfo(o.product,"content")},null,8,E)])):I("",!0)])])])]),l(s)],64)}const J=h(b,[["render",W]]);export{J as default};