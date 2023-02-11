import * as S from "./SearchFilter.styles";
interface ISearchFilter {
  onClickColChange: (col: number) => void;
}
export default function SearchFilter({ onClickColChange }: ISearchFilter) {
  return (
    <S.SearchFilter>
      <ul className="filter-left">
        <li className="total">11개</li>
        <li>랭킹순</li>
        <li>신규등록순</li>
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품평많은순</li>
        <li>판매량순</li>
      </ul>
      <ul className="filter-right">
        <li>
          <select name="" id="">
            <option value="">20개씩 보기</option>
            <option value="">40개씩 보기</option>
            <option value="">100개씩 보기</option>
            <option value="">200개씩 보기</option>
          </select>
        </li>
        <li
          onClick={() => {
            onClickColChange(4);
          }}
        >
          <S.ListSquareIcon />
        </li>
        <li
          onClick={() => {
            onClickColChange(2);
          }}
        >
          <S.ListBulletIcon />
        </li>
      </ul>
    </S.SearchFilter>
  );
}
