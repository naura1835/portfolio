import React from "react";
import { FormInput } from "./custom-form-input.styles";

const CustomFormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <FormInput placeholder={label} onChange={handleChange} {...otherProps} />
  );
};
export default CustomFormInput;
