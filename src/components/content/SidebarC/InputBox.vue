<template>
  <div class="stars__star" >
    <div class="overflow">
      <label :class="['first-label', {'checked-box': list[numb- 1]}]" :for="'star' + numb" />
      <label :class="['first-two-label', {'first-two-label-checked': checked}]" :for="'star' + numb" />
    </div>
    <input :id="'star' + numb" type="checkbox" @input="updateList"/>
    <label class="second-label" :for="'star' + numb">
      <i class="material-icons" v-for="num in numb">star</i>
    </label>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  setup() {
    const checked = ref(false)
    return {
      checked
    }
  },
  props: {
    list: Array,
    numb: Number
  },
  methods: {
    updateList(event) {
      this.checked = !this.checked
      const newArr = [...this.list]
      newArr[this.numb - 1] = event.target.checked
      this.$emit("update:list", newArr)
    }
  },
}
</script>

<style scoped lang="scss">
.overflow {
  width: 6vh;
  height: 3vh;
}
.stars__star {
  display: flex;
  align-items: center;
  & input {
    visibility: hidden;
    width: 2vh;
    height: 2vh;
  }
  & .first-label {
    width: 6vh;
    height: 3vh;
    border-radius: 1vh;
    background-color: #41b883;
    position: absolute;
    &::after {
      content: '';
      width: 3vh;
      border-radius: 50%;
      transform: scale(1.2);
      height: 3vh;
      background-color: #56799d;
      z-index: 5;
      border: 0.5vh solid red;
      position: absolute;
      transition: 0.3s ease-in-out;
    }
  }
  .first-two-label {
    position: absolute;
    overflow: hidden;
    width: 6vh;
    height: 3vh;
    border-radius: 1vh;
    background-color: red;
    transition: 0s ease-in-out;
    transition-delay: 0.1s;
    &-checked {
      transform: translateX(5vw);
    }
  }
  .second-label {
    padding: 0 0 0 1vh;
    margin-left: -1vh;
    font-size: 0.2vh;
    user-select: none;
    z-index: 3;
    background-color: #56799d;
    width: 100%;
    & i {
      font-size: 3vh;
    }
  }
  .checked-box {
    background: var(--my-green);
    border-radius: 1vh;
    &::after {
      transition: 0.3s ease-in-out;
      transform: translateX(min(3vw, 3vh)) scale(1.2);
      border: 0.5vh solid #41b883;
    }
  }
}
</style>