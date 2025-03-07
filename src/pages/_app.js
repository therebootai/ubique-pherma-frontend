import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import {ProductProvider} from "@/store/ProductStore";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}
