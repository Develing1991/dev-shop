import * as S from "@/src/pages/members/signin/SignInPage.styles";
export default function SignInPage() {
  return (
    <S.SignInPage>
      <h2 className="title">LOGIN</h2>
      <form>
        <label htmlFor="email" />
        <input type="email" id="email" className="email" placeholder="이메일" />
        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          className="password"
          placeholder="비밀번호"
        />
        <div className="save">
          <input type="checkbox" id="saveId" className="checkbox" />
          <label htmlFor="saveId">아이디 저장</label>
        </div>
        <button type="submit" className="signin-btn">
          로그인
        </button>
      </form>
      <ul className="breadcrumbs">
        <li>
          <a href="#">아이디&nbsp;찾기</a>
        </li>
        <li>
          <a href="#">비밀번호&nbsp;찾기</a>
        </li>
        <li>
          <a href="#">회원가입</a>
        </li>
      </ul>
      <div className="others">
        <S.GoogleIcon />
        <S.FacebookIcon />
        <S.TwitterIcon />
      </div>
    </S.SignInPage>
  );
}
