import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { ContainerInput, ContainerSelect } from './styles';

interface IDataOption {
  search: string | number;
  handleChange(e: any, n: string): void;
  options: Array<{
    id: string | number;
    name: string;
  }>;
  bottom?: boolean;
}

const Select: React.FC<IDataOption> = ({
  options,
  handleChange,
  search,
  bottom,
}) => {
  const [isVisbile, setVisiblity] = useState(false);
  const handleClick = () => {
    setVisiblity(!isVisbile);
  };

  const hideSuggestion = () => setVisiblity(false);

  const optionName = options.find((c) => c.id === search)?.name;

  return (
    <ContainerInput>
      <input
        type="text"
        readOnly
        name="status"
        placeholder=""
        value={optionName}
        onClick={handleClick}
      />
      {isVisbile ? (
        <button type="button" onClick={handleClick}>
          <MdArrowDropUp size={18} />
        </button>
      ) : (
        <button type="button" onClick={handleClick}>
          <MdArrowDropDown size={18} />
        </button>
      )}

      <ContainerSelect isVisible={isVisbile} bottom={bottom}>
        <ul>
          {options.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                hideSuggestion();
                handleChange(item, 'status');
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </ContainerSelect>
    </ContainerInput>
  );
};

export default Select;
