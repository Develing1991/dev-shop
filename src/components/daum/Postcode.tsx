import { modalState } from "@/src/store/modals";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { useResetRecoilState } from "recoil";
export const Postcode = ({
  onSetAddress,
}: {
  onSetAddress: (data: Address) => void;
}) => {
  const resetModal = useResetRecoilState(modalState);
  const handleComplete = (data: Address) => {
    onSetAddress(data);
    resetModal();
  };
  const onResizePost = () => {
    const daumLayerEl = document.querySelector<HTMLDivElement>(
      "[id*=__daum__layer]"
    );
    if (daumLayerEl) {
      daumLayerEl.style.minWidth = "100px";
      daumLayerEl.style.overflow = "auto";
    }
  };
  return (
    <DaumPostcodeEmbed onComplete={handleComplete} onResize={onResizePost} />
  );
};
