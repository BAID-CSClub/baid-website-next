<template>
  <div class="section">
    <NotFancyTitle cn="遇见BAID" en="Meet BAID" color="red" />
    <div class="flex items-center md:flex-row flex-col m-t-20">
      <div class="w-full bg-gray-300 h-60"></div>
      <div class="w-full h-max bg-[var(--standard-red)] p-8">
        <h3 class="color-white text-8">
          {{ $t('HomePage.AdmissionResults.Title') }}
        </h3>
        <pre class="color-white op-90 m-b-10">{{
          $t('HomePage.AdmissionResults.Content')
        }}</pre>
        <router-link
          :to="`${locale}/about`"
          class="color-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"
        >
          Read More
        </router-link>
      </div>
      <div class="w-full bg-gray-300 h-90"></div>
    </div>
  </div>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
</script>
