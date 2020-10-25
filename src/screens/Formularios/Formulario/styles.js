import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: -45px;
  /* padding-right: 20px; */
  /* padding-left: 30px; */
`;

export const ColumnTable = styled.th`
  vertical-align: baseline;
  color: #516267;
  font-size: 12px;
  font-weight: normal;
`;

export const RowTable = styled.td`
  vertical-align: baseline;
  color: #516267;
  font-size: 12px;
  font-weight: normal;
`;

export const ContainerItem = styled.div`
  height: 100%;
  font-family: 'Circular Book';

  text-align: center;
  line-height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: ${({ active }) =>
    active ? 'linear-gradient(to top, #3ac47d 0%, #00acde 100%)' : ''};

  color: ${({ active }) => (active ? 'white' : '#516267')};

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Quantidade = styled.div`
  font-size: 30px;
`;
