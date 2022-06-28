export function pickRandom<T>(array: T[]): T {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
}

export function pickHashedRandom<T>(array: T[], value: string): T {
  const absoluteHash = Math.abs(
    [...value].reduce(
      // eslint-disable-next-line no-bitwise
      (acc, cur) => cur.charCodeAt(0) + ((acc << 5) - acc),
      0,
    ),
  );

  return array[absoluteHash % array.length];
}
