import DefaultFooter from "./footers/DefaultFooter";
import SearchHeader from "./headers/SearchHeader";
import styled from "@emotion/styled";
export default function LayoutIndex({ children }: { children: JSX.Element }) {
  return (
    <SLayoutIndex>
      <SearchHeader />
      {children}
      <DefaultFooter />
    </SLayoutIndex>
  );
}
const SLayoutIndex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
