import { gsap, Power4 } from "gsap";
import React, { useEffect, useRef } from "react";

import { Pixel, Wrapper } from "./background-animation.styles";

const BackgroundAnimation = () => {
  let pixelRef = useRef(null);

  useEffect(() => {
    gsap.from(pixelRef.children, {
      stagger: 0.1,
      duration: 0.8,
      autoAlpha: 0,
      scale: 0.8,
      delay: 1.8,
      ease: Power4.easeIn,
    });
  });
  return (
    <Wrapper
      ref={(el) => {
        pixelRef = el;
      }}
    >
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.7)"
        size="25px"
        leftPosition="30%"
        topPosition="10%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.7)"
        size="40px"
        leftPosition="80%"
        topPosition="26%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.25)"
        size="40px"
        leftPosition="60%"
        topPosition="10%"
      />
      <Pixel
        pixelColor="#ab87ff"
        size="25px"
        leftPosition="46%"
        topPosition="30%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.7)"
        size="40px"
        leftPosition="20%"
        topPosition="80%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.25)"
        size="25px"
        leftPosition="40%"
        topPosition="78%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.25)"
        size="40px"
        leftPosition="50%"
        topPosition="90%"
      />
      <Pixel
        pixelColor="#ab87ff"
        size="40px"
        leftPosition="60%"
        topPosition="74%"
      />
      <Pixel
        pixelColor="#ab87ff"
        size="25px"
        leftPosition="66%"
        topPosition="66%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.7)"
        size="40px"
        leftPosition="78%"
        topPosition="74%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.25)"
        size="40px"
        leftPosition="82%"
        topPosition="60%"
      />
      <Pixel
        pixelColor="#ab87ff"
        size="40px"
        leftPosition="90%"
        topPosition="40%"
      />
      <Pixel
        pixelColor="rgba(26, 33, 81, 0.7)"
        size="40px"
        leftPosition="10%"
        topPosition="40%"
      />
      <Pixel
        pixelColor="#ab87ff"
        size="40px"
        leftPosition="26%"
        topPosition="44%"
      />
    </Wrapper>
  );
};
export default BackgroundAnimation;
