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

  useEffect(() => {
    if (window.innerWidth > 800) {
    }
    const intro = heroRef.children[0].children[0];
    const animateText = heroRef.children[0].children[1].children[0].children[0];
    const secondText = heroRef.children[0].children[1].children[1].children[0];
    const developerText =
      heroRef.children[0].children[1].children[1].children[1];

    let tl = gsap.timeline();

    ScrollTrigger.matchMedia({
      all: function () {
        tl.add()
          .from(intro, {
            y: -20,
            autoAlpha: 0,
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
      },
      "(max-width: 711px)": function () {
        const firstSocial = heroRef.children[0].children[2].children[0];
        const secondSocial = firstSocial.nextSibling;
        const thirdSocial = secondSocial.nextSibling;
        const fourthSocial = thirdSocial.nextSibling;

        tl.from([firstSocial, secondSocial, thirdSocial, fourthSocial], {
          autoAlpha: 0,
          y: "100%",
          ease: Power4.easeInOut,
          duration: 0.7,
        });
      },
      "(min-width: 712px)": function () {
        const firstBtn = heroRef.children[0].children[2];
        const secondBtn = firstBtn.nextSibling;
        const thirdBtn = secondBtn.nextSibling;
        const fourthBtn = thirdBtn.nextSibling;

        tl.from([firstBtn, secondBtn, thirdBtn, fourthBtn], {
          autoAlpha: 0,
          top: "50%",
          left: "50%",
          ease: Power3.easeIn,
          delay: 0.8,
        });
        gsap.to([firstBtn, secondBtn, thirdBtn, fourthBtn], {
          repeat: 1,
          // yoyo: true,
          duration: 0.8,
          y: -2,
          ease: Power1.easeInOut,
        });
      },
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
              socialIcon="icons/ant-design_linkedin-filled.svg"
              altText="LinkedIn icon"
              classInfo="linkedIn"
            />
            <CTAButton
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
            <a href="/" target="_blank" rel="noreferrer">
              <img
                src={
                  require("../../images/icons/outline/ph_linkedin-logo.svg")
                    .default
                }
                alt="LinkedIn icon"
              />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
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
