import * as S from "./UtilWrapper.styles";
export default function UtilWrapper() {
  return (
    <S.UtilWrapper>
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
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
          <li>
            <a href="#">장바구니</a>
          </li>
          <li>
            <a href="#">주문조회</a>
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
}
