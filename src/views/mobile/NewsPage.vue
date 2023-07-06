<template>
  <main>
    <div class="placeholder"></div>
    <section class="section">
      <MobileTitle>新闻</MobileTitle>

      <div v-for="item in news" :key="item.id">
        <MobileCard :border="false">
          <div class="w-full h-38 bg-cover" :style="{ backgroundImage: 'url(' + item.cover + ')' }">
            <div class="w-full h-full bg-black bg-op-60 p-5 box-border">
              <h2 class="m0 text-white truncate">{{ item.title }}</h2>
              <p class="mt-1 color-white op-80">
                {{ item.description }}
              </p>
              <p class="op-50 color-white">
                {{ $t("NewsPage.Publish") }} {{ item.date }}
                <!-- {{ item.time.split(':').slice(0, 2).join(':') }} -->
              </p>
              <p class="text-right">
                <RouterLink class="color-sky-1 op-80 decoration-none" :to="item.href">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                    <path fill="currentColor"
                      d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v7.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-2a.75.75 0 0 1 1.5 0v2A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5A3.25 3.25 0 0 1 6.25 3h2a.75.75 0 0 1 0 1.5h-2Zm4.25-.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-3.19a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                </RouterLink>
              </p>
            </div>
          </div>
        </MobileCard>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, RouterLink } from "vue-router";

import MobileTitle from "../../components/MobileTitle.vue";
import MobileCard from "../../components/MobileCard.vue";

import dataZH from "../../../data/zh-CN/db.json";
import dataEN from "../../../data/en-US/db.json";

const route = useRoute();

const news = ref([]);

watchEffect(() => {
  let data;
  if (route.params.lang === "zh-CN") {
    data = Object.values(dataZH);
  } else {
    data = Object.values(dataEN);
  }

  // Sort by date
  data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  news.value = data;
});
</script>
