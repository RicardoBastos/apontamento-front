import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  noLabel?: boolean;
  options: Array<{
    value: string | number;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  noLabel,
  name,
  options,
  ...rest
}) => {
  return (
    <Container>
      {!noLabel && <label htmlFor={name}>{label}</label>}
      <select value="" name={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
