<template>
  <div class="min-w-550px overflow-x-hidden">
    <DesktopHeader />
    <!-- Note: 全部页面完成后，可移除 min-h-... -->
    <main class="min-h-[calc(100vh-21.75rem)]">
      <slot></slot>
    </main>
    <DesktopFooter />
  </div>
</template>

<script setup>
import DesktopHeader from '../components/DesktopHeader.vue'
import DesktopFooter from '../components/DesktopFooter.vue'
</script>
