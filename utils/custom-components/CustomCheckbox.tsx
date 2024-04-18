import React from "react";

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <div className="custom_checkbox_row">
      <input
        className="custom_check_box"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
      <style jsx>{`
        label {
          display: inline-block;
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          font-size: 16px;
        }
        label:before {
          content: '';
          position: absolute;
          left: 0;
          top: 2px;
          width: 20px;
          height: 20px;
          border: 1px solid #E95C40;
          border-radius: 4px;
        }
        input[type='checkbox']:checked + label:before {
          background-color: red;
        }
        label:after {
          content: '';
          position: absolute;
          left: 7px;
          top: 4px;
          width: 7px;
          height: 12px;
          border: solid#fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          display: ${checked ? "block" : "none"};
        }
      `}</style>
    </div>
  );
};

export default CustomCheckbox;
