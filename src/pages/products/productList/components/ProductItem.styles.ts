import styled from "@emotion/styled";
import { IoIosHeartEmpty, IoIosArrowRoundDown } from "react-icons/io";
export const ProductItem = styled.div`
  line-height: 1.3;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px;
  display: ${({ grid }: { grid: string }) =>
    grid === "grid-box" ? "block" : "flex"};
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 460px) {
    gap: 7px;
    padding: 10px 0;
  }

  &:hover {
    transform: scale(1.02);
    border: 1px solid var(--color-gray-0);
  }
  .image-area {
    object-fit: cover;
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
    /* elipsis */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 460px) {
      font-size: var(--text-sm);
    }
  }
  .title:hover {
    text-decoration: underline;
  }

  .description {
    margin-top: 5px;
    font-size: var(--text-sm);
    color: var(--color-gray-2);
    /* elipsis */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 460px) {
      font-size: var(--text-xs);
    }
  }

  .info {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
    @media screen and (max-width: 460px) {
      gap: 5px;
    }
    .price {
      color: var(--color-black);
      font-weight: var(--font-bold);
      @media screen and (max-width: 460px) {
        font-size: var(--text-sm);
      }
    }
    .discount {
      font-size: var(--text-xs);
      text-decoration: line-through;
      color: var(--color-gray-2);
      @media screen and (max-width: 460px) {
        font-size: var(--text-2xs);
      }
    }
    .rate {
      display: flex;
      align-items: flex-end;
      color: var(--color-red);
      font-weight: var(--font-bold);
      @media screen and (max-width: 460px) {
        font-size: var(--text-sm);
      }
    }
  }
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .shipping {
      font-size: var(--text-sm);
      color: var(--color-gray-2);
      @media screen and (max-width: 460px) {
        font-size: var(--text-xs);
      }
    }
  }
  .reviews {
    margin-top: 2px;
    font-size: var(--text-xs);
    color: var(--color-gray-3);
    @media screen and (max-width: 460px) {
      font-size: var(--text-2xs);
    }
  }
  .categories {
    display: flex;
    gap: 5px;
    margin-top: 10px;
    flex-wrap: wrap;
    span {
      font-size: var(--text-xs);
      border: 1px solid var(--color-gray-1);
      padding: 0 4px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.03rem;
      @media screen and (max-width: 460px) {
        font-size: var(--text-2xs);
      }
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
  @media screen and (max-width: 460px) {
    width: 15px;
    height: 15px;
  }
`;
