import { useEffect } from "react";
import "../styles/globals.css";
import { initLightboxJS } from "lightbox.js-react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const licenseKey = process.env.NEXT_PUBLIC_LIGHTBOX_LICENSE_KEY;
    const planType = process.env.NEXT_PUBLIC_LIGHTBOX_LICENSE_PLAN || "individual";
    if (licenseKey) {
      initLightboxJS(licenseKey, planType);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;