<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button" aria-expanded="false"
            aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div class="title">絕緣材料</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">導電‧EMI遮蔽材料</li>
                <li class="list-group-item">
                    <a data-bs-toggle="collapse" href="#secondMenu" role="button" aria-expanded="false"
                        aria-controls="secondMenu">
                        PORON-INOAC
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
                <li class="list-group-item">CR-INOAC</li>
                <li class="list-group-item">EPDM-INOAC</li>
                <li class="list-group-item">NR-INOAC</li>
                <li class="list-group-item">NBR & Silicone-INOAC</li>
                <li class="list-group-item">PORON-ROGERS</li>
            </ul>

            <div class="title">泡棉</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">矽膠發泡系列</li>
                <li class="list-group-item">緩衝材料‧UL防火泡棉</li>
                <li class="list-group-item">導熱‧散熱材料</li>
            </ul>

            <div class="title">膠帶</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">絕緣電子膠帶</li>
                <li class="list-group-item">UL防火‧雙面膠帶</li>
                <li class="list-group-item">Heat Conduction Material、Heat Dissipation Material</li>
            </ul>

            <div class="title">其他</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">シリコーンゴム 導電性シリコーンゴム</li>
                <li class="list-group-item">熱収縮スリーブ 一般スリーブ</li>
                <li class="list-group-item">EMI ガスケット、導電性スポンジ</li>
                <li class="list-group-item">熱縮套管‧一般套管</li>
                <li class="list-group-item">橡膠系列</li>
                <li class="list-group-item">銘版‧印刷製品</li>
                <li class="list-group-item">CNC切断・CNC彫刻</li>
                
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
