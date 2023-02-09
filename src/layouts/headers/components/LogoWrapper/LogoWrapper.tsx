import * as S from "./LogoWrapper.styles";
import { BiSearch } from "react-icons/bi";
export default function LogoWrapper() {
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
        <div className="search">
          <form>
            <label htmlFor="search" />
            <input
              type="text"
              id="search"
              placeholder="Search"
              autoComplete="false"
            />
            <button title="검색버튼">
              <BiSearch className="icon" />
            </button>
          </form>
        </div>
      </div>
    </S.LogoWrapper>
  );
}
