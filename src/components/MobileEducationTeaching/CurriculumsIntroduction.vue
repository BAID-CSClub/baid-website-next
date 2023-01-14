<template>
  <div>
    <div class="relative font-black m-t-20 text-center">
      <div class="text-8 tracking-5">课程体系</div>
      <div class="text-4 tracking-wider text-gray-300 m-t--2">Curriculums</div>
    </div>
    <div
      id="box"
      class="text-4 m-t-4 overflow-y-clip"
      :style="{ 'max-height': myheight+ 'px' }"
      style="transition-property: max-height;transition-duration:1s;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
    >
      <div
        class="absolute w-95vw bg-gradient-to-b from-transparent to-white translate-y-1 z-1"
        :style="{ 'height': myheight+ 'px','opacity':opacity+'%'}"
        style="transition-property:height,opacity;transition-duration:1s;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
      ></div>
      <div class="m-x-2" v-for="item in curriculums" :key="item">
        <div class="m-y-2">
          <div class="flex items-center">
            <img :src="item.icon" class="w-18 block" />
            <h3 class="m-x-2 text-6">{{ $t(item.title) }}</h3>
          </div>
          <div class="flex flex-col items-center m-y-2">
            <pre class="m-x-4">{{ $t(item.description) }}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center m-t--5">
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

<script setup>
import number1 from '../../assets/images/Number_1.svg'
import number2 from '../../assets/images/Number_2.svg'
import number3 from '../../assets/images/Number_3.svg'
import arrow from '../../assets/images/arrow.svg'

import { ref, onMounted, watch } from 'vue'

const IsCollapse = ref(false)

const myheight = ref(114514)
const opacity = ref(100)
const OutH = ref(1919810)
const InH = ref(10086)

onMounted(() => {
  OutH.value = document.getElementById('box').offsetHeight
  InH.value = OutH.value / 2
  IsCollapse.value = true
})

watch(IsCollapse, (colla) => {
  if (colla) {
    myheight.value = InH.value
    opacity.value = 100
  } else {
    myheight.value = OutH.value
    opacity.value = 0
  }
})

const curriculums = [
  {
    title: 'EducationTeaching.Curriculums.1.Title',
    description: 'EducationTeaching.Curriculums.1.Description',
    icon: number1
  },
  {
    title: 'EducationTeaching.Curriculums.2.Title',
    description: 'EducationTeaching.Curriculums.2.Description',
    icon: number2
  },
  {
    title: 'EducationTeaching.Curriculums.3.Title',
    description: 'EducationTeaching.Curriculums.3.Description',
    icon: number3
  }
]
</script>
