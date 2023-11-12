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

const MENU_DATA = [
  { url: "/#about", title: "About" },
  { url: "/#projects", title: "Projects" },
  { url: "/#articles", title: "Articles" },
  { url: "/#contact", title: "Contact Us" },
];

const Header = () => {
  const [menu, SetMenu] = useState(false);

  return (
    <Wrapper>
      <NavBar
        onClick={() => {
          SetMenu(!menu);
        }}
        className={menu ? "nav-bar--active" : undefined}
      >
        <HamburgerMenu menu={menu}>
          <CaptionText style={{ display: menu && "none" }}>Menu</CaptionText>
          <div className={menu ? "menu-icon--active" : undefined}>
            <Line menu={menu}></Line>
            <Line menu={menu}></Line>
            <Line menu={menu}></Line>
          </div>
        </HamburgerMenu>

        <Menu menu={menu}>
          {MENU_DATA.map((menuItem, index) => (
            <MenuItem key={index}>
              <a
                href={menuItem.url}
                className={menu ? "menu-item--active" : undefined}
              >
                {menuItem.title}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </NavBar>
      <BackgroundWrapper className={menu ? "bg--active" : undefined} />
    </Wrapper>
  );
};

export default Header;
