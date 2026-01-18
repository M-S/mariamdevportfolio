<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  variant?: 'default' | 'elevated' | 'outlined'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  padding?: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  variant: 'elevated',
  color: 'primary',
  padding: 'md',
  rounded: 'lg'
})

const getPaddingClass = () => {
  const map = { sm: 'p-3', md: 'p-6', lg: 'p-8' }
  return map[props.padding]
}

const getRadiusClass = () => {
  const map = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg' }
  return map[props.rounded]
}
</script>
<template>
  <div class="card" :class="[`card-${variant}`, `card-${color}`, getRadiusClass(), getPaddingClass()]">
    <div v-if="title || subtitle" class="card-header">
      <div>
        <h3 v-if="title" class="card-title">{{ title }}</h3>
        <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
      </div>
      <slot name="header-action" />
    </div>
    <div class="card-content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style scoped>
.card {
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

/* Variant styles */
.card-default {
  border: 1px solid var(--color-border);
}

.card-elevated {
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.card-outlined {
  border: 2px solid var(--color-border);
}

.card:hover.card-elevated {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
}

/* Color variants - accent top bars with glow */
.card-primary {
  border-top: 3px solid var(--color-primary);
}

.card-primary:hover.card-elevated {
  box-shadow: 0 10px 30px -8px rgba(99, 102, 241, 0.25), var(--shadow-lg);
}

.card-secondary {
  border-top: 3px solid var(--color-secondary);
}

.card-secondary:hover.card-elevated {
  box-shadow: 0 10px 30px -8px rgba(6, 182, 212, 0.25), var(--shadow-lg);
}

.card-success {
  border-top: 3px solid var(--mp-green);
}

.card-success:hover.card-elevated {
  box-shadow: 0 10px 30px -8px rgba(16, 185, 129, 0.25), var(--shadow-lg);
}

.card-warning {
  border-top: 3px solid var(--mp-yellow);
}

.card-warning:hover.card-elevated {
  box-shadow: 0 10px 30px -8px rgba(234, 179, 8, 0.25), var(--shadow-lg);
}

.card-danger {
  border-top: 3px solid var(--mp-red);
}

.card-danger:hover.card-elevated {
  box-shadow: 0 10px 30px -8px rgba(239, 68, 68, 0.25), var(--shadow-lg);
}

/* Padding utilities */
.p-3 {
  padding: var(--spacing-md);
}

.p-6 {
  padding: var(--spacing-xl);
}

.p-8 {
  padding: var(--spacing-2xl);
}

/* Border radius utilities */
.rounded-sm {
  border-radius: var(--radius-sm);
}

.rounded-md {
  border-radius: var(--radius-md);
}

.rounded-lg {
  border-radius: var(--radius-xl);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.card-title {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.card-subtitle {
  margin: var(--spacing-sm) 0 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.card-footer {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 640px) {
  .card {
    border-radius: var(--radius-md);
  }

  .p-6 {
    padding: var(--spacing-lg);
  }

  .p-8 {
    padding: var(--spacing-xl);
  }
}
</style>
