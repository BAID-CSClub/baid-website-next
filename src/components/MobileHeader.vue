<template>
  <div>
    <NavMenu :show="showMenu" @close="showMenu = !showMenu" />
    <!-- BG -->
    <div
      class="fixed w-screen h-20 transition-colors"
      :class="{
        'bg-white shadow-md': bgWhite
      }"
    ></div>
    <header>
      <div @click="showMenu = !showMenu" class="left-5 top-7.5 z-5 fixed">
        <div
          class="line"
          :class="{
            'rotate-45 translate-y-1.8 !bg-white': showMenu,
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
            'rotate--45 translate-y--1.8 !bg-white': showMenu,
            '!bg-white': !bgWhite
          }"
        ></div>
      </div>

      <div
        class="right-5 top-7.5 fixed w-7 h-7"
        :class="{ '!color-white': !bgWhite }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
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
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavMenu from './MobileHeader/NavMenu.vue'
const showMenu = ref(false)

const bgWhite = ref(false)

function onScroll () {
  if (window.scrollY > 200) {
    bgWhite.value = true
  } else {
    bgWhite.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
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
