import { useMemo } from 'react';
import pastelPalette from '~/theme/pastelPalette';
import { pickHashedRandom } from '~/utils/array';
import { StyledTag, StyledTagList } from './styles';
import { TagListProps } from './types';

export default function TagList({ list }: TagListProps) {
  const tagsWithColor = useMemo(
    () => list.map((x) => [x, pickHashedRandom(pastelPalette, x)]),
    [list],
  );

  return (
    <StyledTagList>
      {tagsWithColor.map(([tag, color]) => (
        <StyledTag color={color}>{tag}</StyledTag>
      ))}
    </StyledTagList>
  );
}
