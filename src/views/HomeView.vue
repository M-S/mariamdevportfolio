<script setup lang="ts">
import WindowFrame from '@/components/WindowFrame.vue';
</script>
<template>
  <div class="home">
    <window-frame title="Home">
      <p>Welcome to the home page!</p>
    </window-frame>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
