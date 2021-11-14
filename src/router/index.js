import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // 异步加载
    component: () => import('../views/home/Home')
  },
  {
    path: '/cartList',
    name: 'CartList',
    // 异步加载
    component: () => import('../views/cartList/CartList')
  },{
    path: '/orderList',
    name: 'OrderList',
    // 异步加载
    component: () => import('../views/orderList/OrderList')
  },
  {
    path: '/orderConfirm/:id',
    name: 'OrderConfirm',
    // 异步加载
    component: () => import('../views/orderConfirm/OrderConfirm')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    //验证能否进入login
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('../views/shop/Shop')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: 'Home' }) : next();
    },
  
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

// 每次路由进行切换都进行校验是否登陆
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
