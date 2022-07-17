<template>
    <header class="w-screen h-17 bg-white flex justify-between items-center font-1000 transition-colors"
        :class="{ 'bg-transparent': $route.meta.navigation_transparent }">
        <span>LOGO HERE</span>
        <ul class="flex list-none p-0 relative h-full items-center m-0">
            <li v-for="route in routes" v-bind:key="route.name" class="w-20 text-center font-sans-serif font-500 text-16px">
                <router-link :to="route.path" class="decoration-none color-black opacity-70 transition-colors transition-opacity hover:opacity-100 active:opacity-60">{{$t(`views.${route.name}`)}}</router-link>
            </li>
            <div class="absolute w-15 h-12 bg-black opacity-10"></div>
        </ul>
    </header>
</template>

<script setup>
import { routes } from '../router'
</script>

<style scoped>

</style>
