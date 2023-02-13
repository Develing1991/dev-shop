import Button from "@/src/components/buttons/Button";
import * as S from "@/src/pages/members/orders/cartList/CartListPage.styles";

export default function CartListPage() {
  return (
    <S.CartListPage>
      {/* <h2 className="title">장바구니</h2> */}
      <div className="cart-board">
        <div className="cart-left">
          <div className="all">
            <input type="checkbox" name="" id="all" />
            <label htmlFor="all">전체선택</label>
          </div>
          <ul className="cart-list">
            <li className="list__head">
              <div>
                <span className="shipping-title">배송:</span>
                <span className="shipping-option">[본사] 택배 무료</span>
              </div>
              <div className="shipping-actions">
                <button>묶음배송 상품보기</button>
                <button>배송 변경</button>
              </div>
            </li>
            <li className="list__item">
              <div className="item__head">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">가장 높은 검색 우선순위</label>
                </div>
                <S.CloseIcon />
              </div>
              <ul className="item__info">
                <li className="info__image">
                  <img
                    src="http://responsive-sample42.firstmall.kr/data/goods/1/2021/12/24_temp_16383438625267thumbCart.jpg"
                    alt="thumb1"
                  />
                </li>
                <li className="info__details">
                  <ul>
                    <li className="options">
                      <div className="tr">
                        <div className="th">색상</div>
                        <div className="td">브라운</div>
                      </div>
                      <div className="tr">
                        <div className="th">수량</div>
                        <div className="td">1개</div>
                        <div className="td price_txt">(39,800)</div>
                      </div>
                    </li>
                    <li className="price">
                      <div className="tr">
                        <div className="th">상품금액</div>
                        <div className="td">39,800</div>
                      </div>
                      <div className="tr">
                        <div className="th">할인금액</div>
                        <div className="td">-</div>
                      </div>
                      <div className="tr">
                        <div className="th">할인적용금액</div>
                        <div className="td">39,800</div>
                      </div>
                    </li>
                    <li className="actions">
                      <Button>옵션/수량변경</Button>
                      <Button reverse>옵션/수량변경</Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="select_actions">
            <S.SelectActionButton reverse>
              선택상품 주문하기
            </S.SelectActionButton>
            <S.SelectActionButton>선택상품 삭제</S.SelectActionButton>
          </div>
        </div>
        <div className="cart-right">
          <h3>전체 주문시 금액</h3>
          <ul>
            <li className="total-price">
              <span>총 상품금액</span>
              <span className="price">96,800</span>
            </li>
            <li>
              <span>총 배송비</span>
              <span>0</span>
            </li>
            <li>
              <span>총 할인</span>
              <span>0</span>
            </li>
            <li className="total-amount">
              <span>총 결제금액</span>
              <span className="amount">96,800</span>
            </li>
          </ul>
          <button>전체 주문하기</button>
        </div>
      </div>
    </S.CartListPage>
  );
}
