import * as S from "./UtilWrapper.styles";
import { forwardRef, ForwardedRef } from "react";
import Link from "next/link";

type TUtilRef = ForwardedRef<HTMLDivElement>;
const UtilWrapper = (props: any, ref: TUtilRef) => {
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
          <li>
            <Link href="/members/signin">로그인</Link>
          </li>
          <li>
            <Link href="/members/signup">회원가입</Link>
          </li>
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
