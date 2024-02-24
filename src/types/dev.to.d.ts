export interface DevToArticleMeta {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: string;
    public_reactions_count: string;
    collection_id?: number;
    published_timestamp: string;
    positive_reactions_count: string;
    cover_image: string;
    social_image: string;
    tag_list: Array<string>;
  }
  export interface DevToArticle extends DevToArticleMeta {
    body_html: string;
    body_markdown: string;
  }