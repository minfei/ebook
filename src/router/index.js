import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('../components/index')), 'error')
const sort = r => require.ensure([], () => r(require('../components/sort')), 'sort')
const myCenter = r => require.ensure([], () => r(require('../components/my')), 'myCenter')

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {path: '/',component: index},
    {path: '/sort',component: sort},
    {path: '/myCenter',component: myCenter},
  ]
})
