<template>
  <div>
    <component :is="$clientType === 'desktop' ? DesktopLayout : MobileLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script setup>
import DesktopLayout from './layouts/DesktopLayout.vue'
import MobileLayout from './layouts/MobileLayout.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>