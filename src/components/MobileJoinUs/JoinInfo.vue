<template>
  <div class="h-[calc(100vh-5rem)]">
    <div class="min-h-[calc(100vh-5rem)]">
      <div class="section">
        <h2 class="text-center m-y-4">{{ props.title }}</h2>
        <pre class="m-b-4" v-html="props.content"></pre>
      </div>
    </div>
    <div class="h-full">
      <h2
        class="h-full bg-[var(--standard-red)] font-sans font-900 flex justify-center items-center m-0!"
      >
        <div class="flex flex-col leading-tight">
          <div class="text-white z-2 text-12">欢迎加入</div>
          <div
            class="text-center text-[rgba(255,255,255,0.8)] tracking-widest absolute text-10 flex m-10"
          >
            BAID
          </div>
          <div class="text-white z-2 text-18">北京中学</div>
          <div class="text-white z-2 text-18">国际部</div>
          <a
            class="decoration-none font-sans text-right text-white m-y-6 text-6"
            href="#"
            >{{ props.join }}></a
          >
          <div class="text-white text-5 text-center" @click="$emit('back')">
            返回
          </div>
        </div>
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content', 'join'])
</script>
