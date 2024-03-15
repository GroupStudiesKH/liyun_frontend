<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AppliedMenu from "@/components/AppliedMenu.vue";
import apiService from "@/service/api-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    AppliedMenu,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const applicationList = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([]);
    const totalPage = ref(0);
    const { locale } = useI18n();

    onMounted(async () => {
    });

    return {
      locale,
    };
  },
};
</script>

<template>
  <Header />
  <main id="applied">
    <div class="banner">
      <img src="/assets/img/contact_banner.png" alt="" />
    </div>

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <div class="col-12 list" id="contact_content">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span>
                  <router-link :to="{name: 'home'}">{{ $t('header.index') }}</router-link> / <router-link :to="{name: 'contact'}">{{ $t('header.contact') }}</router-link>
                </div>
                <div class="col-12">
                    <div class="px-5">
                        <div class="row">
                            <div class="col-12 heading">
                                親愛的顧客您好，若您有任何需求或興趣，我們誠摯地邀請您填寫以下表單，<br>
                                或撥打服務專線 :+8862-8688-8680 我們將盡力為您解答!
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 required">
                                <label for="contact_name">姓名</label>
                                <input type="text" id="contact_name" name="contact_name" class="form-control">
                            </div>

                            <div class="col-6 required">
                                <label for="contact_company">公司/單位</label>
                                <input type="text" class="form-control" id="contact_company" name="contact_company">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 required">
                                <label for="contact_phone">聯絡電話</label>
                                <input type="text" class="form-control" id="contact_phone" name="contact_phone">
                            </div>
                            <div class="col-6 required">
                                <label for="contact_email">E-mail</label>
                                <input type="text" class="form-control" id="contact_email" name="contact_email">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-12">
                                <label for="contact_content">訊息內容</label>
                                <textarea class="form-control" id="contact_content" name="contact_content"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    
                    <div class="px-5">
                        <hr/>
                        <div class="row mt-3">
                            <div class="col-12 secondHeading">
                                您的詢價產品:
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 askPriceContent">
                                ・<span class="category">緩衝材料UL防火泡棉</span><span class="product"> > 電子架橋泡棉</span>
                            </div>
                        </div>
                        <hr/>
                        <div class="row mt-3">
                            <div class="col-12">
                                <button class="btn btn-danger">確認送出</button>
                            </div>
                        </div>
                    </div>
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
