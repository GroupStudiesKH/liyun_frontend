<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import apiService from "@/service/api-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductMenu,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const products = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([]);
    const totalPage = ref(0);
    const { locale } = useI18n();
    const params = ref({
      page: 1,
      per_page: 10,
      category: "",
    });

    const fetchProducts = async () => {
      try {
        const results = await apiService.getProducts(params.value);
        params.value.page = results.current_page;
        params.value.perPage = results.per_page;
        totalPage.value = results.last_page;
        products.value = results.data;
      } catch (error) {
        console.log(error);
      }
    };

    const getCategoryPath = async (categoryID) => {
      try {
        const results = await apiService.getCategoryPath(categoryID);
        categoryPath.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const getTitle = (product) => {
      return product.get_title_attribute.find(
        (attr) => attr.language == locale.value
      ).meta_value != null &&
        product.get_title_attribute.find(
          (attr) => attr.language == locale.value
        ).meta_value != ""
        ? product.get_title_attribute.find(
            (attr) => attr.language == locale.value
          ).meta_value
        : "No Title";
    };

    const getFeatureImage = (product) => {
      return product.get_feature_image.find(
        (attr) => attr.language == locale.value
      ).meta_value != null &&
        product.get_feature_image.find((attr) => attr.language == locale.value)
          .meta_value != ""
        ? product.get_feature_image.find(
            (attr) => attr.language == locale.value
          ).meta_value
        : "/assets/img/product_image.png";
    };

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchProducts();
    };

    onMounted(async () => {
      if (catID) {
        params.value.category = catID;
        await getCategoryPath(catID);
      }

      await fetchProducts();
    });

    return {
      products,
      locale,
      totalPage,
      params,
      changePage,
      getTitle,
      getFeatureImage,
      categoryPath,
    };
  },
};
</script>

<template>
  <Header />
  <main id="company">
    <div class="banner">
      <img src="/assets/img/about_banner.png" alt="" />
    </div>

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <div class="col-12 list">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span
                  ><a href="/">首頁</a> / <a href="/company">公司介紹</a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-12 company_logo">
                  <p>
                    <img src="/assets/img/company_logo.png" alt="公司圖片" />
                  </p>
                  <p><img src="/assets/img/iso_logo.png" alt="公司圖片" /></p>
                </div>
                <div class="col-md-8 col-12 company_intro">
                  <h3 class="company_heading">公司介紹</h3>
                  <p>
                    成立於1987年，俐元企業為業界領先之輔材/耗材設計/製造廠商，為電子/電機/及其他各大產業提供完整的複合材導電/絕緣解決方案。
                  </p>
                  <p>
                    俐元企業傾聽客戶的需求，持續創新技術並積極研發，提供多樣化的導電/絕緣產品，為電子通訊/網通、工業電腦/POS、車用電子/車載、能源/電池、醫療、半導體及其他各大產業提供最理想的導電/絕緣選擇。
                  </p>

                  <h3 class="company_heading">經營理念</h3>
                  <p>
                    在科技進步日新月異及分秒必爭的社會趨勢下，俐元不斷地創新技術並積極研發，生產高品質的絕緣材料、導電布、導電布泡棉、泡棉、防火膠帶、吸波材及導電銅箔…等，並增添最新科技的生產設備，生產一系列規格精確、超高品質、使用便利的產品，於業界建立良好信譽。
                  </p>

                  <h3 class="company_heading">為客戶創造更高的附加價值</h3>
                  <p>
                    在俐元的網站中，可以找到您所需要的相關產品，並且接受客戶委託代其規劃設計特殊規格及特性之產品，俐元已取得ISO9001認證，產品符合RoHS、REACH及UL規範。若需國外特殊材料，或有任何問題，歡迎隨時與我們聯絡。
                  </p>
                </div>

                <div class="col-12 company_intro text-center mt-5">
                  <p>
                    俐元企業股份有限公司生產一系列規格精確、高品質的產品。並有最新科技的生產設備，可接受客戶委託代其規劃設計特殊規格及特性之產品。
                  </p>
                  <img src="/assets/img/about_image1.png" alt="公司圖片" />
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-12 col-md-6 company_intro small_padding">
                  <h3 class="company_heading mt-3">
                    <span class="material-icons"> &#xE038; </span>
                    UL94VTM-0防火膠帶
                  </h3>
                  <p>
                    本公司專業生產之特殊UL防火膠帶，均通過美國UL認可，耐溶劑佳、熱硬化感壓膠適用各種電子、電器零組件檔牆及絕緣用，顏色齊全。
                  </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >特殊絕緣材料、發泡材料
                  </h3>
                  <p>
                    本公司之絕緣材料及發泡材料適用於電源供應器、磁碟機、TV/監視器、PC板、Note
                    Book商務機器之貼合、絕緣及EMI防制的運用。
                  </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >導電材料、導電布、導電銅(鋁)箔
                  </h3>
                  <p>
                    本公司生產各式金屬導電產品，包含銅箔、鋁箔、合金銅等。並有導電布、導電泡棉、導電膠，各規格尺寸齊全。
                  </p>
                </div>

                <div class="col-12 col-md-6 company_intro small_padding company_intro_left_border">
                  <h3 class="company_heading mt-3">
                    <span class="material-icons"> &#xE038; </span
                    >UL認證電子、電器專用之絕緣材料設計、製造
                  </h3>
                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >銅(鋁)箔背膠加工、製造
                  </h3>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span>ABSORBER吸波材
                  </h3>
                  <p>無線高頻時代來臨，EMC及防止RF內部干擾最佳對策品</p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >金屬導電天線、EMI、鎳片包覆產品
                  </h3>
                  <p>鋁箔、銅箔、合金銅、鎳片。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
