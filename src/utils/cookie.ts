import { Cookies } from '~/@types/cookie';

export function getCookies(cookie = document.cookie, decode = true): Cookies {
  if (!cookie) {
    return {};
  }

  const cookies: Cookies = {};
  const storedCookies = cookie.split(';');

  // eslint-disable-next-line no-plusplus
  for (let i = 0, len = storedCookies.length; i < len; i++) {
    const [key, value] = storedCookies[i];

    cookies[key] = decode ? decodeURIComponent(value) : value;
  }

  return cookies;
}

export function getCookie(key: string) {
  return getCookies()[key];
}

export function setCookie(key: string, value: string, expires?: number) {
  const expiresString = expires ? `Max-Age=${expires}` : '';

  document.cookie = `${key}=${value}; ${expiresString}`;
}

export function deleteCookie(key: string) {
  setCookie(key, '', -1);
}
