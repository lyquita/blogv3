import "../styles/globals.css";
import "../dist/output.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Error from "next/error";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error){
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message}/>
  }else
  return (
    <ThemeProvider enableSystem = {true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
