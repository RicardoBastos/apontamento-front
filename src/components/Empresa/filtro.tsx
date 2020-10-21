import React, { useCallback } from 'react';
import Input from 'components/Input/index';
// import Select from 'components/Select';
import { StateMapper, ActionMapper } from 'easy-peasy';
import { IEmpresaFilter } from 'containers/Empresa/store/model';
import { IPagination } from 'components/Table';
// import Select from 'react-select';
import { Container, Row, Column } from 'components/Grid';
import Select from 'components/SelectInput';

import { ContainerFilter } from './styles';

interface IEmpresaFiltroProps {
  state: StateMapper<any, string>;
  actions: ActionMapper<any, string>;
}

const FilterEmpresa: React.FC<IEmpresaFiltroProps> = ({ state, actions }) => {
  const { filtro } = state;
  const { alterarPaginacao, alterarFiltro } = actions;

  const handleChange = useCallback(
    (e: any, n?: string) => {
      const paginationNovo: IPagination = {
        page: 0,
        size: 10,
        orderBy: 'nome',
        direction: 'asc',
      };
      alterarPaginacao(paginationNovo);

      const el = n || e.target.name;
      const vl = n ? e.id : e.target.value;
      const filtroNovo: IEmpresaFilter = {
        ...filtro,
        [el]: vl,
      };
      alterarFiltro(filtroNovo);
    },
    [alterarFiltro, alterarPaginacao, filtro],
  );

  const options = [
    { id: -1, name: 'Todos' },
    { id: 1, name: 'Ativos' },
    { id: 0, name: 'Inativos' },
  ];

  return (
    <ContainerFilter>
      <Container>
        <Row>
          <Column mobile={12} tablet={12} desktop={4}>
            <Input
              name="nome"
              placeholder="Pesquisar por nome"
              value={filtro.nome}
              onChange={handleChange}
            />
          </Column>

          <Column mobile={12} tablet={12} desktop={2}>
            <Select
              search={filtro.status}
              options={options}
              handleChange={handleChange}
              bottom={false}
            />
          </Column>
        </Row>
      </Container>
    </ContainerFilter>
  );
};

export default FilterEmpresa;
