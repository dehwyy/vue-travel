<template>
  <div>
    <label for="min-range"><slot></slot>: {{Number(newVal).toFixed() + (plusText ? plusText : '')}}</label>
    <input id="min-range" type="range" :value="newVal" :min="min" :max="max" step="any" @input="valueChange" list="listOfValues"/>
    <datalist v-if="valuesList && valuesList.length > 0" id="listOfValues">
      <option v-for="(item, index) in valuesList" :value="item">
          item
      </option>
    </datalist>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRef} from "vue";
export default defineComponent({
  props: {
    value: [Number, String],
    min: [Number, String],
    max: [Number, String],
    plusText: String,
    valuesList: Array
  },
  emits: ["update:value"],
  setup(props) {
    console.log(props.valuesList)
    const newVal = toRef(props, "value")
    return {
      newVal
    }
  },
  methods: {
    valueChange(e: Event) {
      const value = (e.target as HTMLInputElement)?.value
      this.$emit("update:value", value)
    }
  }
})
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  font-size: 2.5vh;
}
input {
  width: 80%;

}
input[type=range]{
  -webkit-appearance: none;
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