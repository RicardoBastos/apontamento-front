import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

interface ILinkButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?(): void;
  link: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({ text, type, link }) => {
  return (
    <Link to={link}>
      <Button text={text} type={type} />
    </Link>
  );
};

export default LinkButton;
