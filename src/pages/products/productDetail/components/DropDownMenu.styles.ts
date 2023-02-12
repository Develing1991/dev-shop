import styled from "@emotion/styled";
import { TiArrowSortedDown } from "react-icons/ti";

export const DropDownMenu = styled.div`
  font-size: var(--text-sm);
  position: relative;
  height: 40px;
  .dropdown-wrapper {
    position: absolute;
    width: 100%;
    background-color: var(--color-white);
  }
  .dropdown-btn {
    width: 100%;
    border: 1px solid var(--color-gray-1);
    padding: 10px;
    font-size: var(--text-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown-menu {
    width: 100%;
    border: 1px solid var(--color-gray-1);
    flex-direction: column;
    display: ${({ active }: { active: boolean }) => (active ? "flex" : "none")};
  }

  .dropdown-btn.active,
  .dropdown-menu.active {
    border-color: var(--color-gray-3);
  }
  .dropdown-menu li {
    padding: 12px 10px;
    border-bottom: 1px solid var(--color-gray-1);
    cursor: pointer;
  }
  .dropdown-menu li:hover {
    background-color: var(--color-beige-0);
  }
  .dropdown-menu li:last-of-type {
    border-bottom: none;
  }
`;

export const DropArrow = styled(TiArrowSortedDown)``;
