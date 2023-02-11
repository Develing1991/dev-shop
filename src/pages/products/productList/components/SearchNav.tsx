import React from "react";
import * as S from "./SearchNav.styles";
export default function SearchNav() {
  return (
    <S.SearchNav>
      <S.HomeIcon />
      <S.ArrowRightIcon />
      <select name="" id="">
        <option value="">침구/가구</option>
        <option value="">외출</option>
        <option value="">바디케어</option>
        <option value="">세제/주방</option>
        <option value="">침구/가구</option>
        <option value="">놀이용품</option>
        <option value="">장난감</option>
      </select>
      <S.ArrowRightIcon />
      <select name="" id="">
        <option value="">탑</option>
        <option value="">아우터</option>
        <option value="">드레스</option>
        <option value="">스커트</option>
        <option value="">팬츠</option>
      </select>
    </S.SearchNav>
  );
}
