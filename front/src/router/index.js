import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TokenService from '../services/service.token';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feed.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  routes
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  // const isClient = to.matched.some(record => record.meta.client);
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: '/',
    });
    // query: { redirect: to.fullPath, type: 'checked' },
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (onlyWhenLoggedOut && loggedIn) {
    return next('/feed');
  }

  next();
});

export default router
