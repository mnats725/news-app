import React from 'react';
import { Image } from 'react-native';

import { formatDate } from '../../../utils/format-date.utils';

import * as styles from './news-card.styles';

import type { Article } from '../../../types/news-api.types';

type NewsCardProps = {
  article: Article;
  onPress?: (article: Article) => void;
};

export const NewsCard = ({ article, onPress }: NewsCardProps) => {
  const hasImage = Boolean(article.urlToImage);

  return (
    <styles.Card activeOpacity={0.7} onPress={() => onPress?.(article)}>
      {hasImage ? (
        <styles.Thumb>
          <Image
            source={{ uri: article.urlToImage as string }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </styles.Thumb>
      ) : (
        <styles.Thumb>
          <styles.ThumbText>no image</styles.ThumbText>
        </styles.Thumb>
      )}

      <styles.CardMain>
        <styles.Title numberOfLines={2}>{article.title}</styles.Title>
        <styles.Meta numberOfLines={1}>
          {article.source?.name ?? '—'} • {formatDate(article.publishedAt)}
        </styles.Meta>
      </styles.CardMain>
    </styles.Card>
  );
};
