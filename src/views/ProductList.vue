<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import apiService from "@/service/api-service.js";

export default {
  components: {
    Header,
    Footer,
    ProductMenu
  },
  setup() {
    const router = useRouter();
    const products = ref([]);
    const currentLang = ref("zh_TW");
    const totalPage = ref(0);
    const params = ref({
      page: 1,
      per_page: 10,
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

    const getTitle = (product) => {
      return product.get_title_attribute.find((attr) => attr.language == currentLang.value).meta_value.length > 0 ?
        product.get_title_attribute.find((attr) => attr.language == currentLang.value).meta_value :
        'No Title';
    };

    const getFeatureImage = (product) => {
      return product.get_feature_image.find((attr) => attr.language == currentLang.value).meta_value.length > 0 ?
        product.get_feature_image.find((attr) => attr.language == currentLang.value).meta_value :
        '/assets/img/product_image.png';
    };

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchProducts();
    };

    onMounted(async () => {
      await fetchProducts();
    });

    return {
      products,
      currentLang,
      totalPage,
      params,
      changePage,
      getTitle,
      getFeatureImage,
    };
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
                <div class="col-6 col-lg-3" v-for="(product, productIndex) in products" v-key="productIndex">
                  <a :href="`product/${product.id}`">
                    <div class="feature_image">
                      <img :src="getFeatureImage(product)" />
                    </div>
                    <p>{{ getTitle(product) }}</p>
                  </a>
                </div>

              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a role="button" class="page-link" @click="changePage(params.page - 1)">上一頁</a></li>
                  <li class="page-item" v-for="i in totalPage" @click="changePage(i)"><a role="button" class="page-link" >{{ i }}</a></li>
                  <li class="page-item"><a role="button" class="page-link" @click="changePage(params.page + 1)">下一頁</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
