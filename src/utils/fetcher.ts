import to from './to';
import {
  DummyPromise,
  ErrorBuilder,
  Instance,
  InstanceOptions,
  SendRequest,
} from '../@types/fetcher';

export default function fetcher({
  baseUrl = '',
  timeOut,
  commonHeader,
}: InstanceOptions = {}): Instance {
  const dummyPromise: DummyPromise = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: false,
          message: '로딩 시간 초과',
        });
      }, timeOut);
    });

  const error: ErrorBuilder = (
    message = '데이터를 불러오는 데 실패했습니다',
  ) => ({
    ok: false,
    message,
  });

  const sendRequest: SendRequest = async (
    resource: string,
    init?: RequestInit,
  ) => {
    const [responseError, response] = await to(
      timeOut
        ? Promise.race([dummyPromise(), fetch(`${baseUrl}${resource}`, init)])
        : fetch(`${baseUrl}${resource}`, init),
    );

    if (!response || responseError) {
      return error(responseError.message);
    }

    if (response instanceof Response) {
      const [, json] = await to(response.json());

      if (!json) {
        return error('JSON 파싱에 실패했습니다');
      }

      return json;
    }

    return response;
  };

  return {
    async get(resource: string, init: RequestInit = {}) {
      return sendRequest(resource, {
        ...init,
        headers: { ...init.headers, ...commonHeader },
        method: 'GET',
      });
    },
    async post(resource: string, init: RequestInit = {}) {
      return sendRequest(resource, {
        ...init,
        headers: { ...init.headers, ...commonHeader },
        method: 'POST',
      });
    },
    async delete(resource: string, init: RequestInit = {}) {
      return sendRequest(resource, {
        ...init,
        headers: { ...init.headers, ...commonHeader },
        method: 'DELETE',
      });
    },
    async put(resource: string, init: RequestInit = {}) {
      return sendRequest(resource, {
        ...init,
        headers: { ...init.headers, ...commonHeader },
        method: 'PUT',
      });
    },
    async patch(resource: string, init: RequestInit = {}) {
      return sendRequest(resource, {
        ...init,
        headers: { ...init.headers, ...commonHeader },
        method: 'PATCH',
      });
    },
  };
}
