import styled from 'styled-components/macro';

export const Container = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  background: #2d3035;
  border-collapse: collapse;
  display: block;
  padding: 10px;

  tbody {
    display: block;
    overflow: auto;
    height: calc(100vh - 411px);
    max-height: calc(100vh - 411px);
    width: 100%;
    tr {
      padding: 5px;
      height: 40px;

      svg {
        color: #a5a7ab;
      }
    }

    tr:nth-child(even) {
      background-color: #26292d;
    }
  }

  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  thead {
    text-align: left;
    background: var(--color-cinza);
    width: 100%;
    display: table;
    height: 60px;
    border-bottom: 1px solid #26292d;
  }

  th,
  td {
    padding: 5px;
    text-align: left;
  }
`;
