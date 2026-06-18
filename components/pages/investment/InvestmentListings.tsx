"use client";

import { useState, useRef, FormEvent } from "react";
import Image from "next/image";

type Listing = {
  category: "Office" | "Retail" | "Mixed-Use" | "Industrial";
  location: string;
  title: string;
  description: string;
  capRate: number;
  noi: string;
  occupancy: number;
  image: string;
};

const listings: Listing[] = [
  {
    category: "Mixed-Use",
    location: "New Delhi, India",
    title: "Vasant Vihar Plaza",
    description: "Core retail and Grade-A office building in Vasant Vihar. Fully let to multi-national banking and fashion conglomerates with structured lease escalations.",
    capRate: 7.4,
    noi: "₹13.7M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Retail",
    location: "Bengaluru, Karnataka",
    title: "Koramangala Highstreet",
    description: "Iconic high-street flagship retail building let on a long-term triple-net (NNN) contract to a global sports retail brand with bank backing.",
    capRate: 6.95,
    noi: "₹22.2M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Industrial",
    location: "Bengaluru, Karnataka",
    title: "Whitefield Logistics Hub",
    description: "Institutional-grade logistics and distribution warehouse facility let on a 15-year master lease to a leading e-commerce conglomerate.",
    capRate: 8.2,
    noi: "₹38.5M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Office",
    location: "Bengaluru, Karnataka",
    title: "Devanahalli Business Park",
    description: "Premium Grade-A office space block in North Bangalore, pre-leased to an international IT consultant and R&D tenant.",
    capRate: 7.8,
    noi: "₹19.1M",
    occupancy: 90,
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Mixed-Use",
    location: "Mumbai, Maharashtra",
    title: "Bandra West Commercial Tower",
    description: "Landmark mixed-use asset in Mumbai's premier commercial belt. Ground floor anchored by a national banking institution; upper floors occupied by a top-tier media conglomerate under a long-form NNN lease.",
    capRate: 6.8,
    noi: "₹29.4M",
    occupancy: 96,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Office",
    location: "Gurugram, Haryana",
    title: "Cyber City Corporate Hub",
    description: "Institutional-grade strata office in DLF Cyber City, India's foremost corporate district. Occupied by a Fortune 500 professional services firm on a 12-year lease with sovereign-grade covenant strength.",
    capRate: 7.9,
    noi: "₹44.1M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop",
  },
];

