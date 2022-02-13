<template>
  <div class="home">
    <div class="searchComponent">
      <SearchComponent @findWord="findWord" />
    </div>
    <div class="tableComponent">
      <TableContent :searchedWord="searchedWord" />
    </div>
    <div class="paginationBtn">
      <PaginationBtns
        :totalPages="totalPages"
        :startBtn="startBtn"
        @showNum="nextPage"
        @nextNumLeft="nextNumLeft"
        @nextNumRight="nextNumRight"
      />
    </div>
  </div>
</template>

<script>
import TableContent from "@/components/TableContent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import PaginationBtns from "@/components/PaginationBtns.vue";
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",

  components: {
    TableContent,
    SearchComponent,
    PaginationBtns,
  },

  setup() {
    onMounted(() => {
      store.dispatch("getData");
    });

    const store = useStore();
    const fetchDatas = computed(() => store.state.fetchedData);
    const nextPageFromVuex = computed(() => store.state.pageNum);
    const currentPage = computed(() => store.state.currentPage);
    const searchedWordFromVuex = computed(() => store.state.searchedWord);
    const totalPages = ref(5);
    const startBtn = ref(1);

    startBtn.value = currentPage.value;

    const searchedWord = computed(() => {
      if (
        searchedWordFromVuex.value.toUpperCase() == searchedWordFromVuex.value
      ) {
        return fetchDatas.value.filter((elem) =>
          elem.symbol
            .toUpperCase()
            .includes(searchedWordFromVuex.value.toUpperCase())
        );
      } else {
        return fetchDatas.value.filter((elem) =>
          elem.name.toLowerCase().includes(searchedWordFromVuex.value)
        );
      }
    });

    watch(nextPageFromVuex, (elem) => {
      if (elem) {
        store.dispatch("getData");
      }
    });

    function showNum(item) {
      startBtn.value = item;
    }

    function nextPage(item) {
      startBtn.value = item;
      store.commit("nextBlockData", item);
    }

    function nextNumLeft(item) {
      startBtn.value = item - 1;
      store.commit("leftNumPagination", item - 1);
    }
    function nextNumRight(item) {
      startBtn.value = item + 1;
      store.commit("rightNumPagination", item + 1);
    }

    function findWord(item) {
      store.commit("SearchedWord", item);
    }

    return {
      store,
      fetchDatas,
      totalPages,
      startBtn,
      showNum,
      nextNumLeft,
      nextNumRight,
      nextPage,
      nextPageFromVuex,
      findWord,
      searchedWord,
      searchedWordFromVuex,
      currentPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: rgb(233, 231, 231);

  .searchComponent {
    margin-top: 10px;
  }

  .tableComponent {
    margin-top: 20px;
  }
  .paginationBtn {
    margin-top: 20px !important;
    max-width: 400px;
    margin: auto;
  }
}
</style>
