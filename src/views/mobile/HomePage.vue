<template>
  <HomeSplash>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg"> {{ $t('views.HomePage') }}</MobileHead>
    <section class="section">
      <MobileTitle> {{ $t('HomePage.SecondSection.Title') }}</MobileTitle>
      <VideoCard :cover="firstImg"></VideoCard>
      <br />
      <MobileTitle>{{ $t('HomePage.EducationPhilosophy.Title') }}</MobileTitle>
      <MobileCard
        :items="[
          {
            title: $t('HomePage.EducationPhilosophy.1.Top'),
            content: $t('HomePage.EducationPhilosophy.1.Bottom')
          },
          {
            title: $t('HomePage.EducationPhilosophy.2.Top'),
            content: $t('HomePage.EducationPhilosophy.2.Bottom')
          },
          {
            title: $t('HomePage.EducationPhilosophy.3.Top'),
            content: $t('HomePage.EducationPhilosophy.3.Bottom')
          },
          {
            title: $t('HomePage.EducationPhilosophy.4.Top'),
            content: $t('HomePage.EducationPhilosophy.4.Bottom')
          }
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
      <MobileCard
        ><div class="flex h-35 justify-center items-center text-6">
          内容存疑
        </div></MobileCard
      >
    </section>
    <PrincipalMessage></PrincipalMessage>
    <NewsSection></NewsSection>
  </HomeSplash>
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
import HomeSplash from '../../components/MobileHomePage/HomeSplash.vue'

const swiperBg = ref('white')
</script>
