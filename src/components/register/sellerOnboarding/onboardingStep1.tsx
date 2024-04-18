import { Key, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Image from "next/image";
import CustomRadioButton from "@/utils/custom-components/CustomRadioButton";
import Checkbox from "@/utils/custom-components/Checkbox";
import { useGetlanguageListQuery } from "@/ApiServices/common/commonAPI";
import FileUploadButton from "@/utils/custom-components/fileUploadButton";
import { constImage } from "@/utils/constImage";
import { TOnboardingStepOne } from "@/utils/type";
import { useOnboardingStepOneMutation } from "../../../../ApiServices/signup/signupAPI";
import { showToastSuccess, showToastError } from "@/utils/toast";
import { constantsKey } from "@/common/constantKey";

const yearsOfExperience = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];
const locationList = [
  { value: "India", label: "India" },
  { value: "UK", label: "UK" },
  { value: "AUS", label: "AUS" },
  { value: "USA", label: "USA" },
  { value: "UAE", label: "UAE" },
];
const educationBackgound = [
  { value: "MBA", label: "MBA" },
  { value: "MCA", label: "MCA" },
  { value: "BSC", label: "BSC" },
  { value: "BCA", label: "BCA" },
  { value: "PGDM", label: "UAE" },
];

interface CheckboxData {
  _id: string;
  language: string;
}

