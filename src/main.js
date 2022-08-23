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

// Remove SEO Links
document.querySelectorAll('body > a').forEach((a) => {
  a.style.position = 'absolute'
  a.style.zIndex = '-1'
  a.style.width = '0'
  a.style.height = '0'
  a.style.marginTop = '-10px'
})

import(`./assets/styles/${app.config.globalProperties.$clientType}.css`)
