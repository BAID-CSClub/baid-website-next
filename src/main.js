import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import 'uno.css'

const app = createApp(App)
app.config.globalProperties.$clientType =
  navigator.userAgent.toLowerCase().indexOf('mobile') > -1
    ? 'mobile'
    : 'desktop'
app.use(router)
app.use(i18n)
app.use(MotionPlugin)
app.mount('#app')

import(`./assets/styles/${app.config.globalProperties.$clientType}.css`)
