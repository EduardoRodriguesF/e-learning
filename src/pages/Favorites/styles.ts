import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #6548A3;
`;

export const Modal = styled.Modal`
  flex: 1;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 75%;
  background-color: #fff;
  align-items: center;
  margin: auto;
  border-radius: 16px;
  padding: 32px;
`;

export const ModalText = styled.Text`
  width: 152px;
  text-align: center;
  color: #6C6C80;
  font-size: 15px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const ModalOptions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCancelButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 24px;
`;

export const ModalCancelText = styled.Text`
  color: #ff6680;
  font-size: 15px;
  padding: 24px;
`;

export const ModalConfirmButton = styled(RectButton)`
  background-color: #FF6680;
  padding: 24px;
  height: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const ModalConfirmText = styled.Text`
  color: #fff;
  font-size: 15px;
`;


export const Header = styled.View`
  width: 100%;
  padding: 32px 21px;
`;

export const TopHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 0;
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
  font-size: 20px;
`;

export const CoursesText = styled.Text` 
  color: #A0A0B2;
  font-size: 15px;
`;

export const CoursesContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CourseCard = styled(RectButton)`
  flex: 1 0 40%;
  flex-direction: row;
  height: 172px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin: 8px;
`;

export const CourseInfo = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const CourseImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const CourseTitle = styled.Text`
  color: #6C6C80;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const LessonsText = styled.Text`
  color: #C4C4D1;
  font-size: 10px;
`;


export const NavigationBar = styled.View`
  position: relative;
  bottom: 0;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #F0EDF5;
`;

export const NavigationOption = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavigationText = styled.Text`
  text-align: center;
  margin-left: 12px;
  color: #C4C4D1;
  font-size: 15px;
  padding: 20px 0;
`;