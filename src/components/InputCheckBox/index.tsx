import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  checked: boolean;
  register?: any;
}

const InputCheckBox: React.FC<InputCheckBoxProps> = ({
  label,
  checked,
  name,
  register,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        ref={register}
        type="checkbox"
        checked={checked}
        name={name}
        {...rest}
      />
    </Container>
  );
};

export default InputCheckBox;
