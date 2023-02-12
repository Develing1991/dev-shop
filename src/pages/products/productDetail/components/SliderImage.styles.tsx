import styled from "@emotion/styled";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
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
  }
  .swiper {
    margin: 0;
  }
  .swiper-thumbs {
    max-width: 300px;
  }

  .swiper-slide-thumb-active {
    padding: 3px;
    border: 1px solid transparent;
  }
`;

export const PrevIcon = styled(CommStyled(IoIosArrowDropleftCircle))``;
export const NextIcon = styled(CommStyled(IoIosArrowDroprightCircle))``;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 40px;
    height: 40px;
    padding: 1px;
    color: var(--color-gray-1);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `;
}
