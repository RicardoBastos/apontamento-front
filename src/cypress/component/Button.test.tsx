import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Button from '../../components/Button';

describe('App', () => {
  it('renders learn react link', () => {
    mount(<Button text="Salvar" type="primary" />);
    cy.contains('Salvar').should('be.visible');
  });
});
