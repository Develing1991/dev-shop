import styled from "@emotion/styled";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export const Banner = styled.section`
  .inner {
    max-width: 1920px;
    margin: auto;
    position: relative;
  }
  .wrapper {
    max-width: 1024px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
  }
`;

export const PrevArrow = styled(AiFillLeftCircle)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  width: 50px;
  height: 50px;
  color: black;
  opacity: 0.3;
  z-index: 1;
  cursor: pointer;
`;
export const NextArrow = styled(AiFillRightCircle)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  width: 50px;
  height: 50px;
  color: black;
  opacity: 0.3;
  z-index: 1;
  cursor: pointer;
`;
