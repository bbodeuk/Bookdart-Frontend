/*
 * Original source of this code:
 * https://24ways.org/2010/calculating-color-contrast
 *
 */

export default function getContrastYIQ(hexColor: string) {
  const hex = hexColor.replace('#', '');
  const red = Number.parseInt(hex.substring(0, 2), 16);
  const green = Number.parseInt(hex.substring(2, 4), 16);
  const blue = Number.parseInt(hex.substring(4, 6), 16);
  const yiq = (red * 299 + green * 587 + blue * 114) / 1000;

  return yiq >= 128 ? '#000000' : '#ffffff';
}
