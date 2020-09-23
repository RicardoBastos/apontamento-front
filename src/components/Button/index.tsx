import React from 'react';
import { ButtonPrimary, ButtonSecondary, ButtonDefault } from './styles';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary' | 'submit';
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  switch (type) {
    case 'primary':
      return <ButtonPrimary onClick={onClick}>{text}</ButtonPrimary>;
    case 'secondary':
      return <ButtonSecondary>{text}</ButtonSecondary>;
    case 'submit':
      return <ButtonSecondary>{text}</ButtonSecondary>;
    default:
      return <ButtonDefault type="submit">{text}</ButtonDefault>;
  }
};

export default Button;
