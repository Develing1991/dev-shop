import {
  EProvider,
  SIGN_IN_WITH_PROVIDER,
} from "@/src/api/firebase/authentication";
import * as S from "@/src/pages/members/signin/SignInPage.styles";
import { isLoggedState } from "@/src/store/authentication";
import { useRecoilState } from "recoil";
export default function SignInPage() {
  const [, setIsLogged] = useRecoilState(isLoggedState);
  const onClickaaa = (type: EProvider) => () => {
    SIGN_IN_WITH_PROVIDER(type, () => {
      setIsLogged(() => true);
    });
  };
  return (
    <S.SignInPage>
      <h2 className="title">LOGIN</h2>
      <form>
        <label htmlFor="email" />
        <input
          type="email"
          id="email"
          className="email"
          placeholder="이메일"
          tabIndex={1}
        />
        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          className="password"
          placeholder="비밀번호"
          tabIndex={2}
        />
        <div className="save">
          <input
            type="checkbox"
            id="saveId"
            className="checkbox"
            tabIndex={3}
          />
          <label htmlFor="saveId">아이디 저장</label>
        </div>
        <button type="submit" className="signin-btn" tabIndex={4}>
          로그인
        </button>
      </form>
      <ul className="breadcrumbs">
        <li>
          <a href="#" tabIndex={4}>
            아이디&nbsp;찾기
          </a>
        </li>
        <li>
          <a href="#" tabIndex={5}>
            비밀번호&nbsp;찾기
          </a>
        </li>
        <li>
          <a href="#" tabIndex={6}>
            회원가입
          </a>
        </li>
      </ul>
      <div className="others">
        <S.GoogleIcon tabIndex={7} onClick={onClickaaa(EProvider.google)} />
        <S.FacebookIcon tabIndex={8} />
        <S.TwitterIcon tabIndex={9} />
      </div>
    </S.SignInPage>
  );
}
