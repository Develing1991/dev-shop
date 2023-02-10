import styled from "@emotion/styled";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banner = styled.section`
  .inner {
    max-width: 1920px;
    margin: auto;
    position: relative;
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
  .image-area img {
    display: block;
    height: 500px;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      height: 400px;
    }
    @media screen and (max-width: 786px) {
      height: 300px;
    }
    @media screen and (max-width: 640px) {
      height: 220px;
    }
  }
`;
