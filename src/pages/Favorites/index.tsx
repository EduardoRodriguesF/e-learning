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
  Modal,
  ModalContent,
  ModalText,
  ModalOptions,
  ModalCancelButton,
  ModalCancelText,
  ModalConfirmButton,
  ModalConfirmText,
  Header,
  TopHeader,
  ContentHeader,
  Title,
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
  const [selectedCourse, setSelectedCourse] = useState<Course | null>();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  const handleNavigation = useCallback((id: number) => {
    if (!modalVisible) navigation.navigate('Course', { id });
  }, [navigation, modalVisible]);

  const openModal = useCallback((id?: number) => {
    setModalVisible(true);

    if (id) {
      const course = courses.filter(c => c.id === id);
      if (course) setSelectedCourse(course[0]);
    };
  }, [courses]);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const removeFavorite = useCallback(async (id: number) => {
    await api.delete(`/favorites/${id}`);

    loadCourses();

    closeModal();
  }, []);

  async function loadCourses() {
    // Search method makes a GET in every history entry of the Input when refreshing the screen, I don't know why.
    const { data } = await api.get('/favorites', {
      params: {
        title_like: searchValue
      }
    });
    
    setCourses(data);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadCourses();
    });
    loadCourses();
  }, [searchValue, navigation]);

  return (
    <Container>      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <ModalContent>
          <Icon name="trash" size={48} color="#FF6680" />
          <ModalText>Quer excluir suas aulas de {selectedCourse && selectedCourse.title}?</ModalText>
          <ModalOptions>
            <ModalCancelButton>
              <ModalCancelText onPress={() => closeModal()}>Não!</ModalCancelText>
            </ModalCancelButton>
            <ModalConfirmButton>
              <ModalConfirmText onPress={() => selectedCourse && removeFavorite(selectedCourse.id)}>Com certeza</ModalConfirmText>
            </ModalConfirmButton>
          </ModalOptions>
        </ModalContent>
      </Modal>
      <Header>
        <TopHeader>
          <Image source={logoImg} />
          <Icon name="power" size={24} color="#FF6680" />
        </TopHeader>
        <SearchBox
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </Header>
      <Content>
        <ContentHeader>
          <Title>Cursos salvos</Title>
        </ContentHeader>
        <CoursesContainer>
          {courses.map(c => (
            <CourseCard key={c.id} onPress={() => handleNavigation(c.id)}>
              <CourseInfo>
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