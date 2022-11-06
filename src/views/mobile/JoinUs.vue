<template>
  <section class="section snap-y snap-mandatory h-screen overflow-scroll">
    <!-- <MobileHead :img="imgHeader1"> {{ $t('views.JoinUs') }}</MobileHead> -->
    <!-- <section class="p-3">TO-DO: Content Here</section> -->
    <div class="flex flex-col justify-center items-center h-screen snap-start">
      <div>
        <img
          :src="imgHeader1"
          alt=""
          class="inline w-60vw aspect-3/4 object-cover rounded-3xl"
        />
      </div>
      <p class="text-6 text-gray600">欢迎加入</p>
      <p class="text-[var(--standard-blue)] tracking-widest">BAID</p>
      <h2 class="m-0! text-9 font-600">北京中学国际部</h2>
      <div class="grid m-y-2 grid-cols-2 gap-6">
        <a class="decoration-none text-blue font-sans" href="#joinStudent"
          >学生申请></a
        >
        <a class="decoration-none text-blue font-sans" href="#joinFaculty"
          >师资招聘></a
        >
      </div>
    </div>
    <JoinInfo
      :title="$t('JoinUs.Student.Title')"
      :content="$t('JoinUs.Student.Content')"
      id="joinStudent"
    ></JoinInfo>
    <JoinInfo
      :title="$t('JoinUs.Faculty.Title')"
      :content="$t('JoinUs.Faculty.Content')"
      id="joinFaculty"
    ></JoinInfo>
  </section>
</template>

<script setup>
import imgHeader1 from '../../assets/images/homeBg1.jpg?webp'
import JoinInfo from '../../components/MobileJoinUs/JoinInfo.vue'
</script>
