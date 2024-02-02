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
            <a class="nav-link" href="/">企業介紹</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product">產品介紹</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">應用產業</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">聯絡詢價</a>
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
              <li><a class="dropdown-item" href="#">繁體中文</a></li>
              <li><a class="dropdown-item" href="#">ENGLISH</a></li>
              <li><a class="dropdown-item" href="#">日本語</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
