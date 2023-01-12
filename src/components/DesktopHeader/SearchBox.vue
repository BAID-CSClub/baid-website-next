<template>
  <div>
    <input
      type="text"
      placeholder="Search"
      v-model="text"
      class="w-35 h-7 outline-none border-none bg-white bg-op-30 px-3"
      :style="{ color: props.color }"
    />
    <div class="absolute bg-white w-41" v-show="text.length > 0">
      <RouterLink
        v-for="result in results"
        :key="result.ref"
        :to="db[locale][result.ref].href"
        >{{ db[locale][result.ref].title }}</RouterLink
      >
    </div>
  </div>
</template>

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
