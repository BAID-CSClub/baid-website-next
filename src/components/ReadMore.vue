<template>
  <router-link
    :to="to"
    class="decoration-none op-80 hover:op-100 active:op-70 transition-opacity"
  >
    <div class="flex items-center w-min">
      <i class="m-r-2 flex items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 32.99999997656249 32.99999997656255"
        >
          <path
            fill-rule="evenodd"
            :style="{ fill: props.color }"
            transform="translate(0 2.3092638912203256e-14)  rotate(0 16.499999988281253 16.499999988281253)"
            opacity="1"
            d="M0 16.5C0 25.57 7.43 33 16.5 33C25.57 33 33 25.57 33 16.5C33 7.43 25.65 0 16.5 0C7.43 0 0 7.43 0 16.5Z M26.78 17.25C26.78 17.17 26.85 17.17 26.85 17.1C26.92 17.02 26.92 17.02 26.92 16.95C27 16.87 27 16.87 27 16.8L27 16.5L27 16.12C26.92 16.05 26.92 16.05 26.92 15.98C26.92 15.9 26.85 15.9 26.85 15.82C26.85 15.75 26.78 15.67 26.78 15.67L26.55 15.45L20.55 9.45C19.95 8.85 19.05 8.85 18.45 9.45C17.85 10.05 17.85 10.95 18.45 11.55L21.9 15L7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18L21.9 18L18.45 21.45C17.85 22.05 17.85 22.95 18.45 23.55C18.75 23.85 19.12 24 19.5 24C19.88 24 20.33 23.85 20.48 23.55L26.47 17.55L26.7 17.33C26.78 17.32 26.78 17.25 26.78 17.25Z "
          />
        </svg>
      </i>
      <span
        class="w-max font-sans tracking-wide"
        :style="{ color: props.color }"
        >{{ $t('HomePage.ReadMore') }}</span
      >
    </div>
  </router-link>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: 'var(--standard-blue)'
  }
})
const { locale } = useI18n({ useScope: 'global' })

const to = computed(() => {
  // Trim left and right slashes from props.to
  const to = props.to.replace(/^\/|\/$/g, '')

  if (to.startsWith('zh') || to.startsWith('en')) {
    // Already has locale prefix
    return '/' + to
  } else {
    return '/' + locale.value + '/' + to
  }
})
</script>
