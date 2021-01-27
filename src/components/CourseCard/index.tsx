import React from 'react';
import { View } from 'react-native';

import { Container, Image, Title, LessonsText } from './styles';

interface ICourseCard {
  title: string;
  lessons: string;
}

import Maths from '../../assets/maths.png';

const CourseCard: React.FC<ICourseCard> = ({ title, lessons })  => {
  return (
    <Container>
      <Image source={Maths} />
      <View>
        <Title>{title}</Title>
        <LessonsText>{lessons} Aulas</LessonsText>
      </View>
    </Container>
  );
}

export default CourseCard;