import Vue from 'vue'
import Router from 'vue-router'
import Swipe from '@/components/Swipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swipe',
      component: Swipe
    }
  ]
})
