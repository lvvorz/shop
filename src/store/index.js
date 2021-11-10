import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      //第一层为商辅id
      // shopId: {
      //   // 第二层为商品内容及数量
      //   product: {
      //     "_id": "1",
      //     "name": "番茄 250g / 份",
      //     "imgUrl": "http://www.dell-lee.com/imgs/vue3/tomato.png",
      //     "sales": 10,
      //     "price": 33.6,
      //     "oldPrice": 39.6
      //   }
      // }
    }
  },
  mutations: {
    changeCartInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      //shopId下没有内容则添加空内容
      let shopInfo = state.cartList[shopId];
      if (!shopInfo) {
        shopInfo = {}
      }

      let product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count = product.count + payload.num;
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }

      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo;
    },
    changeCartChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },
    clearCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {}
    },
    setCartAllChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId];
      if (products) {
        for (let key in products) {
          const product = products[key];
          product.check = true;
        }
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
