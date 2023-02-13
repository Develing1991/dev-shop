import * as S from "./Button.styles";
interface IButton {
  children: string | JSX.Element;
  reverse?: boolean;
}
export default function Button({ children, reverse = false }: IButton) {
  return <S.Button reverse={reverse}>{children}</S.Button>;
}
