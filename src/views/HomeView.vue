<script setup lang="ts">
import ProfilePicWindow from '@/components/ProfilePicWindow.vue'
import AboutMeWindow from '@/components/AboutMeWindow.vue'
import TechBlogsVue from '@/components/TechBlogs.vue'
import ContactMeWindow from '@/components/ContactMeWindow.vue'
import CertificationsWindow from '@/components/CertificationsWindow.vue'
import StickyNote from '@/components/BaseStickyNote.vue'
</script>
<template>
  <div class="home">
    <div class="row-1">
      <ProfilePicWindow />
      <AboutMeWindow />
    </div>
    <div class="hide-mobile row-3">
      <CertificationsWindow />
    </div>
    <div id="contact-section" class="row-3">
      <ContactMeWindow />
      <img class="hide-mobile social-media" src="/social-media.png" alt="social media icons" width="200px" />
    </div>
    <div id="blog-section" class="hide-mobile row-2">
      <TechBlogsVue />
    </div>
  </div>
  <div class="credits">
    Credits:
    <a href="https://www.flaticon.com/free-stickers/coding" title="coding stickers"
      >Coding stickers created by Stickers - Flaticon</a
    >|
    <a href="https://www.flaticon.com/free-stickers/certificate" title="certificate stickers"
      >Certificate stickers created by Stickers - Flaticon</a
    >
    |
    <a href="https://www.flaticon.com/free-icons/menu" title="menu icons"
      >Menu icons created by Febrian Hidayat - Flaticon</a
    >|
    <a href="https://www.flaticon.com/free-icons/close" title="close icons"
      >Close icons created by ariefstudio - Flaticon</a
    >
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.row-1 {
  display: grid;
  gap: var(--spacing-xl);
  align-items: center;
}

.row-2,
.row-3 {
  display: grid;
  gap: var(--spacing-xl);
  width: 100%;
}

.badge-container {
  border-radius: var(--radius-lg);
}

.hide-mobile {
  display: none;
}

.social-media {
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .hide-mobile {
    display: block;
  }

  .row-1 {
    grid-template-columns: 1fr 1fr;
  }

  .row-3 {
    grid-template-columns: 2fr 1fr;
  }
}

@media (min-width: 1024px) {
  .home {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }

  .row-2 {
    grid-template-columns: 1fr;
  }
}

.credits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding: var(--spacing-xl) 0;
  border-top: 1px solid var(--color-border);
  margin-top: var(--spacing-xl);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-align: center;
}

.credits a {
  color: var(--color-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.credits a:hover {
  color: var(--color-primary-hover);
}

.credits a::after {
  content: '';
}

@media (max-width: 640px) {
  .home {
    padding: var(--spacing-xl);
    gap: var(--spacing-xl);
  }

  .row-1 {
    grid-template-columns: 1fr;
  }

  .row-3 {
    grid-template-columns: 1fr;
  }
}
</style>
