<template>
  <div class="">
    <div class="section">
      <div class="flex">
        <div class="flex-1 mr-4">
          <h2 class="color-[var(--standard-blue)] text-9 m-t-0">
            {{ pageData.introduction_title }}
          </h2>
          <pre v-html="pageData.introduction"></pre>
          <div class="flex justify-end m-t-5">
            <ReadMore to="/about#overview" />
          </div>
        </div>
        <div class="ml-4 flex-1 flex justify-center items-center">
          <video class="w-480px h-270px" controls>
            <source :src="vidOverview" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReadMore from "../ReadMore.vue";
import vidOverview from "../../assets/videos/sample_video.mp4";
import { inject } from "vue";

const pageData = inject("data");
</script>
