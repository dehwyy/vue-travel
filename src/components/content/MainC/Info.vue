<template>
  <div class="info__wrapper">
    <h4>{{hotelData.title.toUpperCase()}}</h4>
    <span>Звезды:</span>
     <star-icon :count="hotelData.stars" :style="starStyle" class="hotelStars"></star-icon>
    <div />
    <div class="info__param"
        v-for="param in consts.hotelInfo">
      <span>{{ param.inner }}</span>
      <span>{{hotelData[param.key]}}</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {useConsts} from "../../../Pinia/Consts";
import StarIcon from "../../../UI/StarIcon.vue";
import {Itour} from "../../../ts/intefaces";
const props = defineProps<{
  hotelData: Itour
}>()
const consts = useConsts()
const starStyle = {
  position: "relative",
  top: "0.7vh",
}
</script>

<style scoped lang="scss">
.info__wrapper {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  & i {
    font-size: 15vw!important;
  }
  & > h4 {
    font-size: 3vh;
    text-align: center;
  }
}
.info__param {
  span:first-child {
    padding: 0 1vh 0 0;
  }
}

</style>