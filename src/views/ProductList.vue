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

    // const toLastPage = () => {
    //   router.push({ name: "final" });
    //   playBackgroundMusic()
    // };

    // const toNextPage = () => {
    //   router.push({ name: "intro_2" });
    //   playBackgroundMusic()
    // };

    const fetchProducts = async () => {
      try {
        const results = await apiService.getProducts(params);
        params.value.page = results.current_page;
        params.value.perPage = results.per_page;
        totalPage.value = results.total;
        products.value = results.data;
        console.log(products.value)
      } catch (error) {
        console.log(error);
      }
    };

    const changePage = async (newPage) => {
      page.value = newPage;
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
                      <img src="/assets/img/product_image.png" />
                    </div>
                    <p>{{ product.get_title_attribute.find((attr) => attr.language == currentLang).meta_value }}</p>
                  </a>
                </div>

              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a role="button" class="page-link" @click="changePage(params.page - 1)">上一頁</a></li>
                  <li class="page-item"><a role="button" class="page-link" v-for="i in totalPage" @click="changePage(i)">{{ i }}</a></li>
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
