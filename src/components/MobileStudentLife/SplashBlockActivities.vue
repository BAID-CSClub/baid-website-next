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
    <div
      class="fixed top-0 bg-black bg-op-70 w-full h-screen flex justify-center items-center"
      @click="showPop = false"
      :class="{
        'z-20 op-100': showPop,
        'z-0 op-0 pointer-events-none': !showPop
      }"
    >
      <div class="bg-white rounded-xl p-10">
        <h2 class="m0 mb-5">Wow a pop dialog</h2>
        <p>Activities</p>
      </div>
      <!-- Pop window -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'image']) // TODO: More about dialog

const showPop = ref(false)
</script>
