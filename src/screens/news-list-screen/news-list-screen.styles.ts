import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 12px 16px 8px 16px;
  gap: 8px;
`;

export const SearchRow = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 12px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #222;
  padding: 10px 14px;
  border-radius: 10px;
  justify-content: center;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export const ChipsRow = styled.View`
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

export const Separator = styled.View`
  height: 8px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  padding: 12px 16px;
`;

export const Thumb = styled.View`
  width: 96px;
  height: 72px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export const ThumbText = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const CardMain = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

export const Meta = styled.Text`
  margin-top: 6px;
  font-size: 12px;
  color: #666;
`;
