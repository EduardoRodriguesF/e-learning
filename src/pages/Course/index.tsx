import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import Content from '../../components/Content';

import { 
  Container,
  Header,
  ContentHeader,
  Title,
  LessonsText,
  LessonsContainer,
  LessonCard,
  PlayButton,
  LessonInfo,
  LessonTitle,
  LessonDetails,
  LessonDetailText,
  Clock,
  CompletedBadge,
  CompletedText,
} from './styles';

import logoImg from '../../assets/logo.png';

interface Params {
  id: number;
}
interface Course {
  id: number;
  title: string;
  lessons: {
    id: number;
    title: string;
    completed: boolean; 
  }[];
}

const Course: React.FC = () => {
  const [course, setCourse] = useState({} as Course);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  const lessonNumber = useCallback((id: number) => {
    if (id < 10) return `0${id}`;
    else return id;
  }, []);

  useEffect(() => {
    async function loadCourse() {
      const { data } = await api.get(`/courses/${routeParams.id}`);

      setCourse(data);
    }

    loadCourse();
  }, [routeParams]);

  return (
    <Container>
      <Header>
        <Icon onPress={() => navigation.goBack()} name="arrow-left" size={24} color="#FF6680" />
        <Image source={logoImg} />
        <Icon name="heart" size={24} color="#FF6680" />
      </Header>
      <Content>
        <ContentHeader>
          <Title>{course.title}</Title>
          <LessonsText>{course.lessons && course.lessons.length} aulas</LessonsText>
        </ContentHeader>
        <LessonsContainer>
          {course.lessons && course.lessons.map(l => (
            <LessonCard key={l.id}>
              <PlayButton isCompleted={l.completed}>
                <Icon name="play-circle" size={40} color="#fff" />
              </PlayButton>
              <LessonInfo>
                <LessonTitle>{l.title}</LessonTitle>
                <LessonDetails>
                  <LessonDetailText>Aula {lessonNumber(l.id)}</LessonDetailText>
                  <Clock name="clock" size={12} color="#C4C4D1" />
                  <LessonDetailText>5 min</LessonDetailText>
                  <CompletedBadge isCompleted={l.completed}>
                    <CompletedText>Completo!</CompletedText>
                  </CompletedBadge>
                </LessonDetails>
              </LessonInfo>
            </LessonCard>
          ))}
        </LessonsContainer>
      </Content>
    </Container>
  );
}

export default Course;