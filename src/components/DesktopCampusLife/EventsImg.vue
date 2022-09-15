<template>
  <div class="w-full h-full" @mouseenter="enter()" @mouseleave="leave()">
    <img
      :src="props.image"
      class="block w-full h-full object-cover"
      alt="Bg1"
    />
    <Transition>
      <div
        class="absolute bg-black opacity-50"
        style="bottom: 0px; left: 0px; right: 0px; top: 0px"
        v-if="hover"
      ></div>
    </Transition>
    <Transition>
      <div
        class="absolute color-white"
        style="bottom: 32px; left: 32px; right: 32px"
        v-if="hover"
      >
        <h3>{{ props.name }}</h3>
        <p>
          {{ props.description }}
        </p>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const hover = ref(false)
const props = defineProps(['image', 'name', 'description'])

function enter () {
  hover.value = true
  console.log(hover)
}

function leave () {
  hover.value = false
  console.log(hover)
}
</script>
<style>
.v-enter-active {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 750ms;
}

.v-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
