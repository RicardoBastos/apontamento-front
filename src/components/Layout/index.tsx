import React from 'react';
import { Container, Main, Content } from './styles';
import Menu from './Menu';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>
        <Menu />
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
