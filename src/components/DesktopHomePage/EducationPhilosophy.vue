<template>
  <div class="bg-[var(--standard-blue)] mb-15">
    <div class="section">
      <NotFancyTitle
        cn="办学理念"
        en="Education Philosophy"
        color="white"
      ></NotFancyTitle>
      <div class="flex m-t-10 m-auto justify-items-center">
        <PhilosophyBlock
          v-for="(key, index) in blocks"
          :key="key"
          :title="pageData[key + '_title']"
          :content="pageData[key + '_content']"
          image="https://images.unsplash.com/photo-1693047995769-80b8b4af4eee"
          :index="index"
          :active="active"
          @activate="active = index"
          @deactivate="active = null"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
import PhilosophyBlock from './PhilosophyBlock.vue'

const pageData = inject('data')
const blocks = ['motto', 'spirit', 'key_competency', 'cultivation']

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
