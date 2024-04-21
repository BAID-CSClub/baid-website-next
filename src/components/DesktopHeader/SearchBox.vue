<template>
  <div>
    <div
      type="text"
      placeholder="Search"
      class="w-5 h-7 ml-2 mr-10 op-50 hover:op-100 active:op-80 transition color-inherit"
      :style="{ color: props.color }"
      @click="toggleSearchBox()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
        />
      </svg>
    </div>

    <div
      v-show="showSearchBox"
      class="fixed top-0 left-0 w-full h-full bg-black bg-op-30 z-10 flex items-center justify-center"
      @click="toggleSearchBox()"
    >
      <div
        class="bg-white p-5 max-w-150 max-h-70% overflow-auto"
        @click.stop="() => {}"
      >
        <div class="group max-w-145">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input type="search" class="input font-sans" v-model="text" />
        </div>

        <div class="p-3" v-show="text.length > 0">
          <RouterLink
            v-for="(result, index) in results"
            :key="result.ref"
            :to="$BASE_URL + db[locale][result.ref].href"
            @click="toggleSearchBox()"
            class="color-black decoration-none op-80 hover:op-100 transition"
          >
            <h3 class="m0">{{ db[locale][result.ref].title }}</h3>
            <p
              class="mt-1 op-80"
              :class="{ 'mb-3': index + 1 !== results.length }"
            >
              {{ db[locale][result.ref].intro }}
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
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
}
</style>

<script setup>
import { watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import lunr from "lunr";
import { RouterLink } from "vue-router";

const props = defineProps(["color"]);

const { locale } = useI18n({ useScope: "global" });

const idx = {};

async function loadIndex(lang) {
  if (!idx[lang]) {
    // Load search index
    idx[lang] = lunr.Index.load(
      await import(`../../../data/${lang}/search.json`)
    );
    console.log("Loaded index for", lang);
  }
}

const db = {};

async function loadDb(lang) {
  if (!db[lang]) {
    // Load search index
    db[lang] = (await import(`../../../data/${lang}/db.json`)).default;
    console.log("Loaded db for", lang);
  }
}

watch(locale, loadIndex);
watch(locale, loadDb);

const showSearchBox = ref(false);

const toggleSearchBox = () => {
  showSearchBox.value = !showSearchBox.value;
};

const text = ref("");

const results = ref([]);

watch(text, (text) => {
  if (idx[locale.value] && db[locale.value] && text.length > 0) {
    console.log("Searching for", text);
    results.value = idx[locale.value].search(text);
  } else {
    loadIndex(locale.value);
    loadDb(locale.value);
    results.value = [];
  }
});
</script>

<style scoped>
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 100vw;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(130, 130, 130, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(130 130 130 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>
