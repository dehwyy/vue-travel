<template>
  <nav class="nav">
    <div class="nav__side">
      <div class="nav__logo"
           @click="$router.push('/info')"
            ><img :src="cs.logoSrc" />
      </div>
      <NavItem :inner="cs.hot"/>
      <NavItem :inner="cs.main" />
    </div>
    <div class="nav__side">
      <div v-if="isQueryActive"
           class="nav__query"
            ><input type="text"
                    @input="navQuery.setQuery"
                    :value="navQuery.query"/>
      </div>
      <div class="nav__queryIcon"
           @click="setQueryActive"
            ><SearchIcon />
      </div>
      <NavItem :inner="cs.profile" />
	  </div>
  </nav>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import NavItem from "./Nav/NavItem.vue"
import {useNav} from "../Pinia/NavStore";
const navQuery = useNav()
const cs = navQuery.constants
const isQueryActive = ref(false)
const setQueryActive = () => {
  isQueryActive.value = !isQueryActive.value
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 1vh;
  background-color: var(--my-green);
  color: white;
  &__side {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 7vw;
    height: 7vw;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &__query {
    width: 20vw;

  }
  &__queryIcon {
    margin: 0 5vw 0 2vw;
    & i {
      top: 2.5vh;
    }
  }
}
</style>
