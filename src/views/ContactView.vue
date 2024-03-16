<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AppliedMenu from "@/components/AppliedMenu.vue";
import cartService from "@/service/cart-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    AppliedMenu,
  },
  setup() {
    const { locale } = useI18n();
    const contact_name = ref("");
    const contact_company = ref("");
    const contact_phone = ref("");
    const contact_email = ref("");
    const contact_content = ref("");
    const cartItem = ref([])
    const removeCartItem = async (productID) => {
      await cartService.removeCart(productID);
      cartItem.value = cartService.getCart();
    }

    const getCart = () => {
      cartItem.value = cartService.getCart();
    }


    onMounted(() => {
        getCart()
    });

    return {
        locale,
        contact_name,
        contact_company,
        contact_phone,
        contact_email,
        contact_content,
        removeCartItem,
        cartItem
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
                    <div class="contact-container">
                        <div class="row">
                            <div class="col-12 heading" v-html="$t('contact.heading')">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-12 required" :class="contact_name.length > 0 ? `hasContent` : ``">
                                <label for="contact_name">{{ contact_name.length == 0 ? $t('contact.name') : `` }}</label>
                                <input type="text" id="contact_name" name="contact_name" v-model="contact_name" class="form-control">
                            </div>

                            <div class="col-sm-6 col-12 required" :class="contact_company.length > 0 ? `hasContent` : ``">
                                <label for="contact_company">{{ contact_company.length == 0 ? $t('contact.company') : `` }}</label>
                                <input type="text" class="form-control" id="contact_company" v-model="contact_company" name="contact_company">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-12 required" :class="contact_phone.length > 0 ? `hasContent` : ``">
                                <label for="contact_phone">{{ contact_phone.length == 0 ? $t('contact.phone') : `` }}</label>
                                <input type="text" class="form-control" id="contact_phone" v-model="contact_phone" name="contact_phone">
                            </div>
                            <div class="col-sm-6 col-12 required" :class="contact_email.length > 0 ? `hasContent` : ``">
                                <label for="contact_email">{{ contact_email.length == 0 ? $t('contact.email') : `` }}</label>
                                <input type="email" class="form-control" id="contact_email" v-model="contact_email" name="contact_email">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <label for="contact_content">{{ contact_content.length == 0 ? $t('contact.content') : `` }}</label>
                                <textarea class="form-control" id="contact_content" name="contact_content" v-model="contact_content"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    
                    <div class="contact-container">
                        <hr/>
                        <div class="row mt-3">
                            <div class="col-12 secondHeading">
                                {{ $t('contact.askingPrice') }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 askPriceContent" v-for="(cart, cartIndex) in cartItem" :key="cartIndex">
                                <div class="row">
                                    <div class="col-10">
                                        ・<span class="category">
                                            {{ 
                                                cart.category.length > 0 ? 
                                                cart.category[0].get_title_attribute.find((attr) => {
                                                    return attr.language == locale;
                                                }).meta_value : ``
                                                
                                            }}
                                        </span>
                                        <span class="product"> > 
                                            {{ cart.product.product_detail.find((attr) => {
                                                return attr.language == locale && attr.meta_key == 'title';
                                            }).meta_value }}
                                        </span>
                                    </div>
                                    <div class="col-2 remove" @click="removeCartItem(cart.product.id)">
                                        <div>X</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row mt-3">
                            <div class="col-12">
                                <button class="btn btn-danger">{{ $t('contact.submit') }}</button>
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
