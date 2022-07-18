# BAID Website @ Next

## 项目结构

- `src` - 源码
  - `assets` - 页面内使用的素材，会被随机重命名
    - `styles` - 全局样式
      - `desktop.css`
      - `mobile.css`
  - `components` - 全部**非页面组件**放到这里，命名一律为**多词CamelCase**
  - `layouts` - 基础布局
    - `DesktopLayout.vue` - 桌面端的默认布局
    - `MobileLayout.vue` - 移动端的默认布局
  - `views` - 全部**页面组件**，每个页面都需要有桌面端的和移动端的，两个组件名称需**相同**
    - `desktop` - 桌面端页面组件
    - `mobile` - 移动端页面组件
  - `main.js` - 入口
  - `App.vue` - 根组件
  - `messages.json` - 全部字符串
  - `router.json` - SPA路由部分
  - `i18n.js` - 国际化部分