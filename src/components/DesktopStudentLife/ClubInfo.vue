<template>
  <div
    class="backdrop flex items-center justify-center p-20 box-border"
    @click.self="$emit('close')"
  >
    <div
      class="w-full max-w-50vw max-h-80vh bg-white rd-5 p-12 box-border overflow-auto"
    >
      <div class="flex flex-col m-b-4">
        <h3 class="text-8">
          {{ props.name }}
        </h3>
        <pre class="my-4" v-html="props.description"></pre>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center px-4 max-w-160 w-full">
          <DesktopSwiper
            ><swiper-slide v-for="(img, index) in props.images" :key="img"
              ><img
                :src="img"
                class="w-full object-cover aspect-3/2"
                v-on:click="change(index)"
                alt="pic1" /></swiper-slide
          ></DesktopSwiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import DesktopSwiper from '../DesktopSwiper.vue'

const props = defineProps(['name', 'description', 'images'])
</script>

<style scoped>
.backdrop {
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(3px);
}
</style>
