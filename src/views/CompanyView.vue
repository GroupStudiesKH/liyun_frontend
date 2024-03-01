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
    ProductMenu
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const products = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([])
    const totalPage = ref(0);
    const { locale } = useI18n();
    const params = ref({
      page: 1,
      per_page: 10,
      category: '',
    })

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

    const getCategoryPath = async(categoryID) => {
      try {
        const results = await apiService.getCategoryPath(categoryID);
        categoryPath.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const getTitle = (product) => {
      return product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value != null &&
      product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value != ''
      ?
        product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value :
        'No Title';
    };

    const getFeatureImage = (product) => {
      return product.get_feature_image.find((attr) => attr.language == locale.value).meta_value != null &&
      product.get_feature_image.find((attr) => attr.language == locale.value).meta_value != ''
      ?
        product.get_feature_image.find((attr) => attr.language == locale.value).meta_value :
        '/assets/img/product_image.png';
    };

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchProducts();
    };

    onMounted(async () => {
      if(catID){
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
      categoryPath
    };
  },
};
</script>

<template>
  <Header />
  <main id="product">
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
                  <span class="material-icons">&#xE88A;</span><a href="/">首頁</a> / <a href="/company">公司介紹</a> 

                </div>
              </div>
              <div class="row">


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
