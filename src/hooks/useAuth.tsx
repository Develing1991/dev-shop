import { useEffect } from "react";
import { ON_AUTH_STATE_CHANGED } from "../api/firebase/authentication";
import { useRecoilState } from "recoil";
import { loginUserState } from "../store/authentication";

export default function useAuth() {
  const [, setLoginUserState] = useRecoilState(loginUserState);
  useEffect(() => {
    ON_AUTH_STATE_CHANGED((user) => {
      setLoginUserState(() => ({
        name: user?.displayName,
        email: user?.email,
      }));
    });
  }, []);
  return <div>useAuth</div>;
}
