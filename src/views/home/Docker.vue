<template>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <i class="iconfont">&#xe70e;</i>
        <div class="docker__title">首页</div>
      </div>
      <div class="docker__item">
        <i class="iconfont">&#xe73d;</i>
        <div class="docker__title">购物车</div>
      </div>
      <div class="docker__item">
        <i class="iconfont">&#xe897;</i>
        <div class="docker__title">订单</div>
      </div>
      <div class="docker__item">
        <i class="iconfont">&#xe608;</i>
        <div class="docker__title">我的</div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Docker'
}
</script>

<style lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontColor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
    // 添加10px的字体
    &__title {
      font-size: 0.2rem;
      transform: scale(0.5 0.5);
      transform-origin: center top;
    }
  }
}
</style>