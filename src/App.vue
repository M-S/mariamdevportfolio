<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import BurgerMenuDropDown from '@/components/BurgerMenuDropDown.vue'
import CookieConsent from '@/components/CookieConsent.vue'
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
  <CookieConsent />
</template>

<style scoped>
header {
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
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
  font-weight: 700;
  font-size: 1.125rem;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  letter-spacing: -0.02em;
}

.home-button a:hover {
  background: var(--color-background-mute);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.burger-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.burger-menu:hover {
  background: var(--color-background-mute);
  transform: scale(1.05);
}

.burger-icon {
  width: 24px;
  height: 24px;
  filter: invert(var(--icon-invert, 0));
  transition: transform var(--transition-fast);
}

.burger-menu:hover .burger-icon {
  transform: scale(1.1);
}

.close-icon {
  width: 18px;
  height: 18px;
  filter: invert(var(--icon-invert, 0));
  transition: transform var(--transition-fast);
}

.burger-menu:hover .close-icon {
  transform: scale(1.1);
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
