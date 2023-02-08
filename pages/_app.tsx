import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import LayoutIndex from "@/src/layouts/LayoutIndex";
import globalStyles from "@/src/styles/globalStyles";
import globalVariables from "@/src/styles/globalVariables";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Global styles={globalVariables} />
      <LayoutIndex>
        <Component {...pageProps} />
      </LayoutIndex>
    </>
  );
}
