import type { HeadlinesParams } from '../types/news-api.types';

export const buildCategoryAndQuery = (
  searchQuery?: string,
  uiCategory?: HeadlinesParams['uiCategory'],
) => {
  if (uiCategory === 'politics') {
    return {
      category: undefined,
      query: [searchQuery, 'politics'].filter(Boolean).join(' '),
    };
  }
  return { category: uiCategory, query: searchQuery };
};
