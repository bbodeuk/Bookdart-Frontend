// eslint-disable-next-line import/no-cycle
import useAuthStore from '~/store/useAuthStore';
import fetcher from '~/utils/fetcher';

export default function createInstance() {
  const { token } = useAuthStore.getState();

  return fetcher({
    baseUrl: import.meta.env.VITE_API_SERVER_URI,
    commonHeader: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
