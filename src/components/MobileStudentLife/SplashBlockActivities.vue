<template>
  <div
    class="flex justify-center items-center flex-col h-50% w-full bg-cover"
    :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <h2 class="color-white font-title text-10">
      <span>{{ props.title[0] }}</span>
      <span class="color-yellow">{{ props.title[1] }}</span>
      <span>{{ props.title.substr(2) }}</span>
    </h2>
    <span class="decoration-none color-yellow" @click="showPop = true"
      >了解更多</span
    >
    <MobilePopup v-if="showPop" @close="showPop = false">
      <template v-slot:content>
        <div>
          <h2 class="m0 mb-5">Wow a pop dialog</h2>
          <p>Activities</p>
        </div>
      </template></MobilePopup
    >
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MobilePopup from '../MobilePopup.vue'

const props = defineProps(['title', 'image']) // TODO: More about dialog

const showPop = ref(false)
</script>
