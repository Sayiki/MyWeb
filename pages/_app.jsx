// pages/_app.jsx

// 1. Load the global styles (assuming you created styles/globals.css)
import '../styles/globals.css'; 

// 2. Define the application wrapper component
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// 3. IMPORTANT: This MUST be the default export in this file.
export default MyApp;