import { createI18n } from 'vue-i18n'
import messages from './messages.json'

export default createI18n({
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})
