<template>
  <div class="search">
    <label for="countryInput" class="search__text">Страна:
    </label>
    <div class="search__input">
      <input-select :tags="countryList" placeholder="Введите страну" my-key="countries"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputSelect from "/src/UI/InputSelect.vue";
import {useConsts} from "/src/Pinia/Consts";
const countryList = useConsts().countryList
</script>

<style lang="scss" scoped>
.search {
  & > div > i {
    bottom: 4.7vh;
    left: 0.6vh;
    font-size: 4vh;
    color: #222222;
  }
  &__text {
    font-size: 2.5vh;
    padding: 0 0 0.5vh 0.5vh;
  }
  &__input {
    margin-top: -7vh;
    margin-bottom: 1vh;
  }
}
</style>