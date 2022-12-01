<template>
  <div>
    <MobileHead :img="imgHeader1"> {{ $t('views.AboutUs') }}</MobileHead>
    <section class="section">
      <MobileTitle>学校概括</MobileTitle>
      <MobileCard
        ><div class="flex h-35 justify-center items-center text-6">
          content here
        </div></MobileCard
      >
      <MobileTitle>{{ $t('AboutUs.Grudate.Title') }}</MobileTitle>
      <MobileCard
        :items="[
          {
            title: $t('AboutUs.Grudate.1.Top'),
            content: $t('AboutUs.Grudate.1.Bottom')
          },
          {
            title: $t('AboutUs.Grudate.2.Top'),
            content: $t('AboutUs.Grudate.2.Bottom')
          },
          {
            title: $t('AboutUs.Grudate.3.Top'),
            content: $t('AboutUs.Grudate.3.Bottom')
          },
          {
            title: $t('AboutUs.Grudate.4.Top'),
            content: $t('AboutUs.Grudate.4.Bottom')
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
      <MobileTitle>{{ $t('AboutUs.Honors') }}</MobileTitle>
      <MobileCard
        :items="[
          {
            title: $t('AboutUs.Honors.1.Top'),
            content: $t('AboutUs.Honors.1.Bottom')
          },
          {
            title: $t('AboutUs.Honors.2.Top'),
            content: $t('AboutUs.Honors.2.Bottom')
          },
          {
            title: $t('AboutUs.Honors.3.Top'),
            content: $t('AboutUs.Honors.3.Bottom')
          },
          {
            title: $t('AboutUs.Honors.4.Top'),
            content: $t('AboutUs.Honors.4.Bottom')
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
      <MobileTitle>{{ $t('AboutUs.AXC') }}</MobileTitle>
      <MobileCard
        :items="[
          {
            title: $t('AboutUs.AXC.1.Top'),
            content: $t('AboutUs.AXC.1.Bottom')
          },
          {
            title: $t('AboutUs.AXC.2.Top'),
            content: $t('AboutUs.AXC.2.Bottom')
          },
          {
            title: $t('AboutUs.AXC.3.Top'),
            content: $t('AboutUs.AXC.3.Bottom')
          },
          {
            title: $t('AboutUs.AXC.4.Top'),
            content: $t('AboutUs.AXC.4.Bottom')
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
      <MobileTitle>{{ $t('AboutUs.Teacher') }}</MobileTitle>
      <MobileCard
        :items="[
          {
            title: $t('AboutUs.Teacher.1.Top'),
            content: $t('AboutUs.Teacher.1.Bottom')
          },
          {
            title: $t('AboutUs.Teacher.2.Top'),
            content: $t('AboutUs.Teacher.2.Bottom')
          },
          {
            title: $t('AboutUs.Teacher.3.Top'),
            content: $t('AboutUs.Teacher.3.Bottom')
          },
          {
            title: $t('AboutUs.Teacher.4.Top'),
            content: $t('AboutUs.Teacher.4.Bottom')
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
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../../components/MobileHead.vue'
import MobileCard from '../../components/MobileCard.vue'
import MobileTitle from '../../components/MobileTitle.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'

import { ref } from 'vue'
const swiperBg = ref('white')
</script>
