<template>
	<div class="main">
      <div class="item" v-for="tour in SidebarQuery.filteredTours">
        <div class="item__img">
          <img :src="tour.url" />
        </div>
        <div class="item__info">
          <Info :hotelData="tour" />
          <div class="btn-wrapper">
            <button class="btn btn-primary">
              Reserve
            </button>
          </div>
        </div>
        <div class="item__desc">
          <tour-tag :tags="tour.tags"/>
        </div>
      </div>
  </div>
</template>
<script lang="ts" setup>
import Info from "./MainC/Info.vue";
import TourTag from "./MainC/TourTag.vue";
import {useSidebarQuery} from "../../Pinia/SidebarQuery";

const SidebarQuery = useSidebarQuery()
</script>
<style lang="scss" scoped>
	.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1vh 0 0 0;
    & .item {
      width: 60vw;
      background-color: white;
      display: grid;
      padding: 2vw;
      grid-template: 55vh 2fr / 1fr 20vw;
      margin-top: 1vh;
      margin-left: 2vw;
      &__img {
        width: 100%;
        height: 100%;
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom;
        }
      }
      &__info {
        grid-column: 2;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & .btn-wrapper {
          width: 100%;
          padding-left: 2vw;
          & button {
            font-size: 4vh;
            padding: 1vh 3vh;
            border-radius: 1vh;
            width: 100%;
            background-color: var(--my-blue);
            &:active {
              background-color: #56799d;
            }
          }
        }
      }
      &__desc {
        padding: 2vh 0 0 0;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        width: 100%;
      }
    }
  }
  //.star {
  //  position: relative;
  //  top: 0.5vh;
  //  & > i {
  //    font-size: 3vh!important;
  //  }
  //}
</style>