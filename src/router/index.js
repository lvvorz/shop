import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    //验证能否进入login
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: 'Home' }) : next();
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 每次路由进行切换都进行校验
router.beforeEach((to, before, next) => {
  const { isLogin } = localStorage; 
  //每次跳转验证，若没登陆则跳到登陆
  if(!isLogin && (to.name !== 'Login' && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
