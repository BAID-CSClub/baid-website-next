<template>
  <header class="w-screen h-17 bg-white flex justify-between items-center transition-colors"
    :class="{ 'bg-transparent': $route.meta.navigation_transparent }">
    <span class="m-l-10 font-1000">LOGO HERE</span>
    <div class="flex h-full m-r-10 items-center">
      <ul class="flex list-none p-0 relative h-full m-0" v-on:mouseleave="showBlock = false">
        <li v-for="(route, index) in routes" v-bind:key="route.name" v-on:mouseover="onHover(index)"
          class="flex items-center justify-center w-30 h-full font-sans-serif font-500 text-16px margin-left-right-10px">
          <router-link :to="route.path" class="
                    decoration-none
                    color-black
                    opacity-50
                    transition-colors
                    transition-opacity
                    hover:opacity-100
                    active:opacity-60" active-class="important-opacity-100">{{ $t(`views.${route.name}`) }}
          </router-link>
        </li>
        <div class="absolute w-30 h-17 bg-black opacity-0 z-10 pointer-events-none transition-opacity"
          :class="{ 'opacity-10': showBlock }" :style="{ left: blockLeft }"></div>
        <div class="absolute w-15 h-1 bg-#103C74 z-10 bottom-0 translate-x-1/2 transition-opacity"
          :style="{ left: lineLeft }" :class="{ 'opacity-0': !lineLeft || !showLine }"></div>
      </ul>
      <hr class="h-7 w-2px m-y-0 m-x-5 bg-#122A2B" />
      <p class="w-20 text-center font-500 opacity-50 hover:opacity-100 active:opacity-60 cursor-pointer select-none">
        <transition mode="out-in" name="fast-fade">
          <span v-if="$i18n.locale === 'zh'" v-on:click="setLocale('en')">English</span>
          <span v-else v-on:click="setLocale('zh')">中文</span>
        </transition>
      </p>
    </div>

  </header>
</template>

<script setup>
import { routes } from '../router'
import { animate } from 'popmotion'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const showBlock = ref(false)
let blockLeftAnimation
const blockLeft = ref()

function onHover(index) {
  if (!showBlock.value) {
    showBlock.value = true
    blockLeftAnimation = animate({
      from: 7.5 * index + 'rem',
      to: 7.5 * index + 'rem',
      onUpdate: v => { blockLeft.value = v }
    })
  } else {
    blockLeftAnimation.stop()
    blockLeftAnimation = animate({
      from: blockLeft.value,
      to: 7.5 * index + 'rem',
      onUpdate: v => { blockLeft.value = v }
    })
  }
}

const router = useRouter()
const lineLeft = ref()
const showLine = ref(false)

router.beforeResolve(to => {
  showLine.value = false
  const index = routes.findIndex(item => item.name === to.name)
  setTimeout(() => {
    lineLeft.value = 7.5 * index + 'rem'
  }, 300) // Wait for the line fadeout animation to finish
})
router.afterEach(() => {
  setTimeout(() => {
    showLine.value = true
  }, 300)
})

const { locale } = useI18n({ useScope: 'global' })

function setLocale(newLocale) {
  localStorage.setItem('locale', newLocale)
  locale.value = newLocale
}

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