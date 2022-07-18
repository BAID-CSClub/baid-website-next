import { createRouter, createWebHistory } from 'vue-router'

const clientType = navigator.userAgent.toLowerCase().indexOf('mobile') > -1 ? 'mobile' : 'desktop'

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

export default createRouter({
  history: createWebHistory(),
  routes
})
