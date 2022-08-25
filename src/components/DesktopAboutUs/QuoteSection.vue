<template>
  <section class="section">
    <div id="quote" class="flex-col items-center">
      <!-- <div class="text-9 font-700">“</div> -->
      <!-- Left top quote -->
      <div>
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
      <div class="flex items-center">
        <div class="flex-col text-center p-5" style="flex: 2">
          <p class="content" style="font-size: 1.5rem">
            {{ $t('AboutUs.Quote.Content') }}
          </p>
          <p class="text-right content" style="font-size: 1.5rem">
            ——{{ $t('AboutUs.Quote.Name') }}
          </p>
        </div>
        <div style="flex: 1" class="flex justify-center p-5">
          <img
            :src="homeBg1"
            style="width: 12rem; height: 12rem; object-fit: cover"
            alt="pic1"
          />
        </div>
      </div>
      <!-- <div class="text-9 font-700 text-right">”</div> -->
      <!-- Right bottom quote -->
      <div class="text-right">
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
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>

<style></style>
