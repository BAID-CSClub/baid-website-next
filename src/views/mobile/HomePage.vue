<template>
  <div>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg"> {{ $t('views.HomePage') }}</MobileHead>
    <section>
      <MobileTitle>欢迎来到北京中学国际部</MobileTitle>
      <VideoCard :cover="firstImg"></VideoCard>
      <br />
      <MobileTitle>办学理念</MobileTitle>
      <MobileCard
        :items="[
          { title: '校训', content: '一些文字介绍' },
          { title: '教风', content: '一些文字介绍' },
          { title: '教风', content: '一些文字介绍' },
          { title: '教风', content: '一些文字介绍' }
        ]"
        :bg="swiperBg"
        @change="swiperBg = swiperBg === 'white' ? 'blue' : 'white'"
      >
        <template #item="{ title, content }">
          <div class="m-5">
            <h3
              class="m-y-0"
              :class="{
                'color-[var(--standard-blue)]': swiperBg === 'white',
                'color-white': swiperBg === 'blue'
              }"
            >
              {{ title }}
            </h3>
            <p
              class="m-y-3"
              :class="{
                'color-black': swiperBg === 'white',
                'color-white': swiperBg === 'blue'
              }"
            >
              {{ content }}
            </p>
          </div>
        </template>
      </MobileCard>
      <MobileTitle>遇见BAID</MobileTitle>
      <MobileCard>内容存疑</MobileCard>
    </section>
    <PrincipalMessage></PrincipalMessage>
    <NewsSection></NewsSection>
  </div>
</template>

<script setup>
import HomeBackground from '../../components/MobileHomePage/HomeBackground.vue'
import MobileCard from '../../components/MobileCard.vue'
import MobileHead from '../../components/MobileHead.vue'

import firstImg from '../../assets/images/HomePage/Autumn.jpg?webp'
import VideoCard from '../../components/VideoCard.vue'
import MobileTitle from '../../components/MobileTitle.vue'
import { ref } from 'vue'
import NewsSection from '../../components/MobileHomePage/NewsSection.vue'
import PrincipalMessage from '../../components/MobileHomePage/PrincipalMessage.vue'

const swiperBg = ref('white')
</script>
