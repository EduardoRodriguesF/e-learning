import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding: 52px 21px 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F0EDF5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
`;

export const Video = styled.View`
  width: 100%;
  height: 210px;
  background-color: #3D3D4C;
  align-items: center;
  justify-content: center;
`;

export const LessonDetails = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  color: #3d3d4c;
  font-size: 30px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
`;

export const InfoText = styled.Text`
  color: #A0A0B2;
  font-size: 12px;
  margin-right: 16px;
`;

export const Clock = styled(Icon)`
  margin-right: 8px;
`;

export const Description = styled.Text`
  color: #6C6C80;
  font-size: 15px;
  line-height: 25px
`;

export const LessonsNavigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

export const PreviousButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 56px;
`;

export const PreviousButtonText = styled.Text`
  font-size: 15px;
  color: #FF6680;
  margin-left: 8px;
`;

export const NextButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 56px;
  background-color: #FF6680;
  border-radius: 100px;
`;

export const NextButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-right: 8px;
`;
