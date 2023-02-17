import {
  EProvider,
  SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_PROVIDER,
} from "@src/api/firebase/authentication";
import * as S from "@src/pages/members/signin/SignInPage.styles";
import { isLoggedState } from "@src/store/authentication";
import { useRecoilState } from "recoil";
import { useState, SyntheticEvent } from "react";
import { modalState } from "@src/store/modals";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignInPage() {
  const [, setIsLogged] = useRecoilState(isLoggedState);
  const [, setModal] = useRecoilState(modalState);
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const onSignInProvider = (type: EProvider) => () => {
    SIGN_IN_WITH_PROVIDER(type, () => {
      setIsLogged(() => true);
    });
  };
  const onChangeInput = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSignInEmailAndPassword = (event: any) => {
    if (event.type === "keydown" && event.code !== "Enter") {
      return;
    }
    const { email, password } = loginInfo;
    SIGN_IN_WITH_EMAIL_AND_PASSWORD(
      email,
      password,
      () => {
        setModal((prev) => ({
          ...prev,
          open: true,
          title: "로그인 성공",
          action: () => {
            setIsLogged(() => true);
            router.push("/");
          },
          contents: "로그인처리 되었습니다.",
          confirm: false,
        }));
      },
      () => {
        setModal((prev) => ({
          ...prev,
          open: true,
          title: "로그인 실패",
          contents: "회원 정보가 일치하지 않습니다",
          confirm: false,
        }));
      }
    );
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
          name="email"
          onChange={onChangeInput}
          tabIndex={1}
        />
        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          className="password"
          placeholder="비밀번호"
          name="password"
          onChange={onChangeInput}
          onKeyDown={onSignInEmailAndPassword}
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
        <button
          type="button"
          className="signin-btn"
          tabIndex={4}
          onClick={onSignInEmailAndPassword}
        >
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
          <Link href="/members/signup">회원가입</Link>
        </li>
      </ul>
      <div className="others">
        <S.GoogleIcon
          tabIndex={7}
          onClick={onSignInProvider(EProvider.google)}
        />
        <S.FacebookIcon tabIndex={8} />
        <S.TwitterIcon tabIndex={9} />
      </div>
    </S.SignInPage>
  );
}
