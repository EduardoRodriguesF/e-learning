import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex: 1 0 40%;
  height: 172px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin: 8px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Title = styled.Text`
  color: #6C6C80;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const LessonsText = styled.Text`
  color: #C4C4D1;
  font-size: 10px;
`;
