# BAID Website @ Next

## 项目结构

- `src` - 源码
  - `assets` - 页面内使用的素材，会被随机重命名
    - `styles` - 全局样式
      - `desktop.css`
      - `mobile.css`
  - `components` - 全部**非页面组件**放到这里，命名一律为**多词CamelCase**
  
    如果是仅限于某个view内使用的组件，请将其放在一个文件夹内，文件夹名称类似 `DesktopAboutUs`
  - `layouts` - 基础布局
  
    - `DesktopLayout.vue` - 桌面端的默认布局
    - `MobileLayout.vue` - 移动端的默认布局
  - `views` - 全部**页面组件**，每个页面都需要有桌面端的和移动端的，两个组件名称需**相同**
    - `desktop` - 桌面端页面组件
    - `mobile` - 移动端页面组件
  - `main.js` - 入口
  - `App.vue` - 根组件
  - `messages.json` - 全部字符串
  - `router.js` - SPA路由部分
  - `i18n.js` - 国际化部分

## 开发时可能要用到的命令

- `npm install` - 安装依赖
- `npm run dev` - 打开开发服务器（Vite）
- `npm test` - 检查代码有无任何不规范
- `npm run build` - 生成静态构建

## 开发时可能要用到的资料

- UnoCSS 参考：<https://uno.antfu.me/>
- Vue3 API 参考：<https://v3.cn.vuejs.org/api/>
- Vue Router API 参考：<https://router.vuejs.org/api/>
- Popmotion 参考：<https://popmotion.io/>
- Vue motion 参考：<https://motion.vueuse.org/introduction.html>
