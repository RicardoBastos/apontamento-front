import styled from 'styled-components/macro';
import Arrow from 'assets/images/arrow-select.png';

export const Container = styled.div`
  padding: 0 5px;

  label {
    font-size: 1rem;
    color: #333;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  select {
    width: 100%;
    border: 1px solid #444951;
    background: transparent;
    border-radius: 0;
    color: #979a9f;
    background: url(${Arrow}) right center no-repeat;
    padding: 0.3rem 0.5rem;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    line-height: 1.2;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;
