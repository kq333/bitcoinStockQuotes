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
  max-width: 1440px;
  width:100%;
  margin: auto;

  .input {
    max-width:1440px;
     width:100%;
    height: 30px;
    border-radius: 4px;
    border-color: transparent;
    border: 1px solid #ffffff;

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
