import styled from "@emotion/styled";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banner = styled.section`
  .inner {
    /* max-width: 1920px; */
    margin: auto;
    position: relative;
  }
  .btn-wrapper {
    max-width: 1024px;
    margin: auto;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
  }
  &:hover .prev-arrow,
  &:hover .next-arrow {
    opacity: 0.3;
    pointer-events: auto;
  }
`;
export const Slider = styled(SlickSlider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    position: absolute;
    bottom: 5px;
    display: flex !important; /* 인라인으로 되어있어서 강제로.. */
    justify-content: center;
    gap: 5px;
  }
  .slick-dots li {
    margin: 0;
    width: 10px;
    height: 10px;
  }
  .slick-dots li button {
    padding: 0;
    width: 10px;
    height: 10px;
  }

  .slick-dots li button:before {
    width: 10px;
    height: 10px;
    opacity: 1;
    color: var(--color-white);
    background-color: transparent;
    line-height: 1;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: var(--color-pink);
  }

  /* .image-area img {
    @media screen and (max-width: 1024px) {
      .slick-list {
        width: 120%;
        margin-left: -30%;
        margin-right: -30%;
      }
    }
    @media screen and (max-width: 768px) {
      .slick-list {
        width: 130%;
        margin-left: -20%;
        margin-right: -20%;
      }
    }
    @media screen and (max-width: 640px) {
      .slick-list {
        width: 140%;
        margin-left: -18%;
        margin-right: -18%;
      }
    }
    @media screen and (max-width: 480px) {
      .slick-list {
        width: 170%;
        margin-left: -34%;
        margin-right: -34%;
      }
    }
  } */
`;

export const PrevArrow = styled(AiFillLeftCircle)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 15px;
  width: 50px;
  height: 50px;
  color: black;
  z-index: 1;
  cursor: pointer;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-in;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    left: 20px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const NextArrow = styled(AiFillRightCircle)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 15px;
  width: 50px;
  height: 50px;
  color: black;
  z-index: 1;
  cursor: pointer;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-in;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    right: 20px;
  }
  @media screen and (max-width: 669px) {
    display: none;
  }
`;
