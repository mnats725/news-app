import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewsListScreen } from '../screens/news-list-screen';
import { NewsDetailsScreen } from '../screens/news-details-screen';

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
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
