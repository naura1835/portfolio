import React, { useEffect, useRef, useState } from "react";
import { a } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  HamburgerMenu,
  Line,
  Menu,
  MenuItem,
  NavBar,
  Wrapper,
} from "./header.styles";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [menu, SetMenu] = useState(false);
  let menuRef = useRef(null);

  useEffect(() => {
    const firstMenuItem = menuRef.children[0];
    const secondMenuItem = firstMenuItem.nextSibling;
    const thirdMenuItem = secondMenuItem.nextSibling;
    const fourthMenuItem = thirdMenuItem.nextSibling;

    ScrollTrigger.matchMedia({
      "(min-width: 491px)": function () {
        gsap.from(
          [firstMenuItem, secondMenuItem, thirdMenuItem, fourthMenuItem],
          {
            y: -20,
            autoAlpha: 0,
            delay: 0.4,
          }
        );
      },
    });
  });

  return (
    <Wrapper>
      <NavBar>
        {window.innerWidth <= 490 ? (
          <HamburgerMenu
            onClick={() => {
              SetMenu(!menu);
            }}
          >
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </HamburgerMenu>
        ) : null}
        <Menu
          menu={menu}
          ref={(el) => {
            menuRef = el;
          }}
        >
          <MenuItem>
            <a href="/#home">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="/#about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="/#projects">Projects</a>
          </MenuItem>
          <MenuItem>
            <a href="/#contact">Contact Us</a>
          </MenuItem>
        </Menu>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
