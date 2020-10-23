import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  background: var(--color-cinza);
  padding: 5px 15px;
  height: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ComboPagina = styled.div`
  /* width: 200px; */
  @media (max-width: 800px) {
    margin: 5px 0;
  }
`;

export const Total = styled.div`
  @media (max-width: 800px) {
    margin: 5px 0;
  }
`;

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
      border: 1px solid #222;
    }
  }

  button:disabled,
  button[disabled] {
    background: #2d3035;
    border: none;
  }

  @media (max-width: 800px) {
    margin: 5px 0;
  }
`;
