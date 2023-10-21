import React, { useState } from "react";

import { CaptionText } from "../../globalStyles/textStyles";
import {
  BackgroundWrapper,
  HamburgerMenu,
  Line,
  Menu,
  MenuItem,
  NavBar,
  Wrapper,
} from "./header.styles";

const Header = () => {
  const [menu, SetMenu] = useState(false);

  return (
    <Wrapper>
      <NavBar
        onClick={() => {
          SetMenu(!menu);
        }}
        className={menu && "nav-bar--active"}
      >
        <HamburgerMenu menu={menu}>
          <CaptionText style={{ display: menu && "none" }}>Menu</CaptionText>
          <div className={menu && "menu-icon--active"}>
            <Line menu={menu}></Line>
            <Line menu={menu}></Line>
            <Line menu={menu}></Line>
          </div>
        </HamburgerMenu>

        <Menu menu={menu}>
          <MenuItem>
            <a href="/#home" className={menu && "menu-item--active"}>
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/#about" className={menu && "menu-item--active"}>
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/#projects" className={menu && "menu-item--active"}>
              Projects
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/#contact" className={menu && "menu-item--active"}>
              Contact Us
            </a>
          </MenuItem>
        </Menu>
      </NavBar>
      <BackgroundWrapper className={menu && "bg--active"} />
    </Wrapper>
  );
};

export default Header;
