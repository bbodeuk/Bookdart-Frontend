import { Dispatch, SetStateAction } from 'react';

export interface TagInputProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}
