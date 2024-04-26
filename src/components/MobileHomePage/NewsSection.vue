<template>
  <section class="section">
    <MobileTitle>新闻</MobileTitle>
    <MobileCard
      v-for="(item, index) in props.news.slice(0, 4)"
      :key="index"
      :bg="index % 2 === 0 ? 'blue' : 'white'"
      @click="router.push($BASE_URL + item.href)"
    >
      <div class="flex items-center justify-between m-4">
        <img
          :src="item.cover"
          class="rounded-xl w-45% h-35 object-cover"
          alt=""
        />
        <div class="w-45%">
          <h3 class="m-0 text-xl">{{ item.title }}</h3>
        </div>
      </div>
    </MobileCard>

    <div class="flex justify-end m-4">
      <router-link
        class="flex items-center gap-1 color-black decoration-none op-100 font-18px"
        :to="$BASE_URL + '/' + $i18n.locale + '/news'"
      >
        <span class="font-sans">{{ $t('HomePage.ReadMore') }}</span>
        <svg width="25" height="25" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

import MobileCard from '../MobileCard.vue'
import { useRouter } from 'vue-router'
const props = defineProps(['news'])

const router = useRouter()
</script>
