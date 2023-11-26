// vite.config.js
import { defineConfig } from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/vite/dist/node/index.js";
import vue from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unocss from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/unocss/dist/vite.mjs";
import vueI18n from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import path from "path";
import presetWebFonts from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/@unocss/preset-web-fonts/dist/index.mjs";
import presetUno from "file:///run/media/dreta/Data/projects/code/school/baid-website-next/node_modules/@unocss/preset-uno/dist/index.mjs";
var __vite_injected_original_dirname = "/run/media/dreta/Data/projects/code/school/baid-website-next";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "bunny",
          fonts: {
            sans: ["Open Sans", "Alibaba PuHuiTi 2.0 55"],
            mono: ["Fira Code", "Fira Mono:400,700"],
            title: ["Expletus Sans", "Dianzi"]
          }
        })
      ]
    }),
    vueI18n({
      compositionOnly: false,
      include: ["./src/messages.en.json", "./src/messages.zh.json"]
    })
  ],
  resolve: {
    alias: {
      "@data": path.resolve(__vite_injected_original_dirname, "data"),
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL2RyZXRhL0RhdGEvcHJvamVjdHMvY29kZS9zY2hvb2wvYmFpZC13ZWJzaXRlLW5leHRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvZHJldGEvRGF0YS9wcm9qZWN0cy9jb2RlL3NjaG9vbC9iYWlkLXdlYnNpdGUtbmV4dC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL2RyZXRhL0RhdGEvcHJvamVjdHMvY29kZS9zY2hvb2wvYmFpZC13ZWJzaXRlLW5leHQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgVW5vY3NzIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuaW1wb3J0IHZ1ZUkxOG4gZnJvbSBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCBwcmVzZXRXZWJGb250cyBmcm9tIFwiQHVub2Nzcy9wcmVzZXQtd2ViLWZvbnRzXCI7XG5pbXBvcnQgcHJlc2V0VW5vIGZyb20gXCJAdW5vY3NzL3ByZXNldC11bm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFVub2Nzcyh7XG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgICBwcmVzZXRXZWJGb250cyh7XG4gICAgICAgICAgcHJvdmlkZXI6IFwiYnVubnlcIixcbiAgICAgICAgICBmb250czoge1xuICAgICAgICAgICAgc2FuczogW1wiT3BlbiBTYW5zXCIsIFwiQWxpYmFiYSBQdUh1aVRpIDIuMCA1NVwiXSxcbiAgICAgICAgICAgIG1vbm86IFtcIkZpcmEgQ29kZVwiLCBcIkZpcmEgTW9ubzo0MDAsNzAwXCJdLFxuICAgICAgICAgICAgdGl0bGU6IFtcIkV4cGxldHVzIFNhbnNcIiwgXCJEaWFuemlcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHZ1ZUkxOG4oe1xuICAgICAgY29tcG9zaXRpb25Pbmx5OiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcIi4vc3JjL21lc3NhZ2VzLmVuLmpzb25cIiwgXCIuL3NyYy9tZXNzYWdlcy56aC5qc29uXCJdLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGRhdGFcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJkYXRhXCIpLFxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgIF9fVlVFX0kxOE5fRlVMTF9JTlNUQUxMX186IHRydWUsXG4gICAgX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX186IGZhbHNlLFxuICAgIF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX186IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsb0JBQW9CO0FBQ25ZLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTtBQUVqQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGVBQWU7QUFQdEIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsZUFBZTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsT0FBTztBQUFBLFlBQ0wsTUFBTSxDQUFDLGFBQWEsd0JBQXdCO0FBQUEsWUFDNUMsTUFBTSxDQUFDLGFBQWEsbUJBQW1CO0FBQUEsWUFDdkMsT0FBTyxDQUFDLGlCQUFpQixRQUFRO0FBQUEsVUFDbkM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLENBQUMsMEJBQTBCLHdCQUF3QjtBQUFBLElBQzlELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxNQUFNO0FBQUEsTUFDdkMsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sMkJBQTJCO0FBQUEsSUFDM0IseUJBQXlCO0FBQUEsSUFDekIsMkJBQTJCO0FBQUEsRUFDN0I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
