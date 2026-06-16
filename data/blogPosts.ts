export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  readMinutes: number;
  date: string;
  dateIso: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  imageSrc: string;
  imageAlt: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "office-space-pricing-bangalore-real-numbers",
    title: "Office Space Pricing in Bangalore: The Real Numbers",
    metaTitle: "Office Space Cost in Bangalore 2026 | Real Pricing Data by Micro-Market",
    metaDescription: "Actual pricing data from recent office space deals in Bangalore. Compare costs across Whitefield, Koramangala, HSR, Indiranagar. No estimates; real numbers from closed transactions.",
    targetKeyword: "office space cost bangalore",
    author: "Krupesh, Principal Advisor",
    readMinutes: 5,
    date: "05/31/26",
    dateIso: "2026-05-31",
    imageSrc: "/images/blog/luxury_office_penthouse.png",
    imageAlt: "Double-height premium luxury office penthouse boardroom looking over a modern cityscape at sunset with teak accents",
    excerpt: "Actual closed deal pricing data from recent office space transactions across Bangalore's major micro-markets, including Whitefield, Koramangala, and HSR Layout.",
  },
  {
    slug: "bangalore-micro-markets-decoded-office-location",
    title: "Bangalore Micro-Markets Decoded: Where to Set Up Your Office",
    metaTitle: "Bangalore Office Space Micro-Markets Guide 2026 | Where to Set Up Your Office",
    metaDescription: "Which Bangalore micro-market fits your business? HSR vs Whitefield vs Koramangala vs Indiranagar. Real insights on talent, costs, and industry fit from 4+ years of deal experience.",
    targetKeyword: "bangalore office location micro-market",
    author: "Bricx Research Desk",
    readMinutes: 6,
    date: "05/30/26",
    dateIso: "2026-05-30",
    imageSrc: "/images/blog/glass_office_skyscraper.png",
    imageAlt: "Sleek modern glass office skyscraper exterior corridor at twilight with warm lights and palm trees",
    excerpt: "An in-depth analysis of talent density, seat costs, and industry clusters comparing Koramangala, HSR Layout, Whitefield, and Hebbal.",
  },
  {
    slug: "how-bricx-fee-structure-works-transparency",
    title: "How Our Fee Structure Actually Works (And Why It Matters)",
    metaTitle: "How Bricx.ai Gets Paid | Transparent Fee Structure for Real Estate Advisory",
    metaDescription: "Complete transparency on how we're compensated for leasing, land deals, and commercial property investments. Landlord-paid model explained. No hidden fees or conflicts.",
    targetKeyword: "real estate advisor fees bangalore",
    author: "Krupesh, Principal Advisor",
    readMinutes: 5,
    date: "05/29/26",
    dateIso: "2026-05-29",
    imageSrc: "/images/blog/luxury_consultation_lounge.png",
    imageAlt: "Private wealth advisory consultation boardroom with a calacatta marble desk and elegant leather seating",
    excerpt: "Complete transparency on commercial real estate advisor commissions, landlord-paid models, and how Bricx maintains absolute conflict-free representation.",
  },
  {
    slug: "why-we-show-3-options-not-30-curated",
    title: "Why We Show 3 Options, Not 30",
    metaTitle: "Why Bricx.ai Shows 3 Office Options Not 30 | Curated Advisory vs Volume Brokerage",
    metaDescription: "Volume vs curation in office space search. Why we show 3-5 carefully evaluated options instead of flooding you with 30+ listings and why conviction matters more than hedging.",
    targetKeyword: "office space advisory bangalore",
    author: "Bricx Advisory Board",
    readMinutes: 5,
    date: "05/28/26",
    dateIso: "2026-05-28",
    imageSrc: "/images/blog/curated_three_options.png",
    imageAlt: "Minimalist gallery lounge space displaying exactly three designer premium furniture items under warm lights",
    excerpt: "Why volume is the broker's shield and curation is the advisor's commitment to conviction. Underwriting details behind office space curation.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
