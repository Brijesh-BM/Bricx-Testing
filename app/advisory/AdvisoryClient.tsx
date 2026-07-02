'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Listing {
  id: number;
  name: string;
  location: string;
  description: string;
  category: 'Office' | 'Retail' | 'Mixed-Use' | 'Industrial';
  capRate: number;
  noi: string;
  occupancy: number;
  image: string;
  imageAlt: string;
  exclusive?: boolean;
}

const LISTINGS: Listing[] = [
  {
    id: 1,
    name: "Vasant Vihar Plaza",
    location: "New Delhi, India",
    description: "Core retail and Grade A office building in Vasant Vihar. Fully let to multi national banking and fashion conglomerates with structured lease escalations.",
    category: "Mixed-Use",
    capRate: 7.4,
    noi: "₹13.7M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Vasant Vihar Corporate Center",
    exclusive: true
  },
  {
    id: 2,
    name: "Koramangala Highstreet",
    location: "Bengaluru, Karnataka",
    description: "Iconic high street flagship retail building let on a long term triple net (NNN) contract to a global sports retail brand with bank backing.",
    category: "Retail",
    capRate: 6.95,
    noi: "₹22.2M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Koramangala Retail Landmark",
    exclusive: true
  },
  {
    id: 3,
    name: "Whitefield Logistics Hub",
    location: "Bengaluru, Karnataka",
    description: "Modern state of the art grade A distribution warehouse occupied by a global e commerce giant. Prime transport link access.",
    category: "Industrial",
    capRate: 8.1,
    noi: "₹36.4M",
    occupancy: 92,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Whitefield Logistics Hub",
    exclusive: true
  },
  {
    id: 4,
    name: "Indiranagar Corporate Suite",
    location: "Bengaluru, Karnataka",
    description: "Premier Grade A office complex in Bengaluru's most sought after commercial corridor. Fully occupied by a blue chip IT services firm on a 9 year lease with structured 15% triennial escalations.",
    category: "Office",
    capRate: 7.2,
    noi: "₹18.9M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Indiranagar Corporate Suite",
    exclusive: true
  },
  {
    id: 5,
    name: "Bandra West Commercial Tower",
    location: "Mumbai, Maharashtra",
    description: "Landmark mixed use asset in Mumbai's premier commercial belt. Ground floor anchored by a national banking institution; upper floors occupied by a top tier media conglomerate under a long form NNN lease.",
    category: "Mixed-Use",
    capRate: 6.8,
    noi: "₹29.4M",
    occupancy: 96,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Bandra West Commercial Tower",
    exclusive: true
  },
  {
    id: 6,
    name: "Cyber City Corporate Hub",
    location: "Gurugram, Haryana",
    description: "Institutional grade strata office in DLF Cyber City, India's foremost corporate district. Occupied by a Fortune 500 professional services firm on a 12 year lease with sovereign grade covenant strength.",
    category: "Office",
    capRate: 7.9,
    noi: "₹44.1M",
    occupancy: 100,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Cyber City Corporate Hub",
    exclusive: true
  }
];

