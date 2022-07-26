import styled from 'styled-components';

export const Loader = styled.div.attrs(({ loading }: { loading: boolean }) => ({
  loading,
}))`
  display: ${({ loading }) => (loading ? 'none' : 'block')};
`;

export const Container = styled.div``;
