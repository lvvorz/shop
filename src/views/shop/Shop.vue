<template>
  <div class="wrapper">
    <div class="search">
      <i class="search__back iconfont" @click="handleBackClick">&#xe6db;</i>
      <div class="search__content">
        <i class="search__content__icon iconfont">&#xe741;</i>
        <input
          type="text"
          class="search__content__input"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hiderBorder="true" v-if="item.imgUrl" />
    <Content />
    <Cart />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo";
import Content from "./Content";
import Cart from "./Cart.vue";

const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return { item, getItemData };
};

const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return { handleBackClick };
};

export default {
  name: "Shop",
  components: { ShopInfo, Content, Cart },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const { handleBackClick } = useBackRouterEffect();
    getItemData();

    return { item, handleBackClick };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.28rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
}
</style>