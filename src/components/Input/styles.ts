import styled from 'styled-components/macro';

export const MessageError = styled.div`
  margin-top: 3px;
`;

export const Container = styled.div`
  padding: 0 5px;
  width: 100%;

  label {
    font-size: 1rem;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.15rem 0.5rem;
    line-height: 1.5;
    border: 1px solid #444951;
    background: transparent;
    border-radius: 0;
    color: #979a9f;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }
`;
