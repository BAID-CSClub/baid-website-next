<template>
  <div>
    <FirstSection />
    <SecondSection />
    <EducationPhilosophy />
    <QuoteMessage
      author="WHO"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!"
      :avatar="avatar"
    />
    <AdmissionResults />
    <HomeNews />
  </div>
</template>

<script setup>
import FirstSection from '../../components/DesktopHomePage/FirstSection.vue'
import SecondSection from '../../components/DesktopHomePage/SecondSection.vue'
import EducationPhilosophy from '../../components/DesktopHomePage/EducationPhilosophy.vue'
import QuoteMessage from '../../components/QuoteMessage.vue'
import AdmissionResults from '../../components/DesktopHomePage/AdmissionResults.vue'
import HomeNews from '../../components/DesktopHomePage/HomeNews.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import avatar from '../../assets/images/homeBg1.jpg'

import importData from '../../data'

const data = importData('HomePage')

const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()
const router = useRouter()

if (!route.params.lang) router.push('/' + locale.value)
</script>
