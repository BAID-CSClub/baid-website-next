<template>
  <div>
    <FirstSection />
    <SecondSection />
    <EducationPhilosophy />
  </div>
</template>

<script setup>
import FirstSection from '../../components/DesktopHomePage/FirstSection.vue'
import SecondSection from '../../components/DesktopHomePage/SecondSection.vue'
import EducationPhilosophy from '../../components/DesktopHomePage/EducationPhilosophy.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()
const router = useRouter()

if (!route.params.lang) router.push('/' + locale.value)
</script>
