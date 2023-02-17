import * as S from "./UtilWrapper.styles";
import { forwardRef, ForwardedRef, useEffect, useState } from "react";
import Link from "next/link";

import { useRecoilState } from "recoil";
import { isLoggedState, loginUserState } from "@src/store/authentication";
import { useRouter } from "next/router";
import { modalState } from "@src/store/modals";

type TUtilRef = ForwardedRef<HTMLDivElement>;
const UtilWrapper = (props: any, ref: TUtilRef) => {
  const [isLogged] = useRecoilState(isLoggedState);
  const [loginUser] = useRecoilState(loginUserState);
  const [buttonText, setButtonText] = useState("");
  const [, setModal] = useRecoilState(modalState);
  const router = useRouter();
  useEffect(() => {
    isLogged ? setButtonText(() => "로그아웃") : setButtonText("로그인");
  }, [isLogged]);
  const onSignHandle = () => {
    if (isLogged) {
      setModal((prev) => ({
        ...prev,
        open: true,
        permanent: true,
        title: "로그아웃",
        contents: "정상 로그아웃 처리 되었습니다.",
        action: () => {
          props.signout();
          router.push("/");
        },
        confirm: false,
      }));
      return;
    }
    router.push("/members/signin");
  };

  return (
    <S.UtilWrapper ref={ref}>
      <div className="inner">
        <ul className="menu1">
          <li>
            <a href="#">즐겨찾기</a>
          </li>
          <li>
            <a href="#">공지사항</a>
          </li>
          <li>
            <a href="#">스토리</a>
          </li>
        </ul>
        <ul className="menu2">
          <li onClick={onSignHandle}>{buttonText}</li>
          {loginUser.admin && (
            <li>
              <Link href="/members/aaa">상품등록</Link>
            </li>
          )}
          {!loginUser.displayName && (
            <li>
              <Link href="/members/signup">회원가입</Link>
            </li>
          )}
          <li>
            <Link href="/members/orders/cartlist">장바구니</Link>
          </li>
          <li>
            <Link href="/members/orders/orderlist">주문조회</Link>
          </li>
          <li>
            <a href="#">마이페이지</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
        </ul>
      </div>
    </S.UtilWrapper>
  );
};

export default forwardRef(UtilWrapper);
