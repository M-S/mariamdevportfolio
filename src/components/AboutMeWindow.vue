<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
import router from '@/router'
</script>
<template>
  <base-window-frame title="About Mariam" subtitle="Software Engineer & Tech Speaker" variant="elevated"
    color="secondary" padding="lg">
    <div class="about-content">
      <p class="bio-text">
        Software Engineer with passion for building scalable and secure web applications.
        <a href="https://sessionize.com/MariamReba/" target="_blank" class="bio-link">Tech conference speaker</a> and
        <a href="https://dev.to/ms_74" target="_blank" class="bio-link">tech blogger</a>.
      </p>
      <button class="read-more-btn" @click="router.push('/about')">
        Read Full Profile
        <svg class="icon" style="width: 16px; height: 16px; margin-left: 0.5rem">
          <use xlink:href="../assets/sprites/solid.svg#arrow-right"></use>
        </svg>
      </button>
    </div>
  </base-window-frame>
</template>
<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.bio-text {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--color-text);
}

.bio-link {
  color: var(--color-primary);
  font-weight: 600;
  transition: color var(--transition-fast);
}

.bio-link:hover {
  color: var(--color-primary-hover);
}

.bio-link::after {
  content: ' ↗';
  margin-left: 2px;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: white;
  border: none;
  font-weight: 600;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  width: fit-content;
  align-self: flex-start;
}

.read-more-btn:hover {
  background: var(--color-primary-hover);
  transform: translateX(4px);
}

.read-more-btn:active {
  transform: translateX(2px);
}

@media (max-width: 640px) {
  .bio-text {
    font-size: 1rem;
  }

  .read-more-btn {
    width: 100%;
    justify-content: center;
  }
}

.rotate:hover {
  transform: rotate(360deg);
}
</style>
