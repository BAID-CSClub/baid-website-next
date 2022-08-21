<template>
<div class="m-3vw m-t--20">
    <div class="text-10 font-700 flex justify-end m-r-5vw">
        <FancyTitle :top="$t('EducationTeaching.Learning.Title')" btm="Learning Method" color="red" right></FancyTitle>
    </div>
        <div class="grid h-44vw" style="margin:1vw 8vw;grid-auto-flow: column;grid-template-columns:2.5fr 1fr;gap:4px;">
            <div style="overflow:clip">
                <div style="position:relative">
                    <img :src="homeBg1" style="height:45vw;object-fit: cover;position:absolute" alt="Bg" />
                </div>
                <div class="flex">
                    <div class="w-90% text-white" style="position:relative;top:30vw;left:2vw;">
                            <div class="text-9">自处探索多样的学习方式</div>
                            <br />
                            <div class="text-4.5">学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。</div>
                    </div>
                </div>
            </div>
            <div class="grid" style="gap:4px;grid-template-rows:1fr 1fr 1fr;">
                <div class="bg-pink">
                    <img :src="homeBg1" style="width: 100%;height: 100%; object-fit: cover;" alt="Bg" />
                </div>
                <div class="bg-purple">
                    <img :src="homeBg1" style="width: 100%;height: 100%; object-fit: cover;" alt="Bg" />
                </div>
                <div class="bg-fuchsia">
                    <img :src="homeBg1" style="width: 100%;height: 100%; object-fit: cover;" alt="Bg" />
                </div>
            </div>
        </div>

</div>
</template>
<script setup>
import FancyTitle from '../FancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
<style scoped>
</style>
