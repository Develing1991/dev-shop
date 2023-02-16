import * as S from "@src/pages/members/signup/SignUpPage.styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@src/pages/members/signup/SignUpPage.validations";
import {
  ICreateMemberData,
  ITerms,
} from "@src/pages/members/signup/SignUpPage.types";
import { useRecoilState } from "recoil";
import { modalState } from "@src/store/modals";
import { Postcode } from "@src/components/daum/Postcode";
import { Address } from "react-daum-postcode";

export default function SignUpPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  const [, setModal] = useRecoilState(modalState);

  const [checkAll, setCheckAll] = useState(false);
  const [checkList, setCheckList] = useState<ITerms>({
    shop1: false,
    shop2: false,
    market: false,
  });
  const [checkMarket, setCheckMarket] = useState<ITerms>({
    market1: false,
    market2: false,
  });

  const onSubmitCreateMember = (data: ICreateMemberData) => {
    const { shop1, shop2 } = checkList;
    console.log(shop1);

    if (!shop1 || !shop2) {
      setModal((prev) => ({
        ...prev,
        open: true,
        title: "약관동의",
        contents: "필수 약관동의를 체크해주세요.",
        confirm: false,
      }));
      return;
    }
    console.log(data);
  };

  const onClickCheckTerms =
    (type: string, typeValue: string = "") =>
    () => {
      switch (type) {
        case "ALL":
          setCheckAll((prev) => {
            setCheckList(() => ({
              shop1: !prev,
              shop2: !prev,
              market: !prev,
            }));
            setCheckMarket(() => ({
              market1: !prev,
              market2: !prev,
            }));
            return !prev;
          });
          break;
        case "LIST":
          setCheckList((prev) => {
            if (typeValue === "market") {
              setCheckMarket(() => ({
                market1: !prev[typeValue],
                market2: !prev[typeValue],
              }));
            }
            return {
              ...prev,
              [typeValue]: !prev[typeValue],
            };
          });

          break;
        case "SUB":
          setCheckMarket((prev) => ({
            ...prev,
            [typeValue]: !prev[typeValue],
          }));
          break;
      }
    };

  useEffect(() => {
    setCheckAll(() => Object.values(checkList).every((e) => e));
  }, [checkList]);

  useEffect(() => {
    setCheckList((prev) => ({
      ...prev,
      market: Object.values(checkMarket).every((e) => e),
    }));
  }, [checkMarket]);

  const onFindAdress = () => {
    setModal((prev) => ({
      ...prev,
      open: true,
      title: "주소찾기",
      contents: <Postcode onSetAddress={onSetAddress} />,
      isAction: false,
    }));
  };
  const [memAddress, setMemAddress] = useState({
    address: "",
    zonecode: "",
  });
  const onSetAddress = (data: Address) => {
    setMemAddress(() => ({
      ...data,
    }));
  };
  return (
    <S.SignUpPage>
      {/* <Postcode /> */}
      <h2 className="title">회원가입</h2>
      <h3 className="notice">
        <S.CheckIcon /> 항목은 <span>필수 입력</span> 항목 입니다.
      </h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">
            이메일 <S.CheckIcon />
          </label>
          <input
            type="email"
            id="email"
            placeholder="이메일"
            {...register("email")}
          />
          <p className="error">{formState.errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="password">
            비밀번호 <S.CheckIcon />
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <p className="error">{formState.errors.password?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="passwordConfirm">
            비밀번호 확인 <S.CheckIcon />
          </label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호 확인"
            {...register("passwordConfirm")}
          />
          <p className="error">{formState.errors.passwordConfirm?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="name">
            이름 <S.CheckIcon />
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름"
            {...register("displayName")}
          />
          <p className="error">{formState.errors.displayName?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="phone">
            휴대폰번호 <S.CheckIcon />
          </label>
          <div className="phone-number">
            <input
              type="tel"
              id="phone"
              title="휴대폰"
              placeholder="숫자만 입력"
              {...register("phoneNumber")}
            />
          </div>
          <p className="error">{formState.errors.phoneNumber?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="address">주소</label>
          <div className="zipcode-group">
            <input
              type="text"
              id="address"
              className="readonly"
              readOnly
              title="우편번호"
              defaultValue={memAddress.zonecode}
            />
            <button
              className="address-btn"
              type="button"
              onClick={onFindAdress}
            >
              주소찾기
            </button>
          </div>
          <input
            type="text"
            title="기본주소"
            className="readonly"
            readOnly
            defaultValue={memAddress.address}
          />
          <input type="text" title="상세주소" />
        </div>
      </form>
      <div className="terms">
        <ul>
          <li>
            <div className="checkbox" onClick={onClickCheckTerms("ALL")}>
              {checkAll ? <S.CheckboxFillIcon /> : <S.CheckboxBlankIcon />}
              <label htmlFor="all">약관 전체 동의</label>
            </div>
            <span />
          </li>
          <li>
            <div
              className="checkbox"
              onClick={onClickCheckTerms("LIST", "shop1")}
            >
              {checkList.shop1 ? (
                <S.CheckboxFillIcon />
              ) : (
                <S.CheckboxBlankIcon />
              )}
              <label htmlFor="check1">
                쇼핑몰 이용약관
                <span className="required">(필수)</span>
              </label>
            </div>
            <span className="more-terms">보기</span>
          </li>
          <li>
            <div
              className="checkbox"
              onClick={onClickCheckTerms("LIST", "shop2")}
            >
              {checkList.shop2 ? (
                <S.CheckboxFillIcon />
              ) : (
                <S.CheckboxBlankIcon />
              )}
              <label htmlFor="check2">
                개인정보 수집 및 이용
                <span className="required">(필수)</span>
              </label>
            </div>
            <span className="more-terms">보기</span>
          </li>
          <li>
            <div
              className="checkbox"
              onClick={onClickCheckTerms("LIST", "market")}
            >
              {checkList.market ? (
                <S.CheckboxFillIcon />
              ) : (
                <S.CheckboxBlankIcon />
              )}
              <label htmlFor="check3">
                마케팅 및 광고 활용 동의
                <span>(선택)</span>
              </label>
            </div>
            <span className="more-terms">보기</span>
          </li>
          <li>
            <div className="ad-check">
              <div onClick={onClickCheckTerms("SUB", "market1")}>
                {checkMarket.market1 ? (
                  <S.CheckboxFillIcon />
                ) : (
                  <S.CheckboxBlankIcon />
                )}
                <label htmlFor="check4">이메일 수신</label>
              </div>
              <div onClick={onClickCheckTerms("SUB", "market2")}>
                {checkMarket.market2 ? (
                  <S.CheckboxFillIcon />
                ) : (
                  <S.CheckboxBlankIcon />
                )}
                <label htmlFor="check5">SMS 수신</label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button
        className="signup-btn"
        onClick={handleSubmit(onSubmitCreateMember)}
      >
        회원가입
      </button>
    </S.SignUpPage>
  );
}
