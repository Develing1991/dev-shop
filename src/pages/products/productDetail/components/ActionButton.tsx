import React from "react";
import * as S from "./ActionButton.styles";
interface IActionButton {
  text: string;
  reverse?: boolean;
}
export default function ActionButton({ text, reverse = false }: IActionButton) {
  return <S.ActionButton reverse={reverse}>{text}</S.ActionButton>;
}
