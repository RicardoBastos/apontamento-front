import React, { useCallback } from 'react';
import { useStoreState, useStoreActions } from 'store/hooks';
import {
  MdViewHeadline,
  MdClose,
  MdAccountCircle,
  MdNotifications,
} from 'react-icons/md';
import { Container, Perfil } from './styles';

const Header: React.FC = () => {
  const abrirMenu = useStoreState((state) => {
    return state.header.abrirMenu;
  });
  const setAbrirMenu = useStoreActions(
    (actions) => actions.header.setAbrirMenu,
  );

  const fncOpenClose = useCallback(() => {
    setAbrirMenu(!abrirMenu);
  }, [setAbrirMenu, abrirMenu]);

  return (
    <Container>
      <div>
        {abrirMenu ? (
          <MdClose size="28" onClick={fncOpenClose} />
        ) : (
          <MdViewHeadline
            data-testid="abrirMenu"
            size="28"
            onClick={fncOpenClose}
          />
        )}
        <span>APONTAMENTO</span>
      </div>
      <Perfil>
        <MdNotifications size="24" />
        <MdAccountCircle size="24" />
      </Perfil>
    </Container>
  );
};

export default Header;
