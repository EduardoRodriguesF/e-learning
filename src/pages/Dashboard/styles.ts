import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
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