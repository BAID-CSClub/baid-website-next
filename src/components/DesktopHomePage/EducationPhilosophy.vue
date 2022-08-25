<template>
  <section class="contentArea">
    <NotFancyTitle
      cn="办学理念"
      en="Education Philosophy"
      color="blue"
    ></NotFancyTitle>
    <div
      class="grid md-grid-cols-[repeat(4,1fr)] sm-grid-cols-[repeat(2,1fr)] w-full m-t-10 justify-items-center gap-4"
    >
      <PhilosophyBlock
        v-for="(key, index) in blocks"
        :key="key"
        :left="$t(key + '.left')"
        :right="$t(key + '.right')"
        :blue="index % 2 === 0"
        :class="{ 'm-t-8': index % 3 !== 0 }"
      />
    </div>
  </section>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import PhilosophyBlock from './PhilosophyBlock.vue'

const blocks = [
  'HomePage.EducationPhilosophy.1',
  'HomePage.EducationPhilosophy.2',
  'HomePage.EducationPhilosophy.3',
  'HomePage.EducationPhilosophy.4'
]
</script>
