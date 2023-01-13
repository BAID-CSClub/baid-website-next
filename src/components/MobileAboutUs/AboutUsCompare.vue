<template>
  <div class="p-l-2">
    <div class="relative font-black m-t-10vh h-10vh max-h-15vh text-left">
      <div class="text-6 tracking-1">数据一览</div>
      <div class="text-4 tracking-wider text-black-300 m-t--2">Data</div>
    </div>
    <div
      class="text-4 w-90% p-t-4 m-t--4 overflow-y-clip"
      :class="{
        'h-85vh CollapseOut': IsCollapse,
        'h-60vh CollapseIn': !IsCollapse
      }"
    >
      <div
        class="absolute h-60vh w-95vw bg-gradient-to-b"
        :class="{
          'overflow-y-clip h-80vh CollapseOut': IsCollapse,
          'h-60vh CollapseIn': !IsCollapse
        }"
        v-if="IsCollapse"
      ></div>
      <div class="flex m-b-10" v-for="items in Curriculums" :key="items">
        <div class="w-80% tracking-widest whitespace-pre-wrap break-all">
          {{ items.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const IsCollapse = ref(true)

const Curriculums = [
  {
    description: '1:7'
  },
  {
    description: '师生比'
  }
]
</script>
