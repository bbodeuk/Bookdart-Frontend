import instance from './instance';
import { ApiResponse, RefreshAuthTokenResponse } from '~/@types/api';

export function getUserInfo() {
  return instance.get('/auth/me');
}

export function getRefreshedToken(): ApiResponse<RefreshAuthTokenResponse> {
  return instance.get('/auth/refresh');
}
