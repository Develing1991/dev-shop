import styled from "@emotion/styled";
import { IconType } from "react-icons";
import { MdOutlineKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
export const SearchNav = styled.nav`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  select {
    padding: 5px;
    border: 1px solid var(--color-gray-0);
    outline: none;
    cursor: pointer;
  }
  select:hover {
    border-color: var(--color-gray-1);
  }
`;

export const HomeIcon = styled(CommStyled(MdOutlineHome))``;
export const ArrowRightIcon = styled(CommStyled(MdOutlineKeyboardArrowRight))``;
function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 20px;
    height: 20px;
  `;
}
