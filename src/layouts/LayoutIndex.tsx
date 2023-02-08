import DefaultFooter from "./footers/DefaultFooter";
import SearchHeader from "./headers/SearchHeader";

export default function LayoutIndex({ children }: { children: JSX.Element }) {
  return (
    <>
      <SearchHeader />
      {children}
      <DefaultFooter />
    </>
  );
}
