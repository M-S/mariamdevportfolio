<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
import BaseImageFrame from '@/components/BaseImageFrame.vue'
import { onMounted } from 'vue'
import { useTechBlogsStore } from '@/stores/techBlogs'

const { fetchBlogs, blogs } = useTechBlogsStore()

const feedItems = ref(blogs)
const itemSelected = ref(0)
const prevPossible = computed(() => itemSelected.value > 0)
const nextPossible = computed(() => itemSelected.value < feedItems.value.length - 1)

const showItem = (action = 'prev') => {
  if (action === 'prev') {
    if (prevPossible.value) {
      itemSelected.value -= 1
    }
  } else {
    if (nextPossible.value) {
      itemSelected.value += 1
    }
  }
}

onMounted(async () => {
  try {
    if (!blogs.length) {
      feedItems.value = await fetchBlogs()
    }
  } catch (error: any) {
    console.error(error)
  }
})
</script>
<template>
  <div class="blog-section">
    <base-window-frame title="Latest Articles" subtitle="Insights from Dev.to" variant="elevated" color="success"
      padding="lg">
      <div class="blog-content">
        <BaseImageFrame :imageSrc="feedItems?.[itemSelected]?.cover_image" width="100%" height="250px"
          :altText="feedItems?.[itemSelected]?.title" class="blog-cover" />

        <div class="blog-text-content">
          <a :href="feedItems?.[itemSelected]?.url" target="_blank" class="blog-title">
            {{ feedItems?.[itemSelected]?.title }}
          </a>
          <p class="blog-description">{{ feedItems?.[itemSelected]?.description }}</p>
          <div class="blog-meta">
            <span class="tag">{{ feedItems?.[itemSelected]?.readable_publish_date }}</span>
            <span class="divider">•</span>
            <span class="tag">{{ feedItems?.[itemSelected]?.comments_count }} comments</span>
          </div>
        </div>

        <div class="blog-nav">
          <button :disabled="!prevPossible" class="nav-button" @click="showItem()">
            <svg v-if="prevPossible" class="icon">
              <use xlink:href="../assets/sprites/solid.svg#chevron-left"></use>
            </svg>
            <span>{{ prevPossible ? 'Previous' : 'Start' }}</span>
          </button>

          <div class="blog-count">
            <span class="count-text">{{ itemSelected + 1 }}</span>
            <span class="divider">/</span>
            <span class="count-text">{{ feedItems.length }}</span>
          </div>

          <button :disabled="!nextPossible" class="nav-button" @click="showItem('next')">
            <span>{{ nextPossible ? 'Next' : 'End' }}</span>
            <svg v-if="nextPossible" class="icon">
              <use xlink:href="../assets/sprites/solid.svg#chevron-right"></use>
            </svg>
          </button>
        </div>
      </div>
    </base-window-frame>
  </div>
</template>
<style scoped>
.blog-section {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.writing-image-container {
  display: flex;
  justify-content: center;
}

.writing-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.blog-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.blog-cover {
  border-radius: var(--radius-md);
  overflow: hidden;
}

.blog-text-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.blog-title {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--transition-fast);
}

.blog-title:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.blog-title::after {
  content: ' ↗';
  margin-left: 0.25rem;
}

.blog-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  background: var(--color-background-mute);
  border-radius: var(--radius-sm);
}

.divider {
  color: var(--color-border);
}

.blog-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.nav-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-primary);
  color: white;
  border: none;
  font-weight: 600;
  flex: 1;
  justify-content: center;
}

.nav-button:hover:not(:disabled) {
  background: var(--color-primary-hover);
  color: white;
  transform: translateY(-2px);
}

.nav-button:disabled {
  background: var(--color-background-mute);
  color: var(--color-text-secondary);
  opacity: 0.6;
  cursor: not-allowed;
}

.blog-count {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
}

.count-text {
  font-size: 1.125rem;
}

@media (max-width: 640px) {
  .blog-section {
    max-width: 100%;
  }

  .blog-title {
    font-size: 1.125rem;
    -webkit-line-clamp: 2;
  }

  .blog-description {
    font-size: 0.875rem;
    -webkit-line-clamp: 2;
  }

  .nav-button {
    padding: var(--spacing-md);
    font-size: 0.875rem;
  }

  .nav-button span {
    display: none;
  }

  .nav-button:first-child span,
  .nav-button:last-child span {
    display: inline;
  }
}
</style>
