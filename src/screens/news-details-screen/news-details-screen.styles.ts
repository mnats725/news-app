import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin: 16px;
`;

export const Meta = styled.Text`
  font-size: 13px;
  color: #666;
  margin: 0 16px 12px;
`;

export const Content = styled.Text`
  font-size: 15px;
  line-height: 22px;
  margin: 0 16px 12px;
`;

export const NoImageBox = styled.View`
  width: 100%;
  height: 220px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export const NoImageText = styled.Text`
  color: #999;
  font-size: 14px;
`;

export const OpenButton = styled.TouchableOpacity`
  background-color: #222;
  padding: 14px;
  margin: 20px 16px 0;
  border-radius: 10px;
  align-items: center;
`;

export const OpenButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;
