<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menuItems = [
  {
    label: 'Blogs',
    link: '/blogs'
  },
  {
    label: 'Speaking Events',
    link: '/speaking-events'
  },
  {
    label: 'About Me',
    link: '/about'
  }
]

interface Props {
  isOpen: boolean
}

defineProps<Props>()
</script>

<template>
  <transition name="menu-slide">
    <nav v-if="isOpen" class="burger-menu-wrapper">
      <ul class="menu-list">
        <li v-for="menuItem in menuItems" :key="menuItem.link">
          <router-link :to="menuItem.link" class="menu-link">
            {{ menuItem.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<style scoped>
.burger-menu-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 50;
  box-shadow: var(--shadow-md);
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.menu-list li {
  border-bottom: 1px solid var(--color-border);
}

.menu-list li:last-child {
  border-bottom: none;
}

.menu-link {
  display: block;
  padding: var(--spacing-lg) var(--spacing-xl);
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.menu-link:hover {
  background: var(--color-background-mute);
  color: var(--color-primary);
  padding-left: calc(var(--spacing-xl) + 8px);
}

.menu-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
  background: var(--color-background-mute);
}

/* Transition animations */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all var(--transition-base);
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
