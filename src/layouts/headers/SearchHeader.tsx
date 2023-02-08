import LogoWrapper from "./units/components/LogoWrapper";
import NavWrapper from "./units/components/NavWrapper";
import UtilWrapper from "./units/components/UtilWrapper";

export default function SearchHeader() {
  return (
    <header>
      <UtilWrapper />
      <LogoWrapper />
      <NavWrapper />
    </header>
  );
}
