import * as S from "./DropDownMenu.styles";
import { useState, MouseEvent } from "react";
interface IDropOption {
  selectedValue: string;
  onClickSelectMenu: (value: string) => void;
}
export default function DropDownMenu({
  selectedValue,
  onClickSelectMenu,
}: IDropOption) {
  const [active, setActive] = useState(false);

  const onClickDropdown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setActive((prev) => !prev);
    }, 0);
  };

  const onClickSelect = (value: string) => {
    onClickSelectMenu(value);
    setActive(() => false);
  };

  return (
    <S.DropDownMenu active={active}>
      <div className="dropdown-wrapper">
        <button
          className={`dropdown-btn ${active ? "active" : ""}`}
          onClick={onClickDropdown}
        >
          {selectedValue || "색상선택"}
          <S.DropArrow />
        </button>
        <ul className={`dropdown-menu ${active ? "active" : ""}`}>
          <li
            onClick={() => {
              onClickSelect("블랙");
            }}
          >
            블랙
          </li>
          <li
            onClick={() => {
              onClickSelect("그레이");
            }}
          >
            그레이
          </li>
          <li
            onClick={() => {
              onClickSelect("화이트");
            }}
          >
            화이트
          </li>
        </ul>
      </div>
    </S.DropDownMenu>
  );
}
