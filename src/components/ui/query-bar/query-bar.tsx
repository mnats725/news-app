import React from 'react';

import * as styles from './query-bar.styles';

type QueryBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

export const QueryBar = ({ value, onChangeText, onSubmit }: QueryBarProps) => {
  return (
    <styles.Row>
      <styles.Input
        placeholder="Поиск по ключевым словам"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />
      <styles.Button onPress={onSubmit}>
        <styles.ButtonText>Поиск</styles.ButtonText>
      </styles.Button>
    </styles.Row>
  );
};
