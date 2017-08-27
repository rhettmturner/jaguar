import Vue from 'vue'
import Router from 'vue-router'
import Swipe from '@/components/Swipe'
import Calendar from '@/components/Calendar'
import Description from '@/components/Description'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Description',
      name: 'Description',
      component: Description
    }
  ]
})
