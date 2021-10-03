import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Line, Menu, MenuItem, NavBar, Wrapper } from "./header.styles";

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
          <div
            style={{
              display: "block",
              cursor: "pointer",
            }}
            onClick={() => {
              SetMenu(!menu);
            }}
          >
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </div>
        ) : null}
        <Menu
          menu={menu}
          ref={(el) => {
            menuRef = el;
          }}
        >
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Contact Us</Link>
          </MenuItem>
        </Menu>
      </NavBar>
    </Wrapper>
  );
};

export default Header;

// style={{
//     color: `white`,
//     textDecoration: `none`,
//   }}
