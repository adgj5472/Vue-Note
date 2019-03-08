import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import Home from '@/components/page/Home'
import About from '@/components/page/About'
import NotFound from '@/components/page/NotFound'
import Lottery from '@/components/page/Lottery'
Vue.use(Router)

let LotteryData = {
  info: {
    title: 'XXX活動抽獎'
  },
  userdata: [
    {
      id: '1',
      name: 'Jack'
    },
    {
      id: '2',
      name: 'Jay'
    },
    {
      id: '3',
      name: 'Marry'
    },
    {
      id: '4',
      name: 'John'
    },
    {
      id: '5',
      name: 'Tim'
    }
  ],
  prize: [
    {
      id: '1',
      name: '蘋果'
    },
    {
      id: '2',
      name: '香蕉'
    },
    {
      id: '3',
      name: '榴槤'
    }
  ]
}

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
          path: 'Lottery',
          name: 'Lottery',
          component: Lottery,
          props: { LotteryData: LotteryData }
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
  next()
/*
  if (from.name === null) {
    next()
  } else {
    next()
  }
*/
})

export default router
