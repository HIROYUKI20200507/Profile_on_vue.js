<template>
    <div class="bg-gray-50">
        <top-video />
        <nav-ber class="mb-80 bg-opacity-50 bg-gray-50" />
        <profile class="mb-80" />
        <service />
        <footer-bar />
    </div>
</template>

<script>
import NavBer from '../js/layout/NavBer.vue'
import TopVideo from '../js/layout/TopVideo.vue'
import Profile from '../js/layout/Profile.vue'
import Service from '../js/layout/Service.vue'
import FooterBar from '../js/layout/FooterBar.vue'

export default {
    name: 'App',
    components: {
        NavBer,
        TopVideo,
        Profile,
        Service,
        FooterBar
    }
}
</script>
