import create from 'zustand';
import { getUserInfo } from '~/api';
import { AuthStore } from '~/@types/useAuthStore';

export default create<AuthStore>(() => ({
  initialize: async () => {
    await getUserInfo();
  },
}));
