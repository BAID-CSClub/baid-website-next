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
  },
  {
    path: '/education',
    name: 'EducationTeaching',
    component: () => import(`./views/${clientType}/EducationTeaching.vue`)
  },
  {
    path: '/campus',
    name: 'CampusLife',
    component: () => import(`./views/${clientType}/CampusLife.vue`)
  },
  {
    path: '/joinus',
    name: 'JoinUs',
    component: () => import(`./views/${clientType}/JoinUs.vue`)
  }
  // TODO: Add your routes here
]

export default createRouter({
  history: createWebHistory(),
  routes
})
