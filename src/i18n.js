import { createI18n } from 'vue-i18n'
import messages from './messages.json'

export default createI18n({
  fallbackLocale: 'zh-CN',
  legacy: false,
  globalInjection: true,
  messages
})
