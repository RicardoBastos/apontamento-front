import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form/dist/types/form';
import { Container, MessageError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  register?: any;
  errors?: FieldError;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errors,
  register,
  required,
  value,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {required ? '*' : ''}
      </label>
      <input
        ref={register}
        type="text"
        name={name}
        defaultValue={value}
        {...rest}
      />
      {errors && <MessageError>{errors.message}</MessageError>}
    </Container>
  );
};

export default Input;
