<template>
  <DesktopHeader />
  <main class="min-h-[calc(100vh-21.75rem)]">
    <slot></slot>
  </main>
  <DesktopFooter />
</template>

<script setup>
import DesktopHeader from '../components/DesktopHeader.vue'
import DesktopFooter from '../components/DesktopFooter.vue'
</script>
