import React, { ChangeEvent } from 'react';
import { useStoreState, useStoreActions } from 'store/hooks';
import { useHistory } from 'react-router-dom';
import Login from '../../components/Login';

const Index: React.FC = () => {
  const history = useHistory();

  const { autenticar, alterarSession } = useStoreActions(
    (actions) => actions.session,
  );
  const { formulario } = useStoreState((state) => state.session);

  async function handleSubmit() {
    await autenticar(formulario);

    history.push('/empresa');
  }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const novo = { ...formulario, [target.name]: target.value };
    alterarSession(novo);
  }

  return (
    <Login
      onSubmitLogin={handleSubmit}
      onChange={handleChange}
      formulario={formulario}
    />
  );
};

export default Index;
