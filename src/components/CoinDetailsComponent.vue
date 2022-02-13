<template>
  <div class="container">
    <div class="nav">
      <router-link :to="{ name: 'Home' }" class="goHome">
        <span class="material-icons"> home </span>
      </router-link>
      <div class="iconName">Home</div>
    </div>
    <div class="line"></div>
    <div class="content" v-for="item in finalData" :key="item">
      <div class="content__header">
        <div class="content__header__logo">
          <img :src="item.image.large" :alt="item.name" />
        </div>
        <div class="content__header__name">
          {{ item.name }}
        </div>
        <div class="content__header__symbol">
          {{ item.symbol }}
        </div>
      </div>
      <div class="content__description">
        <p v-html="item.description.en"></p>
      </div>
      <div v-if="item.genesis_date" class="content__est">
        <p>Established: {{ item.genesis_date }}</p>
      </div>
      <div class="content__link">
        <p>Home page: {{ item.links.homepage[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoinDetailsComponent",

  props: {
    finalData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;

  .nav {
    display: flex;

    .goHome {
      .material-icons {
        color: black;
        font-size: 36px;
      }
    }

    .iconName {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-left: 5px;
    }

    .line {
      border: 0.5px solid #a9b1bd;
    }
  }

  .content {
    margin-top: 50px;

    @media (width: 320px) {
      width: 320px;
      margin: auto;
    }

    &__header {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      height: 160px;
      border-bottom: 1px solid #a9b1bd;

      @media (width: 320px) {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }

      @media (width: 375px) {
        width: 355px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }

      @media (width: 425px) {
        width: 385px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }

      @media (width: 768px) {
        width: 628px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }

      &__name {
        margin: auto;
        font-size: 36px;
        letter-spacing: 3px;
        font-weight: 600;

        @media (width: 320px) {
          font-size: 20px;
        }

        @media (width: 768px) {
          font-size: 42px;
        }
      }

      &__symbol {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 24px;
        color: #a9b1bd;

        @media (width: 320px) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
        }
      }

      &__logo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media (width: 320px) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 100px;
          height: 80px;
        }
      }
    }

    &__description {
      margin-top: 50px;

      @media (width: 320px) {
        width: 320px;
        font-size: 13px;
        margin-top: 10px;
      }

      @media (width: 375px) {
        width: 375px;
        font-size: 13px;
        margin-top: 10px;
      }

      @media (width: 425px) {
        width: 425px;
        font-size: 13px;
        margin-top: 10px;
      }

      p {
        width: 630px;
        margin: auto;
        text-align: justify;

        @media (width: 320px) {
          width: 320px;
          padding: 20px;
        }

        @media (width: 375px) {
          width: 355px;
          font-size: 13px;
          margin-top: 10px;
        }

        @media (width: 425px) {
          width: 380px;
          font-size: 13px;
          margin-top: 10px;
        }

        @media (width: 768px) {
          font-size: 24px;
        }
      }
    }

    &__link {
      width: 630px;
      margin: auto;

      @media (width: 320px) {
        width: 320px;
      }

      @media (width: 375px) {
        width: 355px;
        font-size: 13px;
      }

      @media (width: 425px) {
        width: 425px;
        font-size: 13px;
      }

      p {
        margin-top: 10px;

        @media (width: 320px) {
          width: 280px;
          margin-left: 20px;
          font-size: 13px;
        }

        @media (width: 375px) {
          width: 335px;
          font-size: 13px;
          margin-top: 10px;
        }
        @media (width: 425px) {
          width: 385px;
          font-size: 13px;
          margin-top: 10px;
          margin-left: 20px;
        }
        @media (width: 768px) {
          font-size: 24px;
        }
      }
    }

    &__est {
      width: 630px;
      margin: auto;

      @media (width: 320px) {
        width: 320px;
      }

      @media (width: 375px) {
        width: 375px;
      }
      @media (width: 425px) {
        width: 425px;
      }

      p {
        margin-top: 30px;
        @media (width: 320px) {
          width: 280px;
          margin-left: 20px;
          font-size: 13px;
        }

        @media (width: 375px) {
          width: 335px;
          font-size: 13px;
          margin-top: 10px;
          margin-left: 10px;
        }

        @media (width: 425px) {
          width: 385px;
          font-size: 13px;
          margin-top: 10px;
          margin-left: 20px;
        }

        @media (width: 768px) {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
