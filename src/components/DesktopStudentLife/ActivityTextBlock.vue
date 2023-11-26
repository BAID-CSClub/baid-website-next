<template>
  <div
    class="w-full h-80 p-8"
    :style="{
      background: props.background,
      color: props.light ? 'white' : 'black'
    }"
  >
    <h3 class="text-2xl font-bold">{{ props.name }}</h3>
    <hr
      :class="['mb-4', props.light ? 'border-white/30' : 'border-black/30']"
    />
    <div class="no-size text-sm" v-html="props.description"></div>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'description', 'background', 'light'])
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
