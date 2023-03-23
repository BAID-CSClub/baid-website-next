import { createI18n } from 'vue-i18n'
import messagesEN from './messages.en.json'
import messagesZH from './messages.zh.json'

export default createI18n({
  fallbackLocale: 'zh-CN',
  legacy: false,
  globalInjection: true,
  messages: {
    'en-US': messagesEN,
    'zh-CN': messagesZH
  }
})
