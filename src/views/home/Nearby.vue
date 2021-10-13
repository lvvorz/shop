<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店辅</h3>
        <ul>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
          <li class="nearby__item">
            <img
              class="nearby__item__img"
              src="http://www.dell-lee.com/imgs/vue3/near.png"
              alt=""
            />
            <div class="nearby__content">
              <div class="nearby__content__title">沃尔玛</div>
              <div class="nearby__content__tags">
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
                <div class="nearby__content__tag">月销1万+</div>
              </div>
              <p class="nearby__content__hightlight">VIP尊享满89元减4元运费</p>
            </div>
          </li>
        </ul>
      </div>
    
</template>

<script>
export default {
  name: "Nearby",
};
</script>

<style lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixin.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontColor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__tags {
      display: flex;
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__hightlight {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>