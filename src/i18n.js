import { createI18n } from 'vue-i18n'
import messages from './messages.json'

export default createI18n({
  // ..
  locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : navigator.language.split('-')[0],
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})
