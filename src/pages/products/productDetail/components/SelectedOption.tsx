import React from "react";
import * as S from "./SelectedOption.styles";
export default function SelectedOption() {
  return (
    <S.SelectedOption>
      <div className="value">옵션 : 그레이</div>
      <div className="control-group">
        <div className="control__left">
          <S.MinusIcon />
          <input type="number" className="count" defaultValue={1} />
          <S.PlusIcon />
        </div>
        <div className="control__right">
          <div className="price">68,000원</div>
          <S.CloseIcon />
        </div>
      </div>
    </S.SelectedOption>
  );
}
