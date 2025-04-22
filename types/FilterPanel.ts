// Types.ts - Centralize our type definitions
export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSectionData = {
  id: string;
  title: string;
  options: FilterOption[];
};


export type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};


