import styled from "styled-components";
import { MediumText } from "../../globalStyles/textStyles";

export const Wrapper = styled.header`
  background-color: #e3e8ff;
  width: 96vw;
  height: 10vh;
`;
export const NavBar = styled.nav`
  margin: 0 auto;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    position: relative;
  }
`;
export const HamburgerMenu = styled.div`
  display: block;
  z-index: 50;
`;
export const Line = styled.span`
  display: block;
  height: 2px;
  margin: 5px 0;
  background-color: rgba(0, 0, 0, 0.5);

  :nth-child(1) {
    width: 30px;
  }
  :nth-child(2) {
    width: 20px;
  }
  :nth-child(3) {
    width: 15px;
  }
`;
export const Menu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 769px) {
    width: 80%;
  }
  @media (max-width: 490px) {
    position: absolute;
    top: 60px;
    flex-direction: column;
    align-items: center;
    padding: 4vh 0;
    width: 40vw;
    background-color: rgba(242, 246, 255, 1);
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: ${(props) => (props.menu ? "flex" : "none")};
    z-index: 3;
  }
`;
export const MenuItem = styled(MediumText)`
  &:hover > a {
    color: #8352fd;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 490px) {
    &:not(:last-child) {
      margin-bottom: 2rem;
      margin-right: 0;
    }
  }
`;
