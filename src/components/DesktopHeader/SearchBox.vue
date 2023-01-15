<template>
  <div class="relative">
    <input
      type="text"
      placeholder="Search"
      v-model="text"
      class="w-35 h-7 !outline-none border-none bg-white bg-op-30 px-3 placeholder-white"
      :style="{ color: props.color }"
    />
    <div class="absolute bg-white w-70 right-0 p-3" v-show="text.length > 0">
      <RouterLink
        v-for="(result, index) in results"
        :key="result.ref"
        :to="db[locale][result.ref].href"
        class="color-black decoration-none op-80 hover:op-100 transition"
      >
        <h3 class="m0">{{ db[locale][result.ref].title }}</h3>
        <p class="mt-1 op-80" :class="{ 'mb-3': index + 1 !== results.length }">
          {{ db[locale][result.ref].description }}
        </p>
      </RouterLink>
      <div class="color-black" v-if="!results.length">
        <h3 class="m0 truncate">找不到 {{ text }}</h3>
        <p class="op-80">
          可以看看 <a href="">百度站内搜索</a> 或者
          <a href="">Google Insite</a>
          如何评价
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
}
</style>

<script setup>
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import lunr from 'lunr'
import { RouterLink } from 'vue-router'

const props = defineProps(['color'])

const { locale } = useI18n({ useScope: 'global' })

const idx = {}

async function loadIndex (lang) {
  if (!idx[lang]) {
    // Load search index
    const url = '/' + lang + '/search.json'
    idx[lang] = lunr.Index.load(await (await fetch(url)).json())
    console.log('Loaded index for', lang)
  }
}

const db = {}

async function loadDb (lang) {
  if (!db[lang]) {
    // Load search index
    const url = '/' + lang + '/db.json'
    db[lang] = await (await fetch(url)).json()
    console.log('Loaded db for', lang)
  }
}

watch(locale, loadIndex)
watch(locale, loadDb)

const text = ref('')

const results = ref([])

watch(text, (text) => {
  if (idx[locale.value] && db[locale.value] && text.length > 0) {
    console.log('Searching for', text)
    results.value = idx[locale.value].search(text)
  } else {
    loadIndex(locale.value)
    loadDb(locale.value)
    results.value = []
  }
})
</script>
