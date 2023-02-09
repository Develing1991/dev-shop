import * as S from "./Article.styles";

export default function Article({ children }: { children: JSX.Element }) {
  return (
    <S.Article>
      <div className="inner">{children}</div>
    </S.Article>
  );
}
