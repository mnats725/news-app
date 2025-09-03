import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Chip = styled.TouchableOpacity<{ selected?: boolean }>`
  padding: 8px 12px;
  border-radius: 16px;
  border: 1px solid ${({ selected }) => (selected ? '#222' : '#ddd')};
  background-color: ${({ selected }) => (selected ? '#222' : '#fff')};
`;

export const ChipText = styled.Text<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? '#fff' : '#222')};
  font-size: 13px;
  font-weight: 600;
`;
