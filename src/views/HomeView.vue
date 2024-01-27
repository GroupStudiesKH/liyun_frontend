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
      <img src="assets/img/banner_1.png" alt=""/>
    </div>

    <div class="container">
      <p>123</p>
    </div>
  </main>
  <Footer />

</template>
