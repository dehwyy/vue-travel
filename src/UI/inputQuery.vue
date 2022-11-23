<template>
  <div class="sidebar-tags">
    <div>
      <i class="material-icons">search</i>
    </div>
    <input id="tagsInput" type="text" v-model="tagsQuery" @click.stop="setFocus(!isFocusedTags)" placeholder="Введите тэги..."/>
    <div v-show="isFocusedTags" class="tags">
      <div v-for="(tag, index) in filteredTags"
           :class="['tags__item', {'tags__item-selected': tagsSelected.includes(tags[tag]?.title)}]"
           @click.stop="toggleTag(tag) ">
        {{ tags[tag] ? tags[tag].title : filteredTags[0]}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {mapActions, mapState} from "vuex";
import {tagsList} from "../ts/intefaces";
export default defineComponent({
  setup() {
    const tagsQuery = ref('')
    const tagsSelected = ref([])
    return {
      tagsQuery, tagsSelected
    }
  },
  computed: {
    ...mapState({
      //@ts-ignore
      tags: state => state.toursX.tagsList,
      //@ts-ignore
      isFocusedTags: state => state.global.isFocusedTags
    }),
    filteredTags() {
      const arr = [] as Array<string>
      for (let [key, value] of Object.entries(this.tags as tagsList)) {
        if (key.includes(this.tagsQuery.toLowerCase())) {
          arr.push(key)
        }
      }
      if (!arr.length) arr.push("Ничего не найдено!")
      return arr
    }
  },
  methods: {
    ...mapActions( "global",[
      "setFocus"
    ]),
    toggleTag(key: keyof typeof this.tags) {
        const arr = this.tagsSelected as Array<Itags>
        const titleByKey = this.tags[key].title
        if (arr.includes(titleByKey)) {
          arr.splice(arr.indexOf(titleByKey), 1)
        } else {
          arr.push(titleByKey)
        }
    }
  },
  watch: {
    tagsQuery(newVal) {
      if (newVal) {
        this.setFocus(true)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.sidebar-tags {
  padding: 2vh 0 0 0;
  display: flex;
  margin-left: -2vh;
  flex-direction: column;
  align-items: center;
  & > div > i {
    position: relative;
    top: 5.8vh;
    left: -14.7vh;
    font-size: 4vh;
    color: #222222;
  }
  & input {
    width: 80%;
    font-size: 2.5vh;
    border-radius: 0;
    padding-left: 5vh
  }
  & .tags {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    &__item {
      font-size: 2.5vh;
      padding: 1vh 3vh;
      background-color: #d9d9d9;
      color: #222222;
      &:hover {
        cursor: pointer;
      }
      &-selected {
        // styles to selected items
        background-color: #41b883;
        color: white;
      }
    }
  }

}
</style>