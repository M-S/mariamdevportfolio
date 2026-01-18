<script setup lang="ts">
import BaseImageFrame from '@/components/BaseImageFrame.vue'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
import { useTechBlogsStore } from '@/stores/techBlogs'
import { onMounted, ref } from 'vue'

const { blogs, fetchBlogs } = useTechBlogsStore()

const feedItems = ref(blogs)

const onItemClick = (url: string) => {
  window.open(url, '_blank')
}

onMounted(async () => {
  try {
    if (!blogs.length) {
      feedItems.value = await fetchBlogs()
    }
  } catch (error: any) {
    console.error(error.message)
  }
})
</script>

<template>
  <div class="blogs-page">
    <div class="page-container">
      <div class="page-header">
        <h1>Articles & Insights</h1>
        <p class="subtitle">Sharing knowledge on frontend development, Vue.js, and cybersecurity</p>
      </div>

      <div v-if="feedItems.length" class="blogs-grid">
        <base-window-frame
          v-for="article in feedItems"
          :key="article.id"
          :title="article.title"
          :subtitle="article.readable_publish_date"
          variant="elevated"
          color="secondary"
          padding="lg"
          class="blog-card"
          @click="onItemClick(article.url)"
        >
          <BaseImageFrame
            :image-src="article.cover_image"
            :alt-text="article.title"
            width="100%"
            height="200px"
            class="blog-cover"
          />

          <div class="blog-content">
            <p class="blog-description">{{ article.description }}</p>

            <div class="blog-metadata">
              <div class="meta-item">
                <span class="meta-label">Comments</span>
                <span class="meta-value">{{ article.comments_count }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Reactions</span>
                <span class="meta-value">{{ article.public_reactions_count }}</span>
              </div>
            </div>

            <div class="blog-tags">
              <span v-for="(tag, i) in article.tag_list" :key="i" class="tag">
                {{ tag }}
              </span>
            </div>

            <button class="read-btn" @click.stop="onItemClick(article.url)">
              Read on Dev.to
              <svg class="icon" style="width: 16px; height: 16px; margin-left: 0.5rem">
                <use xlink:href="../assets/sprites/solid.svg#arrow-up-right"></use>
              </svg>
            </button>
          </div>
        </base-window-frame>
      </div>

      <div v-else class="loading-state">
        <p>Loading articles...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blogs-page {
  min-height: 100vh;
  background: var(--color-background);
  padding: var(--spacing-2xl) var(--spacing-xl);
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0 0 var(--spacing-md) 0;
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.blog-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all var(--transition-base);
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.blog-cover {
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
}

.blog-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex-grow: 1;
}

.blog-description {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-metadata {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--color-background-soft);
  border-radius: var(--radius-md);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-secondary);
  font-weight: 600;
}

.meta-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
}

.blog-tags {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 4px 10px;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.read-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.read-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
}

.read-btn:active {
  transform: translateY(0);
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .blogs-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .blogs-page {
    padding: var(--spacing-xl);
  }

  .page-header h1 {
    font-size: 1.875rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .blog-metadata {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
