import { IconType } from "react-icons/lib";
import styled from "@emotion/styled";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
export const SelectedOption = styled.div`
  border: 1px solid var(--color-gray-5);

  padding: 15px;

  .value {
    font-size: var(--text-sm);
    margin-bottom: 15px;
  }
  .control-group {
    display: flex;
    justify-content: space-between;
  }
  .control__left {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-gray-3);
  }
  .control__left .count {
    height: 100%;
    padding: 0;
    text-align: center;
    width: 30px;
    border-left: 1px solid var(--color-gray-3);
    border-right: 1px solid var(--color-gray-3);
  }
  .control__right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .control__right .price {
    font-size: var(--text-xl);
  }
`;

export const PlusIcon = styled(CommStyled(AiOutlinePlus))``;
export const MinusIcon = styled(CommStyled(AiOutlineMinus))``;
export const CloseIcon = styled(CommStyled(AiOutlineClose))`
  background-color: var(--color-gray-5);
  width: 25px;
  height: 25px;
  padding: 2px;
  color: var(--color-white);
  &:hover {
    opacity: 0.8;
  }
`;

function CommStyled(Icon: IconType) {
  return styled(Icon)`
    border-radius: 2px;
    width: 20px;
    height: 20px;
    padding: 1px;
    cursor: pointer;
  `;
}
