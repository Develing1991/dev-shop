import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavWrapper = styled.nav`
  border-bottom: 1px solid #dbdbdb;

  &.flying {
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    z-index: 9;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
  .inner {
    max-width: 1024px;
    margin: auto;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  .inner > .menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1024px) {
      gap: 20px;
      justify-content: space-around;
    }
    @media screen and (max-width: 768px) {
      gap: 0px;
    }
  }

  .inner > .menu .menu-icon {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .inner > .menu > li {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    position: relative;
    flex-shrink: 0;
  }

  .inner > .menu > li.hidden {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .inner > .menu > li:hover > a {
    color: var(--color-pink);
  }

  .sub-menu {
    cursor: default;
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 430px;
    min-height: 270px;
    padding: 10px;
    gap: 10px;
    border: 1px solid var(--color-gray-0);
    z-index: 9;
    background-color: var(--color-white);
  }
  .sub-menu.active {
    display: flex;
  }

  .sub-menu > ul {
    flex-basis: 40%;
  }

  .sub-menu > ul > li {
    /* border-bottom: 1px solid var(--color-gray-0); */
    padding: 8px 5px;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
  }

  .sub-menu > ul > li::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 80%;
    height: 1px;
    background-color: var(--color-gray-0);
  }

  .sub-menu > ul > li:last-of-type::after {
    display: none;
  }

  .sub-menu > ul > li:hover {
    padding-left: 8px;
    transition: all 0.3s;
    opacity: 0.7;
  }
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: var(--text-2xl);
`;
