<script>
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

    // const toLastPage = () => {
    //   router.push({ name: "final" });
    //   playBackgroundMusic()
    // };

    // const toNextPage = () => {
    //   router.push({ name: "intro_2" });
    //   playBackgroundMusic()
    // };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="banner">
      <img src="assets/img/banner_1.png" alt="" />
    </div>
    <div id="company_info">
      <div class="row">
        <div class="col-sm-6" id="company_pic">
          <div id="blue_triangle"></div>
          <img src="assets/img/company_pic.png" alt="" />
        </div>
        <div class="col-sm-6" id="company_info">
          <h2>LIYUN</h2>
          <p>
            <b>俐元企業股份有限公司</b
            >創立於西元1987年九月，早期從事紅殼紙、電木板、絕緣紙、Mylar、Film、Nomex、銅箔片(捲)…等加工，
            目前也已擴展至EMI防制產品。因重視客戶的需求與服務，近年來致力研發最新技術、增加機械設備，加強生產電子、通訊、電腦及週邊…
            等各類科技產品之絕緣材料，提供各式各樣高品質的產品，並使用雷射機台打樣以服務客戶。
          </p>
          <a href="#" class="pill_button"> Learn More </a>
        </div>
      </div>
    </div>

    <div class="container" id="intro">
      <div class="row">
        <div class="col-sm-3 badge">
          <img src="assets/img/index_intro_innovative_badge.png" alt="" />
          <h3>創新技術</h3>
          <p class="h5">Innovative<br />technology</p>
        </div>
        <div class="col-sm-3 badge">
          <img src="assets/img/index_intro_cooperation_badge.png" alt="" />
          <h3>應用領域合作</h3>
          <p class="h5">Cooperation in<br />application fields</p>
        </div>
        <div class="col-sm-3 badge">
          <img src="assets/img/index_intro_customized_badge.png" alt="" />
          <h3>客製化設計</h3>
          <p class="h5">Customized<br />design</p>
        </div>
        <div class="col-sm-3 badge">
          <img src="assets/img/index_intro_value_badge.png" alt="" />
          <h3>創造附加價值</h3>
          <p class="h5">Creating<br />added value</p>
        </div>
      </div>
    </div>

    <div id="applications">
      <div class="container">
        <div class="row">
          <div class="col-sm-12" id="applications_title">
            <h2>APPLICATIONS</h2>
            <p>
              俐元不斷地創新技術並積極研發，生產高品質的絕緣材料、導電布、導電布泡棉、泡棉、防火膠帶、吸波材及導電銅箔…等，
              並增添最新科技的生產設備，生產一系列規格精確、超高品質、使用便利的產品，於業界建立良好信譽。
            </p>
            <a href="#" class="pill_button"> Learn More </a>
          </div>
        </div>

        <div class="row" id="industry_type">
          <div class="col-sm-3">
            <img src="assets/img/index_application_commication.png" alt="" />
            <p>電子通訊</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_battery.png" alt="" />
            <p>電池</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_medi.png" alt="" />
            <p>醫療</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_commication.png" alt="" />
            <p>網通</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_vehicle.png" alt="" />
            <p>車載</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_ic.png" alt="" />
            <p>半導體</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_computer.png" alt="" />
            <p>電腦</p>
          </div>
          <div class="col-sm-3">
            <img src="assets/img/index_application_pos.png" alt="" />
            <p>POS</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="qualified">
      <div class="row">
        <div class="col-sm-12">
          <h2>QUALFIED</h2>
          <img src="assets/img/index_qualified.png" alt="" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
