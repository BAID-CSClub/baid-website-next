import { createRouter, createWebHistory } from 'vue-router'

const clientType =
  navigator.userAgent.toLowerCase().indexOf('mobile') > -1
    ? 'mobile'
    : 'desktop'

const langPrefix = '/:lang(zh-CN|en-US)'

export const routes = [
  {
    path: langPrefix + '?',
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
    path: langPrefix + '/about',
    name: 'AboutUs',
    component: () => import(`./views/${clientType}/AboutUs.vue`)
  },
  {
    path: langPrefix + '/education',
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
    path: langPrefix + '/studentLife',
    name: 'StudentLife',
    component: () => import(`./views/${clientType}/StudentLife.vue`),
    meta: {
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: langPrefix + '/join',
    name: 'JoinUs',
    component: () => import(`./views/${clientType}/JoinUs.vue`),
    meta: {
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: langPrefix + '/news',
    name: 'NewsPage',
    component: () => import(`./views/${clientType}/NewsPage.vue`),
    meta: {
      header: {
        alwaysFill: true
      }
    }
  },
  {
    path: langPrefix + '/articles/:year/:month/:day/:title',
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
