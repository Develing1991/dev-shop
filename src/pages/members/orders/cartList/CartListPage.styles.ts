import { Button } from "@/src/components/buttons/Button.styles";
import styled from "@emotion/styled";
import { IconType } from "react-icons/lib";
import { TfiClose } from "react-icons/tfi";
export const CartListPage = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  margin-top: 60px;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
  .cart-board {
    display: grid;
    grid-template-columns: 68.5% 30%;
    gap: 1.5%;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 50px;
    }
  }
  .cart-left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .all label,
  .cart-right .title {
    font-size: var(--text-xl);
    font-weight: var(--font-light);
  }

  .checkbox {
    display: flex;
    gap: 10px;
  }

  .cart-list {
    border: 1px solid var(--color-gray-2);
  }

  .cart-list > li {
    border-bottom: 1px solid var(--color-gray-0);
  }
  .cart-list > li:last-of-type {
    border-bottom: none;
  }

  .list__head {
    padding: 10px;
    font-size: var(--text-sm);
    background-color: #f4f4f4;
  }
  .list__head .shipping-title {
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-right: 5px;
  }

  .list__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .shipping-actions {
    display: flex;
    gap: 5px;
    @media screen and (max-width: 380px) {
      flex-direction: column;
    }
  }
  .shipping-actions button {
    border: 1px solid var(--color-gray-2);
    border-radius: 2px;
    padding: 5px;
    color: var(--color-gray-3);
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
  }

  .shipping-actions button:hover {
    border-color: var(--color-gray-5);
  }

  .list__item {
  }
  .item__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .item__info {
    display: flex;
    gap: 10px;
    padding: 10px;
    font-size: var(--text-sm);
    @media screen and (max-width: 320px) {
      flex-direction: column;
    }
  }

  .item__info .info__image {
    max-width: 120px;
  }
  .item__info .info__image img {
    border: 1px solid var(--color-gray-0);
  }
  .info__details {
    flex: 1;
  }
  .info__details ul {
    display: flex;
    justify-content: space-between;
    gap: 70px;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 20px;
    }
  }
  .info__details .options {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .info__details .options .tr,
  .info__details .price .tr {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .info__details .options .th {
    border: 1px solid var(--color-gray-1);
    padding: 3px;
    font-size: var(--text-xs);
    color: var(--color-gray-1);
  }
  .info__details .options .td.price_txt {
    font-size: var(--text-xs);
    color: var(--color-gray-2);
  }

  .info__details ul .price {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .info__details .price .tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info__details .price .tr:last-of-type {
    font-weight: var(--font-bold);
  }

  .info__details .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 1024px) {
      flex-direction: row;
    }
    @media screen and (max-width: 380px) {
      flex-direction: column;
    }
  }
  .select-actions {
    align-self: flex-end;
    display: flex;
    gap: 10px;
    width: 50%;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 380px) {
      flex-direction: column;
    }
  }

  /* right */
  .cart-right {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cart-right .title {
    font-weight: var(--font-medium);
  }

  .cart-right .total-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid var(--color-gray-2);
    padding: 15px 10px;
  }
  .cart-right .total-menu li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-right .total-menu .price {
    font-size: var(--text-xl);
  }
  .cart-right .total-menu .amount-area {
    border-top: 1px dashed var(--color-gray-1);
    padding-top: 20px;
  }
  .cart-right .total-menu .amount-area .amount {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
  }
`;

export const CloseIcon = styled(CommStyled(TfiClose))``;

export const OptionButton = styled(Button)`
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  @media screen and (max-width: 460px) {
    padding: 5px;
  }
`;
export const ActionButton = styled(Button)`
  padding: 12px 10px;
  font-size: var(--text-base);
  @media screen and (max-width: 460px) {
    font-size: var(--text-sm);
  }
  @media screen and (max-width: 360px) {
    font-size: var(--text-xs);
  }
`;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 20px;
    height: 20px;
    cursor: pointer;
  `;
}
