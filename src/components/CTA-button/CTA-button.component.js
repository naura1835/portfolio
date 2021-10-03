import React from "react";
import { Link } from "react-router-dom";

import { ButtonWrapper, SocialIcon } from "./CTA-button.styles";

const CTAButton = ({ socialIcon, altText, classInfo }) => {
  return (
    <ButtonWrapper className={classInfo}>
      <Link to="/">
        <SocialIcon
          src={require(`../../images/${socialIcon}`).default}
          alt={altText}
        />
      </Link>
    </ButtonWrapper>
  );
};

export default CTAButton;
