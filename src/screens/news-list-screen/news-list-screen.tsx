import React, { useCallback } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useNewsFeed } from '../../hooks/use-news-feed.hooks';
import { keyFromArticle } from '../../utils/key-from-article.utils';

import * as styles from './news-list-screen.styles';

import { QueryBar } from '../../components/ui/query-bar';
import { CategoryChips } from '../../components/ui/category-chips';
import { NewsCard } from '../../components/ui/news-card';
import { ErrorBox } from '../../components/ui/error-box';

import type { Article, UiCategory } from '../../types/news-api.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/root-navigator';

export const NewsListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
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
  } = useNewsFeed();

  const onSelectCategory = useCallback(
    (category?: UiCategory) => setSelectedCategory(category),
    [setSelectedCategory],
  );

  const renderItem = useCallback(
    ({ item }: { item: Article }) => (
      <NewsCard
        article={item}
        onPress={article => navigation.navigate('NewsDetails', { article })}
      />
    ),
    [navigation],
  );

  const listFooter = useCallback(() => {
    if (!isLoadingMore) return null;
    return <ActivityIndicator style={{ marginVertical: 12 }} size="small" />;
  }, [isLoadingMore]);

  if (isInitialLoading && articles.length === 0) {
    return (
      <styles.Container>
        <styles.Header>
          <QueryBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmit={submitSearch}
          />
          <CategoryChips
            selectedCategory={selectedCategory}
            onSelect={onSelectCategory}
          />
        </styles.Header>
        <ActivityIndicator style={{ marginTop: 16 }} />
      </styles.Container>
    );
  }

  return (
    <styles.Container>
      <styles.Header>
        <QueryBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmit={submitSearch}
        />
        <CategoryChips
          selectedCategory={selectedCategory}
          onSelect={onSelectCategory}
        />
      </styles.Header>

      {Boolean(errorMessage) && (
        <ErrorBox message={errorMessage!} onRetry={refresh} />
      )}

      <FlatList
        data={articles}
        keyExtractor={keyFromArticle}
        renderItem={renderItem}
        ItemSeparatorComponent={styles.Separator}
        onEndReachedThreshold={0.4}
        onEndReached={() => {
          if (canLoadMore) loadMore();
        }}
        ListFooterComponent={listFooter}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
      />
    </styles.Container>
  );
};
