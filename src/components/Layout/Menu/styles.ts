import styled from 'styled-components/macro';

export interface MenuProps {
  openClose: boolean;
}

export const MenuStyle = styled.div<MenuProps>`
  margin-left: ${({ openClose }) => (openClose ? '0px' : '-300px')};
  width: 300px;
  height: calc(100vh - 70px);
  transition-duration: 0.4s;
  color: #bfc1c4;
  background: #2d3035;
  font-size: 1rem;
  ul {
    line-height: 60px;

    li {
      list-style: none;
      padding: 5px 3px;

      a {
        height: 60px;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #bfc1c4;
        font-size: 1rem;

        svg {
          margin: 0 10px;
        }
      }
      a:visited {
        color: #bfc1c4;
      }
      a:hover {
        background: #34373d;
      }
    }
  }
`;
