import React from "react";

import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { CustomTextArea, Wrapper } from "./contact-form.styles";

const ContactForm = () => {
  const handleChange = (e) => {
    const [value, name] = e.target;
  };
  return (
    <Wrapper>
      <CustomFormInput
        name="full-name"
        type="text"
        // value=
        handleChange={handleChange}
        label="Your full name"
        required
      />
      <CustomFormInput
        name="email"
        type="email"
        // value=
        handleChange={handleChange}
        label="Your email address"
        required
      />
      <CustomTextArea
        name="full-name"
        type="text"
        // value=
        onChange={handleChange}
        placeholder="Message"
        required
        cols="50"
        rows="20"
      />
    </Wrapper>
  );
};
export default ContactForm;
