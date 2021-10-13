<template>
  <div class="position">
    <i class="iconfont position__icon">&#xe62f;</i>
    北京理工大学国防科技园2号楼10层
    <i class="iconfont position__bell">&#xe625;</i>
  </div>

  <div class="search">
    <i class="iconfont">&#xe741;</i>
    <input
      class="search__input"
      type="text"
      placeholder="山姆会员商店优惠商品"
    />
  </div>

  <div class="banner">
    <div class="banner__list">
      <img
        class="banner__item"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt=""
      />
    </div>
  </div>

  <div class="icons">
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">家居时尚</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">烘培蛋糕</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>

  <div class="gap"></div>
</template>

<script>

export default {
  name: "StaticPart"
};
</script>

<style lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipse;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__bell {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontColor;
}

.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  .iconfont {
    position: relative;
    top: 0.02rem;
    padding: 0 0.05rem 0 0.16rem;
    font-size: 0.2rem;
  }
  .search__input {
    display: inline-block;
    font-size: 0.14rem;
    background: #f5f5f5;
  }
  input::-webkit-input-placeholder {
    color: #b7b7b7;
  }
}

.banner {
  // 防抖动
  height: 0;
  overflow: hidden;
  // 宽与长之比
  padding-bottom: 25.4%;
  &__list {
    width: 100%;
  }
  &__item {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}
.gap {
  width: 100%;
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>