const OnboardingStep1 = () => {
  const [selectedOption, setSelectedOption] = useState("HE_HIM");
  const [experince, setExperience] = useState<number | null>(null);
  const [location, setLocation] = useState<number | null>(null);
  const [education, setEducation] = useState<number | null>(null);
  const [introfile, setIntroFile] = useState<string | null>(null);
  const { data: languageApiResponse } = useGetlanguageListQuery();
  // console.log('data', languageApiResponse?.data?.languages?.records)
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };
  const [selectLanguages, setSelectLanguages] = useState<CheckboxData[]>([]);

  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    const updatedCheckboxes = selectLanguages?.map((item) =>
      item._id === id ? { ...item, isChecked } : item
    );
    setSelectLanguages(updatedCheckboxes);
  };

  const [onBoardingStepsOne] = useOnboardingStepOneMutation();
  const initalValues: TOnboardingStepOne =
  {
    selectedOption: '',
    ourSelf: '',
    experience: null,
    location: '',
    educational: '',
    languages: '',
    introImage: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm<TOnboardingStepOne>({
    defaultValues: initalValues,
  });
  function selectedLanguaseList() {
    const selectLanguage = selectLanguages
      ?.filter((item: any) => item.isChecked)
      .map((item) => {
        return { _id: item?._id, language: item?.language };
      });
    return selectLanguage;
  }
  const onSubmit = async (data: TOnboardingStepOne) => {

    //selectedOption
    // console.log(data.ourSelf)
    //console.log(experince);
    //console.log(location);
    //console.log(education);
    //console.log(introfile);

    const payload = {
      pronoun: selectedOption,
      info: data.ourSelf,
      exp_year: experince,
      location: location,
      educational_background: education,
      languages: selectedLanguaseList(),
      intro_file: {
        file_path: "/path/to/intro_file/",
        file_name: 'intro_file.png'
      }
    }
    onBoardingStepsOne(payload);

  }

  useEffect(() => {
    setSelectLanguages(languageApiResponse?.data?.languages?.records);
  }, [languageApiResponse?.data?.languages?.records]);

  const handleFileSelect = (file: File) => {
    // Handle the selected file (e.g., upload to server)
    //console.log('Selected file:', file.name);
    setIntroFile(file.name);
    // You can implement file upload logic here 
  };


  const handleExperienceChange = (e: any) => {
    setExperience(e.value);
  }
  const handleLocationChange = (e: any) => {
    setLocation(e.value);
  }
  const handleEducationChange = (e: any) => {
    setEducation(e.value);
  }

  return (
    <>
      <div className="container_width px-5">
        <div className="onboarding_heading_1 mt-8">Completion Progress</div>
        <div className="onboarding_steps_tab">
          <div className="tab_steps">
            <div className="bullet_circle">&nbsp;</div>
            <div className="steps_heading">About</div>
          </div>
          <div className="tab_steps">
            <div className="bullet_circle">&nbsp;</div>
            <div className="steps_heading">Skills & Expertise</div>
          </div>
          <div className="tab_steps">
            <div className="bullet_circle">&nbsp;</div>
            <div className="steps_heading">Experience</div>
          </div>
          <div className="tab_steps">
            <div className="bullet_circle">&nbsp;</div>
            <div className="steps_heading">Additional Information</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="full_width_with_bg">
          <div className="container_width px-5 light_red_bg">
            <div className="onboarding_container">
              <div className="onboarding_heading_1 mt-8">About</div>
              <div className="field_section_heading">
                Which pronouns do you prefer when you are addresses?
              </div>
              <div className="radio_btn_row">
                <CustomRadioButton
                  id="HE_HIM"
                  name="He/Him"
                  checked={selectedOption === "HE_HIM"}
                  onChange={handleOptionChange}
                />
                <CustomRadioButton
                  id="SHE_HER"
                  name="She/Her"
                  checked={selectedOption === "SHE_HER"}
                  onChange={handleOptionChange}
                />
                <CustomRadioButton
                  id="THEY_THEM"
                  name="They/Them"
                  checked={selectedOption === "THEY_THEM"}
                  onChange={handleOptionChange}
                />
                <CustomRadioButton
                  id="NEITHER"
                  name="Neither"
                  checked={selectedOption === "NEITHER"}
                  onChange={handleOptionChange}
                />
              </div>
              <div className="field_section_heading">Tell About Yourself</div>
              <textarea id="" rows={5} placeholder="Type here..." className="textare_style"
                {...register("ourSelf")}
              ></textarea>
              <div className="border_seprater">&nbsp;</div>
              <div className="field_section_heading">General Information</div>
              <div className="general_information_sec">
                <div className="grid_1">
                  <label className="label_style">Years of experience</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={{ value: "0", label: "0" }}
                    isSearchable
                    // name="color"
                    options={yearsOfExperience}
                    onChange={(e) => handleExperienceChange(e)}
                  />
                </div>
                <div className="grid_2">
                  <label className="label_style">Location</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={{
                      value: "Start Typing...",
                      label: "Start Typing...",
                    }}
                    isClearable={false}
                    isSearchable
                    name="color"
                    options={locationList}
                    onChange={(e) => handleLocationChange(e)}
                  />
                </div>
                <div className="grid_3">
                  <label className="label_style">Educational Background</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={{
                      value: "Start Typing...",
                      label: "Start Typing...",
                    }}
                    isClearable={false}
                    isSearchable
                    name="color"
                    options={educationBackgound}
                    onChange={(e) => handleEducationChange(e)}

                  />
                </div>
              </div>
              <div className="language_section mt-2">
                <label className="label_style">Languages</label>
                <input
                  type="text"
                  name="search_language"
                  className="txt_box_style"
                  placeholder="Start Typing"
                />
                <div className="language_checkbox">
                  {languageApiResponse?.data?.languages?.records?.map(
                    (checkbox: { _id: string; language: string }) => (
                      <Checkbox
                        key={checkbox._id}
                        id={checkbox._id}
                        value={checkbox.language}
                        onChange={handleCheckboxChange}
                      />
                    )
                  )}
                  {/* <button onClick={handleSubmitBtn}>Submit</button> */}
                </div>
              </div>
              <br />
              <div className="field_section_heading">Intro</div>
              <FileUploadButton onFileSelect={handleFileSelect} />
              <div className="next_step_btn">
                <button type="submit">Next Step
                  <Image src={constImage.next_step_arrow_icon} width={6} height={6} alt="" />
                </button>
              </div>



            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default OnboardingStep1;
