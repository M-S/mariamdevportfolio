import type { DevToArticle, DevToArticleMeta } from '@/types/dev.to'

// setup API endpoints and queries
const DEV_TO_USERNAME = 'ms_74'
const ARTICLES_API = 'https://dev.to/api/articles';

export const fetchArticles = async () => {
  // GET the endpoint
  const response = await fetch(ARTICLES_API + '?username=' + DEV_TO_USERNAME)
  const articles = await response.json()
  return articles as DevToArticleMeta[]
}

export const getArticle = async (slug: string) => {
  // build the API endpoint URL, `slug` is the `slug`
  //property of one of your articles,
  // e.g. "protecting-your-privacy-online-3bmc"
  const endpoint = `${ARTICLES_API}/${DEV_TO_USERNAME}/${slug}`
  const response = await fetch(endpoint)
  const article = await response.json()
  return article as DevToArticle
}
