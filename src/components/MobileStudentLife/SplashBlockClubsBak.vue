<template>
  <div
      class="flex justify-center items-center flex-col h-50% w-full bg-cover overflow-scroll"
      :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <h1 class="color-white font-title text-10">
      <span>{{ props.title[0] }}</span>
      <span class="color-yellow">{{ props.title[1] }}</span>
      <span>{{ props.title.substr(2) }}</span>
    </h1>
    <span class="decoration-none color-yellow" @click="showPop = true"
    >了解更多</span
    >
    <div
        class="fixed top-0 bg-black bg-op-70 w-full h-screen flex justify-center items-center"
        @click="showPop = false"
        :class="{
        'z-20 op-100': showPop,
        'z-0 op-0 pointer-events-none': !showPop
      }"
    >
      <div class="bg-white rounded-xl p-10 w-75% overflow-scroll" id="clubsPopWindow">
        <h1 class="m0 mb-5">学生社团</h1>

        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="5"

            :pagination="{ clickable: true }"

            @swiper="onSwiper"
            @slideChange="onSlideChange"
            autoHeight
            overflow-scroll
        >
          <swiper-slide class="overflow-scroll">

            <h2>法语社团</h2>
            <p>
              法语社团成立于2021年，由两位学习多年法语的社长带领。在这里，我们从基础开始，一步一步由字母到单词，从语法到日常对话。
              当然，比学习法语更重要的，是了解法国文化。欢迎加入法语社团！
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll"
              >
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>

          </swiper-slide>

          <swiper-slide class="overflow-scroll">
            <h2>SLSD</h2>
            <p>
              我们，SLSD（The Students League of Sustainable
              Development），致力于提高中学生对可持续发展的关注度与认识，
              吸引更多的同学参与可持续发展的实践和科学研究活动。通过推广宣传有关可持续发展的国内外动态、举办论坛活动、分析研究、
              培训信息和竞赛活动等、分享与可持续发展相关的文章，培养中学生的可持续发展观念及在可持续发展领域的研究兴趣和能力。
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>
          </swiper-slide>

          <swiper-slide class="overflow-scroll">
            <h2>BA Times</h2>
            <p>
              BA Times，由Livia和Yimo创办的英文创意写作社团。目前以New York
              Times比赛为框架，带领社员游走在文字、情感、
              逻辑与想象力共同组成的海洋。开放兼包、表达和松弛是我们的关键词。
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>
          </swiper-slide>

          <swiper-slide class="overflow-scroll">
            <h2>小花小草</h2>
            <p>
              小花小草由国际部高瑞韩同学和张礼涵同学发起，秉承爱护植物、科普植物的原则，为北京中学植物挂牌。项目旨在帮助广大学生群体和老师
              群体更深一步了解校园植物，欣赏大自然的美丽与和谐。
              本项目另有制作中的植物纪念册，保存北中人的珍贵记忆。
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>

          </swiper-slide>

          <swiper-slide class="overflow-scroll">
            <h2>神经科学社</h2>
            <p>
              北京中学神经科学社是由国际部高瑞韩同学创办的学生自主社团，秉承着互帮互助、深入探索的原则，为对生物/心理学感兴趣的同学们培养
              神经科学领域的入门知识。社团主要以社长/学生授课、实验室解剖、案例学习以及视频诊断等形式活动，保证每个社员的高参与度以及思维训练。
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>
          </swiper-slide>

          <swiper-slide class="overflow-scroll">

            <h2>绿眼碳排放</h2>
            <p>
              我们是一个由北京中学学生组成的自主项目。我们的目标是加强人们对全球变暖的危急意识，动员大家进行低碳生活。目前我们做的工作有两
              部分：1.
              搭建一个关于中国各碳排放的信息中心，提供数据的可视化、最新科研文献、以及其他相关的相关活动。这是我们的建设的
              网站（https://www.green-spectator.com/）上，我们希望通过数据的公开化来加强对政府工作的监督，并提升人们对于中国温室气体
              排放的重视。2. 在校园开展废纸回收活动等，培养同学们的环保节约意识。
            </p>
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="5"

                :pagination="{ clickable: true }"

                @swiper="onSwiper"
                @slideChange="onSlideChange"
                autoHeight
                overflow-scroll
            >
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/homeBg2.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
              <swiper-slide class="overflow-scroll">
                <img
                    src="/src/assets/images/StudentLife/Activities/Camping.jpg"
                    class="h-37% w-100%"
                    alt=""
                />
              </swiper-slide>
            </swiper>
          </swiper-slide>
        </swiper>
      </div>
      <!-- Pop window div -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import clubData from 'src/components/MobileStudentLife/clubData.json'
/* initializing_swiper */
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['title', 'image']) // TODO: More about dialog
const showPop = ref(false)

// Import Swiper styles
</script>
