<template>
  <div class="h-[calc(100vh-5rem)]">
    <div class="min-h-[calc(100vh-5rem)]">
      <div class="section">
        <h2 class="font-600 text-center">{{ props.title }}</h2>
        <pre>{{ props.content }}</pre>
      </div>
    </div>
    <div
      class="h-full bg-[var(--standard-red)] font-sans font-900 flex justify-center items-center leading-tight"
    >
      <div class="flex flex-col justify-center">
        <div class="text-white" style="font-size: min(4.8rem, 20vw)">
          欢迎加入
        </div>
        <div
          class="text-center text-[rgba(255,255,255,0.8)] tracking-widest"
          style="font-size: min(2.4rem, 10vw)"
        >
          BAID
        </div>
        <div class="text-white" style="font-size: min(6rem, 25vw)">
          北京中学
        </div>
        <div class="text-white" style="font-size: min(6rem, 25vw)">国际部</div>
        <a
          class="decoration-none font-sans text-right text-white m-y-10"
          style="font-size: min(1.92rem, 8vw)"
          href="#joinStudent"
          >{{ props.join }}></a
        >
        <div class="text-white text-6 text-center" @click="$emit('back')">
          返回
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content', 'join'])
</script>
