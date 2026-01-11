<script setup lang="ts">
import BaseImageFrame from '@/components/BaseImageFrame.vue'
import { useTechBlogsStore } from '@/stores/techBlogs'
import { onMounted, ref } from 'vue'
const { blogs, fetchBlogs } = useTechBlogsStore()

const feedItems = ref(blogs);

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
  <h1>Tech Blogs</h1>
  <div v-if="feedItems.length" class="feeds-container">
    <div class="feed-item" v-for="feedItem in feedItems" :key="feedItem.id">
      <base-image-frame
        :image-src="feedItem.cover_image"
        :alt-text="feedItem.title"
        width="250px"
        height="150px"
      />
      <h3 class="feed-item-title">{{ feedItem.title }}</h3>
      <small>{{ feedItem.readable_publish_date }}</small>
      <small class="feed-item-tags"
        ><span v-for="(tag, i) in feedItem.tag_list" :key="i">
          {{ tag }} {{ i === feedItem.tag_list.length - 1 ? `` : ` | ` }}
        </span></small
      >
      <a :href="feedItem.url" target="_blank">Read</a>
    </div>
  </div>
  <hr />
</template>

<style scoped>
.feeds-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feed-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-border);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.feed-item-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

a {
  color: var(--mp-blue);
  font-weight: bold;
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
