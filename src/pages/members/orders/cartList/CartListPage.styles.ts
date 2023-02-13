import styled from "@emotion/styled";
import { IconType } from "react-icons/lib";
import { TfiClose } from "react-icons/tfi";
export const CartListPage = styled.section`
  /* .title {
    text-align: center;
    margin-bottom: 10px;
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    letter-spacing: 0.1rem;
  } */
  max-width: 1024px;
  width: 100%;
  margin: auto;
  .cart-board {
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 30px;
  }
  .cart-left {
    display: flex;
    flex-direction: column;
  }

  .all label {
    font-size: var(--text-xl);
    font-weight: var(--font-light);
  }

  .cart-list {
    margin: 15px 0;
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

  .shipping-actions button {
    border: 1px solid var(--color-gray-2);
    border-radius: 2px;
    padding: 5px;
    color: var(--color-gray-3);
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    margin-left: 5px;
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
    gap: 5px;
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
  }
  .all_actions {
    align-self: flex-end;
    display: flex;
    gap: 10px;
    width: 50%;
  }
  .cart-right {
  }
`;

export const CloseIcon = styled(CommStyled(TfiClose))``;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    width: 20px;
    height: 20px;
    cursor: pointer;
  `;
}
