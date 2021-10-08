import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ReactComponent as Pama } from "../../images/Startup life-pana.svg";

import { Description, ServiceWrapper, Title, Wrapper } from "./services.styles";
import { gsap, Power0 } from "gsap";
import { SlowMo } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  let serviceRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      repeat: -1,
    });
    gsap.from(serviceRef, {
      scrollTrigger: {
        trigger: serviceRef,
        start: "top center",
      },
      scale: 0.8,
      autoAlpha: 0,
      ease: Power0.easeIn,
      delay: 0.2,
    });
    tl.from("#Chart-4", {
      scaleY: 0,
      stagger: 0.4,
      ease: SlowMo.easeIn,
      transformOrigin: "bottom",
    });
    tl.from("#Chart-3", {
      scaleY: 0,
      stagger: 0.4,
      ease: SlowMo.easeIn,
      transformOrigin: "bottom",
    });
    tl.from("#Chart-2", {
      scaleY: 0,
      stagger: 0.4,
      ease: SlowMo.easeIn,
      transformOrigin: "bottom",
    });
    tl.from("#Chart-1", {
      scaleY: 0,
      stagger: 0.4,
      ease: SlowMo.easeIn,
      transformOrigin: "bottom",
    });
    gsap.fromTo(
      ["#Gear-1", "#Gear-2", "#Gear-3"],
      {
        rotateZ: "0deg",
      },
      {
        rotateZ: "360deg",
        transformOrigin: "center",
        repeat: -1,
        ease: Power0.easeInOut,
        duration: 4,
      }
    );
    gsap.fromTo(
      ["#Square-5", "#Square-4", "#Square-3", "#Square-2"],
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1, stagger: 0.4, repeat: -1, yoyo: true }
    );
    gsap.from("#Square-1", {
      duration: 1.5,
      autoAlpha: 0,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        serviceRef = el;
      }}
    >
      <ServiceWrapper>
        <Title>Stunning Designs Brought to Life</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
          odio vitae risus pulvinar sagittis. Donec porttitor, felis sit amet
          efficitur consequat, odio vitae risus pulvinar sagittis. Donec
          porttitor, felis sit amet efficitur consequat,
        </Description>
      </ServiceWrapper>
      <Pama />
    </Wrapper>
  );
};

export default Services;
