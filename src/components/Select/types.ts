export interface SelectItem {
  key: string;
  value: string;
  selected?: true;
  disabled?: boolean;
  hidden?: boolean;
}

export interface SelectProps {
  options: SelectItem[];
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (item: SelectItem) => unknown;
}
