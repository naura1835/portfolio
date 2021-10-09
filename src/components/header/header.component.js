import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import {
  HamburgerMenu,
  Line,
  Menu,
  MenuItem,
  NavBar,
  Wrapper,
} from "./header.styles";

const Header = () => {
  const [menu, SetMenu] = useState(false);
  let menuRef = useRef(null);
  let HamburgerRef = useRef(null);

  useEffect(() => {
    const firstMenuItem = menuRef.children[0];
    const secondMenuItem = firstMenuItem.nextSibling;
    const thirdMenuItem = secondMenuItem.nextSibling;
    const fourthMenuItem = thirdMenuItem.nextSibling;

    if (window.innerWidth <= 491) {
      gsap.from(
        [firstMenuItem, secondMenuItem, thirdMenuItem, fourthMenuItem],
        {
          y: -20,
          autoAlpha: 0,
          delay: 0.4,
        }
      );
    }

    let handleClick = (event) => {
      if (!HamburgerRef.current.contains(event.target)) {
        SetMenu(!menu);
      }
    };

    if (menu) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  });

  return (
    <Wrapper>
      <NavBar>
        {/* {window.innerWidth <= 490 ? ( */}
        <HamburgerMenu
          onClick={() => {
            SetMenu(!menu);
          }}
          id="hamburger"
          ref={HamburgerRef}
        >
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </HamburgerMenu>
        {/* ) : null} */}
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
