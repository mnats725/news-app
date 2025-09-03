import styled from 'styled-components/native';

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
