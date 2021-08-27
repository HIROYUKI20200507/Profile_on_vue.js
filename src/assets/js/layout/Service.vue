<template>
    <div class="perf-top pb-52">
        <ul class="perf-top-item">
            <li class="perf-top-layout flex justify-center items-center gap-20 mb-40" id="service-main">
                <img src="../../../../public/img/Service-img.png" alt="" class="perf-img w-2/5">
                <div class="perf-contents">
                    <a href="#service">
                        <button class="perf-button" @click="isShow=!isShow">
                            <div class="contents-main text-3xl leading-10 pb-4"><span class="layout-radius"></span>Service</div>
                        </button>
                    </a>
                    <p class="contents-sub flex-wrap w-4/5">
                        個人・法人関わらず、システム開発・コーポレートサイトやLPの制作などフロントエンドを中心に展開中です。
                        要件定義からリリース・保守点検まで幅広いサービスの提供をさせていただきております。
                        制作デザインも承ることが可能です。
                        <br>
                        <br>
                        また、無料でプログラミングを学びたい方も募集しているので、興味がある方は
                        <span id="service" class="contents-sub-span"><a href="https://form.run/@hiroyuki-akimoto-hp-1615021598">こちら</a></span>
                        から連絡ください。
                    </p>
                    <div class="icon-detail">
                        <a target="_blank" href="https://github.com/HIROYUKI20200507"><img class="w-7 h-7 m-3 mt-5" src="../../../../public/img/icon/github-icon.svg" alt="githubアイコン"></a>
                    </div>
                </div>
            </li>
            <transition name="slide">
                <div class="pref-sub-img -mt-20" v-if="isShow" key="img">
                    <div class="sub-title text-center mb-20 text-3xl relative">Actual results</div>
                    <li class="m-auto flex justify-between items-center mb-40 gap-5">
                        <a href="https://isara-mosya.web.app/"><img src="../../../../public/img/service-sub-img1.png" alt="isara模写"><span>模写コーディング</span></a>
                        <a href="https://sakata-coach.com/"><img src="../../../../public/img/service-sub-img2.png" alt="sakataコーチング"><span>コーチングサイト</span></a>
                    </li>
                </div>
            </transition>
            <li class="perf-top-layout flex justify-center items-center gap-20 mb-40">
                <img src="../../../../public/img/Contact-img.jpg" alt="" class="perf-img w-2/5">
                <div class="perf-contents">
                    <button class="perf-button">
                        <div class="contents-main text-3xl leading-10 pb-4">
                            <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598"><span class="layout-radius"></span>Contact</a></div>
                    </button>
                    <p class="contents-sub flex-wrap w-4/5">
                        システム開発・コーポレートサイトなど、その他お問い合わせにつきましては
                        <span class="contents-sub-span"><a href="https://form.run/@hiroyuki-akimoto-hp-1615021598">こちら</a></span>
                        からお問い合わせ、もしくはSNSのDMでお願いいたします。
                    </p>
                    <div class="icon-detail flex mt-5">
                        <a target="_blank" href="https://twitter.com/Akimon6134"><img class="w-7 h-7 m-3" src="../../../../public/img/icon/twitter.svg" alt="teitterアイコン"></a>
                        <a target="_blank" href="https://www.facebook.com/hiroyuki.akimoto.77"><img class="w-7 h-7 m-3" src="../../../../public/img/icon/facebook.svg" alt="facebookアイコン"></a>
                    </div>

                </div>
            </li>
            <li class="perf-top-layout flex justify-center items-center gap-20 mb-40" id="price-main">
                <img src="../../../../public/img/Price-img.jpg" alt="" class="perf-img w-2/5">
                <div class="perf-contents">
                    <button class="perf-button">
                        <div class="contents-main text-3xl leading-10 pb-4"><span class="layout-radius"></span>Price</div>
                    </button>
                    <p class="contents-sub flex-wrap w-4/5">
                        HP制作全体のお見積りはもちろん、部分委託でのお見積りも提案することが可能です。
                        <br>
                        <br>
                        詳細につきましては
                        <span class="contents-sub-span"><a href="https://form.run/@hiroyuki-akimoto-hp-1615021598">こちら</a></span>
                        までお問い合わせください。
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        }
    }
}
</script>
