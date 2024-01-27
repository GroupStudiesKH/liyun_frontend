<template>
  <header class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="assets/img/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">企業介紹</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">產品介紹</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">應用產業</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">聯絡詢價</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Language</a>
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
