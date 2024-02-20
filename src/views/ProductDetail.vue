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
    const product = ref([]);
    const currentLang = ref("zh_TW");
    const productID = useRoute().params.id;
    const categoryPath = ref([])

    const fetchProduct = async () => {
      try {
        const results = await apiService.getProduct(productID);
        product.value = results;

        if(product.value.category_id) getCategoryPath(product.value.category_id);
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

    const getInfo = (data, dataKey) => {
      let defaultVal = (dataKey == 'feature_image') ? '/assets/img/product_image.png' : 'No Data';
      return data.product_detail.find((attr) => attr.language == currentLang.value && attr.meta_key == dataKey).meta_value.length > 0 ?
      data.product_detail.find((attr) => attr.language == currentLang.value && attr.meta_key == dataKey).meta_value :
      defaultVal;
    };


    onMounted(async () => {
      await fetchProduct();
    });

    return {
      product,
      currentLang,
      getInfo,
      categoryPath
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

        <div class="container">
            <div class="row">
                <ProductMenu />
                <div class="col-12 col-lg-10 list">
                    <div class="row">
                        <div class="col-12 route">
                          <span class="material-icons">&#xE88A;</span><a href="/">首頁</a> / <a href="/product">產品介紹</a> 
                            <span v-if="product.category_id">
                              <span v-for="(path, pathIndex) in categoryPath" :key="pathIndex">
                                / <a :href="`/product?category=${path.id}`">{{ path.get_title_attribute.find((attr) => {
                                                      return attr.language == 'zh_TW';
                                                  }).meta_value }}</a> 
                              </span>
                          </span>
                      </div>
                    </div>
                    <div class="row" v-if="Object.keys(product).length > 0">
                        <div class="col-4">
                            <img :src="getInfo(product, 'feature_image')" />
                        </div>
                        <div class="col-8">
                            <h3>{{ getInfo(product, 'title') }}</h3>
                            <p>
                                {{ getInfo(product, 'subtitle') }}
                            </p>
                        </div>
                        <div class="col-4">
                        </div>
                        <div class="col-8">
                            <div class="askPrice">
                                加入詢價表單
                                <span class="material-icons">&#xEA20;</span>
                            </div>
                        </div>

                        <div class="col-12 pt-5 content" v-html="getInfo(product, 'content')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>
