<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 font-300 font-sans color-white">SOME TEXT</h1>
    </CarouselHorizontal>
    <FirstSection />
    <section class="section">
      <div id="alumni" class="p-y-10 font-sans flex-col">
        <h2 class="color-[var(--standard-blue)] text-9 text-left ma-0">
          {{ $t("AboutUs.Alumni.Title") }}
        </h2>
        <div class="flex">
          <div style="flex: 1" class="pr-5 flex pl-8 items-center">
            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" class="alumni-big-pic" />
          </div>
          <div style="flex: 2" class="flex-col pl-5">
            <div>
              <div class="text-9 font-700">“</div>
              {{ $t("AboutUs.Alumni.Content") }}
              <div class="text-9 font-700 text-right">”</div>
            </div>
            <div class="flex">
              <div class="alumni-small-pic">
                <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
              </div>
              <div class="alumni-small-pic">
                <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
              </div>
              <div class="alumni-small-pic">
                <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-[lightgrey]">
    <section class="section">
      <div id="honor" class="p-y-10 font-sans flex-col">
        <h2 class="color-[var(--standard-blue)] text-9 text-left ma-0">
          {{ $t("AboutUs.Honor.Title") }}
        </h2>
        <div class="flex pt-10 pb-10">
          <div class="honor-small-pic">
            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
          </div>
          <div class="honor-small-pic">
            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
          </div>
          <div class="honor-small-pic">
            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
          </div>
        </div>
        <div class="flex">
          <p style="width: 50%;" class="pr-10">{{ $t("AboutUs.Honor.Content") }}</p>
          <div style="width: 50%;" class="pl-10">
            <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="bg-[var(--standard-blue)]">
    <section class="section">
      <div id="test-center" class="p-y-10 font-sans flex">
        <div class="text-white flex-col w-1/2">
          <h2 class="text-9 ma-0">
            {{ $t("AboutUs.TestCenter.Title") }}
          </h2>
          <p> {{ $t("AboutUs.TestCenter.Content") }}</p>
        </div>
        <div style="width: 50%">
          <img :src="homeBg1" style="max-width: 100%;
        max-height: 100%;" alt="pic1" />
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'

import FirstSection from '../../components/DesktopAboutUs/FirstSection.vue'
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
</script>

<style>
.alumni-small-pic {
  margin: 1rem;
}

.alumni-big-pic {
  box-shadow: -2rem 2rem var(--standard-red);
}

.honor-small-pic {
  padding: 0 2.5rem;
}
</style>
