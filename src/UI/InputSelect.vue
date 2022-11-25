<template>
  <div class="inputSelect">
    <div>
      <search-icon />
    </div>
    <input type="text" :placeholder="attrs.placeholder"
           v-model="inputValue"
          @click.stop="focuses.setFocus(myFocus); page = 0"
    />
    <div v-show="isFocused" class="tags">
      <div class="tags__top" @click.stop="page -= 1" v-if="page > 0">
        <div class="move-icon icon-flipped" />
      </div>
      <div class="tags__item" :class="{'tags__item-selected': isSelected(tag)}"
           v-for="tag in filteredTags"
           @click.stop="updateTags(myKey, tag)"
          >{{tags[tag].title}}
      </div>
      <div class="tags__bottom" @click.stop="page += 1" v-if="filteredTags.length === 5">
          <div class="move-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchIcon from "./SearchIcon.vue";
import {computed, ref, useAttrs} from "vue";
import {useSidebarQuery} from "../Pinia/SidebarQuery";
import {useInputFocus} from "../Pinia/AllSelectInputFocus";
//props
interface props {
  tags: {
    [key: string]: {
      title: string
      link?: string
    }
  }
}
const props = defineProps<props>()
//init
const attrs = useAttrs()
const sidebarQuery = useSidebarQuery()
const focuses = useInputFocus()
//data
const inputValue = ref('')
const page = ref(0)
const tagsList = Object.keys(props.tags)
const myKey = attrs['my-key'] as string + "Selected"
const myFocus = attrs['my-key'] as string + "Focus"
//getters
const isSelected = (tag: string) => {
  return (sidebarQuery[myKey]).includes(tag)
}
const filteredTags = computed(() => {
  return tagsList.filter(tag => tag.match(inputValue.value)).slice(5 * page.value, 5 * page.value + 5)
})
const slisedTags = computed(() => {
  return this
})
const isFocused = computed(() => {
  return focuses.focuses[myFocus as keyof typeof focuses.$state.focuses]
})
//actions
const updateTags = (key: string, tag: string) => {
  sidebarQuery.updateTags(key, tag)
}
</script>
<style scoped lang="scss">
.inputSelect {
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  & > div > i {
    position: relative;
    top: 5.8vh;
    left: 0.5vh;
    font-size: 4vh;
    color: #222222;
  }
  & input {
    width: 95%;
    font-size: 2.5vh;
    border-radius: 0;
    padding-left: 5vh
  }
  & .tags {
    display: grid;
    grid-template-columns: 1fr;
    width: 95%;
    position: relative;
    &__item {
      font-size: 2.5vh;
      padding: 1vh 3vh;
      background-color: #d9d9d9;
      word-break: break-word;
      color: #222222;
      text-align: center;
      user-select: none;
      transition: 0.2s ease;
      &:hover {
        cursor: pointer;
      }
      &-selected {
        // styles to selected items
        background-color: #41b883;
        color: white;
      }
    }
    &__bottom, &__top{
      height: 6vh;
      background-color: var(--my-gray);
      &:hover {
        cursor: pointer;
      }

    }
  }
}
.move-icon {
  position: relative;
  max-width: 16vw;
  height: 100%;
  margin: 0 auto;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 3vh;
    background-color: var(--my-blue);
    width: 13.8vh;
    height: 0.7vh;
  }
  &::before {
    left: 3.55vh;
    transform: rotateZ(15deg);
  }
  &::after {
    right: 3.55vh;
    transform: rotateZ(-15deg);
  }
}
.icon-flipped {
  transform: rotateZ(180deg);
}
</style>