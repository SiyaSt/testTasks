import { Options } from "../../types/types";
import { ChangeEvent, FC } from "react";

interface SelectComponentProps {
  options: Options[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectComponent: FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
}) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
