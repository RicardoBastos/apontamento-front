import styled from 'styled-components/macro';

export const Container = styled.fieldset`
  border: 0;
  margin: 10px 0;

  legend {
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-black);
  }
`;
