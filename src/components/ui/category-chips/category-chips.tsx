import React from 'react';

import * as styles from './category-chips.styles';

import type { UiCategory } from '../../../types/news-api.types';

type CategoryChipsProps = {
  selectedCategory?: UiCategory;
  onSelect: (category?: UiCategory) => void;
};

export const CategoryChips = ({
  selectedCategory,
  onSelect,
}: CategoryChipsProps) => {
  const renderChip = (label: string, value: UiCategory) => (
    <styles.Chip
      key={value}
      selected={selectedCategory === value}
      onPress={() => onSelect(selectedCategory === value ? undefined : value)}
    >
      <styles.ChipText selected={selectedCategory === value}>
        {label}
      </styles.ChipText>
    </styles.Chip>
  );

  return (
    <styles.Row>
      {renderChip('Технологии', 'technology')}
      {renderChip('Спорт', 'sports')}
      {renderChip('Политика', 'politics')}
    </styles.Row>
  );
};
