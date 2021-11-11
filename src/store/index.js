import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString;
}

const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList) || {}
}
export default createStore({
  state: {
    cartList: getLocalCartList(),
    // cartList: {
    // shopId: {
    //   shopName: '沃尔玛',
    //   productList: {
    //     productId: {
    //       "_id": "1",
    //       "name": "番茄 250g / 份",
    //       "imgUrl": "http://www.dell-lee.com/imgs/vue3/tomato.png",
    //       "sales": 10,
    //       "price": 33.6,
    //       "oldPrice": 39.6
    //     }
    //   }
    // }

    // }
  },
  mutations: {
    changeCartInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      //shopId下没有内容则添加空内容
      let shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }

      let product = shopInfo.productList[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count = product.count + payload.num;
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }

      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeCartChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalCartList(state);
    },
    clearCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    setCartAllChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (let key in products) {
          const product = products[key];
          product.check = true;
        }
      }
      setLocalCartList(state);
    }

  },
  actions: {
  },
  modules: {
  }
})
