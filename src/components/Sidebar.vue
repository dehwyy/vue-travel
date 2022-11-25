<template>
	<div class="sidebar">
		<div class="sidebar__wrapper">
        <country-search />
        <stars-selector />
        <sidebar-ranges />
        <input-select :tags="consts.tagsList" my-key="tags" placeholder="Введите тэги..."/>
        <div class="sidebar__btn">
          <button>Поиск</button>
        </div>
    </div>
	</div>
</template>

<script lang="ts" setup>
import CountrySearch from "./content/SidebarC/CountrySearch.vue";
import StarsSelector from "./content/SidebarC/StarsSelector.vue";
import SidebarRanges from "./content/SidebarC/Ranges/SidebarRanges.vue";
import InputSelect from "../UI/InputSelect.vue";
import {useConsts} from "../Pinia/Consts";

const consts = useConsts()
</script>
<style scoped lang="scss">
	.sidebar {
		box-shadow: 0 2vh 3vh 1vh var(--my-green)!important;
    align-self: flex-start;
    color: white;
    font-size: 2vh;
    margin: 2vh auto 0;
    border-radius: 1vh;

  }
  .sidebar__wrapper {
    padding: 3vh;
    border-radius: 1vh;
    background-color: var(--my-blue);
    height: content-box;
    display: flex;
    flex-direction: column;
  }

  .sidebar__btn {
    margin: 0 auto;
    position: relative;
    left: -0.5vh;
    padding: 2vh 0 6vh;
    & > button {
      background-color: var(--my-green);
      color: white;
      padding: 1vh 5vw;
      border-radius: 1vh;
      border: none;
      font-size: 3vh;
    }
  }
</style>