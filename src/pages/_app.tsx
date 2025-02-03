import type { AppProps } from "next/app";
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  // Use useEffect to import Bootstrap JS and ensure it runs only on the client side
  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.min.js');

    // Additional Bootstrap initialization can go here if needed
    return () => {
      // Optionally, you can clean up if necessary
    };
  }, []);
  

  return <Component {...pageProps} />;
}
