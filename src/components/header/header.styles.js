import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  z-index: 3;
  padding: 1.45rem 1.0875rem;
`;

export const BackgroundWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  right: 1%;
  max-width: 9.375rem;
  width: 100%;
  height: 3rem;
  background-color: #ab87ff;
  border-radius: 1.875rem;
  z-index: -1;
  transition: max-width 0.8s cubic-bezier(0.3, 1.1, 0.64, 1),
    height 0.8s cubic-bezier(0.3, 1.1, 0.64, 1);
  transform-origin: left;

  &.bg--active {
    max-width: 17.625rem;
    height: 16.625rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    transition: max-width 0.8s cubic-bezier(0.3, 1.1, 0.64, 1),
      height 0.8s cubic-bezier(0.3, 1.1, 0.64, 1);
    transform-origin: center, center;
  }
`;

export const NavBar = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  float: right;
  max-width: 9.375rem;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ab87ff;
  border-radius: 1.875rem;
  color: #fff;
  padding: 1rem;

  &.nav-bar--active {
    max-width: 15.625rem;
    flex-direction: column;
    justify-content: space-between;
    transition: max-width 0.8s cubic-bezier(0.3, 1.1, 0.64, 1);
    transform-origin: center;
  }
`;

export const HamburgerMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.menu ? "flex-end" : "center")};
  align-items: center;
  gap: 20px;
`;

export const Line = styled.span`
  display: block;
  height: 2px;
  margin: 5px 0;
  background-color: #fff;

  :nth-child(1) {
    width: 30px;

    transition: all 0.3s cubic-bezier(0.3, 1.1, 0.64, 1);
    background-color: ${(props) => (props.menu ? "transparent" : "#fff")};
  }
  :nth-child(2) {
    width: 20px;
    transition: all 0.3s cubic-bezier(0.3, 1.1, 0.64, 1);
    transform: ${(props) =>
      props.menu ? "rotate(45deg) translate(28%, 50%)" : ""};
  }
  :nth-child(3) {
    transition: all 0.3s cubic-bezier(0.3, 1.1, 0.64, 1);
    width: ${(props) => (props.menu ? "20px" : "15px")};
    transform: ${(props) =>
      props.menu ? "rotate(-45deg) translate(16%, 5%)" : ""};
  }
`;

export const MenuItem = styled.li.attrs((props) => ({
  className: props.className,
}))`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25rem;

  > a {
    color: #fff;
    opacity: 0;

    &.menu-item--active {
      opacity: 1;
      transition: opacity 0.8s linear;
    }
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;
