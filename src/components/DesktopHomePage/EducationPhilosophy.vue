<template>
  <div class="section">
    <NotFancyTitle cn="办学理念" en="Education Philosophy" color="blue"></NotFancyTitle>
    <div
      class="grid md-grid-cols-[repeat(2,1fr)] md-grid-rows-[repeat(2,1fr)] w-80% m-t-10 m-auto justify-items-center gap-8">
      <PhilosophyBlock v-for="(key, index) in blocks" :key="key" :top="pageData[key + '_title']"
        :bottom="pageData[key + '_content']" :blue="index % 2 === 0"
        :class="{ 'm-t-6': index % 2 !== 0, 'm-l-8': index >= 2 }" />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import NotFancyTitle from "../NotFancyTitle.vue";
import PhilosophyBlock from "./PhilosophyBlock.vue";

const pageData = inject("data");
const blocks = ["motto", "spirit", "key_competency", "cultivation"];
</script>
