<template>
  <div
    :style="{ background: props.bg, color: props.light ? 'white' : 'black' }"
    class="h-130 hover:shadow-md relative"
  >
    <img
      class="h-64 object-cover w-full"
      :src="props.news.cover"
      alt="Cover image"
    />
    <div class="px-6 py-3">
      <h2 class="mb-2">{{ props.news.title }}</h2>
      <p>
        <!--{{ props.news.abstract }}-->
        PLACEHOLDER FOR NEWS PREVIEW
      </p>
    </div>

    <ReadMore
      class="absolute bottom-8 right-8"
      :color="props.light ? 'white' : 'black'"
      :to="props.news.href"
    />
  </div>
</template>

<script setup>
import ReadMore from "../ReadMore.vue";
const props = defineProps(["news", "bg", "light"]);
</script>
