import styled from "@emotion/styled";
import { AiOutlineHeart } from "react-icons/ai";
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  .image-area {
    max-width: 320px;
  }
  .image-area:hover {
    border: 1px solid var(--color-gray-0);
  }
  .title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    cursor: pointer;
  }
  .title:hover {
    text-decoration: underline;
  }
  .subtitle {
    display: flex;
    gap: 10px;
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
  .card-actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shipping {
    margin-top: 5px;
    padding: 5px;
    font-size: var(--text-xs);
    border: 1px solid var(--color-gray-1);
    border-radius: 3px;
  }
`;

export const HeartIcon = styled(AiOutlineHeart)`
  width: 25px;
  height: 25px;
  margin: 0 5px 5px 0;
  cursor: pointer;
`;
