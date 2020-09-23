import React from 'react';
import Title from 'components/Title';
import Table, { IColumn, IData } from 'components/Table';
import { useStoreState, useStoreActions } from 'store/hooks';
import FilterEmpresa from 'components/Empresa/filtro';
import LinkButton from 'components/LinkButton';

export interface IDataEmpresa extends IData {
  nome: string;
  ativo: boolean;
}

const columns: IColumn[] = [
  {
    nome: 'Nome',
    key: 'nome',
    tamanho: '60%',
    order: true,
  },
  {
    nome: 'Status',
    key: 'status',
    tamanho: '30%',
    order: false,
    tipo: 'boolean',
  },
];

const Empresa: React.FC = () => {
  const state = useStoreState((storeState) => storeState.empresa);
  const actions = useStoreActions((storeActions) => storeActions.empresa);

  return (
    <>
      <Title title="EMPRESA">
        <LinkButton text="Novo" type="primary" link="/empresa/criar" />
      </Title>

      <FilterEmpresa state={state} actions={actions} />

      <Table
        columns={columns}
        state={state}
        actions={actions}
        isEdit
        resource="empresa"
      />
    </>
  );
};

export default Empresa;
