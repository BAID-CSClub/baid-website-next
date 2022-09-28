<template>
  <div>
    <section id="firstSection">
      <FirstSection />
    </section>
    <section id="secondSection">
      <SecondSection />
    </section>
    <section id="educationPhilosophy">
      <EducationPhilosophy />
    </section>
    <section id="quote">
      <QuoteMessage
        author="WHO"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!"
        :avatar="avatar"
      />
    </section>
    <section id="admissionResults">
      <AdmissionResults />
    </section>
    <section id="homeNews">
      <!-- <HomeNews :newsList="data.news" /> -->
      <HomeNews :newsList="data.news" />
    </section>
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
import { ref } from 'vue'
const data = ref({
  news: []
})
fetch('/data/HomePage.json').then(async (resp) => {
  data.value = await resp.json()
})

const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()
const router = useRouter()

if (!route.params.lang) router.push('/' + locale.value)
</script>
