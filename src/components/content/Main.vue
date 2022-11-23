<template>
	<div class="main">
    <div class="main__item" v-for="(item, index) in tours">
      <div class="main__item-content">
        <div class="main__item-content-img">
            <img :src="item.url" />
        </div>
        <div class="main__item-content-info">
              <Info :hotelInfo="item" />
              <div class="btn-wrapper">
                <button class="btn btn-primary">
                  Reserve
                </button>
              </div>
        </div>
        <div class="main__item-content-desc">
          <div class="main__item-content-desc-inner" v-for="tag in item.tags" @click="$router.push(tagsList[tag].link)">
            {{tagsList[tag].title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {mapState} from "vuex";
import Info from "./MainC/Info.vue";
import {tagsList} from "../../ts/intefaces";
export default {
  setup() {
    const tagsList: tagsList  = {
      japan: {link: "/japan", title: "JAPAN"},
      maldives: {link: "/maldives", title: "MALDIVES"},
      verified: {link: "/verified", title: "VERIFIED"},
      premium: {link: "/premium", title: "PREMIUM"},
      wifi: {link: "/wifi", title: "WI-FI"},
      bath: {link: "/bath", title: "ABOBBOBBOA"},
      cityView: {link: "/cityview", title: "CITY VIEW"}
    }
    return {
      tagsList
    }
  },
  components: {
    Info
  },
	computed: {
    ...mapState({
      //@ts-ignore
      tours: state => state.toursX.tours
    })
  },
}
</script>
<style lang="scss">
	.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1vh 0 0 0;
    &__item {
       width: 75vw;
       &-content {
         background-color: white;
         display: grid;
         padding: 2vw;
         grid-template: 55vh 2fr / 1fr 20vw;
         width: 90%;
         margin: 1vh auto 0;
         &-img {
           width: 100%;
           height: 100%;
           & img {
             width: 100%;
             height: 100%;
             object-fit: cover;
             object-position: bottom;
           }
         }
         &-info {
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
               width: 100%;
               background-color: var(--my-blue);
               &:active {
                 background-color: #56799d;
               }
             }
           }
           & .info-wrapper {
             width: 90%;
             height: 100%;
             margin: 0 auto;
             & span {
               text-align: center;
               font-size: 3vh;
             }
             & h4 {
               font-size: 3vh;
               text-align: center;
             }
           }
         }
         &-desc {
           padding: 2vh 0 0 0;
           display: flex;
           flex-grow: 1;
           flex-wrap: wrap;
           width: 60%;
           &-inner {
             flex-grow: 1;
             text-align: center;
             margin: 1vh 0.3vw 0;
             border-radius: 1vh;
             align-self: center;
             padding: 0.2vw 1vw;
             background-color: #d9d9d9;
             font-size: 3vh;
             &:hover {
               cursor: pointer;
             }
           }

         }
      }
     }
	}
  .star {
    position: relative;
    top: 0.5vh;
    & > i {
      font-size: 3vh!important;
    }
  }
</style>