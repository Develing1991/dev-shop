import styled from "@emotion/styled";
import { IconType } from "react-icons";
import { HiOutlineSquares2X2, HiOutlineListBullet } from "react-icons/hi2";
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
  }
  .filter-left li:first-of-type {
    color: var(--color-black);
    font-weight: var(--font-bold);
    cursor: auto;
  }
  .filter-right {
    display: flex;
    align-self: center;
  }
  .filter-right li {
    padding: 10px;
    width: auto;
    height: 40px;
    border-left: 1px solid var(--color-gray-0);
    cursor: pointer;
  }
  .filter-right li:first-of-type {
    padding: 0;
  }
  .filter-right li:first-of-type select {
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
function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 100%;
    height: 100%;
    cursor: pointer;
  `;
}
