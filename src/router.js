import { createRouter, createWebHistory } from 'vue-router'

const clientType = navigator.userAgent.toLowerCase().indexOf('mobile') > -1 ? 'mobile' : 'desktop'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(`./views/${clientType}/HomePage.vue`)
  }
  // TODO: Add your routes here
]

export default createRouter({
  history: createWebHistory(),
  routes
})
