<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import BurgerMenuDropDown from '@/components/BurgerMenuDropDown.vue';
import { ref } from 'vue';
const isBurgerMenuOpen = ref(false);
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="burger-menu" @click="isBurgerMenuOpen = !isBurgerMenuOpen">
        <img v-if="!isBurgerMenuOpen" src="./assets/icons/burger-bar.png" alt="menu" height="20px" />
        <img v-else src="./assets/icons/close.png" alt="close" height="16px" />
      </div>
      <div class="home-button">
        <RouterLink to="/">
          <svg class="icon no-darkscheme">
            <use xlink:href="./assets/sprites/solid.svg#house"></use>
          </svg>
          Home
        </RouterLink>
      </div>
    </nav>
    <burger-menu-drop-down :is-open="isBurgerMenuOpen" />
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid var(--color-text);
  background-color: var(--mp-pink);
}

.home-button {
  display: flex;
  align-items: center;
  color: var(--mp-black);
  cursor: pointer;

  a {
    text-decoration: none;
    font-weight: bold;
    padding: 4px;
    color: var(--mp-black);
    :hover {
      background-color: var(--mp-purple-light);
    }
  }
}

.burger-menu {
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
}
</style>
