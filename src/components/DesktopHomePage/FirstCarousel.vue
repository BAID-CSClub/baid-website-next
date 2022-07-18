<template>
    <div class="h-screen w-screen overflow-hidden relative">
        <div class="h-max w-screen absolute" :style="{ top }" >
            <img v-for="(img, index) in images" v-bind:key="img" :src="img" class="h-screen w-screen brightness-80 m-0" :class="{ 'm-t--4px': index > 0 }"/>
        </div>
        <div class="absolute right-10 bottom-10">
            <div v-for="(img, index) in images" v-bind:key="img" :class="{ 'important-bg-white': current === index }"
                class="dot w-4 h-4 m-y-3" v-on:click="current = index"></div>
        </div>
    </div>
</template>

<script setup>
import { animate } from 'popmotion';
import { ref, watch } from 'vue';
import homeBg1 from '../../assets/images/homeBg1.jpg'
import homeBg2 from '../../assets/images/homeBg2.jpg'
import homeBg3 from '../../assets/images/homeBg3.jpg'

const images = [homeBg1, homeBg2, homeBg3]
const current = ref(0)
const top = ref('0vh')

let topAnimation

watch(current, (index) => {
    if (topAnimation) topAnimation.stop()
    topAnimation = animate({
        from: top.value,
        to: index * -100 + 'vh',
        onUpdate(value) {
            top.value = value
        },
        duration: 300
    })
})


</script>

<style scoped>
.dot {
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 50%;
    /* margin-right: 10px; */
}
</style>