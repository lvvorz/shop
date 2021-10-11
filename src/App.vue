<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <i class="iconfont icon-shouye"></i>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <i class="iconfont icon-gouwuche"></i>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <i class="iconfont icon-dingdan"></i>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <i class="iconfont icon-geren"></i>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
    // 添加10px的字体
    &__title {
        font-size: 20px;
        transform: scale(0.5 0.5);
        transform-origin: center top;
      }
  }
}
</style>
