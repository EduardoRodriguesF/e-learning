import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import SearchBox from '../../components/SearchBox';

import logoImg from '../../assets/logo.png';

import { Container, Header, TopHeader } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>      
      <Header>
        <TopHeader>
          <Image source={logoImg} />
          <Icon name="power" size={24} color="#FF6680" />
        </TopHeader>
        <SearchBox />
      </Header>
    </Container>
  )
}

export default Dashboard;