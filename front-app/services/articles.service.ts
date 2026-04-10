import { createServerClient, buildQueryString } from './client';
import type {
  Article,
  ArticlesQueryParams,
  CreateArticleDto,
  UpdateArticleDto,
} from './types';
import type { PaginatedResponse } from './types';

export async function getArticles(
  params?: ArticlesQueryParams,
  lang?: string,
): Promise<PaginatedResponse<'articles', Article>> {
  const client = createServerClient(lang);
  return client.get<PaginatedResponse<'articles', Article>>(
    `/articles${buildQueryString(params)}`,
  );
}

export async function getArticle(id: string, lang?: string): Promise<Article> {
  const client = createServerClient(lang);
  return client.get<Article>(`/articles/${id}`);
}

export async function createArticle(
  dto: CreateArticleDto,
  lang?: string,
): Promise<Article> {
  const client = createServerClient(lang);
  return client.post<Article>('/articles', dto);
}

export async function updateArticle(
  id: string,
  dto: UpdateArticleDto,
  lang?: string,
): Promise<Article> {
  const client = createServerClient(lang);
  return client.patch<Article>(`/articles/${id}`, dto);
}

export async function deleteArticle(id: string, lang?: string): Promise<void> {
  const client = createServerClient(lang);
  return client.delete<void>(`/articles/${id}`);
}
