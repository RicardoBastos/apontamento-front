import styled from 'styled-components/macro';

export interface ContainerSelectProps {
  isVisible: boolean;
  bottom?: boolean;
}

export const ContainerSelect = styled.div<ContainerSelectProps>`
  display: ${({ isVisible }) =>
    isVisible ? 'show !important' : 'none !important'};

  position: absolute;
  left: -1px;
  right: -1px;
  top: ${({ bottom }) => (bottom ? '-87px' : '30px')};

  ul {
    padding: 0;
    margin: 0;

    li {
      text-decoration: none;
      padding: 5px 10px;
      list-style: none;
      min-height: 28px;
      font-size: 14px;
      border: 1px solid #444951;
      background: #2d3035;
      cursor: pointer;

      :hover {
        background-color: #444951;
        border-color: #444951;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  outline: none;
  border: 0;
  border: 1px solid #444951;
  display: flex;
  align-items: center;
  position: relative;

  label {
    pointer-events: none;
    position: absolute;
    top: -20px;
    margin-left: -10px;
    transition: all 0.3s ease-out;
  }

  input {
    flex: 1;
    outline: none;
    border: 0;
    cursor: pointer;
    padding: 0.15rem 0.5rem;
    line-height: 1.5;
    font-size: 1rem;
  }

  button {
    background: transparent;
    height: auto;
    padding: 0;
    outline: none;
    display: flex;
    margin-right: 5px;
    cursor: pointer;
  }
`;
