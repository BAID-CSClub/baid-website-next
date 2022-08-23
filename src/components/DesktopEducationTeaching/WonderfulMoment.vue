<template>
  <section class="seciton">
    <div class="bg-white h-54vw grid m-t-50" style="
      grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
      grid-template-rows: 1fr 0.7fr 1fr 0.7fr;
    ">
      <div class="bg-[var(--standard-red)] flex items-center justify-center">
        <div class="invert-100 contrast-1000">
          <FancyTitle :top="$t('EducationTeaching.WonderfulMoment.Title')" btm="WonderfulMoment" color="null">
          </FancyTitle>
        </div>
      </div>
      <div class="bg-purple opacity-50">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover" alt="Bg" />
      </div>
      <div class="bg-white flex" style="flex-direction: column">
        <div style="flex: 3">
          <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover; opacity: 50%" alt="Bg" />
        </div>
        <div class="bg-white w-100% flex justify-end relative" style="flex: 1">
          <div class="bg-[var(--standard-blue)] w-30% h-100% m-r-70%"></div>
          <img :src="homeBg1" style="
            width: 70%;
            height: 100%;
            object-fit: cover;
            opacity: 50%;
            position: absolute;
          " alt="Bg" />
        </div>
      </div>
      <div class="bg-blue opacity-50 relative">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover; position: absolute" alt="Bg" />
      </div>
      <div class="bg-black"></div>
      <div class="bg-lime-800 opacity-50 font-title flex items-center justify-center text-8 text-white">
        介绍
      </div>
      <div class="bg-white">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover" alt="Bg" />
      </div>
      <div class="bg-yellow flex" style="flex-direction: row">
        <div class="bg-green-900 w-100% font-title flex items-center justify-center text-8 text-white">
          补充说明
        </div>
        <div class="grid w-100%">
          <div class="bg-yellow"></div>
          <div class="bg-white"></div>
        </div>
      </div>
      <div class="bg-yellow grid relative" style="grid-auto-flow: column">
        <img :src="homeBg1" style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          transform: scale(70%, 70%);
        " alt="Bg" />
        <div class="bg-white"></div>
        <div class="bg-yellow"></div>
      </div>
      <div class="bg-green-900"></div>
      <div class="bg-white font-title flex items-center justify-center text-8 text-black">
        补充说明
      </div>
      <div class="bg-black flex relative">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover; position: absolute" alt="Bg" />
      </div>
      <div class="bg-yellow flex" style="flex-direction: row">
        <div class="bg-white w-100%">
          <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover" alt="Bg" />
        </div>
        <div class="bg-[var(--standard-blue)] w-100% font-title flex items-center justify-center text-8 text-white">
          补充说明
        </div>
      </div>
      <div class="bg-white opacity-50">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover" alt="Bg" />
      </div>
      <div class="bg-green opacity-50">
        <img :src="homeBg1" style="width: 100%; height: 100%; object-fit: cover" alt="Bg" />
      </div>
      <div class="bg-[var(--standard-red)] font-title flex items-center justify-center text-8 text-white">
        补充说明
      </div>
    </div>
  </section>
</template>
<script setup>
import FancyTitle from '../FancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
