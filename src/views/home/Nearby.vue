<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店辅</h3>
    <ul>
      <li class="nearby__item" v-for="item in nearbyList" :key="item.id">
        <img class="nearby__item__img" :src="item.imgUrl" alt="" />
        <div class="nearby__content">
          <div class="nearby__content__title">{{ item.title }}</div>
          <div class="nearby__content__tags">
            <div
              class="nearby__content__tag"
              v-for="(innerItem, innerIndex) in item.tags"
              :key="innerIndex"
            >
              {{ innerItem }}
            </div>
          </div>
          <p class="nearby__content__hightlight">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: 1,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月销1万+", "起送0元", "基础运费5元"],
        desc: "VIP尊享满89元减4元运费（每月3张）",
      },
      {
        id: 2,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月销1万+", "起送0元", "基础运费5元"],
        desc: "VIP尊享满89元减4元运费（每月3张）",
      },
    ];
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontColor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
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