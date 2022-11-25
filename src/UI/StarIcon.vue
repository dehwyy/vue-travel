<template>
  <span :style="attrs.style" v-for="num in count">
    <i class="material-icons" :class="attrs.class">star</i></span>
</template>

<script lang="ts" setup>
import {useAttrs} from "vue";

const props = withDefaults(defineProps<{count: number}>(), {
  count: 1
})
const attrs = useAttrs()
</script>

<style lang="scss" scoped>
.hotelStars {
  font-size: 2vw
}
</style>