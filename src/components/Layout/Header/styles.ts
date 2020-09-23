import styled from 'styled-components/macro';

export const Container = styled.header`
  height: 70px;
  width: 100%;
  background: var(--color-cinza);
  color: var(--color-white);
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1000 !important;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #22252a;
  position: fixed;
  span {
    margin-left: 20px;
    font-size: 24px;
  }

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 10px;
    }
  }
`;

export const Perfil = styled.div``;
