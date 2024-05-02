export interface Option {
  id: string;
  name: string;
}

export interface SelectProps {
  selected?: Option | null;
  options: Option[];
  onClose?: () => void;
  onChange: (selected: Option | null) => void;
  placeholder?: string;
}
