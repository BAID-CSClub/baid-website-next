<template>
  <section class="pt-45 pl-20 pr-20 pb-30 flex-col">
    <div class="flex">
      <FancyTitle
        :top="$t('CampusLife.Events.Title')"
        btm="Special Events"
        color="red"
        right
        class="ml-66.8%"
      ></FancyTitle>
    </div>
    <div id="photo" class="flex flex-row pt-10 justify-center">
      <div id="leftSide" class="flex flex-col">
        <div
          id="event1"
          class="pic flex flex-col"
          style="width: 510px; height: 623px"
        >
          <p
            class="eventText ml-5% mt-97% mb-0% text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event1.Name') }}
          </p>
          <p
            class="eventText ml-5% mt-0 text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event1.Description') }}
          </p>
        </div>
        <div
          id="event2"
          class="pic flex flex-col"
          style="width: 510px; height: 251px"
        >
          <p
            class="eventText ml-5% mt-30% mb-0% text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event2.Name') }}
          </p>
          <p
            class="eventText ml-5% mt-0 mb-1% text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event2.Description') }}
          </p>
        </div>
      </div>
      <div id="rightSide" class="flex flex-col">
        <div id="rightUpper" class="flex flex-row">
          <div id="rightUpperLeft" class="flex flex-col">
            <div
              id="rightUpperLeftUpper"
              class="flex bg-red"
              style="width: 427px; height: 260px"
            ></div>
            <div
              id="rightUpperLeftBottom"
              class="pic flex"
              style="width: 427px; height: 250px"
            ></div>
          </div>
          <div
            id="rightUpperRight"
            class="pic flex"
            style="width: 300px; height: 510px"
          ></div>
        </div>
        <div
          id="event3"
          class="pic flex flex-col"
          style="width: 727px; height: 364px"
        >
          <p
            class="eventText ml-5% mt-40% mb-0% text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event3.Name') }}
          </p>
          <p
            class="eventText ml-5% mt-0 text-6 font-400 font-title color-white"
          >
            {{ $t('CampusLife.Events.Event3.Description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FancyTitle from '../../components/FancyTitle.vue'
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
