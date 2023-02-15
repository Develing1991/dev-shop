import { useEffect } from "react";
import { ON_AUTH_STATE_CHANGED } from "../api/firebase/authentication";
import { useRecoilState } from "recoil";
import { loginUserState } from "../store/authentication";

export default function useAuth() {
  const [, setLoginUserState] = useRecoilState(loginUserState);
  useEffect(() => {
    ON_AUTH_STATE_CHANGED((user) => {
      if (user) {
        setLoginUserState(() => ({
          displayName: user?.displayName ?? "",
          providerId: user?.providerId,
          uid: user?.uid,
          email: user?.email ?? "",
          admin: user?.admin,
        }));
      }
      // setLoginUserState((prev) => ({
      //   // ...user,

      //   name: user?.displayName,
      //   uid: user?.uid,
      //   email: user?.email,
      //   admin: user?.admin,
      // }));
    });
  }, []);
}
