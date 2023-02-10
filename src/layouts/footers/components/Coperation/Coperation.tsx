import * as S from "./Coperation.styles";
export default function Coperation() {
  return (
    <S.Coperation>
      <dl>
        <dd>
          <span>회사명:</span>
          (주)회사명
        </dd>
        <dd>
          <span>대표자:</span>
          대표자
        </dd>
        <dd>
          <address>
            <span>대표자주소:</span>
            ○○도 ○○시 ○○구 ○○○로 000 000동 000호
          </address>
        </dd>
        <dd>
          <span>전화:</span>
          02-000-0000
        </dd>
        <dd>
          <span>팩스:</span>
          031-0000-0000
        </dd>
      </dl>
      <dl>
        <dd>
          <span>사업자등록번호:</span>
          000-00-0000
        </dd>
        <dd>
          <span>통신판매업신고번호:</span>
          제0000-서울강남00000호
        </dd>
        <dd>
          <span>개인정보보호책임자:</span>
          책임자 (email_id@maildomain.com)
        </dd>
      </dl>
      <div className="copyright">
        <dd>
          <span>호스팅 제공자:</span>
          (주)가비아씨엔에스
        </dd>
        COPYRIGHT (c) <span className="coperation">(주)회사명</span> ALL RIGHTS
        RESERVED.
      </div>
    </S.Coperation>
  );
}
