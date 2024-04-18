import React from 'react';

interface CheckboxProps {
  id: string;
  value: string;
  onChange: (id: string, isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, value, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.checked);
  };

  return (
    <div className="custom_checkbox_row">
      <input
        className="custom_check_box"
        type="checkbox"
        id={id}
        value={value}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id}>{value}</label>
      <style jsx>{`
        label {
          user-select: none;
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
        }
      `}</style>
    </div>
  );
};

export default Checkbox;
