<template>
  <div class="section">
    <div id="alumni" class="flex-col items-center">
      <NotFancyTitle cn="毕业生介绍" en="Alumni" color="red"></NotFancyTitle>
      <div class="flex">
        <div style="flex: 1" class="pr-5 flex pl-8 items-center">
          <div class="alumni-big-pic-box">
            <img
              :src="alumni[current].image"
              class="w-full object-cover aspect-3/4 transition-opacity-300 block alumni-big-pic"
              :class="{ 'op-0': transition }"
              alt="pic1"
            />
          </div>
        </div>
        <div style="flex: 2" class="flex-col pl-5">
          <div class="relative">
            <!-- Left top quote -->
            <div class="absolute left-20px top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="56.55765920826161"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                fill="none"
              >
                <defs>
                  <rect
                    id="path_0"
                    x="0"
                    y="0"
                    width="56.55765920826162"
                    height="53"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)"
                        opacity="1"
                        d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                      />
                      <path
                        id="path 2"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                        opacity="1"
                        d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="p-20 transition-opacity-300 h-40 justify-center"
              :class="{ 'op-0': transition }"
              style="display: flex; flex-direction: column"
            >
              <p>
                {{ alumni[current][$i18n.locale].quote }}
              </p>
              <p class="text-right">
                ——{{ alumni[current][$i18n.locale].name }}
              </p>
            </div>
            <!-- Right bottom quote -->
            <div class="absolute right-20px bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="56.55765920826161"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                fill="none"
              >
                <defs>
                  <rect
                    id="path_0"
                    x="0"
                    y="0"
                    width="56.55765920826162"
                    height="53"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                        opacity="1"
                        d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                      />
                      <path
                        id="path 2"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)"
                        opacity="1"
                        d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="flex items-center">
            <!-- arrow left -->
            <div>
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="var(--standard-red)"
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
              </svg>
            </div>
            <div
              class="m-4 flex-1"
              v-for="(alumnus, index) in alumni"
              :key="alumnus"
            >
              <img
                :src="alumnus.image"
                class="w-full object-cover aspect-3/4 opacity-60 transition-all"
                :class="{
                  '!opacity-100': current === index,
                  'hover:opacity-100 active:brightness-90':
                    current !== index && !transition
                }"
                v-on:click="change(index)"
                alt="pic1"
              />
            </div>
            <!-- arrow right -->
            <div>
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="var(--standard-red"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgAlum1 from '../../assets/images/AboutUs/Alumni/alum1.jpeg'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'
import homeBg3 from '../../assets/images/homeBg3.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'

import { ref } from 'vue'

const alumni = [
  {
    image: imgAlum1,
    'zh-CN': {
      name: '田学长',
      quote:
        '因为结缘北中，我找到了我自己的人生价值所在，确定未来专业方向——工程。目前，我已经申请到了令我满意的大学；将来，我会为工程这个专业倾注我所有的努力，刻苦钻研，为人类社会做出力所能及的贡献，如校训说的“世界因我更美好”。'
    },
    'en-US': {
      name: '田学长',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
    }
  },
  {
    image: homeBg2,
    'zh-CN': {
      name: '田学长',
      quote:
        '因为结缘北中，我找到了我自己的人生价值所在，确定未来专业方向——工程。目前，我已经申请到了令我满意的大学；将来，我会为工程这个专业倾注我所有的努力，刻苦钻研，为人类社会做出力所能及的贡献，如校训说的“世界因我更美好”。'
    },
    'en-US': {
      name: '田学长',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
    }
  },
  {
    image: homeBg3,
    'zh-CN': {
      name: '田学长',
      quote:
        '因为结缘北中，我找到了我自己的人生价值所在，确定未来专业方向——工程。目前，我已经申请到了令我满意的大学；将来，我会为工程这个专业倾注我所有的努力，刻苦钻研，为人类社会做出力所能及的贡献，如校训说的“世界因我更美好”。'
    },
    'en-US': {
      name: '田学长',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
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

<style>
.alumni-big-pic-box {
  box-shadow: -2rem 2rem var(--standard-red), -0.25rem 0.25rem 0.25rem grey;
}
</style>
