<template>
  <div v-if="ready">
    <NavMenu :show="showMenu" @close="showMenu = !showMenu" />
    <SearchScreen :show="showSearch" @close="showSearch = !showSearch" />
    <!-- BG -->
    <div
      class="fixed z-3 top-0 w-screen h-20 transition-colors"
      :class="{
        'bg-white shadow-md': bgWhite
      }"
    ></div>
    <header>
      <!-- Menu -->
      <div
        @click="showMenu = !showMenu"
        class="left-5 top-7.5 fixed"
        :class="{ 'z-3': !showMenuDelay, 'z-4': showMenuDelay }"
      >
        <div
          class="line"
          :class="{
            'rotate-45 translate-y-2 !bg-white': showMenu,
            '!bg-white': !bgWhite
          }"
        ></div>
        <div
          class="line my-1.2"
          :class="{ 'op-0': showMenu, '!bg-white': !bgWhite }"
        ></div>
        <div
          class="line"
          :class="{
            'rotate--45 translate-y--2 !bg-white': showMenu,
            '!bg-white': !bgWhite
          }"
        ></div>
      </div>

      <!-- Search -->
      <div
        class="right-5 top-7.5 fixed w-7 h-7 z-3"
        :class="{
          '!color-white': !bgWhite,
          'z-3': !showSearchDelay,
          'z-4': showSearchDelay
        }"
        @click="showSearch = !showSearch"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          class="transition-opacity-300"
          :class="{ 'op-0': showSearch }"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="--darkreader-inline-stroke: currentColor"
            data-darkreader-inline-stroke=""
          >
            <circle cx="10" cy="10" r="7"></circle>
            <path d="M21 21l-6-6"></path>
          </g>
        </svg>
        <!-- Close -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          class="relative top--8 transition-opacity-300"
          :class="{ 'op-0': !showSearch }"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="--darkreader-inline-stroke: currentColor"
            data-darkreader-inline-stroke=""
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </g>
        </svg>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavMenu from './MobileHeader/NavMenu.vue'
import SearchScreen from './MobileHeader/SearchScreen.vue'

const route = useRoute()
const router = useRouter()

const ready = ref(false)
const showMenu = ref(false)
const showMenuDelay = ref(false)

const showSearch = ref(false)
const showSearchDelay = ref(false)

function makeDelay (src, dest) {
  watch(src, (val) => {
    if (val) {
      dest.value = true
    } else {
      setTimeout(() => {
        dest.value = false
      }, 300)
    }
  })
}
makeDelay(showMenu, showMenuDelay)
makeDelay(showSearch, showSearchDelay)

const bgWhite = ref(false)
function onScroll () {
  if (route.meta.header?.alwaysFill) {
    bgWhite.value = true
    return
  }
  if (window.scrollY > 170) {
    bgWhite.value = true
  } else {
    bgWhite.value = false
  }
}
router.afterEach(onScroll)

router.beforeEach((e) => {
  if (e.name === 'AboutUs' || e.name === 'EducationTeaching') {
    setTimeout(() => {
      ready.value = false
    }, 300)
  }
})

router.afterEach((e) => {
  router.isReady().then(() => {
    if (e.name === 'AboutUs' || e.name === 'EducationTeaching') {
      setTimeout(() => {
        ready.value = true
      }, 1000)
    } else {
      ready.value = true
    }
  })
})

onMounted(async () => {
  window.addEventListener('scroll', onScroll)
  // await router.isReady()
  // setTimeout(() => {
  //   ready.value = true
  // }, 500) // Fine, a stupid and dirty hack. But it works.
})
</script>

<style scoped>
.line {
  width: 1.5rem;
  height: 3px;
  background: #000;
  border-radius: 6px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
