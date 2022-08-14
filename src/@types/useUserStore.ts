import { Group, Tag } from './domain';

export interface UserStore {
  group?: Group[];
  setGroup: (group: Group[]) => void;
  fetchGroup: () => Promise<Group[]>;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
}
