<script setup lang="ts">
import ProfilePicWindow from '@/components/ProfilePicWindow.vue';
import AboutMeWindow from '@/components/AboutMeWindow.vue';
</script>
<template>
  <div class="home">
      <ProfilePicWindow/>
      <AboutMeWindow />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: top;
  }
}
</style>
