<template>
  <div class="p-l-2">
    <div class="relative font-black m-t-10vh h-10vh max-h-15vh text-center">
      <div class="text-8 tracking-5">课程体系</div>
      <div class="text-4 tracking-wider text-gray-300 m-t--2">Curriculums</div>
    </div>
    <div
      class="text-4 w-90% p-t-4 m-t--4 overflow-y-clip"
      :class="{
        'h-85vh CollapseOut': IsCollapse,
        'h-60vh CollapseIn': !IsCollapse
      }"
    >
      <div
        class="absolute h-60vh w-95vw bg-gradient-to-b from-transparent to-white translate-y-1 z-1"
        :class="{
          'overflow-y-clip h-80vh CollapseOut': IsCollapse,
          'h-60vh CollapseIn': !IsCollapse
        }"
        v-if="IsCollapse"
      ></div>
      <div class="flex m-b-10" v-for="items in Curriculums" :key="items">
        <div class="w-20%">
          <img :src="items.icon" class="w-16 m-l-3 m-t--4 scale-80" alt="Bg" />
        </div>
        <div class="w-80% tracking-widest whitespace-pre-wrap break-all">
          {{ items.description }}
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center m-t--10">
      <img
        :src="arrow"
        class="z-2"
        :class="{ 'scale-y--100': !IsCollapse }"
        alt="Bg"
        @click="IsCollapse = !IsCollapse"
      />
    </div>
  </div>
</template>

<style>
@keyframes CollapseIn {
  0% {
    height: 60vh;
  }
  100% {
    height: 85vh;
  }
}
@keyframes CollapseOut {
  0% {
    height: 85vh;
  }
  100% {
    height: 60vh;
  }
}
.CollapseIn {
  animation: CollapseIn 1s ease forwards;
}
.CollapseOut {
  animation: CollapseOut 1s ease forwards;
}
</style>

<script setup>
import number1 from '../../assets/images/标题序号1.svg'
import number2 from '../../assets/images/标题序号2.svg'
import number3 from '../../assets/images/标题序号3.svg'
import arrow from '../../assets/images/arrow.svg'

import { ref } from 'vue'
const IsCollapse = ref(true)

const Curriculums = [
  {
    description:
      '教育教学是怎么回事呢?教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢?但事实就是这样，小编也感到非常惊讶这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!',
    icon: number1
  },
  {
    description:
      '教育教学是怎么回事呢?教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢?但事实就是这样，小编也感到非常惊讶这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!',
    icon: number2
  },
  {
    description:
      '教育教学是怎么回事呢?教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢?但事实就是这样，小编也感到非常惊讶。这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!',
    icon: number3
  }
]
</script>
