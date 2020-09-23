import React, { useCallback, useEffect } from 'react';
import { StateMapper, ActionMapper } from 'easy-peasy';
import { Container as ContainerTable } from './styles';
import THead from './THead';
import TBody from './TBody';
import TablePagination from './TPagination/index';

export interface IColumn {
  nome: string;
  key: string;
  tamanho: string;
  order: boolean;
  tipo?: string;
}

export interface IData {
  id: string;
  [key: string]: any;
}

export interface ITableProps {
  columns: IColumn[];
  state: StateMapper<any, string>;
  actions: ActionMapper<any, string>;
  isEdit: boolean;
  resource: string;
}

export interface IList {
  data: IData[];
  totalRecords: number;
}

export interface IPagination {
  page: number;
  size: number;
  orderBy: string;
  direction: 'asc' | 'desc' | undefined;
}

const Table: React.FC<ITableProps> = ({
  columns,
  state,
  actions,
  isEdit,
  resource,
}) => {
  const { list, filtro, pagination, loading } = state;
  const { listarEmpresas, alterarPaginacao } = actions;

  useEffect(() => {
    const params = { ...filtro, ...pagination };
    listarEmpresas(params);
  }, [listarEmpresas, filtro, pagination]);

  const handleChangePage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
      const paginationNovo = {
        ...pagination,
        page,
      };
      alterarPaginacao(paginationNovo);
    },
    [alterarPaginacao, pagination],
  );

  const handleRowsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const paginationNovo = {
      ...pagination,
      page: 0,
      size: parseInt(e.target.value, 10),
    };
    alterarPaginacao(paginationNovo);
  };

  const handleOrder = (
    property: string,
    direction: 'asc' | 'desc' | undefined,
  ) => {
    const paginationNovo = {
      ...pagination,
      orderBy: property,
      direction,
    };
    alterarPaginacao(paginationNovo);
  };

  return (
    <>
      <ContainerTable>
        <THead
          columns={columns}
          pagination={pagination}
          handleOrder={(
            property: string,
            direction: 'asc' | 'desc' | undefined,
          ) => handleOrder(property, direction)}
          isEdit
        />
        <TBody
          data={list.data}
          columns={columns}
          isEdit={isEdit}
          resource={resource}
          loading={loading}
        />
      </ContainerTable>
      <TablePagination
        totalRecords={list.totalRecords}
        pagination={pagination}
        handleRowsPerPage={handleRowsPerPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default Table;
