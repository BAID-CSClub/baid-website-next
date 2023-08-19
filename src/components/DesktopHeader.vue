<template>
  <div :class="{ 'h-17': fixed }"></div>
  <header
    class="w-screen h-17 bg-white flex justify-between items-center transition-all font-sans relative z-10"
    :class="{
      '!bg-transparent': transparent,
      '!fixed shadow-lg': fixed,
      'op-0 top--17': fixed && !fixedShow,
      'op-100 top-0': fixed && fixedShow
    }"
    :style="{ color }"
  >
    <div class="m-l-10">
      <SchoolLogo
        :color="color"
        :logoType="route.meta.header && route.meta.header.logoType"
      />
    </div>

    <div class="flex h-full m-r-10 items-center">
      <div class="lg:block hidden">
        <RouterLinks />
      </div>
      <svg
        class="lg:hidden block op-50 hover:op-100 active:op-80 transition-all color-inherit"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        @click="expand = !expand"
        :class="{ 'rotate-180': expand }"
      >
        <path
          fill="currentColor"
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
        />
      </svg>
      <hr
        class="h-7 w-3px my-0 mx-5 border-none"
        :style="{ 'background-color': color }"
      />
      <p class="w-7 text-center">
        <router-link
          class="decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-80"
          :to="
            route.path.replace(
              $i18n.locale,
              $i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
            )
          "
        >
          <svg class="w-6 h-10" width="32" height="32" viewBox="0 0 24 18">
            <path
              fill="currentColor"
              d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"
            />
          </svg>
        </router-link>
      </p>
      <SearchBox :color="color"></SearchBox>
    </div>
  </header>
  <div
    class="bg-white w-full font-sans h-17 fixed left-0 top-10 op-0 transition-all z-9 pointer-events-none"
    :class="{
      'top-17 op-100 !pointer-events-auto': expand,
      'bg-op-10': transparent,
      'shadow-lg': fixed
    }"
    :style="{ color }"
  >
    <RouterLinks />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SchoolLogo from './DesktopHeader/SchoolLogo.vue'
import SearchBox from './DesktopHeader/SearchBox.vue'
import RouterLinks from './DesktopHeader/RouterLinks.vue'

const route = useRoute()
const color = computed(() => {
  if (route.meta.header && route.meta.header.color && !fixed.value) {
    return route.meta.header.color
  } else {
    return '#000'
  }
})

const transparent = computed(() => {
  if (route.meta.header && route.meta.header.transparent && !fixed.value) {
    return route.meta.header.transparent
  } else {
    return false
  }
})

const expand = ref(false)

function onResize () {
  if (window.innerWidth > 1024) {
    expand.value = false
  }
}

// When scrolled distance > 100vh, the header will be fixed at the top
const fixed = ref(false)
const fixedShow = ref(false)
let last = window.scrollY
let headerCooling = false
onMounted(() => {
  window.addEventListener('resize', onResize)
  window.onscroll = () => {
    expand.value = false
    const delta = window.scrollY - last
    if (window.scrollY > window.innerHeight) {
      // After 100vh: fixed
      fixed.value = true

      if (delta < 0) {
        fixedShow.value = true
      } else {
        // Scroll down: hide
        // If during route change: ignore
        if (headerCooling) {
          headerCooling = false
        } else {
          fixedShow.value = false
        }
      }
    } else {
      // Before 100vh
      if (fixed.value) {
        fixedShow.value = false
        setTimeout(() => {
          fixed.value = false
        }, 300)
      }
    }

    last = window.scrollY
  }
})

const router = useRouter()

router.afterEach((to) => {
  headerCooling = true
  // Process anchor (#...)
  router.isReady().then(() => {
    if (to.hash) {
      const anchor = document.querySelector(to.hash)
      if (anchor) {
        anchor.scrollIntoView()
      }
    }
  })
})

onUnmounted(() => {
  window.onscroll = null
  window.removeEventListener('resize', onResize)
})
</script>

<style>
.fast-fade-enter-active,
.fast-fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.fast-fade-enter-from,
.fast-fade-leave-to {
  opacity: 0;
}
</style>
