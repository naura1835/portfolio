import React from "react";

import { ButtonWrapper, SocialIcon } from "./CTA-button.styles";

const CTAButton = ({ url, socialIcon, altText, classInfo }) => {
  return (
    <ButtonWrapper className={classInfo}>
      <a href={url} target="_blank" rel="noreferrer">
        <SocialIcon
          src={require(`../../images/${socialIcon}`).default}
          alt={altText}
        />
      </a>
    </ButtonWrapper>
  );
};

export default CTAButton;
