import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feed.vue'),
    meta: {
			requiresAuth: true
		},
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    meta: {
			requiresAuth: true
		},
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
			requiresAuth: true
		},
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.currentUser) {
      next({ name: 'Signin' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
