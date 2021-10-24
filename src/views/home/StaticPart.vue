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
    <div class="icons__item" v-for="(item, index) in iconsList" :key="index">
      <img
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        alt=""
        class="icons__item__img"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>

  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconsList = [
      { imgName: "超市", desc: "超市便利" },
      { imgName: "菜市场", desc: "菜市场" },
      { imgName: "水果店", desc: "水果店" },
      { imgName: "鲜花", desc: "鲜花" },
      { imgName: "医药健康", desc: "医药健康" },
      { imgName: "家居", desc: "家居时尚" },
      { imgName: "蛋糕", desc: "烘培蛋糕" },
      { imgName: "签到", desc: "签到" },
      { imgName: "大牌免运", desc: "大牌免运" },
      { imgName: "红包", desc: "红包" },
    ];
    return { iconsList };
  },
};
</script>

<style lang="scss" scoped>
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
  background: $search-bgColor;
  color: $search-fontColor;
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
    background: $search-bgColor;
  }
  input::-webkit-input-placeholder {
    color: $search-fontColor;
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