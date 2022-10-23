import { useRoute, useRouter } from 'vue-router';
<template>
  <!-- 加载时，隐藏下面的一切内容 -->
  <div :class="{ 'overflow-hidden w-full h-[calc(100vh-4.25rem)]': loading }">
    <transition name="fade" mode="out-in">
      <div
        v-if="loading"
        class="w-full h-[calc(100vh-4.25rem)] flex items-center justify-center"
      >
        <h1>TODO: Design.... LOADING</h1>
      </div>
      <div v-else>
        <section>
          <CarouselHorizontal :images="content?.images">
            <h1 class="text-18 color-white">
              {{ content?.title }}
            </h1>
          </CarouselHorizontal>
        </section>
        <section class="section">
          <h1 class="text-10">{{ content?.title }}</h1>
          <p>也许还需要更多的内容，如作者 / 创作时间等？</p>
          <br />
          <p>
            文章的内容 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores quo deserunt a cum perferendis error, voluptatum labore
            reiciendis! Eius, quis quos sequi minima ea ratione labore ipsam
            nisi aspernatur tempora?
          </p>
        </section>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'

const debug = true
const route = useRoute()

const contentPath = computed(() => {
  return `/${route.params.lang}/articles/${route.params.year}/${route.params.month}/${route.params.day}/${route.params.title}/content.json`
})

const content = ref(null)
const loading = ref(true)

watch(
  contentPath,
  (path) => {
    loading.value = true
    fetch(path)
      .then((res) => {
        if (debug) {
          setTimeout(() => (loading.value = false), 1000)
        } else {
          loading.value = false
        }

        return res.json()
      })

      .then((data) => {
        content.value = data
        console.log(data)
      })
  },
  { immediate: true }
)
</script>
