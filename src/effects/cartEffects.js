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
        console.log(productInfo);
    };

    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || [];
        return productList;
    });

    const shopName = computed(() => {
        const shopName = cartList[shopId]?.shopName || '';
        return shopName;
    });

    return { changeCartInfo, cartList, productList, shopName };
};