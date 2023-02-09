import LogoWrapper from "./components/LogoWrapper/LogoWrapper";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import UtilWrapper from "./components/UtilWrapper/UtilWrapper";

export default function SearchHeader() {
  return (
    <header>
      <UtilWrapper />
      <LogoWrapper />
      <NavWrapper />
    </header>
  );
}
