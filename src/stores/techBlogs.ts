import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DevToArticle, DevToArticleMeta } from '@/types/dev.to'
import { fetchArticles, getArticle } from '@/services/devTo.service'

export const useTechBlogsStore = defineStore('techBlogs', () => {
  const blogs = ref<DevToArticleMeta[] | []>([])
  const currentBlog = ref<DevToArticleMeta | null>(null)
  async function fetchBlogs() {
    blogs.value = await fetchArticles()
    return blogs.value
  }
  async function getBlogById(blogsArray: DevToArticleMeta[], id: string) {
    const blog = blogsArray.find((blog) => blog.id === Number(id))
    currentBlog.value = blog as DevToArticleMeta
  }

  return { blogs, currentBlog, fetchBlogs, getBlogById }
})
