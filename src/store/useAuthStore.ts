import create from 'zustand';
import { getRefreshedToken, getUserInfo } from '~/api';
import { AuthStore } from '~/@types/useAuthStore';

// FIXME: Fix types
export default create<AuthStore>(() => ({
  initialize: async () => {
    await getUserInfo();
  },
  refresh: async () => {
    await getRefreshedToken();
  },
}));
