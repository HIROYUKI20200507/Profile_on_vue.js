<template>
    <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598">
        <button class="btn_07_style btn_07">{{ nextButton }}<span></span></button>
    </a>
</template>

<script>
export default {
    props: {
        nextButton: {
            type: String,
            default: ''
        }
    }

}
</script>

<style scoped>
.btn_07_style {
    max-width: 200px;
    height: 100px;
    margin-top: 25px;
}

.btn_07 {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid #4A82CC;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 25px;
    color: #4A82CC;
    font-size: 16px;
    text-align: left;
    text-decoration: none;
    position: relative;
    transition-duration: 0.2s;
}
.btn_07:hover {
    background: #4A82CC;
    border: 1px solid #05639a;
    color: #fff;
}
.btn_07:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 30px 40px;
    border-color: transparent transparent #4A82CC transparent;
}
.btn_07 span {
    position: absolute;
    bottom: 8px;
    right: 16px;
    display: inline-block;
}
.btn_07 span:before {
    content: '';
    width: 13px;
    height: 13px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -8px;
}
.btn_07 span:after {
    content: '';
    width: 4px;
    height: 4px;
    border: 0;
    border-top: 2px solid #4A82CC;
    border-right: 2px solid #4A82CC;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 4px;
    margin-top: -3px;
}
</style>