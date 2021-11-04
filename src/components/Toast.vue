<template>
  <div class="toast">{{ msg }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: ["msg"],
};

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMsg: "",
  });
  const showToast = (msg) => {
    toastData.show = true;
    toastData.toastMsg = msg;
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMsg = "";
    }, 2000);
  };
  //对toastData进行解构
  const { show, toastMsg } = toRefs(toastData);

  return { show, toastMsg, showToast };
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>