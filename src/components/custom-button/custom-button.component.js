import React from "react";

import { ButtonWrapper, PgnBtn } from "./custom-button.styles";

import ForwardBtn from "../../images/icons/material-symbols_arrow-forward-rounded.svg";
import BackBtn from "../../images/icons/material-symbols_arrow-back.svg";

const CustomButton = ({ children }) => (
  <ButtonWrapper>{children}</ButtonWrapper>
);

export const PaginationBtn = ({ type, handleClick }) => {
  return (
    <PgnBtn onClick={handleClick}>
      <img
        src={type === "forward" ? ForwardBtn : BackBtn}
        alt={`${type}-arrow`}
      />
    </PgnBtn>
  );
};
export default CustomButton;
