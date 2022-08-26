<template>
  <section class="section">
    <div id="alumni" class="flex-col items-center">
      <NotFancyTitle cn="毕业生介绍" en="Alumni" color="red"></NotFancyTitle>
      <div class="flex">
        <div style="flex: 1" class="pr-5 flex pl-8 items-center">
          <img
            :src="homeBg1"
            class="max-w-full max-h-full object-cover aspect-3/4 alumni-big-pic"
            alt="pic1"
          />
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
            <p class="p-20 content">{{ $t('AboutUs.Alumni.Content') }}</p>
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
            <div class="m-4" v-for="alumnus in alumni" :key="alumnus">
              <img
                :src="alumnus.image"
                class="max-w-full max-h-full object-cover aspect-3/4"
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
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'

const alumni = [
  {
    image: homeBg1,
    'zh-CN':
      '毕业生1介绍 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.',
    'en-US':
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
  },
  {
    image: homeBg1,
    'zh-CN':
      '毕业生2介绍 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.',
    'en-US':
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
  },
  {
    image: homeBg1,
    'zh-CN':
      '毕业生3介绍 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.',
    'en-US':
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor ipsam tenetur officia, quod incidunt ad beatae nemo consequatur ullam esse doloribus minus molestias a laudantium excepturi accusamus voluptatem reiciendis.'
  }
]
</script>

<style>
.alumni-big-pic {
  box-shadow: -2rem 2rem var(--standard-red), -0.25rem 0.25rem 0.25rem grey;
}
</style>
