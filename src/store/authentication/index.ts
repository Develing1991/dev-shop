import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const isLoggedState = atom({
  key: "isLoggedState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loginUserState = atom({
  key: "loginUserState",
  default: {
    displayName: "",
    uid: "",
    email: "",
    providerId: "",
    admin: false,
  },
});
