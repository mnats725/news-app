import type { Article } from '../types/news-api.types';

export const keyFromArticle = (item: Article, index: number): string => {
  if (item.url) return item.url;

  return `${item.source?.name ?? 'src'}-${item.publishedAt}-${index}`;
};
