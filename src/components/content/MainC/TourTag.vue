<template>
  <div class="item" v-for="tag in props.tags" @click="$router.push(tagsData[tag].link)">
    {{tagsData[tag].title}}
  </div>
</template>

<script lang="ts" setup>
import {useConsts} from "../../../Pinia/Consts";

const props = defineProps<{
  tags: Array<string>
}>()

const tagsData = useConsts().tagsList
</script>

<style lang="scss" scoped>
.item {
  flex-grow: 1;
  text-align: center;
  margin: 1vh 0.3vw 0;
  border-radius: 1vh;
  align-self: center;
  padding: 0.2vw 1vw;
  background-color: #d9d9d9;
  font-size: 3vh;
  &:hover {
   cursor: pointer;
 }
}
</style>