<template>
  <section>
    <Transition name="nav">
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
    </Transition>
    <Transition name="info">
      <JoinInfo
        :title="$t(title)"
        :content="$t(content)"
        :join="$t(join)"
        @back="isNav = true"
        v-if="!isNav"
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

<style>
.nav-enter-active,
.info-enter-active {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 300ms;
  -o-transition-duration: 300ms;
  transition-duration: 300ms;
  transition-delay: 300ms;
}

.nav-leave-active,
.info-leave-active {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 300ms;
  -o-transition-duration: 300ms;
  transition-duration: 300ms;
}

.nav-enter-from,
.nav-leave-to,
.info-enter-from,
.info-leave-to {
  opacity: 0;
}
</style>
