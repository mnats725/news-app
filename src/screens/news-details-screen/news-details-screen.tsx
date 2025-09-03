import React from 'react';
import { Image, Linking, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { formatDate } from '../../utils/format-date.utils';

import * as styles from './news-details-screen.styles';

import type { RootStackParamList } from '../../navigation/root-navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'NewsDetails'>;

export const NewsDetailsScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;
  const hasImage = Boolean(article.urlToImage);

  const handleOpenInBrowser = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <styles.Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {hasImage ? (
          <Image
            source={{ uri: article.urlToImage as string }}
            style={{ width: '100%', height: 220 }}
            resizeMode="cover"
          />
        ) : (
          <styles.NoImageBox>
            <styles.NoImageText>Нет изображения</styles.NoImageText>
          </styles.NoImageBox>
        )}

        <styles.Title>{article.title}</styles.Title>
        <styles.Meta>
          {article.author ? `${article.author} • ` : ''}
          {formatDate(article.publishedAt)}
        </styles.Meta>

        {article.description && (
          <styles.Content>{article.description}</styles.Content>
        )}
        {article.content && (
          <styles.Content>
            {article.content.replace(/\[\+\d+ chars\]/, '')}
          </styles.Content>
        )}

        {article.url && (
          <styles.OpenButton onPress={handleOpenInBrowser}>
            <styles.OpenButtonText>Открыть в браузере</styles.OpenButtonText>
          </styles.OpenButton>
        )}
      </ScrollView>
    </styles.Container>
  );
};
