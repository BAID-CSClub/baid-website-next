<template>
  <div
    class="rounded-4 min-h-35 w-full shadow-lg box-border overflow-hidden relative transition-colors m-y-3"
    :class="{
      'bg-[var(--standard-blue)] color-white': props.bg === 'blue',
      'bg-white color-[var(--standard-blue)] border-[var(--standard-blue)]':
        props.bg === 'white',
      'border-solid': props.border
    }"
  >
    <slot v-if="!items"></slot>
    <Swiper
      v-else
      :slides-per-view="1"
      @slide-change="(e) => change(e.activeIndex)"
      :loop="true"
    >
      <SwiperSlide v-for="(item, index) in props.items" :key="index">
        <slot name="item" v-bind="item"></slot>
      </SwiperSlide>
    </Swiper>
    <div class="absolute bottom-3 flex left-50% translate-x--50%" v-if="items">
      <!-- DOTS -->
      <div
        v-for="(_, index) in props.items"
        :key="index"
        class="h-2 m-x-1 rounded-1 transition-all"
        :class="{
          'bg-[var(--standard-blue)]': props.bg === 'white',
          'bg-white': props.bg === 'blue',
          'w-6': current % props.items.length === index,
          'w-2 op-70': current % props.items.length != index
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  bg: {
    type: String,
    default: 'white'
  },
  border: {
    type: Boolean,
    default: true
  },
  items: {
    default: undefined
  }
})

const current = ref(0)
const emit = defineEmits(['change'])

function change (index) {
  console.log(index)
  if (current.value !== index) {
    current.value = index
    emit('change')
  }
}
</script>
