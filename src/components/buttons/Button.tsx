import * as S from "./Button.styles";
interface IButton {
  text: string;
  reverse?: boolean;
}
export default function Button({ text, reverse = false }: IButton) {
  return <S.Button reverse={reverse}>{text}</S.Button>;
}
