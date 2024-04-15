import React from "react";

interface CustomRadioButtonProps {
    id: string;
    name: string;
    checked?: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
    id,
    name,
    checked,
    onChange,
}) => {
    return (
        <div className="custom_radio_btn_flex_row">
            <input
                className="custom_radio_btn"
                type="radio"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{name}</label>
        </div>
    );
};

export default CustomRadioButton;
