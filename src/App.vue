<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import BurgerMenuDropDown from '@/components/BurgerMenuDropDown.vue'
import { ref, watch } from 'vue'
const isBurgerMenuOpen = ref(false);
const router = useRouter();

// Close burger menu when route changes
watch(() => router.currentRoute.value, () => {
  isBurgerMenuOpen.value = false
})
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="burger-menu" @click="isBurgerMenuOpen = !isBurgerMenuOpen">
        <img v-if="!isBurgerMenuOpen" src="./assets/icons/burger-bar.png" alt="menu" class="burger-icon" />
        <img v-else src="./assets/icons/close.png" alt="close" class="close-icon" />
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
    <burger-menu-drop-down :is-open="isBurgerMenuOpen" @close="isBurgerMenuOpen = false" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.home-button a {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.home-button a:hover {
  background: var(--color-background-mute);
  color: var(--color-primary);
}

.burger-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.burger-menu:hover {
  background: var(--color-background-mute);
}

.burger-icon {
  width: 24px;
  height: 24px;
  filter: invert(var(--icon-invert, 0));
}

.close-icon {
  width: 18px;
  height: 18px;
  filter: invert(var(--icon-invert, 0));
}

@media (max-width: 768px) {

  .navbar {
    padding: var(--spacing-md) var(--spacing-lg);
  }
}

:deep(.icon) {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
