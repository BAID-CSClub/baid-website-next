<template>
  <div class="w-screen h-[calc(100vh-5rem)] font-sans">
    <div class="placeholder"></div>
    <SplashBlock
      title="学生社团"
      :image="camping"
      :items="data.clubs"
    ></SplashBlock>
    <SplashBlock
      title="特色活动"
      :image="archery"
      :items="data.activities"
    ></SplashBlock>
  </div>
</template>

<script setup>
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import archery from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
import SplashBlock from '../../components/MobileStudentLife/SplashBlock.vue'

import dataZH from '@data/zh-CN/StudentLife.json'
import dataEN from '@data/en-US/StudentLife.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
