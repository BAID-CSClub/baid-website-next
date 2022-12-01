<template>
  <div>
    <slot></slot>
    <MobileLogo :animate="show" />
    <div
      v-if="show"
      class="z-10 fixed top-0 splash-bg bg-white h-screen w-screen"
    ></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import MobileLogo from './MobileLogo.vue'
import { ref } from 'vue'

const router = useRouter()
const show = ref(true)

router.beforeEach((to) => {
  if (to.meta.noSplash) {
    show.value = false
  } else {
    show.value = true
  }
  console.log('show', show.value)
})`
I think it is good practice to take photos at important events. Obviously, the photos left at gatherings help us to remember these meaningful moments. Some people may prefer to rely on their own memories, but at least for me, I think taking pictures makes it better to keep these great moments alive.``
Whenever I get together with my family or friends, I take the initiative to invite everyone to take a group photo. Even though I graduated from elementary school a long time ago, when I see the group photo of the class reunion, I feel like I'm back to that day.`
</script>

<style>
@keyframes fade {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
    pointer-events: none;
  }
}

.splash-bg {
  animation: fade 0.3s forwards ease-out;
  animation-delay: 1s;
}
</style>
