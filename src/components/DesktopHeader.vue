<template>
  <div :class="{ 'h-17': fixed }"></div>
  <header
    class="w-screen h-17 bg-white flex justify-between items-center transition-all font-sans relative z-10"
    :class="{
      'important-bg-transparent': transparent,
      'important:fixed shadow-lg': fixed,
      'op-0 top--17': fixed && !fixedShow,
      'op-100 top-0': fixed && fixedShow
    }"
    :style="{ color }"
  >
    <div class="m-l-10">
      <SchoolLogo
        :color="color"
        :logoType="route.meta.header && route.meta.header.logoType"
      />
    </div>

    <div class="flex h-full m-r-10 items-center">
      <div
        class="flex list-none p-0 relative h-full m-0"
        v-on:mouseleave="showBlock = false"
      >
        <li
          v-for="(route, index) in routesComputed"
          v-bind:key="route.name"
          v-on:mouseover="onHover(index, route.name)"
          class="h-full font-500 text-16px margin-left-right-10px"
        >
          <router-link
            :to="route.path"
            class="inline-block w-30 h-full text-center decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60"
            style="line-height: 70px"
            active-class="important-opacity-100"
            >{{ $t(`views.${route.name}`) }}
          </router-link>
        </li>
        <!-- Block -->
        <div
          class="absolute w-30 h-17 bg-black opacity-0 z-10 pointer-events-none transition-opacity"
          :class="{ 'opacity-10': showBlock }"
          :style="{ left: blockLeft }"
        ></div>
        <!-- Line -->
        <div
          class="absolute w-15 h-1 z-10 bottom--0.5px translate-x-1/2 transition-opacity"
          :style="{ left: lineLeft, 'background-color': lineColor }"
          :class="{ 'opacity-0': !lineLeft || !showLine }"
        ></div>
        <!-- SubMenu -->
        <div
          class="absolute top-17 w-60 bg-white opacity-0 z-10 transition-opacity shadow-lg"
          :class="{ '!opacity-100': showBlock }"
          :style="{ left: blockLeft }"
        >
          <a
            v-for="(subRoute, index) in subRoutes[hover]"
            :key="index"
            :href="subRoute.path"
            class="h-13 w-full color-black decoration-none flex items-center justify-center op-70 hover:op-100 transition"
            >{{ $t(subRoute.name) }}</a
          >
        </div>
      </div>
      <hr
        class="h-7 w-3px my-0 mx-5 border-none"
        :style="{ 'background-color': color }"
      />
      <p
        class="w-20 text-center font-500 opacity-50 hover:opacity-100 active:opacity-60 cursor-pointer select-none"
      >
        <transition mode="out-in" name="fast-fade">
          <router-link
            class="decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60"
            v-if="$i18n.locale === 'zh-CN'"
            :to="route.path.replace('zh-CN', 'en-US')"
            >English</router-link
          >
          <router-link
            class="decoration-none opacity-50 transition-colors transition-opacity color-inherit hover:opacity-100 active:opacity-60"
            v-else
            :to="route.path.replace('en-US', 'zh-CN')"
            >中文</router-link
          >
        </transition>
      </p>
    </div>
  </header>
</template>

<script setup>
import { routes } from '../router'
import { animate } from 'popmotion'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SchoolLogo from './DesktopHeader/SchoolLogo.vue'

