<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="main-menu">
        <RouterLink to="/">
          <svg class="icon">
            <use xlink:href="./assets/sprites/solid.svg#house"></use>
          </svg>
          Home
        </RouterLink>
      </div>
      <div class="sub-menu">
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
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
  background-color: #ff80b4;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  padding: 4px;
}

.navbar a:hover {
  color: #000;
  background-color: #e0d2ef;
}

.navbar a.active {
  color: #000;
}
</style>
