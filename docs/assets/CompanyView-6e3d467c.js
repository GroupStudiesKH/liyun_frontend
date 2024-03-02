import{_ as y,H as f,F as b,u as R,a as d,r as t,b as w,o as C,c as g,e as B,f as P,g as m,j as A,m as _,q as I}from"./index-204fc82a.js";import{P as E}from"./ProductMenu-c0685071.js";const F="/assets/img/about_banner.png",S="/assets/img/company_logo.png",k="/assets/img/iso_logo.png",H="/assets/img/about_image1.png",M="/assets/img/about_rba.png",T={components:{Header:f,Footer:b,ProductMenu:E},setup(){R(),d();const i=t([]),c=d().params.categoryID,l=t([]),r=t(0),{locale:e}=w(),n=t({page:1,per_page:10,category:""}),o=async()=>{try{const a=await _.getProducts(n.value);n.value.page=a.current_page,n.value.perPage=a.per_page,r.value=a.last_page,i.value=a.data}catch(a){console.log(a)}},p=async a=>{try{const s=await _.getCategoryPath(a);l.value=s}catch(s){console.log(s)}},v=a=>a.get_title_attribute.find(s=>s.language==e.value).meta_value!=null&&a.get_title_attribute.find(s=>s.language==e.value).meta_value!=""?a.get_title_attribute.find(s=>s.language==e.value).meta_value:"No Title",u=a=>a.get_feature_image.find(s=>s.language==e.value).meta_value!=null&&a.get_feature_image.find(s=>s.language==e.value).meta_value!=""?a.get_feature_image.find(s=>s.language==e.value).meta_value:"/assets/img/product_image.png",h=async a=>{n.value.page=a,await o()};return C(async()=>{c&&(n.value.category=c,await p(c)),await o()}),{products:i,locale:e,totalPage:r,params:n,changePage:h,getTitle:v,getFeatureImage:u,categoryPath:l}}},V=I('<main id="company"><div class="banner"><img src="'+F+'" alt=""></div><div class="gray-background"><div class="white-rounded-background"><div class="container"><div class="row"><div class="col-12 list"><div class="row"><div class="col-12 route"><span class="material-icons"></span><a href="/">首頁</a> / <a href="/company">公司介紹</a></div></div><div class="row"><div class="col-md-4 col-12 company_logo"><p><img src="'+S+'" alt="公司圖片"></p><p><img src="'+k+'" alt="公司圖片"></p></div><div class="col-md-8 col-12 company_intro"><h3 class="company_heading">公司介紹</h3><p> 成立於1987年，俐元企業為業界領先之輔材/耗材設計/製造廠商，為電子/電機/及其他各大產業提供完整的複合材導電/絕緣解決方案。 </p><p> 俐元企業傾聽客戶的需求，持續創新技術並積極研發，提供多樣化的導電/絕緣產品，為電子通訊/網通、工業電腦/POS、車用電子/車載、能源/電池、醫療、半導體及其他各大產業提供最理想的導電/絕緣選擇。 </p><h3 class="company_heading">經營理念</h3><p> 在科技進步日新月異及分秒必爭的社會趨勢下，俐元不斷地創新技術並積極研發，生產高品質的絕緣材料、導電布、導電布泡棉、泡棉、防火膠帶、吸波材及導電銅箔…等，並增添最新科技的生產設備，生產一系列規格精確、超高品質、使用便利的產品，於業界建立良好信譽。 </p><h3 class="company_heading">為客戶創造更高的附加價值</h3><p> 在俐元的網站中，可以找到您所需要的相關產品，並且接受客戶委託代其規劃設計特殊規格及特性之產品，俐元已取得ISO9001認證，產品符合RoHS、REACH及UL規範。若需國外特殊材料，或有任何問題，歡迎隨時與我們聯絡。 </p></div><div class="col-12 company_intro text-center mt-5"><p> 俐元企業股份有限公司生產一系列規格精確、高品質的產品。並有最新科技的生產設備，可接受客戶委託代其規劃設計特殊規格及特性之產品。 </p><img src="'+H+'" alt="公司圖片"></div></div><div class="row mt-5"><div class="col-12 col-md-6 company_intro small_padding"><h3 class="company_heading mt-3"><span class="material-icons">  </span> UL94VTM-0防火膠帶 </h3><p> 本公司專業生產之特殊UL防火膠帶，均通過美國UL認可，耐溶劑佳、熱硬化感壓膠適用各種電子、電器零組件檔牆及絕緣用，顏色齊全。 </p><h3 class="company_heading"><span class="material-icons">  </span>特殊絕緣材料、發泡材料 </h3><p> 本公司之絕緣材料及發泡材料適用於電源供應器、磁碟機、TV/監視器、PC板、Note Book商務機器之貼合、絕緣及EMI防制的運用。 </p><h3 class="company_heading"><span class="material-icons">  </span>導電材料、導電布、導電銅(鋁)箔 </h3><p> 本公司生產各式金屬導電產品，包含銅箔、鋁箔、合金銅等。並有導電布、導電泡棉、導電膠，各規格尺寸齊全。 </p></div><div class="col-12 col-md-6 company_intro small_padding company_intro_left_border"><h3 class="company_heading mt-3"><span class="material-icons">  </span>UL認證電子、電器專用之絕緣材料設計、製造 </h3><h3 class="company_heading"><span class="material-icons">  </span>銅(鋁)箔背膠加工、製造 </h3><h3 class="company_heading"><span class="material-icons">  </span>ABSORBER吸波材 </h3><p>無線高頻時代來臨，EMC及防止RF內部干擾最佳對策品</p><h3 class="company_heading"><span class="material-icons">  </span>金屬導電天線、EMI、鎳片包覆產品 </h3><p>鋁箔、銅箔、合金銅、鎳片。</p></div></div></div></div></div></div></div><div class="gray-background company-deep-gray"><div class="company-deep-gray-color-area"></div><div class="company-deep-gray-info-area"><div class="container"><div class="row"><div class="col-12 company_intro small_padding"><h3 class="company_heading">RBA企業責任</h3><div class="row"><div class="col-12"><p> 責任商業聯盟行為準則 V6.0 Responsible Business Alliance Code of Conduct v6.0 責任商業聯盟 ( Responsible Business Alliance, 簡稱 RBA ) (前身為電子行業公民聯盟 ( Electronic Industry Citizenship Coalition, 簡稱 EICC ) 行為準則為電子行業或電子為主要 組成部分的行業及其供應鏈制定一套規範,從而確保工作環境的安全工人受到尊重並付有尊嚴商業營運合乎環保性質 並遵守道德操守,涵蓋的規範為: </p></div><div class="col-12 text-center"><img class="rba_img" src="'+M+'" alt="RBA"></div></div></div></div></div></div></div><div class="gray-background"><div class="container"><div class="row"><div class="col-12 company_intro small_padding"><h3 class="company_heading">【勞工政策】</h3><p> 俐元企業在入職前會進行「員工宣導」並明確宣示保護員工人權， 包含從基本的遵守法規要求、就業自由、人道待遇、禁止不當歧視與性騷擾， 並建立多元有效的溝通機制、健全薪資福利、提供多元的訓練發展機會，提倡就業自由， 所有的工作都是自願性的。 依據「勞動基準法」規定雇主不得僱用未滿15歲人員， 嚴禁雇用未滿法定最低就業年齡之童工，並確保未成年員工之身心健康與安全及禁止安排危險性或有害性的工作。 俐元企業勞工政策內，明定禁止使用童工，確保絕無雇用未滿法定最低就業年齡之童工， 並確保未成年員工之身心健康與安全，禁止安排危險性之工作。針對在職員工，會進行年度培訓，並於公司網站及內部信箱等宣導， 確保同仁能確實了解RBA政策內容與精神。 </p><h3 class="company_heading">【道德政策】</h3><p> 俐元企業於所有員工不得從事任何違法之商業行為，並應嚴守迴避利益衝突之原則，且禁止接受一切私人的佣金、回扣或其他顯然不相當之各種形式之利益。 </p><h3 class="company_heading">【環安衛政策】 </h3><p> • 善用材料，節能減廢，降低污染對環境之衝擊。<br> • 尊重生命，風險管控，降低危害對人員之衝擊，持續改善。<br> • 符合法規，配合環安衛政策之推動。<br> • 加強宣導，預防污染，落實管理系統之執行。<br> • 貫徹訓練，安全視察，養成安全衛生環境之職場。<br> • 全員參與，永續經營，達到環保、安全與經濟三贏之目標。<br> 俐元企業持續不斷的努力推行環境管理，營造健康舒適的工作環境。 </p><h3 class="company_heading">【無使用衝突礦產政策】</h3><p> 衝突礦產，是指錫 （Sn），鉭（Ta），鎢（W），金（Au） 來自於剛果民主共和國或鄰近國家衝 突區域之礦區。 由於該衝突區域被非政府武裝團體所控制，進行非法採礦且造成侵犯人權。俐元企業 承諾所有產品之來源沒有來自剛果及其周邊國家,以及這些國家內任何武裝力量控制區之衝突礦產。 並要求供應 商簽署「衝突礦產調查模板 ( CMRT ) 」、「衝突金屬來源調查表及不使用衝突金屬宣告書」、「供應商承包商RBA承諾書」進 行調查，原物料中禁止使用衝突礦產,以滿足來自客戶及法律法規的要求。 </p><h3 class="company_heading">【HSF政策】 </h3><p> 俐元企業推動綠色採購、保護地球、符合客戶及法律法規要求、持續改善。 </p></div></div></div></div></main>',1);function x(i,c,l,r,e,n){const o=g("Header"),p=g("Footer");return B(),P(A,null,[m(o),V,m(p)],64)}const N=y(T,[["render",x]]);export{N as default};