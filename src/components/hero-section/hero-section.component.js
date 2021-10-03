import React, { useEffect, useRef } from "react";
import { gsap, Power1, Power3, Power4 } from "gsap";

import CTAButton from "../CTA-button/CTA-button.component";

import {
  HeroSectionContent,
  Intro,
  SpanText,
  SubTitle,
  TextAnimationDiv,
  Title,
  Wrapper,
} from "./hero-section.styles";

const HeroSection = () => {
  let heroRef = useRef(null);

  useEffect(() => {
    const firstBtn = heroRef.children[0].children[3];
    const secondBtn = firstBtn.nextSibling;
    const thirdBtn = secondBtn.nextSibling;
    const fourthBtn = thirdBtn.nextSibling;
    const intro = heroRef.children[0].children[0];
    const animateText = heroRef.children[0].children[1].children[0].children[0];
    const secondText = heroRef.children[0].children[2].children[0].children[0];

    let tl = gsap.timeline();

    tl.add()
      .from(intro, {
        y: -20,
        autoAlpha: 0,
        delay: 0.6,
      })
      .from([animateText, secondText], {
        y: "100%",
        ease: Power4.easeInOut,
        duration: 1.5,
        // delay: 0.8,
        stagger: 0.5,
      })
      .from([firstBtn, secondBtn, thirdBtn, fourthBtn], {
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        ease: Power3.easeIn,
        delay: 1.2,
      });
    gsap.to([firstBtn, secondBtn, thirdBtn, fourthBtn], {
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      y: -2,
      ease: Power1.easeInOut,
    });
  });

  return (
    <Wrapper
      ref={(el) => {
        heroRef = el;
      }}
    >
      <HeroSectionContent>
        <>
          <Intro>Hello, my name is</Intro>
          <TextAnimationDiv>
            <Title>
              <SpanText>Khadija Gwarzo</SpanText>
            </Title>
          </TextAnimationDiv>
          <TextAnimationDiv>
            <SubTitle>
              <SpanText>I'm a front-end developer.</SpanText>
            </SubTitle>
          </TextAnimationDiv>
        </>
        <CTAButton
          socialIcon="icons/akar-icons_twitter-fill.svg"
          altText="Twitter icon"
          classInfo="twt"
        />
        <CTAButton
          socialIcon="icons/akar-icons_github-fill.svg"
          altText="Github icon"
          classInfo="github"
        />
        <CTAButton
          socialIcon="icons/ant-design_linkedin-filled.svg"
          altText="LinkedIn icon"
          classInfo="linkedIn"
        />
        <CTAButton
          socialIcon="icons/carbon_email.svg"
          altText="Email icon"
          classInfo="email"
        />
      </HeroSectionContent>
    </Wrapper>
  );
};

export default HeroSection;
