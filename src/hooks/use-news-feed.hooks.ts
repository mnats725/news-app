import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getTopHeadlines } from '../api/news-api';

import { PAGE_SIZE } from '../constants';

import type { Article, UiCategory } from '../types/news-api.types';

type LoadMode = 'initial' | 'more' | 'refresh';

export type UseNewsFeedResult = {
  articles: Article[];
  isInitialLoading: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  errorMessage: string | null;

  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: UiCategory | undefined;
  setSelectedCategory: (category: UiCategory | undefined) => void;

  canLoadMore: boolean;
  loadMore: () => void;
  refresh: () => void;
  submitSearch: () => void;
  resetFeed: () => void;
};

export const useNewsFeed = (): UseNewsFeedResult => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategoryState] = useState<
    UiCategory | undefined
  >(undefined);

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const requestIdRef = useRef(0);

  const canLoadMore = useMemo(
    () => articles.length < totalResults,
    [articles.length, totalResults],
  );

  const fetchNewsPage = useCallback(
    async (targetPage: number, mode: LoadMode) => {
      requestIdRef.current += 1;
      const requestId = requestIdRef.current;

      if (mode === 'initial') setIsInitialLoading(true);
      if (mode === 'more') setIsLoadingMore(true);
      if (mode === 'refresh') setIsRefreshing(true);

      setErrorMessage(null);

      try {
        const response = await getTopHeadlines({
          page: targetPage,
          pageSize: PAGE_SIZE,
          searchQuery: searchQuery.trim() || undefined,
          uiCategory: selectedCategory,
        });

        if (requestId !== requestIdRef.current) return;

        const newArticles = response.articles ?? [];
        const total = response.totalResults ?? 0;

        if (mode === 'more') {
          setArticles(prev => [...prev, ...newArticles]);
        }
        if (mode !== 'more') {
          setArticles(newArticles);
        }

        setTotalResults(total);
        setCurrentPage(targetPage);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('[getTopHeadlines error]', err.message);
          setErrorMessage(err.message);
        } else {
          console.log('[getTopHeadlines error] unknown', err);
          setErrorMessage('Неизвестная ошибка');
        }
      } finally {
        setIsInitialLoading(false);
        setIsLoadingMore(false);
        setIsRefreshing(false);
      }
    },
    [selectedCategory, searchQuery],
  );

  useEffect(() => {
    fetchNewsPage(1, 'initial');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchNewsPage(1, 'initial');
  }, [selectedCategory, fetchNewsPage]);

  const loadMore = useCallback(() => {
    if (isInitialLoading || isLoadingMore || isRefreshing || !canLoadMore)
      return;
    fetchNewsPage(currentPage + 1, 'more');
  }, [
    canLoadMore,
    fetchNewsPage,
    isInitialLoading,
    isLoadingMore,
    isRefreshing,
    currentPage,
  ]);

  const refresh = useCallback(() => {
    if (isRefreshing || isInitialLoading) return;
    fetchNewsPage(1, 'refresh');
  }, [fetchNewsPage, isInitialLoading, isRefreshing]);

  const submitSearch = useCallback(() => {
    fetchNewsPage(1, 'initial');
  }, [fetchNewsPage]);

  const setSelectedCategory = useCallback(
    (category: UiCategory | undefined) => {
      setSelectedCategoryState(category);
    },
    [],
  );

  const resetFeed = useCallback(() => {
    setSearchQuery('');
    setSelectedCategoryState(undefined);
    setArticles([]);
    setTotalResults(0);
    fetchNewsPage(1, 'initial');
  }, [fetchNewsPage]);

  return {
    articles,
    isInitialLoading,
    isLoadingMore,
    isRefreshing,
    errorMessage,

    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,

    canLoadMore,
    loadMore,
    refresh,
    submitSearch,
    resetFeed,
  };
};
