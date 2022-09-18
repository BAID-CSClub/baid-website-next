<template>
  <section class="section">
    <NotFancyTitle
      cn="课程体系"
      en="Curriculum"
      color="blue"
      style="margin-left: 3em"
    ></NotFancyTitle>
    <div class="flex gap-18 p-15 p-t-0">
      <div class="w-100%">
        <img :src="number1" class="w-18 m-l--5 m-b--1" alt="Bg" />
        <pre class="w-95% m-b-4">
          教育教学是怎么回事呢？教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。 <br />教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢？但事实就是这样，小编也感到非常惊讶。
          这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
        </pre>
        <img :src="homeBg1" class="w-full h-12vw max-h-153.6px" alt="Bg" />
        <img :src="number2" class="w-18 m-l--5 m-b--1 m-t-8" alt="Bg" />
        <pre class="w-95% m-b-4">
          教育教学是怎么回事呢？教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。 <br />教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢？但事实就是这样，小编也感到非常惊讶。
          这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
        </pre>
      </div>
      <div class="w-3px bg-black"></div>
      <div class="w-100% flex items-end flex-col">
        <img :src="homeBg1" class="w-full h-12vw max-h-153.6px" alt="Bg" />
        <div class="h-full"></div>
        <img :src="number3" class="w-18 m-b--1 m-r--3" alt="Bg" />
        <pre class="w-95% m-b-4 text-right">
          教育教学是怎么回事呢？教育相信大家都很熟悉，但是教育教学是怎么回事呢，下面就让小编带大家一起了解吧。 <br />教育教学，其实就是教学，大家可能会很惊讶教育怎么会教学呢？但事实就是这样，小编也感到非常惊讶。
          这就是关于教育教学的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
        </pre>
        <img :src="homeBg1" class="w-full h-12vw max-h-153.6px" alt="Bg" />
      </div>
    </div>
  </section>
</template>
<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
import number1 from '../../assets/images/标题序号1.svg'
import number2 from '../../assets/images/标题序号2.svg'
import number3 from '../../assets/images/标题序号3.svg'
</script>
<style scoped></style>
