import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import SearchBox from '../../components/SearchBox';
import Content from '../../components/Content';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

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
  NavigationBar,
  NavigationOption,
  NavigationText
} from './styles';

import Maths from '../../assets/maths.png';
interface Course {
  id: number;
  title: string;
  cover: string; 

  lessons: any;
}

const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const navigation = useNavigation();

  const handleNavigation = useCallback((id: number) => {
    navigation.navigate('Course', { id });
  }, [navigation]);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      const { data } = await api.get('/courses');
      
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
          <Title>Categorias</Title>
          <CoursesText>{courses.length} cursos</CoursesText>
        </ContentHeader>
        <CoursesContainer>
          {courses.map(c => (
            <CourseCard key={c.id} onPress={() => handleNavigation(c.id)}>
              <CourseImage source={Maths} />
              <View>
                <CourseTitle>{c.title}</CourseTitle>
                <LessonsText>{c.lessons.length} Aulas</LessonsText>
              </View>
            </CourseCard>
          ))}
        </CoursesContainer>
      </Content>
      <NavigationBar>
        <NavigationOption>
          <Icon name="home" size={20} color="#C4C4D1" /><NavigationText>Home</NavigationText>
        </NavigationOption>
        <NavigationOption>
          <Icon name="heart" size={20} color="#C4C4D1" /><NavigationText>Salvos</NavigationText>
        </NavigationOption>
      </NavigationBar>
    </Container>
  )
}

export default Dashboard;