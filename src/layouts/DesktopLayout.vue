<template>
    <DesktopHeader />
    <main>
        <slot></slot>
    </main>
    <DesktopFooter />
</template>

<script setup>
import DesktopHeader from '../components/DesktopHeader.vue'
import DesktopFooter from '../components/DesktopFooter.vue'
</script>
