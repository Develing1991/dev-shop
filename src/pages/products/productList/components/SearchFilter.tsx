import * as S from "./SearchFilter.styles";
interface ISearchFilter {
  onClickColChange: (grid: string) => void;
}
export default function SearchFilter({ onClickColChange }: ISearchFilter) {
  return (
    <S.SearchFilter>
      <ul className="filter-left">
        <li className="total">
          11개
          <S.ArrowDescToggle />
        </li>
        <li>랭킹순</li>
        <li>신규등록순</li>
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품평많은순</li>
        <li>판매량순</li>
      </ul>
      <ul className="filter-right">
        <li className="page per-page">
          <select name="" id="">
            <option value="">20개씩 보기</option>
            <option value="">40개씩 보기</option>
            <option value="">100개씩 보기</option>
            <option value="">200개씩 보기</option>
          </select>
        </li>
        <li className="page per-rate">
          <select name="" id="">
            <option value="">랭킹순</option>
            <option value="">신규등록순</option>
            <option value="">낮은가격순</option>
            <option value="">높은가격순</option>
            <option value="">상품평많은순</option>
            <option value="">판매량순</option>
          </select>
        </li>
        <li
          onClick={() => {
            onClickColChange("grid-box");
          }}
        >
          <S.ListSquareIcon />
        </li>
        <li
          onClick={() => {
            onClickColChange("grid-list");
          }}
        >
          <S.ListBulletIcon />
        </li>
      </ul>
    </S.SearchFilter>
  );
}
