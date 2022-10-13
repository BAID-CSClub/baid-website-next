<template>
  <div
    class="z--1 absolute w-screen h-screen top-0 bg-cover bg-center"
    :style="{ 'background-image': 'url(' + bg + ')' }"
  ></div>
</template>

<script setup>
import bg from '../../assets/images/mobileHomeBg.svg'
</script>
