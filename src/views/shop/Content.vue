<template>
  <div class="content">
    <nav class="category">
      <ul>
        <li
          :class="{
            category__item: true,
            'category__item--active': currentTab === item.tab,
          }"
          v-for="item in categories"
          :key="item.name"
          @click="() => hadleTabClick(item.tab)"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <div class="product">
      <ul>
        <li class="product__item" v-for="item in list" :key="item._id">
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__sales">月售{{ item.sales }}件</p>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <i
              class="product__number__minus iconfont"
              @click="
                () => {
                  changeCartItem(shopId, item._id, item, -1, shopName);
                }
              "
              >&#xe780;</i
            >
            {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}
            <i
              class="product__number__plus iconfont"
              @click="
                () => {
                  changeCartItem(shopId, item._id, item, 1, shopName);
                }
              "
              >&#xe845;</i
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { get } from "../../utils/request";
import { commonCartEffect } from "../../effects/cartEffects";

const categories = [
  {
    name: "全部商品",
    tab: "all",
  },
  {
    name: "秒杀",
    tab: "seckill",
  },
  {
    name: "新鲜水果",
    tab: "fruit",
  },
];

//tab相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const hadleTabClick = (tab) => {
    currentTab.value = tab;
  };

  return { currentTab, hadleTabClick };
};

//获取列表数据相关
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };

  //监听若变化则执行函数
  watchEffect(() => {
    getContentData();
  });

  const { list } = toRefs(content);
  return { list };
};

//购物车相关
const useCartEffect = () => {
  const store = useStore();
  const { changeCartInfo, cartList } = commonCartEffect();

  const changeShopName = (shopId, shopName) => {
    store.commit("changeShopName", {
      shopId,
      shopName,
    });
  };

  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartInfo(shopId, productId, item, num);
    changeShopName(shopId, shopName);
  };

  return { cartList, changeCartItem };
};

export default {
  name: "Content",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, hadleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);
    const { cartList, changeCartItem } = useCartEffect();

    return {
      list,
      categories,
      hadleTabClick,
      currentTab,
      shopId,
      changeCartItem,
      cartList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    &--active {
      background-color: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipse;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontColor;
    }
    &__price {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $heightLight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
  }
  &__number {
    position: absolute;
    right: 0;
    bottom: 0.12rem;
    &__minus,
    &__plus {
      position: relative;
      top: 0.02rem;
      font-size: 0.2rem;
    }
    &__minus {
      color: $medium-fontColor;
      margin-right: 0.05rem;
    }
    &__plus {
      color: $btn-bgColor;
      margin-left: 0.05rem;
    }
  }
}
</style>