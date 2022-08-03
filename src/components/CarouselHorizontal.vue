 <template>
  <div class="h-[calc(100vh-4.25rem)] w-screen overflow-hidden relative">
    <div class="h-max w-screen absolute flex" :style="{ left }">
      <img class="h-[calc(100vh-4.25rem)] w-screen" v-for="img in props.images" :src="img" :alt="img" :key="img">
    </div>
    <div class="absolute right-10 bottom-10 flex">
      <div
        v-for="(img, index) in props.images"
        v-bind:key="img"
        :class="{ 'important-bg-white': current === index }"
        class="dot w-4 h-4 m-x-3"
        v-on:click="current = index"
      ></div>
    </div>
    <div class="absolute">
      <div class="flex justify-center items-center w-screen h-[calc(100vh-4.25rem)]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { animate } from 'popmotion'
import { onMounted, ref, watch } from 'vue'

const props = defineProps(['images'])

const current = ref(0)
const left = ref('0vw')

let leftAnimation

watch(current, (index) => {
  if (leftAnimation) leftAnimation.stop()
  leftAnimation = animate({
    from: left.value,
    to: index * -100 + 'vw',
    onUpdate (value) {
      left.value = value
    },
    duration: 300
  })
})

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % props.images.length
  }, 5000)
})

</script>

<style scoped>
.dot {
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  /* margin-right: 10px; */
}
</style>
