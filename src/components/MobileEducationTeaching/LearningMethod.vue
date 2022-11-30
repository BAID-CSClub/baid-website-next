<template>
  <div class="max-h-100vh h-100vh">
    <div class="relative m-b-6vh m-t-10vh">
      <div class="text-[var(--standard-red)] font-black text-14">
        自主探索<br />多样的<br />学习方式
      </div>
      <div class="font-black text-gray-300 text-8 absolute top-12 z--1 lh-16 text-black">
        Learning<br />Method
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-2 grid-rows-2 ">
        <div class="b-4 b-[var(--standard-red)] b-rd-4 w-95% text-10 font-1000 text-white m-1.5 text-center box-border block p-l-9 p-r-9" 
        style="background:url(https://img.js.design/assets/publicImg/256D963A1093758.png);background-size:cover;" 
        @click="bigtitle=passage.bigtitle;description=passage.description;images=passage.images;introdisplay=true"
        v-for="passage in LeaningMethods" 
        :key="passage">
          {{passage.title}}
        </div>
    </div>
    <Intro 
    :description='description' 
    :bigtitle="bigtitle"
    :display="introdisplay"
    :image="images"
    @onExit="introdisplay = false"></Intro>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import Intro from './LearningMethodIntro.vue'

let bigtitle=ref("标题")
let description=ref("默认介绍")
let images=ref('https://img.js.design/assets/smartFill/img322164da746310.jpg')
let introdisplay=ref(false)
const LeaningMethods = [
  {
    title: '标一\
            标一\
            标一',
    bigtitle: '大标题一大标题大标题大标题',
    description: '水水水水水水水水水水水水水水水水水水水',
    images: homeBg1
  },
  {
    title: '表二\
            表二\
            表二',
    bigtitle: '大标题二大标题大标题大标题',
    description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    images: 'https://img.js.design/assets/smartFill/img322164da746310.jpg'
  },
  {
    title: '表三\
            表三\
            表三',
    bigtitle: '大标题三大标题大标题大标题',
    description: '吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼',
    images: 'https://img.js.design/assets/publicImg/256D963A1093758.png'
  },
  {
    title: '标识\
            标识\
            标识',
    bigtitle: '大标题四大标题大标题大标题',
    description: '你你你你你你你你你你你你你',
    images: homeBg1
  }
]
</script>

