<template>
  <div class="section">
    <MobileTitle>{{ $t('AboutUs.Alumni.Title') }}</MobileTitle>
    <MobileCard :items="curriculums" :border="false">
      <template #item="{ image, description }">
        <div class="flex gap-5">
          <p class="w-50% color-black p-3 h-60 box-border overflow-auto">
            {{ description }}
          </p>

          <img :src="image" alt="" srcset="" class="h-60 w-50% object-cover" />
        </div>
      </template>
    </MobileCard>
  </div>
</template>

<script setup>
import MobileCard from '../MobileCard.vue'
import a from '../../assets/images/AboutUs/Alumni/Alum_1.jpeg'
import b from '../../assets/images/AboutUs/Alumni/Alum_2.jpeg'
import c from '../../assets/images/AboutUs/Alumni/Alum_3.jpeg'
import MobileTitle from '../MobileTitle.vue'
const curriculums = [
  {
    description:
      '因为结缘北中，我找到了我自己的人生价值所在，确定未来专业方向——工程。目前，我已经申请到了令我满意的大学；将来，我会为工程这个专业倾尽注我所有的努力，刻苦钻研，为人类社会做出力所能及的贡献，如校训所说的“世界因我更美好”。',
    image: a
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
    image: b
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
    image: c
  }
]
</script>
