import styled from 'styled-components';

const Container = styled.div`
  /* FIXME: Remove magic numbers */
  & {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 680px) {
    & {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }

  @media screen and (min-width: 980px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Container;
