import instance from './instance';
import { ApiResponse, RefreshAuthTokenResponse } from '~/@types/api';

export default function getRefreshedToken(): ApiResponse<RefreshAuthTokenResponse> {
  return instance.get('/auth/refresh');
}
