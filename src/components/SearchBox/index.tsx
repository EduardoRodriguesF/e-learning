import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name?: string;
}

const SearchBox: React.FC<InputProps> = ({ value = '', ...rest }) => {
  return (
    <Container>
      <Icon name="search" size={20} color="#c4c4d1" />
      <TextInput
        name="search"
        keyboardAppearance="dark"
        placeholderTextColor="#C4C4D1"
        placeholder="Busque um curso"
        value={value}
        {...rest}
      />
    </Container>
  )
}

export default SearchBox;