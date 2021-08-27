<template>
    <div class="contents-width flex justify-between items-center sticky top-0 z-50">
        <div class="nav-icon flex">
            <div class="icon-logo mix-blend-multiply"><img src="../../../../public/img/logo.png" alt="HPicon" class="w-20 h-20"></div>
            <div class="text-3xl mt-3 relative font-top">Aスタジオ<br><span class="text-xs absolute top-9 left-1">poword by HIROYUKI</span></div>
        </div>
        <ul class="nav-main-item flex justify-between items-center gap-10">
            <li class="item-title"><a href="#profile-main" class="item-title-link">Profile</a></li>
            <li class="item-title"><a href="#service-main" class="item-title-link">Service</a></li>
            <li class="item-title"><a href="#price-main" class="item-title-link">Price</a></li>
            <li class="item-title"><a target="_blank" href="https://twitter.com/Akimon6134"><img class="w-7 h-7" src="../../../../public/img/icon/twitter.svg" alt="teitterアイコン"></a></li>
            <li class="item-title"><a target="_blank" href="https://www.facebook.com/hiroyuki.akimoto.77"><img class="w-7 h-7" src="../../../../public/img/icon/facebook.svg" alt="facebookアイコン"></a></li>
            <li class="item-title">
                <Button button='contact' class="nav-button-layout"></Button>
            </li>
        </ul>
    </div>

</template>

<script>
import Button from "../components/Button.vue";
export default {
    components: {
        Button,
    }
}
</script>
