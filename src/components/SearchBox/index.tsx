import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container>
      <Icon name="search" size={20} color="#c4c4d1" />
      <TextInput
        name="search"
        keyboardAppearance="dark"
        placeholderTextColor="#C4C4D1"
        placeholder="Busque um curso"
      />
    </Container>
  )
}

export default SearchBox;