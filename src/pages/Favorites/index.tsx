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
  CourseInfo,
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

  const openModal = useCallback(async (id: number): Promise<void> => {
    await api.delete(`/favorites/${id}`);

    loadCourses();
  }, []);

  const loadCourses = useCallback(async (): Promise<void> => {
    const { data } = await api.get('/favorites');
    
    setCourses(data);
  }, []);

  useEffect(() => {
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
            <CourseCard key={c.id}>
              <CourseInfo onPress={() => handleNavigation(c.id)}>
                <CourseImage source={Maths} />
                <View>
                  <CourseTitle>{c.title}</CourseTitle>
                  <LessonsText>{c.lessons.length} Aulas</LessonsText>
                </View>
              </CourseInfo>
              <Icon onPress={() => openModal(c.id)} name="trash" size={20} color="#C4C4D1" />
            </CourseCard>
          ))}
        </CoursesContainer>
      </Content>
    </Container>
  )
}

export default Favorites;