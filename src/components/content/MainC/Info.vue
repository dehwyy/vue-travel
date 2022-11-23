<template>
  <div class="info-wrapper">
    <h4>{{hotel.title.toUpperCase()}}</h4>
    <span>Страна:</span> <span>{{hotel.country}}</span><div />
    <span>Кол-во звезд:</span> <span class="star" v-for="star in hotel.stars"><i class="material-icons">star</i></span><div />
    <span>Дата вылета:</span> <span>{{hotel.dateOfDeport}}</span><div />
    <span>Дата прилета:</span> <span>{{hotel.dateOfArrive}}</span><div />
    <span>Кол-во ночей:</span> <span>{{hotel.night}}</span><div />
    <span>Цена:</span> <span>{{hotel.price}}</span><div />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    flag: Boolean,
    hotelInfo: {
      type: Object,
      required: true,
    }
  },
  computed: {
    hotel() {
      return this.hotelInfo
    }
  }
})
</script>

<style scoped>

</style>