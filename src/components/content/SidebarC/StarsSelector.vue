<template>
  <div style="font-size: 2.5vh">Количество звезд:</div>
  <div class="stars" v-for="numb in 5">
    <input-box :numb="numb" v-model:list="sidebarQuery.starSelected"/>
  </div>
</template>


<script lang="ts" setup>
import inputBox from "./InputBox.vue";
import {useSidebarQuery} from "../../../Pinia/SidebarQuery";

const sidebarQuery = useSidebarQuery()
</script>

<style scoped>
.stars {
  margin: 0.7vh 0;
}
</style>