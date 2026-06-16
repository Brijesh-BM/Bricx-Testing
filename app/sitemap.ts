import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bricx.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/advisory",
    "/investment-opportunities",
    "/land-opportunities",
    "/contact-us",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateIso),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
