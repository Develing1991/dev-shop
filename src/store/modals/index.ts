import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    open: false,
    permanent: false,
    title: "",
    contents: "",
    confirm: false,
    action: () => {},
  },
});
