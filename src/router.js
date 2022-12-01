import { createRouter, createWebHistory } from 'vue-router'

const clientType =
  navigator.userAgent.toLowerCase().indexOf('mobile') > -1
    ? 'mobile'
    : 'desktop'

export const routes = [
  {
    path: '/:lang(zh-CN|en-US)?',
    name: 'HomePage',
    component: () => import(`./views/${clientType}/HomePage.vue`),
    meta: {
      header: {
        transparent: true, // Tell the navigation component to make the header's bg transparent
        color: '#fff' // Set the header's text color
        // logoType: 'normal' // Set the header's logo type
        // lineColor: '#fff' // Set the header's line color
      }
    }
  },
  {
    path: '/:lang(zh-CN|en-US)/about',
    name: 'AboutUs',
    component: () => import(`./views/${clientType}/AboutUs.vue`)
  },
  {
    path: '/:lang(zh-CN|en-US)/education',
    name: 'EducationTeaching',
    component: () => import(`./views/${clientType}/EducationTeaching.vue`),
    meta: {
      // No thing to do with header
      noSplash: true,
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: '/:lang(zh-CN|en-US)/studentLife',
    name: 'StudentLife',
    component: () => import(`./views/${clientType}/StudentLife.vue`),
    meta: {
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: '/:lang(zh-CN|en-US)/join',
    name: 'JoinUs',
    component: () => import(`./views/${clientType}/JoinUs.vue`),
    meta: {
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: '/:lang(zh-CN|en-US)/articles/:year/:month/:day/:title',
    name: 'ArticlePage',
    component: () => import(`./views/${clientType}/ArticlePage.vue`)
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(`./views/${clientType}/NotFound.vue`)
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
