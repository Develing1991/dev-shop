import DefaultFooter from "./footers/DefaultFooter";
import SearchHeader from "./headers/SearchHeader";
import styled from "@emotion/styled";
import useAuth from "../hooks/useAuth";

import Modal from "../components/modals/Modal";
import Portal from "../utils/Portal";
import { useRecoilState } from "recoil";
import { modalState } from "../store/modals";
export default function LayoutIndex({ children }: { children: JSX.Element }) {
  const [modal] = useRecoilState(modalState);

  useAuth();
  return (
    <SLayoutIndex>
      <SearchHeader />
      <MainView>{children}</MainView>
      <DefaultFooter />
      {modal.open && (
        <Portal>
          <Modal />
        </Portal>
      )}
    </SLayoutIndex>
  );
}
const SLayoutIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  /* height: 6000px; */
`;

const MainView = styled.main`
  @media screen and (max-width: 640px) {
    margin-top: 80px;
  }
`;
