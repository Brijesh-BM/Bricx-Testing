import type { Metadata } from "next";
import { Cinzel, Geom, Inter, Nunito_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
} from "@/lib/site";
import "./globals.css";

const defaultTitle = "Commercial Real Estate Advisory in Bangalore | Bricx.ai";
const defaultDescription =
  "Independent commercial real estate advisory in Bangalore across leasing, investments and land. Trust earned through discipline, clarity and sound judgment.";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geom = Geom({
  variable: "--font-geom",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Bricx.ai",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geom.variable} ${nunitoSans.variable} ${cinzel.variable} h-full`}
    >
      <body className="flex min-h-full min-w-0 flex-col bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
