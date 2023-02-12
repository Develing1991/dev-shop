import styled from "@emotion/styled";
export const ProductDetailPage = styled.section`
  max-width: 1024px;
  width: 100%;
  padding: 0 20px;
  margin: auto;
  margin-top: 50px;

  .product-detail {
    display: flex;
    gap: 20px;
  }
  .detail__left,
  .detail__right {
    flex-basis: 50%;
  }
  /* left */
  .image-area {
    object-fit: cover;
  }
  /* right */
  .info {
    font-family: "Roboto";
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .info__price .price {
    color: var(--color-gray-1);
    font-size: var(--text-xl);
    text-decoration: line-through;
  }
  .info__price .discount {
    font-size: var(--text-2xl);
    color: var(--color-gray-5);
  }
  .info__rate .rate {
    width: 60px;
    height: 60px;
    background-color: var(--color-gray-5);
    border-radius: 50%;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-xl);
  }
  .table {
    display: flex;
    align-items: center;
    margin: 20px 0;
    /* margin-bottom: 20px; */
  }
  .table .th {
    flex: 1;
  }
  .table .td {
    flex: 3;
    display: flex;
    justify-content: space-between;
    font-size: var(--text-sm);
    font-weight: var(--font-light);
    line-height: 1.3;
  }
  .star-rate {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }
  .score {
    font-size: var(--text-xs);
  }

  .more {
    font-size: var(--text-sm);
    color: var(--color-gray-2);
  }
  .more:hover {
    text-decoration: underline;
  }
  .options .dropdown {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
  }

  .total {
    font-size: var(--text-2xl);
  }
  .ammount {
    font-size: var(--text-3xl);
  }
  .btn-group {
    display: flex;
    gap: 10px;
  }
`;
