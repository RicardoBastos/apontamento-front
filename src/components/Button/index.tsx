import React from 'react';
import { ButtonPrimary, ButtonSecondary, ButtonDefault } from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  typeButton?: 'primary' | 'secondary' | 'submit';
  onClick?(): void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton,
  onClick,
  ...rest
}) => {
  switch (typeButton) {
    case 'primary':
      return (
        <ButtonPrimary onClick={onClick} {...rest}>
          {text}
        </ButtonPrimary>
      );
    case 'secondary':
      return <ButtonSecondary>{text}</ButtonSecondary>;
    case 'submit':
      return <ButtonSecondary>{text}</ButtonSecondary>;
    default:
      return <ButtonDefault type="submit">{text}</ButtonDefault>;
  }
};

export default Button;
