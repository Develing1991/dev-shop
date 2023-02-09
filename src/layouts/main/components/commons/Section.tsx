import * as S from "./Section.styles";

export default function Section({ children }: { children: JSX.Element }) {
  return (
    <S.Section>
      <div className="inner">{children}</div>
    </S.Section>
  );
}
