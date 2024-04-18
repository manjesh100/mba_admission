import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "@/store";
import { InterFont } from "@/utils/custom-fonts/inter";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "@/styles/globals.css";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${InterFont.variable}`}>
      <Toaster />
      <Provider store={store}>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  )
}
