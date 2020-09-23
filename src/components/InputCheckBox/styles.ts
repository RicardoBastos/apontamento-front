import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0 5px;

  label {
    font-size: 1rem;
    color: #333;

    display: inline-block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  input {
    /* width: 100%; */
    padding: 0.15rem 0.5rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }
`;
