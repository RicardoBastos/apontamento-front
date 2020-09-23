import React, { ChangeEvent } from 'react';

import { useStoreState, useStoreActions } from 'store/hooks';
import Formulario from 'components/Empresa/formulario';

const Criar: React.FC = () => {
  const { formulario, loading } = useStoreState((state) => state.empresa);
  const { alterarEmpresa, salvarEmpresa } = useStoreActions(
    (actions) => actions.empresa,
  );

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const newValue = target.name !== 'status' ? target.value : target.checked;
    const novo = { ...formulario, [target.name]: newValue };
    alterarEmpresa(novo);
  }

  function handleSubmit() {
    salvarEmpresa(formulario);
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

export default Criar;
