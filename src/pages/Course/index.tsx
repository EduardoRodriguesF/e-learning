import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  const handleNavigation = useCallback((id: number) => {
    navigation.navigate('Lesson', { courseId: routeParams.id, id });
  }, [navigation]);

  const lessonNumber = useCallback((id: number) => {
    if (id < 10) return `0${id}`;
    else return id;
  }, []);

  const toggleFavorite = useCallback(async () => {
    if (!isFavorite) {
      await api.post('/favorites/', course).then(() => {
        setIsFavorite(true);
      })
    } else {
      await api.delete(`/favorites/${course.id}`).then(() => {
        setIsFavorite(false);
      });
    }
  }, [isFavorite, course]);

  useEffect(() => {
    async function loadCourse() {
      const { data } = await api.get(`/courses/${routeParams.id}`);

      const favorite = await api.get(`/favorites`, {
        params: {
          id: routeParams.id,
        }
      });

      if (!!favorite.data.length) setIsFavorite(true);

      setCourse(data);
    }

    loadCourse();
  }, [routeParams]);

  const favoriteIconName = useMemo(
    () => (isFavorite ? 'heart' : 'heart-outline'),
    [isFavorite],
  );

  return (
    <Container>
      <Header>
        <IconF onPress={() => navigation.goBack()} name="arrow-left" size={24} color="#FF6680" />
        <Image source={logoImg} />
        <IconM onPress={toggleFavorite} name={favoriteIconName} size={24} color="#FF6680" />
      </Header>
      <Content>
        <ContentHeader>
          <Title>{course.title}</Title>
          <LessonsText>{course.lessons && course.lessons.length} aulas</LessonsText>
        </ContentHeader>
        <LessonsContainer>
          {course.lessons && course.lessons.map(l => (
            <LessonCard key={l.id} onPress={() => handleNavigation(l.id)}>
              <PlayButton isCompleted={l.completed} onPress={() => handleNavigation(l.id)}>
                <IconF name="play-circle" size={40} color="#fff" />
              </PlayButton>
              <LessonInfo onPress={() => handleNavigation(l.id)}>
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