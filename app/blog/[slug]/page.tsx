import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleClient } from "@/components/pages/blog/BlogArticleClient";
import { articleContentBySlug } from "@/data/blogArticleContent";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article | Bricx.ai" };

  const url = `https://bricx.ai/blog/${post.slug}`;
  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.dateIso,
      authors: [post.author],
      images: [
        {
          url: `https://bricx.ai${post.imageSrc}`,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://bricx.ai${post.imageSrc}`],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleContent = articleContentBySlug[slug];
  if (!articleContent) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bricx.ai/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://bricx.ai${post.imageSrc}`,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bricx.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bricx.ai/favicon.ico",
      },
    },
    "datePublished": post.dateIso,
  };

  // Find related recommended reading articles
  const relatedPosts = articleContent.internalLinks
    .map((rSlug) => getBlogPostBySlug(rSlug))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticleClient
        post={post}
        articleContent={articleContent}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
