<template>
  <div>
    <label for="min-range"><slot></slot>: {{getInputValue()}}</label>
    <input id="min-range"
           type="range"
           :min="minmax.min" :max="minmax.max"
           step="any"
           list="listOfValues"
           v-model="rangeValue" />
    <datalist v-if="valuesList && valuesList.length > 0" id="listOfValues">
      <option v-for="item in valuesList" :value="item">
        {{ item }}
      </option>
    </datalist>
  </div>
</template>

<script lang="ts" setup>
import {ref, useAttrs, watch} from "vue";
//@ts-ignore
import {useSidebarQuery} from "/src/Pinia/SidebarQuery.ts";
const props = defineProps<{
  minmax: {
    min: number, max: number, aText?: string
  },
  valuesList?: Array<number>,
}>()
//data
const attrs = useAttrs()
const sidebarQuery = useSidebarQuery()
const rangeValue = attrs["my-key"] === "maxNights" ?  ref(String(props.minmax.max)) : ref(String(props.minmax.min))
//watchers
watch(() => rangeValue, () => {
  sidebarQuery.updateRange(attrs["my-key"] as string, rangeValue.value)
})
//getters
const getInputValue = () =>{
  const char = props.minmax.aText ? props.minmax.aText : ''
  return Number(rangeValue.value).toFixed() + char
}
</script>
<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  font-size: 2.5vh;
}
input[type=range]{
  -webkit-appearance: none;
  width: 80%;
  background-color: var(--my-blue);
}

input[type=range]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #41b883;
  border: none;
  border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  background: #56799d;
  border: 0.5vh solid #41b883;
  margin-top: -1.1vh;
}
</style>