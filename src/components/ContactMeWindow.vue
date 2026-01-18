<script setup lang="ts">
import BaseWindowFrame from './BaseWindowFrame.vue'
</script>
<template>
  <base-window-frame
    title="Get in Touch"
    subtitle="Connect with me"
    variant="elevated"
    color="primary"
    padding="lg"
  >
    <div class="contact-links">
      <a href="mailto:gigabit.02shuffle@icloud.com" class="contact-link" title="Send me an email">
        <img src="/email.png" alt="Email" class="contact-icon" />
        <span class="contact-label">Email</span>
      </a>
      <a href="https://www.linkedin.com/in/mariam-reba-alexander-2231a2119/" target="_blank" class="contact-link" title="Connect on LinkedIn">
        <img src="/linkedin.png" alt="LinkedIn" class="contact-icon" />
        <span class="contact-label">LinkedIn</span>
      </a>
    </div>
  </base-window-frame>
</template>
<style scoped>
.contact-links {
  display: flex;
  gap: var(--spacing-xl);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-base);
  flex: 1;
  min-width: 120px;
}

.contact-link:hover {
  border-color: var(--color-primary);
  background: var(--color-background-mute);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform var(--transition-base);
}

.contact-link:hover .contact-icon {
  transform: scale(1.1);
}

.contact-label {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-heading);
}

@media (max-width: 640px) {
  .contact-links {
    gap: var(--spacing-lg);
  }

  .contact-icon {
    width: 64px;
    height: 64px;
  }

  .contact-label {
    font-size: 0.9375rem;
  }
}
</style>