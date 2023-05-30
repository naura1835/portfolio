import React, { useEffect, useRef } from "react";
import { gsap, Power1, Power3, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  let heroRef = useRef(null);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const intro = heroRef.children[0].children[0];
    const animateText = heroRef.children[0].children[1].children[0].children[0];
    const secondText = heroRef.children[0].children[1].children[1].children[0];
    const developerText =
      heroRef.children[0].children[1].children[1].children[1];

    let tl = gsap.timeline();

    tl.add()
      .to(intro, {
        y: 0,
        autoAlpha: 1,
        delay: 0.6,
      })
      .to(
        animateText,
        {
          y: "0%",
          ease: Power4.easeInOut,
          duration: 0.7,
        },
        "s"
      )
      .to(
        [secondText.children, developerText.children],
        {
          y: "0%",
          ease: Power4.easeInOut,
          duration: 0.7,
          delay: 0.2,
          stagger: window.innerWidth > 623 ? 0 : 0.2,
        },
        "s"
      );
    if (window.innerWidth < 711) {
      const firstSocial = heroRef.children[0].children[2].children[0];
      const secondSocial = heroRef.children[0].children[2].children[1];
      const thirdSocial = heroRef.children[0].children[2].children[2];
      const fourthSocial = heroRef.children[0].children[2].children[3];

      tl.from([firstSocial, secondSocial, thirdSocial, fourthSocial], {
        autoAlpha: 0,
        y: "100%",
        ease: Power4.easeInOut,
        duration: 0.7,
      });
    } else {
      const firstBtn = heroRef.children[0].children[2];
      const secondBtn = heroRef.children[0].children[3];
      const thirdBtn = heroRef.children[0].children[4];
      const fourthBtn = heroRef.children[0].children[5];

      tl.from([firstBtn, secondBtn, thirdBtn, fourthBtn], {
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        ease: Power3.easeIn,
        delay: 0.8,
      });
      gsap.to([firstBtn, secondBtn, thirdBtn, fourthBtn], {
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        y: -2,
        ease: Power1.easeInOut,
      });
    }
    window.addEventListener("resize", () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      });
    };
  }, [setDimensions]);
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <SubTitle>
                <SpanText>I'm a front-end</SpanText>
              </SubTitle>
              <SubTitle>
                <SpanText>&nbsp;developer.</SpanText>
              </SubTitle>
            </div>
          </TextAnimationDiv>
        </>
        {window.innerWidth >= 712 ? (
          <>
            <CTAButton
              socialIcon="icons/akar-icons_twitter-fill.svg"
              altText="Twitter icon"
              classInfo="twt"
            />
            <CTAButton
              url="https://github.com/naura1835"
              socialIcon="icons/akar-icons_github-fill.svg"
              altText="Github icon"
              classInfo="github"
            />
            <CTAButton
              url="https://www.linkedin.com/in/khadija-gwarzo"
              socialIcon="icons/ant-design_linkedin-filled.svg"
              altText="LinkedIn icon"
              classInfo="linkedIn"
            />
            <CTAButton
              url="mailto:khadijagarbag@gmail.com"
              socialIcon="icons/carbon_email.svg"
              altText="Email icon"
              classInfo="email"
            />
          </>
        ) : (
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/" target="_blank" rel="noreferrer">
              <img
                src={
                  require("../../images/icons/outline/iconoir_twitter.svg")
                    .default
                }
                alt="Twitter icon"
              />
            </a>
            <a
              href="https://github.com/naura1835"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  require("../../images/icons/outline/codicon_github-alt.svg")
                    .default
                }
                alt="Github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/khadija-garba-6257a4201"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  require("../../images/icons/outline/ph_linkedin-logo.svg")
                    .default
                }
                alt="LinkedIn icon"
              />
            </a>
            <a
              href="mailto:khadijagarbag@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  require("../../images/icons/outline/carbon_email.svg").default
                }
                alt="Email icon"
              />
            </a>
          </div>
        )}
      </HeroSectionContent>
    </Wrapper>
  );
};

export default HeroSection;
