import React from 'react';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const TextP = styled.Text`
  font-size: 16px;
  line-height: 22px;
`;

export const NewsDetailsScreen = () => {
  return (
    <Container>
      <Title>Детальная страница (заглушка)</Title>
      <TextP>Здесь позже будет контент новости.</TextP>
    </Container>
  );
};