const subRoutes = computed(() => ({
  HomePage: [
    {
      path: '/' + locale.value + '#educationPhilosophy',
      name: 'HomePage.EducationPhilosophy.Title'
    },
    {
      path: '/' + locale.value + '#admissionResults',
      name: 'HomePage.AdmissionResults.Title'
    },
    {
      path: '/' + locale.value + '#news',
      name: 'HomePage.News.Title'
    }
  ],
  AboutUs: [
    {
      path: '/' + locale.value + '/about#overview',
      name: 'AboutUs.Overview.Title'
    },
    {
      path: '/' + locale.value + '/about#alumni',
      name: 'AboutUs.Alumni.Title'
    },
    {
      path: '/' + locale.value + '/about#accreditation',
      name: 'AboutUs.Accreditation.Title'
    },
    {
      path: '/' + locale.value + '/about#data',
      name: 'AboutUs.Data.Title'
    }
  ],
  EducationTeaching: [
    {
      path: '/' + locale.value + '/education#curriculum',
      name: 'EducationTeaching.Curriculums.Title'
    },
    {
      path: '/' + locale.value + '/education#learningMethods',
      name: 'EducationTeaching.LearningMethods.Title'
    },
    {
      path: '/' + locale.value + '/education#studentGuidance',
      name: 'EducationTeaching.StudentGuidance.Title'
    },
    {
      path: '/' + locale.value + '/education#wonderfulMoments',
      name: 'EducationTeaching.WonderfulMoments.Title'
    }
  ],
  StudentLife: [
    {
      path: '/' + locale.value + '/studentLife#activities',
      name: 'StudentLife.Activities.Title'
    },
    {
      path: '/' + locale.value + '/studentLife#clubs',
      name: 'StudentLife.Clubs.Title'
    }
  ]
}))

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

const showBlock = ref(false)
let blockLeftAnimation
const blockLeft = ref()

// const showSubmenu = ref(false)
// let submenuLeftAnimation
const hover = ref()

function onHover (index, name) {
  // OnHover: Block animation, Submenu animation
  if (!showBlock.value) {
    showBlock.value = true
    blockLeftAnimation = animate({
      from: 7.5 * index + 'rem',
      to: 7.5 * index + 'rem',
      onUpdate: (v) => {
        blockLeft.value = v
      }
    })
  } else {
    blockLeftAnimation.stop()
    blockLeftAnimation = animate({
      from: blockLeft.value,
      to: 7.5 * index + 'rem',
      onUpdate: (v) => {
        blockLeft.value = v
      }
    })
  }
  hover.value = name
}

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

let headerCooling = false

router.afterEach((to) => {
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  if (index !== -1) {
    setTimeout(() => {
      showLine.value = true
    }, 300)
  }
  headerCooling = true
  // Process anchor (#...)
  router.isReady().then(() => {
    if (to.hash) {
      const anchor = document.querySelector(to.hash)
      if (anchor) {
        anchor.scrollIntoView()
      }
    }
  })
})

const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()

const color = computed(() => {
  if (route.meta.header && route.meta.header.color && !fixed.value) {
    return route.meta.header.color
  } else {
    return '#000'
  }
})
const lineColor = computed(() => {
  if (route.meta.header && route.meta.header.lineColor && !fixed.value) {
    return route.meta.header.lineColor
  } else {
    return '#103C74'
  }
})
const transparent = computed(() => {
  if (route.meta.header && route.meta.header.transparent && !fixed.value) {
    return route.meta.header.transparent
  } else {
    return false
  }
})

// When scrolled distance > 100vh, the header will be fixed at the top
const fixed = ref(false)
const fixedShow = ref(false)
let last = window.scrollY
onMounted(() => {
  window.onscroll = () => {
    const delta = window.scrollY - last
    if (window.scrollY > window.innerHeight) {
      // After 100vh: fixed
      fixed.value = true

      if (delta < 0) {
        fixedShow.value = true
      } else {
        // Scroll down: hide
        // If during route change: ignore
        if (headerCooling) {
          headerCooling = false
        } else {
          fixedShow.value = false
        }
      }
    } else {
      // Before 100vh
      if (fixed.value) {
        fixedShow.value = false
        setTimeout(() => {
          fixed.value = false
        }, 300)
      }
    }

    last = window.scrollY
  }
})

onUnmounted(() => {
  window.onscroll = null
})
</script>

<style>
.fast-fade-enter-active,
.fast-fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.fast-fade-enter-from,
.fast-fade-leave-to {
  opacity: 0;
}
</style>
