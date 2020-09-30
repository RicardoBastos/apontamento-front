import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  padding-bottom: 20px;
  &:before,
  &after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export interface IColumnGridProps {
  mobile: number;
  tablet: number;
  desktop: number;
  direction?: string;
}

const getWidthGrid = (value: number): string | any => {
  if (!value) return;

  const width = (value / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%`;
};

export const Column = styled.div<IColumnGridProps>`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ direction }) => direction};

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
