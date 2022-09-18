<template>
  <section class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        cn="学习方式"
        en="Learning Methods"
        color="red"
        right
      ></NotFancyTitle>
    </div>

    <div class="grid gap-1" style="grid-template-columns: 3fr 1fr">
      <div class="relative">
        <img
          :src="methods[current].image"
          class="w-full h-full object-cover"
          alt="Bg"
        />
        <div
          class="absolute bottom-0 pa-10 color-white special-bg transition-opacity-300"
          :class="{ 'op-0': transition }"
        >
          <h3>{{ methods[current]['zh-CN'].title }}</h3>
          <p>
            {{ methods[current]['zh-CN'].content }}
          </p>
        </div>
      </div>
      <div class="grid gap-1">
        <div v-for="(method, index) in methods" :key="method">
          <img
            :src="method.image"
            class="w-full h-full object-cover block opacity-60 transition-all"
            :class="{
              '!opacity-100': current === index,
              'hover:opacity-100 active:brightness-90':
                current !== index && !transition
            }"
            v-on:click="change(index)"
            alt="Bg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'

const methods = [
  {
    image: homeBg1,
    'zh-CN': {
      title: '标题1',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US': {
      title: 'Title 1',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  },
  {
    image: homeBg1,
    'zh-CN': {
      title: '标题2',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US': {
      title: 'Title 2',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  },
  {
    image: homeBg1,
    'zh-CN': {
      title: '标题3',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US': {
      title: 'Title 3',
      content:
        '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  }
]

const current = ref(0)
const transition = ref(false)

function change (index) {
  if (index === current.value || transition.value) return
  transition.value = true
  setTimeout(() => {
    current.value = index
    setTimeout(() => {
      transition.value = false
    }, 150)
  }, 300)
}
</script>
<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
