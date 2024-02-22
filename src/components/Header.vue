<template>
  <header class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/assets/img/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">{{ t("header.companyIntro") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product">{{ t("header.product") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ t("header.applied") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ t("header.contact") }}</a>
          </li>
          <li class="nav-item language_switch dropdown">
            <div
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-icons">&#xE894;</span>
              <span>Language</span>
            </div>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-icons">&#xE894;</span>
                  <span>Language</span>
                </a>
              </li>
              <li v-for="(lOption, lOptionIndex) in localeOptions" :key="lOptionIndex">
                <a class="dropdown-item" role="button" @click="setLocale(lOption.lang)">{{ lOption.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const localeOptions = ref([
      {
        lang: 'eng',
        name: 'English'
      },
      {
        lang: 'zh_TW',
        name: '繁體中文'
      },
      {
        lang: 'jp',
        name: '日本語'
      }
    ])

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem('locale', lang);
    }
    
    return { 
      t, 
      locale,
      setLocale,
      localeOptions
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
