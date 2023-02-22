<template>
  <div>
    <MobileHead :img="imgHeader1"> {{ $t('views.AboutUs') }}</MobileHead>
    <section class="section">
      <MobileTitle>{{ $t('AboutUs.Overview.Title') }}</MobileTitle>

      <div class="flex" v-for="items in Curriculums" :key="items">
        <div class="tracking-widest whitespace-pre-wrap break-all text-4">
          {{ items.description }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../MobileHead.vue'
import MobileTitle from '../MobileTitle.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'

const Curriculums = [
  {
    description:
      '北京中学成立于2013年9月，是经北京市政府批准，由朝阳区政府创办的一所十二年一贯制的公办学校， 致力于办成一所具有北京风格、 中国气质与世界胸怀的现代学校。'
  }
]
</script>
