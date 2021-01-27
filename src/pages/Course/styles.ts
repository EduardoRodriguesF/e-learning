import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

interface CompletedProps {
  isCompleted: boolean;
}

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

export const ContentHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: #3D3D4C;
  font-size: 30px;
`;

export const LessonsText = styled.Text` 
  color: #A0A0B2;
  font-size: 15px;
`;

export const LessonsContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LessonCard = styled.View`
  width: 100%;
  flex-direction: row;
  height: 100px;
  margin-bottom: 16px;
`;

export const PlayButton = styled(RectButton)<CompletedProps>`
  position: relative;
  z-index: 1;
  margin-top: 16px;
  width: 68px;
  height: 68px;
  margin-right: -32px;
  border-radius: 16px;
  background-color: ${props => props.isCompleted ? '#61C5BD' : '#FF6680'};
  align-items: center;
  justify-content: center;
`;

export const LessonInfo = styled(RectButton)`
  width: 90%;
  padding: 16px;
  padding-left: 56px;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 16px;
`;

export const LessonTitle = styled.Text`
  color: #6C6C80;
  font-size: 15px;
  width: 140px;
`;

export const LessonDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LessonDetailText = styled.Text`
  color: #C4C4D1;
  font-size: 10px;
  margin-right: 16px;
`;

export const Clock = styled(Icon)`
  margin-right: 4px;
`;

export const CompletedBadge = styled.View<CompletedProps>`
  opacity: ${props => props.isCompleted ? 1 : 0};
  background-color: #61C5BD;
  margin-left: auto;
  padding: 3px 8px;
  border-radius: 100px;
`;

export const CompletedText = styled.Text`
  color: #fff;
  font-size: 10px;
`;
