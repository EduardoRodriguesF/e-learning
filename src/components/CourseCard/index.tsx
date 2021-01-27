import React from 'react';
import { View } from 'react-native';

import { Container, Image, Title, LessonsText } from './styles';

interface ICourseCard {
  title: string;
  lessons: string;
  cover: string;
}

const CourseCard: React.FC<ICourseCard> = ({ title, lessons, cover })  => {
  return (
    <Container>
      <Image source={cover} />
      <View>
        <Title>{title}</Title>
        <LessonsText>{lessons} Aulas</LessonsText>
      </View>
    </Container>
  );
}

export default CourseCard;