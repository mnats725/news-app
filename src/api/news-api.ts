import { httpNewsClient } from './client';
import { NEWS_API_KEY, DEFAULT_COUNTRY } from '../constants';
import type {
  TopHeadlinesResponse,
  HeadlinesParams,
} from '../types/news-api.types';

const buildCategoryAndQuery = (
  searchQuery?: string,
  uiCategory?: HeadlinesParams['uiCategory'],
) => {
  if (uiCategory === 'politics') {
    return {
      category: undefined as undefined,
      query: [searchQuery, 'politics'].filter(Boolean).join(' '),
    };
  }
  return { category: uiCategory, query: searchQuery };
};

export const getTopHeadlines = async ({
  page,
  pageSize,
  searchQuery,
  uiCategory,
  country = DEFAULT_COUNTRY,
}: HeadlinesParams): Promise<TopHeadlinesResponse> => {
  if (!NEWS_API_KEY) throw new Error('NEWS_API_KEY is empty');

  const { category, query } = buildCategoryAndQuery(searchQuery, uiCategory);

  const { data } = await httpNewsClient.get<TopHeadlinesResponse>(
    '/top-headlines',
    {
      params: {
        apiKey: NEWS_API_KEY,
        country,
        page,
        pageSize,
        category,
        q: query || undefined,
      },
    },
  );

  // быстрый лог, чтобы увидеть, что реально приходит
  console.log(
    '[NewsAPI] page=',
    page,
    'size=',
    pageSize,
    'articles=',
    data?.articles?.length,
    'status=',
    data?.status,
  );

  if (data.status === 'error') throw new Error(data.message || 'NewsAPI error');
  return data;
};
