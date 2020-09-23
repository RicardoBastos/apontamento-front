import React from 'react';

import { Container } from './styles';

interface FieldsetProps {
  nome: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ nome, children }) => {
  return (
    <Container>
      <legend>{nome}</legend>
      {children}
    </Container>
  );
};

export default Fieldset;
