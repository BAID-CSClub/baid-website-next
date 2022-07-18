<template>
    <section class="h-screen m-t-[-4.25rem] relative">
        <div class="absolute top-0 w-screen h-screen">
            <FirstCarousel />
        </div>
        <div
            class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px max-w-700px shadow shadow-lg shadow-black">
        </div>
        <div class="absolute left-20 right-20 bottom-15% font-sans">
            <h1 class="text-20 color-white text-shadow-lg m-0">欢迎来到北京中学国际部！</h1>
            <p class="text-7 color-white">Welcome to Beijing Academy International Department (BAID)!</p>
        </div>
        <div class="absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col">
            <span class="text-6 font-sans select-none">Learn More</span>
            <div class="arrow relative w-full h-1 m-t-1 transition-all">
                <div class="middle transition-all op-0"></div>
                <div class="left transition-all"></div>
                <div class="right transition-all"></div>
            </div>

        </div>
    </section>
</template>

<script setup>
import FirstCarousel from './FirstCarousel.vue';
</script>

<style scoped>
.arrow div {
    position: absolute;
    background-color: white;
    /* border-radius: 3px; */
}

.right {
    width: 50%;
    height: 3px;
    left: 50%;
}

.left {
    width: 50%;
    height: 3px;
    right: 50%;
}

.middle {
    width: 3px;
    height: 10px;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
}

.learnMore:hover .arrow {
    margin-top: 25px;
}

.learnMore:hover .left {
    width: 30px;
    border-radius: 3px;

    transform: rotate(40deg) translateX(6px);
}

.learnMore:hover .right {
    width: 30px;
    border-radius: 3px;
    transform: rotate(-40deg) translateX(-6px);
}

.learnMore:hover .middle {
    opacity: 1;
    height: 30px;
    border-radius: 3px;
    bottom: -10px;
}
</style>