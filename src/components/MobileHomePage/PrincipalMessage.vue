<template>
  <section class="section relative">
    <div class="absolute w-5 h-5 left-3 top-0">
      <svg viewBox="0 0 56.55765920826161 53" fill="none">
        <defs>
          <rect id="path_0" x="0" y="0" width="56.55765920826162" height="53" />
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

    <div class="m-5 flex justify-between">
      <!-- Content Part -->
      <div class="w-48%">
        <p class="m-0 my-3 font-sans" v-html="pageData.principal_message"></p>
      </div>
      <img
        :src="pageData.principal_avatar"
        alt=""
        class="w-48% object-cover rounded-xl"
      />
    </div>

    <div class="absolute w-5 h-5 right-3 bottom-0">
      <svg viewBox="0 0 56.55765920826161 53" fill="none">
        <defs>
          <rect id="path_0" x="0" y="0" width="56.55765920826162" height="53" />
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
  </section>
</template>

<script setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
