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
  <main id="product">
    <div class="banner">
      <img src="/assets/img/product_banner.png" alt="" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-2 category">
          <div class="title">絕緣材料</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>

          <div class="title">絕緣材料</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>

          <div class="title">絕緣材料</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div class="col-12 col-sm-10 list">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>首頁 / 產品介紹 /
              絕緣材料 / NR-INOAC
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
            <div class="col-6 col-md-3">
              <img src="/assets/img/product_image.png" />
              <p>PE熱縮套管</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
