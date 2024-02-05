<script>
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";


export default {
  components: {
    Header,
    Footer,
    ProductMenu
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
  <main id="product">
    <div class="banner">
      <img src="/assets/img/product_banner.png" alt="" />
    </div>

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <ProductMenu />
            <div class="col-12 col-lg-10 list">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span><a href="#">首頁</a> / <a href="#">產品介紹</a> /
                  <a href="#">絕緣材料</a> / <a href="#">NR-INOAC</a>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
                <div class="col-6 col-lg-3">
                  <a href="/product/1">
                    <img src="/assets/img/product_image.png" />
                    <p>PE熱縮套管</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</main>
<Footer /></template>
