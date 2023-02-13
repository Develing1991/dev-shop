import * as S from "./LogoWrapper.styles";
import { useRef, forwardRef, ForwardedRef } from "react";
import Link from "next/link";

type TLogoRef = ForwardedRef<HTMLDivElement>;
const LogoWrapper = (props: any, ref: TLogoRef) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const aaa = () => {
    searchRef.current?.focus();
  };
  return (
    <S.LogoWrapper ref={ref}>
      <div className="inner">
        <h1 className="logo">
          <Link href="/">
            <img
              src="http://responsive-sample42.firstmall.kr/data/skin/responsive_babygoods_cute_gl/images/design_resp/logo.png"
              alt="로고"
            />
          </Link>
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
          <div className="shop-icon">
            <S.RShopIcon />
            <div className="badge">N</div>
          </div>
          <S.RMenuIcon className="menu-icon" />
        </S.IconBox>
      </div>
    </S.LogoWrapper>
  );
};

export default forwardRef(LogoWrapper);
