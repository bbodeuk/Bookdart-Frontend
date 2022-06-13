import instance from './instance';
import { ApiResponse, CreateBookmarkResponse } from '../@types/api';

export function createBookmark({
  groupId,
  link,
  tags,
}: {
  groupId: string;
  link: string;
  tags: string[];
}): ApiResponse<CreateBookmarkResponse> {
  return instance.post('/bookmarks', {
    body: JSON.stringify({ groupId, link, tags }),
  });
}

export function deleteBookmark(bookmarkId: string): ApiResponse {
  return instance.delete(`/bookmarks/${bookmarkId}`);
}
