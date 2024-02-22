<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false)
    const { t, locale  } = useI18n();

    const handleScroll = () => {
      // 獲取目標div的相對位置

      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      // 判斷是否在可視範圍內
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        isIntroScolled.value = true
      }
    }

    // const toLastPage = () => {
    //   router.push({ name: "final" });
    //   playBackgroundMusic()
    // };

    // const toNextPage = () => {
    //   router.push({ name: "intro_2" });
    //   playBackgroundMusic()
    // };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isIntroScolled,
      t
    };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="banner">
      <img src="/assets/img/banner_1.png" alt="" />
    </div>
    <div id="company_info">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-12" id="company_pic">
          <div id="blue_triangle"></div>
          <img src="/assets/img/company_pic.png" alt="" />
        </div>
        <div class="col-md-6 col-lg-6 col-12" id="company_intro">
          <h2>LIYUN</h2>
          <p v-html="$t('index.intro')"></p>
          <a href="#" class="pill_button"> Learn More </a>
        </div>
      </div>
    </div>

    <div class="container" :class="isIntroScolled ? `scrolled` : ``" id="intro">
      <div class="row">
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/index_intro_innovative_badge.png" alt="" />
          <h3 v-html="t('index.feature1')"></h3>
          <p class="h5" v-html="t('index.feature1_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/index_intro_cooperation_badge.png" alt="" />
          <h3 v-html="t('index.feature2')"></h3>
          <p class="h5" v-html="t('index.feature2_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/index_intro_customized_badge.png" alt="" />
          <h3 v-html="t('index.feature3')"></h3>
          <p class="h5" v-html="t('index.feature3_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/index_intro_value_badge.png" alt="" />
          <h3 v-html="t('index.feature4')"></h3>
          <p class="h5" v-html="t('index.feature4_subtitle')"></p>
        </div>
      </div>
    </div>

    <div id="applications">
      <div class="container">
        <div class="row">
          <div class="col-sm-12" id="applications_title">
            <h2>APPLICATIONS</h2>
            <p>
              {{ t('index.application.intro') }}
            </p>
            <a href="#" class="pill_button"> Learn More </a>
          </div>
        </div>

        <div class="row" id="industry_type">
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_commication.png" alt="" />
            <p>{{ t('index.application.product1') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_battery.png" alt="" />
            <p>{{ t('index.application.product2') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_medi.png" alt="" />
            <p>{{ t('index.application.product3') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_commication.png" alt="" />
            <p>{{ t('index.application.product4') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_vehicle.png" alt="" />
            <p>{{ t('index.application.product5') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_ic.png" alt="" />
            <p>{{ t('index.application.product6') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_computer.png" alt="" />
            <p>{{ t('index.application.product7') }}</p>
          </div>
          <div class="col-6 col-sm-3">
            <img src="/assets/img/index_application_pos.png" alt="" />
            <p>{{ t('index.application.product8') }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="qualified">
      <div class="row">
        <div class="col-sm-12">
          <h2>QUALFIED</h2>
          <img src="/assets/img/index_qualified.png" alt="" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
