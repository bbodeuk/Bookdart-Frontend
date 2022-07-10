// eslint-disable-next-line import/no-cycle
import instance from './instance';
import { ApiResponse, RefreshAuthTokenResponse } from '~/@types/api';

export default function getRefreshedToken(): ApiResponse<RefreshAuthTokenResponse> {
  return instance().get('/auth/refresh');
}
