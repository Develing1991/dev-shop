import styled from "@emotion/styled";
import { Button } from "@src/components/buttons/Button.styles";
import { IconType } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export const XSlideMenu = styled.nav`
  .container {
    background-color: rgba(0, 0, 0, 0.8);
    width: ${({ show }: { show: boolean }) => (show ? `100%` : "0px")};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
  }
  .slide-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    max-width: 280px;
    height: 100%;
    background-color: var(--color-white);
    border-right: 1px solid var(--color-gray-3);
    transition: 0.3s;
    transform: ${({ show }: { show: boolean }) =>
      show ? `translateX(0%)` : `translateX(-100%)`};
  }
  .login {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .login .text {
    color: var(--color-gray-1);
    font-size: var(--text-sm);
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .menu {
    margin-top: 20px;

    border-top: 1px solid var(--color-gray-5);
    border-bottom: 1px solid var(--color-gray-5);
  }

  .menu > li {
    border-bottom: 1px solid var(--color-gray-3);
  }

  .menu > li:last-of-type {
    border-bottom: none;
  }

  .menu .menu__title {
    display: flex;
    align-items: stretch;
  }
  .menu .menu__title:hover {
    background-color: var(--color-beige-0);
  }
  .menu .menu__title a {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .menu__sub {
    height: 0px;
    opacity: 0;
    pointer-events: none;
  }
  .menu__sub.active {
    opacity: 1;
    height: 100%;
    pointer-events: auto;
  }
  .menu__sub > li {
    display: flex;
    border-bottom: 1px solid var(--color-gray-0);
  }
  .menu__sub > li:hover {
    background-color: var(--color-beige-0);
  }
  .menu__sub > li:first-of-type {
    border-top: 1px solid var(--color-gray-5);
  }
  .menu__sub > li:last-of-type {
    border-bottom: none;
  }
  .menu__sub > li a {
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
  }
`;

export const ActionButton = styled(Button)`
  padding: 5px;
`;
export const ArrowDown = styled(CommStyled(MdKeyboardArrowDown))``;
export const ArrowReturn = styled(CommStyled(MdKeyboardArrowRight))`
  margin-left: 15px;
`;
export const CloseButton = styled(CommStyled(IoMdClose))`
  flex-shrink: 0;
  /* padding: 5px; */
  margin: 0px;
`;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 25px;
    height: 25px;
    margin: 5px;
    cursor: pointer;
  `;
}
