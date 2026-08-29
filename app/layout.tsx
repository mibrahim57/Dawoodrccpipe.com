import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawood RCC Pipe | Pakistan's Infrastructure Since 1967",
  description:
    "Pakistan's most trusted RCC concrete pipe manufacturer. 57+ years, Karachi. NHA, WAPDA, CDA approved. Exporting to Middle East, Africa, Central Asia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
