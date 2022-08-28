<template>
  <section class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        cn="特色活动"
        en="Special Events"
        color="red"
        right
      ></NotFancyTitle>
    </div>
    <div
      class="grid gap-1"
      style="
        grid-template-columns: 4fr 4fr 3fr;
        grid-template-rows: repeat(4, 1fr);
      "
    >
      <div class="relative" style="grid-row-start: span 3">
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
        <div
          class="absolute color-white"
          style="bottom: 32px; left: 32px; right: 32px"
        >
          <h3>{{ $t('CampusLife.Events.Event1.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event1.Name') }}
          </p>
        </div>
      </div>
      <div class="relative">
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
      </div>
      <div class="relative" style="grid-row-start: span 2">
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
      </div>
      <div class="relative">
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
      </div>
      <div
        class="relative"
        style="grid-row-start: span 2; grid-column-start: span 2"
      >
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
        <div
          class="absolute color-white"
          style="bottom: 32px; left: 32px; right: 32px"
        >
          <h3>{{ $t('CampusLife.Events.Event2.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event2.Name') }}
          </p>
        </div>
      </div>
      <div class="relative">
        <img
          :src="homeBg1"
          class="block w-full h-full object-cover"
          alt="Bg1"
        />
        <div
          class="absolute color-white"
          style="bottom: 32px; left: 32px; right: 32px"
        >
          <h3>{{ $t('CampusLife.Events.Event3.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event3.Name') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NotFancyTitle from '../../components/NotFancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>

<style scoped>
.pic {
  background-image: url('../../assets/images/homeBg1.jpg?webp');
  background-size: auto;
  background-repeat: no-repeat;
}

#event1 p {
  width: 510px;
  word-break: break-all;
  white-space: pre-line;
}

#event2 p {
  width: 510px;
  word-break: break-all;
  white-space: pre-line;
}

#event3 p {
  width: 727px;
  word-break: break-all;
  white-space: pre-line;
}
</style>
