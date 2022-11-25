<template>
  <div class="wrapper" @click="clearFocuses()">
      <Navbar class="nav" />
      <Sidebar />
      <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import {useInputFocus} from "./Pinia/AllSelectInputFocus";
const clearFocuses = useInputFocus().clearFocuses
</script>

<style lang="scss">
  :root {
    --main-fz: 3vh;
    --my-blue: #56799d;
    --my-green: #41b883;
    --my-yellow: #efc441;
    --my-gray: #d9d9d9;
  }
  body {
    overflow-x: hidden;
  }
  .wrapper {
    font-size: var(--main-fz);
    min-height: 100vh;
    background-color: rgba(33, 124, 166, 0.1);
    display: grid;
    grid-template: 10vh 1fr / 22vw 1fr;
  }
  .nav {
    grid-column: 1 / -1;
  }
  input[type=text] {
    color: #222222;
    width: 100%;
    font-size: var(--main-fz);
    background-color: white;
    border: none;
    padding: 1vh 2vh;
    border-radius: 1vh;
    transition: 0.2s linear;
    &:focus-visible {
      box-shadow: inset 0 0 0 0.2vh var(--my-green);
       outline: none;
     }
  }
</style>