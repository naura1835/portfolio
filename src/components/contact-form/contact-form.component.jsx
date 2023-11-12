import { useState } from "react";
import emailjs from "emailjs-com";

import CustomButton from "../custom-button/custom-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { CustomTextArea, Wrapper } from "./contact-form.styles";

const ContactForm = () => {
  const [data, setData] = useState({ fullName: "", email: "", message: "" });

  const { fullName, email, message } = data;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_5m0y6ta",
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          alert("Message sent, we will get back to you shortly.");
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <CustomFormInput
        name="fullName"
        type="text"
        value={fullName}
        handleChange={handleChange}
        label="Your full name"
        required
      />
      <CustomFormInput
        name="email"
        type="email"
        value={email}
        handleChange={handleChange}
        label="Your email address"
        required
      />
      <CustomTextArea
        name="message"
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Message"
        required
        cols="50"
        rows="10"
      />
      <CustomButton>send</CustomButton>
    </Wrapper>
  );
};
export default ContactForm;
