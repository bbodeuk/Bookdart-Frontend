import { Group, Tag } from './domain';

export interface UserStore {
  group: Group[];
  setGroup: (group: Group[]) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
}
