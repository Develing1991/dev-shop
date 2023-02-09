import * as S from "./NavWrapper.styles";
import NavWrapperSubMenu from "./NavWrapperSubMenu";

const nav = [
  {
    name: "출산/수유",
    subMenu: ["탑", "아우터", "드레스", "스커트", "팬츠"],
  },
  { name: "외출", subMenu: ["장난감", "출산육아", "유모차", "도서"] },
  { name: "바디케어", subMenu: ["페이스", "아이", "립", "파운데이션"] },
  {
    name: "세제/주방",
    subMenu: ["탑", "아우터", "드레스", "스커트", "팬츠"],
  },
  {
    name: "침구/가구",
    subMenu: ["탑", "아우터", "드레스", "스커트", "팬츠"],
  },
  {
    name: "놀이용품",
    subMenu: ["탑", "아우터", "드레스", "스커트", "팬츠"],
  },
  {
    name: "장난감",
    subMenu: ["탑", "아우터", "드레스", "스커트", "팬츠"],
  },
  { name: "신상품" },
  { name: "베스트" },
  { name: "브랜드" },
  { name: "이벤트" },
];

export default function NavWrapper() {
  return (
    <S.NavWrapper>
      <div className="inner">
        <ul className="menu">
          <li className="menu-icon">
            <a href="#">
              <S.MenuIcon />
            </a>
          </li>
          {nav.map((el, index) => (
            <NavWrapperSubMenu
              key={index}
              name={el.name}
              subMenu={el.subMenu}
            />
          ))}
        </ul>
      </div>
    </S.NavWrapper>
  );
}
