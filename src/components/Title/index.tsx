import React from 'react';
import { Container, Title as TitleStyle } from './styles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleStyle>{title}</TitleStyle>
      <div>{children}</div>
    </Container>
  );
};

export default Title;
