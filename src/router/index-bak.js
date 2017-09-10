import Vue from 'vue'
import Router from 'vue-router'
import error from '@/components/404'

import sort from '@/components/sort'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {
      path: '/',
      name: '404',
      component: error
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
  ]
})
