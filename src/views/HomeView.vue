<script setup lang="ts">
import ImageFrame from '@/components/ImageFrame.vue';
import WindowFrame from '@/components/WindowFrame.vue';
</script>
<template>
  <div class="home">
    <window-frame title="" size="small">
      <image-frame image-src="/profilePic.jpeg"></image-frame>
    </window-frame>
    <window-frame title="ABOUT" color="blue" size="medium">
      <p>Software Engineer working at Maersk, based in Copenhagen. Skilled in Vue, Cypress, and Jest with a passion for solving complex front-end problems, secure coding, testing, DevOps, data analytics, and automation. Tech conference speaker and tech blogger on dev.to platform.</p>
    </window-frame>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
  }
}
</style>
