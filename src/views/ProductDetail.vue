<script>
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";

export default {
    components: {
        Header,
        Footer,
        ProductMenu
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
                <ProductMenu />
                <div class="col-12 col-lg-10 list">
                    <div class="row">
                        <div class="col-12 route">
                            <span class="material-icons">&#xE88A;</span><a href="#">首頁</a> / <a href="#">產品介紹</a> /
                            <a href="#">絕緣材料</a> / <a href="#">NR-INOAC</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <img src="/assets/img/product_image.png" />
                        </div>
                        <div class="col-8">
                            <h3>Inscription Printing & Screen Printing & UV inkjet Printing & Relief Printing & Poly
                                Nameplate</h3>
                            <p>
                                Using cutter cutting，the height of cutting is around 50mm. There is no height limited of
                                mold and finish product has the smoothly cut surface.
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

                        <div class="col-12 pt-5">
                            <p>
                            <p class="h6">Materials：</p>
                            PC : Transparent PC，Matte PC，Single side Hard coating PC，Double side Hard coating PC<br>
                            PMMA Acrylic : Transparent Acrylic，optical Acrylic<br>
                            PET (MYLAR): Transparent PET<br>
                            Aluminum：Natural<br>
                            Stainless Steel (SUS)：Natural
                            </p>

                            <p>
                            <p class="h6">Material Part numbers：</p>
                            Matte PC：8B35，8A35，8A13，PC1860，EFR-65，DFR116ECO，FR65<br>
                            Transparent PC：FR60<br>
                            PMMA Acrylic : MR200<br>
                            Transparent PET：T60<br>
                            Aluminum：1052~5052 series<br>
                            Stainless Steel (SUS)：301，304，430<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>
