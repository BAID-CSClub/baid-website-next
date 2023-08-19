<template>
  <div
    class="flex list-none p-0 relative h-full m-0 links"
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
      >
        {{ $t(subRoute.name) }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { routes } from '@/router'
import { animate } from 'popmotion'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
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

router.afterEach((to) => {
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  if (index !== -1) {
    setTimeout(() => {
      showLine.value = true
    }, 300)
  }
})

const { locale } = useI18n({ useScope: 'global' })

const lineColor = '#103C74'
</script>
