import { MouseEvent } from "react";
import styled from "@emotion/styled";

import { useRecoilState, useResetRecoilState } from "recoil";
import { modalState } from "@/src/store/modals";
import { Button } from "../buttons/Button.styles";

export default function Modal() {
  const [modal] = useRecoilState(modalState);
  const { permanent, title, contents, confirm, action } = modal;
  const resetModal = useResetRecoilState(modalState);

  const onLayerAction = (event: MouseEvent<HTMLDivElement>) => {
    if (!permanent && event.currentTarget === event.target) {
      resetModal();
    }
  };

  const onExactAction = () => {
    if (action) {
      action();
    }
    resetModal();
  };

  return (
    <ModalLayer onClick={onLayerAction}>
      <div className="inner">
        {title && <div className="title">{title}</div>}
        <div className="contents">{contents}</div>
        <div className="actions">
          <Button reverse onClick={onExactAction}>
            확인
          </Button>
          {confirm && <Button onClick={resetModal}>닫기</Button>}
        </div>
      </div>
    </ModalLayer>
  );
}

const ModalLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .inner {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: var(--color-white);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .actions {
    display: flex;
    align-self: flex-end;
    gap: 10px;
  }

  .actions button {
    font-size: var(--text-regular);
  }
`;
