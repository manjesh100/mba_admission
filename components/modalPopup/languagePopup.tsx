import React from "react";

type TPopup = {
    openPopUp: boolean,
    closePopUp: () => void
}
const LanguagePopup = ({ openPopUp, closePopUp }: TPopup) => {
  const handlelosePopUp = (e: any) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) {return null;}

  return (
    <div id='ModelContainer' onClick={handlelosePopUp} className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-60 backdrop-blur-sm'>
      <div className="popup_container">
        <div className="popup_title">Update your settings</div>
        <div className="popup_description">Set where you live, what language you speak, and the currency you use</div>
        <div className="form_grouop">
            <label className="label_txt">Region</label>
            <select name="Region" className="drop_down_box">
                <option value={"Australia"}>Australia</option>
                <option value={"India"}>India</option>
                <option value={"United Kingdom"}>United Kingdom</option>
            </select>
        </div>
        <div className="form_grouop">
            <label className="label_txt">Language</label>
            <select name="Region" className="drop_down_box">
                <option value={"Australia"}>English (US)</option>
                <option value={"India"}>India (Hindi)</option>
                <option value={"United Kingdom"}>English (UK)</option>
            </select>
        </div>
        <div className="form_grouop">
            <label className="label_txt">Currency</label>
            <select name="Region" className="drop_down_box">
                <option value={"Australia"}>$ United States Dollar (USD)</option>
                <option value={"India"}>India (INR)</option>
                <option value={"United Kingdom"}>$ United Kingdom Dollar (UK)</option>
            </select>
        </div>
        <button type="button" className="popum_save_btn">Save</button>
      </div>
    </div>
  );
};

export default LanguagePopup;