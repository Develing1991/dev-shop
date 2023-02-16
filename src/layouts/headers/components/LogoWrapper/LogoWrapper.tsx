import * as S from "./LogoWrapper.styles";
import { forwardRef, ForwardedRef } from "react";
import { xSlideState } from "@src/store/slides";
import { useRecoilState } from "recoil";

import Link from "next/link";
import { useRouter } from "next/router";

type TLogoRef = ForwardedRef<HTMLDivElement>;
const LogoWrapper = (props: any, ref: TLogoRef) => {
  // const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  // const aaa = () => {
  //   searchRef.current?.focus();
  // };
  const [, setXSlide] = useRecoilState(xSlideState);
  const onShowXSlide = () => {
    setXSlide(() => true);
  };
  const onClickMoveTo = () => {
    if (router.asPath !== "/products/productList") {
      router.push("/products/productList");
    }
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
            <button title="검색버튼" type="button" onClick={onClickMoveTo}>
              <S.SearchIcon />
            </button>
          </form>
        </div>
        <S.IconBox>
          <S.RSearchIcon onClick={onClickMoveTo} />
          <div className="shop-icon">
            <S.RShopIcon />
            <div className="badge">N</div>
          </div>
          <S.RMenuIcon className="menu-icon" onClick={onShowXSlide} />
        </S.IconBox>
      </div>
    </S.LogoWrapper>
  );
};

export default forwardRef(LogoWrapper);
