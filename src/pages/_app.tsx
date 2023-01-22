import type { AppProps } from "next/app";

import type { NextPageWithLayout } from "types/next-page";

import AppProvider from "@/components/AppProvider";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
}

export default App;
