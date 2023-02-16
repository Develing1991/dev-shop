import * as S from "./XSlideMenu.styles";
import XSlideMenuItem from "./XSlideMenuItem";
import { xSlideState } from "@src/store/slides";
import { useRecoilState } from "recoil";
import { SyntheticEvent } from "react";
export default function XSlideMenu() {
  const [xSlide, setXSlide] = useRecoilState(xSlideState);
  const onHideXSlide = (event: SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      setXSlide(() => false);
    }
  };
  return (
    <S.XSlideMenu show={xSlide}>
      <div className="container" onClick={onHideXSlide}>
        <div className="slide-menu">
          <div className="login">
            <span className="text">로그인하세요.</span>
            <div className="actions">
              <S.ActionButton>로그인</S.ActionButton>
              <S.ActionButton>회원가입</S.ActionButton>
              <S.CloseButton
                onClick={() => {
                  setXSlide(() => false);
                }}
              />
            </div>
          </div>
          <ul className="menu">
            <XSlideMenuItem
              title="출산"
              subTitles={["탑", "아우터", "드레스", "스커트", "팬츠"]}
            />
            <XSlideMenuItem
              title="외출"
              subTitles={["탑", "아우터", "드레스", "스커트", "팬츠"]}
            />
            {/* <li>바디케어</li>
             <li>세제/주방</li>
            <li>침구/가구</li>
            <li>놀이용품</li>
            <li>장난감</li>
            <li>신상품</li>
            <li>베스트</li>
            <li>브랜드</li>
            <li>이벤트</li> */}
          </ul>
        </div>
      </div>
    </S.XSlideMenu>
  );
}
