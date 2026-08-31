import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' https://images.unsplash.com data:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "object-src 'none'",
  "base-uri 'self'",
  "upgrade-insecure-requests"
].join("; ");

const threeJsIntegrity =
  "sha384-CI3ELBVUz9XQO+97x6nwMDPosPR5XvsxW2ua7N1Xeygeh1IxtgqtCkGfQY9WWdHu";

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
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
          integrity={threeJsIntegrity}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {children}
      </body>
    </html>
  );
}
