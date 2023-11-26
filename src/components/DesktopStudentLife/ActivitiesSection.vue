<template>
  <div class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        :cn="$t('StudentLife.Activities.Title')"
        en="Activities"
        color="red"
        right
      ></NotFancyTitle>
    </div>
    <div class="xl:grid-cols-4 grid-cols-2 gap-0 grid shadow-xl">
      <ActivityBlock
        :activity="pageData.activities[0]"
        background="var(--standard-blue)"
        :light="true"
        text-align="right"
      />
      <ActivityBlock
        :activity="pageData.activities[1]"
        background="var(--standard-red)"
        :light="true"
        text-align="right"
      />

      <ActivityBlock
        :activity="pageData.activities[2]"
        background="var(--standard-red)"
        :light="true"
        text-align="left"
      />
      <ActivityBlock
        :activity="pageData.activities[3]"
        background="#d3d3d3"
        :light="false"
        text-align="left"
      />

      <ActivityBlock
        :activity="pageData.activities[4]"
        background="var(--standard-blue)"
        :light="true"
        text-align="right"
      />
      <ActivityBlock
        :activity="pageData.activities[5]"
        background="var(--standard-red)"
        :light="true"
        text-align="right"
      />

      <!-- <ActivityBlock :activity="pageData.activities[0]" background="#d3d3d3" :light="false" text-align="left" /> -->
      <!-- <ActivityBlock :activity="pageData.activities[0]" background="var(--standard-blue)" :light="true" text-align="left" /> -->
    </div>
  </div>
</template>

<script setup>
import ActivityBlock from '@/components/DesktopStudentLife/ActivityBlock.vue'
import NotFancyTitle from '../../components/NotFancyTitle.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
