import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: {
    default: "Bricx.ai | Independent Commercial Real Estate Advisory Bengaluru",
    template: "%s | Bricx.ai"
  },
  description: "Bricx.ai delivers high-end institutional real estate advisory, off-market income investments, and strategic land opportunities with unmatched structural clarity and credibility.",
  keywords: "commercial real estate advisory, off-market investments, land opportunities, Bengaluru real estate",
  other: {
    "theme-color": "#0e182a",
    "twitter:card": "summary_large_image",
    "twitter:site": "@bricx_ai",
    "twitter:creator": "@bricx_ai"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%230e182a'/><text x='50%' y='53%' font-size='70' font-family='serif' fill='%23C5B897' text-anchor='middle' dominant-baseline='middle'>B</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
