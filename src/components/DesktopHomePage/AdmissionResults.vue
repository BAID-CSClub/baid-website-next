<template>
  <section class="contentArea">
    <FancyTitle top="遇见BAID" btm="Meet BAID" color="red" />
    <div class="flex items-center md:flex-row flex-col m-t-20">
      <div class="w-full bg-gray-300 h-60"></div>
      <div class="w-full h-max bg-[var(--standard-red)] p-8">
        <h1 class="color-white font-sans text-8 letter-spacing">
          {{ $t('HomePage.AdmissionResults.title') }}
        </h1>
        <p
          class="color-white letter-spacing font-sans op-90 m-b-10"
          style="line-height: 25px"
          v-html="$t('HomePage.AdmissionResults.content')"
        ></p>
        <router-link
          to="about "
          class="color-white op-70 hover:op-100 active:op-80 transition-opacity"
        >
          Read More
        </router-link>
      </div>
      <div class="w-full bg-gray-300 h-90"></div>
    </div>
  </section>
</template>

<script setup>
import FancyTitle from '../FancyTitle.vue'
</script>
