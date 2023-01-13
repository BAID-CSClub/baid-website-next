<template>
  <div>
    <MobileHead :img="imgHeader1"> {{ $t('views.AboutUs') }}</MobileHead>
    <section class="section">
      <div class="relative font-black m-t-10vh h-10vh max-h-15vh text-left">
        <!-- <div class="text-6 tracking-1">学校概括</div>
        <div class="text-4 tracking-wider text-black-300 m-t--2">Overview</div> -->
        <MobileTitle>{{ $t('AboutUs.Overview.Title') }}</MobileTitle>
      </div>
      <div class="text-4 w-100% p-t-4 m-t--4 overflow-y-clip">
        <div
          class="absolute h-60vh w-95vw bg-gradient-to-b"
          :class="{
            'overflow-y-clip h-60vh CollapseOut': IsCollapse,
            'h-60vh CollapseIn': !IsCollapse
          }"
          v-if="IsCollapse"
        ></div>
        <!-- W: Overflow? -->
        <div
          class="flex m-b-10 w-full"
          v-for="items in Curriculums"
          :key="items"
        >
          <div class="w-70% tracking-widest whitespace-pre-wrap break-all">
            {{ items.description }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../MobileHead.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'
import { ref } from 'vue'
import MobileTitle from '../MobileTitle.vue'
const IsCollapse = ref(true)

const Curriculums = [
  {
    description:
      '北京中学成立于2013年9月，是经北京市政府批准，由朝阳区政府创办的一所十二年一贯制的公办学校， 致力于办成一所具有北京风格、 中国气质与世界胸怀的现代学校。'
  }
]
</script>
