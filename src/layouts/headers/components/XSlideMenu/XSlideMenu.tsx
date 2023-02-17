import * as S from "./XSlideMenu.styles";
import XSlideMenuItem from "./XSlideMenuItem";
import { xSlideState } from "@src/store/slides";
import { useRecoilState } from "recoil";
import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedState } from "@src/store/authentication";
import { ON_SING_OUT } from "@src/api/firebase/authentication";
import { modalState } from "@src/store/modals";
export default function XSlideMenu() {
  const [xSlide, setXSlide] = useRecoilState(xSlideState);
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);
  const [, setModal] = useRecoilState(modalState);
  const [buttonText, setButtonText] = useState("");
  const router = useRouter();

  useEffect(() => {
    isLogged ? setButtonText(() => "로그아웃") : setButtonText("로그인");
  }, [isLogged]);

  const onHideXSlide = (event: SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      setXSlide(() => false);
    }
  };

  const onClickMoveTo = (url: string) => () => {
    if (router.asPath !== url) {
      router.push(url);
    }
    setXSlide(() => false);
  };

  const onSignFunction = (isLogged: boolean) => () => {
    if (!isLogged) {
      onClickMoveTo("/members/signin")();
      return;
    }

    setXSlide(() => false);
    ON_SING_OUT(() => {
      setModal((prev) => ({
        ...prev,
        open: true,
        permanent: true,
        title: "로그아웃",
        contents: "정상 로그아웃 처리 되었습니다.",
        action: () => {
          setIsLogged(() => false);
          router.push("/");
        },
        confirm: false,
      }));
    });
  };

  return (
    <S.XSlideMenu show={xSlide}>
      <div className="container" onClick={onHideXSlide}>
        <div className="slide-menu">
          <div className="login">
            <span className="text">메뉴</span>
            <div className="actions">
              <S.ActionButton onClick={onSignFunction(isLogged)}>
                {buttonText}
              </S.ActionButton>
              {!isLogged && (
                <S.ActionButton onClick={onClickMoveTo("/members/signup")}>
                  회원가입
                </S.ActionButton>
              )}

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
