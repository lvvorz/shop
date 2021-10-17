##笔记
```
npm install normalize.css
```
##插件
vue dev tools

##路由校验
```javascript
router.beforeEach((to, before, next) => {
  const {isLogin} = localStorage; //是否登陆
  (isLogin || to.name === "Login") ? next() : next({name: 'Login'});
})

{
    path: '/login',
    name: 'Login',
    component: Login,
    //验证能否进入login
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      isLogin ? next({name: 'Home'}) : next();
    }
  }
//javascript使用路由
import {useRouter} from 'vue-router';
export default {
  name: "Login",
  setup() {
    //获取router实例
    const router = useRouter();
    const handleLogin = () => {
      //若已登陆则跳转到HOME
      localStorage.isLogin = true;
      router.push({name: 'Home'})
    }
    return {handleLogin}
  }
};
```

###安装axios
```
npm install axios --save
```

###接口
http://fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login

###使用json格式
axios.defaults.headers.post['Content-Type'] = 'application/json';

###
promise还不是很会