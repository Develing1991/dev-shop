import React from "react";
import * as S from "./ProductItem.styles";
export default function ProductItem() {
  return (
    <S.ProductItem>
      <div className="image-area">
        <a href="#">
          <img
            src="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/31_temp_16383453480875list1.jpg"
            alt="이미지1"
          />
        </a>
      </div>
      <h4 className="title">
        <span className="brand">SK-II</span> 세련된 혼합형 배너 제공
      </h4>
      <div className="description">
        퍼스트몰 반응형 스킨에서는 이미지/콘텐츠가 혼합된 세련된 슬라이드배너를
        제공합니다
      </div>
      <div className="info">
        <span className="price">14,800</span>
        <span className="discount">20,000</span>
        <span className="rate">
          26%
          <S.DisCountIcon />
        </span>
      </div>
      <div className="actions">
        <div className="shipping">무료배송</div>
        <S.HeartIcon className="heart" />
      </div>
      <div className="reviews">
        리뷰 <span className="count">2</span>
      </div>
      <div className="categories">
        <span>new</span>
        <span>sale</span>
        <span>best</span>
      </div>
    </S.ProductItem>
  );
}
