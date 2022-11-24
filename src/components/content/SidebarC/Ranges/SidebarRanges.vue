<template>
  <div class="sidebar__ranges">
    <input-range :minmax="constsRanges.nights" my-key="minNights">Минимальное кол-во ночей</input-range>
    <input-range :minmax="constsRanges.nights" my-key="maxNights">Максимальное кол-во ночей</input-range>
    <input-range :values-list="constsRanges.moneyList"
                 :minmax="constsRanges.money" my-key="budget"
                >Бюджет
    </input-range>
  </div>
</template>

<script lang="ts" setup>
import InputRange from "./InputRange.vue";
import {useConsts} from "../../../../Pinia/Consts";
const constsRanges = useConsts().rangeData
</script>

<style lang="scss" scoped>
.sidebar__ranges {
  display: flex;
  flex-direction: column;
}
</style>