export default function AdvisoryClient() {
  // Filter states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [minCapRate, setMinCapRate] = useState<number>(6.0);
  const [minOccupancy, setMinOccupancy] = useState<number>(80);

  // Prospectus Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [targetProperty, setTargetProperty] = useState('');
  const [pName, setPName] = useState('');
  const [pMobile, setPMobile] = useState('');
  const [pEmail, setPEmail] = useState('');
  const [pErrors, setPErrors] = useState<{
    name?: boolean;
    mobile?: boolean;
    email?: boolean;
    emailInvalid?: boolean;
  }>({});
  const [pStatus, setPStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [pErrorText, setPErrorText] = useState('Something went wrong. Please try again.');

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchLocation('');
    setMinCapRate(6.0);
    setMinOccupancy(80);
  };

  const handleCombinedFilter = (listing: Listing) => {
    const searchVal = searchLocation.toLowerCase().trim();
    const matchesCategory = activeCategory === 'all' || listing.category === activeCategory;
    const matchesSearch = searchVal === '' || 
      listing.name.toLowerCase().includes(searchVal) || 
      listing.description.toLowerCase().includes(searchVal) || 
      listing.location.toLowerCase().includes(searchVal);
    const matchesCap = listing.capRate >= minCapRate;
    const matchesOcc = listing.occupancy >= minOccupancy;

    return matchesCategory && matchesSearch && matchesCap && matchesOcc;
  };

  const filteredListings = LISTINGS.filter(handleCombinedFilter);

  const openProspectusModal = (propertyName: string) => {
    setTargetProperty(propertyName);
    setPName('');
    setPMobile('');
    setPEmail('');
    setPErrors({});
    setPStatus('idle');
    setModalOpen(true);
  };

  const handleProspectusSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: typeof pErrors = {};
    let hasError = false;

    if (!pName.trim()) {
      errors.name = true;
      hasError = true;
    }
    if (!pMobile.trim()) {
      errors.mobile = true;
      hasError = true;
    }

    const email = pEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = true;
      hasError = true;
    } else if (!emailRegex.test(email)) {
      errors.emailInvalid = true;
      hasError = true;
    }

    setPErrors(errors);
    if (hasError) return;

    setPStatus('loading');
    try {
      const response = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: pName.trim(),
          mobile: pMobile.trim(),
          email: email,
          property: targetProperty
        })
      });

      const data = await response.json();
      if (data.success) {
        setPStatus('success');
        setTimeout(() => {
          setModalOpen(false);
          setPStatus('idle');
        }, 3000);
      } else {
        setPStatus('error');
        setPErrorText(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setPStatus('error');
      setPErrorText('Network error. Please try again.');
    }
  };

  return (
    <>
      {/* Advisory Page Hero */}
      <section className="showcase-hero-section" style={{ padding: '130px 0 2rem 0', backgroundColor: 'var(--bg-cream)' }}>
        <div className="showcase-container">
          <div className="division-showcase-box reveal-on-scroll">
            <div className="showcase-img-side">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Managed Office & Commercial Leasing" />
            </div>
            <div className="showcase-content-side">
              <div className="category-label">Bricx Services</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--primary-obsidian)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
                Leasing Advisory Services in Bangalore
              </h1>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-olive)', marginBottom: '1rem', textTransform: 'uppercase', border: 'none', padding: 0 }}>
                Tenant Representation. Lease Structuring. Long Term Fit.
              </h2>
              <p>
                Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in
                Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure. We
                represent occupiers, not landlords. Our leasing advisory covers Bangalore's key office corridors: Outer Ring
                Road, Whitefield, Koramangala, Electronic City, and central Bengaluru, and we bring the same discipline
                regardless of location or deal size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leasing Advisory Principles */}
      <section className="leasing-details-section section-padding reveal-on-scroll">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '4rem' }}>
            <div className="blog-category">Strategic Leasing Advisory</div>
            <h2>What We Cover</h2>
          </div>

          <div className="advisory-grid-2col">
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                More Than Offices
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Office space is not just desks and internet. It shapes how your team focuses, collaborates, and performs over
                time. An advertising agency in Hebbal was quoted Rs 5,000 per seat, but the all in cost was Rs 7,200 per seat
                after accounting for AC charges past 7 PM, weekend access fees, and mandatory private internet. Companies
                underestimate total occupancy cost by 20 to 30 percent when evaluating only headline rent figures. We conduct
                line item cost audits before recommending any space.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Terms That Matter
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Rent is one line item. Lock ins, exit clauses, fit out contributions, and escalation terms shape the real
                cost. A partnership firm took 50 seats based on one large client contract. When that client was lost, they
                were locked into paying for all 50 seats. Bricx.ai restructured the contract with a downsize clause, allowing
                them to reduce to 20 seats without penalty. We focus on the fine print that determines long term outcomes:
                not just the headline figure.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                For Every Budget
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Office space cost in Bangalore varies significantly by micro market. A 30 seater in Whitefield costs
                approximately Rs 1.8 lakh per month all inclusive. The same configuration in Koramangala runs Rs 3 lakh
                monthly. For 50 seater setups, HSR Layout pricing sits around Rs 2 lakh per month compared to Rs 4 to 4.5 lakh
                in Indiranagar. We show you exactly what changes across price points so you can choose what actually matters
                to your business.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                If Things Change
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Businesses evolve. A technology company took 1,200 seats with a rigid three year lock in. When business
                conditions changed, Bricx.ai restructured the agreement with staggered billing, allowing both parties to
                survive the downturn. We help you understand your flexibility for expansion, reduction, or early exit before
                you sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid & Filters */}
      <section className="listings-section section-padding" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          {/* Filter Panel */}
          <div className="carolwood-filter-panel reveal-on-scroll">
            <div className="carolwood-filter-group">
              <label htmlFor="search-location">Search Location / Property</label>
              <input 
                type="text" 
                id="search-location" 
                placeholder="Enter Location or Name..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>

            <div className="carolwood-filter-group range">
              <label>Minimum Cap Rate: <span id="lbl-cap-val">{minCapRate.toFixed(1)}%</span></label>
              <div className="range-wrapper">
                <span className="range-val-lbl">6.0%</span>
                <input 
                  type="range" 
                  id="filter-cap-rate" 
                  min="6.0" 
                  max="9.0" 
                  step="0.1" 
                  value={minCapRate}
                  onChange={(e) => setMinCapRate(parseFloat(e.target.value))}
                />
                <span className="range-val-lbl">9.0%</span>
              </div>
            </div>

            <div className="carolwood-filter-group range">
              <label>Minimum Occupancy: <span id="lbl-occ-val">{minOccupancy}%</span></label>
              <div className="range-wrapper">
                <span className="range-val-lbl">80%</span>
                <input 
                  type="range" 
                  id="filter-occupancy" 
                  min="80" 
                  max="100" 
                  step="1" 
                  value={minOccupancy}
                  onChange={(e) => setMinOccupancy(parseInt(e.target.value))}
                />
                <span className="range-val-lbl">100%</span>
              </div>
            </div>

            <button className="carolwood-clear-btn" onClick={clearFilters}>Clear Filters</button>
          </div>

          {/* Category Tabs */}
          <div className="filter-tabs reveal-on-scroll" id="filter-tabs" style={{ marginBottom: '3.5rem' }}>
            <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>Show All</button>
            <button className={`filter-btn ${activeCategory === 'Office' ? 'active' : ''}`} onClick={() => setActiveCategory('Office')}>Office</button>
            <button className={`filter-btn ${activeCategory === 'Retail' ? 'active' : ''}`} onClick={() => setActiveCategory('Retail')}>Retail</button>
            <button className={`filter-btn ${activeCategory === 'Mixed-Use' ? 'active' : ''}`} onClick={() => setActiveCategory('Mixed-Use')}>Mixed Use</button>
            <button className={`filter-btn ${activeCategory === 'Industrial' ? 'active' : ''}`} onClick={() => setActiveCategory('Industrial')}>Industrial</button>
          </div>

          {/* Off-Market Listings Grid */}
          <div className="listings-grid reveal-on-scroll" id="listings-grid">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="listing-card stagger-item" data-category={listing.category}>
                <div className="listing-img-wrapper">
                  {listing.exclusive && <span className="listing-exclusive-tag">Private Exclusive</span>}
                  <img src={listing.image} alt={listing.imageAlt} className="listing-img" />
                </div>
                <div className="listing-body">
                  <div className="listing-location">{listing.location}</div>
                  <h3>{listing.name}</h3>
                  <p className="listing-description">{listing.description}</p>
                  <div className="listing-metrics">
                    <div className="metric-box">
                      <div className="metric-label">Cap Rate</div>
                      <div className="metric-value">{listing.capRate}%</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">NOI (Annual)</div>
                      <div className="metric-value">{listing.noi}</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">Occupancy</div>
                      <div className="metric-value">{listing.occupancy}%</div>
                    </div>
                  </div>
                  <button className="listing-btn" onClick={() => openProspectusModal(listing.name)}>Request Prospectus</button>
                </div>
              </div>
            ))}
            {filteredListings.length === 0 && (
              <p className="no-listings" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                No listings match the selected filter criteria.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-white)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Locations</div>
            <h2>Where We Work</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              There is no universal best location, only the right micro market for your specific business model. Software
              companies in Whitefield and Outer Ring Road benefit from talent density and tech culture at Rs 6,000 to 10,000
              per seat for managed configurations. Non IT startups in Koramangala access central location and Gen Z talent at
              Rs 8,000 to 25,000 per seat. BPO and support operations in Kudlu Gate, JP Nagar, and Silk Board benefit from
              proximity to affordable employee housing and public transport. North Bangalore, Hebbal and surrounding areas,
              has seen the sharpest rent increases over the last 12 months driven by airport proximity and infrastructure
              development. Bricx.ai's first question when founders ask where to look is always: what industry are you in?
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Partnerships</div>
            <h2>Who We Work With</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              Startups scaling their teams. Mid sized companies making significant office decisions. Enterprise clients
              requiring managed office and coworking advisory across Bengaluru. We provide corporate real estate advisory to
              occupiers who want workspace consulting grounded in strategy, not inventory.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq-section" style={{ backgroundColor: 'var(--bg-cream)', padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="blog-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>Clear Answers</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-group">
            {/* FAQ 1 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>How much does office space cost in Bangalore?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  Office space cost in Bangalore varies significantly by location and format, with Koramangala commanding premium rates compared to Whitefield or HSR Layout. A 30 seater office in Whitefield costs approximately Rs 1.8 lakh per month all inclusive (Rs 6,000 per seat), while the same setup in Koramangala runs Rs 3 lakh monthly (Rs 10,000 per seat). For 50 seater configurations, HSR Layout pricing sits around Rs 2 lakh per month compared to Rs 4-4.5 lakh in Indiranagar, representing a 100%+ cost differential for identical capacity. A recent client, Adpark (an advertising agency in Hebbal), was quoted Rs 5,000 per seat but discovered the all in cost was Rs 7,200 per seat after accounting for excluded charges: Rs 1,000 per hour for AC usage past 7 PM, weekend AC, separate tea/coffee charges, and mandatory private internet. Companies underestimate total occupancy cost by 20-30% when evaluating only headline rent figures. Most companies negotiate only on per seat or per square foot pricing without addressing operational components that should be included: backup internet connectivity, uninterrupted power backup, washroom maintenance protocols, carpet cleaning schedules, and after hours access terms. Bricx.ai conducts line item cost audits for Bangalore office space to model complete financial impact (including deposits, lock in implications, CAM charges, and operational surcharges) before recommending any managed office or coworking space.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>What's the difference between coworking and managed office space?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  Coworking space in Bangalore suits teams under 10-15 people who need flexibility and lower upfront costs, while managed office space becomes operationally and financially superior for teams exceeding 15-20 seats who require dedicated environments and operational control. Coworking models in Bangalore charge per seat with minimal lock in, offering hot desks, shared conference rooms, and flexible monthly memberships. This works for early stage startups and small teams. Managed office space provides dedicated floors or wings with multi year commitments, customizable layouts, and exclusive amenities. The operational shift becomes critical around 10-15 seats because coworking coordination challenges compound as teams grow. Share Foods, a grocery app in Indiranagar, took 20 coworking seats. Morning rush periods created seating chaos: accounts sat on one floor, sales on another, operations scattered throughout the building. When the sales team needed payment confirmation from accounts or legal required operations coordination, physical separation destroyed the core value proposition of working from office: real time collaboration. Bricx.ai recommended transitioning to managed office space where departments could operate cohesively. When founders ask Bricx.ai 'coworking or managed office in Bangalore?', the evaluation begins with growth trajectory (hiring plans for 6-12 months), work confidentiality requirements (data security concerns favor dedicated spaces), work from office vs hybrid models, and funding status.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>How long does it take to find office space in Bangalore?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  Finding office space in Bangalore typically requires 30-45 days for coworking or managed office placements and 60-90 days for traditional lease transactions, assuming clear requirements and efficient decision making authority. Bricx.ai closed a deal for Green Box in one week. The client needed immediate transition from work from home to office operations. Bricx.ai contacted Bangalore coworking and managed office providers, conducted site visits across 6 options in Whitefield and HSR, presented 3 viable candidates, negotiated terms on 2 finalists, and closed within 7 days. Speed was possible because requirements were defined, decision authority was clear, and budget parameters were realistic. Share Market (a software marketplace) needed 420-425 seats. Mid management identified preferred options in Koramangala and Outer Ring Road. Decision makers were overseas, unresponsive, and disconnected from ground realities. By the time approvals came through, preferred inventory was gone. Weak financials further delayed deposit processing. The deal eventually closed, but timeline delays cost the client preferred locations in Bangalore's competitive office space market. Companies that plan 90-120 days ahead of move in dates in Bangalore secure better terms, preferred locations, and negotiating leverage.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>Do you charge companies for leasing advisory?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  Bricx.ai operates on a transparent advisory model. For leasing mandates, our compensation comes from property owners and operators, not from occupiers. This means companies receive our advisory services at no direct cost while benefiting from independent recommendations aligned with their long term interests rather than transaction velocity. Unlike traditional brokers incentivized to close any deal quickly, Bricx.ai is compensated for successful placements that meet specific criteria, not for volume. Our focus remains on ensuring the space, terms, and structure align with the client's operational and financial objectives. Bricx.ai maintains standardized transaction fees across all coworking providers, managed office operators, and property sellers. WeWork, Beehive, Novel Office, IndiQube, the commission is identical. This removes the incentive to push clients toward whichever property pays the highest referral fee. For investment and land advisory mandates serving HNIs and institutional clients, Bricx.ai structures engagement fees based on mandate complexity and transaction value. The seller or landlord typically offers 2% commission for successful referrals. Clarity on commercial terms is established during initial discussions, ensuring no ambiguity about how Bricx.ai is compensated or where incentives lie. Bricx.ai is transparent about risks and issues because the firm is building for the long term, not making quick transactions and exiting.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>Which areas in Bangalore are best for office space?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  There's no universal 'best' location, only the right micro market for your specific business model. Most brokers recommend based on what earns them the highest commission. Premium locations like Koramangala and MG Road sound impressive, but Bricx.ai has watched companies fail there because they didn't match the operational reality. Software companies: Whitefield and Outer Ring Road have built the ecosystem: talent density, tech culture, Rs 4,000-10,000 per seat pricing. The atmosphere supports scaling engineering teams. Non IT startups: Koramangala works if you can justify Rs 8,000-25,000 per seat. Central location, Gen Z talent pool, strong brand signal. But if cost discipline matters, HSR and Hebbal offer better rent to talent ratios with improving connectivity. BPO/support operations: Kudlu Gate, JP Nagar, Silk Board. Why? Because location strategy isn't just about your office, it's about where your team can afford PGs, find reasonable food, and access public transport. Bricx.ai has seen this work: BPOC scaled successfully in Kudlu Gate because the entire micro market supported their employee economics. Bricx.ai has also seen a BPO fail in MG Road within 8 months because employees were spending Rs 15K on PGs in Indiranagar when they could find Rs 6K options near Kudlu Gate. The emerging play: North Bangalore (Hebbal and surrounding areas) has seen the sharpest rent increases over the last 12 months due to airport proximity and infrastructure development. Bricx.ai's first question when founders ask 'Where should I look?': What industry are you in? Because micro markets serve specific business models.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
              <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>What should I look for when evaluating office space?</h3>
                <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
              </button>
              <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                  Most companies evaluate office space backwards. They obsess over hotspot locations and premium aesthetics while ignoring the structural factors that determine whether the space actually works long term. A client was convinced MG Road was the only viable location. New to Bangalore, he'd visited the area twice and assumed brand addresses guaranteed business success. His actual needs (backend support operation, cost discipline, proximity to affordable employee housing) pointed to HSR Layout. Three years later, he's expanded twice in HSR because the micro market supported his growth. Premium addresses don't create business outcomes. Strategic fit does. A partnership firm took 50 seats based on one large client contract. Twelve months later, they lost that client. One partner resigned. Revenue collapsed, but the lease locked them into paying for all 50 seats. Bricx.ai restructured the contract with a downsize clause, allowing them to drop to 20 seats without penalty. Most companies don't negotiate expansion and contraction rights upfront. When business conditions shift (and they always do), rigid agreements become liabilities. A software company took 15 seats in Koramangala at what appeared to be below market rates. Post occupancy, they discovered per use charges: AC after 6 PM, weekend access, electricity, tea, coffee, printouts. The 'cheap' option became 40% more expensive than alternatives with transparent all inclusive pricing. Companies don't outgrow spaces because they miscalculated headcount by 20%. They outgrow spaces because they didn't build contractual flexibility into agreements. A company took 1,200 seats with a rigid three year lock in. COVID decimated their client base. Bricx.ai restructured the agreement with staggered billing (50% of seats for three months, full occupancy after that) allowing both parties to survive the downturn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospectus Modal Popup */}
      {modalOpen && (
        <>
          <div className="prospectus-modal-overlay open" onClick={() => setModalOpen(false)}></div>
          <div className="prospectus-modal open" role="dialog" aria-modal="true" aria-labelledby="prospectus-modal-title">
            <div className="prospectus-modal-header">
              <h3 id="prospectus-modal-title">Request Prospectus</h3>
              <button type="button" className="prospectus-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="prospectus-modal-body">
              <div className="property-badge" id="prospectus-property-badge">
                <span className="badge-label">Asset:</span> <span className="badge-value" id="prospectus-property-name">{targetProperty}</span>
              </div>

              <div className="advisor-info-box">
                <div className="advisor-avatar">KS</div>
                <div className="advisor-details">
                  <h4>Karan Singh</h4>
                  <p>Principal Advisor, Corporate Real Estate</p>
                </div>
              </div>

              <p className="modal-desc">
                Due to owner confidentiality mandates, detailed financial disclosures, lease abstracts, and tenant details are secured. Please provide your business details below to unlock the complete prospectus materials.
              </p>

              <form id="prospectus-modal-form" onSubmit={handleProspectusSubmit} noValidate>
                <div className={`modal-form-group ${pErrors.name ? 'has-error' : ''}`} id="p-grp-name">
                  <label htmlFor="prospectus-name">Full Name <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="prospectus-name" 
                    className="modal-form-control" 
                    placeholder="Your full name"
                    value={pName}
                    onChange={(e) => setPName(e.target.value)}
                  />
                  <span className="error-msg">Please enter your full name.</span>
                </div>

                <div className={`modal-form-group ${pErrors.mobile ? 'has-error' : ''}`} id="p-grp-mobile">
                  <label htmlFor="prospectus-mobile">Mobile Number <span className="required">*</span></label>
                  <input 
                    type="tel" 
                    id="prospectus-mobile" 
                    className="modal-form-control" 
                    placeholder="Your mobile number"
                    value={pMobile}
                    onChange={(e) => setPMobile(e.target.value)}
                  />
                  <span className="error-msg">Please enter your mobile number.</span>
                </div>

                <div className={`modal-form-group ${pErrors.email || pErrors.emailInvalid ? 'has-error' : ''}`} id="p-grp-email">
                  <label htmlFor="prospectus-email">Business Email <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="prospectus-email" 
                    className="modal-form-control" 
                    placeholder="Your business email"
                    value={pEmail}
                    onChange={(e) => setPEmail(e.target.value)}
                  />
                  <span className="error-msg" id="prospectus-email-error-msg">
                    {pErrors.emailInvalid ? 'Please enter a valid email address.' : 'Please enter your email address.'}
                  </span>
                </div>

                <div className="prospectus-modal-actions">
                  <button type="submit" className="modal-btn-submit" id="prospectus-submit-btn" disabled={pStatus === 'loading'}>
                    {pStatus === 'loading' ? '...' : 'Request Access'}
                  </button>
                </div>
              </form>
            </div>

            {/* State Overlay */}
            <div className={`modal-state-overlay ${pStatus !== 'idle' ? 'open-overlay' : ''} ${pStatus === 'loading' ? 'state-is-loading' : pStatus === 'success' ? 'state-is-success' : pStatus === 'error' ? 'state-is-error' : ''}`} id="prospectus-modal-state-overlay">
              {pStatus === 'loading' && (
                <div className="state-loading">
                  <div className="spinner"></div>
                  <p>Submitting...</p>
                </div>
              )}
              {pStatus === 'success' && (
                <div className="state-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Request Submitted</h3>
                  <p>✓ NDA request logged. Our investment principal will email your secure credentials within 1 hour.</p>
                </div>
              )}
              {pStatus === 'error' && (
                <div className="state-error">
                  <div className="success-icon" style={{ color: '#c93b3b' }}>
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <h3>Submission Failed</h3>
                  <p id="prospectus-modal-error-text">{pErrorText}</p>
                  <button type="button" className="btn-retry" id="prospectus-modal-retry-btn" onClick={() => setPStatus('idle')}>Retry</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
