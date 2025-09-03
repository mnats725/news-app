import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/root-navigator';

type Nav = NativeStackNavigationProp<RootStackParamList, 'NewsList'>;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: #222;
  padding: 14px;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const NewsListScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <Container>
      <Title>Лента1 (заглушка)</Title>
      <Button onPress={() => navigation.navigate('NewsDetails')}>
        <ButtonText>Открыть детали</ButtonText>
      </Button>
    </Container>
  );
};
