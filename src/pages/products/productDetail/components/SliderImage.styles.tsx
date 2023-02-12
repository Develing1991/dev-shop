import styled from "@emotion/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons/lib";

export const SliderImage = styled.div`
  .main {
  }
  .swiper-main {
  }
  .thumbs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    gap: 10px;
    @media screen and (max-width: 460px) {
      margin-top: 30px;
    }
  }
  .swiper {
    margin: 0;
  }
  .swiper-prev,
  .swiper-next {
    flex-shrink: 0;
  }
  .swiper-thumbs {
    max-width: 300px;
  }
  .swiper-slide {
    cursor: pointer;
  }
  .swiper-slide-thumb-active {
    padding: 3px;
    border: 1px solid transparent;
  }
`;

export const PrevIcon = styled(CommStyled(IoIosArrowBack))``;
export const NextIcon = styled(CommStyled(IoIosArrowForward))``;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 30px;
    height: 70px;

    border: 1px solid var(--color-gray-0);
    padding: 1px;
    color: var(--color-gray-1);
    cursor: pointer;
    &:hover {
      border-color: transparent;
      background-color: var(--color-gray-0);
    }
    @media screen and (max-width: 460px) {
      width: 25px;
      height: 50px;
    }
    @media screen and (max-width: 360px) {
      height: auto;
    }
  `;
}
