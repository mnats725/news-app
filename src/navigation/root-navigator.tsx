import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewsListScreen } from '../screens/news-list-screen';
import { NewsDetailsScreen } from '../screens/news-details-screen';

import type { Article } from '../types/news-api.types';

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetails: { article: Article };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{ title: 'Новости' }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreen}
        options={{ title: 'Детали' }}
      />
    </Stack.Navigator>
  );
};
