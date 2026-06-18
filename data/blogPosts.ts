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
  {
    slug: "how-to-choose-tenant-representative-bengaluru",
    title: "How to choose a tenant representative in Bengaluru — what to look for, what questions to ask, and why independence matters more than size.",
    metaTitle: "How to Choose a Tenant Representative in Bengaluru | Bricx.ai",
    metaDescription: "A comprehensive guide on selecting a commercial tenant representative in Bengaluru. Understand fee transparency, landlord conflicts, and occupier-first advisory.",
    targetKeyword: "tenant representative Bengaluru",
    author: "Krupesh Sanghani",
    readMinutes: 4,
    date: "06/17/26",
    dateIso: "2026-06-17",
    imageSrc: "/images/blog/luxury_office_penthouse.png",
    imageAlt: "Modern commercial office boardroom where tenant representation reviews are conducted",
    excerpt: "A comprehensive guide on evaluating commercial tenant representation in Bengaluru, key questions to ask, and why independent conflict-free advice is critical for corporate occupiers.",
  },
  {
    slug: "what-is-jda-indian-real-estate",
    title: "What is a JDA in Indian real estate — a plain-language breakdown of joint development agreements, revenue share structures, and what landowners need to know.",
    metaTitle: "What is a JDA (Joint Development Agreement) in India | Bricx.ai",
    metaDescription: "A plain-language guide to Joint Development Agreements (JDA) in Indian real estate. Learn about revenue sharing, area sharing, and landowner due diligence.",
    targetKeyword: "JDA Indian real estate",
    author: "Bricx Research Desk",
    readMinutes: 5,
    date: "06/16/26",
    dateIso: "2026-06-16",
    imageSrc: "/images/blog/glass_office_skyscraper.png",
    imageAlt: "Aerial drone photograph of a commercial land parcel prepared for development in Bengaluru",
    excerpt: "A plain-language breakdown of Joint Development Agreements (JDA) in India, analyzing revenue share frameworks, area allocations, and critical legal checkpoints for landowners.",
  },
  {
    slug: "grade-a-office-cap-rates-bangalore-2026",
    title: "Grade A office cap rates in Bangalore 2026 — where yields stand today, which micro-markets are compressing, and what it means for investors.",
    metaTitle: "Grade A Office Cap Rates Bangalore 2026 | Rental Yields & Trends",
    metaDescription: "Underwriting analysis of Grade A office cap rates and commercial yields in Bangalore in 2026. Explore yield compression and tech corridor investments.",
    targetKeyword: "office cap rates Bangalore",
    author: "Krupesh Sanghani",
    readMinutes: 5,
    date: "06/15/26",
    dateIso: "2026-06-15",
    imageSrc: "/images/blog/luxury_consultation_lounge.png",
    imageAlt: "Modern premium glass commercial office corridor in Bangalore's Outer Ring Road tech park",
    excerpt: "An underwriting analysis of Grade A office cap rates and rental yields across Bangalore's primary commercial corridors in 2026, mapping compression trends and investment strategies.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
