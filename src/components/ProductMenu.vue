<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button" aria-expanded="false"
            aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">
                    <a data-bs-toggle="collapse" href="#secondMenu" role="button" aria-expanded="false"
                        aria-controls="secondMenu">
                        A second item
                    </a>

                    <div class="collapse" id="secondMenu">
                        <ul>
                            <li>An item</li>
                            <li>A third item</li>
                            <li>A fourth item</li>
                            <li>And a fifth one</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>

            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>

            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
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
