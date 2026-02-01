<script setup lang="ts">
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
</script>
<template>
  <base-window-frame title="Certifications & Badges" variant="elevated" color="success" padding="lg">
    <div>
      <div class="certifications-content">
        <div class="certifications-list">
          <a href="https://www.credly.com/badges/bb0d725c-4ef3-4844-a4e6-b82ddf7e0077/public_url" target="_blank"
            class="cert-item">
            <div class="cert-icon">🔐</div>
            <div class="cert-info">
              <h4 class="cert-name">ISC2 Certified in Cybersecurity</h4>
              <p class="cert-badge">(CC) Credential</p>
            </div>
            <svg class="icon" style="width: 20px; height: 20px">
              <use xlink:href="../assets/sprites/solid.svg#arrow-up-right"></use>
            </svg>
          </a>

          <a href="https://www.credly.com/badges/8f85ae5e-52f6-4a6c-ba3d-94720d544108/public_url" target="_blank"
            class="cert-item">
            <div class="cert-icon">🛡️</div>
            <div class="cert-info">
              <h4 class="cert-name">CompTIA Security+</h4>
              <p class="cert-badge">CE Certification</p>
            </div>
            <svg class="icon" style="width: 20px; height: 20px">
              <use xlink:href="../assets/sprites/solid.svg#arrow-up-right"></use>
            </svg>
          </a>

          <a href="https://www.credly.com/badges/19308c84-b5e7-4315-a13a-04e123be0e83" target="_blank"
            class="cert-item">
            <div class="cert-icon">☁️</div>
            <div class="cert-info">
              <h4 class="cert-name">Microsoft Certified</h4>
              <p class="cert-badge">Azure Fundamentals</p>
            </div>
            <svg class="icon" style="width: 20px; height: 20px">
              <use xlink:href="../assets/sprites/solid.svg#arrow-up-right"></use>
            </svg>
          </a>
          <div>
            <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4444453"
              style='border:none;width: 330px;height: 90px;'></iframe>
          </div>
        </div>
      </div>
      <p class="view-more-text">
        View other credentials on my
        <a href="https://www.linkedin.com/in/mariam-reba-alexander-2231a2119/" target="_blank"
          class="linkedin-link">LinkedIn profile</a>.
      </p>
    </div>

  </base-window-frame>
</template>
<style scoped>
.certifications-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.intro-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.certifications-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: var(--spacing-md);
}

.cert-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background-soft);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.cert-item:hover {
  border-color: var(--color-primary);
  background: var(--color-background-mute);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.cert-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.cert-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.cert-badge {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.cert-item:hover .cert-name {
  color: var(--color-primary);
}

.view-more-text {
  margin: 8px 0 0 0;
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  text-align: center;
}

.linkedin-link {
  color: var(--color-primary);
  font-weight: 600;
}

.linkedin-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .cert-item {
    padding: var(--spacing-md);
    gap: var(--spacing-md);
  }

  .cert-icon {
    font-size: 1.5rem;
  }

  .cert-name {
    font-size: 0.95rem;
  }

  .cert-badge {
    font-size: 0.8125rem;
  }
}
</style>