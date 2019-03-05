import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import Home from '@/components/Home'
// import Sidenav from '@/components/Sidenav'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
Vue.use(Router)
const router = new Router({
  base: '/',
  routes: [
    {
      path: '/dashboard',
      name: 'layout',
      component: layout,
      children: [
        {
          path: 'About',
          name: 'About',
          component: About
        },
        {
          path: 'Home',
          name: 'Home',
          component: Home
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      redirect: { name: 'Home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name === null) {
    next()
  } else {
    next()
  }
  next()
  // console.log('to:' + to.name)
  // console.log('from:' + from.name)
  // console.log('next:' + next)
})

export default router
