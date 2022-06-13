import { Bookmark, Group, Tag } from './domain';

export interface SuccessResponse {
  ok: true;
}

export interface FailureResponse {
  ok: false;
  message: string;
}

export type ApiResponse<T = SuccessResponse> = Promise<T | FailureResponse>;

export interface CreateBookmarkResponse extends SuccessResponse {
  data: Bookmark;
}

export interface GetTagsResponse extends SuccessResponse {
  data: {
    tags: Tag[];
  };
}

export interface GetGroupsResponse extends SuccessResponse {
  data: {
    groups: Group[];
  };
}

export interface GetBookmarksFromGroupResponse extends SuccessResponse {
  data: {
    bookmarks: Bookmark[];
    pagination: {
      page: number;
      nextPage: boolean;
    };
  };
}
