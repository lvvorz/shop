<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      class="docker__item"
      :key="item.index"
    >
    <!-- 这里不能用{{item.icon}}   -->
      <i class="iconfont" v-html="item.icon"></i>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe70e;", text: "首页" },
      { icon: "&#xe73d;", text: "购物车" },
      { icon: "&#xe897;", text: "订单" },
      { icon: "&#xe608;", text: "我的" },
    ];
    return { dockerList };
  },
};
</script>

<style lang="scss" scoped>
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