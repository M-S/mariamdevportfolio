<script setup lang="ts">
import ProfilePicWindow from '@/components/ProfilePicWindow.vue';
import AboutMeWindow from '@/components/AboutMeWindow.vue';
import TechBlogsVue from '@/components/TechBlogs.vue';
</script>
<template>
  <div class="home">
    <div class="row-1">
      <ProfilePicWindow style="position: relative; z-index: 1;" />
      <AboutMeWindow style="position: relative; z-index: 2;" />
    </div>
    <div class="row-2">
      <TechBlogsVue />
    </div>
  </div>
</template>

<style scoped>
.row-1 {
  background-color: antiquewhite;
  border-bottom: var(--color-text);
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
  }

  .row-1,
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    justify-items: center;
    vertical-align: middle;
    background: var(--color-background);
  }

  .row-2 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
