<template>
  <div class="navbar">
	<div class="navbar__item">
    <div class="logo" @click="$router.push('/info')">
        <img src="/src/imgs/logo1.png" />
    </div>
    <div class="item" @click="$router.push('/')">ГОРЯЧИЕ ПУТЕВКИ</div>
    <div class="item main" @click="$router.push('/')">MAIN</div>
	</div>
	<div class="navbar__item">
		<div v-if="isSearchActive" class="search">
			<input type="text"/>
		</div>
		<div class="searchNav" @click="setSearch">
      <SearchIcon />
		</div>
		<div class="item profile">
			PROFILE
		</div>
	</div>
</div>

</template>
<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "vuex";
import SearchIcon from "../UI/SearchIcon.vue";
export default defineComponent({
  components: {SearchIcon},
  data() {
    return {
      searchNav: "",
      isSearchActive: false,
    }
  },
  computed: {
    ...mapState({
      //@ts-ignore
      navLeft: state => state.navOptions.navLeft
    })
  },
	methods: {
		setSearch() {
		this.isSearchActive = !this.isSearchActive
	  },
  },
});
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 1vh;
  background-color: var(--my-green);
  color: white;
}

.navbar__item {
	display: flex;
	align-items: center;
}
.item {
  margin: 0 1vw;
  min-width: 15vw;
  text-align: center;
  transition: 0.5s ease;
  &:hover {
	cursor: pointer;
    color: rgb(206, 205, 205);
  }
}
.logo {
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

.main {
	background-color: var(--my-green);
  	&:hover {
    	cursor: pointer;
  	}
}
.search {
  width: 20vw;
}
.searchNav {
  padding: 0;
  margin: 0 0 0 2vw;
  & i {
	position: relative;
	top: 1vh;
	font-size: 5vh;
	&:hover {
		cursor: pointer;
		user-select: none
	}
  }
}
.profile {
  justify-self: self-end;
}
</style>
