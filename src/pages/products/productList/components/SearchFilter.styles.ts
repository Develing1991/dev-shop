import styled from "@emotion/styled";
import { IconType } from "react-icons";
import { HiOutlineSquares2X2, HiOutlineListBullet } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
export const SearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid var(--color-gray-0);
  font-size: var(--text-sm);
  color: var(--color-gray-3);

  .filter-left {
    display: flex;
    align-self: center;
  }
  .filter-left li {
    padding: 12px 17px;
    border-right: 1px solid var(--color-gray-0);
    cursor: pointer;
    @media screen and (max-width: 480px) {
      padding: 7px 10px;
    }
  }
  .filter-left li:first-of-type {
    color: var(--color-black);
    font-weight: var(--font-bold);
    cursor: auto;
  }
  .filter-left li:not(:first-of-type) {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .filter-left .total {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .filter-right {
    display: flex;
    align-items: center;
  }
  .filter-right li {
    padding: 10px;
    width: auto;
    height: 40px;
    border-left: 1px solid var(--color-gray-0);
    flex-shrink: 0;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      padding: 5px;
      height: auto;
    }
  }
  .filter-right li.per-page {
    padding: 0;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .filter-right li.per-rate {
    padding: 0;
    display: none;
    height: 100%;
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
  .filter-right li.page select {
    outline: none;
    height: 100%;
    padding: 0 0 0 10px;
    border: none;
    font-size: var(--text-sm);
    color: var(--color-gray-3);
    cursor: pointer;
  }
`;

export const ListSquareIcon = styled(CommStyled(HiOutlineSquares2X2))``;
export const ListBulletIcon = styled(CommStyled(HiOutlineListBullet))``;

export const ArrowDescToggle = styled(CommStyled(IoIosArrowDown))`
  width: 15px;
  height: 15px;
  transform: rotate(180deg);
`;
function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 100%;
    height: 100%;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      width: 15px;
      height: 15px;
    }
  `;
}
