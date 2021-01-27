import React, { useCallback } from 'react';
import { Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import SearchBox from '../../components/SearchBox';
import Content from '../../components/Content';
import CourseCard from '../../components/CourseCard';

import logoImg from '../../assets/logo.png';

import { Container, Header, TopHeader, ContentHeader, Title, CoursesText, CoursesContainer } from './styles';

const courses = [
  {
    id: 0,
    title: 'Matemática',
    lessons: '16',
  },
  {
    id: 1,
    title: 'Matemática',
    lessons: '16',
  },
  {
    id: 2,
    title: 'Matemática',
    lessons: '16',
  },
  {
    id: 3,
    title: 'Matemática',
    lessons: '16',
  },
  {
    id: 4,
    title: 'Matemática',
    lessons: '16',
  },
  {
    id: 5,
    title: 'Matemática',
    lessons: '16',
  },
]

const Dashboard: React.FC = () => {
  const renderCourse = useCallback((item) => {
    return (
      <CourseCard key={item.id} title={item.title} lessons={item.lessons} />
    )
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
          <CoursesText>43 cursos</CoursesText>
        </ContentHeader>
        <CoursesContainer>
          {courses.map(c => renderCourse(c))}
        </CoursesContainer>
      </Content>
    </Container>
  )
}

export default Dashboard;