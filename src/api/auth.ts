import instance from './instance';
import { ApiResponse, RefreshAuthTokenResponse } from '~/@types/api';

// eslint-disable-next-line import/prefer-default-export
export function getRefreshedToken(): ApiResponse<RefreshAuthTokenResponse> {
  return instance.get('/auth/refresh');
}
