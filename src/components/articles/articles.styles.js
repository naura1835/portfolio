import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 2rem 0;

  > li:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 40px;
    width: 100%;
    padding: 3rem;
    margin-bottom: 0;

    > li:nth-child(2) {
      grid-row: 1/3;
      grid-column: 2/3;
      height: 19rem;
      align-self: center;
    }

    > li:first-child {
      justify-self: center;
    }

    > li:last-child {
      justify-self: end;
    }
  }
`;

export const ReadMoreBtn = styled.a`
  border-radius: 1.25rem;
  background: #ab87ff;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  display: grid;
  width: 15.24319rem;
  height: 3rem;
  place-items: center;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    position: absolute;
    bottom: 13%;
    right: 25%;
  }
`;
