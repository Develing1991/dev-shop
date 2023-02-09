import * as S from "./LogoWrapper.styles";
import { useRef } from "react";
export default function LogoWrapper() {
  const searchRef = useRef<HTMLInputElement>(null);
  const aaa = () => {
    searchRef.current?.focus();
  };
  return (
    <S.LogoWrapper>
      <div className="inner">
        <h1 className="logo">
          <a href="/">
            <img
              src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/logo.png"
              alt="로고"
            />
          </a>
        </h1>
        <div className="search-form">
          <form>
            <label htmlFor="search" />
            <input
              type="text"
              id="search"
              placeholder="Search"
              autoComplete="false"
            />
            <button title="검색버튼">
              <S.SearchIcon />
            </button>
          </form>
        </div>
        <S.IconBox>
          <S.RSearchIcon onClick={aaa} />
          <S.RShopIcon />
          <S.RMenuIcon className="menu-icon" />
        </S.IconBox>
      </div>
    </S.LogoWrapper>
  );
}
