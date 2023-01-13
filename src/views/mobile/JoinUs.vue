<template>
  <section>
    <Transition name="fade" mode="out-in">
      <JoinNav
        v-if="isNav"
        @student="
          ;(isNav = false),
            (title = 'JoinUs.Student.Title'),
            (content = 'JoinUs.Student.Content'),
            (join = 'JoinUs.Student.Join')
        "
        @faculty="
          ;(isNav = false),
            (title = 'JoinUs.Faculty.Title'),
            (content = 'JoinUs.Faculty.Content'),
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

import { ref } from 'vue'

const title = ref('')
const content = ref('')
const join = ref('')

const isNav = ref(true)
</script>
