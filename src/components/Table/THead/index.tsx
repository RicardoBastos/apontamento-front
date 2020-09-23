import React from 'react';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { IColumn, IPagination } from '../index';

interface ITableHeaderProps {
  columns: IColumn[];
  pagination: IPagination;
  handleOrder(property: string, direction: 'asc' | 'desc' | undefined): void;
  isEdit: boolean;
}

const TableHeader: React.FC<ITableHeaderProps> = ({
  columns,
  pagination,
  handleOrder,
  isEdit,
}) => {
  const cells = columns.map((col) => (
    <th key={col.nome} style={{ width: col.tamanho }}>
      {col.order ? (
        <label
          style={{ cursor: 'pointer' }}
          onClick={() =>
            handleOrder(
              col.key,
              pagination.direction === 'asc' ? 'desc' : 'asc',
            )
          }
        >
          {col.nome}{' '}
          {pagination.direction === 'asc' && pagination.orderBy === col.key ? (
            <MdArrowUpward />
          ) : (
            <MdArrowDownward />
          )}
        </label>
      ) : (
        col.nome
      )}
    </th>
  ));

  isEdit &&
    cells.push(
      <th key="opcoes" style={{ width: '10%', textAlign: 'center' }}>
        Opções
      </th>,
    );

  return (
    <thead>
      <tr>{cells}</tr>
    </thead>
  );
};

export default TableHeader;
