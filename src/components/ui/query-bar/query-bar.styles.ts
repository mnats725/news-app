import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 12px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #222;
  padding: 10px 14px;
  border-radius: 10px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;
