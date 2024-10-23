import React from "react";
import { AppProps } from "next/app";
// import { Default } from "@/layouts";
import "./globals.css"; // Đảm bảo Tailwind được import
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
