import styled from 'styled-components';
import palette from '~/theme/palette';

export const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const StyledTag = styled('li').attrs(({ color }: { color: string }) => ({
  color,
}))`
  padding: 0.3rem 0.5rem;
  line-height: 1.5;
  background-color: ${({ color }) => color};
  border-radius: ${palette};
`;
