import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Header,
  Content,
  Video,
  LessonDetails,
  Title,
  Info,
  InfoText,
  Clock,
  Description,
  LessonsNavigation,
  PreviousButton,
  PreviousButtonText,
  NextButton,
  NextButtonText,
} from './styles'
import api from '../../services/api';

interface Params {
  courseId: number;
  id: number;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  completed: string;
}

const Lesson: React.FC = () => {
  const [lesson, setLesson] = useState({} as Lesson);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  const lessonNumber = useCallback((id: number) => {
    if (id < 10) return `0${id}`;
    else return id;
  }, []);

  const handleNavigation = useCallback((id: number) => {
    navigation.navigate('Lesson', { courseId: routeParams.courseId, id });
  }, [navigation]);

  useEffect(() => {
    async function loadCourse() {
      const { data } = await api.get(`/courses/${routeParams.courseId}`);

      const dataLesson = data.lessons[routeParams.id - 1];

      setLesson(dataLesson);
    }

    loadCourse();
  }, [routeParams]);

  return (
    <Container>
      <Header>
        <Icon onPress={() => navigation.goBack()} name="arrow-left" size={24} color="#FF6680" />
        <Image source={logoImg} />
        <View style={{width: 24}} />
      </Header>
      <Content>
        <Video>
          <Icon name="play-circle" size={64} color="#fff" />
        </Video>
        <LessonDetails>
          <Title>{lesson.title}</Title>
          <Info>
            <InfoText>Aula {lessonNumber(Number(lesson.id))}</InfoText>
            <Clock name="clock" size={16} color="#C4C4D1" />
            <InfoText>5 min</InfoText>
          </Info>
          <Description>{lesson.description || '(Nenhuma descrição)'}</Description>
        </LessonDetails>
        <LessonsNavigation>
          <PreviousButton onPress={() => handleNavigation(Number(lesson.id) - 1)}>
            <Icon name="arrow-left" size={20} color="#FF6680" />
            <PreviousButtonText>Aula anterior</PreviousButtonText>
          </PreviousButton>
          <NextButton onPress={() => handleNavigation(Number(lesson.id) + 1)}>
            <NextButtonText>Próxima aula</NextButtonText>
            <Icon name="arrow-right" size={20} color="#fff" />
          </NextButton>
        </LessonsNavigation>
      </Content>
    </Container>
  )
}

export default Lesson;