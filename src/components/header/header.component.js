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

        <Menu menu={menu} className={menu && "menu--active"}>
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
      <BackgroundWrapper className={menu && "bg--active"} />
    </Wrapper>
  );
};

export default Header;
