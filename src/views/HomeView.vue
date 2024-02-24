<script setup lang="ts">
import ProfilePicWindow from '@/components/ProfilePicWindow.vue';
import AboutMeWindow from '@/components/AboutMeWindow.vue';
import TechBlogsVue from '@/components/TechBlogs.vue';
</script>
<template>
  <div class="home">
    <div class="row-1">
      <ProfilePicWindow />
      <AboutMeWindow />
    </div>
    <div class="row-2">
      <TechBlogsVue />
    </div>
  </div>
  <div>
    <a href="https://www.flaticon.com/free-stickers/coding" title="coding stickers">Coding stickers created by Stickers -
      Flaticon</a>
  </div>
</template>

<style scoped>
.row-1 {
  border-bottom: var(--color-text);
}
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
  }
  .row-1 {
    background-image: url('/coding.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center-bottom;
  }

  .row-1,
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    justify-items: center;
    vertical-align: middle;
  }

  .row-2 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
