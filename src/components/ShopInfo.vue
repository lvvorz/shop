<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" alt="" />
    <div
      class="shop__content"
      :class="{ 'shop__content--bordered': hiderBorder ? false : true }"
      :key="item._id"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <div class="shop__content__tag">月售：{{ item.sales }}</div>
        <div class="shop__content__tag">起送：{{ item.expressLimit }}</div>
        <div class="shop__content__tag">基础运费：{{ item.expressPrice }}</div>
      </div>
      <p class="shop__content__hightlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item", "hiderBorder"],
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/mixin.scss";

.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__tags {
      display: flex;
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__hightlight {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>