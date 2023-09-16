<template>
  <div class="section">
    <NotFancyTitle cn="课程体系" en="Curriculums" color="blue"></NotFancyTitle>
    <div class="flex gap-16 h-80">
      <div class="w-40% flex flex-col justify-around">
        <div
          v-for="(c, i) in pageData.curriculums"
          class="op-70 container w-50"
          :class="{ '!op-100 active': current == i }"
          @mouseover="current = i"
        >
          <h2 class="m0 w-max">{{ c.name }}</h2>

          <div
            class="absolute top-10 left-0 op-0"
            :class="{ '!op-100': current == i }"
          >
            <ReadMore />
          </div>
        </div>
      </div>

      <div class="relative w-full">
        <div
          class="w-full flex flex-col justify-center gap-5 absolute top-0 op-0 h-full"
          v-for="(c, i) in pageData.curriculums"
          :class="{ '!op-100': current == i, 'flex-col-reverse': i % 2 == 0 }"
        >
          <div
            class="flex w-full gap-5"
            :class="{ 'flex-row-reverse': i % 2 == 0 }"
          >
            <img
              src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=500"
              class="flex-1 w-full h-50"
            />
            <img
              src="https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?w=500"
              class="flex-1 w-full h-50"
            />
          </div>
          <pre class="" v-html="c.content"></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
import ReadMore from '@/components/ReadMore.vue'

const pageData = inject('data')

const current = ref(0)
</script>

<style scoped>
.container {
  position: relative;
  height: 50px;
  left: 0;
}

h2::before {
  content: '';
  display: block;
  position: absolute;

  background-color: var(--standard-blue);
  width: 5px;
  height: 85px;
  top: -5px;
  left: -20px;
  opacity: 0;
}

.active h2::before {
  opacity: 1;
}

.active {
  left: 20px;
}

* {
  transition: all 0.3s ease-in-out;
}
</style>
