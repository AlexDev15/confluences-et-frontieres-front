import type { MultilingualContent, PaginationParams } from './api';

export type ArticleType = 'event' | 'production';

export type ArticleSortOption = 'recent' | 'scheduled' | 'oldest';

export interface FileItem {
  file: string;
  filename: string;
  size?: number;
  mimeType?: string;
}

export type ArticleContent =
  | { type: 'paragraph'; content: MultilingualContent }
  | { type: 'title'; content: MultilingualContent; level: 1 | 2 | 3 | 4 | 5 | 6 }
  | { type: 'image'; content: string; alt?: MultilingualContent; caption?: MultilingualContent }
  | { type: 'file'; content: FileItem[] }
  | { type: 'video'; content: string; platform?: 'youtube' | 'vimeo' | 'native'; thumbnail?: string };

export interface Article {
  _id: string;
  type: ArticleType;
  image: string;
  title: MultilingualContent;
  description: MultilingualContent;
  scheduledAt?: string;
  content: ArticleContent[];
  createdAt: string;
  updatedAt: string;
}

export interface ArticlesQueryParams extends PaginationParams {
  type?: ArticleType;
  search?: string;
  lang?: string;
  sort?: ArticleSortOption;
}

export type CreateArticleDto = Omit<Article, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdateArticleDto = Partial<CreateArticleDto>;
