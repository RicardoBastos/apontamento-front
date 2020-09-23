import React, { useCallback } from 'react';
import Input from 'components/Input/index';
import Select from 'components/Select';
import { StateMapper, ActionMapper } from 'easy-peasy';
import { IEmpresaFilter } from 'containers/Empresa/store/model';
import { IPagination } from 'components/Table';
import { ContainerFilter } from './styles';

interface IEmpresaFiltroProps {
  state: StateMapper<any, string>;
  actions: ActionMapper<any, string>;
}

const FilterEmpresa: React.FC<IEmpresaFiltroProps> = ({ state, actions }) => {
  const { filtro } = state;
  const { alterarPaginacao, alterarFiltro } = actions;

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) => {
      const paginationNovo: IPagination = {
        page: 0,
        size: 10,
        orderBy: 'nome',
        direction: 'asc',
      };
      alterarPaginacao(paginationNovo);

      const filtroNovo: IEmpresaFilter = {
        ...filtro,
        [e.target.name]: e.target.value,
      };
      alterarFiltro(filtroNovo);
    },
    [alterarFiltro, alterarPaginacao, filtro],
  );
  return (
    <ContainerFilter>
      <div>
        <Input
          name="nome"
          placeholder="Pesquisar por nome"
          value={filtro.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <Select
          name="status"
          noLabel
          value={filtro.status}
          onChange={handleChange}
          options={[
            { value: -1, label: 'Todos' },
            { value: 1, label: 'Ativos' },
            { value: 0, label: 'Inativos' },
          ]}
        />
      </div>
    </ContainerFilter>
  );
};

export default FilterEmpresa;
