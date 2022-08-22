import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { imagetools } from 'vite-imagetools'

import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'bunny',
          fonts: {
            sans: ['Open Sans'],
            mono: ['Fira Code', 'Fira Mono:400,700'],
            title: 'PangMenZhengDao',
            titleEn: 'Expletus Sans'
          }
        })
      ]
    }),
    vueI18n({
      compositionOnly: false
    }),
    imagetools()
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  }
})
