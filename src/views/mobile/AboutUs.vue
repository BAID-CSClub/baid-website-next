<template>
  <MobileTitleSplash
    :top="$t('AboutUs.Splash.Top')"
    :bottom="$t('AboutUs.Splash.Bottom')"
    color="blue"
  >
    <section>
      <AboutUsIntroduction></AboutUsIntroduction>
      <AboutUsAlumni></AboutUsAlumni>
      <AboutUsBlock></AboutUsBlock>
      <AboutUsCompare></AboutUsCompare>
    </section>
  </MobileTitleSplash>
</template>

<script setup>
import AboutUsIntroduction from '../../components/MobileAboutUs/AboutUsIntroduction.vue'
import AboutUsAlumni from '../../components/MobileAboutUs/AboutUsAlumni.vue'
import AboutUsCompare from '../../components/MobileAboutUs/AboutUsCompare.vue'
import AboutUsBlock from '../../components/MobileAboutUs/AboutUsBlock.vue'
import MobileTitleSplash from '../../components/MobileTitleSplash.vue'
</script>
