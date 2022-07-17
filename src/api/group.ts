import { composeQuery } from '~/utils/query';
import instance from './instance';
import {
  ApiResponse,
  GetBookmarksFromGroupResponse,
  GetGroupsResponse,
} from '~/@types/api';
import { Visibility } from '~/@types/domain';

export function createGroup({
  name,
  visibility,
}: {
  name: string;
  visibility: Visibility;
}): ApiResponse {
  return instance.post('/groups', {
    body: JSON.stringify({ name, visibility }),
  });
}

export function updateGroup({
  groupId,
  name,
  visibility,
}: {
  groupId: string;
  name?: string;
  visibility?: Visibility;
}): ApiResponse {
  return instance.patch(`/groups/${groupId}`, {
    body: JSON.stringify({ name, visibility }),
  });
}

export function deleteGroup(groupId: string): ApiResponse {
  return instance.delete(`/groups/${groupId}`);
}

export function getGroups(): ApiResponse<GetGroupsResponse> {
  return instance.get('/groups');
}

export function getBookmarksFromGroup({
  groupId,
  order,
  tag,
  search,
  page,
}: {
  groupId: string;
  order?: string;
  tag?: string;
  search?: string;
  page?: number;
}): ApiResponse<GetBookmarksFromGroupResponse> {
  const query = composeQuery({ order, tag, search, page });

  return instance.get(`/groups/${groupId}${query}`);
}
