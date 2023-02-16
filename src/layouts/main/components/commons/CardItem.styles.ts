import styled from "@emotion/styled";
import { IoIosHeartEmpty } from "react-icons/io";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 5px;
  align-items: ${({ center }: { center: boolean }) =>
    center ? "center" : "flex-start"};
  .image-area {
    /* max-width: 320px; */
    margin-bottom: 10px;
    cursor: pointer;
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
      color: var(--color-blue-0);
    }
  }
  .card-actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ center }: { center: boolean }) =>
      center ? "center" : "space-between"};
    position: relative;
    .heart {
      position: absolute;
      right: 0;
      color: var(--color-gray-1);
    }
  }
  .shipping {
    margin-top: 5px;
    padding: 5px;
    font-size: var(--text-xs);
    border: 1px solid var(--color-gray-1);
    border-radius: 3px;
  }
`;

export const HeartIcon = styled(IoIosHeartEmpty)`
  width: 25px;
  height: 25px;
  margin: 0 5px 5px 0;
  cursor: pointer;
`;
