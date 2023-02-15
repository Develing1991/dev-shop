import ReactDOM from "react-dom";

export default function Portal({ children }: { children: JSX.Element }) {
  if (typeof window === "undefined") return <></>;
  const body = document.querySelector("body") as HTMLBodyElement;
  return ReactDOM.createPortal(children, body);
}
