<template>
  <div class="overflow-x-hidden">
    <component :is="$clientType === 'desktop' ? DesktopLayout : MobileLayout">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script setup>
import DesktopLayout from './layouts/DesktopLayout.vue'
import MobileLayout from './layouts/MobileLayout.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
locale.value = localStorage.getItem('locale')
  ? localStorage.getItem('locale')
  : navigator.language.split('-')[0]
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
