import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    pageNum: 1,
    amountItems: 20,
    currentPage: 1,
    fetchedData: [],
    coinsData: [],
    searchedWord: "",
    coinName: "",
  },
  mutations: {
    fetchedData(state, payload) {
      state.fetchedData = payload;
    },

    nextBlockData(state, payload) {
      console.log(payload);
      state.pageNum = payload;
      state.currentPage = payload;
    },

    leftNumPagination(state, payload) {
      state.pageNum = payload;
      state.currentPage = payload;
    },

    rightNumPagination(state, payload) {
      state.pageNum = payload;
      state.currentPage = payload;
    },

    SearchedWord(state, payload) {
      state.searchedWord = payload;
    },

    coinDetails(state, payload) {
      state.coinName = payload;
    },

    detilsCoins(state, payload) {
      state.coinName = payload;
    },

    coinsData(state, payload) {
      state.coinsData = payload;
    },
  },

  actions: {
    async getData({ commit, state }) {
      try {
        const fetchData = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${state.amountItems}&page=${state.pageNum}&sparkline=false`
        );

        commit("fetchedData", fetchData.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getCoinDetails({ commit, state }) {
      try {
        const fetchData = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${state.coinName}`
        );

        commit("coinsData", [fetchData.data]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
