import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  /* border-radius: 2.125rem; //3.125rem */
  background: #1a2151;
  padding: 3rem;
  position: relative;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    height: 100vh;
    width: 400%;
    overflow: visible;
  }
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  width: 620%;
  margin-left: -100%;
  margin-right: -100%;

  > div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    width: 400%;
    margin-left: 0%;
    margin-right: 0%;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    /* padding: 1rem 0; */
  }
`;

export const Project = styled.li`
  display: grid;
  grid-template-rows: repeat(3, auto);
  transform: translate(-29%, 0%);
  width: 30%;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    transform: translate(0%, 0%);
    max-width: 480px;
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-inline: 2rem;

    &:nth-child(1) {
      align-self: flex-start;
    }
    &:nth-child(2) {
      align-self: flex-end;
    }
    &:nth-child(4) {
      align-self: flex-end;
    }
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  height: 200px;
  transform: scale(0.875);

  & > img {
    width: 100%;
    height: 100%;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    transform: scale(0.8);
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 1rem;
  transform: scale(0.875);

  @media ${breakpointsUp["tablet-portrait-up"]} {
    transform: scale(0.8);
  }
`;

export const ProjectLink = styled.a`
  border-radius: 1.25rem;
  box-shadow: inset -0.5px -0.5px #fff, inset 0.5px 0.5px #fff;
  background: rgba(171, 135, 255, 0.15);
  color: #ffffff;
  display: grid;
  height: 3rem;
  max-width: 15rem;
  place-items: center;
  width: 100%;
`;

export const ProjectControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  top: 55%;
  right: 10%;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: none;
  }
`;

export const ProjectControlButton = styled.button`
  border-radius: 50%;
  border: 1px solid #fff;
  background: rgba(171, 135, 255, 0.15);
  color: #ffffff;
  display: grid;
  height: 2rem;
  aspect-ratio: 1;
  place-items: center;
`;
