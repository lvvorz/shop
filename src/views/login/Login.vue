<template>
  <div class="wrap">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrap__logo"
    />
    <div class="wrap__input">
      <input
        type="text"
        class="wrap__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrap__input">
      <input
        type="password"
        class="wrap__input__content"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrap__login" @click="handleLogin">登陆</div>
    <div class="wrap__link" @click="handleRegister">立即注册</div>
    <toast v-if="show" :msg="toastMsg" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../../src/utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";

const useLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showToast("登陆失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  //对data数据进行解构
  const { username, password } = toRefs(data);
  return { username, password, handleLogin };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { show, toastMsg, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const router = useRouter();
    const handleRegister = () => {
      router.push({ name: "Register" });
    };

    return { handleLogin, handleRegister, username, password, show, toastMsg };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.wrap {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__logo {
    margin: 0 auto 0.3rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid $content-notice-fontColor;
    border-radius: 6px;
    &__content {
      box-sizing: border-box;
      padding: 0.12rem;
      line-height: 0.22rem;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }

  &__login {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: $btn-bgColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: $bgColor;
    font-size: 0.16rem;
    text-align: center;
  }
  .wrap__link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontColor;
  }
}
</style>