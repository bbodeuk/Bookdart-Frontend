import { IconProps } from './types';

export default function Icon({ name, alt }: IconProps) {
  return (
    <i className={`icon-${name}`} role="img" aria-label={`${alt || name}`} />
  );
}
