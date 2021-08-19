import Vue from 'vue'
import Login from '@/view/Login'
import Main from '@/view/Main'
import Router from 'vue-router'
import ChartPage from '@/components/ChartPage'
import LineChart from '@/components/LineChart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/chartPage',
      name: 'ChartPage',
      component: ChartPage
    }
  ]
})


