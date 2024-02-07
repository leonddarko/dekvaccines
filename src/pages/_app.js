import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
