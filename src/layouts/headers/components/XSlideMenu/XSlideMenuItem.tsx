import Link from "next/link";
import * as S from "./XSlideMenu.styles";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { xSlideState } from "@src/store/slides";
interface IXSlideMenuItem {
  title: string;
  subTitles: string[];
}
export default function XSlideMenuItem({ title, subTitles }: IXSlideMenuItem) {
  const [showSub, setShowSub] = useState(false);
  const [, setXSlide] = useRecoilState(xSlideState);
  const onToggleSub = () => {
    setShowSub((prev) => !prev);
  };
  const router = useRouter();
  const onClickMoveTo = () => {
    onToggleSub();
    setShowSub(() => false);
    setXSlide(() => false);
    if (router.asPath !== "/products/productList") {
      router.push("/products/productList");
    }
  };
  return (
    <li>
      <div className="menu__title" onClick={onToggleSub}>
        <S.ArrowDown />
        {/* {title} */}
        <Link href="#">{title}</Link>
      </div>
      <ul className={`menu__sub ${showSub ? "active" : ""}`}>
        {subTitles.map((title, index) => (
          <li key={index} onClick={onClickMoveTo}>
            <S.ArrowReturn />
            <Link href="#">{title}</Link>
          </li>
        ))}
        {/* <li>
          <S.ArrowReturn />
          <Link href="#">탑</Link>
        </li>
        <li>
          <S.ArrowReturn />
          <Link href="#">아우터</Link>
        </li>
        <li>
          <S.ArrowReturn />
          <Link href="#">드레스</Link>
        </li>
        <li>
          <S.ArrowReturn />
          <Link href="#">스커트</Link>
        </li>
        <li>
          <S.ArrowReturn />
          <Link href="#">팬츠</Link>
        </li> */}
      </ul>
    </li>
  );
}
