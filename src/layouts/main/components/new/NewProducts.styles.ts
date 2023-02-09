import styled from "@emotion/styled";

export const NewProducts = styled.div`
  display: flex;
  --gap-size: 15px;
  gap: var(--gap-size);
  .left-product {
    display: flex;
    align-items: center;
    gap: var(--gap-size);
  }
  /* .left-product li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  .left-product .image-area {
    max-width: 320px;
  }
  .left-product li .title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
  }
  .left-product li .subtitle {
    display: flex;
    gap: 5px;
    align-items: flex-end;
    .price {
      font-weight: var(--font-bold);
    }
    .discount {
      font-size: var(--text-xs);
      text-decoration: line-through;
    }
    .rate {
      font-weight: var(--font-bold);
      color: var(--color-blue);
    }
  }
  button {
    margin-top: 5px;
    padding: 2px 3px;
    border: 1px solid var(--color-gray-1);
    border-radius: 3px;
  } */
  .right-product {
    .image-area {
      /* max-width: 392px; */
    }
  }
`;
