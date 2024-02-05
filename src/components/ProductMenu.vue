<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button" aria-expanded="false"
            aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">
                    <a data-bs-toggle="collapse" href="#secondMenu" role="button" aria-expanded="false"
                        aria-controls="secondMenu">
                        測試中文
                    </a>

                    <div class="collapse" id="secondMenu">
                        <ul>
                            <li>測試中文</li>
                            <li>測試中文</li>
                            <li>測試中文</li>
                            <li>測試中文</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
            </ul>

            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
            </ul>

            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
                <li class="list-group-item">測試中文</li>
            </ul>
        </div>


    </div>
</template>

<script>
export default {
    name: "ProductMenu",
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
