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
        placeholder="请输入手机号"
        v-model="username"
      />
    </div>
    <div class="wrap__input">
      <input
        type="text"
        class="wrap__input__content"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrap__input">
      <input
        type="text"
        class="wrap__input__content"
        placeholder="请再次输入密码"
        v-model="ensurement"
      />
    </div>
    <div class="wrap__register" @click="handleRegister">注册</div>
    <div class="wrap__link" @click="handleLogin">已有帐号去登陆</div>
    <toast v-if="show" :msg="toastMsg" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../../src/utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";

const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    ensurement: "",
  });
  const handleRegister = async () => {
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  //对data数据进行解构
  const { username, password, ensurement } = toRefs(data);
  return { username, password, ensurement, handleRegister };
};

export default {
  name: "Register",
  components: { Toast },
  setup() {
    const router = useRouter();
    const { show, toastMsg, showToast } = useToastEffect();
    const { username, password, ensurement, handleRegister } =
      useRegisterEffect(showToast);

    const handleLogin = () => {
      router.push({ name: "Login" });
    };

    return {
      handleLogin,
      handleRegister,
      show,
      toastMsg,
      username,
      password,
      ensurement,
    };
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
      padding: 0 0.05rem;
      line-height: 0.48rem;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }

  &__register {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontColor;
  }
}
</style>