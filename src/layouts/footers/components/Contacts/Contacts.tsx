import * as S from "./Contacts.styles";

export default function Contacts() {
  return (
    <S.Contacts>
      <dl className="call-area">
        <dt>Customer Center</dt>
        <dd className="call">02-000-0000</dd>
        <dd>
          <div>Mon-Fri : AM 09:00 - PM 06:00 / Sat, Sun, Holiday OFF</div>
          <div>Lunch : PM 12:00 - PM 01:00</div>
        </dd>
      </dl>
      <dl>
        <dt>Bank Account</dt>
        <dd>
          <div>국민은행 000-00-00000-0</div>
          <div>예금주 : 예금주</div>
        </dd>
        <dd>
          <div>카카오뱅크 000-00-00000-0</div>
          <div>예금주 : 예금주</div>
        </dd>
      </dl>
      <dl>
        <dt>Community</dt>
        <ul className="menu">
          <li>
            <a href="">마이페이지</a>
          </li>
          <li>
            <a href="">장바구니</a>
          </li>
          <li>
            <a href="">위시리스트</a>
          </li>
          <li>
            <a href="">주문조회</a>
          </li>
        </ul>
      </dl>
    </S.Contacts>
  );
}
