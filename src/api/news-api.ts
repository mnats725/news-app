import { httpNewsClient } from './client';

import { buildCategoryAndQuery } from '../utils/build-category-and-query.utils';

import { NEWS_API_KEY, DEFAULT_COUNTRY } from '../constants';

import type {
  TopHeadlinesResponse,
  HeadlinesParams,
} from '../types/news-api.types';

export const getTopHeadlines = async ({
  page,
  pageSize,
  searchQuery,
  uiCategory,
  country = DEFAULT_COUNTRY,
}: HeadlinesParams): Promise<TopHeadlinesResponse> => {
  const { category, query: finalQuery } = buildCategoryAndQuery(
    searchQuery,
    uiCategory,
  );

  const { data } = await httpNewsClient.get<TopHeadlinesResponse>(
    '/top-headlines',
    {
      params: {
        apiKey: NEWS_API_KEY,
        country,
        page,
        pageSize,
        category,
        q: finalQuery || undefined,
      },
    },
  );

  if (data.status === 'error') throw new Error(data.message || 'NewsAPI error');

  return data;
};
