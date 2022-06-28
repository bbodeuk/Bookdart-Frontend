import { useMemo, useState } from 'react';
import { StyledInput, StyledLabel } from '~/components/Input/styles';
import TagList from '~/components/TagList';
import { TagInputWrap, TagInputForm } from './styles';
import { TagInputProps } from './types';

export default function TagInput({ tags, setTags }: TagInputProps) {
  const [value, setValue] = useState('');
  const placeholder = useMemo(() => (tags.length === 0 ? ' ' : ''), [tags]);

  return (
    <TagInputWrap>
      <TagInputForm
        onSubmit={(event) => {
          const valueToAdd = value;

          event.preventDefault();
          setValue('');

          if (valueToAdd === '' || tags.includes(valueToAdd)) {
            return;
          }

          setTags((prev) => [...prev, value]);
        }}
      >
        <TagList list={tags} removable setTags={setTags}>
          <>
            <StyledInput
              type="text"
              placeholder={placeholder}
              style={{ width: 'auto', margin: 0, flexGrow: '1' }}
              value={value}
              onChange={({ target }) => {
                setValue(target.value);
              }}
            />
            <StyledLabel>태그 목록</StyledLabel>
          </>
        </TagList>
      </TagInputForm>
    </TagInputWrap>
  );
}
