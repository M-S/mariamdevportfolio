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
    <base-window-frame title="Mariam's Blogs ✍🏼" color="green" size="medium" height="675px">
      <div class="blog-content">
        <BaseImageFrame
          :imageSrc="feedItems?.[itemSelected]?.cover_image"
          width="400px"
          height="200px"
          :altText="feedItems?.[itemSelected]?.title"
        />
        <div style="padding: 20px">
          <a class="blog-title" :href="feedItems?.[itemSelected]?.url" target="_blank">{{
            feedItems?.[itemSelected]?.title
          }}</a>
          <p>{{ feedItems?.[itemSelected]?.description }}</p>
        </div>
        <div class="blog-nav">
          <button :disabled="!prevPossible" @click="showItem()">
            <svg v-if="prevPossible" class="icon">
              <use xlink:href="../assets/sprites/solid.svg#chevron-left"></use>
            </svg>
            <span>{{ prevPossible ? 'Prev' : 'Start' }}</span>
          </button>
          <div class="blog-count">{{ itemSelected + 1 }} / {{ feedItems.length }}</div>
          <button :disabled="!nextPossible" @click="showItem('next')">
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
  text-align: center;
  height: 93%;
  .blog-title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
  }
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
