<template>
  <header class="flex justify-between items-center h-20 bg-white px-5">
    <NavMenu :show="showMenu" @close="showMenu = !showMenu" />
    <div @click="showMenu = !showMenu" class="z-5">
      <div
        class="line"
        :class="{ 'rotate-45 translate-y-1.8 !bg-white': showMenu }"
      ></div>
      <div class="line my-1.2" :class="{ 'op-0': showMenu }"></div>
      <div
        class="line"
        :class="{ 'rotate--45 translate-y--1.8 !bg-white': showMenu }"
      ></div>
    </div>

    <div class="w-7 h-7">
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
</template>

<script setup>
import { ref } from 'vue'
import NavMenu from './MobileHeader/NavMenu.vue'
const showMenu = ref(false)
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
