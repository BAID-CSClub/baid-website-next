<template>
  <div class="section">
    <div class="relative font-black m-t-10vh h-10vh max-h-15vh text-left">
      <div class="text-6 tracking-1">毕业生介绍</div>
      <div class="text-4 tracking-wider text-black-300 m-t--2">Alumni</div>
    </div>
    <div
      class="flex m-b-10 w-full gap-3"
      v-for="items in Curriculums"
      :key="items"
    >
      <div class="flex-1 tracking-widest whitespace-pre-wrap break-all">
        {{ items.description }}
      </div>
      <div class="flex-1">
        <!-- TODO: Using Card -->
        <img :src="items.icon" class="w-full" alt="Bg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import photo1 from '../../assets/images/AboutUs/Alumni/Alum_1.jpeg'

const Curriculums = [
  {
    description:
      '因为结缘北中，我 找到了我自己的人生价值所在，确定未来专业方向——工程。目前，我已经申请到了令我满意的大学；将来，我会为工程这个专业倾尽注我所有的努力，刻苦钻研，为人类社会做出力所能及的贡献，如校训所说的“世界因我更美好”。',
    icon: photo1
  }
]
</script>
