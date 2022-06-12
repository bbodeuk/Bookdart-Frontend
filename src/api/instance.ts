import fetcher from '../utils/fetcher';

// FIXME: Add authorization header
const instance = fetcher({
  baseUrl: import.meta.env.VITE_API_SERVER_URI,
  commonHeader: {
    'Content-Type': 'application/json',
  },
});

export default instance;
