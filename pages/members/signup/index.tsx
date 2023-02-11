import * as S from "@/src/pages/members/signup/SignUpPage.styles";
export default function SignUpPage() {
  return (
    <S.SignUpPage>
      <h2 className="title">회원가입</h2>
      <h3 className="notice">
        <S.CheckIcon /> 항목은 <span>필수 입력</span> 항목 입니다.
      </h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">
            이메일 <S.CheckIcon />
          </label>
          <input type="text" id="email" placeholder="이메일" />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            비밀번호 <S.CheckIcon />
          </label>
          <input type="text" id="password" placeholder="비밀번호" />
        </div>
        <div className="form-control">
          <label htmlFor="passwordConfirm" placeholder="비밀번호 확인">
            비밀번호 확인 <S.CheckIcon />
          </label>
          <input type="text" id="passwordConfirm" />
        </div>
        <div className="form-control">
          <label htmlFor="name">
            이름 <S.CheckIcon />
          </label>
          <input type="text" id="name" placeholder="이름" />
        </div>
        <div className="form-control">
          <label htmlFor="phone">
            휴대폰번호 <S.CheckIcon />
          </label>
          <div className="phone-number">
            <input type="tel" id="phone" title="휴대폰첫자리" />
            <input type="tel" title="휴대폰중간자리" />
            <input type="tel" title="휴대폰끝자리" />
          </div>
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
            />
            <button className="address-btn">주소찾기</button>
          </div>
          <input type="text" title="기본주소" className="readonly" readOnly />
          <input type="text" title="상세주소" />
        </div>
      </form>
      <div className="terms">
        <ul>
          <li>
            <div>
              <input type="checkbox" name="" id="all" />
              <label htmlFor="all">약관 전체 동의</label>
            </div>
            <span />
          </li>
          <li>
            <div>
              <input type="checkbox" name="" id="check1" />
              <label htmlFor="check1">
                쇼핑몰 이용약관
                <span className="required">(필수)</span>
              </label>
            </div>
            <span>보기</span>
          </li>
          <li>
            <div>
              <input type="checkbox" name="" id="check2" />
              <label htmlFor="check2">
                개인정보 수집 및 이용
                <span className="required">(필수)</span>
              </label>
            </div>
            <span>보기</span>
          </li>
          <li>
            <div>
              <input type="checkbox" name="" id="check3" />
              <label htmlFor="check3">
                마케팅 및 광고 활용 동의
                <span>(선택)</span>
              </label>
            </div>
            <span>보기</span>
          </li>
          <li>
            <div className="ad-check">
              <div>
                <input type="checkbox" name="" id="check4" />
                <label htmlFor="check4">이메일 수신</label>
              </div>
              <div>
                <input type="checkbox" name="" id="check5" />
                <label htmlFor="check5">SMS 수신</label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="signup-btn">회원가입</button>
    </S.SignUpPage>
  );
}
