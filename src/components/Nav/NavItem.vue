<template>
  <div class="nav__item"
       @click="$router.push(link)"
  >{{inner}}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  inner: string
  link?: string
}
const props = withDefaults(defineProps<Props>(), {
  link: "/"
})
</script>

<style scoped lang="scss">
.nav__item {
  margin: 0 1vw;
  min-width: 15vw;
  text-align: center;
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    color: var(--my-gray);
  }
}
</style>