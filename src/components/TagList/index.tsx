import { useMemo } from 'react';
import pastelPalette from '~/theme/pastelPalette';
import { pickHashedRandom } from '~/utils/array';
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
              {/* FIXME: Use icon font instead */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                height="48"
                width="48"
              >
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
              </svg>
            </TagRemoveButton>
          )}
        </StyledTag>
      ))}
      {children}
    </StyledTagList>
  );
}
