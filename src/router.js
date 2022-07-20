import { createRouter, createWebHistory } from 'vue-router'

const clientType =
  navigator.userAgent.toLowerCase().indexOf('mobile') > -1
    ? 'mobile'
    : 'desktop'

export const routes = [
  {
    path: '/',
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
