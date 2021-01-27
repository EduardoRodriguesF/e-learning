import React from 'react';
import { View } from 'react-native';

import { Container, Image, Title, LessonsText } from './styles';

import Maths from '../../assets/maths.png';

interface ICourseCard {
  title: string;
  lessons: string;
  cover: string;
}

const CourseCard: React.FC<ICourseCard> = ({ title, lessons, cover })  => {
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