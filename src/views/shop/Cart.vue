<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="toggleCartShow"
  />
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartAllChecked(shopId)"
        >
          <i
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe70f;' : '&#xe616;'"
          ></i>
          全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="() => clearCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <ul>
        <template v-for="item in productList" :key="item._id">
          <li class="product__item" v-if="item.count > 0">
            <i
              class="product__item__checked iconfont"
              v-html="item.check ? '&#xe70f;' : '&#xe616;'"
              @click="() => changeCartChecked(shopId, item._id)"
            ></i>
            <img class="product__item__img" :src="item.imgUrl" />
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span class="product__item__yen">&yen;</span>{{ item.price }}
                <span class="product__item__origin"
                  >&yen;{{ item.oldPrice }}</span
                >
              </p>
            </div>
            <div class="product__number">
              <i
                class="product__number__minus"
                @click="
                  () => {
                    changeCartInfo(shopId, item._id, item, -1);
                  }
                "
                >-</i
              >
              {{ item.count || 0 }}
              <i
                class="product__number__plus"
                @click="
                  () => {
                    changeCartInfo(shopId, item._id, item, 1);
                  }
                "
                >+</i
              >
            </div>
          </li>
        </template>
      </ul>
    </div>

    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="toggleCartShow"
        />
        <i class="check__icon__tag">{{ calculations.total }}</i>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price"
          >&yen; {{ calculations.price }}</span
        >
      </div>
      <div class="check__btn">
        <router-link :to="{ path: `/orderConfirm/${shopId}` }"
          >去结算</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { commonCartEffect } from "../../effects/cartEffects";

//获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const { changeCartInfo, productList } = commonCartEffect(shopId);

  const store = useStore();

  const cartList = store.state.cartList;

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;
    const result = { total: 0, price: 0, allChecked: true };
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        result.total += product.count;
        if (product.check) {
          result.price += product.count * product.price;
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false;
        }
      }
    }
    result.price = result.price.toFixed(2);
    return result;
  });

  const changeCartChecked = (shopId, productId) => {
    store.commit("changeCartChecked", { shopId, productId });
  };

  const clearCartProducts = (shopId) => {
    store.commit("clearCartProducts", { shopId });
  };

  const setCartAllChecked = (shopId) => {
    store.commit("setCartAllChecked", { shopId });
  };

  return {
    calculations,
    productList,
    changeCartInfo,
    changeCartChecked,
    clearCartProducts,
    setCartAllChecked,
  };
};

//显隐购物车相关
const toggleCartEffect = () => {
  const showCart = ref(false);
  const toggleCartShow = () => {
    showCart.value = !showCart.value;
  };
  return { showCart, toggleCartShow };
};

export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const {
      calculations,
      productList,
      changeCartInfo,
      changeCartChecked,
      clearCartProducts,
      setCartAllChecked,
    } = useCartEffect(shopId);

    const { showCart, toggleCartShow } = toggleCartEffect();

    return {
      calculations,
      productList,
      shopId,
      changeCartInfo,
      clearCartProducts,
      changeCartChecked,
      setCartAllChecked,
      showCart,
      toggleCartShow,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background-color: $bgColor;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: 0.14rem;
    color: $content-fontColor;
    &__all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }
    &__icon {
      color: $btn-bgColor;
      vertical-align: top;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
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
    &__price {
      margin: 0.06rem 0 0 0;
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
    bottom: 0.25rem;
    &__minus,
    &__plus {
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.16rem;
      border-radius: 50%;
      font-size: 0.2rem;
      text-align: center;
    }
    &__minus {
      box-sizing: border-box;
      border: 0.01rem solid $medium-fontColor;
      color: $medium-fontColor;
      margin-right: 0.05rem;
    }
    &__plus {
      background: $btn-bgColor;
      color: $bgColor;
      margin-left: 0.05rem;
    }
  }
}

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      right: 0.2rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $heightLight-fontColor;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(0.5);
    }
  }
  &__info {
    flex: 1;
    color: $content-fontColor;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $heightLight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    color: $bgColor;
    font-size: 0.14rem;
    a {
      color: $bgColor;
    }
  }
}
</style>