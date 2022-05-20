import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../app/store";

// components
import { Layout, Theme } from "@Components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Provider>
    </>
  );
}

export default MyApp;
