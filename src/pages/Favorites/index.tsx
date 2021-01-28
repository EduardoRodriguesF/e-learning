import React, { useCallback, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import SearchBox from '../../components/SearchBox';
import Content from '../../components/Content';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import Maths from '../../assets/maths.png';

import {
  Container,
  Header,
  TopHeader,
  ContentHeader,
  Title,
  CoursesText,
  CoursesContainer,
  CourseCard,
  CourseImage,
  CourseTitle,
  LessonsText,
} from './styles';

interface Course {
  id: number;
  title: string;
  cover: string; 

  lessons: any;
}

const Favorites: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const navigation = useNavigation();

  const handleNavigation = useCallback((id: number) => {
    navigation.navigate('Course', { id });
  }, [navigation]);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      const { data } = await api.get('/favorites');
      
      setCourses(data);
    }

    loadCourses();
  }, []);

  return (
    <Container>      
      <Header>
        <TopHeader>
          <Image source={logoImg} />
          <Icon name="power" size={24} color="#FF6680" />
        </TopHeader>
        <SearchBox />
      </Header>
      <Content>
        <ContentHeader>
          <Title>Cursos salvos</Title>
        </ContentHeader>
        <CoursesContainer>
          {courses.map(c => (
            <CourseCard key={c.id} onPress={() => handleNavigation(c.id)} removable>
              <CourseImage source={Maths} />
              <View>
                <CourseTitle>{c.title}</CourseTitle>
                <LessonsText>{c.lessons.length} Aulas</LessonsText>
              </View>
            </CourseCard>
          ))}
        </CoursesContainer>
      </Content>
    </Container>
  )
}

export default Favorites;