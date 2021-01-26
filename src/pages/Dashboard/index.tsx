import React from 'react';

import SearchBox from '../../components/SearchBox';

import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>      
      <Header>
        <SearchBox />
      </Header>
    </Container>
  )
}

export default Dashboard;