<template>
  <section>
    <JoinNav
      v-if="isNav"
      @student=";(student = true), (faculty = false), (isNav = false)"
      @faculty=";(student = false), (faculty = true), (isNav = false)"
      class="section"
    ></JoinNav>
    <JoinInfo
      :title="$t('JoinUs.Student.Title')"
      :content="$t('JoinUs.Student.Content')"
      :join="$t('JoinUs.Student.Join')"
      @back=";(student = false), (faculty = false), (isNav = true)"
      v-if="student"
      id="joinStudent"
    ></JoinInfo>
    <JoinInfo
      :title="$t('JoinUs.Faculty.Title')"
      :content="$t('JoinUs.Faculty.Content')"
      :join="$t('JoinUs.Faculty.Join')"
      @back=";(student = false), (faculty = false), (isNav = true)"
      v-if="faculty"
      id="joinFaculty"
    ></JoinInfo>
  </section>
</template>

<script setup>
import JoinInfo from '../../components/MobileJoinUs/JoinInfo.vue'
import JoinNav from '../../components/MobileJoinUs/JoinNav.vue'

import { ref } from 'vue'

const isNav = ref(true)
const student = ref(false)
const faculty = ref(false)
</script>
