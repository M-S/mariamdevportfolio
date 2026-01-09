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
        <RouterLink to="/speaking-events">Speaking Events</RouterLink>&nbsp;|&nbsp;
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
  background-color: var(--mp-pink);
}

.navbar a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  cursor: pointer;
  padding: 4px;
}

.navbar a:hover {
  color: var(--mp-black);
  background-color: var(--mp-purple-light);
}

.navbar a.active {
  color: var(--mp-black);
}
</style>