export function InvestmentListings() {
  const [search, setSearch] = useState("");
  const [capRate, setCapRate] = useState(6.0);
  const [occupancy, setOccupancy] = useState(80);
  const [category, setCategory] = useState("all");
  const [ndaSubmitted, setNdaSubmitted] = useState(false);
  const [ndaPlaceholder, setNdaPlaceholder] = useState("Enter business email to sign digital NDA");

  const ndaSectionRef = useRef<HTMLDivElement>(null);
  const ndaEmailInputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearch("");
    setCapRate(6.0);
    setOccupancy(80);
    setCategory("all");
  };

  const handleRequestProspectus = (title: string) => {
    setNdaPlaceholder(`Email to sign NDA for ${title}`);
    if (ndaSectionRef.current) {
      ndaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      if (ndaEmailInputRef.current) {
        ndaEmailInputRef.current.focus();
      }
    }, 600);
  };

  const handleNdaSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNdaSubmitted(true);
  };

  // Vetting logic
  const filteredListings = listings.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    const matchesCap = item.capRate >= capRate;
    const matchesOcc = item.occupancy >= occupancy;

    return matchesCategory && matchesSearch && matchesCap && matchesOcc;
  });

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        
        {/* ── MINIMALIST FILTER PANEL ────────────────────────────────────── */}
        <div className="bg-card border border-border/60 rounded-md p-6 md:p-8 flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 md:gap-8 mb-12">
          {/* Search Location / Property */}
          <div className="flex-1 min-w-[200px] flex flex-col">
            <label htmlFor="search-location" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] font-nunito mb-2">
              Search Location / Property
            </label>
            <input
              type="text"
              id="search-location"
              placeholder="Enter Location or Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-b border-border/80 py-2 text-sm text-foreground outline-none transition-colors focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Minimum Cap Rate */}
          <div className="flex-1 min-w-[200px] flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] font-nunito">
                Minimum Cap Rate
              </label>
              <span className="text-sm font-semibold text-foreground font-nunito">
                {capRate.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted">6.0%</span>
              <input
                type="range"
                min="6.0"
                max="9.0"
                step="0.1"
                value={capRate}
                onChange={(e) => setCapRate(parseFloat(e.target.value))}
                className="w-full accent-[var(--color-accent)] h-1 bg-[var(--color-opp-card)] rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-muted">9.0%</span>
            </div>
          </div>

          {/* Minimum Occupancy */}
          <div className="flex-1 min-w-[200px] flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] font-nunito">
                Minimum Occupancy
              </label>
              <span className="text-sm font-semibold text-foreground font-nunito">
                {occupancy}%
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted">80%</span>
              <input
                type="range"
                min="80"
                max="100"
                step="1"
                value={occupancy}
                onChange={(e) => setOccupancy(parseInt(e.target.value))}
                className="w-full accent-[var(--color-accent)] h-1 bg-[var(--color-opp-card)] rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-muted">100%</span>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={handleClear}
            className="bg-[var(--color-accent)] hover:bg-transparent text-white hover:text-[var(--color-accent)] border border-[var(--color-accent)] px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 h-11"
          >
            Clear Filters
          </button>
        </div>

        {/* ── CATEGORY FILTER TABS ────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 border-b border-border/40 pb-6 mb-12">
          {["all", "Office", "Retail", "Mixed-Use", "Industrial"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-sm transition-all duration-300 ${
                category === cat
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                  : "bg-transparent border-border/80 text-muted hover:border-[var(--color-accent)] hover:text-foreground"
              }`}
            >
              {cat === "all" ? "Show All" : cat}
            </button>
          ))}
        </div>

        {/* ── LISTINGS GRID ──────────────────────────────────────────────── */}
        {filteredListings.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((item) => (
              <article
                key={item.title}
                className="group bg-card border border-border/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-md"
              >
                {/* Image Wrapper */}
                <div className="relative h-60 w-full overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 bg-[var(--color-footer-bg)] text-[#F9F6F0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-xs">
                    Private Exclusive
                  </span>
                  <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] font-nunito mb-2">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-muted leading-relaxed font-nunito mb-6 flex-1">
                    {item.description}
                  </p>

                  {/* Metrics Table */}
                  <div className="grid grid-cols-3 gap-3 border-t border-b border-border/40 py-4 mb-6 text-center">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-muted font-nunito mb-1">
                        Cap Rate
                      </div>
                      <div className="font-serif text-base font-bold text-foreground">
                        {item.capRate.toFixed(2)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-muted font-nunito mb-1">
                        NOI (Annual)
                      </div>
                      <div className="font-serif text-base font-bold text-foreground">
                        {item.noi}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-muted font-nunito mb-1">
                        Occupancy
                      </div>
                      <div className="font-serif text-base font-bold text-foreground">
                        {item.occupancy}%
                      </div>
                    </div>
                  </div>

                  {/* Request Button */}
                  <button
                    onClick={() => handleRequestProspectus(item.title)}
                    className="w-full bg-[var(--color-accent)] hover:bg-transparent text-white hover:text-[var(--color-accent)] border border-[var(--color-accent)] py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300"
                  >
                    Request Prospectus
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border/80 rounded-md">
            <p className="text-sm text-muted font-light">
              No off-market placements match the specified filters. Try adjusting your search criteria.
            </p>
          </div>
        )}

        {/* ── CONFIDENTIAL NDA GATEWAY DRAWER ─────────────────────────────── */}
        <div
          ref={ndaSectionRef}
          className="mt-16 bg-[#0e182a] border border-[var(--color-accent)]/30 rounded-md p-8 md:p-12 text-center text-[#F9F6F0] max-w-4xl mx-auto transition-all duration-500"
        >
          {/* Lock Icon SVG */}
          <div className="flex justify-center mb-6">
            <svg
              className="h-10 w-10 text-[var(--color-accent)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight mb-4">
            Access Institutional Off-Market Dealroom
          </h3>
          <p className="text-sm font-light text-white/80 max-w-2xl mx-auto mb-8 font-nunito leading-relaxed">
            Due to owner confidentiality mandates, detailed financial disclosures, full underwritten valuation cash flows, lease abstracts, and tenant details are secure. Please sign a digital NDA to unlock all prospectus materials.
          </p>

          {!ndaSubmitted ? (
            <form onSubmit={handleNdaSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                ref={ndaEmailInputRef}
                type="email"
                required
                placeholder={ndaPlaceholder}
                className="flex-1 bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-accent)] focus:bg-white/10 transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--color-accent)] hover:bg-opacity-95 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-opacity"
              >
                Request Access
              </button>
            </form>
          ) : (
            <div className="text-sm font-semibold text-[var(--color-accent)] animate-fade-in font-nunito">
              ✓ NDA request logged. Our investment principal will email your secure credentials within 1 hour.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
