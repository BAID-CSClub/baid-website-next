<template>
  <div>
    <slot></slot>
    <MobileLogo :animate="false" />
    <div
      v-if="show"
      class="z-4 fixed top-0 splash-bg bg-white h-screen w-screen"
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
})
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
