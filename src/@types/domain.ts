export interface Tag {
  name: string;
  count: number;
}
export interface Bookmark {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

export type Visibility = 'private' | 'public';

export interface Group {
  groupId: string;
  name: string;
  visibility: Visibility;
}
