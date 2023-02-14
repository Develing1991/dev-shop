import { RecoilRoot } from "recoil";
interface IRecoilRootSettings {
  children: JSX.Element;
}
export default function RecoilRootSettings({ children }: IRecoilRootSettings) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
