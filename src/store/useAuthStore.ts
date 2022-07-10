import create from 'zustand';
import { getRefreshedToken } from '~/api';
import { deleteCookie, getCookie } from '~/utils/cookie';
import { AuthStore } from '~/@types/useAuthStore';

export default create<AuthStore>((set) => ({
  // FIXME: Remove dummy token
  token: 'DUMMY',
  initialize() {
    const tokenKey = 'access-token';
    const savedToken = localStorage.getItem(tokenKey);
    const cookieToken = getCookie(tokenKey);

    if (savedToken) {
      set((state) => ({ ...state, token: savedToken }));
      return;
    }

    if (!cookieToken) {
      return;
    }

    localStorage.setItem(tokenKey, cookieToken);
    deleteCookie(tokenKey);
  },
  refresh: async () => {
    const response = await getRefreshedToken();

    if (!response.ok) {
      return;
    }

    set((state) => ({ ...state, token: response.token }));
  },
}));
