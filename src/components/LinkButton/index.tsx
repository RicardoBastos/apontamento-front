import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

interface ILinkButtonProps {
  text: string;
  typeButton?: 'primary' | 'secondary';
  onClick?(): void;
  link: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({ text, typeButton, link }) => {
  return (
    <Link to={link}>
      <Button text={text} typeButton={typeButton} />
    </Link>
  );
};

export default LinkButton;
