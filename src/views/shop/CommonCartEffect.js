import { useStore } from 'vuex';

export const commonCartEffect = () => {
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
  return { changeCartInfo, cartList };
};