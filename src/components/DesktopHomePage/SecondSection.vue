<template>
  <div class="p-y-90px">
    <div class="section">
      <div class="flex">
        <div class="flex-1 mr-4">
          <h2 class="color-[var(--standard-blue)] text-9 m-t-0">
            {{ $t('HomePage.SecondSection.Title') }}
          </h2>
          <pre>{{ $t('HomePage.SecondSection.Content') }}</pre>
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
import ReadMore from '../ReadMore.vue'
import vidOverview from '../../assets/videos/sample_video.mp4'
</script>
