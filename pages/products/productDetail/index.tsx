import ActionButton from "@src/pages/products/productDetail/components/ActionButton";
import DropDownMenu from "@src/pages/products/productDetail/components/DropDownMenu";
import SelectedOption from "@src/pages/products/productDetail/components/SelectedOption";
import SliderImage from "@src/pages/products/productDetail/components/SliderImage";
import * as S from "@src/pages/products/productDetail/ProductDetailPage.styles";
import { useState } from "react";
export default function ProductDetailPage() {
  const [selectOption, setSelectOption] = useState("");
  const onClickSelectMenu = (value: string) => {
    setSelectOption(() => value);
  };
  return (
    <S.ProductDetailPage>
      <div className="product-detail">
        <div className="detail__left">
          <SliderImage />
        </div>
        <ul className="detail__right">
          <li className="info">
            <div className="info__price">
              <div className="price">90,000</div>
              <div className="discount">68,000</div>
            </div>
            <div className="info__rate">
              <div className="rate">25%</div>
            </div>
          </li>
          <li className="table">
            <div className="th">적립혜텍</div>
            <div className="td">구매 340</div>
          </li>
          <li className="table">
            <div className="th">배송</div>
            <div className="td">
              <div>
                <div>택배(주문 시 결제 / 착불)</div>
                <div>무료</div>
              </div>
              <a href="#" className="more">
                자세히
              </a>
            </div>
          </li>
          <li className="table">
            <div className="th">상품정보</div>
            <div className="td">
              <div>우측 &#39;자세히&#39; 참조</div>
              <a href="#" className="more">
                자세히
              </a>
            </div>
          </li>
          <li className="table">
            <div className="th">상품후기</div>
            <div className="td">
              <div className="star-rate">
                2명
                <span className="star">
                  ★★★★★ <span className="score">(5/5)</span>
                </span>
              </div>
            </div>
          </li>
          <li className="table">
            <div className="th">브랜드</div>
            <div className="td">LG</div>
          </li>
          <li className="table">
            <div className="th">판매자</div>
            <div className="td">
              본사
              <a href="#" className="more">
                자세히
              </a>
            </div>
          </li>
          <li className="options">
            <div className="dropdown">
              <div>상품옵션</div>
              <DropDownMenu
                onClickSelectMenu={onClickSelectMenu}
                selectedValue={selectOption}
              />
            </div>
            <div className="selected-product">
              <SelectedOption />
            </div>
            <div className="total">
              총 상품 금액 <span className="ammount">68,000</span>
            </div>
            <div className="btn-group">
              {/* ActionButton */}
              <ActionButton text="장바구니" />
              <ActionButton text="구매하기" reverse />
            </div>
          </li>
        </ul>
      </div>
    </S.ProductDetailPage>
  );
}
