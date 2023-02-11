import styled from "@emotion/styled";
import { IoIosHeartEmpty, IoIosArrowRoundDown } from "react-icons/io";
export const ProductItem = styled.div`
  line-height: 1.3;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px;
  &:hover {
    transform: scale(1.02);
    border: 1px solid var(--color-gray-0);
  }

  .title {
    cursor: pointer;
    margin-top: 10px;
    .brand {
      font-weight: var(--font-bold);
      color: var(--color-blue-1);
    }
    .brand::before {
      content: "[";
      padding-right: 1px;
    }
    .brand::after {
      content: "]";
      padding-left: 1px;
    }
  }
  .title:hover {
    text-decoration: underline;
  }

  .description {
    margin-top: 5px;
    font-size: var(--text-sm);
    color: var(--color-gray-2);
  }

  .info {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    margin-top: 10px;
    .price {
      color: var(--color-black);
      font-weight: var(--font-bold);
    }
    .discount {
      font-size: var(--text-xs);
      text-decoration: line-through;
      color: var(--color-gray-2);
    }
    .rate {
      display: flex;
      align-items: flex-end;
      color: var(--color-red);
      font-weight: var(--font-bold);
    }
  }
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .shipping {
      font-size: var(--text-sm);
      color: var(--color-gray-2);
    }
  }
  .reviews {
    margin-top: 2px;
    font-size: var(--text-xs);
    color: var(--color-gray-3);
  }
  .categories {
    display: flex;
    gap: 5px;
    margin-top: 10px;
    span {
      font-size: var(--text-xs);
      border: 1px solid var(--color-gray-1);
      padding: 0 4px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.03rem;
    }
  }
`;
export const HeartIcon = styled(IoIosHeartEmpty)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
export const DisCountIcon = styled(IoIosArrowRoundDown)`
  width: 20px;
  height: 20px;
  /* margin-left: -10px; */
  /* margin: 0 5px 5px 0; */
  cursor: pointer;
`;
