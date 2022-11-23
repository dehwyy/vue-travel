<template>
	<div class="sidebar" @click="setFocus(false)">
		<div class="wrapper-sidebar">
        <div class="sidebar-country">
          <label for="countryInput" class="country__text">
            Страна:
          </label>
          <div class="country__input">
            <input type="text" id="countryInput" v-model="whatCountry" placeholder="Введите страну"/>
          </div>
          <div>
            <i class="material-icons">search</i>
          </div>
        </div>
        <div style="font-size: 2.5vh">Количество звезд:</div>
        <div class="sidebar-stars" v-for="(numb, index) in 5">
            <input-box :numb="index + 1" v-model:list="checkedList"/>
        </div>
        <div class="sidebar-ranges">
          <input-range :max="maxOverallNights" :min="minOverallNights" v-model:value="minNights">Минимальное кол-во ночей</input-range>
          <input-range :max="maxOverallNights" :min="minOverallNights" v-model:value="maxNights">Максимальное кол-во ночей</input-range>
          <input-range :values-list="moneyList" plusText="$" :max="maxMoney" :min="minMoney" v-model:value="moneyLimit">Бюджет</input-range>
        </div>
        <input-query />
        <div class="sidebar-btn">
          <button>Поиск</button>
        </div>
    </div>
	</div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import InputBox from "./content/MainC/InputBox.vue"
import InputRange from "./content/MainC/InputRange.vue";
import {mapActions, mapState} from "vuex";
import {tagsList} from "../ts/intefaces";
import InputQuery from "../UI/inputQuery.vue";
interface Itags {
  title: string
  link: string
}
export default defineComponent({
  components: {
    InputQuery,
      InputBox, InputRange
  },
  setup() {
    const whatCountry = ref('')
    const minOverallNights = 0
    const maxOverallNights = 14
    const maxMoney = 9871
    const minMoney = 414
    const tagsQuery = ref('')
    const tagsSelected = ref([])
    return {
      whatCountry, minOverallNights, maxOverallNights,
      maxMoney, minMoney,
      tagsQuery, tagsSelected,
    }
  },
  data() {
    return {
      checkedList: [false, false, false, false, false],
      minNights: this.minOverallNights,
      maxNights: this.maxOverallNights,
      moneyLimit: this.maxMoney,
      moneyList: [851, 1989, 3950, 5835],

    }
  },
  methods: {
    ...mapActions("global",[
        "setFocus"
    ])
  }
})
</script>
<style scoped lang="scss">
	.sidebar {
		box-shadow: 1vh 0 var(--my-green)!important;
    background-color: var(--my-yellow);
    align-self: flex-start;
    min-height: 1500px;
    color: white;
    font-size: 2vh;
	}
  .wrapper-sidebar {
    padding: 3vh 0 1vh 1vh;
    background-color: var(--my-blue);
    height: content-box;
    display: flex;
    flex-direction: column;
  }
  .sidebar-country {
    & > div > i {
      position: relative;
      bottom: 4.7vh;
      left: 0.6vh;
      font-size: 4vh;
      color: #222222;
    }
    & .country__text {
      font-size: 2.5vh;
      padding: 0 0 0.5vh 0.5vh;
    }
    & .country__input {
      width: 80%;
      & {
        input {
          padding-left: 5vh;
          font-size: 2.5vh;
        }
      }
    }
  }
  .sidebar-stars {
    margin: 0.7vh 0;
  }
  .sidebar-ranges {
    display: flex;
    flex-direction: column;
  }
  .sidebar-btn {
    margin: 0 auto;
    position: relative;
    left: -0.5vh;
    padding: 2vh 0;
    & > button {
      background-color: var(--my-green);
      color: white;
      padding: 1vh 10vh;
      border-radius: 1vh;
      border: none;
      font-size: 3vh;
    }
  }
</style>