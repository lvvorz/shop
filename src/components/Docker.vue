<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{ docker__item: true, 'docker__item--active': index === currentIndex }"
      class="docker__item"
      :key="item.index"
    >
      <!-- 这里不能用{{item.icon}} 使用v-html  -->
      <router-link :to="item.to">
        <i class="iconfont" v-html="item.icon"></i>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ['currentIndex'],
  setup() {
    const dockerList = [
      { icon: "&#xe70e;", text: "首页", to: { name: "Home" } },
      { icon: "&#xe73d;", text: "购物车", to: { name: "CartList" } },
      { icon: "&#xe897;", text: "订单", to: { name: "OrderList" } },
      { icon: "&#xe608;", text: "我的", to: { name: "Home" } },
    ];
    return { dockerList };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
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
    a {
      color: $content-fontColor;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  // 添加10px的字体
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>