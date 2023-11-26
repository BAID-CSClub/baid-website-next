<template>
  <ActivityTextBlock
    v-if="props.textAlign === 'left'"
    :name="props.activity.name"
    :description="props.activity.content"
    :background="props.background"
    :light="props.light"
  />
  <img
    :src="props.activity.image"
    class="w-full h-80 object-cover object-center"
  />
  <ActivityTextBlock
    v-if="props.textAlign === 'right'"
    :name="props.activity.name"
    :description="props.activity.content"
    :background="props.background"
    :light="props.light"
  />
</template>
<script setup>
import ActivityTextBlock from '@/components/DesktopStudentLife/ActivityTextBlock.vue'

const props = defineProps(['activity', 'background', 'light', 'text-align'])
</script>
