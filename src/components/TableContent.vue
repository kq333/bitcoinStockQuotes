<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Price Change</th>
          <th>24 Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchedWord" :key="index">
          <td class="num">{{ index + 1 }}</td>
          <td>
            <router-link
             :to="{
          name: 'CoinDetails',
          params: { name: item.id, id: item.market_cap_rank },
        }">
              <img :src="item.image" :alt="item.name" /> &nbsp;
              <span class="name">{{ item.name }} </span> &nbsp;
              <span class="icon"> {{ item.symbol }}</span>
            </router-link>
          </td>
          <td>{{ item.current_price }} &#x20AC;</td>
          <td>
            <span
              class="currencyPrice"
              :class="[
                changeColor(item.price_change_percentage_24h)
                  ? ''
                  : 'currencyPrice--red',
              ]"
              >{{ item.price_change_percentage_24h }} %</span
            >
          </td>
          <td>{{ item.price_change_24h.toFixed(4) }} &#x20AC;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableContent",

   props: {
    searchedWord: {
      type: Object,
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
table {
  max-width: 1440px;
  width: 100%;
  border-spacing: 0;
  background-color: #e9e7e7;
  margin:auto;

  thead {
    tr {

       @media (max-width:425px){
          font-size: 0.5em;
        }
      th {
        text-align: start;
        border-bottom: 3px solid #000000;
        height: 40px;
      }
    }
  }

  tbody {
    tr {
      .num {
        color: #a9b1bd;
      }

      td {
        text-align: start;
        border-bottom: 1px solid #8b8b8b;
        height: 40px;
        color:#000000;

        @media (max-width:425px){
          font-size: 0.5em;
        }

        a:visited {
           color:#000000;
        }

        a:link {
          text-decoration: none;
          color:#000000;
        }

        .currencyPrice {
          color: #008000;

          &--red {
            color: #ff0000;
          }
        }

        img {
          width: 28px;
          height: 28px;
          vertical-align: middle;

           @media (max-width:425px){
           width: 20px;
          height: 20px;
        }
        }
        .name {
          vertical-align: middle;
        }

        .icon {
          color: #a9b1bd;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
