<template>
  <div class="w-full h-full">
    <img
      :src="props.image"
      class="block w-full h-full object-cover"
      alt="Bg1"
    />
    <div
      class="absolute bottom-0 bg-dark/30 h-full w-full hover:op-100 op-0 transition-opacity-500 flex items-end"
    >
      <div class="color-white pa-10">
        <h3 class="text-8">{{ props.name }}</h3>
        <p>
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['image', 'name', 'description'])
</script>
