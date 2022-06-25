import { composeQuery } from '~/utils/query';
import instance from './instance';
import { ApiResponse, GetTagsResponse } from '~/@types/api';

// eslint-disable-next-line import/prefer-default-export
export function getTags({
  groupId,
  limit,
}: {
  groupId: string;
  limit?: number;
}): ApiResponse<GetTagsResponse> {
  const query = composeQuery({
    groupId,
    limit,
  });

  return instance.get(`/tags${query}`);
}
