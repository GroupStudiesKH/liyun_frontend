<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button"
            aria-expanded="false" aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
                <div class="title">{{ category.get_title_attribute.find((attr) => {
                    return attr.language == 'zh_TW';
                }).meta_value }}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(childCategory2nd, childCategory2ndIndex) in category.children" :key="childCategory2ndIndex">
                    
                        <a v-if="childCategory2nd.children.length" data-bs-toggle="collapse" :href="`#secondMenu_${childCategory2ndIndex}`" role="button" aria-expanded="false"
                            :aria-controls="`secondMenu_${childCategory2ndIndex}`">
                            {{ childCategory2nd.get_title_attribute.find((attr) => {
                                return attr.language == 'zh_TW';
                            }).meta_value }}
                        </a>

                        
                        <a v-else>
                            {{ childCategory2nd.get_title_attribute.find((attr) => {
                                return attr.language == 'zh_TW';
                            }).meta_value }}
                        </a>

                    

                        <div v-if="childCategory2nd.children.length" class="collapse" :id="`secondMenu_${childCategory2ndIndex}`">
                            <ul>
                                <li v-for="(childCategory3rd, childCategory3rdIndex) in childCategory2nd.children" :key="childCategory3rdIndex">
                                    <a>{{childCategory3rd.get_title_attribute.find((attr) => {
                                            return attr.language == 'zh_TW';
                                        }).meta_value}}</a>
                                </li>
                            </ul>
                        </div>

                    </li>


                </ul>
            </div>


        </div>


    </div>
</template>

<script>

import apiService from "@/service/api-service.js";
import { ref, onMounted } from "vue";



export default {
    name: "ProductMenu",
    setup() {
        const categories = ref([]);

        const fetchCategories = async () => {
            try {
                const results = await apiService.getAllCategory();
                categories.value = results;
            } catch (error) {
                console.log(error);
            }
        };

        onMounted(() => {
            fetchCategories();
        });

        return {
            categories,
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
