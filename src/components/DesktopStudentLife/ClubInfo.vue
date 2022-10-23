<template>
  <div
    class="backdrop flex items-center justify-center p-20 box-border"
    @click.self="$emit('close')"
  >
    <div
      class="w-full max-w-50vw max-h-80vh bg-white rounded-3xl p-12 box-border overflow-auto"
    >
      <h3>
        {{ props.name }}
      </h3>
      <pre class="my-4">{{ props.description }}</pre>
      <div class="flex items-center px-4">
        <DesktopSwiper pagination
          ><swiper-slide v-for="(img, index) in props.images" :key="img"
            ><img
              :src="img"
              class="w-full object-cover transition-all aspect-3/2 object-cover"
              :class="{
                '!opacity-100': current === index,
                'hover:opacity-100 active:brightness-90':
                  current !== index && !transition
              }"
              v-on:click="change(index)"
              alt="pic1" /></swiper-slide
        ></DesktopSwiper>
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
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(3px);
}
</style>
