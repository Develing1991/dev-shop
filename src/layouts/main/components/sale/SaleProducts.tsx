import React from "react";
import CardItem from "../commons/CardItem";
import * as S from "./SaleProducts.styles";
export default function SaleProducts({ children }: { children: JSX.Element }) {
  return (
    <S.SaleProducts>
      <ul>
        <li>{children}</li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/21_temp_16383437763817view.jpg"
            title="세련된 갤러리 게시판 제공"
            price="19,000"
            discount="26,000"
            rate="27"
            shipping="무료배송"
          />
        </li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/23_temp_16383438212490view.jpg"
            title="세련된 갤러리 게시판 제공"
            price="19,000"
            discount="26,000"
            rate="27"
            shipping="무료배송"
          />
        </li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/24_temp_16383438625267view.jpg"
            title="세련된 갤러리 게시판 제공"
            price="19,000"
            discount="26,000"
            rate="27"
            shipping="무료배송"
          />
        </li>
      </ul>
    </S.SaleProducts>
  );
}
