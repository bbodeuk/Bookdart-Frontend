import { ParsedQuery, QueryObject } from '~/@types/query';

export function parseQuery(query: string): ParsedQuery {
  return Object.fromEntries(
    query
      .substring(1)
      .split('&')
      .map((x) => x.split('='))
      .map(([key, value]) => [
        decodeURIComponent(key),
        decodeURIComponent(value),
      ]),
  );
}

export function composeQuery(object: QueryObject): string {
  return `?${Object.entries(object)
    .filter(([, value]) => value ?? false)
    .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
    .join('&')}`;
}
