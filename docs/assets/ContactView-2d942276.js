import{_ as D,u as R,a as A,r as l,q as E,o as j,b as P,c as i,d as r,e as u,f as t,w as b,j as h,n as d,t as c,s as g,v as p,F as q,g as z,h as J}from"./index-8696e278.js";import{H as X,F as G,a as K}from"./api-service-a48137cf.js";import{A as Q}from"./AppliedMenu-d56848c8.js";import{c as S}from"./cart-service-4a0913f8.js";const W="/assets/img/contact_banner.png",Y={components:{Header:X,Footer:G,AppliedMenu:Q},setup(){const a=R(),{locale:e}=A(),k=l(""),o=l(""),C=l(""),w=l(""),y=l(""),s=l([]),v=l(!1),n=l(!1),{executeRecaptcha:M,recaptchaLoaded:_}=E(),N=async V=>{await S.removeCart(V),s.value=S.getCart()},H=l({contact_name:!1,contact_company:!1,contact_phone:!1,contact_email:!1}),O=()=>{s.value=S.getCart()},T=async()=>{v.value=!0,await _();const V=await M("submit");let F=[];for(let m in s.value){let L=s.value[m].product.product_detail.find(f=>f.language==e.value&&f.meta_key=="title").meta_value??"",B=s.value[m].category.length>0?s.value[m].category[0].get_title_attribute.find(f=>f.language==e.value).meta_value:"";F.push({title:L,category:B,id:s.value[m].product.id})}const I=await K.sendContact({contact_name:k.value,contact_company:o.value,contact_phone:C.value,contact_email:w.value,contact_content:y.value,cart:JSON.stringify(F),recaptcha_token:V});if(H.value={contact_name:!1,contact_company:!1,contact_phone:!1,contact_email:!1},I.hasOwnProperty("errors"))for(let m in I.errors)H.value[m]=!0;v.value=!1,I.hasOwnProperty("success")&&(n.value=!0)},U=()=>{a.push({name:"home"})};return j(()=>{O()}),{locale:e,contact_name:k,contact_company:o,contact_phone:C,contact_email:w,contact_content:y,removeCartItem:N,cartItem:s,submitContact:T,errorMsg:H,isModalOpen:n,goHome:U,isSending:v}}},Z={id:"applied"},x=t("div",{class:"banner"},[t("img",{src:W,alt:""})],-1),$={class:"gray-background"},tt={class:"white-rounded-background"},ot={class:"container"},nt={class:"row"},et={class:"col-12 list",id:"contact_content"},at={class:"row"},ct={class:"col-12 route"},st=t("span",{class:"material-icons"},"",-1),lt={class:"col-12"},it={class:"contact-container"},rt={class:"row"},dt=["innerHTML"],_t={class:"row"},mt={for:"contact_name"},ut={for:"contact_company"},ht={class:"row"},vt={for:"contact_phone"},gt={for:"contact_email"},pt={class:"row"},yt={class:"col-12"},ft={for:"contact_content"},bt={class:"col-12"},kt={class:"contact-container"},Ct=t("hr",null,null,-1),wt={class:"row mt-3"},Mt={class:"col-12 secondHeading"},Ht={key:0,class:"row mt-3"},Vt={class:"row"},It={class:"col-10"},Pt=["onClick"],St=t("div",null,"X",-1),Ft=[St],qt={key:1,class:"row mt-3"},Nt={class:"col-12 askPriceContent"},Ot=t("hr",null,null,-1),Tt={class:"row mt-3"},Ut={class:"col-12"},Lt={key:1,class:"btn btn-secondary"},Bt={key:0,class:"modal",style:{display:"block"}},Dt={class:"modal-dialog"},Rt={class:"modal-content"},At={class:"modal-header"},Et={class:"modal-title"},jt={class:"modal-body"},zt={class:"modal-footer"};function Jt(a,e,k,o,C,w){const y=P("Header"),s=P("router-link"),v=P("Footer");return i(),r(q,null,[u(y),t("main",Z,[x,t("div",$,[t("div",tt,[t("div",ot,[t("div",nt,[t("div",et,[t("div",at,[t("div",ct,[st,u(s,{to:{name:"home"}},{default:b(()=>[h(c(a.$t("header.index")),1)]),_:1}),h(" / "),u(s,{to:{name:"contact"}},{default:b(()=>[h(c(a.$t("header.contact")),1)]),_:1})]),t("form",null,[t("div",lt,[t("div",it,[t("div",rt,[t("div",{class:"col-12 heading",innerHTML:a.$t("contact.heading")},null,8,dt)]),t("div",_t,[t("div",{class:d(["col-sm-6 col-12 required",o.contact_name.length>0?"hasContent":""])},[t("label",mt,c(o.contact_name.length==0?a.$t("contact.name"):""),1),g(t("input",{type:"text",id:"contact_name",name:"contact_name","onUpdate:modelValue":e[0]||(e[0]=n=>o.contact_name=n),class:d(["form-control",o.errorMsg.contact_name?"error":""])},null,2),[[p,o.contact_name]])],2),t("div",{class:d(["col-sm-6 col-12 required",o.contact_company.length>0?"hasContent":""])},[t("label",ut,c(o.contact_company.length==0?a.$t("contact.company"):""),1),g(t("input",{type:"text",class:d(["form-control",o.errorMsg.contact_company?"error":""]),id:"contact_company","onUpdate:modelValue":e[1]||(e[1]=n=>o.contact_company=n),name:"contact_company"},null,2),[[p,o.contact_company]])],2)]),t("div",ht,[t("div",{class:d(["col-sm-6 col-12 required",o.contact_phone.length>0?"hasContent":""])},[t("label",vt,c(o.contact_phone.length==0?a.$t("contact.phone"):""),1),g(t("input",{type:"text",class:d(["form-control",o.errorMsg.contact_phone?"error":""]),id:"contact_phone","onUpdate:modelValue":e[2]||(e[2]=n=>o.contact_phone=n),name:"contact_phone"},null,2),[[p,o.contact_phone]])],2),t("div",{class:d(["col-sm-6 col-12 required",o.contact_email.length>0?"hasContent":""])},[t("label",gt,c(o.contact_email.length==0?a.$t("contact.email"):""),1),g(t("input",{type:"email",class:d(["form-control",o.errorMsg.contact_email?"error":""]),id:"contact_email","onUpdate:modelValue":e[3]||(e[3]=n=>o.contact_email=n),name:"contact_email"},null,2),[[p,o.contact_email]])],2)]),t("div",pt,[t("div",yt,[t("label",ft,c(o.contact_content.length==0?a.$t("contact.content"):""),1),g(t("textarea",{class:"form-control",id:"contact_content",name:"contact_content",rows:"15","onUpdate:modelValue":e[4]||(e[4]=n=>o.contact_content=n)},null,512),[[p,o.contact_content]])])])])]),t("div",bt,[t("div",kt,[Ct,t("div",wt,[t("div",Mt,c(a.$t("contact.askingPrice")),1)]),o.cartItem.length?(i(),r("div",Ht,[(i(!0),r(q,null,z(o.cartItem,(n,M)=>(i(),r("div",{class:"col-12 askPriceContent",key:M},[t("div",Vt,[t("div",It,[h(" ・"),u(s,{to:{name:"category-product",params:{categoryID:n.product.category_id}},class:"category"},{default:b(()=>[h(c(n.category.length>0?n.category[0].get_title_attribute.find(_=>_.language==o.locale).meta_value:""),1)]),_:2},1032,["to"]),u(s,{class:"product",to:{name:"product-detail",params:{id:n.product.id}}},{default:b(()=>[h(" > "+c(n.product.product_detail.find(_=>_.language==o.locale&&_.meta_key=="title").meta_value??""),1)]),_:2},1032,["to"])]),t("div",{class:"col-2 remove",onClick:_=>o.removeCartItem(n.product.id)},Ft,8,Pt)])]))),128))])):(i(),r("div",qt,[t("div",Nt,c(a.$t("contact.askingPriceEmpty")),1)])),Ot,t("div",Tt,[t("div",Ut,[o.isSending?(i(),r("div",Lt,c(a.$t("contact.isSending")),1)):(i(),r("div",{key:0,class:"btn btn-danger",onClick:e[5]||(e[5]=n=>o.submitContact())},c(a.$t("contact.submit")),1))])])])])])])])])])])])]),o.isModalOpen?(i(),r("div",Bt,[t("div",Dt,[t("div",Rt,[t("div",At,[t("h5",Et,c(a.$t("contact.successTitle")),1),t("button",{type:"button",class:"btn-close",onClick:e[6]||(e[6]=n=>o.goHome())})]),t("div",jt,[t("p",null,c(a.$t("contact.success")),1)]),t("div",zt,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[7]||(e[7]=n=>o.goHome())},c(a.$t("contact.close")),1)])])])])):J("",!0),u(v)],64)}const Wt=D(Y,[["render",Jt]]);export{Wt as default};