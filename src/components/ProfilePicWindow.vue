<script setup lang="ts">
import { ref } from 'vue'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'

const isImageHovered = ref(false)
</script>
<template>
  <base-window-frame variant="outlined" color="primary" padding="sm" class="profile-card">
    <div class="profile-content">
      <div class="profile-image-container" @mouseenter="isImageHovered = true" @mouseleave="isImageHovered = false">
        <img src="/profile.png" alt="Mariam's profile picture" class="profile-image"
          :class="{ hovered: isImageHovered }" />
      </div>
      <p class="profile-text">Mariam Reba Alexander</p>
    </div>
  </base-window-frame>
</template>
<style scoped>
.profile-card {
  max-width: 100%;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  text-align: center;
}

.profile-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.profile-image.hovered {
  transform: scale(1.05);
}

.profile-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 640px) {
  .profile-image-container {
    width: 160px;
    height: 160px;
  }

  .profile-text {
    font-size: 1rem;
  }
}
</style>