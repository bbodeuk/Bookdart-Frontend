import { useMemo } from 'react';
import pastelPalette from '~/theme/pastelPalette';
import { pickHashedRandom } from '~/utils/array';
import Icon from '~/components/Icon';
import { StyledTag, StyledTagList, TagRemoveButton } from './styles';
import { TagListProps } from './types';

export default function TagList({
  list,
  children,
  removable,
  setTags,
}: TagListProps) {
  const tagsWithColor = useMemo(
    () => list.map((x) => [x, pickHashedRandom(pastelPalette, x)]),
    [list],
  );

  return (
    <StyledTagList>
      {tagsWithColor.map(([tag, color]) => (
        <StyledTag color={color}>
          {tag}
          {removable && (
            <TagRemoveButton
              type="button"
              onClick={() => {
                setTags?.((prev) => [...prev.filter((x) => x !== tag)]);
              }}
            >
              <Icon name="close" alt="태그 제거" />
            </TagRemoveButton>
          )}
        </StyledTag>
      ))}
      {children}
    </StyledTagList>
  );
}
