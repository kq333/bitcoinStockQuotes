<template>
  <div class="container">
    <CoinDetailsComponent :finalData="finalData" />
  </div>
</template>

<script>
import CoinDetailsComponent from "../components/CoinDetailsComponent.vue";
import { onMounted, computed, watch, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Coindetails",

  components: {
    CoinDetailsComponent,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getCoinDetails");
    });

    store.commit("detilsCoins", props.name.toLowerCase());

    const getFetchedData = computed(() => store.state.coinsData);

    const finalData = ref(null);

    watch(getFetchedData, (elem) => {
      if (elem) {
        finalData.value = elem;
      }
    });

    return { store, getFetchedData, finalData };
  },
};
</script>
