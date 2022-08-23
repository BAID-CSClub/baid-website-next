<template>
  <section class="section">
    <div class="flex justify-center items-center">
      <div class="max-w-300 w-80vw max-h-350 h-130vw flex flex-col">
        <div class="h-100% flex">
          <div class="flex justify-start items-end" style="flex: 0.8">
            <img :src="img1" style="width: 90%; box-shadow: 5px 5px 5px grey" alt="Bg" />
          </div>
          <div class="w-100% flex" style="flex: 1; flex-direction: column">
            <div class="flex" style="flex: 2.5">
              <div class="h-100% flex items-end" style="flex: 1.2">
                <img :src="img1" style="width: 102%; box-shadow: 5px 5px 5px grey" alt="Bg" />
              </div>
              <div class="h-100% relative" style="flex: 1">
                <div class="write-vertical-right m-l-30 m-t--10">
                  <NotFancyTitle cn="学生指导" en="Student Guidance" color="red" vertical></NotFancyTitle>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-end" style="flex: 1">
              <div
                class="bg-white text-[var(--standard-red)] b-6 b-[var(--standard-red)] h-60% w-60% text-6 p-1vw font-title">
                简单介绍
              </div>
            </div>
          </div>
        </div>
        <div class="h-100% m-t-5">
          <div class="h-50% flex justify-between">
            <div class="w-100% flex">
              <img :src="homeBg1" style="
                width: 48vw;
                height: 18vw;
                box-shadow: 5px 5px 5px grey;
                object-fit: cover;
              " alt="Bg" />
            </div>
            <div class="w-50% flex justify-end">
              <img :src="homeBg1" style="
                width: 25vw;
                height: 25vw;
                max-width: 330px;
                max-height: 330px;
                box-shadow: 5px 5px 5px grey;
                object-fit: cover;
              " alt="Bg" />
            </div>
          </div>
          <div class="h-50% flex">
            <div class="flex" style="flex: 1">
              <div
                class="bg-white text-[var(--standard-red)] b-6 b-[var(--standard-red)] h-87% w-70% text-6 p-1vw m-t--6 font-title">
                学生感受
              </div>
            </div>
            <div class="flex items-start justify-center" style="flex: 1">
              <img :src="homeBg1" style="
                width: 25vw;
                height: 30vw;
                max-width: 380px;
                max-height: 340px;
                box-shadow: 5px 5px 5px grey;
                object-fit: cover;
                transform: scale(105%, 105%);
              " alt="Bg" />
            </div>
            <div class="flex items-end justify-end" style="flex: 1">
              <div class="text-[var(--standard-red)] b-6 b-[var(--standard-red)] h-75% w-70% text-6 p-1vw font-title">
                简单介绍
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import img1 from '../../assets/images/le1.png'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
</script>
