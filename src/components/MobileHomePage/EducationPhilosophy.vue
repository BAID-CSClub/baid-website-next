<template>
  <section class="section">
    <MobileTitle>{{ $t('HomePage.EducationPhilosophy.Title') }}</MobileTitle>
    <MobileCard
      :items="
        ['motto', 'spirit', 'key_competency', 'cultivation'].map((key) => ({
          key
        }))
      "
      :bg="swiperBg"
      :autoplay="true"
      @change="swiperBg = swiperBg === 'white' ? 'blue' : 'white'"
    >
      <template #item="{ key }">
        <div class="m-5 m-b-8">
          <h3
            class="m-y-0"
            :class="{
              'color-[var(--standard-blue)]': swiperBg === 'white',
              'color-white': swiperBg === 'blue'
            }"
          >
            {{ pageData[key + '_title'] }}
          </h3>
          <p
            class="m-y-3"
            :class="{
              'color-black': swiperBg === 'white',
              'color-white': swiperBg === 'blue'
            }"
            v-html="pageData[key + '_content']"
          ></p>
        </div>
      </template>
    </MobileCard>
  </section>
</template>
<script setup>
import { inject, ref } from 'vue'
import MobileTitle from '../MobileTitle.vue'
import MobileCard from '../MobileCard.vue'

const pageData = inject('data')
const swiperBg = ref('white')
</script>
