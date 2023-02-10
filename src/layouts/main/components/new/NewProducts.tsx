import CardItem from "../commons/CardItem";
import * as S from "./NewProducts.styles";

export default function NewProducts() {
  return (
    <S.NewProducts>
      <ul className="left-product">
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/29_temp_16383452714371view.jpg"
            title="세련된 팝업 3종 제공"
            price="64,000"
            discount="99,000"
            rate="29"
            shipping="무료배송"
          />
        </li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/30_temp_16383453091974view.jpg"
            title="세련된 갤러리 게시판 제공"
            price="19,000"
            discount="26,000"
            rate="27"
            shipping="무료배송"
          />
        </li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/31_temp_16383453480875view.jpg"
            title="편리한 검색 모듈 제공"
            price="68,000"
            discount="90,000"
            rate="25"
            shipping="무료배송"
          />
        </li>
        <li>
          <CardItem
            image="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/31_temp_16383453480875view.jpg"
            title="편리한 검색 모듈 제공"
            price="68,000"
            discount="90,000"
            rate="25"
            shipping="무료배송"
          />
        </li>
      </ul>
    </S.NewProducts>
  );
}
