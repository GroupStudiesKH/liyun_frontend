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
          <p><b>俐元企業股份有限公司</b>創立於西元1987年九月，早期從事紅殼紙、電木板、絕緣紙、Mylar、Film、Nomex、銅箔片(捲)…等加工，
            目前也已擴展至EMI防制產品。因重視客戶的需求與服務，近年來致力研發最新技術、增加機械設備，加強生產電子、通訊、電腦及週邊…
            等各類科技產品之絕緣材料，提供各式各樣高品質的產品，並使用雷射機台打樣以服務客戶。</p>
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

    <div class="container" id="applications">
      <div class="row">
        <div class="col-sm-12">
          <h2>企業介紹</h2>
          <p>我們是一群熱愛生活的</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
        <div class="col-sm-3">
          <h2>企業介紹</h2>
        </div>
      </div>
    </div>

    <div class="container" id="qualified">
      <div class="row">
        <div class="col-sm-12">
          <h2>企業介紹</h2>
          <p>我們是一群熱愛生活的</p>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
