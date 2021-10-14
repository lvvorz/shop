<template>
  <div class="wrap">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrap__logo"
    />
    <div class="wrap__input">
      <input type="text" class="wrap__input__content" />
    </div>
    <div class="wrap__input">
      <input type="text" class="wrap__input__content" />
    </div>
    <div class="wrap__login">登陆</div>
    <div class="wrap__link">立即注册</div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrap {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__logo{
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

  &__login {
    margin: 0.32rem 0.4rem .16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
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