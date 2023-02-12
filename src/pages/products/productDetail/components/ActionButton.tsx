import React from "react";
import * as S from "./ActionButton.styles";
interface IActionButton {
  text: string;
}
export default function ActionButton({ text }: IActionButton) {
  return <S.ActionButton>{text}</S.ActionButton>;
}
