<template>
  <div class="m-y-4">
    <div class="flex items-center">
      <img :src="props.number" class="w-18 block" />
      <h3 class="m-x-4 text-6">{{ $t(props.title) }}</h3>
    </div>
    <div class="flex flex-col items-center m-y-4">
      <pre class="w-90%">
        {{ $t(props.description) }}
      </pre>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['number', 'title', 'description'])
</script>
