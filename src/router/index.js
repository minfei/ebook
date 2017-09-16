import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('../components/index')), 'error')
const sort = r => require.ensure([], () => r(require('../components/sort')), 'sort')
const myCenter = r => require.ensure([], () => r(require('../components/my')), 'myCenter')
const scNoAdd = r => require.ensure([], () => r(require('../components/scNoAdd')), 'scNoAdd')

const addList = r => require.ensure([], () => r(require('../components/addList')), 'addList')
const allSort = r => require.ensure([], () => r(require('../components/allSort')), 'allSort')
const bookInfo = r => require.ensure([], () => r(require('../components/bookInfo')), 'bookInfo')


const commodityInfo = r => require.ensure([], () => r(require('../components/commodityInfo')), 'commodityInfo')
const inputAdd = r => require.ensure([], () => r(require('../components/inputAdd')), 'inputAdd')
const payMethod = r => require.ensure([], () => r(require('../components/payMethod')), 'payMethod')
const shoppingCart = r => require.ensure([], () => r(require('../components/addList')), 'shoppingCart')
const Study = r => require.ensure([], () => r(require('../components/Study')), 'Study')



Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {path: '/',component: index},
    {path: '/sort',component: sort},
    {path: '/myCenter',component: myCenter},
    {path: '/scNoAdd',component: scNoAdd},

    {path: '/addList',component: addList},
    {path: '/allSort',component: allSort},
    {path: '/bookInfo',component: bookInfo},

    {path: '/commodityInfo',component: commodityInfo},
    {path: '/inputAdd',component: inputAdd},
    {path: '/payMethod',component: payMethod},
    {path: '/shoppingCart',component: shoppingCart},
    {path: '/Study',component: bookInfo}



  ]
})
