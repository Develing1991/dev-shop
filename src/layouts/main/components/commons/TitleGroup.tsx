import React from "react";
import * as S from "./TitleGroup.styles";
interface ITitleGroup {
  title: string;
  subTitle?: string;
}
export default function TitleGroup({ title, subTitle }: ITitleGroup) {
  return (
    <S.TitleGroup className="title-group">
      <h3>{title}</h3>
      {subTitle && <p>{subTitle}</p>}
    </S.TitleGroup>
  );
}
