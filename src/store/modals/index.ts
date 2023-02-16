import { atom } from "recoil";
interface ImodalState {
  open: boolean;
  permanent: boolean;
  title: string;
  contents: JSX.Element | string;
  confirm: boolean;
  action: () => void;
  isAction: boolean;
}
export const modalState = atom<Partial<ImodalState>>({
  key: "modalState",
  default: {
    open: false,
    permanent: false,
    title: "",
    contents: "",
    confirm: false,
    action: () => {},
    isAction: true,
  },
});
