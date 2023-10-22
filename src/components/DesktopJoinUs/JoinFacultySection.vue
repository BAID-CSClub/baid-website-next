<template>
  <div class="section font-sans">
    <div>
      <NotFancyTitle
        :cn="$t('JoinUs.Faculty.Title')"
        en="Work with Us"
        color="blue"
      ></NotFancyTitle>

      <p class="mb-5">在北京中学开放创新的教育生态中，每一位教职员工都能找到发光发热的舞台。只要您热爱学生，有教育情怀，有国际视野，国际部热忱欢迎您的加盟!</p>

      <h2 class="font-bold">招聘条件</h2>
      <div class="flex w-full mb-8">
        <div class="w-1/2 pr-8" style="border-right: 1px solid darkgray">
          <h3 class="font-bold mb-5">整体要求</h3>
          <ol>
            <li>热爱孩子</li>
            <li>具有较强的教学能力和丰富的教学经验</li>
            <li>团结协作能力强</li>
            <li>同等条件下，具有相关学科骨干称号教师或海外留学背景优先</li>
          </ol>
        </div>
        <div class="w-1/2 pl-8">
          <h3 class="font-bold mb-5">岗位要求</h3>
          <ol>
            <li>教学岗位: 胜任高中 AP 学科双语教学，初中剑桥课程双语教学；有教学经验者优先</li>
            <li>综合岗位: 熟悉学生留学申请的活动规划；擅长学生管理、英语突出或有留学背景者优先</li>
          </ol>
        </div>
      </div>

      <div class="w-full bg-cover py-1 mb-8" :style="{'background-image': `url(${placeholderImg})`}">
        <div class="bg-white/60 px-5 pt-12 pb-16 my-16 mr-1/3">
          <h2 class="font-bold mb-3">招聘对象</h2>
          <p>应届生、社会人员、成熟教师均可投递简历。</p>
          <p>京内在职在编教师，35 岁以下。具备骨干称号教师的可适当放宽年龄条件。</p>
          <p>对户籍和编制没有要求的业内优秀教师，可以不受以上限制。</p>
        </div>
      </div>

      <h2 class="font-bold">提交简历方式、流程</h2>
      <div class="flex w-full mb-3">
        <div class="w-1/2 pr-8" style="border-right: 1px solid darkgray">
          <p>个人简历发送至邮箱: <a href="mailto:baidhr@163.com">baidhr@163.com</a>；邮件标题为:</p>
          <ul>
            <li>在职教师: 岗位+学科+姓名+骨干称号</li>
            <li>应届毕业生: 应聘学科+学校+专业+姓名</li>
          </ul>
        </div>
        <div class="w-1/2 pl-8">
          <p>邮箱投递时，简历中需体现的信息如下:</p>
          <ol>
            <li>个人基本情况</li>
            <li>毕业院校</li>
            <li>工作经历</li>
            <li>在职期间所获区级及以上荣誉和学术成果</li>
          </ol>
          <p>简历经学校初审通过后，将通过电话通知具体安排。</p>
        </div>
      </div>
      <div class="color-gray">
        <p>联系方式</p>
        <p>联系人: 李老师</p>
        <p>联系方式: 158 0129 8309 (待确认，李坤老师)</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import placeholderImg from '../../assets/images/homeBg1.jpg';

import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
const pageData = inject('data')

// function open (url) {
//   window.open(url)
// }
</script>
