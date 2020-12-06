import React, { ChangeEvent, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'store/hooks';
import Formulario from 'components/Empresa/formulario';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const Editar: React.FC = () => {
  const { id } = useParams<RouteParams>();
  // const history = useHistory();
  const { formulario, loading } = useStoreState((state) => state.empresa);
  const { alterarEmpresa, atualizarEmpresa, buscarPorId } = useStoreActions(
    (actions) => actions.empresa,
  );

  useEffect(() => {
    buscarPorId(id);
  }, [buscarPorId, id]);

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const newValue = target.name !== 'status' ? target.value : target.checked;
    const novo = { ...formulario, [target.name]: newValue };
    alterarEmpresa(novo);
  }

  function handleSubmit() {
    atualizarEmpresa(formulario);
    // history.push('/empresa');
  }

  return (
    <>
      <Formulario
        onChange={handleChange}
        formulario={formulario}
        onSubmitEmpresa={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default Editar;
