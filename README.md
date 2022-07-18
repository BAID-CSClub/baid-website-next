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
  - `router.js` - SPA路由部分
  - `i18n.js` - 国际化部分

## 开发时可能要用到的命令

- `npm install` - 安装依赖
- `npm run dev` - 打开开发服务器（Vite）
- `npm test` - 检查代码有无任何不规范
- `npm run build` - 生成静态构建

## 开发时可能要用到的资料

- UnoCSS 参考：https://uno.antfu.me/
- Vue3 API 参考：https://v3.cn.vuejs.org/api/
- Vue Router API 参考：https://router.vuejs.org/api/
- Popmotion 参考：https://popmotion.io/
- Vue motion 参考：https://motion.vueuse.org/introduction.html



---

## 视图组件和你

创建一个SPA页面的实用方法

不知道怎么添加页面？

- 事实：整个项目很杂乱
- 哇哦。这里有好多`.vue`后缀的文件！
- 它们还在不同的文件夹下
- 而 *@lihe07* 不动手帮忙
- （他最摆了）

**不可能完成的任务？？？**

介绍...视图组件（[Views](https://nuxtjs.org/docs/concepts/views/)）！！

视图组件可以快速创建新的页面，同时不必反复实现重复的内容！

*这很“简单”！*

**操作方法**

1. 打开 `src/router.js` ，找到这一行注释：`// TODO: Add your routes here`

   ```js
   export const routes = [
     {
       path: '/',
       name: 'HomePage',
       component: () => import(`./views/${clientType}/HomePage.vue`),
       meta: {
         navigation_transparent: true // Tell the navigation component to make the header's bg transparent
       }
     },
     {
       path: '/about',
       name: 'AboutUs',
       component: () => import(`./views/${clientType}/AboutUs.vue`)
     }
     // TODO: Add your routes here
   ]
   ```

   参照上面两个示例，写一个新的节点

2. 分别在 `src/views/desktop` 和 `src/views/mobile` 文件夹下创建两个同名的组件文件

3. 成功了！

4. （走你 - `npm run dev`）

**天堂中的麻烦？**

- 如果控制台出现Vue报错，

  那就是Vite无法执行HMR，只需刷新页面。

- 如果Vite报错指出无法编译，

  那就是新的视图组件中出现了无法编译的错误。

- 如果新的页面一片空白，

  那就是您的URL写错了，或者视图组件中出现了运行时错误。

**视图组件，快乐的页面！**