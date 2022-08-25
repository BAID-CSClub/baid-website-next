<template>
  <section class="section">
    <div class="flex justify-end">
      <NotFancyTitle cn="特色活动" en="Special Events" color="red" right></NotFancyTitle>
    </div>
    <div class="grid gap-1" style="
        grid-template-columns: 4fr 4fr 3fr;
        grid-template-rows: repeat(4, 1fr);
      ">
      <div class="relative" style="grid-row-start: span 3">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
        <div class="absolute color-white" style="bottom: 32px; left: 32px; right: 32px">
          <h3>{{ $t('CampusLife.Events.Event1.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event1.Name') }}
          </p>
        </div>
      </div>
      <div class="relative">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
      </div>
      <div class="relative" style="grid-row-start: span 2">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
      </div>
      <div class="relative">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
      </div>
      <div class="relative" style="grid-row-start: span 2; grid-column-start: span 2">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
        <div class="absolute color-white" style="bottom: 32px; left: 32px; right: 32px">
          <h3>{{ $t('CampusLife.Events.Event2.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event2.Name') }}
          </p>
        </div>
      </div>
      <div class="relative">
        <img :src="homeBg1" class="block w-100% h-100% object-cover" alt="Bg1" />
        <div class="absolute color-white" style="bottom: 32px; left: 32px; right: 32px">
          <h3>{{ $t('CampusLife.Events.Event3.Name') }}</h3>
          <p>
            {{ $t('CampusLife.Events.Event3.Name') }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div id="photo" class="flex flex-row pt-10 justify-center">
      <div id="leftSide" class="flex flex-col">
        <div id="event1" class="pic flex flex-col" style="width: 510px; height: 623px">
          <p class="eventText ml-5% mt-97% mb-0% text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event1.Name') }}
          </p>
          <p class="eventText ml-5% mt-0 text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event1.Name') }} {{ $t('CampusLife.Events.Event1.Name') }}
          </p>
        </div>
        <div id="event2" class="pic flex flex-col" style="width: 510px; height: 251px">
          <p class="eventText ml-5% mt-30% mb-0% text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event2.Name') }}
          </p>
          <p class="eventText ml-5% mt-0 mb-1% text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event2.Description') }}
          </p>
        </div>
      </div>
      <div id="rightSide" class="flex flex-col">
        <div id="rightUpper" class="flex flex-row">
          <div id="rightUpperLeft" class="flex flex-col">
            <div id="rightUpperLeftUpper" class="flex bg-red" style="width: 427px; height: 260px"></div>
            <div id="rightUpperLeftBottom" class="pic flex" style="width: 427px; height: 250px"></div>
          </div>
          <div id="rightUpperRight" class="pic flex" style="width: 300px; height: 510px"></div>
        </div>
        <div id="event3" class="pic flex flex-col" style="width: 727px; height: 364px">
          <p class="eventText ml-5% mt-40% mb-0% text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event3.Name') }}
          </p>
          <p class="eventText ml-5% mt-0 text-6 font-400 font-title color-white">
            {{ $t('CampusLife.Events.Event3.Description') }}
          </p>
        </div>
      </div>
    </div> -->
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
