<template>
  <div
    class="fixed top-0 w-full h-full transition-all-300 flex z-4"
    :class="{ 'left-0': props.show, '-left-100%': !props.show }"
  >
    <div class="bg-[var(--standard-blue)] w-70%">
      <div class="m-y-20 m-x-12">
        <li
          v-for="route in routesComputed"
          v-bind:key="route.name"
          class="font-500 text-6 text-white font-sans list-none"
        >
          <router-link
            :to="route.path"
            class="inline-block decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60 leading-16"
            active-class="important-opacity-100"
            >{{ $t(`views.${route.name}`) }}
          </router-link>
        </li>
        <transition mode="out-in" name="fast-fade">
          <router-link
            class="decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60 text-5 text-white font-sans leading-16"
            v-if="$i18n.locale === 'zh-CN'"
            :to="route.path.replace('zh-CN', 'en-US')"
            >English</router-link
          >
          <router-link
            class="decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60 text-5 text-white font-sans leading-16"
            v-else
            :to="route.path.replace('en-US', 'zh-CN')"
            >中文</router-link
          >
        </transition>
      </div>
    </div>
    <div
      class="w-30% h-full"
      style="backdrop-filter: blur(3px)"
      @click="emit('close')"
    >
      <!-- Click -->
    </div>
  </div>
</template>

<script setup>
import { routes } from '../../router'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const routesComputed = computed(() => {
  return routes
    .map((route) => {
      const path = route.path
        .replace(':lang(zh-CN|en-US)', locale.value)
        .replace(':lang(zh-CN|en-US)?', locale.value)
      return { ...route, path }
    })
    .filter(
      (route) => route.name !== 'NotFound' && route.name !== 'ArticlePage'
    )
})

const router = useRouter()
const lineLeft = ref()
const showLine = ref(false)

router.beforeResolve((to, from) => {
  if (to.name === from.name) {
    return
  }
  showLine.value = false
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  setTimeout(() => {
    lineLeft.value = 7.5 * index + 'rem'
  }, 300) // Wait for the line fadeout animation to finish
})

router.afterEach((to) => {
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  if (index !== -1) {
    setTimeout(() => {
      showLine.value = true
    }, 300)
  }
})

const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()
</script>
