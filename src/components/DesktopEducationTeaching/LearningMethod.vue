<template>
  <section class="section">
    <div class="flex justify-end">
      <NotFancyTitle cn="学习方式" en="Learning Methods" color="red" right></NotFancyTitle>
    </div>

    <!-- 这里的逻辑现在有问题 如何实现点击小图切换大图 -->
    <div class="grid gap-1" style="grid-template-columns: 3fr 1fr;">
      <div class="relative">
        <img :src="methods[0].image" class="w-100% h-100% object-cover" alt="Bg" />
        <div class="absolute color-white" style="bottom: 32px; left: 32px; right: 32px;">
          <h3>{{ methods[0]['zh-CN'].title }}</h3>
          <p>
            {{ methods[0]['zh-CN'].content }}
          </p>
        </div>
      </div>
      <div class="grid gap-1">
        <div v-for="method in methods" :key="method">
          <img :src="method.image" class="w-100% h-100% object-cover block" alt="Bg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'

const methods = [
  {
    image: homeBg1,
    'zh-CN':
    {
      title: '标题1',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US':
    {
      title: 'Title 1',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  },
  {
    image: homeBg1,
    'zh-CN':
    {
      title: '标题2',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US':
    {
      title: 'Title 2',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  },
  {
    image: homeBg1,
    'zh-CN':
    {
      title: '标题3',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    },
    'en-US':
    {
      title: 'Title 3',
      content: '学习方式自主探索多样的学习方式是怎么回事呢？学习方式相信大家都很熟悉，但是学习方式自主探索多样的学习方式是怎么回事呢，下面就让小编带大家一起了解吧。'
    }
  }
]
</script>
<style scoped>
</style>
