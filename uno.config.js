export default {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Open Sans', 'Alibaba PuHuiTi 2.0 55'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
        title: ['Expletus Sans', 'Dianzi']
      }
    })
  ]
}
