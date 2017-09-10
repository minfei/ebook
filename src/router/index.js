import Vue from 'vue'
import Router from 'vue-router'

const error = r => require.ensure([], () => r(require('../components/404')), 'error')
const sort = r => require.ensure([], () => r(require('../components/sort')), 'sort')
const myCenter = r => require.ensure([], () => r(require('../components/my')), 'myCenter')

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {path: '/',component: error},
    {path: '/sort',component: sort},
    {path: '/myCenter',component: myCenter},
  ]
})
