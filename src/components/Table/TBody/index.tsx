import React from 'react';
import { MdDone, MdClose } from 'react-icons/md';
import { format } from 'date-fns';
import { MdModeEdit } from 'assets/icons';
import { Link } from 'react-router-dom';
import { IData, IColumn } from '../index';

interface ITableBodyProps {
  data: IData[];
  columns: IColumn[];
  isEdit: boolean;
  resource: string;
  loading: boolean;
}

const TableBody: React.FC<ITableBodyProps> = ({
  data,
  columns,
  isEdit,
  resource,
  loading,
}) => {
  function renderCell(tipo: string | undefined, valueData: any) {
    switch (tipo) {
      case 'data':
        return loading ? (
          <div>carregando</div>
        ) : (
          format(new Date(valueData), 'dd/MM/yyyy')
        );

      case 'boolean':
        return valueData ? <MdDone /> : <MdClose />;
      default:
        return loading ? <div>carregando</div> : valueData;
    }
  }

  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((col) => {
            return (
              <td key={col.key} style={{ width: col.tamanho }}>
                {renderCell(col.tipo, row[col.key])}
              </td>
            );
          })}
          {isEdit && (
            <td style={{ width: '10%', textAlign: 'center' }}>
              <Link to={`${resource}/${row.id}/editar`}>
                <span>
                  <MdModeEdit />
                </span>
              </Link>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
