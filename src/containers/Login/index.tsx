import React from 'react';
import { useStoreState, useStoreActions } from 'store/hooks';
import { useHistory } from 'react-router-dom';
import { IFormulario } from 'containers/Login/store/model';
import Login from '../../components/Login';

const Index: React.FC = () => {
  const history = useHistory();

  const { autenticar } = useStoreActions((actions) => actions.session);
  const { formulario } = useStoreState((state) => state.session);

  async function handleSubmit(data: IFormulario) {
    await autenticar(data);
    history.push('/empresa');
  }

  return (
    <Login
      onSubmitLogin={(data: IFormulario) => handleSubmit(data)}
      formulario={formulario}
    />
  );
};

export default Index;
