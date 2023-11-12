import { useEffect } from "react";
import { gsap, Power0, SlowMo } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

import TechChip from "../tech-chip/tech-chip.component";
import { ReactComponent as PamaSvg } from "../../images/Startup life-pana.svg";

import { techData } from "../../data/techData";

import { Display, MediumText } from "../../globalStyles/textStyles";
import { TechStackWrapper, Wrapper } from "./about.styles";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(["#Chart-4", "#Chart-3", "#Chart-2", "#Chart-1"], {
      scaleY: 0,
      ease: SlowMo.easeIn,
      transformOrigin: "bottom",
      stagger: 0.5,
      delay: 0.4,
      duration: 1,
      yoyo: true,
      repeat: -1,
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
    <Wrapper>
      <Display style={{ color: "rgba(26, 33, 81, 0.70)" }}>About Me</Display>
      <PamaSvg />
      <div style={{ maxWidth: "30rem" }}>
        <MediumText>
          Hello there! I am a front end developer who loves building captivating
          user interfaces that keep users engaged.
          <br />
          <br />
          I love hopping on websites and seeing the effort put by other
          developers to give a user an immersive experience. Utilizing my skills
          i want to give other users that same experience thereby making going
          through a website a fun and engaging one.
          <br />
        </MediumText>
        <br />
        <MediumText>
          While programming is my first love, I also have an eye for design. I
          love to dabble in creating user interfaces and experimenting with
          different color schemes and layouts. I often find myself browsing
          through websites just to admire their design and functionality. Also
          fun fact i design all my individual projects myself giving customers
          the whole package.
        </MediumText>
        <br />
        <MediumText>
          When I'm not writing code or designing UIs, I love to explore my other
          hobby which is baking. There's something magical about mixing
          ingredients together and watching them transform into delicious treats
          (yes i have a sweet tooth).
        </MediumText>

        <TechStackWrapper>
          {techData.map((tech, index) => (
            <TechChip key={index} tech={tech} />
          ))}
        </TechStackWrapper>
      </div>
    </Wrapper>
  );
};
export default About;
