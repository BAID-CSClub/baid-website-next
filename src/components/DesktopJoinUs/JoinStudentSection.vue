<template>
  <div class="section font-sans">
    <div>
      <NotFancyTitle
        :cn="$t('JoinUs.Student.Title')"
        en="How to apply"
        color="red"
      ></NotFancyTitle>

      <p class="mb-5">中美高中课程合作项目开设 AP 课程，欢迎初三学生积极报考，期待你们的加入!</p>
      <div class="w-full bg-[var(--standard-blue)] color-white mb-8">
        <img :src="workingImg" class="w-full object-cover h-96">
        <div class="px-5 pb-8">
          <h2 class="mb-3 font-bold">招生计划</h2>
          <p>面向北京市招收京籍初中毕业生及符合北京市普通高中升学资格的适龄学生，100 人。</p>
        </div>
      </div>

      <div class="grid grid-cols-2 grid-rows-2 gap-5">
        <div class="h-80 bg-cover bg-center" :style="{'background-image': `url(${collegeCImg})`}">
          <div class="bg-white/60 px-5 pt-3 pb-8 h-48 my-12 mr-20">
            <h2 class="font-bold mb-3">招生录取</h2>
            <p>本项目属于中招普通招生录取批次，录取工作依据北京市教委安排有序进行。根据学生中考成绩及加试成绩，择优录取。</p>
          </div>
        </div>
        <div class="h-80 bg-cover bg-center" :style="{'background-image': `url(${eventImg})`}">
          <div class="bg-white/60 px-5 pt-3 pb-8 h-48 my-12 mr-20">
            <h2 class="font-bold mb-3">项目学费</h2>
            <p>每学期 5 万元人民币 (不含住宿费、教材费、伙食费、校服费等)。</p>
          </div>
        </div>
        <div class="h-80 bg-cover bg-center" :style="{'background-image': `url(${chairsImg})`}">
          <div class="bg-white/60 px-5 pt-3 pb-8 h-48 my-12 mr-20">
            <h2 class="font-bold mb-3">住宿安排</h2>
            <p>本项目办学地址在北京中学金盏校区 (朝阳区楼梓庄北后街 2 号)。本项目为非住宿项目，为中考成绩优异、离校较远的同学提供住宿。</p>
          </div>
        </div>
        <div class="h-80 bg-cover bg-center" :style="{'background-image': `url(${sportsImg})`}">
          <div class="bg-white/60 px-5 pt-3 pb-8 h-48 my-12 mr-20">
            <h2 class="font-bold mb-3">招生咨询</h2>
            <p>咨询电话: 010-50951283, 010-50951292 (待确认-李坤老师)</p>
            <p>咨询邮箱: <a href="mailto:baid@beijingacadademy.com.cn">baid@beijingacademy.com.cn</a> (待确认-李坤老师)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import chairsImg from '../../assets/images/JoinUs/chairs.jpg'
import collegeCImg from '../../assets/images/JoinUs/collegec.jpg'
import eventImg from '../../assets/images/JoinUs/event.jpg'
import sportsImg from '../../assets/images/JoinUs/sports.jpg'
import workingImg from '../../assets/images/JoinUs/working.jpg'

// import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'

// const pageData = inject('data')

// function open (url) {
//   window.open(url)
// }
</script>
