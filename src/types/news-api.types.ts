export type Source = {
  id: string | null;
  name: string;
};

export type Article = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type TopHeadlinesResponse = {
  status: 'ok' | 'error';
  totalResults?: number;
  articles?: Article[];
  code?: string;
  message?: string;
};

export type UiCategory =
  | 'technology'
  | 'sports'
  | 'general'
  | 'health'
  | 'science'
  | 'entertainment';

export type HeadlinesParams = {
  page: number;
  pageSize: number;
  searchQuery?: string;
  uiCategory?: UiCategory;
  country?: string;
};
