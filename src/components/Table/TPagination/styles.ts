import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  background: var(--color-cinza);
  padding: 0 15px;
  height: 60px;
`;

export const ComboPagina = styled.div`
  width: 200px;
`;

export const Total = styled.div``;

export const Pagination = styled.div`
  display: flex;

  button {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background: #2d3035;
    color: #a5a7ab;
    text-align: center;
    cursor: pointer;

    span {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :hover {
      background-color: #2d3035;
    }
  }

  button:disabled,
  button[disabled] {
    background-color: #2a2d32;
    color: #a5a7ab;
  }
`;
