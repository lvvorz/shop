import { useStore } from 'vuex';
import { computed } from 'vue'

export const commonCartEffect = (shopId) => {
    const store = useStore();
    const cartList = store.state.cartList;
    const changeCartInfo = (shopId, productId, productInfo, num) => {
        store.commit("changeCartInfo", {
            shopId,
            productId,
            productInfo,
            num
        });
    };

    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || {};
        //只取count不为0的productList
        const noEmptyProductList = {};
        for(let i in productList) {
          const product = productList[i];
          if(product.count > 0) {
            noEmptyProductList[i] = product
          }
        }
        return noEmptyProductList;
    });

    const shopName = computed(() => {
        const shopName = cartList[shopId]?.shopName || '';
        return shopName;
    });

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

    return { changeCartInfo, cartList, productList, shopName, calculations };
};