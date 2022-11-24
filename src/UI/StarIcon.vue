<template>
  <span :style="attrs.style" v-for="num in count">
    <i class="material-icons" :style="fz">star</i></span>
</template>

<script lang="ts" setup>
import {useAttrs} from "vue";

const props = withDefaults(defineProps<{count: number, fz: {fontSize: string}}>(), {
  count: 1
})
const attrs = useAttrs()
</script>

<style lang="scss" scoped>

</style>