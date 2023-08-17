<template>
  <section>
    <div class="placeholder"></div>
    <Transition name="fade" mode="out-in">
      <JoinNav
        v-if="isNav"
        @student="
          ;(isNav = false),
            (title = 'JoinUs.Student.Title'),
            (content = data.student),
            (join = 'JoinUs.Student.Join')
        "
        @faculty="
          ;(isNav = false),
            (title = 'JoinUs.Faculty.Title'),
            (content = data.faculty),
            (join = 'JoinUs.Faculty.Join')
        "
        class="section"
      ></JoinNav>
      <JoinInfo
        :title="$t(title)"
        :content="$t(content)"
        :join="$t(join)"
        @back="isNav = true"
        v-else
      ></JoinInfo>
    </Transition>
  </section>
</template>

<script setup>
import JoinInfo from '../../components/MobileJoinUs/JoinInfo.vue'
import JoinNav from '../../components/MobileJoinUs/JoinNav.vue'

import { ref, computed } from 'vue'

import dataZH from '@data/zh-CN/JoinUs.json'
import dataEN from '@data/en-US/JoinUs.json'

import { useI18n } from 'vue-i18n'

const title = ref('')
const content = ref('')
const join = ref('')

const isNav = ref(true)

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
</script>
