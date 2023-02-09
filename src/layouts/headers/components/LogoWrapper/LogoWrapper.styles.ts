import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export const LogoWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  .inner {
    max-width: 1024px;
    padding: 0 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    @media screen and (max-width: 768px) {
      height: 80px;
    }
    @media screen and (max-width: 480px) {
      padding: 0 10px;
    }
  }

  .logo {
    flex-shrink: 0;
    @media screen and (max-width: 480px) {
      width: 120px;
      margin-right: 10px;
    }
  }

  .search-form {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .search-form form {
    display: flex;
    border: 2px solid var(--color-pink);
    width: 350px;
    height: 45px;
  }

  .search-form input {
    width: 100%;
    height: 100%;
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    padding: 0 10px;
  }

  .search-form button {
    width: 50px;
    background-color: var(--color-pink);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchIcon = styled(BiSearch)`
  font-size: var(--text-3xl);
  margin-left: 4px;
  color: white;
`;

// 반응형 토글

export const IconBox = styled.div`
  display: none;
  align-items: center;
  gap: 10px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  .menu-icon {
    margin-left: 20px;
    @media screen and (max-width: 480px) {
      margin-left: 0px;
    }
  }
`;

export const RSearchIcon = styled(FiSearch)`
  font-size: var(--text-2xl);
  color: var(--color-gray-2);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: var(--text-xl);
  }
`;

export const RShopIcon = styled(FiShoppingCart)`
  font-size: var(--text-2xl);
  color: var(--color-gray-2);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: var(--text-xl);
  }
`;
export const RMenuIcon = styled(GiHamburgerMenu)`
  font-size: var(--text-4xl);
  color: var(--color-pink);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: var(--text-3xl);
  }
`;
