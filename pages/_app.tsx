import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css"; // keep this

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
