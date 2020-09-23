import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';

import { MdAccountBalance, MdViewModule, MdAccessAlarm } from 'assets/icons';
import { IconBaseProps } from 'react-icons/lib';
import { MenuStyle } from './styles';
import { useStoreState, useStoreActions } from '../../../store/hooks';

interface IconLookup {
  nome: string;
  icone: IconBaseProps;
}

const MenuContainer: React.FC = () => {
  const { abrirMenu } = useStoreState((state) => state.header);
  const { itensMenu } = useStoreState((state) => state.menu);
  const { setAbrirMenu } = useStoreActions((actions) => actions.header);

  const networkIconsLookup: IconLookup[] = [
    {
      nome: 'MdAccountBalance',
      icone: <MdAccountBalance size="24" />,
    },
    {
      nome: 'MdViewModule',
      icone: <MdViewModule size="24" />,
    },
    {
      nome: 'MdAccessAlarm',
      icone: <MdAccessAlarm size="24" />,
    },
  ];

  const getIcon = (nome: string) => {
    return networkIconsLookup.find((i) => i.nome === nome)?.icone;
  };

  const fncOpenClose = useCallback(() => {
    setAbrirMenu(!abrirMenu);
  }, [abrirMenu, setAbrirMenu]);

  return (
    <MenuStyle openClose={abrirMenu}>
      <ul>
        {itensMenu.map((item) => {
          return (
            <li key={item.icon}>
              <Link to={item.to} onClick={fncOpenClose}>
                {getIcon(item.icon)}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </MenuStyle>
  );
};

export default MenuContainer;
