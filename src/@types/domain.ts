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

export interface Group {
  groupId: string;
  name: string;
  public: boolean;
}
