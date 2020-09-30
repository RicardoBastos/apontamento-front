import React, { useCallback } from 'react';
import { useStoreState, useStoreActions } from 'store/hooks';
import { MdViewHeadline, MdClose, MdAccountCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Container, Perfil } from './styles';
import { logout } from '../../../services/auth';

const Header: React.FC = () => {
  const history = useHistory();
  const abrirMenu = useStoreState((state) => {
    return state.header.abrirMenu;
  });
  const setAbrirMenu = useStoreActions(
    (actions) => actions.header.setAbrirMenu,
  );

  const fncOpenClose = useCallback(() => {
    setAbrirMenu(!abrirMenu);
  }, [setAbrirMenu, abrirMenu]);

  const signOut = () => {
    logout();
    history.push('/');
  };

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
        <button type="button" onClick={signOut}>
          <MdAccountCircle size="24" />
        </button>
      </Perfil>
    </Container>
  );
};

export default Header;
