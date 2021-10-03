import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Line, Menu, MenuItem, NavBar, Wrapper } from "./header.styles";

const Header = () => {
  const [menu, SetMenu] = useState(false);

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
        <Menu menu={menu}>
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
