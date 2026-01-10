<script setup lang="ts">
import { onMounted, ref, computed, type ComputedRef } from 'vue'
import { fetchArticles } from '@/services/devTo.service'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'
import type { DevToArticleMeta } from '@/types/dev.to'
import BaseImageFrame from '@/components/BaseImageFrame.vue'

const feedItems = ref<DevToArticleMeta[] | []>([])
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
    feedItems.value = await fetchArticles()
    console.log(feedItems.value)
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <div class="blog-section">
    <base-window-frame title="Mariam's Blogs ✍🏼" color="green" size="medium" height="auto">
      <div class="blog-content">
        <BaseImageFrame
          :imageSrc="feedItems?.[itemSelected]?.cover_image"
          width="400px"
          height="200px"
          :altText="feedItems?.[itemSelected]?.title"
        />
        <div style="padding: 20px">
          <a :href="feedItems?.[itemSelected]?.url" target="_blank">{{
            feedItems?.[itemSelected]?.title
          }}</a>
          <p>{{ feedItems?.[itemSelected]?.description }}</p>
        </div>
        <div class="blog-nav">
          <button :disabled="!prevPossible" @click="showItem()">
            <svg class="icon">
              <use xlink:href="../assets/sprites/solid.svg#chevron-left"></use>
            </svg>
            Previous
          </button>
          <div class="blog-count">{{ itemSelected + 1 }} / {{ feedItems.length }}</div>
          <button :disabled="!nextPossible" @click="showItem('next')">
            Next
            <svg class="icon">
              <use xlink:href="../assets/sprites/solid.svg#chevron-right"></use>
            </svg>
          </button>
        </div>
      </div>
    </base-window-frame>
  </div>
</template>
<style scoped>
button {
  align-self: center;
}

.blog-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-text);
  margin: 20px;
  overflow: hidden;
}

.blog-count {
  text-align: center;
  font-weight: bold;
  padding: 10px;
  width: fit-content;
  margin: 1.5em;
}

.blog-nav {
  display: flex;
  justify-content: space-between;
}

a {
  color: var(--mp-blue);
  font-weight: bold;
  font-size: 1.5em;
}

a:hover {
  color: var(--color-bg);
  cursor: pointer;
}

a::after {
  text-decoration: none;
  content: ' 🔗';
}
</style>
