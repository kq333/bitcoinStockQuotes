<template>
  <div class="container">
    <input
      placeholder="Search Coin"
      class="input"
      type="text"
      v-model="searchWord"
      @input="getData"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchComponent",

  setup(props, { emit }) {
    const searchWord = ref();

    function getData() {
      emit("findWord", searchWord.value);
    }

    return { searchWord, getData };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;

  .input {
    width: 950px;
    height: 30px;
    border-radius: 4px;
    border-color: transparent;
    border: 1px solid #ffffff;

    @media (width: 320px) {
      width: 320px;
    }

    @media (width: 375px) {
      width: 375px;
    }

    @media (width: 425px) {
      width: 425px;
    }

    @media (width: 768px) {
      width: 768px;
    }

    &::placeholder {
      padding-left: 10px;
      font-size: 14px;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
