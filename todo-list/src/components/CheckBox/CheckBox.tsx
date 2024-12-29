import { ChangeEvent, FC, useState } from "react";
import "./CheckBox.scss";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked: initialChecked,
  onChange,
  className,
}) => {
  const [checked, setChecked] = useState(initialChecked || false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange?.(event.target.checked);
  };

  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="checkbox-input"
      />
      <span className="checkbox-box">
        {checked && <span className="checkbox-check"></span>}
      </span>
    </label>
  );
};
