<template>
  <section class="section">
    <div class="flex p-y-10 font-sans" id="vision">
      <div style="width: 50%" class="pr-7">
        <img :src="homeBg1" style="max-width: 100%;
      max-height: 100%;" alt="pic1" />
      </div>
      <div style="width: 50%" class="pl-7">
        <h2 class="title text-right">
          {{ $t("AboutUs.Vision.Title") }}
        </h2>
        <p>
          {{ $t("AboutUs.Vision.Content") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
