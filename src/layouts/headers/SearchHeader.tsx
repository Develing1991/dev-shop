import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import UtilWrapper from "./components/UtilWrapper/UtilWrapper";
import _ from "lodash";

import { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import { isLoggedState, loginUserState } from "@/src/store/authentication";
import { ON_SING_OUT } from "@/src/api/firebase/authentication";

export default function SearchHeader() {
  const [, setLoginUser] = useRecoilState(loginUserState);
  const [, setIsLogged] = useRecoilState(isLoggedState);
  const utilRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [flyMode, setFlyMode] = useState(false);

  useEffect(() => {
    const { height: UtilHeight } =
      utilRef.current?.getBoundingClientRect() as DOMRect;
    const { height: LogoHeight } =
      logoRef.current?.getBoundingClientRect() as DOMRect;
    const refsHeight = UtilHeight + LogoHeight - 15;

    window.addEventListener("scroll", () => scrollThrottle(refsHeight));
  });

  const scrollThrottle = _.throttle((refsHeight: number) => {
    if (window.scrollY > refsHeight) {
      setFlyMode(() => true);
    } else {
      setFlyMode(() => false);
    }
  }, 100);

  const signout = () => {
    ON_SING_OUT();
    setIsLogged(() => false);
    setLoginUser(() => ({}));
  };

  return (
    <header>
      <UtilWrapper ref={utilRef} signout={signout} />
      <LogoWrapper ref={logoRef} />
      <NavWrapper flyMode={flyMode} />
    </header>
  );
}
