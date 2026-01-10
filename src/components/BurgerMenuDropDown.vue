<script setup lang="ts">
import { RouterLink } from 'vue-router';
const menuItems = [
  {
    label: "Blogs",
    link: "/blogs"
  },
  {
    label: "Speaking Events",
    link: "/speaking-events"
  },
  // {
  //   label: "Contact",
  //   link: "/#contact-section"
  // },
  {
    label: "About Me",
    link: "/about"
  }
]
interface Props {
  isOpen: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="burger-menu-drop-down-wrapper" v-if="props.isOpen">
    <ul class="drop-down-menu">
        <router-link  v-for="menuItem in menuItems" :key="menuItem.link" :to="menuItem.link">
          <li>{{ menuItem.label }}</li></router-link>
    </ul>
  </div>
</template>

<style scoped>
ul.drop-down-menu {
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  background-color: var(--mp-pink);

  :hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: var(--mp-purple-light);
  }

  a {
    text-decoration: none;
    color: var(--mp-black);
  }

  li {
    list-style: none;
    border: 1px solid var(--color-text);
    border-top: none;
    padding: 4px 16px;
  }
}
</style>
