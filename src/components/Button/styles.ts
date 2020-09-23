import styled from 'styled-components/macro';

export const ButtonPrimary = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white);

  /* :hover {
    color: #fff;
    background-color: #0069d9;
  } */
`;

export const ButtonSecondary = styled.button`
  background-color: var(--color-action);
  color: #fff;
  /* :hover {
    color: #000;
    background-color: #22252a;
  } */
`;

export const ButtonDefault = styled.button`
  background-color: var(--color-default);
  color: var(--color-white);

  :hover {
    color: #fff;
    background-color: #5a6268;
  }
`;
