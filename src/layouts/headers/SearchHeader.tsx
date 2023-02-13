import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import UtilWrapper from "./components/UtilWrapper/UtilWrapper";

import { useEffect, useRef, useState } from "react";

export default function SearchHeader() {
  const utilRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [flyMode, setFlyMode] = useState(false);

  useEffect(() => {
    const { height: UtilHeight } =
      utilRef.current?.getBoundingClientRect() as DOMRect;
    const { height: LogoHeight } =
      logoRef.current?.getBoundingClientRect() as DOMRect;
    const refsHeight = UtilHeight + LogoHeight;

    window.addEventListener("scroll", (event) => {
      if (window.scrollY > refsHeight) {
        setFlyMode(() => true);
      } else {
        setFlyMode(() => false);
      }
    });
  });

  return (
    <header>
      <UtilWrapper ref={utilRef} />
      <LogoWrapper ref={logoRef} />
      <NavWrapper flyMode={flyMode} />
    </header>
  );
}
