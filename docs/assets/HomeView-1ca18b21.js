import{_ as M,u as T,r as v,a as w,o as k,b as _,c as o,d as i,e as a,f as s,F as x,g as C,w as b,n as f,h as d,t as n,i as N,j as L}from"./index-8696e278.js";import{H as B,F,a as I}from"./api-service-a48137cf.js";const S="/assets/img/company_pic.png",V="/assets/img/index_intro_innovative_badge.png",D="/assets/img/index_intro_cooperation_badge.png",E="/assets/img/index_intro_customized_badge.png",A="/assets/img/index_intro_value_badge.png",H="/assets/img/index_application_commication.png",P="/assets/img/index_application_battery.png",q="/assets/img/index_application_medi.png",z="/assets/img/index_application_vehicle.png",R="/assets/img/index_application_ic.png",U="/assets/img/index_application_computer.png",j="/assets/img/index_application_pos.png",O="/assets/img/index_qualified.png",Q={components:{Header:B,Footer:F},setup(){T();const l=v(!1),{t:r,locale:p}=w(),t=v([]),u=async()=>{try{const e=await I.getBanner();t.value=e}catch(e){console.log(e)}},m=()=>{const c=document.getElementById("intro").getBoundingClientRect();c.top>=0&&c.bottom<=window.innerHeight&&(l.value=!0)};return k(()=>{window.addEventListener("scroll",m),u()}),{isIntroScolled:l,t:r,locale:p,bannerLists:t}}},Y={id:"index"},G=s("div",{class:"banner"},null,-1),J={id:"bannerCarousel",class:"carousel slide"},K={class:"carousel-inner banner"},W=["href"],X=["src"],Z=N('<button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),$={id:"company_info"},ss={class:"row"},ts=s("div",{class:"col-md-6 col-lg-6 col-12",id:"company_pic"},[s("div",{id:"blue_triangle"}),s("img",{src:S,alt:""})],-1),ns={class:"col-md-6 col-lg-6 col-12",id:"company_intro"},os=s("h2",null,"LIYUN",-1),is=["innerHTML"],es={class:"row"},cs={class:"col-6 col-md-3 badge"},ls=s("img",{src:V,alt:""},null,-1),as=["innerHTML"],ds=["innerHTML"],_s={class:"col-6 col-md-3 badge"},rs=s("img",{src:D,alt:""},null,-1),ps=["innerHTML"],us=["innerHTML"],ms={class:"col-6 col-md-3 badge"},hs=s("img",{src:E,alt:""},null,-1),gs=["innerHTML"],vs=["innerHTML"],xs={class:"col-6 col-md-3 badge"},bs=s("img",{src:A,alt:""},null,-1),fs=["innerHTML"],Ls=["innerHTML"],Hs={id:"applications"},ys={class:"container"},Ms={class:"row"},Ts={class:"col-sm-12",id:"applications_title"},ws=s("h2",null,"APPLICATIONS",-1),ks={class:"row",id:"industry_type"},Cs={class:"col-6 col-sm-3"},Ns=s("img",{src:H,alt:""},null,-1),Bs={class:"col-6 col-sm-3"},Fs=s("img",{src:P,alt:""},null,-1),Is={class:"col-6 col-sm-3"},Ss=s("img",{src:q,alt:""},null,-1),Vs={class:"col-6 col-sm-3"},Ds=s("img",{src:H,alt:""},null,-1),Es={class:"col-6 col-sm-3"},As=s("img",{src:z,alt:""},null,-1),Ps={class:"col-6 col-sm-3"},qs=s("img",{src:R,alt:""},null,-1),zs={class:"col-6 col-sm-3"},Rs=s("img",{src:U,alt:""},null,-1),Us={class:"col-6 col-sm-3"},js=s("img",{src:j,alt:""},null,-1),Os=s("div",{class:"container",id:"qualified"},[s("div",{class:"row"},[s("div",{class:"col-sm-12"},[s("h2",null,"QUALFIED"),s("img",{src:O,alt:""})])])],-1);function Qs(l,r,p,t,u,m){const e=_("Header"),c=_("router-link"),y=_("Footer");return o(),i(x,null,[a(e),s("main",Y,[G,s("div",J,[s("div",K,[(o(!0),i(x,null,C(t.bannerLists,(h,g)=>(o(),i("div",{class:f(["carousel-item",g==0?"active":""]),key:g},[s("a",{href:h.link},[s("img",{src:h.img_url,alt:""},null,8,X)],8,W)],2))),128))]),Z]),s("div",$,[s("div",ss,[ts,s("div",ns,[os,s("p",{innerHTML:l.$t("index.intro")},null,8,is),a(c,{to:{name:"company"},class:"pill_button"},{default:b(()=>[L(" Learn More ")]),_:1})])])]),s("div",{class:f(["container",t.isIntroScolled?"scrolled":""]),id:"intro"},[s("div",es,[s("div",cs,[ls,t.locale!="eng"?(o(),i("h3",{key:0,innerHTML:t.t("index.feature1")},null,8,as)):d("",!0),s("p",{class:"h5",innerHTML:t.t("index.feature1_subtitle")},null,8,ds)]),s("div",_s,[rs,t.locale!="eng"?(o(),i("h3",{key:0,innerHTML:t.t("index.feature2")},null,8,ps)):d("",!0),s("p",{class:"h5",innerHTML:t.t("index.feature2_subtitle")},null,8,us)]),s("div",ms,[hs,t.locale!="eng"?(o(),i("h3",{key:0,innerHTML:t.t("index.feature3")},null,8,gs)):d("",!0),s("p",{class:"h5",innerHTML:t.t("index.feature3_subtitle")},null,8,vs)]),s("div",xs,[bs,t.locale!="eng"?(o(),i("h3",{key:0,innerHTML:t.t("index.feature4")},null,8,fs)):d("",!0),s("p",{class:"h5",innerHTML:t.t("index.feature4_subtitle")},null,8,Ls)])])],2),s("div",Hs,[s("div",ys,[s("div",Ms,[s("div",Ts,[ws,s("p",null,n(t.t("index.application.intro")),1),a(c,{to:{name:"applied"},class:"pill_button"},{default:b(()=>[L(" Learn More ")]),_:1})])]),s("div",ks,[s("div",Cs,[Ns,s("p",null,n(t.t("index.application.product1")),1)]),s("div",Bs,[Fs,s("p",null,n(t.t("index.application.product2")),1)]),s("div",Is,[Ss,s("p",null,n(t.t("index.application.product3")),1)]),s("div",Vs,[Ds,s("p",null,n(t.t("index.application.product4")),1)]),s("div",Es,[As,s("p",null,n(t.t("index.application.product5")),1)]),s("div",Ps,[qs,s("p",null,n(t.t("index.application.product6")),1)]),s("div",zs,[Rs,s("p",null,n(t.t("index.application.product7")),1)]),s("div",Us,[js,s("p",null,n(t.t("index.application.product8")),1)])])])]),Os]),a(y)],64)}const Js=M(Q,[["render",Qs]]);export{Js as default};