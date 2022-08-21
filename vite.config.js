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
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            title: 'PangMenZhengDao'
          }
        })
      ],
      rules: [
        [
          /^letter-spacing-(\d+)$/, match => ({ 'letter-spacing': `${parseFloat(match[1]) / 4}rem` })
        ],
        [
          'letter-spacing',
          {
            'letter-spacing': '1px'
          }
        ]
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
