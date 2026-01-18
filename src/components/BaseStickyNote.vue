<script setup lang="ts">
import { defineProps } from 'vue'

type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface Props {
  variant?: AlertVariant
  title?: string
  closeable?: boolean
}

defineProps<Props>()
</script>
<template>
  <div class="alert" :class="`alert-${variant}`" role="alert">
    <div class="alert-header">
      <span v-if="title" class="alert-title">{{ title }}</span>
    </div>
    <div class="alert-content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.alert {
  border-radius: var(--radius-lg);
  border-left: 4px solid;
  padding: var(--spacing-lg);
  background-color: var(--color-background-soft);
  transition: all var(--transition-base);
}

.alert-header {
  margin-bottom: var(--spacing-md);
}

.alert-title {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
}

.alert-content {
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Variant styles */
.alert-info {
  border-left-color: var(--mp-blue);
  background-color: rgba(14, 165, 233, 0.05);
  color: var(--mp-blue);
}

.alert-info .alert-title {
  color: var(--mp-blue);
}

.alert-success {
  border-left-color: var(--mp-green);
  background-color: rgba(16, 185, 129, 0.05);
  color: var(--mp-green);
}

.alert-success .alert-title {
  color: var(--mp-green);
}

.alert-warning {
  border-left-color: var(--mp-yellow);
  background-color: rgba(234, 179, 8, 0.05);
  color: #92400e;
}

.alert-warning .alert-title {
  color: #92400e;
}

.alert-error {
  border-left-color: var(--mp-red);
  background-color: rgba(239, 68, 68, 0.05);
  color: var(--mp-red);
}

.alert-error .alert-title {
  color: var(--mp-red);
}

@media (prefers-color-scheme: dark) {
  .alert-warning {
    color: #fbbf24;
  }

  .alert-warning .alert-title {
    color: #fbbf24;
  }
}

@media (max-width: 640px) {
  .alert {
    padding: var(--spacing-md);
  }

  .alert-title {
    font-size: 0.9375rem;
  }

  .alert-content {
    font-size: 0.875rem;
  }
}
</style>