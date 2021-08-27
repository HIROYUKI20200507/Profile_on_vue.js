<template>
    <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598">
        <button class="btn btn-blue">{{ button }}</button>
    </a>
</template>

<script>
export default {
    props: {
        button: {
            type: String,
            default: ''
        }
    }

}
</script>

<style>
.btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-blue {
    @apply text-white bg-blue-500 hover:bg-blue-700;
}
</style>