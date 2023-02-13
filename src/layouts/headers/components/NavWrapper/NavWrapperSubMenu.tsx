import { useState, SyntheticEvent } from "react";

interface INavWrapperSubMenu {
  name: string;
  subMenu?: string[];
  hiddenClass?: string;
}
export default function NavWrapperSubMenu(props: INavWrapperSubMenu) {
  const [active, setActive] = useState(false);
  const { name, subMenu, hiddenClass } = props;

  const onMouseOverMenu = (event: SyntheticEvent<HTMLLIElement>) => {
    if (window.innerWidth > 1024) {
      setActive(() => event.type === "mouseover");
    }
  };

  return (
    <li
      onMouseOver={onMouseOverMenu}
      onMouseOut={onMouseOverMenu}
      className={`${hiddenClass ?? ""}`}
    >
      <a href="#">
        <em>{name}</em>
      </a>
      <div className={`sub-menu ${subMenu && active ? "active" : ""}`}>
        <ul>
          {subMenu &&
            subMenu.length > 0 &&
            subMenu.map((el, index) => (
              <li key={index}>
                <a href="#">{el}</a>
              </li>
            ))}
        </ul>
        <div>
          <img
            src="http://responsive-sample42.firstmall.kr/data/editor/1b4f2527df47eab8f385a9df5f2c1dc61658583.jpg"
            alt="서브메뉴 이미지"
          />
        </div>
      </div>
    </li>
  );
}
