import React from 'react';
import Select from 'components/Select';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from 'assets/icons';
import { IPagination } from '../index';
import { Container, ComboPagina, Total, Pagination } from './styles';

interface ITablePaginationProps {
  totalRecords: number;
  pagination: IPagination;
  handleRowsPerPage(e: React.ChangeEvent<HTMLSelectElement>): void;
  handleChangePage(e: React.MouseEvent<HTMLButtonElement>, page: number): void;
}

// eslint-disable-next-line react/display-name
const TablePagination: React.FC<ITablePaginationProps> = ({
  totalRecords,
  pagination,
  handleChangePage,
  handleRowsPerPage,
}) => {
  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, pagination.page + 1);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, pagination.page - 1);
  };

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, 0);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(
      event,
      Math.max(0, Math.ceil(totalRecords / pagination.size) - 1),
    );
  };

  return (
    <Container>
      <ComboPagina>
        <Select
          name="status"
          label="Status"
          noLabel
          value={pagination.size}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleRowsPerPage(e)
          }
          options={[
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '30', label: '30' },
          ]}
        />
      </ComboPagina>
      <Total>
        {`Mostrando ${pagination.size * pagination.page + 1} -  ${
          pagination.size * (pagination.page + 1)
        }  de  ${totalRecords} registros`}
      </Total>
      <Pagination>
        <>
          <button
            type="button"
            disabled={pagination.page === 0}
            onClick={handleFirstPageButtonClick}
          >
            <span>
              <MdFirstPage size={22} />
            </span>
          </button>

          <button
            type="button"
            disabled={pagination.page === 0}
            onClick={handleBackButtonClick}
          >
            <span>
              <MdKeyboardArrowLeft size={22} />
            </span>
          </button>
          <button
            type="button"
            disabled={
              pagination.page >= Math.ceil(totalRecords / pagination.size) - 1
            }
            onClick={handleNextButtonClick}
          >
            <span>
              <MdKeyboardArrowRight size={22} />
            </span>
          </button>
          <button
            type="button"
            disabled={
              pagination.page >= Math.ceil(totalRecords / pagination.size) - 1
            }
            onClick={handleLastPageButtonClick}
          >
            <span>
              <MdLastPage size={22} />
            </span>
          </button>
        </>
      </Pagination>
    </Container>
  );
};

export default TablePagination;
