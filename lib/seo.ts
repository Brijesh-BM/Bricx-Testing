import type { Metadata } from "next";
import { SITE_NAME, DEFAULT_OG_IMAGE, OG_IMAGE_ALT } from "./site";

type PageSeo = {
  title: string; // without the "| Bricx.ai" suffix
  description: string;
  path: string; // route path, e.g. "/advisory"; homepage is "/"
  ogImage?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage,
}: PageSeo): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
