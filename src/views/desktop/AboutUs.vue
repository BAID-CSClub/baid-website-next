<template>
  <section class="contentArea">
    <div class="flex pt-5 pb-5 font-sans" id="vision">
      <div style="width: 50%" class="pr-10">
        <img :src="homeBg1" style="max-width: 100%;
      max-height: 100%;" alt="pic1" />
      </div>
      <div style="width: 50%" class="pl-10">
        <h2 class="color-[var(--standard-blue)] text-9  text-right ma-0">
          {{ $t("AboutUs.Vision.Title") }}
        </h2>
        <p class="font-500 ">
          {{ $t("AboutUs.Vision.Content") }}
        </p>
      </div>
    </div>
    <div id="alumni" class="pt-5 pb-5 font-sans flex-col">
      <h2 class="color-[var(--standard-blue)] text-9 text-left ma-0">
        {{ $t("AboutUs.Alumni.Title") }}
      </h2>
      <div class="flex">
        <div style="flex: 1; align-items: center;" class="pr-5 flex pl-8">
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
    <div id="honor" class="pt-5 pb-5 font-sans flex-col" style="background-color: lightgrey;">
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
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
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