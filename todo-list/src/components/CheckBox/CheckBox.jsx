import { useState } from "react";
import "./CheckBox.css";

export const Checkbox = ({ checked: initialChecked, onChange, className }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
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
        {checked && <span className="checkbox-check">✓</span>}
      </span>
    </label>
  );
};
