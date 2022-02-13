<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <div class="table__header__index">#</div>
        <div class="table__header__name">Coin</div>
        <div class="table__header__price">Price</div>
        <div class="table__header__priceChane">Price Change</div>
        <div class="table__header__Volume">24 Volume</div>
      </div>
      <router-link
        class="table__content"
        v-for="item in searchedWord"
        :key="item.id"
        :to="{
          name: 'CoinDetails',
          params: { name: item.id, id: item.market_cap_rank },
        }"
      >
        <div class="table__content__index">{{ item.market_cap_rank }}</div>
        <div class="table__content__bitCoin">
          <div class="table__content__bitCoin__icon">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="table__content__bitCoin__name">
            {{ item.name }}
          </div>
          <div class="table__content__bitCoin__shortName">
            {{ item.symbol.toUpperCase() }}
          </div>
        </div>
        <div class="table__content__price">
          {{ item.current_price }} &#8364;
        </div>
        <div
          class="table__content__priceChane"
          :class="[
            changeColor(item.price_change_percentage_24h)
              ? 'table__content__price--green'
              : 'table__content__price--red',
          ]"
        >
          {{ item.price_change_percentage_24h }} %
        </div>
        <div class="table__content__volume">
          {{ item.price_change_24h }} &#8364;
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableContent",
  props: {
    searchedWord: {
      type: Array,
      require: true,
    },
  },

  setup() {
    function changeColor(item) {
      return item >= 0;
    }

    return { changeColor };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;

  .table {
    max-width: 950px;

    a {
      text-decoration: none;
      color: black;
    }

    &__header {
      max-width: 950px;
      height: 30px;
      display: grid;
      grid-template-columns: 50px 300px 200px 200px 200px;
      border-bottom: 2px solid black;
      color: black;
      font-weight: 600;

      @media (width: 320px) {
        grid-template-columns: 15px 95px 63px 78px 68px;
        font-size: 10px;
      }

      @media (width: 375px) {
        grid-template-columns: 15px 110px 73px 88px 78px;
        font-size: 12px;
      }

      @media (width: 425px) {
        grid-template-columns: 15px 130px 87px 102px 91px;
        font-size: 12px;
      }

      @media (width: 768px) {
        grid-template-columns: 40px 270px 160px 160px 138px;
        font-size: 16px;
      }
    }

    &__content {
      max-width: 950px;
      height: 40px;
      display: grid;
      grid-template-columns: 50px 300px 200px 200px 200px;
      border-bottom: 1px solid black;

      @media (width: 320px) {
        grid-template-columns: 15px 95px 63px 78px 68px;
        font-size: 8px;
        margin-top: 7px;
      }

      @media (width: 375px) {
        grid-template-columns: 15px 110px 73px 88px 78px;
        font-size: 9px;
      }

      @media (width: 425px) {
        grid-template-columns: 15px 130px 87px 102px 91px;
        font-size: 10px;
      }

      @media (width: 768px) {
        grid-template-columns: 40px 270px 160px 160px 138px;
        font-size: 16px;
      }

      &__index {
        margin-top: 7px;
        color: #a9b1bd;

        @media (width: 320px) {
          margin-top: 9px;
        }

        @media (width: 375px) {
          margin-top: 13px;
        }

        @media (width: 425px) {
          margin-top: 14px;
          font-size: 9px;
        }
      }

      &__bitCoin {
        display: grid;
        grid-template-columns: 30px auto auto;
        height: 30px;

        @media (width: 320px) {
          grid-template-columns: 15px 50px 35px;
          gap: 2px;
        }

        @media (width: 375px) {
          grid-template-columns: 15px 50px 35px;
          gap: 2px;
        }

        @media (width: 425px) {
          grid-template-columns: 20px 72px 35px;
          gap: 3px;
        }

        &__icon {
          margin-top: 7px;

          @media (width: 375px) {
            margin-top: 12px;
          }
          @media (width: 425px) {
            margin-top: 12px;
          }

          img {
            width: 25px;
            height: 25px;

            @media (width: 320px), (width: 375px), (width: 425px) {
              width: 15px;
              height: 15px;
            }
          }
        }

        &__name {
          height: 10px;
          margin-top: 7px;

          @media (width: 320px) {
            font-size: 7px;
            margin-top: 9px;
          }

          @media (width: 375px) {
            margin-top: 14px;
            font-size: 7px;
          }

          @media (width: 425px) {
            margin-top: 14px;
            font-size: 9px;
          }
        }

        &__shortName {
          margin-top: 7px;
          color: #a9b1bd;

          @media (width: 320px) {
            margin-top: 9px;
          }
          @media (width: 375px) {
            margin-top: 14px;
          }

          @media (width: 425px) {
            margin-top: 14px;
            font-size: 9px;
          }
        }
      }

      &__price {
        margin-top: 7px;

        @media (width: 320px) {
          margin-top: 9px;
        }

        @media (width: 375px) {
          margin-top: 14px;
        }

        @media (width: 425px) {
          margin-top: 14px;
          font-size: 9px;
        }

        &--red {
          color: red;
        }

        &--green {
          color: green;
        }
      }

      &__priceChane {
        margin-top: 7px;

        @media (width: 320px) {
          font-size: 8px;
          margin-top: 9px;
        }
        @media (width: 375px) {
          margin-top: 14px;
        }

        @media (width: 425px) {
          margin-top: 14px;
          font-size: 9px;
        }
      }

      &__volume {
        margin-top: 7px;

        @media (width: 320px) {
          font-size: 6px;
          margin-top: 9px;
        }
        @media (width: 375px) {
          margin-top: 14px;
           font-size: 7px;
        }

        @media (width: 425px) {
          margin-top: 14px;
          font-size: 8px;
        }

        @media (width: 768px) {
          margin-top: 11px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
