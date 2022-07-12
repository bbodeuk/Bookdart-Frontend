export type IconNames =
  | 'add'
  | 'close'
  | 'search'
  | 'filter_list_off'
  | 'filter_list'
  | 'sort'
  | 'filter_alt'
  | 'settings';

export interface IconProps {
  name: IconNames;
  alt?: string;
}
